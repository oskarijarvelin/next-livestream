import { useContext } from 'react'
import AppContext from '../context'
import fetch from 'isomorphic-unfetch'
import useSWR from 'swr';
import YouTube from 'react-youtube'
import { Flex, Box, Text, Image, Heading } from '@chakra-ui/react'
import Layout from '../components/Layout'
import LoginForm from '../components/LoginForm'

async function fetcher(url) {
    const res = await fetch(url);
    const json = await res.json();
    return json;
  }

export default function Index() {
    const { login } = useContext(AppContext)
    const { data, error } = useSWR('https://geolocation-db.com/json/', fetcher);
    const opts = {
        height: '923',
        width: '1640',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
          showinfo: 0,
          controls: 0,
          autohide: 1,
          modestbranding: 1,
          fs: 0
        },
    };

    function _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.playVideo();
    }

    return (
        <Layout title="Livestream" desc="Next.js sivusto" url="/" img="/kansi-full.png">

            {login &&
                <Flex maxW="1640px" mt={{base: "0", lg: "6rem"}} mb={{base: "1.5rem", lg: "3rem"}} mx="auto" px="0" wrap="wrap" pos="relative" boxShadow="lg">
                    <YouTube videoId="O565z7DJq6g" className="yt__vid" containerClassName="yt" opts={opts} onReady={_onReady} />
                    
                    
                </Flex>
            }

            {!login &&
                <Flex maxW="container.xl" mt={{base: "0", lg: "6rem"}} mb={{base: "1.5rem", lg: "3rem"}} mx="auto" px="0" wrap="wrap" pos="relative" boxShadow="lg">
                    <Image src="banner.png" alt="Viestintäpäivä Plussa" />
                </Flex>
            }

            <Flex maxW="container.xl" py={{base: "3rem", lg: "6rem"}} mx="auto" px={{base: "1rem", lg: "0"}} wrap="wrap" >

                <Box w={{base: "100%", lg: "calc(50% - 3rem)"}} flex={{base: "100%", lg: "calc(50% - 3rem)"}} mb={{base: "3rem", lg: "0rem"}} mr={{base: "0rem", lg: "3rem"}}>
                    
                    {login &&
                        <>
                            <Heading w="100%" flex="100%" mt="0" mb="3rem">KESKUSTELU</Heading>
                            <iframe src='https://go.arena.im/embed/chat/oskari-jarvelin/oskari-jarvelin-global' frameBorder="0" style={{border: 0, width: "1px", minWidth: "100%", height: "930px", borderRadius: "4px"}}></iframe>
                        </>
                    }
                    {!login &&
                        <>
                            <Heading w="100%" flex="100%" mt="0" mb="3rem">KIRJAUDU</Heading>
                            <LoginForm ip={data?.IPv4} city={data?.city} />
                        </>
                    }
                </Box>  

                <Box w={{base: "100%", lg: "calc(50% - 3rem)"}} flex={{base: "100%", lg: "calc(50% - 3rem)"}} ml={{base: "0rem", lg: "3rem"}}>

                    <Heading w="100%" flex="100%" mt="0" mb="3rem" pl="1rem">OHJELMA</Heading>

                    <Box bg="current" p="1rem">
                        <Text fontWeight="bold" mb="0.5rem">9.00 Tilaisuuden avaus</Text>
                        <Text mb="0.5rem">Toimitusjohtaja, FT <i>Elina Melgin</i>, ProCom – Viestinnän ammattilaiset ja FT <i>Ulla Järvi</i>, Suomen tiedetoimittajien liiton pääsihteeri</Text>
                        <Text mb="0.5rem">Kriisikonsultti ja Tekirin hallituksen puheenjohtaja <i>Harri Saukkomaa</i></Text>
                        <Text>Entinen ministeri ja puoluejohtaja <i>Tuija Brax</i></Text>
                    </Box>

                    <Box p="1rem">
                        <Text fontWeight="bold" mb="0.5rem">10.00 Kommenttipuheenvuoro median näkökulmasta: toimittaja ajojahdin kohteena</Text>
                        <Text>Väitöskirjatutkija, Tampereen yliopisto <i>Ilmari Hiltunen</i></Text>
                    </Box>

                    <Box p="1rem">
                        <Text fontWeight="bold">10.20 Keskustelu aamupäivän alustajien ja yleisön välillä</Text>
                    </Box>

                    <Box p="1rem">
                        <Heading size="md" opacity="60%">10.45 KAHVITAUKO</Heading>
                    </Box>

                    <Box p="1rem">
                        <Text fontWeight="bold" mb="0.5rem">11.00 Nuoret kriisin keskiössä</Text>
                        <Text>1. Case Stavanger, Norway: Nuoriso pandemian kriisiviestinnän kohteena</Text>
                        <Text mb="0.5rem"><i>Eirik Haglund</i>, Communication Advisor, City of Stavanger, Norway</Text>
                        <Text>2. Case Nuorisotutkimusseura: Nuoret ja kriisi – koettelemista, kolhimista ja ongelmien kiihdyttämistä</Text>
                        <Text>FT <i>Tomi Kiilakoski</i>, vastaava tutkija, Nuoristotutkimusverkosto</Text>
                    </Box>

                    <Box p="1rem">
                        <Heading size="md" opacity="60%">12.00–13.00 LOUNAS</Heading>
                    </Box>

                    <Box p="1rem">
                        <Text fontWeight="bold" mb="0.5rem">13.00 Kriisi, yksilö ja median vastuu</Text>
                        <Text>Alustus <i>Ulla Järvi</i> sekä vuoropuhelu toimittaja <i>Heljä Salonen</i>, Iltalehti ja toimituspäällikkö <i>Marjo Oikarinen</i>, Lännen media</Text>
                    </Box>

                    <Box p="1rem">
                        <Text fontWeight="bold" mb="0.5rem">14.00 Suomi ja globaalit kriisit</Text>
                        <Text>Alustus <i>FT Elina Melgin</i> sekä vuoropuhelu ulkoministeriön Kehityspoliittisen osaston apulaisosastopäällikkö <i>Titta Maja</i> & Työ- ja elinkeinoministeriön viestintäjohtaja & ProComin hallituksen jäsen <i>Mikko Koivumaa</i></Text>
                    </Box>

                    <Box p="1rem">
                        <Heading size="md" opacity="60%">14.45 KAHVITAUKO</Heading>
                    </Box>

                    <Box p="1rem">
                        <Text fontWeight="bold" mb="0.5rem">15.10 Paneelikeskustelu: Kenen kriisi? Miltä näyttävät Pohjoisen Suomen keskeiset kehityshankkeet poliittisessa ja sosioekonomisessa kontekstissa? </Text>
                        <Text mb="0.5rem">Paneelissa mukana Lapin kauppakamarin toimitusjohtaja <i>Timo Rautajoki</i> ja Kemin kaupunginjohtaja <i>Matti Ruotsalainen</i> ja Kalevan Pohjois-Suomen uutisten toimittaja <i>Anja Harju</i>.</Text>
                        <Text>Paneelin juontaa Oulun yliopiston viestintäpäällikkö <i>Elina Mattila-Niemi</i></Text>
                    </Box>

                    <Box p="1rem">
                        <Text fontWeight="bold">16.00 Yhteenveto ja päätössanat</Text>
                    </Box>

                </Box>

            </Flex>

        </Layout>
    )
}
import { Flex, Box, Text, Heading, Image } from '@chakra-ui/react'
import Layout from '../components/Layout'

function Index() {
    return (
        <Layout title="Livestream" desc="Next.js sivusto" url="/" img="/kansi-full.png">

            <Flex maxW="container.xl" mt={{base: "0", lg: "6rem"}} mb={{base: "1.5rem", lg: "3rem"}} mx="auto" px="0" wrap="wrap" pos="relative" boxShadow="lg">
                <Box pos="relative" w="100%" h="0" pt="56.25%">
                    <iframe width="1280" height="720" src="https://www.youtube.com/embed/i886lr31cHc?autoplay=1&showinfo=0&controls=0&autohide=1&modestbranding=1&fs=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" style={{position: "absolute", left: 0, top: 0, width: "100%", height: "100%"}}></iframe>
                </Box>
                
                <Box pos="absolute" w="100%" h="100%"></Box>
            </Flex>

            <Flex maxW="container.xl" pb={{base: "3rem", lg: "6rem"}} mx="auto" px={{base: "1rem", lg: "0"}} wrap="wrap" >

                <Flex w={{base: "100%", lg: "calc(50% - 1.5rem)"}} flex={{base: "100%", lg: "calc(50% - 1.5rem)"}} mb={{base: "1.5rem", lg: "0rem"}} mr={{base: "0rem", lg: "1.5rem"}} boxShadow="base">
                    <iframe width="1280" height="720" src="https://www.youtube.com/live_chat?is_popout=1&v=i886lr31cHc&embed_domain=next-livestream.vercel.app"></iframe>
                </Flex>

                <Flex w={{base: "100%", lg: "calc(50% - 1.5rem)"}} flex={{base: "100%", lg: "calc(50% - 1.5rem)"}} ml={{base: "0rem", lg: "1.5rem"}} boxShadow="base">
                    <iframe src='https://go.arena.im/embed/chat/oskari-jarvelin/oskari-jarvelin-global' style={{border: 0, width: "1px", minWidth: "100%", height: "720px", borderRadius: "4px"}}></iframe>
                </Flex>

            </Flex>

            <Box w="100%" p="0" borderTop="1px solid #DEDEDE"></Box>

            <Flex maxW="container.xl" py={{base: "3rem", lg: "6rem"}} mx="auto" px={{base: "1rem", lg: "0"}} wrap="wrap">
                <Heading w="100%" flex="100%" mt="0" mb="3rem" align="center">OHJELMA</Heading>
                <Box w={{base: "100%", lg: "calc(50% - 1.5rem)"}} flex={{base: "100%", lg: "calc(50% - 1.5rem)"}} mb={{base: "1.5rem", lg: "0rem"}} mr={{base: "0rem", lg: "1.5rem"}}>
                    <Heading size="lg" mb="1rem">AAMUPÄIVÄ</Heading>
                    <Text fontWeight="bold" mt="1rem">9.00 Tilaisuuden avaus</Text>
                    <Text>Toimitusjohtaja, FT <i>Elina Melgin</i>, ProCom – Viestinnän ammattilaiset ja FT <i>Ulla Järvi</i>, Suomen tiedetoimittajien liiton pääsihteeri</Text>
                    <Text>Kriisikonsultti ja Tekirin hallituksen puheenjohtaja <i>Harri Saukkomaa</i></Text>
                    <Text>Entinen ministeri ja puoluejohtaja <i>Tuija Brax</i></Text>
                    <Text fontWeight="bold" mt="1rem">10.00 Kommenttipuheenvuoro median näkökulmasta: toimittaja ajojahdin kohteena</Text>
                    <Text>Väitöskirjatutkija, Tampereen yliopisto <i>Ilmari Hiltunen</i></Text>
                    <Text fontWeight="bold" mt="1rem">10.20 Keskustelu aamupäivän alustajien ja yleisön välillä</Text>
                    <Text fontWeight="bold" mt="1rem">10.45 Kahvitauko</Text>
                    <Text fontWeight="bold" mt="1rem">11.00 Nuoret kriisin keskiössä</Text>
                    <Text>1. Case Stavanger, Norway: Nuoriso pandemian kriisiviestinnän kohteena</Text>
                    <Text><i>Eirik Haglund</i>, Communication Advisor, City of Stavanger, Norway</Text>
                    <Text>2. Case Nuorisotutkimusseura: Nuoret ja kriisi – koettelemista, kolhimista ja ongelmien kiihdyttämistä</Text>
                    <Text>FT <i>Tomi Kiilakoski</i>, vastaava tutkija, Nuoristotutkimusverkosto</Text>
                    <Heading size="md" mt="1rem">12.00–13.00 LOUNAS</Heading>
                </Box>
 
                <Box w={{base: "100%", lg: "calc(50% - 1.5rem)"}} flex={{base: "100%", lg: "calc(50% - 1.5rem)"}} ml={{base: "0rem", lg: "1.5rem"}}>
                    <Heading size="lg" mb="1rem">ILTAPÄIVÄ</Heading>
                    <Text fontWeight="bold" mt="1rem">13.00 Kriisi, yksilö ja median vastuu</Text>
                    <Text>Alustus <i>Ulla Järvi</i> sekä vuoropuhelu toimittaja <i>Heljä Salonen</i>, Iltalehti ja toimituspäällikkö <i>Marjo Oikarinen</i>, Lännen media</Text>
                    <Text fontWeight="bold" mt="1rem">14.00 Suomi ja globaalit kriisit</Text>
                    <Text>Alustus <i>FT Elina Melgin</i> sekä vuoropuhelu ulkoministeriön Kehityspoliittisen osaston apulaisosastopäällikkö <i>Titta Maja</i> & Työ- ja elinkeinoministeriön viestintäjohtaja & ProComin hallituksen jäsen <i>Mikko Koivumaa</i></Text>
                    <Text fontWeight="bold" mt="1rem">14.45 Kahvitauko</Text>
                    <Text fontWeight="bold" mt="1rem">15.10 Paneelikeskustelu: Kenen kriisi? Miltä näyttävät Pohjoisen Suomen keskeiset kehityshankkeet poliittisessa ja sosioekonomisessa kontekstissa? </Text>
                    <Text>Paneelissa mukana Lapin kauppakamarin toimitusjohtaja <i>Timo Rautajoki</i> ja Kemin kaupunginjohtaja <i>Matti Ruotsalainen</i> ja Kalevan Pohjois-Suomen uutisten toimittaja <i>Anja Harju</i>.</Text>
                    <Text>Paneelin juontaa Oulun yliopiston viestintäpäällikkö <i>Elina Mattila-Niemi</i></Text>
                    <Text fontWeight="bold" mt="1rem">16.00 Yhteenveto ja päätössanat</Text>
                </Box>

            </Flex>

        </Layout>
    )
}
  
export default Index
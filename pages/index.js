import { Flex, Box, Text, Heading, Image } from '@chakra-ui/react'
import Layout from '../components/Layout'

function Index() {
    return (
        <Layout title="Livestream" desc="Next.js sivusto" url="/" img="/kansi-full.png">

            <Flex maxW="container.xl" py={{base: "3rem", lg: "6rem"}} mx="auto" px="0" wrap="wrap">
                <Flex justify="center" direction="column" minH="100%" w={{base: "100%", lg: "50%"}} flex={{base: "100%", lg: "50%"}} py="0" pl={{base: "1rem", lg: "2rem", xl: "0"}} pb={{base: "3rem", lg: "0"}} pr={{base: "1rem", lg: "3rem", xl: "6rem"}}>
                    <Heading as="h1" fontSize={{base: "2xl", lg: "4xl"}} pb={{base: "1.5rem", lg: "3rem"}} lineHeight="1.5">Livestream</Heading>
                    <Text fontSize={{base: "md", sm: "lg", lg: "xl"}}>Livestream on Progressive Web Application -alusta vahvasti brändätyille YouTube-livestriimeille toteutettuna Next.js:llä ja Chakra UI:lla.</Text>
                </Flex>

                <Box w={{base: "100%", lg: "50%"}} flex={{base: "100%", lg: "50%"}} p="0">
                    <Image src="pic1.jpg" alt="Photo by Jonas Jacobsson." title="Photo by Jonas Jacobsson." mx="auto"/>
                </Box>
            </Flex>

            <Flex maxW="container.xl" pb={{base: "3rem", lg: "6rem"}} mx="auto" px="0" wrap="wrap" pos="relative">
                <iframe width="1280" height="720" src="https://www.youtube.com/embed/bWYkZRKaP0w?autoplay=1&showinfo=0&controls=0&autohide=1&modestbranding=1&fs=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                <Box pos="absolute" w="100%" h="100%"></Box>
            </Flex>

            <Flex maxW="container.xl" pb={{base: "3rem", lg: "6rem"}} mx="auto" px="0" wrap="wrap">
                <iframe width="700" height="200" src="https://www.youtube.com/live_chat?is_popout=1&v=bWYkZRKaP0w&embed_domain=next-livestream.vercel.app"></iframe>
            </Flex>

        </Layout>
    )
}
  
export default Index
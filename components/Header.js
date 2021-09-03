import { Flex, Box, Wrap, WrapItem, Spacer, Text, Image, Heading, Link } from '@chakra-ui/react'
import NextLink from 'next/link'

export default function Header() {
    return (
        <Flex bg="bg" color="body" borderBottom="1px solid #DEDEDE" alignItems="center" justifyContent={{base: "flex-start", md: "space-between"}} grow={{base: 0, md: 1}} wrap="wrap">
            <Box align="center" borderBottom={{base: "1px solid #DEDEDE", md: "none"}} px={{base: "4", lg: "8"}} py="4" flex={{base: "100%", md: "auto"}}>
                <Heading as="p" fontSize={{base: "24px", sm: "28px", lg: "32px", xl: "36px"}} textAlign={{base: "center", md: "left"}}>
                    <NextLink href="/" passHref>
                        <Link _hover={{textDecoration: "none"}}>
                            Viestintäpäivä Plussa
                        </Link>
                    </NextLink>
                </Heading>
            </Box>
            <Box pl="4" py="4" flex={{base: "100%", md: "unset"}}>
                <Text size="xs" fontSize="14px" fontWeight="600" opacity="60%" textAlign={{base: "center", md: "left"}}>Yhteistyökumppanit</Text>
                <Flex alignItems="center" justifyContent={{base: "center", md: "flex-start"}}>
                    <Image src="stl.svg" h="60px" maxH="60px" maxW="50%" alt="Suomen tiedetoimittajain liiton logo" />
                    <Image src="avidly.svg" h="80px" maxH="80px" maxW="50%" alt="Avidlyn logo" />
                </Flex>
            </Box>
        </Flex>
  );
}
import { Flex, Box, Wrap, WrapItem, Spacer, Text, Image, Heading, Link } from '@chakra-ui/react'
import NextLink from 'next/link'

export default function Header() {
    return (
        <Flex bg="bg" color="body" borderBottom="1px solid #DEDEDE">
            <Wrap align="center" px={{base: "4", lg: "8"}} py="4">
                <WrapItem py={{base: "2", md: "2", lg: "4", xl:"8"}}>
                    <Heading as="p" fontSize={{base: "16px", sm: "20px", md: "24px", lg: "32px", xl: "36px"}}>
                        <NextLink href="/" passHref>
                            <Link _hover={{textDecoration: "none"}}>
                                Viestintäpäivä Plussa
                            </Link>
                        </NextLink>
                    </Heading>
                </WrapItem>
            </Wrap>
            <Spacer />
            <Box px={{base: "4", lg: "8"}} py="4">
                <Text size="xs" fontSize="14px" fontWeight="600" mb="1rem" opacity="60%">Yhteistyökumppanit</Text>
                <Image src="stl.svg" h="60px" maxH="60px" alt="Suomen tiedetoimittajain liiton logo" />
            </Box>
        </Flex>
  );
}
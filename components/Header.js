import { Flex, Wrap, WrapItem, Spacer, Button, Heading, Menu, MenuButton, MenuList, MenuGroup, MenuItem, Icon, Link } from '@chakra-ui/react'
import { GoChevronDown } from 'react-icons/go'
import NextLink from 'next/link'

export default function Header() {
    return (
        <Flex bg="bg" color="body" w="100%" pos="fixed" top="0" left="0" borderBottom="1px solid #DEDEDE" zIndex="99">
            <Wrap align="center" px={{base: "4", lg: "8"}} py="4">
                <WrapItem py={{base: "2", md: "2", lg: "4", xl:"8"}}>
                    <Heading as="p" fontSize={{base: "16px", sm: "20px", md: "24px", lg: "32px", xl: "36px"}}>
                        <NextLink href="/" passHref>
                            <Link _hover={{textDecoration: "none"}}>
                                Livestream
                            </Link>
                        </NextLink>
                    </Heading>
                </WrapItem>
            </Wrap>
            <Spacer />
            <Flex align="center" px={{base: "4", lg: "8"}} py="4">
                <Menu>
                    <MenuButton as={Button} bg="bg" border="2px solid #FCFCFC" borderRadius="24px" height={{base: "32px", md: "40px", xl: "48px"}} px={{base: "12px", md: "16px", xl: "24px"}} _hover={{ bg: "#DEDEDE" }} _active={{bg: "#DEDEDE", borderColor: "#DEDEDE" }} _focus={{border: "2px solid #DEDEDE"}} rightIcon={<Icon as={GoChevronDown} />}>
                        <Heading as="p" size="sm" fontSize={{base: "12px", md: "14px", lg: "16px"}}>Striimit</Heading>
                    </MenuButton>
                    <MenuList>
                        <MenuGroup title="Ryhmä 1">
                            <MenuItem pl="6">
                                <NextLink href="/striimi/1" passHref>
                                    <Link>Livestream 1</Link>
                                </NextLink>
                            </MenuItem>
                        </MenuGroup>
                    </MenuList>
                </Menu>
            </Flex>
        </Flex>
  );
}
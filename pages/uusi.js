import { useContext, useState } from 'react'
import AppContext from '../context'
import sha1 from 'sha1'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { Flex, Box, Text, Heading, Stack, FormControl, InputGroup, InputLeftElement, InputRightElement, Input, Button, Icon } from '@chakra-ui/react'
import Layout from '../components/Layout'
import LoginForm from '../components/LoginForm'
import { HiOutlineMail } from 'react-icons/hi'

export default function Uusi() {
    const { login } = useContext(AppContext)
    const [pass, setPass] = useState(false)
    const [copied, setCopied] = useState(false)
    const addUser = event => {
        event.preventDefault() 
        setPass( sha1(event.target.email.value.toLowerCase()).toLowerCase().split("").reverse().join("") )
        setCopied(false)
    }

    const copyPass = event => {
        setCopied(true)
    }

    return (
        <Layout title="Livestream" desc="Next.js sivusto" url="/" img="/kansi-full.png">

            {!login &&
                <Flex maxW="460px" mt={{base: "0", lg: "6rem"}} mb={{base: "1.5rem", lg: "3rem"}} mx="auto" px="0" wrap="wrap">
                    <Heading w="100%" flex="100%" mt="0" mb="3rem">KIRJAUDU</Heading>
                    <LoginForm adminOnly={true} />
                </Flex>
            }
            {login &&
                <Flex maxW="container.xl" py={{base: "3rem", lg: "6rem"}} mx="auto" px={{base: "1rem", lg: "0"}} wrap="wrap" >

                    <Heading w="100%" flex="100%" mt="0" mb="3rem">LISÄÄ KÄYTTÄJÄ</Heading>

                    <Box w={{base: "100%", lg: "calc(50% - 3rem)"}} flex={{base: "100%", lg: "calc(50% - 3rem)"}} mb={{base: "3rem", lg: "0rem"}} mr={{base: "0rem", lg: "3rem"}}>
                        <Text fontWeight="bold" pb="2">Sähköpostiosoite</Text>
                        <form onSubmit={addUser}>
                            <Stack spacing={4}>    
                                <FormControl id="email" name="email">
                                    <InputGroup>
                                        <InputLeftElement pointerEvents="none" children={<Icon as={HiOutlineMail} color="gray.500"/>} />
                                        <Input type="email" placeholder="Sähköpostiosoite" />
                                    </InputGroup>
                                </FormControl>
                                <Button type="submit" bg="current" color="body" size="md">
                                    Generoi salasana
                                </Button>
                            </Stack>
                        </form>
                    </Box>  

                    <Box w={{base: "100%", lg: "calc(50% - 3rem)"}} flex={{base: "100%", lg: "calc(50% - 3rem)"}} ml={{base: "0rem", lg: "3rem"}}>
                        <Text fontWeight="bold" pb="2">Salasana</Text>
                        {pass &&
                            <InputGroup size="md">
                                <Input
                                    pr="5rem"
                                    type="text"
                                    placeholder="Salasanasi"
                                    value={pass}
                                />
                                <InputRightElement width="4.5rem" mr="0.25rem">
                                    <CopyToClipboard text={pass}>
                                        <Button bg={copied ? "#DDD" : "current"} color={copied ? "mute" : "body"} h="1.75rem" size="sm" value={pass} onClick={copyPass}>
                                            {copied ? "Kopioitu" : "Kopioi"}
                                        </Button>
                                    </CopyToClipboard>
                                </InputRightElement>
                            </InputGroup>
                        }
                    </Box>

                </Flex>
            }

        </Layout>
    )
}
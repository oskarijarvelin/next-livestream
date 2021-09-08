import { useContext, useState } from 'react'
import AppContext from '../context'
import fetch from 'isomorphic-unfetch'
import { Stack, FormControl, InputGroup, InputLeftElement, Input, Button, Icon } from '@chakra-ui/react'
import { HiOutlineMail} from 'react-icons/hi'

export default function LoginForm({ip, city}) {
    const [show, setShow] = useState(false)
    const { setLogin } = useContext(AppContext)
    const handleClick = () => setShow(!show)

    const sendEmail = async (event) => {
        const req = await fetch(`${process.env.NEXT_PUBLIC_EMAIL_API}?value1=${event.target.email.value.toLowerCase()}&value2=${ip}&value3=${city}`)
            .catch(error => alert() );
    };

    function alert() {}

    const loginUser = event => {
        event.preventDefault() 
        sendEmail(event)
        setLogin(true)
        //let shaEmail = sha1(event.target.email.value.toLowerCase()).toLowerCase().split("").reverse().join("")
        //if ( shaEmail == event.target.password.value.toLowerCase() ) {
        //    if ( adminOnly ) {
        //        let admins = process.env.NEXT_PUBLIC_ADMINS.split(",")
        //        if ( admins.includes(shaEmail) ) {
        //            setLogin(true)
        //        } else {
        //            alert("Sinulla ei ole riittäviä oikeuksia.")
        //        }
        //    } else {
        //        setLogin(true)
        //    }
        //} else {
        //    alert("Salasanasi on väärä. Yritä uudelleen.")
        //}

    }
  
    return (
        <form onSubmit={loginUser}>
            <Stack spacing={4} mb="3rem">    
                <FormControl id="email" name="email">
                    <InputGroup>
                        <InputLeftElement pointerEvents="none" children={<Icon as={HiOutlineMail} color="gray.500"/>} />
                        <Input type="email" placeholder="Sähköpostiosoitteesi" />
                    </InputGroup>
                </FormControl>
                <Button type="submit" bg="current" color="body" size="md">
                    Kirjaudu
                </Button>
            </Stack>
        </form>
    )
}
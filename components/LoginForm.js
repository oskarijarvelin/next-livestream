import { useContext, useState } from 'react'
import AppContext from '../context'
import fetch from 'isomorphic-unfetch';
import { Stack, FormControl, InputGroup, InputLeftElement, Input, Button, Icon } from '@chakra-ui/react'
import { HiOutlineMail} from 'react-icons/hi'

export default function LoginForm({adminOnly}) {
    const [show, setShow] = useState(false)
    const { setLogin } = useContext(AppContext)
    const handleClick = () => setShow(!show)

    const getIp = async () => {
        const req = await fetch('https://api.ipify.org/?format=json')
        .catch(error => alert('Virhe! ' + error.message));
        const res = await req.json();
        return res.ip;
    };

    const sendEmail = async (event, ip) => {
        const req = await fetch(`${process.env.NEXT_PUBLIC_EMAIL_API}?value1=${event.target.email.value.toLowerCase()}&value2=${ip}`)
            .catch(error => alert('Virhe! ' + error.message));
    };

    const loginUser = event => {
        event.preventDefault() 
        let ip = getIp()
        console.log('IP: ' + ip)
        sendEmail(event, ip)
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
            <Stack spacing={4}>    
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
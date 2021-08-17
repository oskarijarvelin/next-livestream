import Head from '../components/Head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Box } from '@chakra-ui/react'

export default function Layout({title, desc, url, img, children}) {
    return (
        <>
            <Head title={title} desc={desc} url={url} img={img} />

            <Header />

                <Box bg="bg" color="body" pos="relative" pt="1px" minH={{base: "calc(100vh - 72px)", md: "calc(100vh - 76px)", lg: "calc(100vh - 102px)", xl: "calc(100vh - 139px)"}}>
                    {children}
                </Box>

            <Footer />
        </>
    );
}
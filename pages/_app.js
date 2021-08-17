import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import { createBreakpoints } from "@chakra-ui/theme-tools"
import "@fontsource/open-sans"

const breakpoints = createBreakpoints({
    sm: "320px",
    sm2: "460px",
    md: "768px",
    lg: "960px",
    xl: "1280px",
    xxl: "1332px",
})

const theme = extendTheme({
    colors: {
        bg: '#FFF',
        light: '#FFF',
        body: '#000',
        mute: '#666',
        current: '#E0D760',
    },
    fonts: {
        heading: "Open Sans",
        body: "Open Sans",
    },
    breakpoints,
})

function MyApp({ Component, pageProps }) {
    return (
        <ChakraProvider theme={theme}>
            <Component {...pageProps} />
        </ChakraProvider>
    )
}
  
export default MyApp
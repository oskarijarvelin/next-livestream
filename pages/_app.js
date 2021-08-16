import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import { createBreakpoints } from "@chakra-ui/theme-tools"

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
        bg: '#FCFCFC',
        light: '#F8F8F8',
        body: '#181818',
        mute: '#666',
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
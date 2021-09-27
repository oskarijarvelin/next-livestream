import App from 'next/app';
import AppContext from '../context'
import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import { createBreakpoints } from "@chakra-ui/theme-tools"
import "@fontsource/open-sans"
import '../styles.css'

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
        current: '#C3D9D7',
    },
    fonts: {
        heading: "Open Sans",
        body: "Open Sans",
    },
    breakpoints,
})

let seekTo = {}
seekTo.seekTo = function(){}
seekTo.playVideo = function(){}

export default class MyApp extends App {
    
    state = {
        login: false,
        time: new Date(),
        player: seekTo
    }

    setLogin = ( val ) => {
        this.setState({
            login: val
        })
    }

    setTime = ( date ) => {
        this.setState({
            time: date
        })
    }
    
    setPlayer = ( target ) => {
        this.setState({
            player: target
        })
    }

    render() {
        const { Component, pageProps } = this.props;
        return (
            <ChakraProvider theme={theme}>
                <AppContext.Provider value={{login: this.state.login, setLogin: this.setLogin, time: this.state.time, setTime: this.setTime, player: this.state.player, setPlayer: this.setPlayer}}>
                    <Component {...pageProps} />
                </AppContext.Provider>
            </ChakraProvider>
        )
    }
}
import { useContext } from 'react'
import AppContext from '../context'
import { Box } from '@chakra-ui/react'
import moment from 'moment'

export default function Event({children, start, stop, first}) {
    const { time } = useContext(AppContext)
    let current = false
    let pt = "1rem"
    let timeFormatted = moment(time).format('HHmm')
    if ( timeFormatted >= start && timeFormatted <= stop ) {
        current = true
    }
    if (first && !current) {
        pt = "0rem"
    }
    return (
        <Box bg={current ? "current" : "bg"} pb="1rem" pt={pt} px={{base: "0rem", lg: "1rem"}}>
            {children}
        </Box>
    )
}
import { Box, Heading, Text } from '@chakra-ui/react'
export default function Footer() {
    return (
        <Box bg="body" p="4">
            <Text align="center" fontSize="13" color="bg">
                {'Copyright © '}
                {new Date().getFullYear()}{' '}
                <Text as="span" display="inline" fontWeight="bold" fontSize="12" px="1">Oskari Järvelin</Text>
            </Text>
        </Box>
    );
}
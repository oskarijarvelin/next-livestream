import { Box, Heading, Text } from '@chakra-ui/react'
export default function Footer() {
    return (
        <Box bg="body" p="4">
            <Text align="center" fontSize="13" color="bg">
                {'© '}
                {new Date().getFullYear()}{' '}
                <Text as="span" display="inline">ProCom – Viestinnän ammattilaiset ry</Text>
            </Text>
        </Box>
    );
}
import AppSettingContext from '@/providers/AppSettingProvider'
import {
    Box,
    Flex, Image, Text
} from '@chakra-ui/react'
import { useContext } from 'react'

const Footer = () => {
    const { logoAdvHum } = useContext(AppSettingContext)

    return (
        <>
            <Box as="footer" w="full">
                <Flex flexWrap="wrap" w="full" h="70px" justifyContent="space-between" alignItems="center">
                    <Flex w={{ base: "full", lg: "fit-content" }} justifyContent={{ base: "center", lg: "start" }}>
                        <Text as="span">Copyright © {new Date().getFullYear()} Institut Teknologi Sepuluh Nopember</Text>
                    </Flex>
                    <Flex w={{ base: "full", lg: "fit-content" }} justifyContent={{ base: "center", lg: "end" }}>
                        <Image src={logoAdvHum} h="60px" />
                    </Flex>
                </Flex>
            </Box>
            <Box as="footer" display={{ lg: "none" }} w="full">
            </Box>
        </>
    )
}

export default Footer
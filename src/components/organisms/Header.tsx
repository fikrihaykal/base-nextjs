import AppSettingContext from '@/providers/AppSettingProvider'
import {
    Box,
    Button,
    Collapse,
    Flex, Image, Link, Text, useDisclosure
} from '@chakra-ui/react'
import { IoChevronDown, IoChevronUp } from "react-icons/io5"
import NextLink from 'next/link'
import { useContext } from 'react'
import MainMenu from './MainMenu'

const Header = () => {
    const { logoMyIts } = useContext(AppSettingContext)

    const { isNavbarOpen, navbarToggler } = useContext(AppSettingContext)

    return (
        <>
            <Box as="header" backgroundColor="#ffffff" pos="fixed" justifyContent="center" alignItems="center" w="full" maxH="100vh" zIndex="9000" px={{base: "20px", md: "20px", lg: "25px", xl: "165px"}} boxShadow="sm">
                <Flex justifyContent="space-between" bg="bg-surface" w="full" maxW="1445px" py="15px">
                    <Flex>
                        <Link as={NextLink} href="/" display="flex" justifyContent="center" alignItems="center">
                            <Image src={logoMyIts} w="55px" mt="5px" />
                            <Text ml="2" fontSize="20px">{process.env.NEXT_PUBLIC_APP_NAME}</Text>
                        </Link>
                    </Flex>
                    <Flex display={{ lg: "none" }}>
                        <Button onClick={navbarToggler}>
                            {
                                isNavbarOpen ? <IoChevronUp /> : <IoChevronDown />
                            }
                        </Button>
                    </Flex>
                </Flex>
                <Collapse dir="up" in={isNavbarOpen}>
                    <Box display={{ lg: "none" }} w="full" borderBottom="1px">
                        <MainMenu />
                    </Box>
                </Collapse>
            </Box>
        </>
    )
}

export default Header
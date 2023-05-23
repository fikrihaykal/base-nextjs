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

    const { isNavbarOpen, toggleNavbar } = useContext(AppSettingContext)

    return (
        <>
            <Box as="header" pos="fixed" justifyContent="center" alignItems="center" w="full" maxH="100vh" zIndex="1000">
                <Flex justifyContent="space-between" bg="bg-surface" w="full" maxW="1445px" py="15px">
                    <Flex>
                        <Link as={NextLink} href="/" display="flex" justifyContent="center" alignItems="center">
                            <Image src={logoMyIts} w="55px" mt="5px" />
                            <Text ml="2" fontSize="20px">{process.env.NEXT_PUBLIC_APP_NAME}</Text>
                        </Link>
                    </Flex>
                    <Flex display={{ lg: "none" }}>
                        <Button onClick={toggleNavbar}>
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
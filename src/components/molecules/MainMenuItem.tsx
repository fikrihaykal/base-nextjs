import {
    Box,
    Button,
    Collapse,
    Image, Link, Text, useDisclosure
} from '@chakra-ui/react'
import { IoChevronDown, IoChevronUp } from "react-icons/io5"
import NextLink from 'next/link'
import { MenuItem } from '@/types/menu-item'
import AppSettingContext from '@/providers/AppSettingProvider'
import { useContext } from 'react'

const MainMenuItem = ({ menuItem, menuIndex }: { menuItem: MenuItem, menuIndex: number }) => {
    const { isOpen, onToggle } = useDisclosure()
    const { isNavbarOpen } = useContext(AppSettingContext)

    return (
        <>
            <Box pos="relative">
                <Box as="li">
                    <Link as={NextLink} href={menuItem.url} display="flex" justifyContent="start" alignItems="center" p="12px 18px">
                        <Image src={`/images/icon/${menuItem.icon}`} w="20px" mr="15px" alt="alt" />
                        <Collapse in={isNavbarOpen}>
                            <Text as="span">{menuItem.name}</Text>
                        </Collapse>
                    </Link>
                </Box>
                {
                    menuItem?.submenu && menuItem?.submenu.length > 0 ?
                        <>
                            <Collapse in={isNavbarOpen}>
                                <Button onClick={onToggle} pos="absolute" top="0px" right="0px">
                                    {
                                        isOpen ? <IoChevronUp /> : <IoChevronDown />
                                    }
                                </Button>
                            </Collapse>
                        </> : null
                }
            </Box>
            {
                menuItem?.submenu && menuItem?.submenu.length > 0 ?
                    <>
                        <Collapse in={isNavbarOpen}>
                            <Collapse dir="up" in={isOpen}>
                                {
                                    menuItem.submenu.map((item, index) =>
                                        <Box as="li" key={"mobile-menu-item-" + menuIndex + "-submenu-" + index} >
                                            <Link as={NextLink} href={item.url} display="flex" justifyContent="start" alignItems="center" p="12px 18px">
                                                <Text as="span" ml="35px">{item.name}</Text>
                                            </Link>
                                        </Box>
                                    )
                                }
                            </Collapse>
                        </Collapse>
                    </> : null
            }
        </>
    )
}

export default MainMenuItem
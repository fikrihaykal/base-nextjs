import {
    Box
} from '@chakra-ui/react'
import MainMenuItem from '../molecules/MainMenuItem'
import { menuItem } from '@/data/dummy'

const MainMenu = () => {
    return (
        <>
            <Box as="ul" w="full" borderRadius="lg">
                {
                    menuItem.map((item, index) =>
                        <MainMenuItem menuItem={item} menuIndex={index} key={"main-menu-item-" + index} />
                    )
                }
            </Box>
        </>
    )
}

export default MainMenu
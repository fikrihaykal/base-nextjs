import { Box, Button, Flex } from "@chakra-ui/react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import MainMenu from "./MainMenu";
import AccountMenu from "./AccountMenu";
import { useContext } from "react";
import AppSettingContext from "@/providers/AppSettingProvider";
import AccountMenu2 from "./AccountMenu2";
import MainMenu2 from "./MainMenu2";

const Sidebar = () => {
    const { isNavbarOpen, navbarToggler } = useContext(AppSettingContext)

    return (
        <>
            <Flex flexDir="column" pos="relative" justifyContent="start" style={{ position: "sticky"}} top="95px" h="calc(100vh - 120px)" zIndex="0">
                <Box display={{ base: "none", lg: "block" }} w="full" ml="13px" borderRadius="10px">
                    <AccountMenu2 />

                    <Button display="flex" pos="absolute" right="-10px" top="14px" onClick={navbarToggler}>
                        {
                            isNavbarOpen ? <IoChevronBack /> : <IoChevronForward />
                        }
                    </Button>
                </Box>

                <Box display={{ base: "none", lg: "block" }} w="full" overflowY="auto">
                    <MainMenu2 />
                </Box>
            </Flex>
        </>
    )
}

export default Sidebar
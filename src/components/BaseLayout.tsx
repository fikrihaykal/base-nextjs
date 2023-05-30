import { Box, Flex, Stack } from "@chakra-ui/react";
import { ReactNode } from "react";
import Header from "./organisms/Header";
import Footer from "./organisms/Footer";
import Sidebar from "./organisms/Sidebar";
import Sidebar2 from "./organisms/Sidebar2";

const BaseLayout = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <Flex flexDir="column" minH="100vh">
                <Header />

                <Box h="100vh" pos="relative" px={{base: "20px", md: "20px", lg: "25px", xl: "150px"}}>
                    <Flex flexDir="column" minH="calc(100vh - 80px)">
                        <Flex justifyContent="start" minH="100vh" pos="relative">
                            <Sidebar2 />

                            <Stack w="full" mt={{ base: "80px", xl: "100px" }} mr={{ xl: "30px" }} ml={{ xl: "5px" }}>
                                {children}
                            </Stack>
                        </Flex>
                    </Flex>

                    <Footer />
                </Box>
            </Flex>
        </>
    )
}

export default BaseLayout
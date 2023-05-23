import { Box, Flex } from "@chakra-ui/react";
import { ReactNode } from "react";
import Header from "./organisms/Header";
import Footer from "./organisms/Footer";
import Sidebar from "./organisms/Sidebar";

const BaseLayout = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <Flex flexDir="column" minH="100vh">
                <Header />

                <Box h="100vh" pos="relative">
                    <Flex flexDir="column" minH="calc(100vh - 80px)">
                        <Flex justifyContent="start" minH="100vh">
                            <Sidebar />

                            <Flex mt={{ base: "80px", xl: "100px" }} mr={{ xl: "30px" }} ml={{ xl: "5px" }} flex="1">
                                {children}
                            </Flex>
                        </Flex>
                    </Flex>

                    <Footer />
                </Box>
            </Flex>
        </>
    )
}

export default BaseLayout
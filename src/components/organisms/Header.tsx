import AppSettingContext from "@/providers/AppSettingProvider";
import {
  Box,
  Button,
  Collapse,
  Flex,
  Image,
  Link,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";
import NextLink from "next/link";
import { useContext } from "react";
import MainMenu from "./MainMenu";
import { mutate } from "swr";
import { motion } from "framer-motion";

const Header = () => {
  const { logoMyIts } = useContext(AppSettingContext);
  const { isNavbarOpen, navbarToggler } = useContext(AppSettingContext);
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box
        as="header"
        backgroundColor={
          colorMode == "light" ? "rgba(255,255,255,0.8)" : "rgba(29,29,29,0.8)"
        }
        pos="fixed"
        justifyContent="center"
        alignItems="center"
        w="full"
        maxH="100vh"
        zIndex="9000"
        px={{ base: "20px", md: "20px", lg: "25px", xl: "165px" }}
        boxShadow="rgba(17, 12, 46, 0.05) 0px 1px 5px 0px;"
        backdropFilter={"blur(30px)"}
      >
        <Flex
          justifyContent="space-between"
         
          w="full"
          maxW="1540px"
          py="15px"
        >
          <Flex>
            <Link
              as={NextLink}
              href="/"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Image src={logoMyIts} w="55px" mt="5px" />
              <Text ml="2" fontSize="20px">
                {process.env.NEXT_PUBLIC_APP_NAME}
              </Text>
            </Link>
          </Flex>
          <Flex display={{ lg: "none" }}>
            <Button onClick={navbarToggler}>
              {isNavbarOpen ? <IoChevronUp /> : <IoChevronDown />}
            </Button>
          </Flex>
          <motion.div
            layout
            style={{
              display: "flex",
              alignItems: "center",
              borderRadius: "8px",
              background: "#313131",
              width: "106px",
              paddingLeft: "3px",
              paddingRight: "3px",
              justifyContent: colorMode == "light" ? "start" : "end",
            }}
          >
            <motion.div
              layout
              style={{
                display: "flex",
              }}
              onClick={toggleColorMode}
            >
              <Button size="xs" width={50}>{colorMode == "light" ? "Light" : "Dark"}</Button>
            </motion.div>
          </motion.div>
        </Flex>
        <Collapse dir="up" in={isNavbarOpen}>
          <Box display={{ lg: "none" }} w="full" borderBottom="1px">
            <MainMenu />
          </Box>
        </Collapse>
      </Box>
    </>
  );
};

export default Header;

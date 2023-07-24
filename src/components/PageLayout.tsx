import { Box, Button, Flex, Input, Text, useColorMode } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { ReactNode, useEffect } from "react";
import { BellIconMade, SearchIconMade } from "./atoms/IconsMade";
import { MotionBox } from "./motion/Motion";

const titledMenu = {
  initial: { opacity: 0, y: 15 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0 },
};

const PageTransition = ({
  pageTitle,
  children,
}: {
  pageTitle?: string;
  children: ReactNode;
}) => {
  const page = useRouter().route;
  const n = page.lastIndexOf("/");
  const r = page.substring(n + 1);
  const defTitle = r.charAt(0).toUpperCase() + r.slice(1).toLowerCase();

  const { colorMode, toggleColorMode } = useColorMode();
  useEffect(() => {
    document
      .querySelector("body")
      ?.classList.add(colorMode == "light" ? "light" : "dark");
    document
      .querySelector("body")
      ?.classList.remove(colorMode == "light" ? "dark" : "light");
  });
  return (
    <>
      <Flex
        className="page__row page__row_head"
        flexDirection={{ base: "column-reverse", t: "initial" }}
        m={{ base: "0", x: "0 16px", w: "0" }}
        p={{ base: "25px 0", x: "40px 0", w: "0" }}
      >
        <Box
          className="page__col"
          p={{ base: "0", x: "0 64px 44px" }}
          pt={{ base: "0", t: "48px", x: "48px" }}
          _first={{
            flex: "0 0 calc(100% - 426px)",
            maxWidth: { base: "100%", t: "calc(100% - 426px)" },
          }}
        >
          <Text
            className="page__title"
            fontSize="42px"
            lineHeight="1.33333"
            fontWeight="600"
            variant="toptitle"
          >
            {pageTitle ?? (defTitle !== "" ? defTitle : "Hi, Sulthon")}
          </Text>
        </Box>
        <Box
          className="page__col"
          p={{ base: "0", x: "0 64px 44px" }}
          pt={{ base: "0", t: "48px", x: "48px" }}
          _first={{
            flex: { base: "100%", t: "calc(100% - 426px)" },
            maxWidth: { base: "100%", t: "calc(100% - 426px)" },
          }}
          _even={{
            flexShrink: "0",
            width: { base: "100%", t: "426px" },
          }}
        >
          <Flex
            className="header"
            pos="relative"
            zIndex="10"
            alignItems="center"
            maxW={{ base: "100%", t: "298px" }}
            ml="auto"
          >
            <Box
              className="search"
              w="214px"
              ml="-8px"
              mr="auto"
              pos="relative"
              zIndex="3"
            >
              <Box className="search__field" zIndex="2">
                <Input
                  className="search__input"
                  placeholder="Search"
                  w="100%"
                  h="48px"
                  p="0 10px 0 44px"
                  borderRadius="12px"
                  bg="transparent"
                  fontSize="14px"
                  color={colorMode == "light" ? "#11142D" : "#fff"}
                  transition="background .25s"
                  border="none"
                  _focusVisible={{
                    border: "none",
                  }}
                ></Input>
                <Flex
                  className="search__toggle"
                  pos="absolute"
                  alignItems="center"
                  justifyContent="center"
                  top="0"
                  left="0"
                  bottom="0"
                  w="42px"
                  color={colorMode == "light" ? "#1B1D21" : "#fff"}
                >
                  <SearchIconMade fontSize="22px" />
                </Flex>
              </Box>
            </Box>
            <Box className="notifications" pos="relative">
              <Button
                className="notif__button"
                pos="relative"
                w="48px"
                h="48px"
                borderRadius="50%"
                transition="all .25s"
                bg={colorMode == "light" ? "#fff" : "#141414"}
                onClick={toggleColorMode}
                _hover={{
                  background: colorMode == "light" ? "white" : "#292929",
                  boxShadow: "rgba(17, 12, 46, 0.07) 0px 4px 12px 0px;",
                }}
              >
                <BellIconMade fontSize="24px" />
                <Box
                  className="notif__counter"
                  pos="absolute"
                  top="0"
                  right="-12px"
                  display="inline-block"
                  minW="24px"
                  lineHeight="24px"
                  borderRadius="50%"
                  bg={colorMode == "light" ? "#fac43a" : "#db6e2b"}
                  fontSize="12px"
                  fontWeight="600"
                  color="white"
                >
                  2
                </Box>
              </Button>
            </Box>
          </Flex>
        </Box>
      </Flex>
      <MotionBox
        className="page__motion"
        variants={titledMenu}
        initial="initial"
        animate="animate"
        exit="exit"
        // @ts-ignore
        transition={{
          duration: 0.25,
          ease: "easeInOut",
          delay: 0,
        }}
      >
        {children}
      </MotionBox>
    </>
  );
};

export default PageTransition;

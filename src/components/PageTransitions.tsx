import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Stack,
  useColorMode,
  Text,
} from "@chakra-ui/react";
import { ReactNode, useEffect } from "react";
import { useRouter } from "next/router";
import { MotionBox } from "./motion/Motion";
import Header from "./organisms/Header2";
import DashboardMenu from "./organisms/DashboardMenu";
import RightMenu from "./organisms/RightMenu";
import {
  SearchIcon,
  BellIcon,
  SearchIconMade,
  BellIconMade,
} from "./atoms/Icons";

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

  const { colorMode } = useColorMode();
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
      <Flex className="page__row">
        <Box
          className="page__col"
          p="0 64px 44px"
          pt="48px"
          _first={{
            flex: "0 0 calc(100% - 426px)",
            maxWidth: "calc(100% - 426px)",
          }}
          // borderRight="1px solid #e4e4e4"
        >
          <Text
            className="page__toptitle"
            fontSize="24px"
            lineHeight="1.33333"
            fontWeight="500"
            variant="toptitle"
          >
            Hi Sulthon Nashir
          </Text>
          <Text
            className="page__title"
            fontSize="48px"
            lineHeight="1.33333"
            fontWeight="600"
            variant="toptitle"
          >
            Welcome Back
          </Text>
        </Box>
        <Box
          className="page__col"
          p="0 64px 44px"
          pt="48px"
          _first={{
            flex: "0 0 calc(100% - 426px)",
            maxWidth: "calc(100% - 426px)",
          }}
          _even={{
            flexShrink: "0",
            width: "426px",
          }}
        >
          <Flex
            className="header"
            pos="relative"
            zIndex="10"
            alignItems="center"
            maxW="298px"
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
                  color="#11142D"
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
                  color="#1B1D21"
                >
                  {/* <SearchIconMade fontSize="22px" /> */}
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
                bg="white"
                _hover={{
                  background: "white",
                  boxShadow: "rgba(17, 12, 46, 0.07) 0px 4px 12px 0px;",
                }}
              >
                {/* <BellIconMade fontSize="24px" /> */}
                <Box
                  className="notif__counter"
                  pos="absolute"
                  top="0"
                  right="-12px"
                  display="inline-block"
                  minW="24px"
                  lineHeight="24px"
                  borderRadius="50%"
                  bg="#fac43a"
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

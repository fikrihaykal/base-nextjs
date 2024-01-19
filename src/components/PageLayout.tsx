import { DropdownChangeRole } from "@/data/dummy";
import AppSettingContext from "@/providers/AppSettingProvider";
import { SignOutAction } from "@/utils/auth/SignOutAction";
import {
  Box,
  Button,
  Center,
  Flex,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useColorMode,
  useDisclosure,
} from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { ReactNode, useContext, useEffect } from "react";
// import { IoIosArrowForward } from "react-icons/io";
import {
  ArrowLeftOutlineIconMade,
  BellIconMade,
  LogoutOutlineIconMade,
  UsersOutlineIconMade,
} from "./atoms/IconsMade";
import BoxSpaceBottom from "./customs/BoxSpaceBottom";
import { DaliGhostButton } from "./customs/Buttons/DaliButton";
import { PrimaryButton } from "./customs/Buttons/PrimaryButton";
import ScrollToTopButton from "./customs/ScrollToTopButton";
import DropdownSelect from "./customs/Select";
import { MotionBox } from "./motion/Motion";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import Head from "next/head";
import AccountInfoContext from "@/providers/AccountInfoProvider";

const titledMenu = {
  initial: { opacity: 0, y: 15 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0 },
};

const PageTransition = ({
  pageTitle,
  previousPage,
  previousPageTitle,
  children,
}: {
  pageTitle?: string;
  previousPage?: string;
  previousPageTitle?: string;
  children: ReactNode;
}) => {
  const { nickname, name, email, role, prefUsername } =
    useContext(AccountInfoContext);
  const page = useRouter().route;
  const router = useRouter();
  const n = page.lastIndexOf("/");
  const r = page.substring(n + 1);
  const { signOut } = SignOutAction();

  const { colorMode, toggleColorMode } = useColorMode();
  useEffect(() => {
    document
      .querySelector("body")
      ?.classList.add(colorMode == "light" ? "light" : "dark");
    document
      .querySelector("body")
      ?.classList.remove(colorMode == "light" ? "dark" : "light");
  });

  const { isNavbarOpen, navbarToggler } = useContext(AppSettingContext);

  const {
    isOpen: isOpenGantiRole,
    onOpen: onOpenGantiRole,
    onClose: onCloseGantiRole,
  } = useDisclosure();

  const {
    isOpen: isNotifOpen,
    onOpen: onNotifOpen,
    onClose: onNotifClose,
  } = useDisclosure();

  return (
    <>
      <Head>
        <title>Worktime - {page == "/" ? "Beranda" : pageTitle}</title>
        <meta charSet="utf-8" />
      </Head>
      <Flex
        className="page__row page__row_head"
        flexDirection={{ base: "column-reverse", x: "initial" }}
      >
        {/* Title col */}
        <Box
          className="page__col"
          p={{ base: "16px 16px 28px", x: "0 64px 44px" }}
          pt={{ base: "0", t: "24px", x: "48px" }}
          w="100%"
          display={{ base: "block", md: "flex" }}
          alignItems="center"
          flexWrap="wrap"
          gap={3}
        >
          {previousPage && (
            <>
              <Link href={previousPage}>
                <Text
                  display={["none", "none", "none", "block"]}
                  className="page__title"
                  fontSize={{ base: "24px", m: "28px", x: "30px" }}
                  lineHeight="1.33333"
                  fontWeight="600"
                  variant="toptitle"
                  opacity="0.6"
                  _hover={{
                    opacity: 1,
                  }}
                  transition="120ms ease-out"
                >
                  {previousPageTitle}
                </Text>
              </Link>
              <Flex
                opacity="0.6"
                mx="-2px"
                display={["none", "none", "none", "flex"]}
              >
                <IoIosArrowForward fontSize="20px" strokeWidth="36px" />
              </Flex>
            </>
          )}

          <Flex alignItems="center">
            <Flex
              alignItems="center"
              justifyContent="center"
              mr="2px"
              ml="-6px"
              w="36px"
              h="36px"
              display={page == "/" ? "none" : ["flex", "flex", "flex", "none"]}
              onClick={() => router.back()}
            >
              <IoIosArrowBack fontSize="20px" strokeWidth="36px" />
            </Flex>

            <Text
              className="page__title"
              fontSize={{ base: "24px", m: "28px", x: "30px" }}
              lineHeight="1.33333"
              fontWeight="600"
              variant="toptitle"
            >
              {pageTitle}
            </Text>
          </Flex>
        </Box>

        <Box
          className="page__col"
          p={{ base: "16px 16px 28px", x: "0 64px 44px" }}
          pt={{ base: "0", t: "48px", x: "48px" }}
          _first={{
            flex: { base: "100%", t: "calc(100% - 426px)" },
            maxWidth: { base: "100%", t: "calc(100% - 426px)" },
          }}
          _even={{
            flexShrink: "0",
            width: { base: "100%", x: "120px" },
          }}
        >
          <Flex
            className="header"
            pos="relative"
            zIndex="10"
            justifyContent="end"
            alignItems="center"
            h={{ base: "96px", t: "48px", x: "unset" }}
            p={{ base: "0 32px", t: "0" }}
            maxW={{ base: "calc(100% + 64px)", x: "100%" }}
            m={{ base: "0 -32px 0 -32px", t: "0px 0 0 auto" }}
            borderBottom={{ base: "1px solid", m: "none" }}
            borderColor={colorMode == "light" ? "#e4e4e4" : "#292929"}
          >
            <Button
              className="header__burger"
              display={{ base: "inline-block", d: "none" }}
              w="32px"
              h="40px"
              mr="auto"
              pos="relative"
              fontSize="0"
              onClick={navbarToggler}
              bg="none"
              _hover={{
                background: "none",
              }}
              _before={{
                content: '""',
                display: "inline-block",
                width: "32px",
                position: "absolute",
                top: "calc(42% - 4px)",
                left: "0px",
                height: "2px",
                margin: "3px auto",
                borderRadius: "1px",
                background: colorMode == "light" ? "#1b1d21" : "#ffffff",
              }}
              _after={{
                content: '""',
                display: "inline-block",
                width: "32px",
                position: "absolute",
                height: "2px",
                top: "calc(42% + 4px)",
                left: "0px",
                margin: "3px auto",
                borderRadius: "1px",
                background: colorMode == "light" ? "#1b1d21" : "#ffffff",
              }}
            ></Button>

            <Menu closeOnSelect={false}>
              <Box
                className="header__user"
                cursor="pointer"
                display={{ base: "block" }}
                flexShrink="0"
                w="40px"
                h="40px"
                ml={{ base: "0", m: "24px" }}
                fontSize="0"
                bgImage="/pp.jpg"
                backgroundSize="contain"
                borderRadius="50%"
                as={MenuButton}
              ></Box>
              <MenuList
                border={
                  colorMode == "light"
                    ? "1px solid #e4e4e4"
                    : "1px solid #333333"
                }
                boxShadow={
                  colorMode == "light"
                    ? "0 4px 16px rgba(227, 230, 236, 0.4)"
                    : "0 4px 24px rgba(0, 0, 0, 0.15)"
                }
                p="16px"
                borderRadius="24px"
                defaultChecked={false}
                bg={colorMode == "light" ? "#fff" : "#222222"}
              >
                <Box p="1rem 0.75rem">
                  <Text fontSize="16px" fontWeight="600">
                    {name}
                  </Text>
                  <Text fontSize="14px" fontWeight="500" color="gray" mt="6px">
                    {prefUsername}
                  </Text>
                </Box>
                {role ? (
                  <MenuItem
                    icon={<UsersOutlineIconMade fontSize="18px" />}
                    bg="transparent"
                    fontSize="14px"
                    fontWeight="600"
                    py="16px"
                    borderRadius="16px"
                    transition=".25s all"
                    _hover={{
                      bg: colorMode == "light" ? "gray.50" : "gray.800",
                    }}
                    onClick={onOpenGantiRole}
                  >
                    Ganti Role
                  </MenuItem>
                ) : (
                  ""
                )}

                <MenuItem
                  icon={<ArrowLeftOutlineIconMade fontSize="18px" />}
                  bg="transparent"
                  fontSize="14px"
                  fontWeight="600"
                  py="16px"
                  borderRadius="16px"
                  transition=".25s all"
                  _hover={{ bg: colorMode == "light" ? "gray.50" : "gray.800" }}
                  as={Link}
                  href="https://portal.its.ac.id"
                >
                  ke myITS Portal
                </MenuItem>
                <MenuDivider
                  borderColor={colorMode == "light" ? "gray.100" : "gray.700"}
                />
                <MenuItem
                  icon={<LogoutOutlineIconMade fontSize="18px" />}
                  bg="transparent"
                  fontSize="14px"
                  fontWeight="600"
                  py="16px"
                  borderRadius="16px"
                  transition=".25s all"
                  _hover={{ bg: colorMode == "light" ? "gray.50" : "gray.800" }}
                  color={colorMode == "light" ? "red.500" : "#B53F3F"}
                  onClick={signOut}
                >
                  Keluar
                </MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Box>
      </Flex>
      <ScrollToTopButton />
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
        <BoxSpaceBottom />
      </MotionBox>

      <Modal
        isOpen={isOpenGantiRole}
        onClose={onCloseGantiRole}
        size="lg"
        isCentered
      >
        <ModalOverlay />
        <ModalContent
          borderRadius="16px"
          py="8px"
          m="16px 24px"
          bg={colorMode == "light" ? "white" : "gray.900"}
        >
          <ModalHeader
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            Ganti Role
          </ModalHeader>
          <ModalBody>
            <Box w="full">
              <DropdownSelect
                placeholder="Pilih role"
                defaultValue={[DropdownChangeRole[0]]}
                options={DropdownChangeRole}
                isDisabled={false}
                isMulti={false}
                isClearable={false}
              />
            </Box>
          </ModalBody>
          <ModalFooter display="flex" pt="24px" gap={2}>
            <Center w={{ base: "full", s: "auto" }}>
              <DaliGhostButton onClick={onCloseGantiRole}>
                Batalkan
              </DaliGhostButton>
            </Center>
            <Center w={{ base: "full", s: "auto" }}>
              <PrimaryButton type="submit" isLoading={false}>
                Ganti
              </PrimaryButton>
            </Center>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default PageTransition;

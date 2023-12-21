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
  LogoutOutlineIconMade,
  UsersOutlineIconMade,
} from "./atoms/IconsMade";
import BoxSpaceBottom from "./customs/BoxSpaceBottom";
import { DaliGhostButton } from "./customs/Buttons/DaliButton";
import { PrimaryButton } from "./customs/Buttons/PrimaryButton";
import ScrollToTopButton from "./customs/ScrollToTopButton";
import DropdownSelect from "./customs/Select";
import { MotionBox } from "./motion/Motion";
import { IoIosArrowForward } from "react-icons/io";

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
  const page = useRouter().route;
  const n = page.lastIndexOf("/");
  const r = page.substring(n + 1);
  const defTitle = r.charAt(0).toUpperCase() + r.slice(1).toLowerCase();
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

  return (
    <>
      <Flex
        className="page__row page__row_head"
        flexDirection={{ base: "column-reverse", t: "initial" }}
        m={{ base: "0", x: "0 0px", w: "0" }}
        p={{ base: "0px 0 0px 0", x: "0px 0", w: "0" }}
      >
        {/* Title col */}
        <Box
          className="page__col"
          p={{ base: "16px 16px 28px", x: "0 64px 44px" }}
          pt={{ base: "0", t: "48px", x: "48px" }}
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
              <Flex opacity="0.6" mx="-2px">
                <IoIosArrowForward fontSize="20px" strokeWidth="36px" />
              </Flex>
            </>
          )}

          <Text
            className="page__title"
            fontSize={{ base: "24px", m: "28px", x: "30px" }}
            lineHeight="1.33333"
            fontWeight="600"
            variant="toptitle"
          >
            {pageTitle}
          </Text>
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
            width: { base: "100%", t: "120px" },
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
            maxW={{ base: "calc(100% + 64px)", x: "100%", t: "298px" }}
            m={{ base: "0 -32px 0 -32px", t: "0px 0 0 auto" }}
            borderBottom={{ base: "1px solid", m: "none" }}
            borderColor={colorMode == "light" ? "#e4e4e4" : "#292929"}
          >
            <Button
              className="header__burger"
              display={{ base: "inline-block", m: "none" }}
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
            {/* <Box
              w="full"
              mt="8px"
              pr="16px"
              display={{ base: "block", m: "none" }}
            >
              <Center>
                <MyITSLogo
                  w="68px"
                  h="auto"
                  color={colorMode === "light" ? "#013880" : "white"}
                />
              </Center>
              <Center>
                <Text fontSize="13px" fontWeight={600} mt="2px">
                  Academics
                </Text>
              </Center>
            </Box> */}
            {/* <Box
              w="full"
              mt="8px"
              pl="16px"
              display={{ base: "block", m: "none" }}
            >
              <MyITSLogo
                w="56px"
                h="auto"
                color={colorMode === "light" ? "#013880" : "white"}
              />
              <Text fontSize="16px" fontWeight={600}>
                Academics
              </Text>
            </Box> */}
            {/* <Box
              className="search"
              w="214px"
              ml="-8px"
              mr="auto"
              pos="relative"
              zIndex="3"
              visibility={{ base: "hidden", m: "visible" }}
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
            </Box> */}

            {/* <Box className="notifications" pos="relative">
              <Button
                className="notif__button"
                pos="relative"
                w="48px"
                h="48px"
                mr={{ base: "25px", m: "0" }}
                borderRadius="50%"
                transition="all .25s"
                bg={colorMode == "light" ? "#fff" : "#141414"}
                onClick={toggleColorMode}
                _hover={{
                  background: colorMode == "light" ? "white" : "#292929",
                  boxShadow: "rgba(17, 12, 46, 0.07) 0px 4px 12px 0px;",
                }}
              >
                <BellIconMade fontSize="21px" />
                <Box
                  className="notif__counter"
                  pos="absolute"
                  top={{ base: "8px", m: "0" }}
                  right={{ base: "10px", m: "-12px" }}
                  display="inline-block"
                  minW={{ base: "12px", m: "24px" }}
                  lineHeight={{ base: "12px", m: "24px" }}
                  borderRadius="50%"
                  bg={colorMode == "light" ? "#fac43a" : "#db6e2b"}
                  fontSize={{ base: "0", m: "12px" }}
                  fontWeight="600"
                  color="white"
                >
                  2
                </Box>
              </Button>
            </Box> */}
            {/* <Box
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
              onClick={signOut}
            ></Box> */}
            <Menu closeOnSelect={false}>
              {/* <MenuButton as={Button} rightIcon={<ChevronDownSolidIconMade />}>
                Actions
              </MenuButton> */}
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
                    Fulan
                  </Text>
                  <Text fontSize="14px" fontWeight="500" color="gray" mt="6px">
                    email@its.ac.id
                  </Text>
                </Box>
                <MenuItem
                  icon={<UsersOutlineIconMade fontSize="18px" />}
                  bg="transparent"
                  fontSize="14px"
                  fontWeight="600"
                  py="16px"
                  borderRadius="16px"
                  transition=".25s all"
                  _hover={{ bg: colorMode == "light" ? "gray.50" : "gray.800" }}
                  onClick={onOpenGantiRole}
                >
                  Ganti Role
                </MenuItem>
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

import AppSettingContext from "@/providers/AppSettingProvider";
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
  ModalProps,
  Text,
  useColorMode,
  useColorModeValue,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import {
  FormEventHandler,
  ReactNode,
  useContext,
  useEffect,
  useId,
  useState,
} from "react";
import {
  ArrowLeftOutlineIconMade,
  CheckmarkOutlineIconMade,
  ChevronLeftSolidIconMade,
  ChevronRightSolidIconMade,
  CloseOutlineIconMade,
  LogoutOutlineIconMade,
  MyITSLogo,
  UsersOutlineIconMade,
} from "./atoms/IconsMade";
import { MotionBox } from "./motion/Motion";
import { signOutAction } from "@/utils/auth/SignOutAction";
import Link from "next/link";
import ScrollToTopButton from "./customs/ScrollToTopButton";
import BoxSpaceBottom from "./customs/BoxSpaceBottom";
import DropdownSelect from "./customs/Select";
import axios from "axios";
import { mutate } from "swr";
import ToastCard from "./customs/ToastCard";
import Image from "next/image";
import defaultProfilePicture from "../../public/images/app/profile-default.jpg";
import Head from "next/head";
import { isFirefox } from "react-device-detect";
import { NotificationIcon } from "./atoms/IconParams";
import { PrimaryButton } from "./atoms/Buttons/PrimaryButton";
import { DaliGhostButton } from "./atoms/Buttons/DaliButton";

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
  const router = useRouter();
  const n = page.lastIndexOf("/");
  const r = page.substring(n + 1);
  const { signOut } = signOutAction();

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
      <Head>
        <title>
          {(pageTitle ? pageTitle + " • " : "") +
            process.env.NEXT_PUBLIC_APP_NAME_FULL}
        </title>
      </Head>
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
                <ChevronRightSolidIconMade fontSize="24px" />
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
              <ChevronLeftSolidIconMade fontSize="24px" />
            </Flex>
            <Flex alignItems="center" minH="36px">
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
            width: { base: "100%", t: "426px" },
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
            <Box
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
            </Box>
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
                <BellIconMade fontSize="20px" />
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
            <Menu>
              <MenuButton
                className="notif__button"
                pos="relative"
                w="48px"
                h="48px"
                mr={{ base: "14px", m: "0" }}
                borderRadius="50%"
                transition="all .25s"
                bg={colorMode == "light" ? "#fff" : "#141414"}
                _hover={{
                  background: colorMode == "light" ? "white" : "#292929",
                  boxShadow: "rgba(17, 12, 46, 0.07) 0px 4px 12px 0px;",
                }}
              >
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  w="48px"
                  h="48px"
                >
                  <NotificationIcon fontSize="20px" />
                </Box>
                <Box
                  className="notif__counter"
                  pos="absolute"
                  top={{ base: "8px", m: "0" }}
                  right={{ base: "10px", m: "-12px" }}
                  display="inline-block"
                  minW={{ base: "12px", m: "24px" }}
                  lineHeight={{ base: "12px", m: "24px" }}
                  borderRadius="50%"
                  bg={colorMode == "light" ? "yellow.500" : "yellowDim.500"}
                  fontSize={{ base: "0", m: "12px" }}
                  fontWeight="600"
                  color="white"
                >
                  2
                </Box>
              </MenuButton>
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
                p="16px 0px 16px 16px"
                borderRadius="24px"
                defaultChecked={false}
                bg={colorMode == "light" ? "#fff" : "#222222"}
                w={{ base: "auto", s: "350px" }}
                transition="all .25s"
                mx={{ base: "16px", s: "unset" }}
                maxW={{ base: "calc(100vw - 32px)", s: "unset" }}
              >
                <Box p="12px">
                  <Text fontSize="16px" fontWeight="600">
                    Notifikasi
                  </Text>
                </Box>
                <Box
                  maxH="calc(100vh - 300px)"
                  overflowY="scroll"
                  sx={{
                    "::-webkit-scrollbar-thumb": {
                      backgroundColor:
                        colorMode == "light" ? "gray.200" : "gray.800",
                    },
                    scrollbarWidth: "thin",
                    scrollbarColor: "silver transparent;",
                    ...(isFirefox && {
                      marginRight: "-15px",
                      paddingRight: "15px",
                    }),
                  }}
                  transition="all .25s"
                >
                  <MenuItem
                    bg="transparent"
                    fontSize="14px"
                    fontWeight={600}
                    py="12px"
                    borderRadius="16px"
                    transition=".25s all"
                    _hover={{
                      bg: colorMode == "light" ? "gray.50" : "gray.800",
                    }}
                    as={Link}
                    href="https://portal.its.ac.id"
                    pos="unset"
                  >
                    <Box>
                      <Text>
                        Rencana studi Anda telah disetujui oleh Dosen Wali
                      </Text>
                      <Flex alignItems="center" mt="5px" gap={2}>
                        <Box
                          w="8px"
                          h="8px"
                          borderRadius="full"
                          bg={colorMode == "light" ? "red.500" : "redDim.500"}
                        />
                        <Text fontSize="12px" color="gray">
                          Baru saja
                        </Text>
                      </Flex>
                    </Box>
                  </MenuItem>
                  <MenuDivider
                    mx=".75rem"
                    borderColor={colorMode == "light" ? "gray.100" : "gray.700"}
                  />
                  <MenuItem
                    bg="transparent"
                    fontSize="14px"
                    fontWeight={600}
                    py="12px"
                    borderRadius="16px"
                    transition=".25s all"
                    _hover={{
                      bg: colorMode == "light" ? "gray.50" : "gray.800",
                    }}
                    as={Link}
                    href="https://portal.its.ac.id"
                    pos="unset"
                  >
                    <Box>
                      <Text>Pengambilan kelas Pemrograman Web (B) berhasil diambil</Text>
                      <Flex alignItems="center" mt="5px" gap={2}>
                        <Box
                          w="8px"
                          h="8px"
                          borderRadius="full"
                          bg={colorMode == "light" ? "red.500" : "redDim.500"}
                        />
                        <Text fontSize="12px" color="gray">
                          30 menit yang lalu
                        </Text>
                      </Flex>
                    </Box>
                  </MenuItem>
                  <MenuDivider
                    mx=".75rem"
                    borderColor={colorMode == "light" ? "gray.100" : "gray.700"}
                  />
                  <MenuItem
                    bg="transparent"
                    fontSize="14px"
                    fontWeight={400}
                    py="12px"
                    borderRadius="16px"
                    transition=".25s all"
                    _hover={{
                      bg: colorMode == "light" ? "gray.50" : "gray.800",
                    }}
                    as={Link}
                    href="https://portal.its.ac.id"
                    pos="unset"
                  >
                    <Box>
                      <Text color="gray">
                        Pengambilan kelas Pemrograman Web (A) dibatalkan karena
                        kelas sudah penuh
                      </Text>
                      <Flex alignItems="center" mt="5px" gap={2}>
                        <Text fontSize="12px" color="gray">
                          1 hari yang lalu
                        </Text>
                      </Flex>
                    </Box>
                  </MenuItem>
                </Box>
              </MenuList>
            </Menu>
            <Menu closeOnSelect={false}>
              <MenuButton
                className="header__user"
                cursor="pointer"
                display={{ base: "block" }}
                flexShrink="0"
                w="40px"
                h="40px"
                ml={{ base: "0", m: "24px" }}
                fontSize="0"
                backgroundSize="contain"
                borderRadius="50%"
                position={"relative"}
                overflow={"hidden"}
              >
                <Image
                  alt="Saya"
                  src="/pp.jpg"
                  width={40}
                  height={40}
                  placeholder="blur"
                  blurDataURL={defaultProfilePicture.blurDataURL}
                />
                {/* <Image
                  src={accountInfo.profPicture ?? defaultProfilePicture}
                  width={40}
                  height={40}
                  placeholder="blur"
                  blurDataURL={defaultProfilePicture.blurDataURL}
                /> */}
              </MenuButton>
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
                w={{ base: "calc(100vw - 32px)", s: "350px" }}
                transition="all .25s"
                mx={{ base: "16px", s: "unset" }}
              >
                <Box p="1rem 0.75rem">
                  <Text fontSize="16px" fontWeight="600">
                    {/* {accountInfo.name} */}
                    Fulan
                  </Text>
                  <Text fontSize="14px" fontWeight="500" color="gray" mt="6px">
                    {/* {accountInfo.prefUsername} */}
                    example@email.com
                  </Text>
                  {/* {accountInfo.activeRole && ( */}
                  <Text fontSize="14px" fontWeight="500" color="gray" mt="6px">
                    {/* @ts-expect-error */}
                    {/* {commonTranslations(`roles.${accountInfo.activeRole}`)} */}
                    Mahasiswa
                  </Text>
                  {/* )} */}
                </Box>
                {/* {accountInfo.role && accountInfo.role.length > 1 && ( */}
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
                  {/* {commonTranslations("switch_role")} */}
                  Ganti Role
                </MenuItem>
                {/* )} */}
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
                  {/* {commonTranslations("to_myits_portal")} */}
                  Ke myITS Portal
                </MenuItem>
                <MenuDivider
                  mx=".75rem"
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
                  color={colorMode == "light" ? "red.500" : "redDim.500"}
                  onClick={signOut}
                >
                  {/* {commonTranslations("sign_out")} */}
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

      <ModalGantiRole isOpen={isOpenGantiRole} onClose={onCloseGantiRole} />
    </>
  );
};

const ModalGantiRole = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const { colorMode } = useColorMode();
  // const accountInfo = useContext(AccountInfoContext);
  // const commonTranslations = useTranslations("Common");

  // Role stuff
  const toast = useToast();
  // const roles =
  //   accountInfo.role?.map((role) => ({
  //     value: role.id,
  //     // @ts-expect-error
  //     label: commonTranslations(`roles.${role.id}`),
  //   })) ?? [];
  // const activeRole = roles.find((role) => role.value == accountInfo.activeRole);
  const formId = useId();
  const [isSwitchingRole, setSwitchingRole] = useState(false);

  const handleChangeRole: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const newRoleId = formData.get("role") as string;

    try {
      setSwitchingRole(true);
      localStorage.setItem("active_role", newRoleId);
      await mutate("auth");

      // toast({
      //   position: "top-right",
      //   status: "success",
      //   duration: 5000,
      //   isClosable: true,
      //   render: (props) => (
      //     <ToastCard
      //       title={commonTranslations("role_successfully_changed")}
      //       description={commonTranslations("role_changed_to_x", {
      //         // @ts-expect-error
      //         x: commonTranslations(`roles.${newRoleId}`),
      //       })}
      //       onClose={props.onClose}
      //       status="success"
      //       icon={<CheckmarkOutlineIconMade fontSize="24px" color="white" />}
      //     />
      //   ),
      // });
    } catch (e) {
      let slug = "unknown";
      if (axios.isAxiosError(e) && e.response?.data?.message) {
        slug = e.response.data.message;
      }

      const messages = new Map([
        ["user_does_not_have_this_role", "Anda tidak memiliki role ini"],
      ]);

      toast({
        position: "top-right",
        status: "error",
        duration: 5000,
        isClosable: true,
        render: (props) => (
          <ToastCard
            title="Role gagal diganti"
            description={
              messages.get(slug) ?? "Terjadi kesalahan saat mengganti role"
            }
            onClose={props.onClose}
            status="error"
            icon={<CloseOutlineIconMade fontSize="24px" color="white" />}
          />
        ),
      });
    } finally {
      setSwitchingRole(false);
      onClose();
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="lg" isCentered>
      <ModalOverlay />
      <ModalContent
        borderRadius="16px"
        py="8px"
        m="16px 24px"
        bg={useColorModeValue("white", "gray.900")}
      >
        <ModalHeader
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          {/* {commonTranslations("switch_role")} */}
          Ganti Role
        </ModalHeader>

        {/* @ts-expect-error */}
        <ModalBody as="form" onSubmit={handleChangeRole} id={formId}>
          <Box w="full">
            {/* <DropdownSelect
              placeholder="Pilih role"
              defaultValue={activeRole}
              name="role"
              options={roles}
              isDisabled={false}
              isMulti={false}
              isClearable={false}
            /> */}
          </Box>
        </ModalBody>
        <ModalFooter display="flex" pt="24px" gap={2}>
          <Center w={{ base: "full", s: "auto" }}>
            <DaliGhostButton onClick={onClose}>
              {/* {commonTranslations("cancel")} */}
              Batalkan
            </DaliGhostButton>
          </Center>
          <Center w={{ base: "full", s: "auto" }}>
            <PrimaryButton
              form={formId}
              type="submit"
              isLoading={isSwitchingRole}
              // loadingText={commonTranslations("switching_role")}
            >
              {/* {commonTranslations("switch")} */}
              Ganti
            </PrimaryButton>
          </Center>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default PageTransition;

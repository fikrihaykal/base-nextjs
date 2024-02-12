import { MdPrimaryButton } from "@/components/atoms/Buttons/MdPrimaryButton";
import { MdSecondaryButton } from "@/components/atoms/Buttons/MdSecondaryButton";
import { PrimaryButton } from "@/components/atoms/Buttons/PrimaryButton";
import {
  ChevronDownOutlineIconMade,
  EditOutlineIconMade,
  TrashOutlineIconMade,
} from "@/components/atoms/IconsMade";
import { InputAreaNoLabel } from "@/components/molecules/InputArea";
import { InputFormikNoLabel } from "@/components/molecules/InputField";
import { MotionBox } from "@/components/motion/Motion";
import ModalAnimated from "@/components/organisms/Modal";
import { RencanaKerja, RencanaKerjaRequest } from "@/types/renker";
import { fetcherGetBackend } from "@/utils/common/Fetcher";
import {
  Box,
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Spinner,
  Text,
  useColorMode,
  useDisclosure,
} from "@chakra-ui/react";
import axios from "axios";
import { Form, Formik } from "formik";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { useEffect, useState } from "react";
import useSWR, { mutate } from "swr";

const AktivitasKerjaWidget = () => {
  const { data: dataRealisasi } = useSWR("data_realisasi", fetcherGetBackend);
  const [animateDone, setAnimateDone] = useState<boolean>(false);

  const { colorMode } = useColorMode();

  function validateName(valueName: string) {
    let error;
    if (!valueName) {
      error = "Wajib diisi";
    }
    return error;
  }
  const addItem = (subjudul: string) => {
    const addNew: RencanaKerjaRequest = {
      deskripsi: subjudul,
    };
    const endpoint =
      (process.env.NEXT_PUBLIC_BACKEND_URL ?? "localhost:8080") +
      "/rencana-kerja/tambah";
    axios
      .post(endpoint, addNew, {
        withCredentials: true,
        xsrfCookieName: "CSRF-TOKEN",
        xsrfHeaderName: "X-CSRF-TOKEN",
        withXSRFToken: true,
      })
      .then((res) => {
        mutate("data_realisasi");
      });
  };

  const animations = {
    initial: { scale: 0.3, height: "0px", opacity: 0 },
    animate: {
      scale: 0.93,
      opacity: 1,
      height: "90px",
      transition: {
        duration: 0.4,
        easing: "easeOut",
        scale: {
          delay: 1,
        },
        height: {
          delay: 0.8,
          duration: 0.4,
        },
        opacity: {
          delay: 1,
        },
      },
    },
    exit: {
      scale: 0,
      height: "0px",
      opacity: 0,
      transition: {
        duration: 0.4,
        easing: "easeOut",
        delay: 0,
      },
    },
  };

  return (
    <Formik
      initialValues={{
        subjudul: "",
      }}
      onSubmit={(values, actions) => {
        actions.setSubmitting(false);
        addItem(values.subjudul);
        actions.resetForm();
      }}
    >
      {(props) => (
        <LayoutGroup>
          <MotionBox
            className="card__big"
            pos="relative"
            layout
            p="32px"
            pb="64px"
            borderRadius="24px"
            bg={colorMode == "light" ? "#fff" : "#222222"}
            boxShadow="rgba(17, 12, 46, 0.07) 0px 18px 160px 10px"
          >
            <MotionBox layout>
              <Form>
                <Text fontWeight="550" fontSize="16px" mb="16px">
                  Tambah aktivitas baru
                </Text>
                <Flex
                  w="100%"
                  gap="18px"
                  wrap={["wrap", "wrap", "nowrap"]}
                  alignItems="center"
                  mb="16px"
                >
                  <InputFormikNoLabel
                    name="subjudul"
                    type="text"
                    label="Subjudul"
                    validate={validateName}
                    req
                  />
                  <PrimaryButton
                    isLoading={props.isSubmitting}
                    type="submit"
                    mt="-18px"
                  >
                    Tambahkan
                  </PrimaryButton>
                </Flex>
              </Form>
              <Text fontWeight="550" fontSize="16px" mb="16px">
                Aktivitas kerja
              </Text>
            </MotionBox>
            <MotionBox
              layout
              pt="1px"
              overflowY="hidden"
              overflowX="scroll"
              minH="112px"
              sx={{
                "::-webkit-scrollbar-thumb": {
                  backgroundColor: colorMode == "light" ? "#dadada" : "#313131",
                  border: "5px solid transparent",
                },
                "::-webkit-scrollbar-thumb:hover": {
                  backgroundColor: colorMode == "light" ? "#b3b3b3" : "#393939",
                },
              }}
            >
              <AnimatePresence initial={false} mode="popLayout">
                {dataRealisasi?.filter((val) => val.completed_at == null)
                  .length == 0 ? (
                  <Flex
                    as={motion.div}
                    {...animations}
                    initial={
                      animateDone
                        ? { scale: 0.3, height: "0px", opacity: 0 }
                        : false
                    }
                    w="100%"
                    flexDir="column"
                    justifyContent="center"
                    alignItems="center"
                    fontWeight="550"
                    pos="relative"
                  >
                    <Box
                      pos="absolute"
                      w="56px"
                      h="56px"
                      bgSize="contain"
                      bgRepeat="no-repeat"
                      bgImage="images/icon/info.png"
                      top="0"
                      left="calc(50% - 28px)"
                    ></Box>
                    <Text mt="64px">Anda tidak punya aktivitas kerja</Text>
                  </Flex>
                ) : (
                  dataRealisasi
                    ?.filter((val) => val.completed_at == null)
                    .sort()
                    .map((item: any, index: any) => (
                      <Item
                        key={item.id}
                        relkerItem={item}
                        relkerIndex={index}
                        setAnimateDone={setAnimateDone}
                      ></Item>
                    ))
                )}
              </AnimatePresence>
              {/* )} */}
            </MotionBox>
          </MotionBox>
        </LayoutGroup>
      )}
    </Formik>
  );
};

export default AktivitasKerjaWidget;

export const Item = ({
  relkerItem,
  relkerIndex,
  setAnimateDone,
}: {
  relkerItem: RencanaKerja;
  relkerIndex: number;
  setAnimateDone?: any;
}) => {
  const { colorMode } = useColorMode();

  const [isWorkingLoading, setIsWorkingLoading] = useState<boolean>(false);
  const [isDoneLoading, setIsDoneLoading] = useState<boolean>(false);
  const [isDelLoading, setIsDelLoading] = useState<boolean>(false);
  const [isDone, setIsDone] = useState<boolean>(false);

  const animations = {
    initial: { opacity: 0, height: "0px" },
    animate: {
      opacity: 1,
      height: "90px",
      transition: { duration: 0.25, easing: "easeOut", delay: 0.2 },
    },
    exit: {
      opacity: 0,
      height: "0px",
      transition: {
        duration: 0.25,
        easing: "easeOut",
        delay: isDone ? 0.5 : 0.2,
      },
    },
  };

  const handleEdit = (id: string, deskripsi: string) => {
    const editAkin: RencanaKerjaRequest = {
      deskripsi: deskripsi,
    };
    const endpoint =
      (process.env.NEXT_PUBLIC_BACKEND_URL ?? "localhost:8080") +
      "/rencana-kerja/" +
      id +
      "/edit";

    axios
      .post(endpoint, editAkin, {
        withCredentials: true,
        xsrfCookieName: "CSRF-TOKEN",
        xsrfHeaderName: "X-CSRF-TOKEN",
        withXSRFToken: true,
      })
      .then(() => {
        mutate("data_realisasi");
      });
  };

  const setWorking = (id: string) => {
    setIsWorkingLoading(true);
    const endpoint =
      (process.env.NEXT_PUBLIC_BACKEND_URL ?? "localhost:8080") +
      "/rencana-kerja/" +
      id +
      "/mulai";

    axios
      .post(endpoint, id, {
        withCredentials: true,
        xsrfCookieName: "CSRF-TOKEN",
        xsrfHeaderName: "X-CSRF-TOKEN",
        withXSRFToken: true,
      })
      .then(() => {
        setTimeout(function () {
          mutate("data_realisasi");
          setIsWorkingLoading(false);
        }, 500);
      });
  };

  const setDone = (id: string) => {
    setIsDoneLoading(true);
    const endpoint =
      (process.env.NEXT_PUBLIC_BACKEND_URL ?? "localhost:8080") +
      "/rencana-kerja/" +
      id +
      "/akhiri";

    axios
      .post(endpoint, id, {
        withCredentials: true,
        xsrfCookieName: "CSRF-TOKEN",
        xsrfHeaderName: "X-CSRF-TOKEN",
        withXSRFToken: true,
      })
      .then(() => {
        setTimeout(function () {
          mutate("data_realisasi");
          setIsDoneLoading(false);
          setIsDone(true);
          setAnimateDone(true);
        }, 500);
      });
  };

  const removeItem = (id: string) => {
    setIsDelLoading(true);
    const endpoint =
      (process.env.NEXT_PUBLIC_BACKEND_URL ?? "localhost:8080") +
      "/rencana-kerja/" +
      id +
      "/hapus";

    axios
      .post(endpoint, id, {
        withCredentials: true,
        xsrfCookieName: "CSRF-TOKEN",
        xsrfHeaderName: "X-CSRF-TOKEN",
        withXSRFToken: true,
      })
      .then(() => {
        setTimeout(function () {
          mutate("data_realisasi");
          setIsDelLoading(false);
          setAnimateDone(true);
        }, 500);
      });
  };

  const [workTooltip, setWorkTooltip] = useState<boolean>(false);
  const [doneTooltip, setDoneTooltip] = useState<boolean>(false);

  const modalDisclosure = useDisclosure();
  function validateName(valueName: string) {
    let error;
    if (!valueName) {
      error = "Wajib diisi";
    }
    return error;
  }

  return (
    <Formik
      initialValues={{
        subjudulBaru: "",
      }}
      onSubmit={(values, actions) => {
        actions.setSubmitting(false);
        if (relkerItem.id !== undefined) {
          handleEdit(relkerItem.id, values.subjudulBaru);
        }
        modalDisclosure.onClose();
        actions.resetForm();
      }}
    >
      {(props) => (
        <>
          <Box
            as={motion.div}
            layout
            {...animations}
            pos="relative"
            className="relker__item"
            minW="800px"
            style={{
              background: colorMode == "light" ? "#fff" : "#222222",
              width: "100%",
              alignItems: "center",
              borderTop:
                colorMode == "light"
                  ? "1px solid #e4e4e4"
                  : "1px solid #343434",
              borderBottom:
                colorMode == "light"
                  ? "1px solid #e4e4e4"
                  : "1px solid #343434",
              marginTop: "-1px",
            }}
          >
            <Flex dir="column" justifyContent="start" alignItems="center">
              <Flex
                className="file__container"
                alignItems="center"
                transition="color .15s"
                _groupHover={{
                  color: "#008fff",
                }}
                my="20px"
              >
                <Flex gap="8px">
                  <MotionBox
                    as={Button}
                    isLoading={isWorkingLoading}
                    spinner={
                      <Spinner
                        speed=".8s"
                        thickness="4px"
                        size="lg"
                        color="#a0a0a0"
                      />
                    }
                    display="flex"
                    cursor="pointer"
                    pos="relative"
                    justifyContent="center"
                    alignItems="center"
                    flexShrink="0"
                    w="48px"
                    h="48px"
                    p="0px"
                    m="0px"
                    zIndex="22"
                    borderRadius="50%"
                    fontSize={isWorkingLoading ? "24px" : "0"}
                    bg="#008fff33"
                    filter={
                      relkerItem.status_pekerjaan == 2
                        ? "none"
                        : "grayscale(100%)"
                    }
                    opacity={
                      relkerItem.status_pekerjaan == 2
                        ? "1"
                        : colorMode == "light"
                        ? "0.32"
                        : "0.45"
                    }
                    _hover={{
                      filter: "none",
                      opacity: "1",
                      backgroundColor: "#008fff45",
                    }}
                    transition="all 0.12s ease-in-out"
                    onClick={() => {
                      if (relkerItem.id !== undefined) {
                        relkerItem.status_pekerjaan == "2"
                          ? null
                          : setWorking(relkerItem.id);
                      }
                    }}
                  >
                    <MotionBox
                      w="36px"
                      h="36px"
                      pos="relative"
                      bgSize="contain"
                      bgRepeat="no-repeat"
                      bgImage="images/icon/play.png"
                      onHoverStart={() => setWorkTooltip(true)}
                      onHoverEnd={() => setWorkTooltip(false)}
                      whileTap={{ scale: 0.95 }}
                    ></MotionBox>
                    <MotionBox
                      display={workTooltip ? "flex" : "none"}
                      pos="absolute"
                      bg={colorMode == "light" ? "#fff" : "#222222"}
                      border={
                        colorMode == "light"
                          ? "1px solid #e4e4e4"
                          : "1px solid #343434"
                      }
                      top="-12px"
                      width="118px"
                      p="2px"
                      py="3px"
                      borderRadius="6px"
                      borderBottomLeftRadius="0px"
                      zIndex="2"
                      left="32px"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Text fontSize="12px" fontWeight="450">
                        Mulai pengerjaan
                      </Text>
                    </MotionBox>
                  </MotionBox>

                  <Flex
                    as={Button}
                    isLoading={isDoneLoading}
                    spinner={
                      <Spinner
                        speed=".8s"
                        thickness="4px"
                        size="lg"
                        color="#a0a0a0"
                      />
                    }
                    cursor="pointer"
                    pos="relative"
                    justifyContent="center"
                    alignItems="center"
                    flexShrink="0"
                    w="48px"
                    h="48px"
                    p="0"
                    m="0"
                    zIndex="20"
                    borderRadius="50%"
                    fontSize={isDoneLoading ? "24px" : "0"}
                    isDisabled={relkerItem.status_pekerjaan == 1 ? true : false}
                    filter={isDone ? "none" : "grayscale(100%)"}
                    opacity={
                      isDone ? "1" : colorMode == "light" ? "0.42" : "0.28"
                    }
                    bg="#57bc3b30"
                    _hover={{
                      filter:
                        relkerItem.status_pekerjaan == 1
                          ? "grayscale(100%)"
                          : "none",
                      opacity:
                        relkerItem.status_pekerjaan == 1
                          ? colorMode == "light"
                            ? "0.42"
                            : "0.28"
                          : "1",
                      backgroundColor: "#57bc3b44",
                    }}
                    transition="all 0.12s ease-in-out"
                    onClick={() => {
                      if (relkerItem.id !== undefined) {
                        isDone ? null : setDone(relkerItem.id);
                      }
                    }}
                  >
                    <MotionBox
                      w="36px"
                      h="36px"
                      bgSize="contain"
                      pos="relative"
                      bgRepeat="no-repeat"
                      bgImage="images/icon/checkmark.png"
                      whileTap={{ scale: 0.95 }}
                      onHoverStart={() => setDoneTooltip(true)}
                      onHoverEnd={() => setDoneTooltip(false)}
                    ></MotionBox>
                    <Box
                      display={
                        doneTooltip
                          ? relkerItem.status_pekerjaan == 1
                            ? "none"
                            : "flex"
                          : "none"
                      }
                      pos="absolute"
                      bg={colorMode == "light" ? "#fff" : "#222222"}
                      border={
                        colorMode == "light"
                          ? "1px solid #e4e4e4"
                          : "1px solid #343434"
                      }
                      // display="flex"
                      top="-12px"
                      width="80px"
                      p="2px"
                      py="3px"
                      borderRadius="6px"
                      borderBottomLeftRadius="0px"
                      zIndex="2"
                      left="32px"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Text fontSize="12px" fontWeight="450">
                        Selesaikan
                      </Text>
                    </Box>
                  </Flex>
                </Flex>
              </Flex>
              <Box className="file__detail" ml="16px" w="100%">
                <Box
                  display="flex"
                  alignItems="center"
                  className="file__title"
                  mb="4px"
                  fontSize="16px"
                  lineHeight="1.1875"
                  fontWeight="600"
                  _groupHover={{
                    color: "#008fff",
                  }}
                >
                  <Box
                    display="flex"
                    flexDir="column"
                    alignItems="center"
                    h="100%"
                    justifyContent="center"
                    gap="4px"
                    mt="2px"
                  >
                    <Flex w="100%" pos="relative">
                      <Text
                        variant="tabletitle"
                        pos="relative"
                        data-group="card--shadow"
                        fontSize="16px"
                        lineHeight="1.1875"
                        fontWeight="500"
                        color={
                          relkerItem.status_pekerjaan == 1
                            ? "#a5a5a5"
                            : "#141414"
                        }
                        // w="max-content"
                        wordBreak="break-word"
                        _groupHover={{
                          color: "#008fff",
                        }}
                      >
                        {relkerItem.deskripsi}
                      </Text>
                      {/* <motion.div
                        // layout
                        style={{
                          zIndex: "1",
                          position: "absolute",
                          height: "2px",
                          background: colorMode == "light" ? "#ed3f3f" : "#fff",
                          top: "calc(50% + 1px)",
                          // width: "20%",
                        }}
                        {...strikeAnimation}
                      ></motion.div>
                      <Flex
                        flex="1"
                        zIndex="2"
                        bg={colorMode == "light" ? "#fff" : "#222222"}
                      ></Flex> */}
                    </Flex>
                    <Flex w="100%" pos="relative">
                      <Text
                        variant="tabletitle"
                        pos="relative"
                        data-group="card--shadow"
                        fontSize="14px"
                        lineHeight="1.1875"
                        fontWeight="400"
                        color="#a5a5a5"
                        // w="max-content"
                        wordBreak="break-word"
                      >
                        {relkerItem.status_pekerjaan == "1"
                          ? "Belum dimulai"
                          : relkerItem.status_pekerjaan == "2"
                          ? "Sedang dikerjakan"
                          : "Selesai"}
                      </Text>
                      {/* <motion.div
                        // layout
                        style={{
                          zIndex: "1",
                          position: "absolute",
                          height: "2px",
                          background: colorMode == "light" ? "#ed3f3f" : "#fff",
                          top: "calc(50% + 1px)",
                          // width: "20%",
                        }}
                        {...strikeAnimation}
                      ></motion.div>
                      <Flex
                        flex="1"
                        zIndex="2"
                        bg={colorMode == "light" ? "#fff" : "#222222"}
                      ></Flex> */}
                    </Flex>
                  </Box>
                </Box>
              </Box>

              {handleEdit != undefined ? (
                <Menu
                  isLazy
                  strategy="fixed"
                  isOpen={isDelLoading ? true : undefined}
                >
                  {({ isOpen }) => (
                    <>
                      <MenuButton
                        cursor="pointer"
                        mt="4px"
                        mr="24px"
                        _groupHover={{
                          color: "red",
                        }}
                        data-group="menuRelker"
                      >
                        <Box
                          display="flex"
                          w="max-content"
                          alignItems="center"
                          gap={2}
                          _groupHover={{
                            color: "#0072cc",
                          }}
                          color={colorMode == "light" ? "#008ffa" : "#007FEB"}
                          // data-group="menuRelker"
                        >
                          <Text fontSize="14px" fontWeight={600}>
                            Lihat menu
                          </Text>
                          <ChevronDownOutlineIconMade
                            fontSize="16px"
                            mt={!isOpen ? "2px" : "0px"}
                            transition="transform 0.3s ease"
                            transform={
                              !isOpen ? "rotate(0deg)" : "rotate(-180deg)"
                            }
                          />
                        </Box>
                      </MenuButton>
                      <MenuList
                        zIndex="20"
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
                        <MenuItem
                          icon={<EditOutlineIconMade fontSize="18px" />}
                          bg="transparent"
                          fontSize="14px"
                          fontWeight="600"
                          py="16px"
                          borderRadius="16px"
                          transition=".25s all"
                          _hover={{
                            bg: colorMode == "light" ? "#f4f4f4" : "#343434",
                          }}
                          onClick={() => modalDisclosure.onOpen()}
                        >
                          <Flex
                            justifyContent="space-between"
                            alignItems="center"
                          >
                            <Text>Edit</Text>
                          </Flex>
                        </MenuItem>

                        {/* <MenuItem
                        isDisabled
                        icon={<UsersOutlineIconMade fontSize="18px" />}
                        bg="transparent"
                        fontSize="14px"
                        fontWeight="600"
                        py="16px"
                        borderRadius="16px"
                        transition=".25s all"
                        _hover={{
                          bg: colorMode == "light" ? "#f4f4f4" : "#343434",
                        }}
                      >
                        <Flex
                          justifyContent="space-between"
                          alignItems="center"
                        >
                          <Text>Delegasi</Text>
                        </Flex>
                      </MenuItem> */}
                        <MenuDivider
                          borderColor={
                            colorMode == "light" ? "gray.100" : "gray.700"
                          }
                        />
                        <MenuItem
                          as={Button}
                          isLoading={isDelLoading}
                          spinner={
                            <Spinner
                              size="md"
                              thickness="3px"
                              speed="0.8s"
                            ></Spinner>
                          }
                          // closeOnSelect={false}
                          icon={<TrashOutlineIconMade fontSize="18px" />}
                          bg="transparent"
                          fontSize="14px"
                          fontWeight="600"
                          py="16px"
                          borderRadius="16px"
                          transition=".25s all"
                          _hover={{
                            bg: colorMode == "light" ? "#f4f4f4" : "#343434",
                          }}
                          onClick={() => {
                            if (relkerItem.id !== undefined) {
                              removeItem(relkerItem.id);
                            }
                          }}
                          color={colorMode == "light" ? "red.500" : "#B53F3F"}
                        >
                          <Flex
                            justifyContent="space-between"
                            alignItems="center"
                          >
                            <Text>Hapus</Text>
                          </Flex>
                        </MenuItem>
                      </MenuList>
                    </>
                  )}
                </Menu>
              ) : (
                ""
              )}
            </Flex>
          </Box>

          <ModalAnimated
            {...modalDisclosure}
            headerTitle="Edit aktivitas kerja"
          >
            <Form>
              <Box>
                <InputAreaNoLabel
                  name="subjudulBaru"
                  type="text"
                  label="Isi baru"
                  validate={validateName}
                  req
                  placeholder="Tuliskan Aktivitas kerja baru"
                />

                <Box
                  display={["block", "block", "block", "flex"]}
                  gap="12px"
                  mt="24px"
                  w="100%"
                  justifyContent="end"
                >
                  <MdSecondaryButton onClick={modalDisclosure.onClose}>
                    Batal
                  </MdSecondaryButton>
                  <MdPrimaryButton isLoading={props.isSubmitting} type="submit">
                    Simpan
                  </MdPrimaryButton>
                </Box>
              </Box>
            </Form>
          </ModalAnimated>
        </>
      )}
    </Formik>
  );
};

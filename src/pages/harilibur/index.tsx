import PageTransition from "@/components/PageLayout";
import ContainerQuery from "@/components/atoms/PageCol";
import { RencanaKerjaRequest } from "@/types/renker";
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
  TableContainer,
  Text,
  useColorMode,
  useDisclosure,
} from "@chakra-ui/react";
import axios from "axios";
import { Form, Formik } from "formik";
import useSWR, { mutate } from "swr";
import AktivitasKerjaWidget from "../Widget/AktivitasKerjaWidget";
import PlainCard from "@/components/organisms/Cards/Card";
import { PilihTanggal } from "./PilihTanggal";
import InputArea from "@/components/molecules/InputArea";
import { PrimaryButton } from "@/components/atoms/Buttons/PrimaryButton";
import DropdownSelect from "@/components/customs/Select";
import { InfiniteQuery, TableLoadMoreConf } from "@/utils/table";
import { useEffect, useState } from "react";
import {
  TableWrapper,
  TableSorting,
  TableSortingRow,
  TableSortingCol,
  TableFilter,
} from "@/components/molecules/Table";
import { TableInfinite } from "@/components/organisms/TableInfinite";
import { DropdownItemYr } from "@/data/dummy";
import { DropdownItem } from "@/types/dropdown-items";
import { table } from "console";
import { kolomTabelAbsen } from "@/data/tableRekap";
import PageCol from "@/components/atoms/PageCol";
import PageRow from "@/components/atoms/PageRow";
import { kolomTabelLibur } from "@/data/tableLibur";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { fetcherGetBackend } from "@/utils/common/Fetcher";
import { AnimatePresence, motion } from "framer-motion";
import { Libur } from "@/types/hari-libur";
import { MotionBox } from "@/components/motion/Motion";
import {
  ChevronDownOutlineIconMade,
  EditOutlineIconMade,
  TrashOutlineIconMade,
} from "@/components/atoms/IconsMade";

const HariLibur = () => {
  const { data: dataLibur } = useSWR("data_libur", fetcherGetBackend);

  const { colorMode } = useColorMode();

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

  // const URL =
  //   (process.env.NEXT_PUBLIC_BACKEND_URL ?? "localhost:8080") + "/hari-libur/";
  // const infiniteData = InfiniteQuery(URL, "data_libur");

  // const queryClient = useQueryClient();

  // function validateName(valueName: string) {
  //   let error;
  //   if (!valueName) {
  //     error = "Wajib diisi";
  //   }
  //   return error;
  // }
  // const table = TableLoadMoreConf(infiniteData.flatData, kolomTabelLibur);

  // const mutation = useMutation({
  //   mutationFn: (addNew: {
  //     tanggal_awal: String;
  //     tanggal_akhir: String;
  //     keterangan: String;
  //     jenis: String;
  //   }) => {
  //     const endpoint =
  //       (process.env.NEXT_PUBLIC_BACKEND_URL ?? "localhost:8080") +
  //       "/hari-libur/tambah";
  //     return axios.post(endpoint, addNew, {
  //       withCredentials: true,
  //       xsrfCookieName: "CSRF-TOKEN",
  //       xsrfHeaderName: "X-CSRF-TOKEN",
  //       withXSRFToken: true,
  //     });
  //   },
  //   onSuccess: () => {
  //     queryClient.invalidateQueries({ queryKey: ["data_libur"] });
  //   },
  // });

  return (
    <Formik
      initialValues={{
        subjudulBaru: "",
      }}
      onSubmit={(values, actions) => {
        // actions.setSubmitting(false);
        // if (relkerItem.id !== undefined) {
        //   handleEdit(relkerItem.id, values.subjudulBaru);
        // }
        // modalDisclosure.onClose();
        // actions.resetForm();
      }}
    >
      {(props) => (
        <>
          <PageTransition pageTitle="Manajemen Libur">
            <PageRow>
              <PageCol>
                <PlainCard mb="48px">
                  <Text fontWeight="550" fontSize="20px" mb="16px">
                    Tambah hari libur baru
                  </Text>
                  <Form>
                    <PilihTanggal></PilihTanggal>
                    <InputArea
                      name="keterangan"
                      type="text"
                      label="Keterangan libur"
                      req
                    />

                    <Flex w="100%" flexDir="row-reverse" pt="24px">
                      <PrimaryButton type="submit" mt="-18px">
                        Tambahkan
                      </PrimaryButton>
                    </Flex>
                  </Form>
                </PlainCard>
                {/* <MotionBox
              layout
              pt="1px"
              overflowY="hidden"
              overflowX="scroll"
              minH="112px"
              bg="red"
              sx={{
                "::-webkit-scrollbar-thumb": {
                  backgroundColor: colorMode == "light" ? "#dadada" : "#313131",
                  border: "5px solid transparent",
                },
                "::-webkit-scrollbar-thumb:hover": {
                  backgroundColor: colorMode == "light" ? "#b3b3b3" : "#393939",
                },
              }}
            > */}
                <PlainCard>
                  <AnimatePresence initial={false} mode="popLayout">
                    {dataLibur?.length == 0 ? (
                      <Flex
                        as={motion.div}
                        // {...animations}
                        // initial={
                        //   animateDone
                        //     ? { scale: 0.3, height: "0px", opacity: 0 }
                        //     : false
                        // }
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
                      <Box>
                        <Flex w="100%" h="40px">
                          <Flex minW="300px">
                            {" "}
                            <Text
                              opacity="0.6"
                              fontSize="14px"
                              fontWeight="500"
                            >
                              Tanggal
                            </Text>
                          </Flex>
                          <Flex w="100%">
                            {" "}
                            <Text
                              opacity="0.6"
                              fontSize="14px"
                              fontWeight="500"
                            >
                              Keterangan
                            </Text>
                          </Flex>

                          <Text></Text>
                        </Flex>
                        {dataLibur?.sort().map((item: any, index: any) => (
                          <Item
                            key={item.id}
                            relkerIndex={index}
                            relkerItem={item}
                          ></Item>
                        ))}
                      </Box>
                    )}
                  </AnimatePresence>
                </PlainCard>
                {/* </MotionBox> */}

                <></>
              </PageCol>
            </PageRow>
          </PageTransition>
        </>
      )}
    </Formik>
  );
};
export default HariLibur;

export const Item = ({
  relkerItem,
  relkerIndex,
  setAnimateDone,
}: {
  relkerItem: Libur;
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
            <Flex
              dir="column"
              justifyContent="start"
              alignItems="center"
              h="80px"
            >
              <Flex minW="300px" pos="relative">
                <Text
                  variant="tabletitle"
                  pos="relative"
                  // fontSize="16px"
                  lineHeight="1.1875"
                  fontWeight="500"
                >
                  {new Date(relkerItem.tanggal).toLocaleDateString("id-ID", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
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
                  // fontSize="16px"
                  lineHeight="1.1875"
                  fontWeight="500"
                >
                  {relkerItem.keterangan}
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

          {/* <ModalAnimated
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
          </ModalAnimated> */}
        </>
      )}
    </Formik>
  );
};

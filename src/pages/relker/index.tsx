import PageTransition from "@/components/PageLayout";
import { MdPrimaryButton } from "@/components/atoms/Buttons/MdPrimaryButton";
import { MdSecondaryButton } from "@/components/atoms/Buttons/MdSecondaryButton";
import { PrimaryButton } from "@/components/atoms/Buttons/PrimaryButton";
import { SecondaryButton } from "@/components/atoms/Buttons/SecondaryButton";
import { SmSecondaryButton } from "@/components/atoms/Buttons/SmSecondaryButton";
import {
  ChevronDownOutlineIconMade,
  EditOutlineIconMade,
  TrashOutlineIconMade,
  UsersOutlineIconMade,
} from "@/components/atoms/IconsMade";
import ContainerQuery from "@/components/atoms/PageCol";
import InputArea, { InputAreaNoLabel } from "@/components/molecules/InputArea";
import { InputFormikNoLabel } from "@/components/molecules/InputField";
import { MotionBox } from "@/components/motion/Motion";
import ModalAnimated from "@/components/organisms/Modal";
import { dataRelker } from "@/data/relker";
import { RencanaKerja } from "@/types/renker";
import {
  Box,
  Flex,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Text,
  useColorMode,
  useDisclosure,
} from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const AktivitasKerja = () => {
  const { colorMode } = useColorMode();
  const [relkerItems, setRelkerItems] = useState<RencanaKerja[]>(dataRelker);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleEdit = (relker: RencanaKerja, newIsi: string) => {
    let el = relkerItems.map((item) => {
      if (item.id === relker.id) {
        item.subjudul = newIsi;
        // console.log(item.id, relker.id);
        // console.log(item.subjudul);
      }

      return item;
    });
    // console.log(el);
    setRelkerItems(el);
  };

  const setWorking = (relker: RencanaKerja) => {
    let el = relkerItems.map((item) => {
      if (item.id === relker.id) {
        item.status = 1;
      }
      return item;
    });
    setRelkerItems(el);
  };

  const setPaused = (relker: RencanaKerja) => {
    let el = relkerItems.map((item) => {
      if (item.id === relker.id) {
        item.status = 2;
      }
      return item;
    });
    setRelkerItems(el);
  };

  const setDone = (relker: RencanaKerja) => {
    let el = relkerItems.map((item) => {
      if (item.id === relker.id) {
        item.status = 3;
      }
      return item;
    });
    setRelkerItems(el);
  };

  function validateName(valueName: string) {
    let error;
    if (!valueName) {
      error = "Wajib diisi";
    }
    return error;
  }
  const addItem = (subjudul: string) => {
    const addNew: RencanaKerja = {
      id: uuidv4(),
      date: new Date(),
      status: 2,
      subjudul: subjudul,
    };
    const tempArr = [addNew, ...relkerItems];
    setRelkerItems(tempArr);
    dataRelker.push(addNew);
  };

  const removeItem = (relker: RencanaKerja) => {
    let el = relkerItems.map((item) => {
      if (item.id === relker.id) {
        item.status = 4;
      }
      return item;
    });
    setRelkerItems(el);
  };

  return (
    <Formik
      initialValues={{
        subjudul: "",
      }}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          actions.setSubmitting(false);
          addItem(values.subjudul);
          actions.resetForm();
        }, 1000);
      }}
    >
      {(props) => (
        <PageTransition pageTitle="Aktivitas kerja">
          <Flex className="page__row" mb="80px">
            <ContainerQuery>
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
                  // overflow="hidden"
                >
                  <MotionBox layout>
                    <Form>
                      <Text fontWeight="550" fontSize="16px" mb="16px">
                        Tambah aktivitas baru
                      </Text>
                      <Flex w="100%" gap="18px" alignItems="center" mb="16px">
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
                    overflowY="hidden"
                    overflowX="scroll"
                    sx={{
                      "::-webkit-scrollbar-thumb": {
                        backgroundColor:
                          colorMode == "light" ? "#dadada" : "#313131",
                        border: "5px solid transparent",
                      },
                      "::-webkit-scrollbar-thumb:hover": {
                        backgroundColor:
                          colorMode == "light" ? "#b3b3b3" : "#393939",
                      },
                    }}
                  >
                    <AnimatePresence>
                      {relkerItems
                        .filter((val) => val.status !== 3 && val.status !== 4)
                        .sort((a, b) => b.date.getTime() - a.date.getTime())
                        .map((item, index) => (
                          <Item
                            key={item.id}
                            relkerItem={item}
                            relkerIndex={index}
                            setWorking={() => setWorking(item)}
                            setPaused={() => setPaused(item)}
                            setDone={() => setDone(item)}
                            removeItem={() => removeItem(item)}
                            handleEdit={handleEdit}
                          ></Item>
                        ))}
                    </AnimatePresence>
                  </MotionBox>
                </MotionBox>
              </LayoutGroup>

              {/* </LayoutGroup> */}
            </ContainerQuery>
          </Flex>
        </PageTransition>
      )}
    </Formik>
  );
};

export default AktivitasKerja;

const Item = ({
  relkerItem,
  relkerIndex,
  setWorking,
  setPaused,
  setDone,
  handleEdit,
  removeItem,
}: {
  relkerItem: RencanaKerja;
  relkerIndex: number;
  setWorking: any;
  setPaused: any;
  setDone: any;
  handleEdit: any;
  removeItem: any;
}) => {
  const { colorMode } = useColorMode();
  const animations = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.25, easing: "easeOut" } },
    exit: {
      opacity: 0,
      transition: { duration: 0.25, easing: "easeOut", delay: 0.34 },
    },
  };

  const strikeAnimation = {
    initial: { width: "0%" },
    animate: { width: "0%" },
    exit: { width: "100%" },
    transition: { duration: 0.45, easing: "easeOut" },
  };

  const [workTooltip, setWorkTooltip] = useState<boolean>(false);
  const [pauseTooltip, setPauseTooltip] = useState<boolean>(false);
  const [doneTooltip, setDoneTooltip] = useState<boolean>(false);
  const [st, setSt] = useState<string>("");

  useEffect(() => {
    if (relkerItem.status == 1) {
      setSt("Sedang dikerjakan");
    } else if (relkerItem.status == 2) {
      setSt("Dijeda atau belum dimulai");
    }
  }, [relkerItem.status]);

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
        setTimeout(() => {
          actions.setSubmitting(false);
          handleEdit(relkerItem, values.subjudulBaru);
          modalDisclosure.onClose();
          actions.resetForm();
        }, 1000);
      }}
    >
      {(props) => (
        <>
          <Box
            as={motion.div}
            layout
            {...animations}
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
                <Flex gap="6px">
                  <MotionBox
                    display="flex"
                    cursor="pointer"
                    pos="relative"
                    justifyContent="center"
                    alignItems="center"
                    flexShrink="0"
                    w="44px"
                    h="44px"
                    borderRadius="50%"
                    fontSize="0"
                    bg="#008fff33"
                    filter={relkerItem.status == 1 ? "none" : "grayscale(100%)"}
                    opacity={
                      relkerItem.status == 1
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
                    onClick={setWorking}
                  >
                    <MotionBox
                      w="32px"
                      h="32px"
                      pos="relative"
                      bgSize="contain"
                      bgRepeat="no-repeat"
                      bgImage="images/icon/clock.png"
                      onClick={setWorking}
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
                      top="98%"
                      width="118px"
                      p="2px"
                      py="3px"
                      borderRadius="6px"
                      zIndex="20"
                      left="-37px"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Text fontSize="12px" fontWeight="450">
                        Mulai pengerjaan
                      </Text>
                    </MotionBox>
                  </MotionBox>
                  <Flex
                    cursor="pointer"
                    pos="relative"
                    justifyContent="center"
                    alignItems="center"
                    flexShrink="0"
                    w="44px"
                    h="44px"
                    borderRadius="50%"
                    fontSize="0"
                    bg="#ffdd0033"
                    filter={relkerItem.status == 2 ? "none" : "grayscale(100%)"}
                    opacity={
                      relkerItem.status == 2
                        ? "1"
                        : colorMode == "light"
                        ? "1"
                        : "0.21"
                    }
                    _hover={{
                      filter: "none",
                      opacity: "1",
                      backgroundColor: "#ffdd0050",
                    }}
                    transition="all 0.12s ease-in-out"
                    onClick={setPaused}
                  >
                    <MotionBox
                      w="32px"
                      h="32px"
                      bgSize="contain"
                      bgRepeat="no-repeat"
                      pos="relative"
                      onHoverStart={() => setPauseTooltip(true)}
                      onHoverEnd={() => setPauseTooltip(false)}
                      bgImage={"images/icon/play.png"}
                      onClick={setPaused}
                      whileTap={{ scale: 0.95 }}
                    ></MotionBox>
                    <Box
                      display={pauseTooltip ? "flex" : "none"}
                      pos="absolute"
                      bg={colorMode == "light" ? "#fff" : "#222222"}
                      border={
                        colorMode == "light"
                          ? "1px solid #e4e4e4"
                          : "1px solid #343434"
                      }
                      // display="flex"
                      top="98%"
                      width="50px"
                      p="2px"
                      py="3px"
                      borderRadius="6px"
                      zIndex="2"
                      left="-4px"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Text fontSize="12px" fontWeight="450">
                        Jeda
                      </Text>
                    </Box>
                  </Flex>
                  <Flex
                    cursor="pointer"
                    pos="relative"
                    justifyContent="center"
                    alignItems="center"
                    flexShrink="0"
                    w="44px"
                    h="44px"
                    borderRadius="50%"
                    fontSize="0"
                    filter={relkerItem.status == 3 ? "none" : "grayscale(100%)"}
                    opacity={
                      relkerItem.status == 3
                        ? "1"
                        : colorMode == "light"
                        ? "0.42"
                        : "0.28"
                    }
                    bg="#57bc3b30"
                    _hover={{
                      filter: "none",
                      opacity: "1",
                      backgroundColor: "#57bc3b44",
                    }}
                    transition="all 0.12s ease-in-out"
                    onClick={setDone}
                  >
                    <MotionBox
                      w="32px"
                      h="32px"
                      bgSize="contain"
                      pos="relative"
                      bgRepeat="no-repeat"
                      bgImage="images/icon/checkmark.png"
                      onClick={setDone}
                      whileTap={{ scale: 0.95 }}
                      onHoverStart={() => setDoneTooltip(true)}
                      onHoverEnd={() => setDoneTooltip(false)}
                    ></MotionBox>
                    <Box
                      display={doneTooltip ? "flex" : "none"}
                      pos="absolute"
                      bg={colorMode == "light" ? "#fff" : "#222222"}
                      border={
                        colorMode == "light"
                          ? "1px solid #e4e4e4"
                          : "1px solid #343434"
                      }
                      // display="flex"
                      top="98%"
                      width="80px"
                      p="2px"
                      py="3px"
                      borderRadius="6px"
                      zIndex="2"
                      left="-20px"
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
                  <Flex w="100%" pos="relative">
                    <Text
                      variant="tabletitle"
                      pos="relative"
                      data-group="card--shadow"
                      fontSize="16px"
                      lineHeight="1.1875"
                      fontWeight="550"
                      // w="max-content"
                      wordBreak="break-word"
                      _groupHover={{
                        color: "#008fff",
                      }}
                    >
                      {relkerItem.subjudul}
                    </Text>
                    <motion.div
                      // layout
                      style={{
                        zIndex: "1",
                        position: "absolute",
                        height: "2px",
                        background: colorMode == "light" ? "#141414" : "#fff",
                        top: "calc(50% + 1px)",
                        // width: "20%",
                      }}
                      {...strikeAnimation}
                    ></motion.div>
                    <Flex
                      flex="1"
                      zIndex="2"
                      bg={colorMode == "light" ? "#fff" : "#222222"}
                    ></Flex>
                  </Flex>
                </Box>
                <Flex w="100%" pos="relative">
                  <Box
                    className="file__subtitle"
                    fontSize="13px"
                    pos="relative"
                    lineHeight="1.38462"
                    fontWeight="500"
                    w="max-content"
                    color="#b2b3BD"
                  >
                    {st}
                  </Box>
                  <motion.div
                    style={{
                      zIndex: "1",
                      position: "absolute",
                      height: "2px",
                      background: colorMode == "light" ? "#141414" : "#fff",
                      top: "calc(50% + 1px)",
                    }}
                    {...strikeAnimation}
                  ></motion.div>
                  <Flex
                    flex="1"
                    zIndex="2"
                    bg={colorMode == "light" ? "#fff" : "#222222"}
                  ></Flex>
                </Flex>
              </Box>

              <Menu isLazy strategy="fixed">
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

                      <MenuItem
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
                      </MenuItem>
                      <MenuDivider
                        borderColor={
                          colorMode == "light" ? "gray.100" : "gray.700"
                        }
                      />
                      <MenuItem
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
                        onClick={removeItem}
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

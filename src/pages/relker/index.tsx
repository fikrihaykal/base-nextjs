import PageTransition from "@/components/PageLayout";
import { DarkButton } from "@/components/atoms/Buttons/DarkButton";
import { SmDarkButton } from "@/components/atoms/Buttons/SmDarkButton";
import { SmOutlineButton } from "@/components/atoms/Buttons/SmOutlineBtn";
import { SmPrimaryButton } from "@/components/atoms/Buttons/SmPrimaryButton";
import { SmSecondaryButton } from "@/components/atoms/Buttons/SmSecondaryButton";
import InputField from "@/components/atoms/InputField";
import ContainerQuery from "@/components/atoms/PageCol";
import InputFormik, {
  InputFormikNoLabel,
} from "@/components/molecules/InputField";
import { MotionBox } from "@/components/motion/Motion";
import { dataRelker } from "@/data/relker";
import { RencanaKerja } from "@/types/renker";
import {
  Box,
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useColorMode,
  useDisclosure,
} from "@chakra-ui/react";
import { fa } from "@faker-js/faker";
import { Form, Formik } from "formik";
import {
  AnimatePresence,
  LayoutGroup,
  Reorder,
  motion,
  useIsPresent,
} from "framer-motion";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const RealisasiKerja = () => {
  const { colorMode } = useColorMode();
  const [relkerItems, setRelkerItems] = useState<RencanaKerja[]>(dataRelker);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleEdit = (relker: RencanaKerja, newIsi: string) => {
    let el = relkerItems.map((item) => {
      if (item.id === relker.id) {
        item.subjudul = newIsi;
        console.log(item.id, relker.id);
        console.log(item.subjudul);
      }

      return item;
    });
    console.log(el);
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
      status: 2,
      subjudul: subjudul,
    };
    const tempArr = [addNew, ...relkerItems];
    setRelkerItems(tempArr);
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

  const handleRemoveSelf = (item: RencanaKerja) => {
    setRelkerItems((relkerItems) =>
      relkerItems.filter((data) => data.id !== item.id)
    );
  };

  useEffect(() => {
    console.log(relkerItems);
  }, [relkerItems]);
  // const handleEdit;

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
        <PageTransition pageTitle="Realisasi kerja">
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
                  overflowX="auto"
                >
                  <MotionBox layout>
                    <Form>
                      <Text fontWeight="550" fontSize="16px" mb="16px">
                        Tambah realisasi baru
                      </Text>
                      <Flex w="100%" gap="18px" alignItems="center" mb="16px">
                        <InputFormikNoLabel
                          name="subjudul"
                          type="text"
                          label="Subjudul"
                          validate={validateName}
                          req
                        />
                        <DarkButton
                          isLoading={props.isSubmitting}
                          type="submit"
                          mt="-18px"
                        >
                          Tambahkan
                        </DarkButton>
                      </Flex>
                    </Form>
                    <Text fontWeight="550" fontSize="16px" mb="16px">
                      Realisasi kerja aktif
                    </Text>
                  </MotionBox>
                  <AnimatePresence>
                    {relkerItems
                      .filter((val) => val.status !== 3 && val.status !== 4)
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
              </LayoutGroup>

              {/* </LayoutGroup> */}
            </ContainerQuery>
          </Flex>
        </PageTransition>
      )}
    </Formik>
  );
};

export default RealisasiKerja;

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
    exit: relkerItem.status == 3 ? { width: "100%" } : { width: "0%" },
    transition: { duration: 0.45, easing: "easeOut" },
  };

  const [workTooltip, setWorkTooltip] = useState<boolean>(false);
  const [pauseTooltip, setPauseTooltip] = useState<boolean>(false);
  const [doneTooltip, setDoneTooltip] = useState<boolean>(false);

  // const [relkerIsi, setRelkerIsi] = useState<string>(relkerItem.subjudul);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [st, setSt] = useState<string>("");

  useEffect(() => {
    if (relkerItem.status == 1) {
      setSt("Sedang dikerjakan");
    } else if (relkerItem.status == 2) {
      setSt("Dijeda atau belum dimulai");
    }
  }, [relkerItem.status]);

  return (
    <>
      <Box
        as={motion.div}
        layout
        {...animations}
        className="relker__item"
        minW="800px"
        style={{
          background: "#fff",
          width: "100%",
          alignItems: "center",
          borderTop: "1px solid #e4e4e4",
          borderBottom: "1px solid #e4e4e4",
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
                opacity={relkerItem.status == 1 ? "1" : "0.32"}
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
                  bg="#fff"
                  border="1px solid #e4e4e4"
                  top="98%"
                  width="118px"
                  p="2px"
                  py="3px"
                  borderRadius="6px"
                  zIndex="2"
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
                  // bgImage={
                  //   colorMode == "light"
                  //     ? "images/icon/play.png"
                  //     : "images/icon/playdark.png"
                  // }x
                  onHoverStart={() => setPauseTooltip(true)}
                  onHoverEnd={() => setPauseTooltip(false)}
                  bgImage={"images/icon/play.png"}
                  onClick={setPaused}
                  whileTap={{ scale: 0.95 }}
                ></MotionBox>
                <Box
                  display={pauseTooltip ? "flex" : "none"}
                  pos="absolute"
                  bg="#fff"
                  border="1px solid #e4e4e4"
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
                opacity={relkerItem.status == 3 ? "1" : "0.42"}
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
                  bg="#fff"
                  border="1px solid #e4e4e4"
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
                    background: "#141414",
                    top: "calc(50% + 1px)",
                    // width: "20%",
                  }}
                  {...strikeAnimation}
                ></motion.div>
                <Flex flex="1" zIndex="2" bg="white"></Flex>
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
                  background: "#141414",
                  top: "calc(50% + 1px)",
                }}
                {...strikeAnimation}
              ></motion.div>
              <Flex flex="1" zIndex="2" bg="white"></Flex>
            </Flex>
          </Box>

          <EditForm relkerItem={relkerItem} handleEdit={handleEdit} />
          <SmOutlineButton ml="0px" onClick={removeItem}>
            Hapus
          </SmOutlineButton>
        </Flex>
      </Box>
    </>
  );
};

const EditForm = ({
  relkerItem,
  handleEdit,
}: {
  relkerItem: RencanaKerja;
  handleEdit: any;
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
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
          onClose();
          actions.resetForm();
        }, 1000);
      }}
    >
      {(props) => (
        // <Form>
        <>
          <SmDarkButton onClick={onOpen} mr="12px">
            Edit
          </SmDarkButton>
          <Modal isOpen={isOpen} size="xl" onClose={onClose}>
            <ModalOverlay borderRadius="16px" />
            <ModalContent borderRadius="16px">
              <ModalHeader fontSize="16px" pt="24px">
                Edit realisasi kerja
              </ModalHeader>
              <ModalCloseButton mt="12px" />
              <Form>
                <ModalBody>
                  <InputFormik
                    name="subjudulBaru"
                    type="text"
                    label="Isi baru"
                    validate={validateName}
                    req
                    placeholder="Masukkan realisasi kerja baru"
                  />
                </ModalBody>

                <ModalFooter>
                  <SmSecondaryButton onClick={onClose}>Batal</SmSecondaryButton>
                  <SmPrimaryButton isLoading={props.isSubmitting} type="submit">
                    Simpan
                  </SmPrimaryButton>
                </ModalFooter>
              </Form>
            </ModalContent>
          </Modal>
        </>
      )}
    </Formik>
  );
};

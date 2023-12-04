import PageTransition from "@/components/PageLayout";
import PageCol from "@/components/atoms/PageCol";
import PageRow from "@/components/atoms/PageRow";
import DropdownInput from "@/components/molecules/DropdownInput";
import InputAreaFormik from "@/components/molecules/InputArea";
import InputFormik from "@/components/molecules/InputField";
import InputFileFormik from "@/components/molecules/InputFile";
import { MotionBox } from "@/components/motion/Motion";
import { DropdownKehilangan, DropdownLokasi } from "@/data/dummy";
import ModalContext, { ModalContextProvider } from "@/providers/ModalProvider";
import { Box, Button, Flex, Text, useColorMode } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import Router from "next/router";
import { useContext, useEffect, useState } from "react";

const LaporPenemuan = () => {
  const { colorMode } = useColorMode();
  const [globalFilter, setGlobalFilter] = useState("");

  return (
    <>
      <ModalContextProvider>
        <PageTransition pageTitle="Laporan Penemuan">
          <PageRow>
            <PageCol>
              <FormPenemuan />
            </PageCol>
          </PageRow>
        </PageTransition>
      </ModalContextProvider>
    </>
  );
};

export default LaporPenemuan;

const FormPenemuan = () => {
  const { isModalActive, setIsModalActive } = useContext(ModalContext);
  const { colorMode } = useColorMode();

  return (
    <>
      <Formik
        initialValues={{
          nama: "",
          nrp: "",
          addon: "",
          noTelp: "",
          location: "",
          dokumen: "",
          tipe: "",
        }}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            console.log(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
            setIsModalActive(true);
          }, 1000);
        }}
      >
        {(props) => (
          <Form>
            <>
              <InputFormik
                name="nama"
                type="text"
                label="Nama Pelapor"
                key={1}
                //   validate={validateName}
                req
                placeholder=""
              />
              <InputFormik
                name="nrp"
                type="number"
                key={2}
                label="NRP Pelapor"
                //   validate={validateName}
                req
              />
              <InputFormik
                name="noTelp"
                type="number"
                key={3}
                label="No. Telp."
                //   validate={validateNumber}
                req
                helpertext="Masukkan nomor telepon dengan kode negara. Contoh: +628123456789"
              />

              <Flex mb="8px">
                <Text fontSize="14px" fontWeight="500">
                  Tipe dan Lokasi
                </Text>
                <Text fontSize="14px" fontWeight="500" color="#ff3333">
                  &nbsp;*
                </Text>
              </Flex>

              <Flex ml="-8px" mr="-8px" mb="16px">
                <DropdownInput
                  placeholder="Pilih tipe"
                  data={DropdownKehilangan}
                  target="tipe"
                />
                <DropdownInput
                  placeholder="Pilih lokasi"
                  data={DropdownLokasi}
                  target="lokasi"
                />
              </Flex>
              <InputAreaFormik
                name="addon"
                type="text"
                label="Informasi Tambahan"
                key={4}
                //   validate={validateNumber}
                req
                helpertext="Masukkan informasi tambahan selengkapnya, seperti deskripsi barang atau detail lokasi barang"
              />

              <InputFileFormik
                // display={cutiType == "sakit" ? "blocks" : "none"}
                name="dokumen"
                key={6}
                label="Foto"
                // validate={validateName}
                maxSize={2}
                req
                helpertext=""
              />
              <Flex w="100%" justifyContent="space-between" mt="32px">
                <Button
                  bg={colorMode == "light" ? "#e0e0e040" : "#e0e0e070"}
                  _hover={{
                    background: colorMode == "light" ? "#e0e0e0" : "#e0e0e050",
                  }}
                  color={colorMode == "light" ? "#141414" : "#141414"}
                  minW="166px"
                  h="56px"
                  p="0 20px"
                  borderRadius="16px/16px"
                  fontSize="14px"
                  lineHeight="1.42857"
                  fontWeight="700"
                  transition="all .25s"
                  onClick={() => Router.back()}
                >
                  Batalkan
                </Button>
                <Button
                  bg="#1b1b1b"
                  color="#fff"
                  minW="166px"
                  h="56px"
                  p="0 20px"
                  borderRadius="16px/16px"
                  fontSize="14px"
                  lineHeight="1.42857"
                  fontWeight="700"
                  transition="all .25s"
                  isLoading={props.isSubmitting}
                  type="submit"
                >
                  Laporkan
                </Button>
              </Flex>
            </>
          </Form>
        )}
      </Formik>
      <Modal />
    </>
  );
};

const Modal = () => {
  const { isModalActive, setIsModalActive } = useContext(ModalContext);
  const [scrollY, setScrollY] = useState(0);
  const { colorMode } = useColorMode();

  useEffect(() => {
    setScrollY(document.body.scrollTop);
    isModalActive
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }, [isModalActive, scrollY]);

  const modalVariants = {
    open: {
      y: 0,
      transition: {
        delay: 0.18,
        type: "spring",
        duration: 0.38,
        bounce: 0.15,
      },
    },
    closed: {
      y: "-140%",
      transition: {
        type: "spring",
        duration: 0.38,
        bounce: 0.15,
      },
    },
  };

  const modalBgVariants = {
    open: {
      display: "flex",
      opacity: 1,
      transition: {
        duration: 0.18,
      },
    },
    closed: {
      opacity: 0,
      transition: {
        delay: 0.18,
        duration: 0.18,
      },
      transitionEnd: { display: "none" },
    },
  };

  return (
    <MotionBox
      className="modal__overlay"
      display="none"
      pos="absolute"
      w="100vw"
      h="100vh"
      bg={colorMode == "light" ? "rgba(60,60,60,0.6)" : "rgba(0,0,0,0.7)"}
      top={scrollY}
      left="0"
      zIndex="98"
      overflow="auto"
      justifyContent="center"
      pt="84px"
      onClick={(e) => {
        e.stopPropagation();
        setIsModalActive(false);
      }}
      sx={{
        scrollbarGutter: "stable both-edges",
        "::-webkit-scrollbar-thumb": {
          backgroundColor: colorMode == "light" ? "#dadada" : "#292929",
        },
      }}
      variants={modalBgVariants}
      animate={isModalActive ? "open" : "closed"}
    >
      <MotionBox
        className="modal__container"
        pos="relative"
        mb="84px"
        w="720px"
        h="max-content"
        borderRadius="24px"
        bg={colorMode == "light" ? "white" : "#222222"}
        p="16px"
        zIndex="99"
        variants={modalVariants}
        animate={isModalActive ? "open" : "closed"}
        overflow="none"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {/* Modal body */}
        <Box className="modal__body" p="30px" transition="all .25s">
          <Flex
            w="100%"
            justifyContent="center"
            alignItems="center"
            flexDir="column"
          >
            <Box
              bgImage="/images/checkmark.png"
              bgSize="contain"
              w="210px"
              h="210px"
              bgPos="center"
              bgRepeat="no-repeat"
            ></Box>
            <Text fontWeight="600" fontSize="18px" mt="20px">
              Berhasil!
            </Text>
            <Text fontWeight="400" fontSize="18px">
              Laporan anda berhasil diajukan
            </Text>
          </Flex>
          <Flex justifyContent="center" alignItems="center">
            <Button
              bg="#1b1b1b"
              color="#fff"
              minW="100%"
              h="56px"
              p="0 20px"
              borderRadius="16px/16px"
              fontSize="14px"
              lineHeight="1.42857"
              fontWeight="700"
              transition="all .25s"
              mt="20px"
              _hover={{
                background: colorMode == "light" ? "#008fff" : "#0071ca",
              }}
              onClick={() => {
                setIsModalActive(false);
              }}
            >
              Tutup
            </Button>
          </Flex>
        </Box>
      </MotionBox>
    </MotionBox>
  );
};

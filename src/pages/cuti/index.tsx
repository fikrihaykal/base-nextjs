import PageTransition from "@/components/PageLayout";
import { BoxIconMade, EditIconMade } from "@/components/atoms/IconsMade";
import MenuWrapper from "@/components/atoms/MenuWrapper";
import { Flex, Button, Box, useColorMode, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { DropdownItem, DropdownItemDate } from "@/data/dummy";
import {
  TableSearch,
  TableSorting,
  TableSortingCol,
  TableSortingRow,
  TableWrapper,
  TableFilter,
  TableFilterDate,
  TableContainer,
  TableCheckbox,
} from "@/components/molecules/Table";
import { kolomTabelBerkas } from "@/data/table";
import { ButtonIcon } from "@/components/molecules/Button";
import { TableInfinite } from "@/components/organisms/TableInfinite";
import { InfiniteQuery, TableLoadMoreConf } from "@/utils/table";
import { MotionBox } from "@/components/motion/Motion";
import { AnimatePresence, useCycle } from "framer-motion";
import { Wizard, useWizard } from "react-use-wizard";
import CustomCheckbox from "@/components/atoms/Checkbox";

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

const Cuti = () => {
  const [globalFilter, setGlobalFilter] = useState("");
  const [modalActive, setModalActive] = useCycle(false, true);
  const [scrollY, setScrollY] = useState(0);
  const { colorMode } = useColorMode();

  const URL = "/api/berkas";
  const infiniteData = InfiniteQuery(URL, "berkas");
  const table = TableLoadMoreConf(
    infiniteData.flatData,
    kolomTabelBerkas,
    globalFilter,
    setGlobalFilter
  );

  useEffect(() => {
    setScrollY(document.body.scrollTop);
    console.log(scrollY);
    modalActive
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }, [modalActive, scrollY]);
  return (
    <>
      <PageTransition>
        <Flex className="page__row" mb="80px">
          <MenuWrapper>
            <TableWrapper>
              <TableSorting>
                <TableSortingRow>
                  <TableSortingCol>
                    <TableFilterDate
                      placeholder="Tanpa batas waktu"
                      data={DropdownItemDate}
                      column={table.getHeaderGroups()[0].headers[2].column}
                    />
                    <TableFilter
                      placeholder="Semua jenis"
                      data={DropdownItem}
                      column={table.getHeaderGroups()[0].headers[1].column}
                    />
                  </TableSortingCol>
                  <TableSortingCol>
                    <Flex
                      justifyContent="space-between"
                      alignItems="center"
                      w="full"
                      wrap="wrap"
                    >
                      <TableSearch
                        placeholder="Search"
                        target={setGlobalFilter}
                      />
                      <Flex
                        className="sorting__btn"
                        align-items="center"
                        w={{ base: "100%", s: "unset" }}
                      >
                        {/* MODAL BUTTON */}
                        <Button
                          className="button__more"
                          // bg="#1b1b1b"
                          color="#fff"
                          minW="166px"
                          width={{ base: "100%", s: "unset" }}
                          h="56px"
                          p="0 20px"
                          ml="12px"
                          mr="10px"
                          mt={{ base: "16px", s: "0px" }}
                          borderRadius="16px/16px"
                          fontSize="14px"
                          lineHeight="1.42857"
                          fontWeight="700"
                          transition="all .25s"
                          bg="#008fff"
                          onClick={() => setModalActive(1)}
                          _hover={{
                            background:
                              colorMode == "light" ? "#008fff" : "#0071ca",
                          }}
                          // {...btnProps}
                        >
                          Buat ajuan baru
                        </Button>
                      </Flex>
                    </Flex>
                  </TableSortingCol>
                </TableSortingRow>
              </TableSorting>
              <TableContainer>
                <TableInfinite
                  table={table}
                  infiniteData={infiniteData}
                  select={true}
                />
              </TableContainer>
            </TableWrapper>
          </MenuWrapper>
        </Flex>
      </PageTransition>

      {/* only god know how to make this reusable easily and fit into our system */}
      {/* MODAL */}
      <MotionBox
        className="modal__overlay"
        display="none"
        pos="absolute"
        w="100vw"
        h="100%"
        bg={colorMode == "light" ? "rgba(60,60,60,0.6)" : "rgba(0,0,0,0.7)"}
        top={scrollY}
        left="0"
        zIndex="98"
        overflow="auto"
        justifyContent="center"
        pt="84px"
        onClick={(e) => {
          e.stopPropagation();
          setModalActive(0);
        }}
        variants={modalBgVariants}
        animate={modalActive ? "open" : "closed"}
      >
        <MotionBox
          className="modal__container"
          pos="relative"
          w="720px"
          h="max-content"
          borderRadius="24px"
          bg={colorMode == "light" ? "white" : "#222222"}
          p="16px"
          zIndex="99"
          variants={modalVariants}
          animate={modalActive ? "open" : "closed"}
          overflow="none"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          {/* Modal body */}
          <Box className="modal__body" p="30px">
            <Wizard footer={<Footer />} header={<Header />}>
              <Step1 />
              <Step2 />
              <Step3 />
              <Step4 />
            </Wizard>
          </Box>
        </MotionBox>
      </MotionBox>
      {/* MODAL END */}
      {/* so let us pray and hope hell guide us into the answer */}
      {/* amen */}
    </>
  );
};
export default Cuti;

const Header = () => {
  const {
    isLoading,
    isLastStep,
    isFirstStep,
    activeStep,
    stepCount,
    previousStep,
    nextStep,
    goToStep,
    handleStep,
  } = useWizard();

  return (
    <>
      <Flex w="100%" justifyContent="space-between" mb="16px">
        <Text color="#808080" fontSize="14px">
          {activeStep + 1}/{stepCount}
        </Text>
      </Flex>
    </>
  );
};

const Footer = () => {
  const {
    isLoading,
    isLastStep,
    isFirstStep,
    activeStep,
    stepCount,
    previousStep,
    nextStep,
    goToStep,
    handleStep,
  } = useWizard();
  const { colorMode } = useColorMode();

  // Attach an optional handler
  handleStep(() => {
    // alert("Going to step 2");
  });

  return (
    <>
      <Flex w="100%" justifyContent="space-between">
        <Button
          className="button__more"
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
          _hover={{
            background: !isFirstStep
              ? colorMode == "light"
                ? "#008fff"
                : "#0071ca"
              : "#1b1b1b",
          }}
          onClick={() => previousStep()}
          isDisabled={isFirstStep ? true : false}
        >
          Sebelumnya
        </Button>
        <Button
          className="button__more"
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
          _hover={{
            background: colorMode == "light" ? "#008fff" : "#0071ca",
          }}
          onClick={() => nextStep()}
        >
          Selanjutnya
        </Button>
      </Flex>
    </>
  );
};

const Step1 = () => {
  const {
    isLoading,
    isLastStep,
    isFirstStep,
    activeStep,
    stepCount,
    previousStep,
    nextStep,
    goToStep,
    handleStep,
  } = useWizard();

  const [choosen, setChoosen] = useCycle(false, true);

  // Attach an optional handler
  handleStep(() => {
    // alert("Going to step 3");
  });

  return (
    <>
      <Box w="100%" h="100%" mb="44px">
        <Text fontWeight="500" fontSize="26px" lineHeight="1.2">
          Pilih jenis cuti anda
        </Text>
        <Text fontWeight="400" fontSize="14px" color="#808080">
          Pilih salah satu jenis cuti dibawah sesuai dengan yang anda butuhkan
        </Text>
        <Flex w="100%" gap="24px" mt="32px">
          <Box
            w="100%"
            flex="1"
            borderRadius="16px"
            boxShadow={
              choosen
                ? "inset 0 0 0 2.6px #008ffa"
                : "inset 0 0 0 1.6px #e4e4e4"
            }
            _hover={{
              boxShadow: choosen
                ? "inset 0 0 0 2.6px #008ffa"
                : "inset 0 0 0 1.6px #008ffa",
            }}
            transition="all .18s"
            cursor="pointer"
            p="24px"
            onClick={() => {
              setChoosen();
            }}
          >
            <Flex alignItems="center" h="fit-content">
              {/* <CustomCheckbox isChecked={false} onClick={() => {}} /> */}
              <Box>
                <Text fontWeight="500" fontSize="16px" mb="2px">
                  Cuti Tahunan
                </Text>
                <Text
                  fontWeight="400"
                  fontSize="14px"
                  color="#808080"
                  lineHeight="1.35"
                >
                  Cuti tahunan anda tersisa 8 hari dari 12 hari
                </Text>
              </Box>
            </Flex>
          </Box>

          <Box
            w="100%"
            flex="1"
            borderRadius="16px"
            boxShadow="inset 0 0 0 1.6px #f4f4f4"
            // _hover={{
            //   boxShadow: "inset 0 0 0 1.6px #008ffa",
            // }}
            bg="#f4f4f4"
            transition="all .18s"
            cursor="not-allowed"
            p="24px"
          >
            <Flex alignItems="center" h="fit-content">
              {/* <CustomCheckbox isChecked={false} onClick={() => {}} /> */}
              <Box>
                <Text fontWeight="500" fontSize="16px" mb="2px" color="#c4c4c4">
                  Cuti Besar
                </Text>
                <Text
                  fontWeight="400"
                  fontSize="14px"
                  color="#c4c4c4"
                  lineHeight="1.35"
                >
                  Anda belum berhak mengambil cuti besar
                </Text>
              </Box>
            </Flex>
          </Box>
        </Flex>
        <Flex w="100%" gap="24px" mt="24px">
          <Box
            w="100%"
            flex="1"
            borderRadius="16px"
            boxShadow="inset 0 0 0 1.6px #e4e4e4"
            _hover={{
              boxShadow: "inset 0 0 0 1.6px #008ffa",
            }}
            transition="all .18s"
            cursor="pointer"
            p="24px"
          >
            <Flex alignItems="center" h="fit-content">
              {/* <CustomCheckbox isChecked={false} onClick={() => {}} /> */}
              <Box>
                <Text fontWeight="500" fontSize="16px" mb="4px">
                  Cuti sakit
                </Text>
                <Text
                  fontWeight="400"
                  fontSize="14px"
                  color="#808080"
                  lineHeight="1.35"
                >
                  Wajib menyertakan dokumen bukti sakit baik formal maupun tidak
                </Text>
              </Box>
            </Flex>
          </Box>
          <Box
            w="100%"
            flex="1"
            borderRadius="16px"
            boxShadow="inset 0 0 0 1.6px #f4f4f4"
            // _hover={{
            //   boxShadow: "inset 0 0 0 1.6px #008ffa",
            // }}
            bg="#f4f4f4"
            transition="all .18s"
            cursor="not-allowed"
            p="24px"
          >
            <Flex alignItems="center" h="fit-content">
              {/* <CustomCheckbox isChecked={false} onClick={() => {}} /> */}
              <Box>
                <Text fontWeight="500" fontSize="16px" mb="2px" color="#c4c4c4">
                  Cuti Melahirkan
                </Text>
                <Text
                  fontWeight="400"
                  fontSize="14px"
                  color="#c4c4c4"
                  lineHeight="1.35"
                >
                  Anda tidak berhak mengambil cuti melahirkan
                </Text>
              </Box>
            </Flex>
          </Box>
        </Flex>
        <Flex w="100%" gap="24px" mt="24px">
          <Box
            w="100%"
            flex="1"
            borderRadius="16px"
            boxShadow="inset 0 0 0 1.6px #e4e4e4"
            _hover={{
              boxShadow: "inset 0 0 0 1.6px #008ffa",
            }}
            transition="all .18s"
            cursor="pointer"
            p="24px"
          >
            <Flex alignItems="center" h="fit-content">
              {/* <CustomCheckbox isChecked={false} onClick={() => {}} /> */}
              <Box>
                <Text fontWeight="600" fontSize="16px" mb="2px">
                  Cuti bersama
                </Text>
                <Text
                  fontWeight="400"
                  fontSize="14px"
                  color="#808080"
                  lineHeight="1.3"
                >
                  Cuti bersama tahunan sesuai dengan kalender tahunan
                </Text>
              </Box>
            </Flex>
          </Box>
          <Box
            w="100%"
            flex="1"
            borderRadius="16px"
            boxShadow="inset 0 0 0 1.6px #e4e4e4"
            _hover={{
              boxShadow: "inset 0 0 0 1.6px #008ffa",
            }}
            transition="all .18s"
            cursor="pointer"
            p="24px"
          >
            <Flex alignItems="center" h="fit-content">
              {/* <CustomCheckbox isChecked={false} onClick={() => {}} /> */}
              <Box>
                <Text fontWeight="500" fontSize="16px" mb="2px">
                  Cuti alasan penting
                </Text>
                <Text
                  fontWeight="400"
                  fontSize="14px"
                  color="#808080"
                  lineHeight="1.3"
                >
                  Penjelasan cuti tahunan disini, seperti kenapa tidak bisa
                  dipilih
                </Text>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

const Step2 = () => {
  const {
    isLoading,
    isLastStep,
    isFirstStep,
    activeStep,
    stepCount,
    previousStep,
    nextStep,
    goToStep,
    handleStep,
  } = useWizard();

  // Attach an optional handler
  handleStep(() => {
    // alert("Going to step 3");
  });

  return (
    <>
      <Box w="100%" h="100%" mb="36px">
        <Text fontWeight="500" fontSize="26px" lineHeight="1.2" mb="4px">
          Isi data untuk ajuan cuti anda
        </Text>
        <Text fontWeight="400" fontSize="14px" color="#808080">
          Pastikan data yang anda isikan benar serta isikan data selengkap
          mungkin, untuk mempermudah penyetujuan ajuan cuti anda.
        </Text>
        <Flex w="100%" gap="24px" mt="32px">
          <Box
            w="100%"
            h="56px"
            borderRadius="16px"
            boxShadow="inset 0 0 0 1.6px #e3e6ec"
            _hover={{
              boxShadow: "inset 0 0 0 1.6px #008ffa",
            }}
            transition="all .18s"
            cursor="pointer"
          ></Box>
        </Flex>
        <Flex w="100%" gap="24px" mt="24px">
          <Box
            w="100%"
            h="56px"
            borderRadius="16px"
            boxShadow="inset 0 0 0 1.6px #e3e6ec"
            _hover={{
              boxShadow: "inset 0 0 0 1.6px #008ffa",
            }}
            transition="all .18s"
            cursor="pointer"
          ></Box>
          <Box
            w="100%"
            h="56px"
            borderRadius="16px"
            boxShadow="inset 0 0 0 1.6px #e3e6ec"
            _hover={{
              boxShadow: "inset 0 0 0 1.6px #008ffa",
            }}
            transition="all .18s"
            cursor="pointer"
          ></Box>
        </Flex>
        <Flex w="100%" gap="24px" mt="24px">
          <Box
            w="100%"
            h="120px"
            borderRadius="16px"
            boxShadow="inset 0 0 0 1.6px #e3e6ec"
            _hover={{
              boxShadow: "inset 0 0 0 1.6px #008ffa",
            }}
            transition="all .18s"
            cursor="pointer"
          ></Box>
          <Box
            w="100%"
            h="120px"
            borderRadius="16px"
            boxShadow="inset 0 0 0 1.6px #e3e6ec"
            _hover={{
              boxShadow: "inset 0 0 0 1.6px #008ffa",
            }}
            transition="all .18s"
            cursor="pointer"
          ></Box>
        </Flex>
      </Box>
    </>
  );
};
const Step3 = () => {
  const {
    isLoading,
    isLastStep,
    isFirstStep,
    activeStep,
    stepCount,
    previousStep,
    nextStep,
    goToStep,
    handleStep,
  } = useWizard();

  // Attach an optional handler
  handleStep(() => {
    // alert("Going to step 3");
  });

  return (
    <>
      <Box w="100%" p="36px">
        Step {activeStep + 1}
      </Box>
    </>
  );
};

const Step4 = () => {
  const {
    isLoading,
    isLastStep,
    isFirstStep,
    activeStep,
    stepCount,
    previousStep,
    nextStep,
    goToStep,
    handleStep,
  } = useWizard();

  handleStep(() => {});

  return (
    <>
      <Box w="100%" p="36px">
        Step {activeStep + 1}
      </Box>
      {/* {isLoading && <p>loading...</p>}
      <button onClick={() => previousStep()}>Previous</button>
      <button onClick={() => nextStep()}>Next</button>
      <button onClick={() => goToStep(2)}>Go to the last step</button>
      <div>
        Has next step: {!isLastStep ? "✅" : "⛔"}
        <br />
        Has previous step : {!isFirstStep ? "✅" : "⛔"}
      </div>
      Active step: {activeStep + 1} <br /> */}
    </>
  );
};

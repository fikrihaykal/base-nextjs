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
} from "@/components/molecules/Table";
import { kolomTabelBerkas } from "@/data/table";
import { ButtonIcon } from "@/components/molecules/Button";
import { TableInfinite } from "@/components/organisms/TableInfinite";
import { InfiniteQuery, TableLoadMoreConf } from "@/utils/table";
import { MotionBox } from "@/components/motion/Motion";
import { AnimatePresence, useCycle } from "framer-motion";
import { Wizard, useWizard } from "react-use-wizard";

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
        pt="64px"
        onClick={(e) => {
          e.stopPropagation();
          setModalActive(0);
        }}
        variants={modalBgVariants}
        animate={modalActive ? "open" : "closed"}
      >
        <MotionBox
          pos="relative"
          w="800px"
          h="max-content"
          borderRadius="24px"
          bg={colorMode == "light" ? "white" : "#222222"}
          p="36px"
          zIndex="99"
          variants={modalVariants}
          animate={modalActive ? "open" : "closed"}
          overflow="none"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          {/* Modal body */}
          <Text></Text>
          <Wizard footer={<Footer />} header={<Header />}>
            <Step1 />
            <Step2 />
            <Step3 />
            <Step4 />
          </Wizard>
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
      <Flex w="100%" justifyContent="space-between" mb="24px">
        <Text color={activeStep == 0 ? "#008ffa" : "black"} pr="10px">
          1.Pilih jenis cuti
        </Text>
        <Text color={activeStep == 1 ? "#008ffa" : "black"} pr="10px">
          2.Isi data cuti
        </Text>
        <Text color={activeStep == 2 ? "#008ffa" : "black"} pr="10px">
          3.Upload dokumen tambahan
        </Text>
        <Text color={activeStep == 3 ? "#008ffa" : "black"}>4.Periksa</Text>
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

  // Attach an optional handler
  handleStep(() => {
    // alert("Going to step 2");
  });

  return (
    <>
      <Flex w="100%" justifyContent="space-between">
        <Button
          onClick={() => previousStep()}
          isDisabled={isFirstStep ? true : false}
        >
          Previous
        </Button>
        <Button
          onClick={() => nextStep()}
          isDisabled={isLastStep ? true : false}
        >
          Next
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

  // Attach an optional handler
  handleStep(() => {
    // alert("Going to step 3");
  });

  return (
    <>
      <Box
        w="100%"
        h="200px"
        bg="#e4e4e4"
        borderRadius="12px"
        p="24px"
        mb="24px"
      >
        Step {activeStep + 1}
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
      <Box w="100%" p="36px">
        Step {activeStep + 1}
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

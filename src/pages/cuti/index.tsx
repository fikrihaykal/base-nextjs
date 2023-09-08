import PageTransition from "@/components/PageLayout";
import { BoxIconMade, EditIconMade } from "@/components/atoms/IconsMade";
import MenuWrapper from "@/components/atoms/MenuWrapper";
import {
  Flex,
  Button,
  Box,
  useColorMode,
  Text,
  propNames,
} from "@chakra-ui/react";
import { createContext, useEffect, useState, useContext } from "react";
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
// import WizardWidget from "./wizard/wizard";
import WizardWidget from "./wizard/wizard";
import ModalContext, { ModalContextProvider } from "@/providers/ModalProvider";
import PageBanner from "@/components/organisms/PageBanner";
import Card from "@/components/organisms/Cards/Card";
import PlainCard from "@/components/organisms/Cards/Card";
const Cuti = () => {
  const [globalFilter, setGlobalFilter] = useState("");
  const URL = "/api/berkas";
  const infiniteData = InfiniteQuery(URL, "berkas");
  const table = TableLoadMoreConf(
    infiniteData.flatData,
    kolomTabelBerkas,
    globalFilter,
    setGlobalFilter
  );

  return (
    <>
      <ModalContextProvider>
        <PageTransition>
          <Flex className="page__row" mb="80px">
            <MenuWrapper>
              <PlainCard
                height="200px"
                w="100%"
                mb="36px"
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Box
                  display="flex"
                  flexDir="column"
                  justifyContent="center"
                  alignItems="center"
                  gap="10px"
                >
                  <Text>Belum ada ajuan cuti</Text>
                  <ModalButton />
                </Box>
              </PlainCard>
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
                          {/* <ModalButton /> */}
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
        <Modal></Modal>
      </ModalContextProvider>

      {/* MODAL END */}
      {/* so let us pray and hope hell guide us into the answer */}
      {/* amen */}
    </>
  );
};
export default Cuti;

const ModalButton = () => {
  const { isModalActive, setIsModalActive } = useContext(ModalContext);
  const { colorMode } = useColorMode();
  return (
    <Button
      className="button__more"
      color="#fff"
      minW="166px"
      width={{ base: "100%", s: "unset" }}
      h="56px"
      p="0 20px"
      borderRadius="16px/16px"
      fontSize="14px"
      lineHeight="1.42857"
      fontWeight="700"
      transition="all .25s"
      bg="#1b1b1b"
      onClick={() => {
        setIsModalActive(true);
      }}
      _hover={{
        background:
          colorMode == "light"
            ? isModalActive
              ? "red"
              : "#008fff"
            : "#0071ca",
      }}
    >
      Buat ajuan baru
    </Button>
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
        <Box className="modal__body" p="30px">
          <WizardWidget />
        </Box>
      </MotionBox>
    </MotionBox>
  );
};

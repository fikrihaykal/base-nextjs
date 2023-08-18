import PageTransition from "@/components/PageLayout";
import { BoxIconMade, EditIconMade } from "@/components/atoms/IconsMade";
import MenuWrapper from "@/components/atoms/MenuWrapper";
import { Flex, Button, Box } from "@chakra-ui/react";
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
import { useCycle } from "framer-motion";

const modalVariants = {
  open: {
    y: 0,
    transition: {
      delay: 0.15,
      type: "spring",
      duration: 0.4,
      bounce: 0.2,
    },
  },
  closed: {
    y: "-130%",
    transition: {
      type: "spring",
      duration: 0.4,
      bounce: 0.2,
    },
  },
};

const modalBgVariants = {
  open: {
    display: "flex",
    opacity: 1,
    transition: {
      duration: 0.2,
    },
  },
  closed: {
    opacity: 0,
    transition: {
      duration: 0.2,
    },
    transitionEnd: { display: "none" },
  },
};

const Cuti = () => {
  const [globalFilter, setGlobalFilter] = useState("");
  const [modalActive, setModalActive] = useCycle(false, true);
  const [scrollY, setScrollY] = useState(0);

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
                          // _hover={{
                          //   background:
                          //     colorMode == "light" ? "#008fff" : "#0071ca",
                          // }}
                          // {...btnProps}
                        >
                          Unggah berkas
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
        bg="rgba(0,0,0,0.6)"
        top={scrollY}
        left="0"
        zIndex="99"
        overflow="auto"
        justifyContent="center"
        p="64px"
        onClick={() => setModalActive(0)}
        variants={modalBgVariants}
        animate={modalActive ? "open" : "closed"}
      >
        <MotionBox
          pos="relative"
          w="800px"
          h="max-content"
          borderRadius="24px"
          bg="white"
          p="36px"
          zIndex="99"
          variants={modalVariants}
          animate={modalActive ? "open" : "closed"}
          overflow="none"

        >
          {/* Header */}
          <Box w="100%" h="1200px" bg="red"></Box>
          {/* child over here */}
        </MotionBox>
      </MotionBox>
      {/* MODAL END */}
      {/* so let us pray and hope hell guide us into the answer */}
      {/* amen */}
    </>
  );
};

export default Cuti;

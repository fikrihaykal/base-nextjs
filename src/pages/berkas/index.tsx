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
import { infiniteQuery, tableLoadMoreConf } from "@/utils/table";
import { MotionBox } from "@/components/motion/Motion";
import { useCycle } from "framer-motion";

const modalVariants = {
  open: {
    y: 0,
    transition: {
      delay: 0.15,
      type: "spring",
      duration: 0.4,
      bounce: 0.28,
    },
  },
  closed: {
    y: "-130%",
    transition: {
      type: "spring",
      duration: 0.4,
      bounce: 0.28,
    },
  },
};

const modalBg = {
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

const Berkas = () => {
  const [globalFilter, setGlobalFilter] = useState("");
  const [modalActive, setModalActive] = useCycle(false, true);

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.scrollY;
    console.log(position);
    setScrollPosition(position);
  };

  const URL = "/api/berkas";
  const infiniteData = infiniteQuery(URL, "berkas");
  const table = tableLoadMoreConf(
    infiniteData.flatData,
    kolomTabelBerkas,
    globalFilter,
    setGlobalFilter
  );

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
});

  useEffect(() => {
    modalActive
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }, [modalActive]);

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

      {/* MODAL */}
      <MotionBox
        display="none"
        pos="absolute"
        w="100vw"
        h="100%"
        bg="rgba(0,0,0,0.6)"
        top="0"
        left="0"
        // top= "50%"
        // left= "50%"
        // transform= "translate(-50%, -50%)"
        zIndex="99"
        overflow="none"
        justifyContent="center"
        pt="120px"
        onClick={() => setModalActive(0)}
        variants={modalBg}
        animate={modalActive ? "open" : "closed"}
      >
        <MotionBox
          pos="relative"
          w="600px"
          h="400"
          p="20px"
          borderRadius="24px"
          bg="white"
          zIndex="99"
          variants={modalVariants}
          animate={modalActive ? "open" : "closed"}
        >
          {/* child over here */}
        </MotionBox>
      </MotionBox>
      {/* MODAL END */}
    </>
  );
};

export default Berkas;

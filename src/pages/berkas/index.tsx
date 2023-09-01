import PageTransition from "@/components/PageLayout";
import MenuWrapper from "@/components/atoms/MenuWrapper";
import {Button, Flex} from "@chakra-ui/react";
import React, {useEffect, useMemo, useRef, useState} from "react";
import {DropdownItem, DropdownItemDate} from "@/data/dummy";
import {
  TableContainer,
  TableFilter,
  TableFilterDate,
  TableSearch,
  TableSorting,
  TableSortingCol,
  TableSortingRow,
  TableWrapper,
} from "@/components/molecules/Table";
import {kolomTabelBerkas} from "@/data/table";
import {TableAdvance} from "@/components/organisms/TableAdvance";
import {infiniteQuery, paginateQuery, tableLoadMoreConf, tablePaginateConf} from "@/utils/table";
import {MotionBox} from "@/components/motion/Motion";
import {useCycle} from "framer-motion";

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
  const URL = "/api/berkas"
  const [globalFilter, setGlobalFilter] = useState("");
  const [modalActive, setModalActive] = useCycle(false, true);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [pageSize, setPageSize] = useState<number>(4)
  const defaultData = useMemo(() => [], [])
  const pagination = useMemo(
      () => ({
        pageIndex: currentPage - 1,
        pageSize,
      }),
      [currentPage, pageSize]
  )
  const fetchPaginateData = paginateQuery(
      URL,
      ["berkas_paginate", pagination],
      {
        params: {
          is_infinite: 0,
          page: currentPage,
          per_page: pageSize
        }
      })
  const tablePaginate = tablePaginateConf(
      fetchPaginateData.flatData ?? defaultData,
      kolomTabelBerkas,
      globalFilter,
      setGlobalFilter,
      pagination
  )


  const handleScroll = () => {
    const position = window.scrollY;
    console.log(position);
    setScrollPosition(position);
  };

  const onPaginateClick = (event: React.MouseEvent<HTMLButtonElement>, page: number) => {
    setCurrentPage(page)
  }

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
              {/* TableSorting: Table sorting container */}
              <TableSorting>
                {/* TableSortingRow: Table sorting rows if needed to be more than 1 */}
                <TableSortingRow>
                  {/* TableSortingCol: Table sorting cols to better divide each functionality */}
                  <TableSortingCol>
                    <TableFilterDate
                        placeholder="Tanpa batas waktu"
                        data={DropdownItemDate}
                        column={tablePaginate.getHeaderGroups()[0].headers[2].column}
                    />
                    <TableFilter
                        placeholder="Semua jenis"
                        data={DropdownItem}
                        column={tablePaginate.getHeaderGroups()[0].headers[1].column}
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
                <TableAdvance
                    table={tablePaginate}
                    paginateData={fetchPaginateData}
                    select={true}
                    onChange={onPaginateClick}
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

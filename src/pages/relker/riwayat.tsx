import PageTransition from "@/components/PageLayout";
import ContainerQuery from "@/components/atoms/PageCol";
import {
  TableFilter,
  TableSearch,
  TableSorting,
  TableSortingCol,
  TableSortingRow,
  TableWrapper,
} from "@/components/molecules/Table";
import TableBasic from "@/components/organisms/TableBasic";
import { TableInfinite } from "@/components/organisms/TableInfinite";
import { DropdownItem, DropdownItemYr } from "@/data/dummy";
import { kolomTabelRenker } from "@/data/tableakin";
import { fetcherGetBackend } from "@/utils/common/Fetcher";
import { InfiniteQuery, TableLoadMoreConf } from "@/utils/table";
import { Box, Flex, TableContainer, Text } from "@chakra-ui/react";
import { VisibilityState } from "@tanstack/table-core";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import useSWR from "swr";

const RealisasiKerja = () => {
  const {
    data: dataRealisasi,
    error,
    isValidating,
    isLoading,
  } = useSWR("data_realisasi", fetcherGetBackend);
  const [globalFilter, setGlobalFilter] = useState("");
  const [columnFilters, setColumnFilters] = useState([
    {
      id: "status_pekerjaan",
      value: "3",
    },
  ]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const URL =
    (process.env.NEXT_PUBLIC_BACKEND_URL ?? "localhost:8080") +
    "/rencana-kerja/";

  const infiniteData = InfiniteQuery(URL, "rl");

  const table = TableLoadMoreConf(
    infiniteData.flatData,
    kolomTabelRenker,
    globalFilter,
    setGlobalFilter,
    columnVisibility,
    setColumnVisibility,
    columnFilters
    // setColumnFilters
  );

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


  return (
    <PageTransition
      pageTitle="Realisasi"
      previousPage="/relker"
      previousPageTitle="Aktivitas kerja"
    >
      <Flex className="page__row" mb="80px">
        <ContainerQuery>
          <TableWrapper w="100%">
            <Text
              // variant="toptitle"
              fontSize="20px"
              fontWeight="550"
              mb="22px"
              letterSpacing="-0.3px"
            >
              Realisasi Kerja
            </Text>
            <TableSorting>
              <TableSortingRow>
                <TableSortingCol>
                  <TableFilter
                    placeholder={new Date().toLocaleDateString("id-ID", {
                      month: "long",
                    })}
                    data={DropdownItem}
                    column={table.getHeaderGroups()[0].headers[3].column}
                  />

                  <TableSearch placeholder="Cari" target={setGlobalFilter} />
                </TableSortingCol>
              </TableSortingRow>
            </TableSorting>
            <TableContainer px="8px">
              {infiniteData.flatData[0] == null ? (
                  <Flex
                  my="30px"
                  mt="60px"
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
                    bgImage="/images/icon/info.png"
                    top="0"
                    left="calc(50% - 28px)"
                  ></Box>
                  <Text mt="64px">Anda tidak punya realisasi kerja</Text>
                </Flex>
              ) : (
                <TableInfinite
                  table={table}
                  infiniteData={infiniteData !== null ? infiniteData : []}
                  button={false}
                />
              )}
            </TableContainer>
          </TableWrapper>
        </ContainerQuery>
      </Flex>
    </PageTransition>
  );
};

export default RealisasiKerja;

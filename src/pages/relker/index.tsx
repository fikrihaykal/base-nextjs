import PageTransition from "@/components/PageLayout";
import { DarkButton } from "@/components/atoms/Buttons/DarkButton";
import MenuWrapper from "@/components/atoms/PageCol";
import ContainerQuery from "@/components/atoms/PageCol";
import {
  TableWrapper,
  TableSorting,
  TableSortingRow,
  TableSortingCol,
  TableFilterDate,
  TableFilter,
  TableSearch,
} from "@/components/molecules/Table";
import CardIconShadow from "@/components/organisms/CardIconShadow";
import Card from "@/components/organisms/Cards/Card";
import PageBanner from "@/components/organisms/PageBanner";
import { TableBasic } from "@/components/organisms/TableBasic";
import { DropdownItem, DropdownItemDate } from "@/data/dummy";
import { kolomTabelRenker } from "@/data/table";
import AppSettingContext from "@/providers/AppSettingProvider";
import { InfiniteQuery, TableLoadMoreConf } from "@/utils/table";
import {
  Flex,
  useColorMode,
  Box,
  Text,
  Button,
  TableContainer,
  Link,
} from "@chakra-ui/react";
import { table } from "console";
import { useContext, useEffect, useState } from "react";
import NextLink from "next/link";
import { TableInfinite } from "@/components/organisms/TableInfinite";

const RealisasiKerja = () => {
  const [globalFilter, setGlobalFilter] = useState("");
  const URL = "/api/relker";
  const infiniteData = InfiniteQuery(URL, "relker");
  const table = TableLoadMoreConf(
    infiniteData.flatData,
    kolomTabelRenker,
    globalFilter,
    setGlobalFilter
  );
  const { colorMode } = useColorMode();

  return (
    <>
      <PageTransition pageTitle="Realisasi Kerja">
        <Flex className="page__row" mb="80px">
          <ContainerQuery>
            <Flex w="100%" gap="36px">
              <TableWrapper w="100%">
                <TableContainer>
                  <TableInfinite table={table} infiniteData={infiniteData} />
                </TableContainer>
              </TableWrapper>
            </Flex>
          </ContainerQuery>
        </Flex>
      </PageTransition>
    </>
  );
};

export default RealisasiKerja;

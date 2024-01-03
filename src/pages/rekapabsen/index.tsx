import PageTransition from "@/components/PageLayout";
import ContainerQuery from "@/components/atoms/PageCol";
import Wrapper from "@/components/atoms/Wrapper";
import {
  TableFilter,
  TableSearch,
  TableSorting,
  TableSortingCol,
  TableSortingRow,
  TableWrapper,
} from "@/components/molecules/Table";
import CardIconShadow from "@/components/organisms/CardIconShadow";
import { TableBasic } from "@/components/organisms/TableBasic";
import { TableInfinite } from "@/components/organisms/TableInfinite";
import { DropdownItem, DropdownItemYr } from "@/data/dummy";
import { kolomTabelAbsen } from "@/data/tableRekap";
import { InfiniteQuery, TableLoadMoreConf } from "@/utils/table";
import { Flex, TableContainer, useColorMode, Text } from "@chakra-ui/react";
import {
  ColumnFilter,
  ColumnFiltersState,
  VisibilityState,
} from "@tanstack/table-core";
import { useState } from "react";

const RekapAbsen = () => {
  const [globalFilter, setGlobalFilter] = useState("");
  const [columnFilters, setColumnFilters] = useState([
    {
      id: "tanggal",
      value: "-" + (new Date().getMonth() + 1).toString() + "-",
    },
    {
      id: "waktumasuk",
      value: new Date().getFullYear().toString() + "-",
    },
  ]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({
    bulan: false,
  });
  const URL = "/api/rekapabsen";
  const infiniteData = InfiniteQuery(URL, "rekapabsen");
  const table = TableLoadMoreConf(
    infiniteData.flatData,
    kolomTabelAbsen,
    globalFilter,
    setGlobalFilter,
    columnVisibility,
    setColumnVisibility,
    columnFilters
    // setColumnFilters
  );
  const { colorMode } = useColorMode();

  return (
    <>
      <PageTransition pageTitle="Presensi">
        <Flex className="page__row" mb="80px">
          <ContainerQuery>
            <Wrapper mt="-48px" mb="32px" mr={["-16px", "-32px"]}>
              <CardIconShadow
                title="Perbaiki Presensi"
                subtitle="Lihat dan kelola presensi anda yang terlewat"
                link="/rekapabsen/rekaplupa"
                icon="/images/icon/porto.svg"
              />
              <CardIconShadow
                title="Rekap Presensi Per Semester"
                subtitle="Informasi presensi anda tiap semester"
                link="/skem"
                icon="/images/icon/skem.svg"
              />
              <CardIconShadow
                title="Ajuan Cuti"
                subtitle="Buat dan kelola ajuan cuti"
                link="/rekapabsen/cuti"
                icon="/images/icon/beasiswa.svg"
              />
            </Wrapper>

            <Flex w="100%" gap="36px">
              <TableWrapper w="100%">
                <Text
                  // variant="toptitle"
                  fontSize="20px"
                  fontWeight="550"
                  mb="22px"
                  letterSpacing="-0.3px"
                >
                  Rekap Presensi
                </Text>
                <TableSorting>
                  <TableSortingRow>
                    <TableSortingCol>
                      <TableFilter
                        placeholder={new Date().toLocaleDateString("id-ID", {
                          month: "long",
                        })}
                        data={DropdownItem}
                        column={table.getHeaderGroups()[0].headers[0].column}
                      />
                      <TableFilter
                        placeholder={new Date().toLocaleDateString("id-ID", {
                          year: "numeric",
                        })}
                        data={DropdownItemYr}
                        column={table.getHeaderGroups()[0].headers[2].column}
                      />
                    </TableSortingCol>
                  </TableSortingRow>
                </TableSorting>
                <TableContainer px="8px">
                  <TableBasic table={table} infiniteData={infiniteData} />
                </TableContainer>
              </TableWrapper>
            </Flex>
          </ContainerQuery>
        </Flex>
      </PageTransition>
    </>
  );
};

export default RekapAbsen;
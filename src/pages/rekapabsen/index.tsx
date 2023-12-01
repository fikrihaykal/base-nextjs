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
            <Wrapper mt="-48px" mb="32px">
              <CardIconShadow
                title="Lupa Absen"
                subtitle="Lihat dan kelola portofolio dari berbagai macam kegiatan"
                link="/portofolio"
                icon="/images/icon/porto.svg"
              />
              <CardIconShadow
                title="Rekap Absen"
                subtitle="Ajuan kegiatan dari portofolio yang anda buat"
                link="/skem"
                icon="/images/icon/skem.svg"
              />
              <CardIconShadow
                title="Panduan"
                subtitle="Cari dan dapatkan beasiswa yang anda inginkan disini"
                link="/beasiswa"
                icon="/images/icon/beasiswa.svg"
              />
            </Wrapper>
            <Flex w="100%" gap="36px">
              <TableWrapper w="100%">
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
                <TableContainer>
                  <TableBasic table={table} infiniteData={infiniteData} />
                </TableContainer>
                {/* <Flex w="100%" py="24px" pt="44px" alignItems="center">
                  <Flex w="100%">
                    <Text variant="tabletext">Total durasi kerja</Text>
                  </Flex>
                  <Flex w="100%">
                    <Text variant="tabletext" fontWeight="600" fontSize="16px">
                      120 Jam 20 Menit
                    </Text>
                  </Flex>
                </Flex> */}
              </TableWrapper>
            </Flex>
          </ContainerQuery>
        </Flex>
      </PageTransition>
    </>
  );
};

export default RekapAbsen;
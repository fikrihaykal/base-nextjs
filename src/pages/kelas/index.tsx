import PageTransition from "@/components/PageLayout";
import ContainerQuery from "@/components/atoms/ContainerQuery";
import PageRow from "@/components/atoms/PageRow";
import { Box, Center, Flex, TableContainer, Text, useColorMode } from "@chakra-ui/react";
import CardIconShadow from "@/components/organisms/CardIconShadow";
import Wrapper from "@/components/atoms/Wrapper";
import PlainCard from "@/components/organisms/Cards/Card";
import { TableWrapper } from "@/components/customs/Table";
import { TableBasic } from "@/components/organisms/TableBasic";
import { InfiniteQuery, TableLoadMoreConf } from "@/utils/table";
import {
  kolomTabelDaftarKelasDepartemen,
  kolomTabelRencanaStudi,
} from "@/data/table";
import { useState } from "react";
import {
  TableFilter,
  TableFilterDate,
  TableSearch,
  TableSorting,
  TableSortingCol,
  TableSortingRow,
} from "@/components/molecules/Table";
import { DropdownItem, DropdownItemDate } from "@/data/dummy";
import { PrimaryButton } from "@/components/customs/Buttons/PrimaryButton";
import { TableInfinite } from "@/components/organisms/TableInfinite";
import { DaliButton } from "@/components/customs/Buttons/DaliButton";
const Cuti = () => {
  const { colorMode } = useColorMode();
  const [globalFilter, setGlobalFilter] = useState("");
  const URL = "/api/departemen_daftarkelas";
  const infiniteData = InfiniteQuery(URL, "departemen_daftarkelas");
  const table = TableLoadMoreConf(
    infiniteData.flatData,
    kolomTabelDaftarKelasDepartemen,
    globalFilter,
    setGlobalFilter
  );
  return (
    <>
      <PageTransition pageTitle="Kelas">
        <PageRow>
          <ContainerQuery>
            <PlainCard>
              <TableWrapper w="100%" p="unset">
                <TableSorting>
                  <TableSortingRow>
                    <TableSortingCol>
                      <TableFilterDate
                        placeholder="Gasal"
                        data={DropdownItemDate}
                        column={table.getHeaderGroups()[0].headers[2].column}
                      />
                      <TableFilter
                        placeholder={new Date().toLocaleDateString("id-ID", {
                          year: "numeric",
                        })}
                        data={DropdownItem}
                        column={table.getHeaderGroups()[0].headers[1].column}
                      />
                    </TableSortingCol>

                    <TableSortingCol>
                      <TableSearch
                        placeholder="Cari"
                        target={setGlobalFilter}
                      />
                      <Flex mt={{ base: "16px", m: "0px" }}>
                        <Center w="full">
                          <DaliButton>Tambah Kelas</DaliButton>
                        </Center>
                      </Flex>
                    </TableSortingCol>
                  </TableSortingRow>
                </TableSorting>
                <TableContainer
                  sx={{
                    "::-webkit-scrollbar-thumb": {
                      backgroundColor:
                        colorMode == "light" ? "gray.200" : "gray.800",
                    },
                    scrollbarWidth: "thin",
                    scrollbarColor: "silver transparent;",
                  }}
                >
                  <TableInfinite
                    table={table}
                    infiniteData={infiniteData}
                    noDataTitle="Belum ada rencana studi"
                    noDataSubtitle="Ambil kelas Anda sekarang"
                    noDataDescription=""
                  />
                </TableContainer>
              </TableWrapper>
            </PlainCard>
          </ContainerQuery>
        </PageRow>
      </PageTransition>
    </>
  );
};

export default Cuti;

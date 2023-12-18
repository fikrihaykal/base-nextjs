import PageTransition from "@/components/PageLayout";
import ContainerQuery from "@/components/atoms/PageCol";
import {
  TableWrapper
} from "@/components/molecules/Table";
import { TableInfinite } from "@/components/organisms/TableInfinite";
import { kolomTabelRenker } from "@/data/table";
import { InfiniteQuery, TableLoadMoreConf } from "@/utils/table";
import {
  Flex,
  TableContainer,
  useColorMode
} from "@chakra-ui/react";
import { useState } from "react";

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
      <PageTransition pageTitle="Realisasi kerja">
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

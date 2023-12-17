import PageTransition from "@/components/PageLayout";
import PageCol from "@/components/atoms/PageCol";
import { kolomTabelRenker } from "@/data/table";
import { InfiniteQuery, TableLoadMoreConf } from "@/utils/table";
import { Flex, useColorMode } from "@chakra-ui/react";
import { useState } from "react";

const RiwayatRealisasiKerja = () => {
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
      <PageTransition pageTitle="Riwayat Realisasi Kerja">
        <Flex className="page__row" mb="80px">
          <PageCol>
            <></>
          </PageCol>
        </Flex>
      </PageTransition>
    </>
  );
};

export default RiwayatRealisasiKerja;

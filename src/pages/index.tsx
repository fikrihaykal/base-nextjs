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
import dynamic from "next/dynamic";
import PageCol from "@/components/atoms/PageCol";
import PageRow from "@/components/atoms/PageRow";
import PageColWidget from "@/components/atoms/PageColWidget";
import Wrapper from "@/components/atoms/Wrapper";
import WidgetCard from "@/components/organisms/Cards/WidgetCard";
import PlainCard from "@/components/organisms/Cards/Card";
import { PrimaryButton } from "@/components/atoms/Buttons/PrimaryButton";
import { SecondaryButton } from "@/components/atoms/Buttons/SecondaryButton";
// import AbsenWidget from "./Widget/AbsenWidget";
// const AbsenChart = dynamic(() => import("@/components/organisms/chart"), {
//   ssr: false,
// });

const Beranda = () => {
  const [globalFilter, setGlobalFilter] = useState("");
  const URL = "/api/relkerberanda";
  const infiniteData = InfiniteQuery(URL, "relkerberanda");
  const table = TableLoadMoreConf(
    infiniteData.flatData,
    kolomTabelRenker,
    globalFilter,
    setGlobalFilter
  );
  return (
    <>
      <PageTransition>
        <PageRow>
          <PageCol>
            {/* <AbsenWidget></AbsenWidget> */}

            <TableWrapper w="100%">
              <Text
                variant="tabletitle"
                fontSize="18px"
                lineHeight="1.1875"
                fontWeight="550"
              >
                Realisasi Kerja
              </Text>

              <TableContainer>
                <TableBasic table={table} infiniteData={infiniteData} />
              </TableContainer>

              <Flex
                justifyContent="center"
                alignItems="center"
                w="100%"
                pt="36px"
              >
                <Link as={NextLink} href="/relker">
                  <DarkButton>Lihat Semua</DarkButton>
                </Link>
              </Flex>
            </TableWrapper>

            <Wrapper pt="12px">
              <CardIconShadow
                title="Realisasi Kerja"
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
              <CardIconShadow
                title="Cuti (Coming Soon)"
                subtitle="Lihat dan kelola semua ajuan cuti"
                link="/"
                icon="/images/icon/folderbf.svg"
              />
            </Wrapper>
          </PageCol>
          {/* <PageColWidget>
            <Wrapper>
              <AbsenChart></AbsenChart>
            </Wrapper>
          </PageColWidget> */}
        </PageRow>
      </PageTransition>
    </>
  );
};

export default Beranda;

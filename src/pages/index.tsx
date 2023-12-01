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
  Center,
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
import AbsenWidget from "./Widget/AbsenWidget";
import Dropdown from "@/components/molecules/Dropdown";
import { foundItems, lostItems } from "@/data/dummy";
import CardLost from "@/components/organisms/CardLost";
import { HiArrowSmRight } from "react-icons/hi";
// import AbsenWidget from "./Widget/AbsenWidget";
const AbsenChart = dynamic(() => import("@/components/organisms/AbsenChart"), {
  ssr: false,
});

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
      <PageTransition pageTitle="Beranda">
        <PageRow>
          <PageCol>
            <PageBanner />
            <Flex
              w="100%"
              justifyContent="space-between"
              alignItems="center"
              mt="64px"
            >
              <Text fontSize="24px" fontWeight="600" letterSpacing="-0.2px">
                Laporan temuan terbaru
              </Text>
              <Link as={NextLink} href="/temuan">
                <Flex w="max-content" mr="12px" cursor="pointer">
                  <Text
                    fontSize="14px"
                    fontWeight="550"
                    letterSpacing="-0.2px"
                    cursor="pointer"
                  >
                    Lihat semua
                  </Text>
                  <Box ml="4px" pt="2px">
                    <HiArrowSmRight fontSize="18px" />
                  </Box>
                </Flex>
              </Link>
            </Flex>

            <Wrapper pt="0px">
              {foundItems.slice(0, 8).map((Val, id) => {
                return (
                  <CardIconShadow
                    title={Val.title}
                    subtitle={Val.subtitle}
                    icon={Val.icon}
                    link={Val.link}
                    type={Val.type}
                    location={Val.location}
                    status={Val.status}
                  />
                );
              })}
            </Wrapper>
            <Flex
              w="100%"
              justifyContent="space-between"
              alignItems="center"
              mt="64px"
            >
              <Text fontSize="24px" fontWeight="600" letterSpacing="-0.2px">
                Laporan kehilangan terbaru
              </Text>
              <Link as={NextLink} href="/kehilangan">
                <Flex w="max-content" mr="12px" cursor="pointer">
                  <Text
                    fontSize="14px"
                    fontWeight="550"
                    letterSpacing="-0.2px"
                    cursor="pointer"
                  >
                    Lihat semua
                  </Text>
                  <Box ml="4px" pt="2px">
                    <HiArrowSmRight fontSize="18px" />
                  </Box>
                </Flex>
              </Link>
            </Flex>
            <Wrapper pt="0px">
              {lostItems.slice(0, 8).map((Val, id) => {
                return (
                  <CardLost
                    title={Val.title}
                    subtitle={Val.subtitle}
                    icon={Val.icon}
                    link={Val.link}
                    type={Val.type}
                    location={Val.location}
                    status={Val.status}
                    contact={Val.contact}
                  />
                );
              })}
            </Wrapper>
          </PageCol>
          {/* <PageColWidget><></></PageColWidget> */}
        </PageRow>
      </PageTransition>
    </>
  );
};

export default Beranda;

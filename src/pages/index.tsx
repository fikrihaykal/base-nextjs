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
import { foundItems } from "@/data/dummy";
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
      <PageTransition>
        <PageRow>
          <PageCol>
            <PageBanner />
            <Wrapper pt="12px">
              {foundItems.map((Val, id) => {
                return (
                  <CardIconShadow
                    title={Val.title}
                    subtitle={Val.subtitle}
                    icon={Val.icon}
                    link={Val.link}
                    type={Val.type}
                  />
                );
              })}
            </Wrapper>
          </PageCol>
        </PageRow>
      </PageTransition>
    </>
  );
};

export default Beranda;

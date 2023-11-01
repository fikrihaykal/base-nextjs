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
const AbsenChart = dynamic(() => import("@/components/organisms/chart"), {
  ssr: false,
});

const AbsenWidget = () => {
  const [time, setTime] = useState({
    minutes: new Date().getMinutes(),
    hours: new Date().getHours(),
    seconds: new Date().getSeconds(),
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      const date = new Date();
      setTime({
        minutes: date.getMinutes(),
        hours: date.getHours(),
        seconds: date.getSeconds(),
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const convertToTwoDigit = (number: number) => {
    return number.toLocaleString("en-US", {
      minimumIntegerDigits: 2,
    });
  };

  return (
    <>
      <PlainCard mb="48px">
        <Flex justifyContent="center" alignItems="center">
          <Text
            fontSize="36px"
            fontWeight="550"
            variant="title"
            suppressHydrationWarning
          >
            {convertToTwoDigit(time.hours)}:{convertToTwoDigit(time.minutes)}:
            {convertToTwoDigit(time.seconds)}
          </Text>
        </Flex>

        <Flex gap="16px" wrap={{ base: "wrap", d: "nowrap" }}>
          <PrimaryButton w={{ base: "100%", d: "50%" }}>
            Mulai Kerja
          </PrimaryButton>
          <SecondaryButton w={{ base: "100%", d: "50%" }}>
            Akhiri Kerja
          </SecondaryButton>
        </Flex>
      </PlainCard>
    </>
  );
};

export default AbsenWidget;

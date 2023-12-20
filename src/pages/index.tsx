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
import { RencanaKerja } from "@/types/renker";
import { motion, useIsPresent } from "framer-motion";
import { dataRelker } from "@/data/relker";
// import AbsenWidget from "./Widget/AbsenWidget";
const AbsenChart = dynamic(() => import("@/components/organisms/AbsenChart"), {
  ssr: false,
});

const Beranda = () => {
  return (
    <>
      <PageTransition pageTitle="Halo, Sulthon">
        <PageRow>
          <PageCol>
            <AbsenWidget></AbsenWidget>

            <TableWrapper w="100%">
              <Text
                variant="tabletitle"
                fontSize="16px"
                lineHeight="1.1875"
                fontWeight="550"
                mb="18px"
              >
                Realisasi kerja terakhir
              </Text>

              {dataRelker
                .filter((val) => val.status !== 3)
                .slice(0, 4)
                .map((item, index) => (
                  <Item
                    key={item.id}
                    relkerItem={item}
                    relkerIndex={index}
                  ></Item>
                ))}

              <Flex
                justifyContent="center"
                alignItems="center"
                w="100%"
                pt="36px"
              >
                {/* refactor */}
                <Link
                  w={{ base: "100%", t: "unset" }}
                  as={NextLink}
                  href="/relker"
                >
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
              <PlainCard bg="#aadaff" w="100%" h="360px"></PlainCard>
            </Wrapper>
          </PageColWidget> */}
        </PageRow>
      </PageTransition>
    </>
  );
};

export default Beranda;

const Item = ({
  relkerItem,
  relkerIndex,
}: {
  relkerItem: RencanaKerja;
  relkerIndex: number;
}) => {
  const isPresent = useIsPresent();
  const animations = {
    style: {
      height: "56px",
      background: "blue",
      marginTop: "20px",
      position: isPresent ? "static" : "absolute",
    },
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.25, easing: "easeOut" },
  };
  return (
    <motion.div
      {...animations}
      layout
      className="relker__item"
      style={{
        background: "#fff",
        display: "flex",
        width: "100%",
        alignItems: "center",
        // borderTop: "1px solid #e4e4e4",
        borderBottom: "1px solid #e4e4e4",
        // marginTop: "-1px",
      }}
    >
      <Flex
        className="file__container"
        display="inline-flex"
        alignItems="center"
        transition="color .15s"
        _groupHover={{
          color: "#008fff",
        }}
        w="76px"
        my="20px"
      >
        {relkerItem.status == 1 ? (
          <Flex
            pos="relative"
            justifyContent="center"
            alignItems="center"
            flexShrink="0"
            w="54px"
            h="54px"
            borderRadius="50%"
            fontSize="0"
            bg="#008fff33"
            _hover={{
              backgroundColor: "#008fff45",
            }}
            transition="all 0.12s ease-in-out"
          >
            <Box
              w="36px"
              h="36px"
              bgSize="contain"
              bgRepeat="no-repeat"
              bgImage="images/icon/clock.png"
            ></Box>
          </Flex>
        ) : (
          <></>
        )}
        {relkerItem.status == 2 ? (
          <Flex
            pos="relative"
            justifyContent="center"
            alignItems="center"
            flexShrink="0"
            w="54px"
            h="54px"
            borderRadius="50%"
            fontSize="0"
            bg="#ffdd0033"
            _hover={{
              // borderRadius: "16px",
              backgroundColor: "#ffdd0050",
            }}
            transition="all 0.12s ease-in-out"
          >
            <Box
              w="36px"
              h="36px"
              bgSize="contain"
              bgRepeat="no-repeat"
              // bgImage={
              //   colorMode == "light"
              //     ? "images/icon/play.png"
              //     : "images/icon/playdark.png"
              // }
              bgImage={"images/icon/play.png"}
            ></Box>
          </Flex>
        ) : (
          <></>
        )}
        {relkerItem.status == 3 ? (
          <Flex
            pos="relative"
            justifyContent="center"
            alignItems="center"
            flexShrink="0"
            w="54px"
            h="54px"
            borderRadius="50%"
            fontSize="0"
            bg="#57bc3b30"
            _hover={{
              backgroundColor: "#57bc3b44",
            }}
            transition="all 0.12s ease-in-out"
          >
            <Box
              w="36px"
              h="36px"
              bgSize="contain"
              bgRepeat="no-repeat"
              bgImage="images/icon/checkmark.png"
            ></Box>
          </Flex>
        ) : (
          <></>
        )}
      </Flex>
      <Box className="file__detail">
        <Box
          className="file__title"
          mb="9px"
          fontSize="16px"
          lineHeight="1.1875"
          fontWeight="600"
          _groupHover={{
            color: "#008fff",
          }}
        >
          <Text
            variant="tabletitle"
            data-group="card--shadow"
            fontSize="16px"
            lineHeight="1.1875"
            fontWeight="550"
            _groupHover={{
              color: "#008fff",
            }}
            textDecoration={relkerItem.status == 3 ? "line-through" : "none"}
          >
            {/* {relkerItem.judul} */}
          </Text>
        </Box>
        <Box
          className="file__subtitle"
          fontSize="13px"
          lineHeight="1.38462"
          fontWeight="500"
          color="#b2b3BD"
          textDecoration={relkerItem.status == 3 ? "line-through" : "none"}
        >
          {relkerItem.subjudul}
        </Box>
      </Box>
    </motion.div>
  );
};

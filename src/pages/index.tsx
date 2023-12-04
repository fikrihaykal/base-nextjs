import PageTransition from "@/components/PageLayout";
import { LightButton } from "@/components/atoms/Buttons/LightButton";
import PageCol from "@/components/atoms/PageCol";
import PageRow from "@/components/atoms/PageRow";
import Wrapper from "@/components/atoms/Wrapper";
import CardIconShadow from "@/components/organisms/CardIconShadow";
import CardLost from "@/components/organisms/CardLost";
import { foundItems, lostItems } from "@/data/dummy";
import { kolomTabelRenker } from "@/data/table";
import { InfiniteQuery, TableLoadMoreConf } from "@/utils/table";
import { Box, Flex, Link, Text, useColorMode } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import NextLink from "next/link";
import { useState } from "react";
import { HiArrowSmRight } from "react-icons/hi";
// import AbsenWidget from "./Widget/AbsenWidget";
const AbsenChart = dynamic(() => import("@/components/organisms/AbsenChart"), {
  ssr: false,
});

const Beranda = () => {
  const { colorMode } = useColorMode();

  return (
    <>
      <PageTransition>
        <PageRow>
          <PageCol>
            <Box
              className="page__banner"
              pos="relative"
              w="full"
              h="320px"
              borderRadius="1.6rem"
              bg={colorMode == "light" ? "#008fff" : "#0071ca"}
              _before={{
                content: '""',
                position: "absolute",
                top: "10px",
                left: "50%",
                transform: "translateX(-50%)",
                width: "95%",
                h: "100%",
                zIndex: "-1",
                borderRadius: "24px",
                background: colorMode == "light" ? "#008fff30" : "#003967",
              }}
            >
              <Box
                w="100%"
                h="320PX"
                pos="absolute"
                bgImage="/images/bigbg.png"
                bgSize="cover"
                bgRepeat="no-repeat"
              ></Box>
              <Flex
                w="100%"
                h="100%"
                p="36px"
                pl="48px"
                flexDir="column"
                justifyContent="center"
              >
                <Text
                  fontWeight="600"
                  variant="toptitle"
                  color="white"
                  fontSize="32px"
                >
                  Menemukan atau kehilangan barang?
                </Text>
                <Text fontWeight="500" color="white" fontSize="16px">
                  Segera laporkan sesuai dengan kebutuhan anda disini
                </Text>
                <Flex mt="20px">
                  <Link as={NextLink} href="/laporkehilangan" mr="16px">
                    <LightButton
                      _hover={{
                        background: "white",
                        color: "#008fff",
                      }}
                    >
                      Lapor Kehilangan
                    </LightButton>
                  </Link>

                  <Link as={NextLink} href="/laporpenemuan" mr="16px">
                    <LightButton
                      _hover={{
                        background: "white",
                        color: "#008fff",
                      }}
                    >
                      Lapor Penemuan
                    </LightButton>
                  </Link>
                </Flex>
              </Flex>
            </Box>

            <Flex
              w="100%"
              justifyContent="space-between"
              alignItems="center"
              mt="64px"
            >
              <Text
                fontSize="20px"
                variant="toptitle"
                fontWeight="600"
                letterSpacing="-0.2px"
              >
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
              {foundItems.slice(0, 5).map((Val, id) => {
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
              <Text
                fontSize="20px"
                variant="toptitle"
                fontWeight="600"
                letterSpacing="-0.2px"
              >
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
              {lostItems.slice(0, 5).map((Val, id) => {
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

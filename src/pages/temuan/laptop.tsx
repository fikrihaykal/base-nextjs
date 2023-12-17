import PageTransition from "@/components/PageLayout";
import { SmOutlineButton } from "@/components/atoms/Buttons/SmOutlineBtn";
import PageCol from "@/components/atoms/PageCol";
import PageRow from "@/components/atoms/PageRow";
import Wrapper from "@/components/atoms/Wrapper";
import CardIconShadow from "@/components/organisms/CardIconShadow";
import CardIconShadowSkeleton from "@/components/organisms/CardIconShadowSkeleton";
import Card from "@/components/organisms/Cards/Card";
import { foundItems } from "@/data/dummy";
import { Box, Flex, Link, Text, useColorMode } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Laptop = () => {
  const [globalFilter, setGlobalFilter] = useState("");
  const [loaded, setLoaded] = useState<boolean>(false);
  const menuItems = [...new Set(foundItems.map((Val) => Val.type))];

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 3000);
  });
  const { reload, query } = useRouter();
  const { colorMode } = useColorMode();
  return (
    <>
      <PageTransition pageTitle="Laptop">
        <PageRow>
          <PageCol>
            <Flex gap="16px">
              <Card flex="1" p="12px">
                <Flex w="100%" gap="24px">
                  <Box
                    bgImage="/images/laptop.webp"
                    w="260px"
                    h="260px"
                    bgSize="cover"
                    bgPos="center"
                    bgRepeat="no-repeat"
                    borderRadius="12px"
                  ></Box>
                  <Box mt="16px">
                    <Flex>
                      <Text
                        fontSize="20px"
                        fontWeight="600"
                        mb="12px"
                        mr="12px"
                      >
                        Laptop HP Putih
                      </Text>
                      <Flex
                        px="10px"
                        h="32px"
                        justifyContent="center"
                        alignItems="center"
                        w="max-content"
                        borderRadius="12px"
                        fontWeight="550"
                        bg="#ffdd00"
                        fontSize="14px"
                      >
                        <Text mt="-3px">On Agent</Text>
                      </Flex>
                    </Flex>

                    <Text fontSize="14px" fontWeight="500">
                      Lokasi barang saat ini: Agen SKK Perpustakaan
                    </Text>
                    <Text fontSize="14px" fontWeight="500">
                      Laptop HP Putih 14 Inch, ada goresan di samping kiri.
                      Stiker hello kity di kanan bawah.
                    </Text>

                    <Text fontSize="14px" fontWeight="500">
                      Barang dapat diambil pada hari dan jam kerja di lokasi
                      agent
                    </Text>
                    <Flex
                      w="100%"
                      pos="absolute"
                      bottom="32px"
                      pl="4px"
                      pr="24px"
                    >
                      <SmOutlineButton
                        mt="auto"
                        onClick={(event) => {
                          event.stopPropagation();
                          event.preventDefault();
                        }}
                      >
                        Hubungi Agen
                      </SmOutlineButton>
                      <SmOutlineButton
                        bg={colorMode == "light" ? "#e0e0e040" : "#e0e0e070"}
                        _hover={{
                          background:
                            colorMode == "light" ? "#e0e0e0" : "#e0e0e050",
                        }}
                        color={colorMode == "light" ? "#141414" : "#141414"}
                        mt="auto"
                        onClick={(event) => {
                          event.stopPropagation();
                          event.preventDefault();
                          window.open(
                            `https://www.google.com/maps/place/ITS+Library/@-7.2816821,112.7929673,17z/data=!3m1!4b1!4m6!3m5!1s0x2dd7fa16cfc6f083:0x80eeb48974d69e31!8m2!3d-7.2816821!4d112.7955422!16s%2Fg%2F11b6dp035w?entry=ttu`,
                            "_blank",
                            "noopener,noreferrer"
                          );
                        }}
                      >
                        Lokasi Agen
                      </SmOutlineButton>
                    </Flex>
                  </Box>
                </Flex>
              </Card>
            </Flex>

            <Flex
              w="100%"
              justifyContent="space-between"
              alignItems="center"
              mt="64px"
            >
              <Text fontSize="24px" fontWeight="600" letterSpacing="-0.2px">
                Temuan serupa
              </Text>
            </Flex>

            {loaded ? (
              <Wrapper pt="0px">
                {foundItems
                  .filter((val) => val.type == "elektronik")
                  .map((Val, id) => {
                    if (
                      foundItems.filter(
                        // val.id ganti ke thisitem.id @ prod
                        (val) => val.type == "elektronik" && val.id !== 1
                      ).length > 0
                    ) {
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
                    } else if (
                      foundItems.filter(
                        (val) => val.type == "dokumen" && val.id !== 0
                      ).length <= 0
                    ) {
                      return (
                        <Flex w="100%" p="24px" pr="80px">
                          <Card
                            w="100%"
                            h="200px"
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                            flexDir="column"
                          >
                            <Text fontSize="16px" fontWeight="500">
                              Tidak ada temuan serupa.
                            </Text>
                            <Link href="/temuan" color="#008fff">
                              <SmOutlineButton mt="auto" marginTop="8px">
                                Lihat temuan lain
                              </SmOutlineButton>
                            </Link>
                          </Card>
                        </Flex>
                      );
                    } else {
                      return (
                        <Flex w="100%" p="24px" pr="80px">
                          <Card
                            w="100%"
                            h="200px"
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                            flexDir="column"
                          >
                            <Text fontSize="16px" fontWeight="500">
                              Ada yang salah!
                            </Text>
                            <Flex gap="8px">
                              <SmOutlineButton
                                mt="auto"
                                marginTop="8px"
                                onClick={() => {
                                  reload();
                                }}
                              >
                                Muat ulang
                              </SmOutlineButton>

                              <Link href="/temuan" color="#008fff">
                                <SmOutlineButton
                                  mt="auto"
                                  marginTop="8px"
                                  bg={
                                    colorMode == "light"
                                      ? "#e0e0e040"
                                      : "#e0e0e070"
                                  }
                                  _hover={{
                                    background:
                                      colorMode == "light"
                                        ? "#e0e0e0"
                                        : "#e0e0e050",
                                  }}
                                  color={
                                    colorMode == "light" ? "#141414" : "#141414"
                                  }
                                >
                                  Lihat temuan lain
                                </SmOutlineButton>
                              </Link>
                            </Flex>
                          </Card>
                        </Flex>
                      );
                    }
                  })}
              </Wrapper>
            ) : (
              <Wrapper>
                <CardIconShadowSkeleton />
                <CardIconShadowSkeleton />
                <CardIconShadowSkeleton />
              </Wrapper>
            )}
          </PageCol>
        </PageRow>
      </PageTransition>
    </>
  );
};

export default Laptop;

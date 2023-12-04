import PageTransition from "@/components/PageLayout";
import { SecondaryButton } from "@/components/atoms/Buttons/SecondaryButton";
import { SmOutlineButton } from "@/components/atoms/Buttons/SmOutlineBtn";
import PageCol from "@/components/atoms/PageCol";
import PageColWidget from "@/components/atoms/PageColWidget";
import PageRow from "@/components/atoms/PageRow";
import Wrapper from "@/components/atoms/Wrapper";
import CardIconShadow from "@/components/organisms/CardIconShadow";
import CardLost from "@/components/organisms/CardLost";
import Card from "@/components/organisms/Cards/Card";
import PageBanner from "@/components/organisms/PageBanner";
import { foundItems, lostItems } from "@/data/dummy";
import { Box, Flex, Text, useColorMode } from "@chakra-ui/react";
import { useState } from "react";

const Laptop = () => {
  const [globalFilter, setGlobalFilter] = useState("");
  const { colorMode } = useColorMode();
  return (
    <>
      <PageTransition pageTitle="KTM">
        <PageRow>
          <PageCol>
            <Flex gap="16px">
              <Card flex="1" p="12px">
                <Flex w="100%" gap="24px">
                  <Box
                    bgImage="/images/ktm.jpeg"
                    w="260px"
                    h="260px"
                    bgSize="cover"
                    bgPos="center"
                    bgRepeat="no-repeat"
                    borderRadius="12px"
                  >
                    {" "}
                  </Box>
                  <Box mt="16px">
                    <Flex>
                      <Text
                        fontSize="20px"
                        fontWeight="600"
                        mb="12px"
                        mr="12px"
                      >
                        KTM ITS
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
                        <Text mt="-3px">Hilang</Text>
                      </Flex>
                    </Flex>

                    <Text fontSize="14px" fontWeight="500">
                      Lokasi barang terakhir: Kafe LT1 Perpustakaan
                    </Text>
                    <Text fontSize="14px" fontWeight="500">
                      KTM bernama Thalia Agatha Manura NRP 0511234123 Fakultas
                      Teknologi Rekayasa Kelautan
                    </Text>
                    <Text fontSize="14px" fontWeight="500">
                      NRP 0511234123 Fakultas Teknologi Rekayasa Kelautan
                    </Text>
                    <Text fontSize="14px" fontWeight="500">
                      Departemen Teknologi Rekayasa Kelautan
                    </Text>

                    <Flex
                      w="100%"
                      pos="absolute"
                      bottom="32px"
                      pl="4px"
                      pr="24px"
                    >
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

            <Wrapper pt="0px">
              {lostItems
                .filter((val) => val.type == "dokumen")
                .map((Val, id) => {
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
        </PageRow>
      </PageTransition>
    </>
  );
};

export default Laptop;

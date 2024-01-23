import PageTransition from "@/components/PageLayout";
import ContainerQuery from "@/components/atoms/ContainerQuery";
import PageRow from "@/components/atoms/PageRow";
import {
  Box,
  Center,
  Flex,
  Text,
  useColorModeValue,
  useToast,
  useColorMode,
} from "@chakra-ui/react";
import PlainCard from "@/components/organisms/Cards/Card";
import NextLink from "next/link";
import { useContext, useState } from "react";
import {
  AlertCircleSolidIconMade,
  CheckmarkCircleSolidIconMade,
  MinusCircleSolidIconMade,
} from "@/components/atoms/IconsMade";
import { DaliOutlineButton } from "@/components/customs/Buttons/DaliButton";
import { SuccessTextBadge } from "@/components/customs/BadgeStatus/SuccessBadge";
import { WarningTextBadge } from "@/components/customs/BadgeStatus/WarningBadge";
import { NeutralTextBadge } from "@/components/customs/BadgeStatus/NeutralBadge";
import CleanPlainCard from "@/components/customs/Card";
import AppSettingContext from "@/providers/AppSettingProvider";
import {
  PrimaryButton,
  PrimaryOutlineButton,
} from "@/components/atoms/Buttons/PrimaryButton";

const FRS = () => {
  const { colorMode } = useColorMode();
  const URL = "/api/mahasiswafrs";
  const { colorPref } = useContext(AppSettingContext);

  return (
    <>
      <PageTransition pageTitle="Rencana Studi">
        <PageRow>
          <ContainerQuery>
            {/* <PlainCard p="0px" bg="unset">
              <CleanPlainCard
                bgGradient={
                  colorMode === "light"
                    ? "linear(to-tr, blue.100, cyan.100)"
                    : "linear(to-tr, blue.900, cyan.800)"
                }
                pt="32px"
                pb="78px"
                mb="-48px"
              >
                <Box
                  w="100%"
                  display="flex"
                  alignItems="center"
                  flexWrap={{ base: "wrap", a: "nowrap" }}
                  gap={4}
                >
                  <Box w="full">
                    <Text fontSize="16px" fontWeight={600}>
                      Semester 3
                    </Text>
                    <Text fontSize="14px" fontWeight={500} mt="4px">
                      Gasal 2023/2024
                    </Text>
                  </Box>
                  <Flex w="full" mt={{ base: "16px", a: "unset" }}>
                    <Box w="50%">
                      <Text fontSize="13px" fontWeight={500} color="gray">
                        Biaya Pendidikan
                      </Text>
                      <Text fontSize="14px" fontWeight={500} mt="4px">
                        Sudah Dibayar
                      </Text>
                    </Box>
                  </Flex>
                  <Center
                    w={{ base: "full", a: "auto" }}
                    as={NextLink}
                    href="rencana-studi/detail"
                    mt={{ base: "24px", a: "0px" }}
                  >
                    <PrimaryButton>Buat Rencana Studi</PrimaryButton>
                  </Center>
                </Box>
              </CleanPlainCard>
              <CleanPlainCard>
                <Grid
                  templateColumns={{
                    base: "repeat(1, 1fr)",
                    a: "repeat(2, 1fr)",
                    m: "repeat(3, 1fr)",
                    x: "repeat(3, 1fr)",
                  }}
                  gap={6}
                >
                  <GridItem
                    colSpan={1}
                    py="8px"
                    display="flex"
                    alignItems="start"
                    gap={4}
                  >
                    <Box w="48px" h="48px">
                      <Center
                        w="48px"
                        h="48px"
                        bg={
                          colorMode === "light"
                            ? "blackAlpha.100"
                            : "whiteAlpha.200"
                        }
                        borderRadius="full"
                      >
                        <StatusOutlineIconMade fontSize="24px" />
                      </Center>
                    </Box>
                    <Box>
                      <Text
                        fontSize="14px"
                        fontWeight="500"
                        color={
                          colorMode === "light"
                            ? "blackAlpha.600"
                            : "whiteAlpha.600"
                        }
                      >
                        Status
                      </Text>
                      <Text fontSize="15px" fontWeight={600} mt="4px">
                        Aktif
                      </Text>
                    </Box>
                  </GridItem>
                  <GridItem
                    colSpan={1}
                    py="8px"
                    display="flex"
                    alignItems="start"
                    gap={4}
                  >
                    <Box w="48px" h="48px">
                      <Center
                        w="48px"
                        h="48px"
                        bg={
                          colorMode === "light"
                            ? "blackAlpha.100"
                            : "whiteAlpha.200"
                        }
                        borderRadius="full"
                      >
                        <ActivityOutlineIconMade fontSize="24px" />
                      </Center>
                    </Box>
                    <Box>
                      <Text
                        fontSize="14px"
                        fontWeight="500"
                        color={
                          colorMode === "light"
                            ? "blackAlpha.600"
                            : "whiteAlpha.600"
                        }
                      >
                        SKS Tempuh
                      </Text>
                      <Text fontSize="15px" fontWeight={600} mt="4px">
                        99
                      </Text>
                    </Box>
                  </GridItem>
                  <GridItem
                    colSpan={1}
                    py="8px"
                    display="flex"
                    alignItems="start"
                    gap={4}
                  >
                    <Box w="48px" h="48px">
                      <Center
                        w="48px"
                        h="48px"
                        bg={
                          colorMode === "light"
                            ? "blackAlpha.100"
                            : "whiteAlpha.200"
                        }
                        borderRadius="full"
                      >
                        <CheckmarkOutlineIconMade fontSize="24px" />
                      </Center>
                    </Box>
                    <Box>
                      <Text
                        fontSize="14px"
                        fontWeight="500"
                        color={
                          colorMode === "light"
                            ? "blackAlpha.600"
                            : "whiteAlpha.600"
                        }
                      >
                        SKS Lulus
                      </Text>
                      <Text fontSize="15px" fontWeight={600} mt="4px">
                        99
                      </Text>
                    </Box>
                  </GridItem>
                  <GridItem
                    colSpan={1}
                    py="8px"
                    display="flex"
                    alignItems="start"
                    gap={4}
                  >
                    <Box w="48px" h="48px">
                      <Center
                        w="48px"
                        h="48px"
                        bg={
                          colorMode === "light"
                            ? "blackAlpha.100"
                            : "whiteAlpha.200"
                        }
                        borderRadius="full"
                      >
                        <StarOutlineIconMade fontSize="24px" />
                      </Center>
                    </Box>
                    <Box>
                      <Text
                        fontSize="14px"
                        fontWeight="500"
                        color={
                          colorMode === "light"
                            ? "blackAlpha.600"
                            : "whiteAlpha.600"
                        }
                      >
                        IPK
                      </Text>
                      <Text fontSize="15px" fontWeight={600} mt="4px">
                        3,21
                      </Text>
                    </Box>
                  </GridItem>
                  <GridItem
                    colSpan={{ base: 1, a: 2 }}
                    py="8px"
                    display="flex"
                    alignItems="start"
                    gap={4}
                  >
                    <Box w="48px" h="48px">
                      <Center
                        w="48px"
                        h="48px"
                        bg={
                          colorMode === "light"
                            ? "blackAlpha.100"
                            : "whiteAlpha.200"
                        }
                        borderRadius="full"
                      >
                        <UserOutlineIconMade fontSize="24px" />
                      </Center>
                    </Box>
                    <Box>
                      <Text
                        fontSize="14px"
                        fontWeight="500"
                        color={
                          colorMode === "light"
                            ? "blackAlpha.600"
                            : "whiteAlpha.600"
                        }
                      >
                        Dosen Wali
                      </Text>
                      <Text fontSize="15px" fontWeight={600} mt="4px">
                        Bintang Nuralamsyah
                      </Text>
                    </Box>
                  </GridItem>
                </Grid>
              </CleanPlainCard>
            </PlainCard> */}
            <PlainCard p="0px" bg="unset">
              <CleanPlainCard
                zIndex={1}
                mb="0px"
                bgGradient={
                  colorMode === "light"
                    ? `linear(to-tr, transparent, transparent, transparent, ${colorPref}.50)`
                    : `linear(to-tr, transparent, transparent, transparent, ${colorPref}.800)`
                }
              >
                <Box
                  w="100%"
                  display="flex"
                  alignItems="center"
                  flexWrap={{ base: "wrap", a: "nowrap" }}
                  gap={4}
                >
                  <Box w="full">
                    <Text fontSize="16px" fontWeight={600}>
                      Semester 2
                    </Text>
                    <Text fontSize="14px" fontWeight={500} mt="4px">
                      Genap 2022/2023
                    </Text>
                  </Box>
                  <Flex w="full" mt={{ base: "16px", a: "unset" }}>
                    <Box w="50%">
                      <Text fontSize="13px" fontWeight={500} color="gray">
                        Biaya Pendidikan
                      </Text>
                      <Text fontSize="14px" fontWeight={500} mt="4px">
                        Sudah Terbayar
                      </Text>
                    </Box>
                  </Flex>
                  <Center
                    w={{ base: "full", a: "auto" }}
                    mt={{ base: "24px", a: "0px" }}
                    as={NextLink}
                    href="rencana-studi/detail"
                  >
                    {/* <PrimaryOutlineButton>
                      Lihat Rencana Studi
                    </PrimaryOutlineButton> */}
                    <PrimaryButton>Buat Rencana Studi</PrimaryButton>
                  </Center>
                </Box>
              </CleanPlainCard>
            </PlainCard>
            <Text fontSize="18px" fontWeight="600" mb="24px">
              Riwayat
            </Text>
            <PlainCard>
              <Box
                w="100%"
                display="flex"
                alignItems="center"
                flexWrap={{ base: "wrap", a: "nowrap" }}
                gap={4}
              >
                <Box w="full">
                  <SuccessTextBadge mb={{ base: "24px", a: "6px" }}>
                    <CheckmarkCircleSolidIconMade fontSize="16px" />
                    <Text>Disetujui</Text>
                  </SuccessTextBadge>
                  <Text fontSize="16px" fontWeight={600}>
                    Semester 2
                  </Text>
                  <Text fontSize="14px" fontWeight={500} mt="4px">
                    Genap 2022/2023
                  </Text>
                </Box>
                <Flex w="full" mt={{ base: "16px", a: "unset" }}>
                  <Box w="50%">
                    <Text fontSize="13px" fontWeight={500} color="gray">
                      IPS
                    </Text>
                    <Text fontSize="14px" fontWeight={500} mt="4px">
                      3,31
                    </Text>
                  </Box>
                  <Box w="50%">
                    <Text fontSize="13px" fontWeight={500} color="gray">
                      SKS Diambil
                    </Text>
                    <Text fontSize="14px" fontWeight={500} mt="4px">
                      18 dari 18
                    </Text>
                  </Box>
                </Flex>
                <Center
                  w={{ base: "full", a: "auto" }}
                  as={NextLink}
                  href="rencana-studi/detail"
                  mt={{ base: "24px", a: "0px" }}
                >
                  <DaliOutlineButton>Lihat Detail</DaliOutlineButton>
                </Center>
              </Box>
            </PlainCard>
            <PlainCard>
              <Box
                w="100%"
                display="flex"
                alignItems="center"
                flexWrap={{ base: "wrap", a: "nowrap" }}
                gap={4}
              >
                <Box w="full">
                  <SuccessTextBadge mb={{ base: "24px", a: "6px" }}>
                    <CheckmarkCircleSolidIconMade fontSize="16px" />
                    <Text>Disetujui</Text>
                  </SuccessTextBadge>
                  <Text fontSize="16px" fontWeight={600}>
                    Semester 1
                  </Text>
                  <Text fontSize="14px" fontWeight={500} mt="4px">
                    Gasal 2022/2023
                  </Text>
                </Box>
                <Flex w="full" mt={{ base: "16px", a: "unset" }}>
                  <Box w="50%">
                    <Text fontSize="13px" fontWeight={500} color="gray">
                      IPS
                    </Text>
                    <Text fontSize="14px" fontWeight={500} mt="4px">
                      2,94
                    </Text>
                  </Box>
                  <Box w="50%">
                    <Text fontSize="13px" fontWeight={500} color="gray">
                      SKS Diambil
                    </Text>
                    <Text fontSize="14px" fontWeight={500} mt="4px">
                      17 dari 18
                    </Text>
                  </Box>
                </Flex>
                <Center
                  w={{ base: "full", a: "auto" }}
                  as={NextLink}
                  href="rencana-studi/detail"
                  mt={{ base: "24px", a: "0px" }}
                >
                  <DaliOutlineButton>Lihat Detail</DaliOutlineButton>
                </Center>
              </Box>
            </PlainCard>

            <PlainCard>
              <Box
                w="100%"
                display="flex"
                alignItems="center"
                flexWrap={{ base: "wrap", a: "nowrap" }}
                gap={4}
              >
                <Box w="full">
                  <WarningTextBadge mb={{ base: "24px", a: "6px" }}>
                    <AlertCircleSolidIconMade fontSize="16px" />
                    <Text>Belum disetujui</Text>
                  </WarningTextBadge>
                  <Text fontSize="16px" fontWeight={600}>
                    Semester 1
                  </Text>
                  <Text fontSize="14px" fontWeight={500} mt="4px">
                    Gasal 2022/2023
                  </Text>
                </Box>
                <Flex w="full" mt={{ base: "16px", a: "unset" }}>
                  <Box w="50%">
                    <Text fontSize="13px" fontWeight={500} color="gray">
                      IPS
                    </Text>
                    <Text fontSize="14px" fontWeight={500} mt="4px">
                      2,94
                    </Text>
                  </Box>
                  <Box w="50%">
                    <Text fontSize="13px" fontWeight={500} color="gray">
                      SKS Diambil
                    </Text>
                    <Text fontSize="14px" fontWeight={500} mt="4px">
                      17 dari 18
                    </Text>
                  </Box>
                </Flex>
                <Center
                  w={{ base: "full", a: "auto" }}
                  as={NextLink}
                  href="rencana-studi/detail"
                  mt={{ base: "24px", a: "0px" }}
                >
                  <DaliOutlineButton>Lihat Detail</DaliOutlineButton>
                </Center>
              </Box>
            </PlainCard>
            <PlainCard>
              <Box
                w="100%"
                display="flex"
                alignItems="center"
                flexWrap={{ base: "wrap", a: "nowrap" }}
                gap={4}
              >
                <Box w="full">
                  <NeutralTextBadge mb={{ base: "24px", a: "6px" }}>
                    <MinusCircleSolidIconMade fontSize="16px" />
                    <Text>Cuti semester</Text>
                  </NeutralTextBadge>
                  <Text fontSize="16px" fontWeight={600}>
                    Semester 1
                  </Text>
                  <Text fontSize="14px" fontWeight={500} mt="4px">
                    Gasal 2022/2023
                  </Text>
                </Box>
                <Flex w="full" mt={{ base: "16px", a: "unset" }}>
                  <Box w="50%">
                    <Text fontSize="13px" fontWeight={500} color="gray">
                      IPS
                    </Text>
                    <Text fontSize="14px" fontWeight={500} mt="4px">
                      0,00
                    </Text>
                  </Box>
                  <Box w="50%">
                    <Text fontSize="13px" fontWeight={500} color="gray">
                      SKS Diambil
                    </Text>
                    <Text fontSize="14px" fontWeight={500} mt="4px">
                      0 dari 18
                    </Text>
                  </Box>
                </Flex>
                <Center
                  w={{ base: "full", a: "auto" }}
                  mt={{ base: "24px", a: "0px" }}
                >
                  <DaliOutlineButton isDisabled>
                    Tidak tersedia
                  </DaliOutlineButton>
                </Center>
              </Box>
            </PlainCard>
          </ContainerQuery>
        </PageRow>
      </PageTransition>
    </>
  );
};

export default FRS;

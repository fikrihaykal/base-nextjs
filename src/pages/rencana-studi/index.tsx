import PageTransition from "@/components/PageLayout";
import ContainerQuery from "@/components/atoms/ContainerQuery";
import PageRow from "@/components/atoms/PageRow";
import {
  Box,
  Center,
  Flex,
  Grid,
  GridItem,
  Text,
  useColorModeValue,
  useToast,
  TableContainer,
  useColorMode,
} from "@chakra-ui/react";
import PlainCard from "@/components/organisms/Cards/Card";
import { PrimaryButton } from "@/components/customs/Buttons/PrimaryButton";
import NextLink from "next/link";
import { useState } from "react";
import { InfiniteQuery, TableLoadMoreConf } from "@/utils/table";
import { kolomTabelMahasiswaFRS } from "@/data/table";
import { TableWrapper } from "@/components/customs/Table";
import { TableInfinite } from "@/components/organisms/TableInfinite";
import {
  AlertCircleSolidIconMade,
  ArrowUpOutlineIconMade,
  CheckmarkCircleSolidIconMade,
  CheckmarkOutlineIconMade,
  CloseOutlineIconMade,
  MinusCircleSolidIconMade,
  PlayCircleSolidIconMade,
  UserOutlineIconMade,
} from "@/components/atoms/IconsMade";
import {
  DaliOutlineButton,
} from "@/components/customs/Buttons/DaliButton";
import {
  SuccessTextBadge,
} from "@/components/customs/BadgeStatus/SuccessBadge";
import {
  PrimaryTextBadge,
} from "@/components/customs/BadgeStatus/PrimaryBadge";
import {
  WarningTextBadge,
} from "@/components/customs/BadgeStatus/WarningBadge";
import {
  NeutralTextBadge,
} from "@/components/customs/BadgeStatus/NeutralBadge";

const FRS = () => {
  const toast = useToast();
  const colorborder = useColorModeValue("gray.50", "gray.800");
  const colorborderactive = useColorModeValue("blue.100", "blue.800");
  const bgblue = useColorModeValue("blue.50", "blue.900");
  const { colorMode } = useColorMode();
  const [globalFilter, setGlobalFilter] = useState("");
  const URL = "/api/mahasiswafrs";
  const infiniteData = InfiniteQuery(URL, "mahasiswafrs");
  const table = TableLoadMoreConf(
    infiniteData.flatData,
    kolomTabelMahasiswaFRS,
    globalFilter,
    setGlobalFilter
  );
  return (
    <>
      <PageTransition pageTitle="Rencana Studi">
        <PageRow>
          <ContainerQuery>
            <PlainCard mb="32px">
              <Box>
                <Grid
                  templateColumns={{
                    base: "repeat(1, 1fr)",
                    a: "repeat(4, 1fr)",
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
                        <ArrowUpOutlineIconMade fontSize="24px" />
                      </Center>
                    </Box>
                    <Box>
                      <Text fontSize="14px" fontWeight="500" color="gray">
                        SKS Tempuh
                      </Text>
                      <Text fontSize="16px" fontWeight="600" mt="2px">
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
                      <Text fontSize="14px" fontWeight="500" color="gray">
                        SKS Lulus
                      </Text>
                      <Text fontSize="16px" fontWeight="600" mt="2px">
                        99
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
                      <Text fontSize="14px" fontWeight="500" color="gray">
                        Dosen Wali
                      </Text>
                      <Text fontSize="16px" fontWeight="600" mt="2px">
                        Bintang Nuralamsyah, S.Kom. M.Kom.
                      </Text>
                    </Box>
                  </GridItem>
                </Grid>
              </Box>
            </PlainCard>
            <Text fontSize="18px" fontWeight="600" mb="24px">
              Rencana Studi Anda
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
                  <PrimaryTextBadge mb={{ base: "24px", a: "6px" }}>
                    <PlayCircleSolidIconMade fontSize="16px" />
                    <Text>Saat ini</Text>
                  </PrimaryTextBadge>
                  <Text fontSize="18px" fontWeight="600">
                    Semester 3
                  </Text>
                  <Text fontSize="14px" fontWeight="500" mt="4px">
                    Gasal 2023/2024
                  </Text>
                </Box>
                <Flex w="full" mt={{ base: "16px", a: "unset" }}>
                  <Box w="50%">
                    <Text fontSize="14px" fontWeight="500" color="gray">
                      SKS diambil
                    </Text>
                    <Text fontSize="16px" fontWeight="500" mt="2px">
                      0 dari 24
                    </Text>
                  </Box>
                </Flex>
                <Center
                  w={{ base: "full", a: "auto" }}
                  mt={{ base: "24px", a: "0px" }}
                >
                  <PrimaryButton
                    onClick={() =>
                      toast({
                        position: "top-right",
                        title: "Gagal membuat rencana studi",
                        description:
                          "Anda belum membayra UKT. Hubungi Servicedesk untuk bantuan kendala ini.",
                        status: "error",
                        duration: 5000,
                        isClosable: true,
                        render: (props) => (
                          <Box as="section" pt="4px">
                            <Box
                              width="full"
                              boxShadow="md"
                              bg={colorMode === "light" ? "red.500" : "red.700"}
                              borderRadius="24"
                              p="24px"
                              display="flex"
                              justifyContent="start"
                              alignItems="center"
                              flexWrap={{ base: "wrap", a: "nowrap" }}
                              gap={4}
                            >
                              <Flex alignItems="center" gap={4} w="100%">
                                <Center h="42px" w="42px">
                                  <Center
                                    h="42px"
                                    w="42px"
                                    bg={
                                      colorMode === "light"
                                        ? "red.600"
                                        : "red.800"
                                    }
                                    borderRadius="full"
                                  >
                                    <CloseOutlineIconMade
                                      fontSize="24px"
                                      color="white"
                                    />
                                  </Center>
                                </Center>
                                <Box>
                                  <Text
                                    fontSize="16px"
                                    fontWeight="600"
                                    color="white"
                                  >
                                    {props.title}
                                  </Text>
                                  <Text
                                    fontSize="15px"
                                    color="whiteAlpha.800"
                                    mt="4px"
                                  >
                                    {props.description}
                                  </Text>
                                </Box>
                              </Flex>
                              <Box
                                w={{ base: "100%", a: "auto" }}
                                display="flex"
                                justifyContent="end"
                              >
                                <Box
                                  fontSize="14px"
                                  fontWeight="700"
                                  color="white"
                                  cursor="pointer"
                                  onClick={props.onClose}
                                  p="14px 20px"
                                  borderRadius="16px"
                                  transition="all .25s"
                                  _hover={{
                                    bg:
                                      colorMode === "light"
                                        ? "red.600"
                                        : "red.800",
                                    transition: "all .25s",
                                  }}
                                >
                                  Tutup
                                </Box>
                              </Box>
                            </Box>
                          </Box>
                        ),
                      })
                    }
                  >
                    Buat Rencana Studi
                  </PrimaryButton>
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
                  <Text fontSize="18px" fontWeight="600">
                    Semester 2
                  </Text>
                  <Text fontSize="14px" fontWeight="500" mt="4px">
                    Genap 2022/2023
                  </Text>
                </Box>
                <Flex w="full" mt={{ base: "16px", a: "unset" }}>
                  <Box w="50%">
                    <Text fontSize="14px" fontWeight="500" color="gray">
                      IPS
                    </Text>
                    <Text fontSize="16px" fontWeight="500" mt="2px">
                      3,31
                    </Text>
                  </Box>
                  <Box w="50%">
                    <Text fontSize="14px" fontWeight="500" color="gray">
                      SKS diambil
                    </Text>
                    <Text fontSize="16px" fontWeight="500" mt="2px">
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
                  <Text fontSize="18px" fontWeight="600">
                    Semester 1
                  </Text>
                  <Text fontSize="14px" fontWeight="500" mt="4px">
                    Gasal 2022/2023
                  </Text>
                </Box>
                <Flex w="full" mt={{ base: "16px", a: "unset" }}>
                  <Box w="50%">
                    <Text fontSize="14px" fontWeight="500" color="gray">
                      IPS
                    </Text>
                    <Text fontSize="16px" fontWeight="500" mt="2px">
                      2,94
                    </Text>
                  </Box>
                  <Box w="50%">
                    <Text fontSize="14px" fontWeight="500" color="gray">
                      SKS diambil
                    </Text>
                    <Text fontSize="16px" fontWeight="500" mt="2px">
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
                  <Text fontSize="18px" fontWeight="600">
                    Semester 1
                  </Text>
                  <Text fontSize="14px" fontWeight="500" mt="4px">
                    Gasal 2022/2023
                  </Text>
                </Box>
                <Flex w="full" mt={{ base: "16px", a: "unset" }}>
                  <Box w="50%">
                    <Text fontSize="14px" fontWeight="500" color="gray">
                      IPS
                    </Text>
                    <Text fontSize="16px" fontWeight="500" mt="2px">
                      2,94
                    </Text>
                  </Box>
                  <Box w="50%">
                    <Text fontSize="14px" fontWeight="500" color="gray">
                      SKS diambil
                    </Text>
                    <Text fontSize="16px" fontWeight="500" mt="2px">
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
                  <Text fontSize="18px" fontWeight="600">
                    Semester 1
                  </Text>
                  <Text fontSize="14px" fontWeight="500" mt="4px">
                    Gasal 2022/2023
                  </Text>
                </Box>
                <Flex w="full" mt={{ base: "16px", a: "unset" }}>
                  <Box w="50%">
                    <Text fontSize="14px" fontWeight="500" color="gray">
                      IPS
                    </Text>
                    <Text fontSize="16px" fontWeight="500" mt="2px">
                      0,00
                    </Text>
                  </Box>
                  <Box w="50%">
                    <Text fontSize="14px" fontWeight="500" color="gray">
                      SKS diambil
                    </Text>
                    <Text fontSize="16px" fontWeight="500" mt="2px">
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
            <PlainCard>
              <Box w="100%">
                <Text fontSize="20px" fontWeight="600">
                  Rencana Studi Mahasiswa Anda
                </Text>
              </Box>
              <TableWrapper w="100%" p="unset" mt="8px">
                <TableContainer
                  sx={{
                    "::-webkit-scrollbar-thumb": {
                      backgroundColor:
                        colorMode == "light" ? "gray.200" : "gray.800",
                    },
                    scrollbarWidth: "thin",
                    scrollbarColor: "silver transparent;",
                  }}
                >
                  <TableInfinite table={table} infiniteData={infiniteData} />
                </TableContainer>
              </TableWrapper>
            </PlainCard>
          </ContainerQuery>
        </PageRow>
      </PageTransition>
    </>
  );
};

export default FRS;

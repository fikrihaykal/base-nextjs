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
import {
  PrimaryButton,
} from "@/components/atoms/Buttons/PrimaryButton";
import { SecondaryButton } from "@/components/atoms/Buttons/SecondaryButton";
import NextLink from "next/link";
import { useState } from "react";
import { InfiniteQuery, TableLoadMoreConf } from "@/utils/table";
import { kolomTabelMahasiswaFRS } from "@/data/table";
import { TableWrapper } from "@/components/customs/Table";
import { TableInfinite } from "@/components/organisms/TableInfinite";
import { CloseOutlineIconMade } from "@/components/atoms/IconsMade";

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
            <PlainCard>
              <Box>
                <Text fontSize="20px" fontWeight="600">
                  Informasi
                </Text>
              </Box>
              <Box mt="24px">
                <Grid
                  templateColumns={{
                    base: "repeat(2, 1fr)",
                    a: "repeat(4, 1fr)",
                  }}
                  gap={6}
                >
                  <GridItem colSpan={1} py="8px">
                    <Text fontSize="14px" fontWeight="500" color="gray">
                      SKS Tempuh
                    </Text>
                    <Text fontSize="16px" fontWeight="500" mt="2px">
                      99
                    </Text>
                  </GridItem>
                  <GridItem colSpan={1} py="8px">
                    <Text fontSize="14px" fontWeight="500" color="gray">
                      SKS Lulus
                    </Text>
                    <Text fontSize="16px" fontWeight="500" mt="2px">
                      99
                    </Text>
                  </GridItem>
                  <GridItem colSpan={2} py="8px">
                    <Text fontSize="14px" fontWeight="500" color="gray">
                      Dosen Wali
                    </Text>
                    <Text fontSize="16px" fontWeight="500" mt="2px">
                      Bintang Nuralamsyah, S.Kom. M.Kom.
                    </Text>
                  </GridItem>
                </Grid>
              </Box>
            </PlainCard>
            <PlainCard>
              <Box w="100%">
                <Text fontSize="20px" fontWeight="600">
                  Rencana Studi Anda
                </Text>
              </Box>
              <Box
                display="flex"
                flexWrap="wrap"
                gap={4}
                mt="24px"
                mx={{ base: "-16px", a: "unset" }}
                mb={{ base: "-16px", a: "unset" }}
              >
                <Box
                  w="100%"
                  border="2px solid"
                  borderColor={colorborderactive}
                  bg={bgblue}
                  p="24px"
                  borderRadius="16px"
                  display="flex"
                  alignItems="center"
                  flexWrap={{ base: "wrap", a: "nowrap" }}
                  gap={4}
                >
                  <Box w="full">
                    <Text fontSize="13px" fontWeight="600" color="blue">
                      Saat Ini
                    </Text>
                    <Text fontSize="18px" fontWeight="600" mt="4px">
                      Semester 3
                    </Text>
                    <Text fontSize="14px" fontWeight="500" mt="4px">
                      Gasal 2023/2024
                    </Text>
                  </Box>
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
                                bg={
                                  colorMode === "light" ? "red.500" : "red.700"
                                }
                                borderRadius="24"
                                p="24px"
                                display="flex"
                                justifyContent="start"
                                alignItems="center"
                                flexWrap={{base: "wrap", a: "nowrap"}}
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
                                  w={{base: "100%", a: "auto"}}
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
                <Box
                  w="100%"
                  border="2px solid"
                  borderColor={colorborder}
                  p="24px"
                  borderRadius="16px"
                  display="flex"
                  alignItems="center"
                  flexWrap={{ base: "wrap", a: "nowrap" }}
                  gap={4}
                >
                  <Box w="full">
                    <Text fontSize="18px" fontWeight="600">
                      Semester 2
                    </Text>
                    <Text fontSize="14px" fontWeight="500" mt="4px">
                      Genap 2022/2023
                    </Text>
                  </Box>
                  <Flex w="full">
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
                    <SecondaryButton>Lihat Detail</SecondaryButton>
                  </Center>
                </Box>
                <Box
                  w="100%"
                  border="2px solid"
                  borderColor={colorborder}
                  p="24px"
                  borderRadius="16px"
                  display="flex"
                  alignItems="center"
                  flexWrap={{ base: "wrap", a: "nowrap" }}
                  gap={4}
                >
                  <Box w="full">
                    <Text fontSize="18px" fontWeight="600">
                      Semester 1
                    </Text>
                    <Text fontSize="14px" fontWeight="500" mt="4px">
                      Gasal 2022/2023
                    </Text>
                  </Box>
                  <Flex w="full">
                    <Box w="50%">
                      <Text fontSize="14px" fontWeight="500" color="gray">
                        IPS
                      </Text>
                      <Text fontSize="16px" fontWeight="500" mt="2px">
                        3,09
                      </Text>
                    </Box>
                    <Box w="50%">
                      <Text fontSize="14px" fontWeight="500" color="gray">
                        SKS diambil
                      </Text>
                      <Text fontSize="16px" fontWeight="500" mt="2px">
                        18 dari 24
                      </Text>
                    </Box>
                  </Flex>
                  <Center
                    w={{ base: "full", a: "auto" }}
                    as={NextLink}
                    href="rencana-studi/detail"
                    mt={{ base: "24px", a: "0px" }}
                  >
                    <SecondaryButton>Lihat Detail</SecondaryButton>
                  </Center>
                </Box>
              </Box>
            </PlainCard>
            <PlainCard>
              <Box w="100%">
                <Text fontSize="20px" fontWeight="600">
                  Daftar Mahasiswa Anda
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

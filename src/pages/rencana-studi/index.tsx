import PageTransition from "@/components/PageLayout";
import ContainerQuery from "@/components/atoms/ContainerQuery";
import PageRow from "@/components/atoms/PageRow";
import {
  Box,
  Button,
  ButtonGroup,
  Center,
  CloseButton,
  Flex,
  Grid,
  GridItem,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
  useToast,
  Link,
  TableContainer,
  useColorMode,
} from "@chakra-ui/react";
import PlainCard from "@/components/organisms/Cards/Card";
import { LightButton } from "@/components/atoms/Buttons/LightButton";
import {
  PrimaryButton,
  PrimaryOutlineButton,
} from "@/components/atoms/Buttons/PrimaryButton";
import { SecondaryButton } from "@/components/atoms/Buttons/SecondaryButton";
import NextLink from "next/link";
import { TextButton } from "@/components/atoms/Buttons/TextButton";
import { useState } from "react";
import { InfiniteQuery, TableLoadMoreConf } from "@/utils/table";
import { kolomTabelMahasiswaFRS } from "@/data/table";
import { TableWrapper } from "@/components/customs/Table";
import { TableInfinite } from "@/components/organisms/TableInfinite";

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
                  Ringkasan
                </Text>
              </Box>
              <Box
                display="flex"
                flexWrap={{ base: "wrap", a: "nowrap" }}
                gap={8}
                mt="24px"
              >
                <Grid
                  templateColumns="repeat(2, 1fr)"
                  gap={6}
                  w={{ base: "100%", a: "50%" }}
                  pr={{ base: "unset", a: "24px" }}
                  pb={{ base: "24px", a: "unset" }}
                  borderRight={{ base: "unset", a: "2px solid" }}
                  borderRightColor={{ base: "unset", a: colorborder }}
                  borderBottom={{ base: "2px solid", a: "unset" }}
                  borderBottomColor={{ base: colorborder, a: "unset" }}
                >
                  <GridItem colSpan={1}>
                    <Text fontSize="14px" fontWeight="500" color="gray">
                      SKS Tempuh
                    </Text>
                    <Text fontSize="16px" fontWeight="500" mt="2px">
                      99
                    </Text>
                  </GridItem>
                  <GridItem colSpan={1}>
                    <Text fontSize="14px" fontWeight="500" color="gray">
                      SKS Lulus
                    </Text>
                    <Text fontSize="16px" fontWeight="500" mt="2px">
                      99
                    </Text>
                  </GridItem>
                  <GridItem colSpan={2}>
                    <Text fontSize="14px" fontWeight="500" color="gray">
                      Dosen Wali
                    </Text>
                    <Text fontSize="16px" fontWeight="500" mt="2px">
                      Bintang Nuralamsyah, S.Kom. M.Kom.
                    </Text>
                  </GridItem>
                </Grid>
                <Grid
                  templateColumns="repeat(2, 1fr)"
                  gap={6}
                  w={{ base: "100%", a: "50%" }}
                >
                  <GridItem colSpan={1}>
                    <Text fontSize="14px" fontWeight="500" color="gray">
                      Wajib diambil
                    </Text>
                    <Text fontSize="16px" fontWeight="500" mt="2px">
                      0
                    </Text>
                  </GridItem>
                  <GridItem colSpan={1}>
                    <Text fontSize="14px" fontWeight="500" color="gray">
                      Mengulang
                    </Text>
                    <Text fontSize="16px" fontWeight="500" mt="2px">
                      0
                    </Text>
                  </GridItem>
                  <GridItem colSpan={1}>
                    <Text fontSize="14px" fontWeight="500" color="gray">
                      Melanggar prasyarat
                    </Text>
                    <Text fontSize="16px" fontWeight="500" mt="2px">
                      0
                    </Text>
                  </GridItem>
                  <GridItem colSpan={1}>
                    <Text fontSize="14px" fontWeight="500" color="gray">
                      Ekivalensi
                    </Text>
                    <Text fontSize="16px" fontWeight="500" mt="2px">
                      0
                    </Text>
                  </GridItem>
                  {/* <GridItem colSpan={2}>
                    <Center>
                      <TextButton w="full">Lihat selengkapnya</TextButton>
                    </Center>
                  </GridItem> */}
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
                      Saat ini
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
                          description: "Anda belum membayra UKT",
                          status: "error",
                          duration: 5000,
                          isClosable: true,
                          render: (props) => (
                            <Box as="section" pt="8px">
                              <Box
                                width={{ base: "full", sm: "md" }}
                                boxShadow="md"
                                bg="red"
                                borderRadius="24"
                                display="flex"
                                justifyContent="space-between"
                              >
                                <Box p="24px">
                                  <Text
                                    fontSize="16px"
                                    fontWeight="medium"
                                    color="white"
                                  >
                                    {props.title}
                                  </Text>
                                  <Text fontSize="15px" color="whiteAlpha.800" mt="4px">
                                    {props.description}
                                  </Text>
                                </Box>
                                <CloseButton mt="8px" mr="8px" onClick={props.onClose} />
                              </Box>
                            </Box>
                          ),
                        })
                      }
                    >
                      Buat Rencana Studi
                    </PrimaryButton>
                  </Center>

                  {/* <Center
                    w={{ base: "full", a: "auto" }}
                    as={NextLink}
                    href="rencana-studi/detail"
                    mt={{ base: "24px", a: "0px" }}
                  >
                    <PrimaryOutlineButton>Lihat Detail</PrimaryOutlineButton>
                  </Center> */}
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

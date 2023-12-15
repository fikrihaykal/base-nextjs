import PageTransition from "@/components/PageLayout";
import ContainerQuery from "@/components/atoms/ContainerQuery";
import PageRow from "@/components/atoms/PageRow";
import {
  Box,
  Center,
  Flex,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useColorMode,
} from "@chakra-ui/react";
import PlainCard from "@/components/organisms/Cards/Card";
import DropdownSelect from "@/components/customs/Select";
import { TableSearch } from "@/components/customs/Table";
import { DropdownItemDate } from "@/data/dummy";
import { PrimaryButton } from "@/components/customs/Buttons/PrimaryButton";
import {
  AlertCircleSolidIconMade,
  CheckmarkCircleSolidIconMade,
  ChevronDownOutlineIconMade,
  FormOutlineIconMade,
  ListOutlineIconMade,
  PercentOutlineIconMade,
  UserOutlineIconMade,
} from "@/components/atoms/IconsMade";
import NextLink from "next/link";
import { SuccessTextBadge } from "@/components/customs/BadgeStatus/SuccessBadge";
import { WarningTextBadge } from "@/components/customs/BadgeStatus/WarningBadge";
const Cuti = () => {
  const { colorMode } = useColorMode();
  const semester = [
    { value: "20231", label: "Gasal 2023/2024" },
    { value: "20222", label: "Genap 2022/2023" },
    { value: "20221", label: "Gasal 2022/2023" },
    { value: "20212", label: "Genap 2021/2022" },
    { value: "20211", label: "Gasal 2021/2022" },
  ];
  return (
    <>
      <PageTransition pageTitle="Kelas">
        <PageRow>
          <ContainerQuery>
            <PlainCard>
              <Flex wrap={{ base: "wrap", m: "nowrap" }} gap={4}>
                <Box w="full">
                  <DropdownSelect
                    placeholder="Pilih semester"
                    defaultValue={[semester[0]]}
                    options={semester}
                    isDisabled={false}
                    isMulti={false}
                    isClearable={false}
                  />
                </Box>
                <Box w="full">
                  <TableSearch
                    placeholder="Cari..."
                    target={DropdownItemDate}
                  />
                </Box>
                <Center as={NextLink} href="kelas/tambahkelas" w={{ base: "full", m: "auto" }}>
                  <PrimaryButton>Tambah Kelas</PrimaryButton>
                </Center>
              </Flex>
              <TableContainer mt="24px">
                <Table variant="simple">
                  <Thead>
                    <Tr>
                      <Th
                        p="16px 8px"
                        fontWeight={600}
                        color="gray"
                        textTransform="capitalize"
                      >
                        Kelas
                      </Th>
                      <Th
                        p="16px 8px"
                        fontWeight={600}
                        color="gray"
                        textTransform="capitalize"
                      >
                        SKS
                      </Th>
                      <Th
                        p="16px 8px"
                        fontWeight={600}
                        color="gray"
                        textTransform="capitalize"
                      >
                        Kuota (mahasiswa)
                      </Th>
                      <Th
                        p="16px 8px"
                        fontWeight={600}
                        color="gray"
                        textTransform="capitalize"
                      >
                        Dosen
                      </Th>
                      <Th
                        p="16px 8px"
                        fontWeight={600}
                        color="gray"
                        textTransform="capitalize"
                      >
                        Jadwal
                      </Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td p="24px 8px">
                        <Text fontSize="16px" fontWeight={600}>
                          Pemrograman Dasar (A)
                        </Text>
                        <Text fontSize="14px" fontWeight={500} mt="4px">
                          IF123456
                        </Text>
                        <Box as={NextLink} href="/" display="inline-flex">
                          <Text
                            fontSize="14px"
                            fontWeight={600}
                            color={
                              colorMode == "light" ? "blue.500" : "#007FEB"
                            }
                            mt="2px"
                          >
                            Lihat detail
                          </Text>
                        </Box>
                      </Td>
                      <Td p="24px 8px">
                        <Text fontSize="14px" fontWeight={500}>
                          2
                        </Text>
                      </Td>
                      <Td p="24px 8px">
                        <Text fontSize="14px" fontWeight={500}>
                          30 dari 40
                        </Text>
                      </Td>
                      <Td p="24px 8px">
                        <Text fontSize="14px" fontWeight={500}>
                          Dr. Budi Santoso, M.Sc.
                        </Text>
                      </Td>
                      <Td p="24px 8px">
                        <Text fontSize="14px" fontWeight={500}>
                          Senin, 08.00 - 10.00
                        </Text>
                        <Text
                          fontSize="13px"
                          fontWeight={500}
                          color="gray"
                          mt="2px"
                        >
                          di ruang 101
                        </Text>
                      </Td>
                    </Tr>
                    <Tr>
                      <Td p="24px 8px">
                        <Text fontSize="16px" fontWeight={600}>
                          Pemrograman Dasar (B)
                        </Text>
                        <Text fontSize="14px" fontWeight={500} mt="4px">
                          IF123456
                        </Text>
                        <Box as={NextLink} href="/" display="inline-flex">
                          <Text
                            fontSize="14px"
                            fontWeight={600}
                            color={
                              colorMode == "light" ? "blue.500" : "#007FEB"
                            }
                            mt="2px"
                          >
                            Lihat detail
                          </Text>
                        </Box>
                      </Td>
                      <Td p="24px 8px">
                        <Text fontSize="14px" fontWeight={500}>
                          2
                        </Text>
                      </Td>
                      <Td p="24px 8px">
                        <Text fontSize="14px" fontWeight={500}>
                          14 dari 40
                        </Text>
                      </Td>
                      <Td p="24px 8px">
                        <Menu>
                          {({ isOpen }) => (
                            <>
                              <MenuButton
                                cursor="pointer"
                                color={
                                  colorMode == "light" ? "blue.500" : "#007FEB"
                                }
                              >
                                <Box display="flex" alignItems="center" gap={2}>
                                  <Text fontSize="14px" fontWeight={600}>
                                    2 dosen
                                  </Text>

                                  <ChevronDownOutlineIconMade
                                    fontSize="16px"
                                    mt={!isOpen ? "2px" : "0px"}
                                    transition="transform 0.3s ease"
                                    transform={
                                      !isOpen
                                        ? "rotate(0deg)"
                                        : "rotate(-180deg)"
                                    }
                                  />
                                </Box>
                              </MenuButton>
                              <MenuList
                                border={
                                  colorMode == "light"
                                    ? "1px solid #e4e4e4"
                                    : "1px solid #333333"
                                }
                                fontSize="14px"
                                boxShadow={
                                  colorMode == "light"
                                    ? "0 4px 16px rgba(227, 230, 236, 0.4)"
                                    : "0 4px 24px rgba(0, 0, 0, 0.15)"
                                }
                                p="24px"
                                borderRadius="24px"
                                defaultChecked={false}
                                bg={colorMode == "light" ? "#fff" : "#222222"}
                              >
                                <Text fontWeight={600}>
                                  Dosen pada kelas ini
                                </Text>
                                <Box
                                  mt="16px"
                                  pt="16px"
                                  borderTop="1px solid"
                                  borderTopColor={
                                    colorMode == "light"
                                      ? "gray.100"
                                      : "gray.800"
                                  }
                                >
                                  <Text fontSize="14px" fontWeight={500}>
                                    Prof. Dr. Andi Wijaya, S.T., M.T.
                                  </Text>
                                </Box>
                                <Box
                                  mt="16px"
                                  pt="16px"
                                  borderTop="1px solid"
                                  borderTopColor={
                                    colorMode == "light"
                                      ? "gray.100"
                                      : "gray.800"
                                  }
                                >
                                  <Text fontSize="14px" fontWeight={500}>
                                    Dra. Cindy Kurniawati, M.Kom.
                                  </Text>
                                </Box>
                              </MenuList>
                            </>
                          )}
                        </Menu>
                      </Td>
                      <Td p="24px 8px">
                        <Menu>
                          {({ isOpen }) => (
                            <>
                              <MenuButton
                                cursor="pointer"
                                color={
                                  colorMode == "light" ? "blue.500" : "#007FEB"
                                }
                              >
                                <Box display="flex" alignItems="center" gap={2}>
                                  <Text fontSize="14px" fontWeight={600}>
                                    2 jadwal
                                  </Text>

                                  <ChevronDownOutlineIconMade
                                    fontSize="16px"
                                    mt={!isOpen ? "2px" : "0px"}
                                    transition="transform 0.3s ease"
                                    transform={
                                      !isOpen
                                        ? "rotate(0deg)"
                                        : "rotate(-180deg)"
                                    }
                                  />
                                </Box>
                              </MenuButton>
                              <MenuList
                                border={
                                  colorMode == "light"
                                    ? "1px solid #e4e4e4"
                                    : "1px solid #333333"
                                }
                                fontSize="14px"
                                boxShadow={
                                  colorMode == "light"
                                    ? "0 4px 16px rgba(227, 230, 236, 0.4)"
                                    : "0 4px 24px rgba(0, 0, 0, 0.15)"
                                }
                                p="24px"
                                borderRadius="24px"
                                defaultChecked={false}
                                bg={colorMode == "light" ? "#fff" : "#222222"}
                              >
                                <Text fontWeight={600}>
                                  Jadwal pada kelas ini
                                </Text>
                                <Box
                                  mt="16px"
                                  pt="16px"
                                  borderTop="1px solid"
                                  borderTopColor={
                                    colorMode == "light"
                                      ? "gray.100"
                                      : "gray.800"
                                  }
                                >
                                  <Text fontSize="14px" fontWeight={500}>
                                    Senin, 18.00-20.00
                                  </Text>
                                  <Box
                                    className="file__subtitle"
                                    fontSize="13px"
                                    lineHeight="1.38462"
                                    fontWeight={500}
                                    color="gray"
                                    mt="4px"
                                  >
                                    di ruang 105a
                                  </Box>
                                </Box>
                                <Box
                                  mt="16px"
                                  pt="16px"
                                  borderTop="1px solid"
                                  borderTopColor={
                                    colorMode == "light"
                                      ? "gray.100"
                                      : "gray.800"
                                  }
                                >
                                  <Text fontSize="14px" fontWeight={500}>
                                    Selasa, 18.00-20.00
                                  </Text>
                                  <Box
                                    className="file__subtitle"
                                    fontSize="13px"
                                    lineHeight="1.38462"
                                    fontWeight={500}
                                    color="gray"
                                    mt="4px"
                                  >
                                    di ruang 105b
                                  </Box>
                                </Box>
                              </MenuList>
                            </>
                          )}
                        </Menu>
                      </Td>
                    </Tr>
                  </Tbody>
                </Table>
              </TableContainer>
            </PlainCard>
          </ContainerQuery>
        </PageRow>
      </PageTransition>
    </>
  );
};

export default Cuti;

import PageTransition from "@/components/PageLayout";
import ContainerQuery from "@/components/atoms/ContainerQuery";
import PageRow from "@/components/atoms/PageRow";
import {
  Box,
  Button,
  Divider,
  Flex,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Table,
  TableCaption,
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
import { SuccessTextBadge } from "@/components/customs/BadgeStatus/SuccessBadge";
import {
  AlertCircleSolidIconMade,
  CheckmarkCircleSolidIconMade,
  ChevronDownOutlineIconMade,
  ChevronUpOutlineIconMade,
  EllipsisVerticalOutlineIconMade,
  FormOutlineIconMade,
  ListOutlineIconMade,
  PercentOutlineIconMade,
  UserOutlineIconMade,
} from "@/components/atoms/IconsMade";
import { WarningTextBadge } from "@/components/customs/BadgeStatus/WarningBadge";
import { DropdownItemDate } from "@/data/dummy";
import { TableSearch, TableSorting } from "@/components/customs/Table";
import {
  TableFilter,
  TableFilterDate,
  TableSortingCol,
  TableSortingRow,
} from "@/components/molecules/Table";
import Select from "react-select";
import DropdownSelect from "@/components/customs/Select";
import NextLink from "next/link";
const Perwalian = () => {
  const { colorMode } = useColorMode();
  const departemen = [
    { value: "a", label: "Teknik Informatika" },
    { value: "b", label: "Sistem Informasi" },
    { value: "c", label: "Teknologi Informasi" },
  ];
  const options = [
    { value: "a", label: "Budi Santoso" },
    { value: "b", label: "Agung Setiawan" },
    { value: "c", label: "Wahyu" },
    { value: "d", label: "Joko Nugroho" },
    { value: "e", label: "Arif" },
  ];
  const semester = [
    { value: "20231", label: "Gasal 2023/2024" },
    { value: "20222", label: "Genap 2022/2023" },
    { value: "20221", label: "Gasal 2022/2023" },
    { value: "20212", label: "Genap 2021/2022" },
    { value: "20211", label: "Gasal 2021/2022" },
  ];
  const angkatan = [
    { value: "all", label: "Semua Angkatan" },
    { value: "2023", label: "Angkatan 2023" },
    { value: "2022", label: "Angkatan 2022" },
    { value: "2021", label: "Angkatan 2021" },
    { value: "2020", label: "Angkatan 2020" },
    { value: "2019", label: "Angkatan 2019" },
  ];
  return (
    <>
      <PageTransition pageTitle="Perwalian">
        <PageRow>
          <ContainerQuery>
            <PlainCard>
              <Box>
                <Text fontSize="20px" fontWeight="600">
                  Dosen Wali (Bagian Admin)
                </Text>
                <Text fontSize="16px" fontWeight="500" color="gray" mt="4px">
                  Pilih departemen dan nama dosen wali untuk mengetahui daftar
                  perwalian
                </Text>
              </Box>
              <Flex wrap={{ base: "wrap", m: "nowrap" }} gap={4} mt="24px">
                <Box w="full">
                  <DropdownSelect
                    placeholder="Pilih departemen"
                    defaultValue={false}
                    options={departemen}
                    isDisabled={false}
                    isMulti={false}
                    isClearable={false}
                  />
                </Box>
                <Box w="full">
                  <DropdownSelect
                    placeholder="Pilih dosen"
                    defaultValue={false}
                    options={options}
                    isDisabled={false}
                    isMulti={false}
                    isClearable={false}
                  />
                </Box>
              </Flex>
            </PlainCard>
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
                  <DropdownSelect
                    placeholder="Pilih angkatan"
                    defaultValue={[angkatan[0]]}
                    options={angkatan}
                    isDisabled={false}
                    isMulti={false}
                    isClearable={false}
                  />
                </Box>
                <Box w="full">
                  <TableSearch placeholder="Cari..." target={DropdownItemDate}/>
                </Box>
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
                        Mahasiswa
                      </Th>
                      <Th
                        p="16px 8px"
                        fontWeight={600}
                        color="gray"
                        textTransform="capitalize"
                      >
                        Angkatan
                      </Th>
                      <Th
                        p="16px 8px"
                        fontWeight={600}
                        color="gray"
                        textTransform="capitalize"
                      >
                        SKS Diambil
                      </Th>
                      <Th
                        p="16px 8px"
                        fontWeight={600}
                        color="gray"
                        textTransform="capitalize"
                      >
                        SKS Tempuh
                      </Th>
                      <Th
                        p="16px 8px"
                        fontWeight={600}
                        color="gray"
                        textTransform="capitalize"
                      >
                        SKS Lulus
                      </Th>
                      <Th
                        p="16px 8px"
                        fontWeight={600}
                        color="gray"
                        textTransform="capitalize"
                      >
                        IPS Lalu
                      </Th>
                      <Th
                        p="16px 8px"
                        fontWeight={600}
                        color="gray"
                        textTransform="capitalize"
                      >
                        IPK
                      </Th>
                      <Th
                        p="16px 8px"
                        fontWeight={600}
                        color="gray"
                        textTransform="capitalize"
                      >
                        Perkuliahan
                      </Th>
                      <Th
                        p="16px 8px"
                        fontWeight={600}
                        color="gray"
                        textTransform="capitalize"
                      >
                        Rencana Studi
                      </Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td p="24px 8px">
                        <Text fontSize="16px" fontWeight={600}>
                          Andika Nugrahanto
                        </Text>
                        <Text fontSize="14px" fontWeight={500} mt="4px">
                          05111940000031
                        </Text>
                        <Menu>
                          {({ isOpen }) => (
                            <>
                              <MenuButton cursor="pointer" mt="4px">
                                <Box
                                  display="flex"
                                  alignItems="center"
                                  gap={2}
                                  color={
                                    colorMode == "light"
                                      ? "blue.500"
                                      : "#007FEB"
                                  }
                                >
                                  {/* <Box
                                    w="10px"
                                    h="10px"
                                    bg={
                                      colorMode == "light"
                                        ? "red.500"
                                        : "#B53F3F"
                                    }
                                    borderRadius="full"
                                  /> */}
                                  <Text fontSize="14px" fontWeight={600}>
                                    Lihat menu
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
                                boxShadow={
                                  colorMode == "light"
                                    ? "0 4px 16px rgba(227, 230, 236, 0.4)"
                                    : "0 4px 24px rgba(0, 0, 0, 0.15)"
                                }
                                p="16px"
                                borderRadius="24px"
                                defaultChecked={false}
                                bg={colorMode == "light" ? "#fff" : "#222222"}
                              >
                                <MenuItem
                                  icon={<FormOutlineIconMade fontSize="18px" />}
                                  bg="transparent"
                                  fontSize="14px"
                                  fontWeight="600"
                                  py="16px"
                                  borderRadius="16px"
                                  transition=".25s all"
                                  _hover={{
                                    bg:
                                      colorMode == "light"
                                        ? "gray.50"
                                        : "gray.800",
                                  }}
                                  as={NextLink}
                                  href="perwalian/detailrencanastudi"
                                >
                                  <Flex
                                    justifyContent="space-between"
                                    alignItems="center"
                                  >
                                    <Text>Rencana Studi</Text>

                                    {/* <Box
                                      w="10px"
                                      h="10px"
                                      bg={
                                        colorMode == "light"
                                          ? "red.500"
                                          : "#B53F3F"
                                      }
                                      borderRadius="full"
                                    /> */}
                                  </Flex>
                                </MenuItem>
                              </MenuList>
                            </>
                          )}
                        </Menu>
                      </Td>
                      <Td p="24px 8px">
                        <Text fontSize="14px" fontWeight={500}>
                          2019
                        </Text>
                      </Td>
                      <Td p="24px 8px">
                        <Text fontSize="14px" fontWeight={500}>
                          9 dari 18
                        </Text>
                      </Td>
                      <Td p="24px 8px">
                        <Text fontSize="14px" fontWeight={500}>
                          155
                        </Text>
                      </Td>
                      <Td p="24px 8px">
                        <Text fontSize="14px" fontWeight={500}>
                          140
                        </Text>
                      </Td>
                      <Td p="24px 8px">
                        <Text fontSize="14px" fontWeight={500}>
                          1.60
                        </Text>
                      </Td>
                      <Td p="24px 8px">
                        <Text fontSize="14px" fontWeight={500}>
                          3.81
                        </Text>
                      </Td>
                      <Td p="24px 8px">
                        <SuccessTextBadge>
                          <CheckmarkCircleSolidIconMade fontSize="16px" />
                          <Text>Aktif</Text>
                        </SuccessTextBadge>
                      </Td>
                      <Td p="24px 8px">
                        <SuccessTextBadge>
                          <CheckmarkCircleSolidIconMade fontSize="16px" />
                          <Text>Disetujui</Text>
                        </SuccessTextBadge>
                      </Td>
                    </Tr>
                    <Tr>
                      <Td p="24px 8px">
                        <Text fontSize="16px" fontWeight={600}>
                          Aimar Wibowo
                        </Text>
                        <Text fontSize="14px" fontWeight={500} mt="4px">
                          05111940000034
                        </Text>
                        <Menu>
                          {({ isOpen }) => (
                            <>
                              <MenuButton cursor="pointer" mt="4px">
                                <Box
                                  display="flex"
                                  alignItems="center"
                                  gap={2}
                                  color={
                                    colorMode == "light"
                                      ? "blue.500"
                                      : "#007FEB"
                                  }
                                >
                                  <Box
                                    w="10px"
                                    h="10px"
                                    bg={
                                      colorMode == "light"
                                        ? "red.500"
                                        : "#B53F3F"
                                    }
                                    borderRadius="full"
                                  />
                                  <Text fontSize="14px" fontWeight={600}>
                                    Lihat menu
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
                                boxShadow={
                                  colorMode == "light"
                                    ? "0 4px 16px rgba(227, 230, 236, 0.4)"
                                    : "0 4px 24px rgba(0, 0, 0, 0.15)"
                                }
                                p="16px"
                                borderRadius="24px"
                                defaultChecked={false}
                                bg={colorMode == "light" ? "#fff" : "#222222"}
                              >
                                <MenuItem
                                  icon={<FormOutlineIconMade fontSize="18px" />}
                                  bg="transparent"
                                  fontSize="14px"
                                  fontWeight="600"
                                  py="16px"
                                  borderRadius="16px"
                                  transition=".25s all"
                                  _hover={{
                                    bg:
                                      colorMode == "light"
                                        ? "gray.50"
                                        : "gray.800",
                                  }}
                                  as={NextLink}
                                  href="perwalian/detailrencanastudi"
                                >
                                  <Flex
                                    justifyContent="space-between"
                                    alignItems="center"
                                  >
                                    <Text>Rencana Studi</Text>

                                    <Box
                                      w="10px"
                                      h="10px"
                                      bg={
                                        colorMode == "light"
                                          ? "red.500"
                                          : "#B53F3F"
                                      }
                                      borderRadius="full"
                                    />
                                  </Flex>
                                </MenuItem>
                                <MenuDivider
                                  borderColor={
                                    colorMode == "light"
                                      ? "gray.100"
                                      : "gray.700"
                                  }
                                />
                                <MenuItem
                                  icon={<UserOutlineIconMade fontSize="18px" />}
                                  bg="transparent"
                                  fontSize="14px"
                                  fontWeight="600"
                                  py="16px"
                                  borderRadius="16px"
                                  transition=".25s all"
                                  _hover={{
                                    bg:
                                      colorMode == "light"
                                        ? "gray.50"
                                        : "gray.800",
                                  }}
                                  as={NextLink}
                                  href="https://portal.its.ac.id"
                                >
                                  <Flex
                                    justifyContent="space-between"
                                    alignItems="center"
                                  >
                                    <Text>Biodata</Text>
                                  </Flex>
                                </MenuItem>
                                <MenuItem
                                  icon={
                                    <PercentOutlineIconMade fontSize="18px" />
                                  }
                                  bg="transparent"
                                  fontSize="14px"
                                  fontWeight="600"
                                  py="16px"
                                  borderRadius="16px"
                                  transition=".25s all"
                                  _hover={{
                                    bg:
                                      colorMode == "light"
                                        ? "gray.50"
                                        : "gray.800",
                                  }}
                                  as={NextLink}
                                  href="https://portal.its.ac.id"
                                >
                                  <Flex
                                    justifyContent="space-between"
                                    alignItems="center"
                                  >
                                    <Text>Nilai Keseluruhan</Text>
                                  </Flex>
                                </MenuItem>
                                <MenuItem
                                  icon={
                                    <PercentOutlineIconMade fontSize="18px" />
                                  }
                                  bg="transparent"
                                  fontSize="14px"
                                  fontWeight="600"
                                  py="16px"
                                  borderRadius="16px"
                                  transition=".25s all"
                                  _hover={{
                                    bg:
                                      colorMode == "light"
                                        ? "gray.50"
                                        : "gray.800",
                                  }}
                                  as={NextLink}
                                  href="https://portal.its.ac.id"
                                >
                                  <Flex
                                    justifyContent="space-between"
                                    alignItems="center"
                                  >
                                    <Text>Nilai Genap 2022/2023</Text>
                                  </Flex>
                                </MenuItem>
                                <MenuItem
                                  icon={<ListOutlineIconMade fontSize="18px" />}
                                  bg="transparent"
                                  fontSize="14px"
                                  fontWeight="600"
                                  py="16px"
                                  borderRadius="16px"
                                  transition=".25s all"
                                  _hover={{
                                    bg:
                                      colorMode == "light"
                                        ? "gray.50"
                                        : "gray.800",
                                  }}
                                  as={NextLink}
                                  href="https://portal.its.ac.id"
                                >
                                  <Flex
                                    justifyContent="space-between"
                                    alignItems="center"
                                  >
                                    <Text>Transkrip</Text>
                                  </Flex>
                                </MenuItem>
                              </MenuList>
                            </>
                          )}
                        </Menu>
                      </Td>
                      <Td p="24px 8px">
                        <Text fontSize="14px" fontWeight={500}>
                          2019
                        </Text>
                      </Td>
                      <Td p="24px 8px">
                        <Text fontSize="14px" fontWeight={500}>
                          5 dari 18
                        </Text>
                      </Td>
                      <Td p="24px 8px">
                        <Text fontSize="14px" fontWeight={500}>
                          164
                        </Text>
                      </Td>
                      <Td p="24px 8px">
                        <Text fontSize="14px" fontWeight={500}>
                          152
                        </Text>
                      </Td>
                      <Td p="24px 8px">
                        <Text fontSize="14px" fontWeight={500}>
                          2.81
                        </Text>
                      </Td>
                      <Td p="24px 8px">
                        <Text fontSize="14px" fontWeight={500}>
                          3.65
                        </Text>
                      </Td>
                      <Td p="24px 8px">
                        <SuccessTextBadge>
                          <CheckmarkCircleSolidIconMade fontSize="16px" />
                          <Text>Aktif</Text>
                        </SuccessTextBadge>
                      </Td>
                      <Td p="24px 8px">
                        <WarningTextBadge>
                          <AlertCircleSolidIconMade fontSize="16px" />
                          <Text>Menunggu persetujuan</Text>
                        </WarningTextBadge>
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

export default Perwalian;

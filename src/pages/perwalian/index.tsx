import PageTransition from "@/components/PageLayout";
import ContainerQuery from "@/components/atoms/ContainerQuery";
import PageRow from "@/components/atoms/PageRow";
import {
  Box,
  Button,
  Divider,
  Flex,
  Link,
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
const Perwalian = () => {
  const { colorMode } = useColorMode();
  const options = [
    { value: "a", label: "Budi Santoso" },
    { value: "b", label: "Agung Setiawan" },
    { value: "c", label: "Wahyu" },
    { value: "d", label: "Joko Nugroho" },
    { value: "e", label: "Arif" },
  ];
  return (
    <>
      <PageTransition pageTitle="Perwalian">
        <PageRow>
          <ContainerQuery>
            <PlainCard>
              <Flex wrap={{ base: "wrap", m: "nowrap" }} gap={4}>
                <Box w="full">
                  <DropdownSelect
                    placeholder="Pilih beberapa"
                    defaultValue={false}
                    options={options}
                    isDisabled={false}
                    isMulti={true}
                    isClearable={true}
                  />
                </Box>
                <Box w="full">
                  <DropdownSelect
                    placeholder="Pilih salah satu"
                    defaultValue={false}
                    options={options}
                    isDisabled={false}
                    isMulti={false}
                    isClearable={true}
                  />
                </Box>
                <Box w="full">
                  <DropdownSelect
                    placeholder="Pilih"
                    defaultValue={false}
                    options={options}
                    isDisabled={true}
                    isMulti={false}
                    isClearable={true}
                  />
                </Box>
              </Flex>
              <TableContainer mt="24px">
                <Table variant="simple">
                  <TableCaption fontSize="13px" color="gray">
                    Jika anak wali tidak tercantum atau keliru, silakan hubungi
                    Tata Usaha untuk mengelola data tersebut.
                  </TableCaption>
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
                      <Th
                        p="16px 8px"
                        fontWeight={600}
                        color="gray"
                        textTransform="capitalize"
                      ></Th>
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
                        <Text
                          fontSize="13px"
                          fontWeight={500}
                          color="gray"
                          mt="2px"
                        >
                          Angkatan 2019
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
                      <Td p="24px 8px">
                        <Menu>
                          {({ isOpen }) => (
                            <>
                              <MenuButton
                                as={Button}
                                w="64px"
                                h="56px"
                                borderRadius="16px"
                                variant="outline"
                                borderColor={
                                  colorMode === "light"
                                    ? "gray.100"
                                    : "gray.800"
                                }
                                pos="relative"
                              >
                                <EllipsisVerticalOutlineIconMade fontSize="20px" />
                                {/* <Box
                                  w="10px"
                                  h="10px"
                                  bg={
                                    colorMode == "light" ? "red.500" : "#B53F3F"
                                  }
                                  borderRadius="full"
                                  pos="absolute"
                                  top="2"
                                  right="4"
                                /> */}
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
                                  as={Link}
                                  href="https://portal.its.ac.id"
                                  target="_blank"
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
                    </Tr>
                    <Tr>
                      <Td p="24px 8px">
                        <Text fontSize="16px" fontWeight={600}>
                          Aimar Wibowo
                        </Text>
                        <Text fontSize="14px" fontWeight={500} mt="4px">
                          05111940000034
                        </Text>
                        <Text
                          fontSize="13px"
                          fontWeight={500}
                          color="gray"
                          mt="2px"
                        >
                          Angkatan 2019
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
                      <Td p="24px 8px">
                        <Menu>
                          {({ isOpen }) => (
                            <>
                              <MenuButton
                                as={Button}
                                w="64px"
                                h="56px"
                                borderRadius="16px"
                                variant="outline"
                                borderColor={
                                  colorMode === "light"
                                    ? "gray.100"
                                    : "gray.800"
                                }
                                pos="relative"
                              >
                                <EllipsisVerticalOutlineIconMade fontSize="20px" />
                                <Box
                                  w="10px"
                                  h="10px"
                                  bg={
                                    colorMode == "light" ? "red.500" : "#B53F3F"
                                  }
                                  borderRadius="full"
                                  pos="absolute"
                                  top="2"
                                  right="4"
                                />
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
                                  as={Link}
                                  href="https://portal.its.ac.id"
                                  target="_blank"
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
                                  as={Link}
                                  href="https://portal.its.ac.id"
                                  target="_blank"
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
                                  as={Link}
                                  href="https://portal.its.ac.id"
                                  target="_blank"
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
                                  as={Link}
                                  href="https://portal.its.ac.id"
                                  target="_blank"
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
                                  as={Link}
                                  href="https://portal.its.ac.id"
                                  target="_blank"
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

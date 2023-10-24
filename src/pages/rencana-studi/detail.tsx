import PageTransition from "@/components/PageLayout";
import ContainerQuery from "@/components/atoms/ContainerQuery";
import PageRow from "@/components/atoms/PageRow";
import { Poppins } from "next/font/google";
import {
  Badge,
  Box,
  Button,
  Select,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { IoCheckmarkCircle, IoCloseCircle, IoTime } from "react-icons/io5";

const poppins = Poppins({ weight: "600", subsets: ["latin"] });

const matkulfix: Array<any> = [
  {
    Kode: "IF111",
    MataKuliah: "Kalkulus",
    Kelas: "A",
    SKS: 3,
    AlihKredit: "Tidak",
    NamaDosen: "Budi S",
  },
  {
    Kode: "IF112",
    MataKuliah: "Algoritma dan Pemrograman",
    Kelas: "B",
    SKS: 2,
    AlihKredit: "Ya",
    NamaDosen: "Linda T",
  },
  {
    Kode: "IF113",
    MataKuliah: "Pemrograman Web",
    Kelas: "C",
    SKS: 3,
    AlihKredit: "Tidak",
    NamaDosen: "Iqbal L",
  },
];

const KelolaFRS = () => {
  const bgcard = useColorModeValue("white", "gray.900");
  const bgbutton = useColorModeValue("black", "white");
  const textbtn = useColorModeValue("white", "gray.900");
  const colorborder = useColorModeValue("gray.100", "gray.800");
  const colorred = useColorModeValue("red", "red.200");

  return (
    <>
      <PageTransition pageTitle="Detail Rencana Studi">
        <PageRow>
          <ContainerQuery>
            <Box
              display={{ base: "block", x: "flex" }}
              justifyContent="space-between"
              alignItems="center"
              gap={5}
              mb="24px"
              py="16px"
              px={{ base: "16px", x: "0px" }}
            >
              <Box>
                <Text className={poppins.className} fontSize="22px" mb="4px">
                  Sarah Nasywa Azizah (5013231063)
                </Text>
                <Text display="inline-flex" alignItems="center" flexWrap="wrap">
                  IPS 0,00
                  <Text color="gray" fontSize="12px" mx="8px">
                    •
                  </Text>
                  Dosen Wali Rabbani Kharismawan, ST, MT
                </Text>
              </Box>
              <Box
                mt={{ base: "16px", x: "0px" }}
                display="flex"
                flexWrap="wrap"
                gap="8px"
              >
                <Button
                  colorScheme="gray"
                  w={{ base: "full", a: "auto" }}
                  h="64px"
                  px="36px"
                  borderRadius="12px"
                  mt={{ base: "8px", a: "0px" }}
                >
                  Mengulang
                </Button>
                <Button
                  colorScheme="gray"
                  w={{ base: "full", a: "auto" }}
                  h="64px"
                  px="36px"
                  borderRadius="12px"
                  mt={{ base: "8px", a: "0px" }}
                >
                  Wajib Diambil
                  <Badge
                    colorScheme="red"
                    variant="solid"
                    borderRadius="full"
                    p="4px 8px"
                    ml="8px"
                  >
                    1
                  </Badge>
                </Button>
                <Button
                  colorScheme="gray"
                  w={{ base: "full", a: "auto" }}
                  h="64px"
                  px="36px"
                  borderRadius="12px"
                  mt={{ base: "8px", a: "0px" }}
                >
                  Ekivalensi
                </Button>
              </Box>
            </Box>
            <Box
              mb="24px"
              data-group="card--shadow"
              className="card__menu_shadow"
              pos="relative"
              p="24px"
              borderRadius="24px"
              opacity="1"
              _before={{
                content: '""',
                pos: "absolute",
                top: "0px",
                left: "0px",
                right: "0px",
                bottom: "0px",
                width: "100%",
                height: "100%",
                zIndex: "-2",
                boxShadow: "rgba(17, 12, 46, 0.05) 0px 10px 160px 10px",
                borderRadius: "24px",
                transition: "all 0.25s",
              }}
              bg={bgcard}
              transition="all 0.25s"
            >
              <Select
                cursor="pointer"
                size="lg"
                border="2px"
                borderColor={colorborder}
                borderRadius="xl"
                background={colorborder}
              >
                <option value="option1" selected>
                  Semester Gasal 2023/2024
                </option>
              </Select>
            </Box>
            <Box
              mb="24px"
              data-group="card--shadow"
              className="card__menu_shadow"
              pos="relative"
              p="24px"
              borderRadius="24px"
              opacity="1"
              _before={{
                content: '""',
                pos: "absolute",
                top: "0px",
                left: "0px",
                right: "0px",
                bottom: "0px",
                width: "100%",
                height: "100%",
                zIndex: "-2",
                boxShadow: "rgba(17, 12, 46, 0.05) 0px 10px 160px 10px",
                borderRadius: "24px",
                transition: "all 0.25s",
              }}
              bg={bgcard}
              transition="all 0.25s"
            >
              <Text className={poppins.className} fontSize="20px" mb="2px">
                Rencana Studi
              </Text>
              <Text color="gray" mb="24px">
                Mata kuliah paket atau yang berhasil Anda ambil
              </Text>
              <TableContainer
                border="1px"
                borderColor={colorborder}
                borderRadius="xl"
                // display={{ base: "none", a: "block" }}
              >
                <Table variant="simple">
                  <Thead>
                    <Tr>
                      <Th textAlign="center">No</Th>
                      <Th>Mata Kuliah</Th>
                      <Th>Kelas</Th>
                      <Th>SKS</Th>
                      <Th>Alih Kredit</Th>
                      <Th>Nama Dosen</Th>
                      <Th></Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {matkulfix.map((item, index) => (
                      <Tr key={index}>
                        <Td textAlign="center" _last={{ border: "0px" }}>
                          1
                        </Td>
                        <Td>
                          <Text fontWeight="600" mb="6px">
                            {item.MataKuliah}
                          </Text>
                          <Text mb="4px">{item.Kode}</Text>
                          <Text color="gray">Semester 3 (saat ini)</Text>
                        </Td>
                        <Td>{item.Kelas}</Td>
                        <Td>{item.SKS}</Td>
                        <Td>{item.AlihKredit}</Td>
                        <Td>{item.NamaDosen}</Td>
                        <Td textAlign="center">
                          {item.SKS === 3 ? (
                            <Button
                              colorScheme="red"
                              variant="outline"
                              w={{ base: "full", a: "auto" }}
                              h="54px"
                              px="24px"
                              borderRadius="12px"
                              borderWidth="2px"
                            >
                              Hapus
                            </Button>
                          ) : item.SKS === 2 ? (
                            <Box>
                              <Text align="center" color="gray">
                                Tidak dapat dihapus
                              </Text>
                            </Box>
                          ) : null}
                        </Td>
                      </Tr>
                    ))}
                  </Tbody>
                </Table>
              </TableContainer>
            </Box>
            <Box
              mb="24px"
              data-group="card--shadow"
              className="card__menu_shadow"
              pos="relative"
              p="24px"
              borderRadius="24px"
              opacity="1"
              _before={{
                content: '""',
                pos: "absolute",
                top: "0px",
                left: "0px",
                right: "0px",
                bottom: "0px",
                width: "100%",
                height: "100%",
                zIndex: "-2",
                boxShadow: "rgba(17, 12, 46, 0.05) 0px 10px 160px 10px",
                borderRadius: "24px",
                transition: "all 0.25s",
              }}
              bg={bgcard}
              transition="all 0.25s"
            >
              <Text className={poppins.className} fontSize="20px" mb="2px">
                Pengambilan Kelas
              </Text>
              <Text color="gray" mb="24px">
                Mata kuliah paket atau yang berhasil Anda ambil
              </Text>
              <TableContainer
                border="1px"
                borderColor={colorborder}
                borderRadius="xl"
                // display={{ base: "none", a: "block" }}
              >
                <Table variant="simple">
                  <Thead>
                    <Tr>
                      <Th textAlign="center">No</Th>
                      <Th>Mata Kuliah</Th>
                      <Th>Kelas</Th>
                      <Th>SKS</Th>
                      <Th>Alih Kredit</Th>
                      <Th>Nama Dosen</Th>
                      <Th></Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {matkulfix.map((item, index) => (
                      <Tr key={index}>
                        <Td textAlign="center" _last={{ border: "0px" }}>
                          1
                        </Td>
                        <Td>
                          <Text fontWeight="600" mb="6px">
                            {item.MataKuliah}
                          </Text>
                          <Text mb="4px">{item.Kode}</Text>
                          <Text color="gray">Semester 3 (saat ini)</Text>
                        </Td>
                        <Td>{item.Kelas}</Td>
                        <Td>{item.SKS}</Td>
                        <Td>{item.AlihKredit}</Td>
                        <Td>{item.NamaDosen}</Td>
                        <Td textAlign="center">
                          {item.SKS === 3 ? (
                            <Button
                              colorScheme="red"
                              variant="outline"
                              w={{ base: "full", a: "auto" }}
                              h="54px"
                              px="24px"
                              borderRadius="12px"
                              borderWidth="2px"
                            >
                              Hapus
                            </Button>
                          ) : item.SKS === 2 ? (
                            <Box>
                              <Text align="center" color="gray">
                                Tidak dapat dihapus
                              </Text>
                            </Box>
                          ) : null}
                        </Td>
                      </Tr>
                    ))}
                  </Tbody>
                </Table>
              </TableContainer>
            </Box>
            <Box
              mt="24px"
              data-group="card--shadow"
              className="card__menu_shadow"
              pos="relative"
              p="24px"
              borderRadius="24px"
              opacity="1"
              _before={{
                content: '""',
                pos: "absolute",
                top: "0px",
                left: "0px",
                right: "0px",
                bottom: "0px",
                width: "100%",
                height: "100%",
                zIndex: "-2",
                boxShadow: "rgba(17, 12, 46, 0.05) 0px 10px 160px 10px",
                borderRadius: "24px",
                transition: "all 0.25s",
              }}
              bg={bgcard}
              transition="all 0.25s"
            >
              <Badge
                colorScheme="green"
                mb="24px"
                display="inline-flex"
                alignItems="center"
                borderRadius="full"
                p="4px 8px"
                gap="4px"
              >
                <IoCheckmarkCircle fontSize="20px" />
                Berhasil diambil
              </Badge>
              <Box
                display={{ base: "block", a: "flex" }}
                justifyContent="space-between"
                alignItems="center"
                gap={5}
              >
                <Box>
                  <Text fontSize="16px" fontWeight={600} mb="2px">
                    Pemrograman Berbasis Kerangka Kerja - Kelas A
                  </Text>
                  <Text>IF92832 • 3 SKS • Semester berlangsung</Text>
                  <Text color="gray" mt="2px">
                    Kelas Departemen
                  </Text>
                </Box>
                <Box>
                  <Button
                    colorScheme="red"
                    variant="outline"
                    w={{ base: "full", a: "auto" }}
                    h="64px"
                    px="36px"
                    borderRadius="12px"
                    mt={{ base: "24px", a: "0px" }}
                    borderWidth="2px"
                  >
                    Hapus
                  </Button>
                </Box>
              </Box>
              <Box
                display={{ base: "block", a: "flex" }}
                justifyContent="space-between"
                alignItems="center"
                gap={5}
                mt="24px"
                pt="24px"
                borderTop="2px"
                borderColor={colorborder}
              >
                <Box>
                  <Text fontSize="16px" fontWeight={600} mb="2px">
                    Pemrograman Berbasis Kerangka Kerja - Kelas A
                  </Text>
                  <Text>IF92832 • 3 SKS • Semester berlangsung</Text>
                  <Text color="gray" mt="2px">
                    Kelas Departemen
                  </Text>
                </Box>
                <Box>
                  <Button
                    colorScheme="red"
                    variant="outline"
                    w={{ base: "full", a: "auto" }}
                    h="64px"
                    px="36px"
                    borderRadius="12px"
                    mt={{ base: "24px", a: "0px" }}
                    borderWidth="2px"
                  >
                    Hapus
                  </Button>
                </Box>
              </Box>
            </Box>
            <Box
              mt="24px"
              data-group="card--shadow"
              className="card__menu_shadow"
              pos="relative"
              p="24px"
              borderRadius="24px"
              opacity="1"
              _before={{
                content: '""',
                pos: "absolute",
                top: "0px",
                left: "0px",
                right: "0px",
                bottom: "0px",
                width: "100%",
                height: "100%",
                zIndex: "-2",
                boxShadow: "rgba(17, 12, 46, 0.05) 0px 10px 160px 10px",
                borderRadius: "24px",
                transition: "all 0.25s",
              }}
              bg={bgcard}
              transition="all 0.25s"
            >
              <Badge
                colorScheme="red"
                mb="24px"
                display="inline-flex"
                alignItems="center"
                borderRadius="full"
                p="4px 8px"
                gap="4px"
              >
                <IoCloseCircle fontSize="20px" />
                Kelas penuh / dibatalkan / dihapus
              </Badge>
              <Box>
                <Text fontSize="16px" fontWeight={600} mb="2px">
                  Pemrograman Berbasis Kerangka Kerja - Kelas A
                </Text>
                <Text>IF92832 • 3 SKS • Semester berlangsung</Text>
                <Text color="gray" mt="2px">
                  Kelas Departemen
                </Text>
                <Text color={colorred} mt="16px">
                  Kelas penuh
                </Text>
              </Box>
              <Box
                mt="24px"
                pt="24px"
                borderTop="2px"
                borderColor={colorborder}
              >
                <Text fontSize="16px" fontWeight={600} mb="2px">
                  Pemrograman Berbasis Kerangka Kerja - Kelas A
                </Text>
                <Text>IF92832 • 3 SKS • Semester berlangsung</Text>
                <Text color="gray" mt="2px">
                  Kelas Departemen
                </Text>
                <Text color={colorred} mt="16px">
                  Dihapus
                </Text>
              </Box>
            </Box>
          </ContainerQuery>
        </PageRow>
      </PageTransition>
    </>
  );
};

export default KelolaFRS;

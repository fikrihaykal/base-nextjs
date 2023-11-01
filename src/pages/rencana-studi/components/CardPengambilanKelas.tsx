import { PrimaryButton } from "@/components/atoms/Buttons/PrimaryButton";
import PlainCard from "@/components/organisms/Cards/Card";
import { Box, Button, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { matkulfrs } from "./DataFRS";

const CardPengambilanKelas = () => {
    const bgcard = useColorModeValue("white", "gray.900");
    const bgbutton = useColorModeValue("black", "white");
    const textbtn = useColorModeValue("white", "gray.900");
    const colorborder = useColorModeValue("gray.100", "gray.800");
    const colorred = useColorModeValue("red", "red.200");
    const { colorMode } = useColorMode();
  return (
    <>
      <PlainCard>
        <Box
          display={{ base: "block", a: "flex" }}
          justifyContent="space-between"
          alignItems="center"
          mb="24px"
        >
          <Box>
            <Text fontSize="18px" fontWeight="600" mb="4px">
              Pengambilan Kelas
            </Text>
            <Text fontSize="16px" fontWeight="500" color="gray">
              Riwayat pengambilan kelas Anda
            </Text>
          </Box>
          <Box mt={{ base: "16px", a: "0px" }}>
            <PrimaryButton>Tambah Mata Kuliah</PrimaryButton>
          </Box>
        </Box>
        <TableContainer
          border="1px"
          borderColor={colorborder}
          borderRadius="xl"
        >
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th
                  fontSize="14px"
                  fontWeight="500"
                  color="gray.400"
                  textTransform="capitalize"
                  letterSpacing="0px"
                  textAlign="center"
                >
                  No
                </Th>
                <Th
                  fontSize="14px"
                  fontWeight="500"
                  color="gray.400"
                  textTransform="capitalize"
                  letterSpacing="0px"
                >
                  Mata Kuliah
                </Th>
                <Th
                  fontSize="14px"
                  fontWeight="500"
                  color="gray.400"
                  textTransform="capitalize"
                  letterSpacing="0px"
                >
                  Kelas
                </Th>
                <Th
                  fontSize="14px"
                  fontWeight="500"
                  color="gray.400"
                  textTransform="capitalize"
                  letterSpacing="0px"
                >
                  Tanggal Ambil
                </Th>
                <Th
                  fontSize="14px"
                  fontWeight="500"
                  color="gray.400"
                  textTransform="capitalize"
                  letterSpacing="0px"
                >
                  Tanggal Proses
                </Th>
                <Th
                  fontSize="14px"
                  fontWeight="500"
                  color="gray.400"
                  textTransform="capitalize"
                  letterSpacing="0px"
                >
                  Pengambil
                </Th>
                <Th
                  fontSize="14px"
                  fontWeight="500"
                  color="gray.400"
                  textTransform="capitalize"
                  letterSpacing="0px"
                >
                  Status
                </Th>
                <Th
                  fontSize="14px"
                  fontWeight="500"
                  color="gray.400"
                  textTransform="capitalize"
                  letterSpacing="0px"
                ></Th>
              </Tr>
            </Thead>
            <Tbody>
              {matkulfrs.map((item, index) => (
                <Tr key={index}>
                  <Td textAlign="center" _last={{ border: "0px" }}>
                    {index + 1}
                  </Td>
                  <Td>
                    <Text fontWeight="600" mb="6px">
                      {item.MataKuliah}
                    </Text>
                    <Text mb="4px">{item.Kode}</Text>
                    <Text color="gray">Semester 3 (saat ini)</Text>
                  </Td>
                  <Td>{item.Kelas}</Td>
                  {/* <Td>{(new Date(item.TanggalAmbil)).toLocaleString(['id-ID'], {
                          day: '2-digit',
                          weekday: 'short',
                          year: 'numeric',
                          month: 'long',
                          hour: 'numeric',
                          minute: 'numeric',
                          hour12: false,
                          timeZoneName: 'short'
                          
                        })}</Td> */}
                  <Td>
                    <Text fontWeight="500">
                      {new Date(item.TanggalAmbil).toLocaleString(["id-ID"], {
                        hour: "2-digit",
                        minute: "numeric",
                        second: "numeric",
                        hour12: false,
                        timeZoneName: "short",
                      })}
                    </Text>
                    <Text
                      fontSize="14px"
                      fontWeight="500"
                      color="gray"
                      mt="4px"
                    >
                      {new Date(item.TanggalAmbil).toLocaleString(["id-ID"], {
                        day: "2-digit",
                        weekday: "short",
                        year: "numeric",
                        month: "long",
                      })}
                    </Text>
                  </Td>
                  <Td>{item.TanggalProses}</Td>
                  <Td>{item.Pengambil}</Td>
                  <Td>{item.Status}</Td>
                  <Td textAlign="center">
                    {item.BerhasilDiambil === "Ya" ? (
                      <Button
                        colorScheme="red"
                        w={{ base: "full", a: "auto" }}
                        h="54px"
                        px="24px"
                        borderRadius="12px"
                      >
                        Hapus
                      </Button>
                    ) : item.BerhasilDiambil === "Tidak" ? (
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
      </PlainCard>
    </>
  );
};

export default CardPengambilanKelas;

import { PrimaryButton } from "@/components/atoms/Buttons/PrimaryButton";
import PlainCard from "@/components/organisms/Cards/Card";
import {
  Badge,
  Box,
  Center,
  Flex,
  Grid,
  GridItem,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tooltip,
  Tr,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import dataRiwayatKelas from "./DataRiwayatKelas";
import { DangerSubtleButton } from "@/components/atoms/Buttons/DangerButton";
import {
  CloseOutlineIconMade,
  RefreshOutlineIconMade,
  TrashOutlineIconMade,
} from "@/components/atoms/IconsMade";
import { SecondaryButton } from "@/components/atoms/Buttons/SecondaryButton";

const CardRiwayatKelas = () => {
  const colorborder = useColorModeValue("gray.100", "gray.800");
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
            <Text fontSize="18px" fontWeight="600">
              Pengambilan Kelas
            </Text>
            <Text fontSize="16px" fontWeight="500" color="gray" mt="4px">
              Riwayat pengambilan kelas Anda
            </Text>
          </Box>
          <Box mt={{ base: "24px", a: "0px" }}>
            <PrimaryButton>Tambah Mata Kuliah</PrimaryButton>
          </Box>
        </Box>

        {/* Tampilan tabel desktop */}
        <TableContainer display={{ base: "none", a: "block" }} mt="16px">
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th
                  fontSize="13px"
                  fontWeight="600"
                  color="gray"
                  textTransform="capitalize"
                  letterSpacing="0.4px"
                  pl="0px"
                  py="24px"
                >
                  Mata Kuliah
                </Th>
                <Th
                  fontSize="13px"
                  fontWeight="600"
                  color="gray"
                  textTransform="capitalize"
                  letterSpacing="0.4px"
                  py="24px"
                >
                  Diambil
                </Th>
                <Th
                  fontSize="13px"
                  fontWeight="600"
                  color="gray"
                  textTransform="capitalize"
                  letterSpacing="0.4px"
                  py="24px"
                >
                  Diproses
                </Th>
                {/* <Th
                  fontSize="13px"
                  fontWeight="600"
                  color="gray"
                  textTransform="capitalize"
                  letterSpacing="0.4px"
                  py="24px"
                >
                  Dosen
                </Th> */}
                <Th
                  fontSize="13px"
                  fontWeight="600"
                  color="gray"
                  textTransform="capitalize"
                  letterSpacing="0.4px"
                  py="24px"
                ></Th>
              </Tr>
            </Thead>
            <Tbody>
              {dataRiwayatKelas.map((item, index) => (
                <Tr key={index}>
                  <Td pl="0px" py="24px">
                    <Text fontSize="15px" fontWeight="600">
                      {item.mk} ({item.kelas})
                    </Text>
                    <Text
                      fontSize="13px"
                      fontWeight="500"
                      color="gray"
                      mt="6px"
                    >
                      IF9382983 • Semester 3 (saat ini)
                    </Text>
                  </Td>
                  <Td py="24px">
                    <Text fontSize="14px" fontWeight="500">
                      {item.jam_ambil} {item.tgl_ambil}
                    </Text>
                    <Text
                      fontSize="13px"
                      fontWeight="500"
                      color="gray"
                      mt="4px"
                    >
                      {item.pengambil}
                    </Text>
                  </Td>
                  <Td py="24px">
                    <Text fontSize="14px" fontWeight="500">
                      {item.status === 1 ? (
                        <Text fontSize="14px" fontWeight="500">
                          -
                        </Text>
                      ) : (
                        <Text fontSize="14px" fontWeight="500">
                          {item.jam_proses} {item.tgl_proses}
                        </Text>
                      )}
                    </Text>
                  </Td>
                  {/* <Td py="24px">
                    <Text fontSize="14px" fontWeight="500">
                      {item.dosen}
                    </Text>
                  </Td> */}
                  <Td py="24px">
                    {item.status === 2 ? (
                      <Badge
                        colorScheme="green"
                        variant="subtle"
                        borderRadius="full"
                        p="6px 12px"
                        fontSize="13px"
                        fontWeight="600"
                        textTransform="capitalize"
                      >
                        Berhasil diambil
                      </Badge>
                    ) : item.status === 3 ? (
                      <Badge
                        colorScheme="red"
                        variant="subtle"
                        borderRadius="full"
                        p="6px 12px"
                        fontSize="13px"
                        fontWeight="600"
                        textTransform="capitalize"
                      >
                        Kelas penuh
                      </Badge>
                    ) : item.status === 4 ? (
                      <Badge
                        colorScheme="red"
                        variant="subtle"
                        borderRadius="full"
                        p="6px 12px"
                        fontSize="13px"
                        fontWeight="600"
                        textTransform="capitalize"
                      >
                        Dibatalkan
                      </Badge>
                    ) : (
                      <Box gap={3} display="inline-flex" w="auto">
                        <Tooltip label="Ulangi">
                          <Center>
                            <SecondaryButton minW="10px">
                              <RefreshOutlineIconMade fontSize="20px" />
                            </SecondaryButton>
                          </Center>
                        </Tooltip>
                        <Tooltip label="Batalkan">
                          <Center>
                            <DangerSubtleButton minW="10px">
                              <CloseOutlineIconMade fontSize="20px" />
                            </DangerSubtleButton>
                          </Center>
                        </Tooltip>
                      </Box>
                    )}
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>

        {/* Tampilan daftar mobile */}
        <Box display={{ base: "block", a: "none" }} mt="36px">
          {dataRiwayatKelas.map((item, index) => (
            <Box
              key={index}
              mt="36px"
              pt="36px"
              borderTop="2px"
              borderColor={colorborder}
            >
              <Box>
                <Text fontSize="16px" fontWeight={600}>
                  {item.mk} ({item.kelas})
                </Text>
                <Text fontSize="14px" fontWeight="500" mt="4px">
                  IF23212 • 3 SKS • Semester 3 (saat ini)
                </Text>
              </Box>
              {item.kelas === "D" ? (
                <Text
                  fontSize="14px"
                  fontWeight="500"
                  color={colorMode == "light" ? "orange" : "orange.200"}
                  mt="6px"
                >
                  Pengambilan kelas melanggar prasyarat
                </Text>
              ) : null}
              <Grid templateColumns="repeat(12, 1fr)" gap={3} mt="24px">
                <GridItem w="100%" colSpan={3}>
                  <Text fontSize="14px" fontWeight="500" color="gray">
                    Diambil
                  </Text>
                </GridItem>
                <GridItem w="100%" colSpan={9}>
                  <Text fontSize="14px" fontWeight="500">
                    {item.jam_ambil} {item.tgl_ambil}
                  </Text>
                  <Text fontSize="14px" fontWeight="600" mt="2px">
                    {item.pengambil}
                  </Text>
                </GridItem>
                <GridItem w="100%" colSpan={3}>
                  <Text fontSize="14px" fontWeight="500" color="gray">
                    Diproses
                  </Text>
                </GridItem>
                <GridItem w="100%" colSpan={9}>
                  {item.status === 1 ? (
                    <Text fontSize="14px" fontWeight="500">
                      -
                    </Text>
                  ) : (
                    <Text fontSize="14px" fontWeight="500">
                      {item.jam_proses} {item.tgl_proses}
                    </Text>
                  )}
                </GridItem>
                {item.status === 1 ? null : (
                  <GridItem
                    w="100%"
                    colSpan={3}
                    display="flex"
                    alignItems="center"
                  >
                    <Text fontSize="14px" fontWeight="500" color="gray">
                      Status
                    </Text>
                  </GridItem>
                )}
                {item.status === 1 ? null : (
                  <GridItem w="100%" colSpan={9}>
                    {item.status === 2 ? (
                      <Badge
                        colorScheme="green"
                        variant="subtle"
                        borderRadius="full"
                        p="6px 12px"
                        fontSize="13px"
                        fontWeight="600"
                        textTransform="capitalize"
                      >
                        Berhasil diambil
                      </Badge>
                    ) : item.status === 3 ? (
                      <Badge
                        colorScheme="red"
                        variant="subtle"
                        borderRadius="full"
                        p="6px 12px"
                        fontSize="13px"
                        fontWeight="600"
                        textTransform="capitalize"
                      >
                        Kelas penuh
                      </Badge>
                    ) : item.status === 4 ? (
                      <Badge
                        colorScheme="red"
                        variant="subtle"
                        borderRadius="full"
                        p="6px 12px"
                        fontSize="13px"
                        fontWeight="600"
                        textTransform="capitalize"
                      >
                        Dibatalkan
                      </Badge>
                    ) : null}
                  </GridItem>
                )}
              </Grid>
              {item.status === 1 ? (
                <Box>
                  <Center mt="36px" w="full">
                    <SecondaryButton>
                      <RefreshOutlineIconMade fontSize="20px" mr="6px" />
                      Ulangi
                    </SecondaryButton>
                  </Center>
                  <Center mt="16px" w="full">
                    <DangerSubtleButton>
                      <CloseOutlineIconMade fontSize="20px" mr="6px" />
                      Batalkan
                    </DangerSubtleButton>
                  </Center>
                </Box>
              ) : null}
            </Box>
          ))}
        </Box>
      </PlainCard>
    </>
  );
};

export default CardRiwayatKelas;

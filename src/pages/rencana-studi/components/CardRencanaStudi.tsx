import PlainCard from "@/components/organisms/Cards/Card";
import {
  Badge,
  Box,
  Center,
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
import { DangerSubtleButton } from "@/components/atoms/Buttons/DangerButton";
import { TrashOutlineIconMade } from "@/components/atoms/IconsMade";
import dataRencanaStudi from "./DataRencanaStudi";
import { IoWarning } from "react-icons/io5";
import {
  SuccessButton,
  SuccessSubtleButton,
} from "@/components/atoms/Buttons/SuccessButton";
import { LightButton } from "@/components/atoms/Buttons/LightButton";
import CardPersetujuan from "./CardPersetujuan";
const CardRencanaStudi = () => {
  const colorborder = useColorModeValue("gray.100", "gray.800");
  const { colorMode } = useColorMode();

  return (
    <>
      <PlainCard>
        <Box
          display={{ base: "block", a: "flex" }}
          justifyContent="space-between"
          alignItems="center"
        >
          <Box>
            <Text fontSize="18px" fontWeight="600">
              Rencana Studi
            </Text>
            <Text fontSize="16px" fontWeight="500" color="gray" mt="4px">
              Mata kuliah yang berhasil Anda ambil
            </Text>
          </Box>
        </Box>
        
        <CardPersetujuan />

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
                  textAlign="center"
                >
                  SKS
                </Th>
                <Th
                  fontSize="13px"
                  fontWeight="600"
                  color="gray"
                  textTransform="capitalize"
                  letterSpacing="0.4px"
                  py="24px"
                  textAlign="center"
                >
                  Alih Kredit
                </Th>
                <Th
                  fontSize="13px"
                  fontWeight="600"
                  color="gray"
                  textTransform="capitalize"
                  letterSpacing="0.4px"
                  py="24px"
                >
                  Dosen
                </Th>
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
              {dataRencanaStudi.map((item, index) => (
                <Tr key={index}>
                  <Td pl="0px" py="24px">
                    {item.kelas === "A" ? (
                      <>
                        <Box display="inline-flex" alignItems="center">
                          <Box>
                            <Text fontSize="15px" fontWeight="600">
                              {item.mk} ({item.kelas})
                            </Text>
                          </Box>
                          <Tooltip
                            hasArrow
                            label="Pengambilan mata kuliah melanggar prasyarat"
                          >
                            <Box color="orange" ml="8px">
                              <IoWarning fontSize="20px" />
                            </Box>
                          </Tooltip>
                        </Box>
                      </>
                    ) : (
                      <Text fontSize="15px" fontWeight="600">
                        {item.mk} ({item.kelas})
                      </Text>
                    )}
                    <Text
                      fontSize="13px"
                      fontWeight="500"
                      color="gray"
                      mt="6px"
                    >
                      IF9382983 • Semester 3 (saat ini)
                    </Text>
                  </Td>
                  <Td py="24px" textAlign="center">
                    <Text fontSize="14px" fontWeight="500">
                      {item.sks}
                    </Text>
                  </Td>
                  <Td py="24px" textAlign="center">
                    <Text fontSize="14px" fontWeight="500">
                      {item.alih_kredit === 1 ? "Ya" : "Tidak"}
                    </Text>
                  </Td>
                  <Td py="24px">
                    <Text fontSize="14px" fontWeight="500">
                      {item.dosen}
                    </Text>
                  </Td>
                  <Td py="24px">
                    <Tooltip label="Hapus">
                      <Center>
                        <DangerSubtleButton minW="10px">
                          <TrashOutlineIconMade fontSize="20px" />
                        </DangerSubtleButton>
                      </Center>
                    </Tooltip>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>

        {/* Tampilan daftar mobile */}
        <Box display={{ base: "block", a: "none" }} mt="36px">
          {dataRencanaStudi.map((item, index) => (
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
                  IF23212 • {item.sks} SKS • Semester 3 (saat ini){" "}
                  {item.alih_kredit === 1 ? " • Alih kredit" : null}
                </Text>
              </Box>
              {item.kelas === "C" ? (
                <Text
                  fontSize="14px"
                  fontWeight="500"
                  color={colorMode == "light" ? "orange" : "orange.200"}
                  mt="6px"
                >
                  Pengambilan kelas melanggar prasyarat
                </Text>
              ) : null}
              <Box mt="32px">
                {/* <Grid templateColumns="repeat(12, 1fr)" gap={3} mt="24px">
                  <GridItem w="100%" colSpan={3}>
                    <Text fontSize="14px" fontWeight="500" color="gray">
                      Dosen
                    </Text>
                  </GridItem>
                  <GridItem w="100%" colSpan={9}>
                    <Text fontSize="14px" fontWeight="500">
                      {item.dosen}
                    </Text>
                  </GridItem>
                </Grid> */}
                <Center w="full">
                  <DangerSubtleButton>
                    <TrashOutlineIconMade fontSize="20px" mr="6px" />
                    Hapus
                  </DangerSubtleButton>
                </Center>
              </Box>
            </Box>
          ))}
        </Box>
      </PlainCard>
    </>
  );
};

export default CardRencanaStudi;

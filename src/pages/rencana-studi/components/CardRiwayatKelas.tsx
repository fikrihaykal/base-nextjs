import {
  PrimaryButton,
  PrimarySubtleButton,
} from "@/components/atoms/Buttons/PrimaryButton";
import PlainCard from "@/components/organisms/Cards/Card";
import {
  Badge,
  Box,
  Button,
  Center,
  Flex,
  Grid,
  GridItem,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Skeleton,
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
  useDisclosure,
} from "@chakra-ui/react";
import dataRiwayatKelas from "./DataRiwayatKelas";
import { DangerSubtleButton } from "@/components/atoms/Buttons/DangerButton";
import {
  CalendarOutlineIconMade,
  ClockOutlineIconMade,
  CloseOutlineIconMade,
  RefreshOutlineIconMade,
  TrashOutlineIconMade,
} from "@/components/atoms/IconsMade";
import { SecondaryButton } from "@/components/atoms/Buttons/SecondaryButton";
import { LightButton } from "@/components/atoms/Buttons/LightButton";
import { TextButton } from "@/components/atoms/Buttons/TextButton";
import {
  RadioCard,
  RadioCardGroup,
  RadioCardReverse,
} from "../../../components/customs/RadioCard";
import { DarkButton } from "@/components/atoms/Buttons/DarkButton";
import {
  CheckboxCard,
  CheckboxCardGroup,
} from "@/components/customs/CheckboxCard";
import { ButtonAmbilKelas, ModalAmbilKelas } from "./Modal/ModalAmbilKelas";
// import { ModalButton } from "../detail";

const CardRiwayatKelas = () => {
  const {
    isOpen: isOpenAmbilKelas,
    onOpen: onOpenAmbilKelas,
    onClose: onCloseAmbilKelas,
  } = useDisclosure();
  const inputgray = useColorModeValue("gray.50", "gray.800");
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
            <ButtonAmbilKelas onClick={onOpenAmbilKelas} />
          </Box>
        </Box>

        {/* Tampilan tabel desktop */}
        <TableContainer
          display={{ base: "none", a: "block" }}
          mt="16px"
          sx={{
            "::-webkit-scrollbar-thumb": {
              backgroundColor: colorMode == "light" ? "gray.200" : "gray.800",
            },
            scrollbarWidth: "thin",
            scrollbarColor: "silver transparent;",
          }}
        >
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
                  Kelas
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
                    <Text fontSize="14px" fontWeight="500" textAlign="center">
                      3
                    </Text>
                  </Td>
                  <Td py="24px">
                    <Text fontSize="14px" fontWeight="500">
                      {item.tgl_ambil} • {item.jam_ambil}
                    </Text>
                    <Text
                      fontSize="13px"
                      fontWeight="500"
                      color="gray"
                      mt="4px"
                    >
                      oleh {item.pengambil}
                    </Text>
                  </Td>
                  <Td py="24px">
                    {item.status === 1 ? (
                      <Text fontSize="14px" fontWeight="500" color="gray">
                        Sedang diproses
                      </Text>
                    ) : (
                      <Text fontSize="14px" fontWeight="500">
                        {item.tgl_proses} • {item.jam_proses}
                      </Text>
                    )}
                  </Td>
                  <Td py="24px">
                    {item.status === 1 ? (
                      <Box gap={3} display="inline-flex" w="auto">
                        <Tooltip label="Ulangi">
                          <Center>
                            <PrimarySubtleButton isLoading={false} minW="10px">
                              <RefreshOutlineIconMade fontSize="20px" />
                            </PrimarySubtleButton>
                          </Center>
                        </Tooltip>
                        <Tooltip label="Batalkan">
                          <Center>
                            <DangerSubtleButton isLoading={false} minW="10px">
                              <CloseOutlineIconMade fontSize="20px" />
                            </DangerSubtleButton>
                          </Center>
                        </Tooltip>
                      </Box>
                    ) : item.status === 2 ? (
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
                      <Badge
                        colorScheme="yellow"
                        variant="subtle"
                        borderRadius="full"
                        p="6px 12px"
                        fontSize="13px"
                        fontWeight="600"
                        textTransform="capitalize"
                      >
                        Terjadi kesalahan
                      </Badge>
                    )}
                  </Td>
                </Tr>
              ))}
              <Tr>
                <Td borderBottom="unset" colSpan={5}>
                  <Center mt="24px">
                    <DarkButton>Lihat Lainnya</DarkButton>
                  </Center>
                </Td>
              </Tr>
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
              borderColor={inputgray}
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
                    {item.tgl_ambil} • {item.jam_ambil}
                  </Text>
                  <Text fontSize="14px" fontWeight="500" mt="2px">
                    oleh {item.pengambil}
                  </Text>
                </GridItem>
                <GridItem w="100%" colSpan={3}>
                  <Text fontSize="14px" fontWeight="500" color="gray">
                    Diproses
                  </Text>
                </GridItem>
                <GridItem w="100%" colSpan={9}>
                  {item.status === 1 ? (
                    <Text fontSize="14px" fontWeight="500" color="gray">
                      Sedang diproses
                    </Text>
                  ) : (
                    <Text fontSize="14px" fontWeight="500">
                      {item.jam_proses} • {item.tgl_proses}
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
                    ) : (
                      <Badge
                        colorScheme="yellow"
                        variant="subtle"
                        borderRadius="full"
                        p="6px 12px"
                        fontSize="13px"
                        fontWeight="600"
                        textTransform="capitalize"
                      >
                        Terjadi kesalahan
                      </Badge>
                    )}
                  </GridItem>
                )}
              </Grid>
              {item.status === 1 ? (
                <Box>
                  <Center mt="36px" w="full">
                    <PrimarySubtleButton isLoading={false}>
                      <RefreshOutlineIconMade fontSize="20px" mr="6px" />
                      Ulangi
                    </PrimarySubtleButton>
                  </Center>
                  <Center mt="16px" w="full">
                    <DangerSubtleButton isLoading={false}>
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

      {/* Modal */}
      <ModalAmbilKelas isOpen={isOpenAmbilKelas} onClose={onCloseAmbilKelas} />
    </>
  );
};

export default CardRiwayatKelas;

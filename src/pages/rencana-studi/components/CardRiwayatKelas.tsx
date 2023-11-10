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
import { RadioCard, RadioCardGroup } from "./RadioCard";
// import { ModalButton } from "../detail";

const CardRiwayatKelas = () => {
  const inputgray = useColorModeValue("gray.50", "gray.800");
  const { colorMode } = useColorMode();
  const {
    isOpen: isOpenAmbilKelas,
    onOpen: onOpenFrs,
    onClose: onCloseAmbilKelas,
  } = useDisclosure();
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
            <PrimaryButton onClick={onOpenFrs}>Ambil Kelas</PrimaryButton>
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
                    <Text fontSize="14px" fontWeight="500">
                      {item.status === 1 ? (
                        <Text fontSize="14px" fontWeight="500" color="gray">
                          Sedang diproses
                        </Text>
                      ) : (
                        <Text fontSize="14px" fontWeight="500">
                          {item.tgl_proses} • {item.jam_proses}
                        </Text>
                      )}
                    </Text>
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

      <Modal
        isOpen={isOpenAmbilKelas}
        onClose={onCloseAmbilKelas}
        size="lg"
        isCentered
      >
        <ModalOverlay />
        <ModalContent
          borderRadius="16px"
          py="8px"
          m="16px 24px"
          bg={colorMode == "light" ? "white" : "gray.900"}
        >
          <ModalHeader
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            Ambil Kelas
            <Button
              variant="ghost"
              onClick={onCloseAmbilKelas}
              borderRadius="16px/16px"
              h="50px"
              mr="-5px"
            >
              <CloseOutlineIconMade fontSize="20px" />
            </Button>
          </ModalHeader>
          <ModalBody>
            <Box
              display={{ base: "block", a: "flex" }}
              alignItems="center"
              gap={3}
            >
              <Select
                cursor="pointer"
                size="lg"
                border="2px"
                borderColor={inputgray}
                background={inputgray}
                borderRadius="xl"
                fontSize="14px"
                fontWeight="700"
                defaultValue={"option1"}
                w="full"
              >
                <option value="option1">Mata Kuliah Umum</option>
                <option value="option2">Departemen</option>
              </Select>
              <Input
                size="lg"
                border="2px"
                borderColor={inputgray}
                background={inputgray}
                placeholder="Cari nama kelas"
                borderRadius="xl"
                fontSize="14px"
                fontWeight="500"
                w="full"
                mt={{ base: "8px", a: "unset" }}
              />
            </Box>
            <Box
              h="calc(100vh - 500px);"
              overflowY="scroll"
              mt="24px"
              borderRadius="16px"
              mr="-19px"
            >
              <RadioCardGroup spacing="2">
                <RadioCard value="IF1" mb="0.5rem" checkmark={true}>
                  <Text fontSize="14px" fontWeight={600}>
                    Analisis & Desain Sistem Informasi (A)
                  </Text>
                  <Text fontSize="13px" fontWeight="500" mt="6px">
                    IF23212 • 3 SKS • Semester 3 (saat ini)
                  </Text>
                  <Flex alignItems="center" mt="8px" gap={3}>
                    <Flex alignItems="center">
                      <CalendarOutlineIconMade fontSize="14px" mr="6px" />
                      <Text fontWeight="500" fontSize="13px">
                        Senin
                      </Text>
                    </Flex>
                    <Flex alignItems="center">
                      <ClockOutlineIconMade fontSize="14px" mr="6px" />
                      <Text fontWeight="500" fontSize="13px">
                        07.30-10.00
                      </Text>
                    </Flex>
                  </Flex>
                </RadioCard>
                <RadioCard value="IF2" mb="0.5rem" checkmark={true}>
                  <Text fontSize="14px" fontWeight={600}>
                    Analisis & Desain Sistem Informasi (A)
                  </Text>
                  <Text fontSize="13px" fontWeight="500" mt="6px">
                    IF23212 • 3 SKS • Semester 3 (saat ini)
                  </Text>
                  <Flex alignItems="center" mt="8px" gap={3}>
                    <Flex alignItems="center">
                      <CalendarOutlineIconMade fontSize="14px" mr="6px" />
                      <Text fontWeight="500" fontSize="13px">
                        Senin
                      </Text>
                    </Flex>
                    <Flex alignItems="center">
                      <ClockOutlineIconMade fontSize="14px" mr="6px" />
                      <Text fontWeight="500" fontSize="13px">
                        07.30-10.00
                      </Text>
                    </Flex>
                  </Flex>
                </RadioCard>
                <RadioCard value="IF3" mb="0.5rem" checkmark={true} isDisabled>
                  <Text fontSize="14px" fontWeight={600}>
                    Analisis & Desain Sistem Informasi (A)
                  </Text>
                  <Text fontSize="13px" fontWeight="500" mt="6px">
                    IF23212 • 3 SKS • Semester 3 (saat ini)
                  </Text>
                  <Flex alignItems="center" mt="8px" gap={3}>
                    <Flex alignItems="center">
                      <CalendarOutlineIconMade fontSize="14px" mr="6px" />
                      <Text fontWeight="500" fontSize="13px">
                        Senin
                      </Text>
                    </Flex>
                    <Flex alignItems="center">
                      <ClockOutlineIconMade fontSize="14px" mr="6px" />
                      <Text fontWeight="500" fontSize="13px">
                        07.30-10.00
                      </Text>
                    </Flex>
                  </Flex>
                </RadioCard>
              </RadioCardGroup>
              <Skeleton
                height="110px"
                borderRadius="16px"
                startColor={
                  colorMode == "light" ? "blackAlpha.300" : "whiteAlpha.300"
                }
                endColor={
                  colorMode == "light" ? "blackAlpha.50" : "whiteAlpha.50"
                }
              />
            </Box>
          </ModalBody>
          <ModalFooter>
            <Center>
              <TextButton onClick={onCloseAmbilKelas}>Kembali</TextButton>
            </Center>
            <Center>
              <PrimaryButton type="submit" isLoading={false}>
                Simpan
              </PrimaryButton>
            </Center>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CardRiwayatKelas;

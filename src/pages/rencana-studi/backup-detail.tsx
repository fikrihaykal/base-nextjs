import PageTransition from "@/components/PageLayout";
import ContainerQuery from "@/components/atoms/ContainerQuery";
import PageRow from "@/components/atoms/PageRow";
import {
  Badge,
  Box,
  Button,
  Center,
  Select,
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useColorMode,
  useColorModeValue,
  useSteps,
} from "@chakra-ui/react";
import {
  IoCheckmarkCircle,
  IoCloseCircle,
  IoHeartCircle,
} from "react-icons/io5";
import PlainCard from "@/components/organisms/Cards/Card";
import { PrimaryButton } from "@/components/atoms/Buttons/PrimaryButton";
import { TextButton } from "@/components/atoms/Buttons/TextButton";
import TableBasic from "@/components/organisms/TableBasic";
import { TableHead } from "@/components/molecules/Table";
import { DangerButton } from "@/components/atoms/Buttons/DangerButton";

const matkulfix: Array<any> = [
  {
    Kode: "IF111",
    MataKuliah: "Kalkulus",
    Kelas: "A",
    SKS: 3,
    AlihKredit: "Tidak",
    NamaDosen: "Mike Johnson",
  },
  {
    Kode: "IF112",
    MataKuliah: "Algoritma dan Pemrograman",
    Kelas: "B",
    SKS: 2,
    AlihKredit: "Ya",
    NamaDosen: "Daniel Thomas",
  },
  {
    Kode: "IF113",
    MataKuliah: "Pemrograman Web",
    Kelas: "C",
    SKS: 3,
    AlihKredit: "Tidak",
    NamaDosen: "Emily Wilson",
  },
];

const matkulfrs: Array<any> = [
  {
    MataKuliah: "Kalkulus",
    Kelas: "A",
    TanggalAmbil: "2021-08-20",
    TanggalProses: "2021-08-21",
    Pengambil: "Mike Johnson",
    Status: 2,
    BerhasilDiambil: "Ya",
  },
  {
    MataKuliah: "Struktur Data",
    Kelas: "B",
    TanggalAmbil: "2021-08-21",
    TanggalProses: "2021-08-22",
    Pengambil: "Alice Smith",
    Status: 4,
    BerhasilDiambil: "Tidak",
  },
  {
    MataKuliah: "Pemrograman Web",
    Kelas: "C",
    TanggalAmbil: "2021-08-22",
    TanggalProses: "2021-08-23",
    Pengambil: "Bob Williams",
    Status: 3,
    BerhasilDiambil: "Tidak",
  },
  {
    MataKuliah: "Basis Data",
    Kelas: "D",
    TanggalAmbil: "2021-08-23",
    TanggalProses: "2021-08-24",
    Pengambil: "Chris Brown",
    Status: 5,
    BerhasilDiambil: "Tidak",
  },
  {
    MataKuliah: "Sistem Operasi",
    Kelas: "E",
    TanggalAmbil: "2021-08-24",
    TanggalProses: "2021-08-25",
    Pengambil: "Emily Wilson",
    Status: 1,
    BerhasilDiambil: "Tidak",
  },
  {
    MataKuliah: "Pemrograman Berorientasi Objek",
    Kelas: "A",
    TanggalAmbil: "2021-08-25",
    TanggalProses: "2021-08-26",
    Pengambil: "Daniel Thomas",
    Status: 2,
    BerhasilDiambil: "Ya",
  },
  {
    MataKuliah: "Rekayasa Perangkat Lunak",
    Kelas: "B",
    TanggalAmbil: "2021-08-26",
    TanggalProses: "2021-08-27",
    Pengambil: "Hannah Miller",
    Status: 3,
    BerhasilDiambil: "Tidak",
  },
];

const steps = [
  { title: "Pengisian", description: "30 Jan - 3 Feb 2023" },
  { title: "Perubahan", description: "4 Feb - 24 Feb 2023" },
  { title: "Penghapusan", description: "25 Feb - 14 Apr 2023" },
];

const KelolaFRS = () => {
  const bgcard = useColorModeValue("white", "gray.900");
  const bgbutton = useColorModeValue("black", "white");
  const textbtn = useColorModeValue("white", "gray.900");
  const colorborder = useColorModeValue("gray.100", "gray.800");
  const colorred = useColorModeValue("red", "red.200");
  const { colorMode } = useColorMode();

  const { activeStep } = useSteps({
    index: 0,
    count: steps.length,
  });

  return (
    <>
      <PageTransition pageTitle="Detail Rencana Studi">
        <PageRow>
          <ContainerQuery>
            <PlainCard>
              <Box
                display={{ base: "block", d: "flex" }}
                justifyContent="space-between"
                alignItems="center"
              >
                <Box>
                  <Badge
                    bgGradient="linear(to-r, purple.500, pink.500)"
                    color="white"
                    mb="24px"
                    display="inline-flex"
                    alignItems="center"
                    borderRadius="full"
                    p="6px 8px"
                    gap="4px"
                  >
                    <IoHeartCircle fontSize="20px" />
                    Premium
                  </Badge>
                  <Text fontSize="22px" fontWeight="600" mb="2px">
                    Sarah Nasywa Azizah (5013231063)
                  </Text>
                  <Text fontWeight="500">
                    Dosen Wali: Rabbani Kharismawan, ST, MT
                  </Text>
                  <Select
                    cursor="pointer"
                    size="lg"
                    border="2px"
                    borderColor={colorborder}
                    background={colorborder}
                    borderRadius="xl"
                    w="auto"
                    fontSize="14px"
                    fontWeight="700"
                    mt="24px"
                  >
                    <option value="option1" selected>
                      Semester Gasal 2023/2024
                    </option>
                  </Select>
                </Box>
                <Box
                  display="flex"
                  w={{ base: "full", d: "sm" }}
                  mt={{ base: "36px", d: "0px" }}
                >
                  <Box
                    px="24px"
                    w="full"
                    borderRight="2px"
                    borderRightColor={colorborder}
                  >
                    <Center
                      fontSize="13px"
                      fontWeight="500"
                      color="gray"
                      mb="2px"
                    >
                      IPS
                    </Center>
                    <Center fontSize="22px" fontWeight="600">
                      0,00
                    </Center>
                  </Box>
                  <Box px="24px" w="full">
                    <Center
                      fontSize="13px"
                      fontWeight="500"
                      color="gray"
                      mb="2px"
                    >
                      SKS diambil
                    </Center>
                    <Center fontSize="22px" fontWeight="600">
                      18
                      <Text fontSize="14px" color="gray" mx="2px">
                        /
                      </Text>
                      <Text fontSize="14px" color="gray">
                        24
                      </Text>
                    </Center>
                  </Box>
                </Box>
              </Box>
            </PlainCard>
            <PlainCard>
              <Text fontSize="18px" fontWeight="600" mb="24px">
                Status FRS
              </Text>
              <Box display={{ base: "none", a: "block" }}>
                <Stepper
                  index={activeStep}
                  colorScheme="gray"
                  size="md"
                  px={{ base: "0px", x: "64px" }}
                  mb="16px"
                >
                  {steps.map((step, index) => (
                    <Step key={index}>
                      <Box display="block" alignItems="center">
                        <Center mb="8px">
                          <StepIndicator>
                            <StepStatus
                              complete={<StepIcon />}
                              incomplete={<StepNumber />}
                              active={<StepNumber />}
                            />
                          </StepIndicator>
                        </Center>

                        <Box flexShrink="0">
                          <StepTitle>
                            <Text fontWeight="600" textAlign="center">
                              {step.title}
                            </Text>
                          </StepTitle>
                          <StepDescription>
                            <Text fontWeight="500" textAlign="center">
                              {step.description}
                            </Text>
                          </StepDescription>
                        </Box>
                      </Box>

                      <StepSeparator />
                    </Step>
                  ))}
                </Stepper>
              </Box>
              <Box display={{ base: "block", a: "none" }}>
                <Stepper
                  index={activeStep}
                  colorScheme="gray"
                  orientation="vertical"
                  height="200px"
                  gap="0"
                >
                  {steps.map((step, index) => (
                    <Step key={index}>
                      <StepIndicator>
                        <StepStatus
                          complete={<StepIcon />}
                          incomplete={<StepNumber />}
                          active={<StepNumber />}
                        />
                      </StepIndicator>

                      <Box flexShrink="0">
                        <StepTitle>{step.title}</StepTitle>
                        <StepDescription>{step.description}</StepDescription>
                      </Box>

                      <StepSeparator />
                    </Step>
                  ))}
                </Stepper>
              </Box>
            </PlainCard>
            <PlainCard>
              <Text fontSize="18px" fontWeight="600" mb="2px">
                Rencana Studi
              </Text>
              <Text fontSize="16px" fontWeight="500" color="gray" mb="24px">
                Mata kuliah yang berhasil Anda ambil
              </Text>
              <TableContainer
              // display={{ base: "none", a: "block" }}
              >
                <Table variant="unstyled">
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
                        textAlign="center"
                      >
                        Kelas
                      </Th>
                      <Th
                        fontSize="14px"
                        fontWeight="500"
                        color="gray.400"
                        textTransform="capitalize"
                        letterSpacing="0px"
                        textAlign="center"
                      >
                        SKS
                      </Th>
                      <Th
                        fontSize="14px"
                        fontWeight="500"
                        color="gray.400"
                        textTransform="capitalize"
                        letterSpacing="0px"
                        textAlign="center"
                      >
                        Alih Kredit
                      </Th>
                      <Th
                        fontSize="14px"
                        fontWeight="500"
                        color="gray.400"
                        textTransform="capitalize"
                        letterSpacing="0px"
                      >
                        Nama Dosen
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
                    {matkulfix.map((item, index) => (
                      <Tr
                        key={index}
                        borderTop="2px"
                        borderColor={
                          colorMode == "light" ? "gray.100" : "gray.800"
                        }
                      >
                        <Td fontSize="14px" fontWeight="500" textAlign="center">
                          {index + 1}.
                        </Td>
                        <Td fontSize="15px" fontWeight="500">
                          <Text fontWeight="600" mb="6px">
                            {item.Kode} - {item.MataKuliah}
                          </Text>
                          <Text fontSize="15px" color="gray">
                            Semester 3 (saat ini)
                          </Text>
                          {item.SKS === 2 ? (
                            <Text
                              fontSize="14px"
                              fontWeight="500"
                              color={
                                colorMode == "light" ? "orange" : "orange.200"
                              }
                              mt="6px"
                            >
                              Pengambilan melanggar prasyarat
                            </Text>
                          ) : null}
                        </Td>
                        <Td fontSize="14px" fontWeight="500" textAlign="center">
                          {item.Kelas}
                        </Td>
                        <Td fontSize="14px" fontWeight="500" textAlign="center">
                          {item.SKS}
                        </Td>
                        <Td fontSize="14px" fontWeight="500" textAlign="center">
                          {item.AlihKredit}
                        </Td>
                        <Td fontSize="14px" fontWeight="500">
                          {item.NamaDosen}
                        </Td>
                        <Td fontSize="14px" fontWeight="500" textAlign="center">
                          {item.SKS === 3 ? (
                            <DangerButton>Hapus</DangerButton>
                          ) : item.SKS === 2 ? (
                            <Box>
                              <Text align="center" fontSize="14px" color="gray">
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
            <PlainCard>
              <Box
                display={{ base: "block", a: "flex" }}
                justifyContent="space-between"
                alignItems="center"
                mb="24px"
              >
                <Box>
                  <Text fontSize="20px" mb="2px">
                    Pengambilan Kelas
                  </Text>
                  <Text color="gray">Riwayat pengambilan kelas Anda</Text>
                </Box>
                <PrimaryButton>Tambah Mata Kuliah</PrimaryButton>
              </Box>
              <TableContainer
                border="1px"
                borderColor={colorborder}
                borderRadius="xl"
                // display={{ base: "none", a: "block" }}
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
                        <Td>{item.TanggalAmbil}</Td>
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
            <PlainCard>
              <Badge
                colorScheme="green"
                mb="24px"
                display="inline-flex"
                alignItems="center"
                borderRadius="full"
                p="6px 8px"
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
            </PlainCard>
            <PlainCard>
              <Badge
                colorScheme="red"
                mb="24px"
                display="inline-flex"
                alignItems="center"
                borderRadius="full"
                p="6px 8px"
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
            </PlainCard>
          </ContainerQuery>
        </PageRow>
      </PageTransition>
    </>
  );
};

export default KelolaFRS;

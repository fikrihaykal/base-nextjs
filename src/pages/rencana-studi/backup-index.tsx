import PageTransition from "@/components/PageLayout";
import ContainerQuery from "@/components/atoms/ContainerQuery";
import PageRow from "@/components/atoms/PageRow";
import { Poppins } from "next/font/google";
import {
  Badge,
  Box,
  Button,
  LightMode,
  Text,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import Link from "next/link";

const daftarmatkul: Array<any> = [
  {
    Nomor: 12345,
    MataKuliah: "Algoritma dan Struktur Data",
    Kelas: "A",
    "Tanggal ambil": "2022-02-15",
    "Tanggal proses": "2022-02-17",
    Pengambil: "Alice",
    Status: "Diproses",
  },
  {
    Nomor: 67890,
    MataKuliah: "Basis Data",
    Kelas: "B",
    "Tanggal ambil": "2022-02-20",
    "Tanggal proses": "2022-02-22",
    Pengambil: "Bob",
    Status: "Selesai",
  },
  {
    Nomor: 24680,
    MataKuliah: "Sistem Operasi",
    Kelas: "C",
    "Tanggal ambil": "2022-03-01",
    "Tanggal proses": "2022-03-03",
    Pengambil: "Charlie",
    Status: "Diproses",
  },
  {
    Nomor: 13579,
    MataKuliah: "Jaringan Komputer",
    Kelas: "D",
    "Tanggal ambil": "2022-03-08",
    "Tanggal proses": "2022-03-10",
    Pengambil: "David",
    Status: "Diproses",
  },
  {
    Nomor: 24680,
    MataKuliah: "Algoritma dan Struktur Data",
    Kelas: "A",
    "Tanggal ambil": "2022-03-15",
    "Tanggal proses": "2022-03-17",
    Pengambil: "Eva",
    Status: "Diproses",
  },
  {
    Nomor: 13579,
    MataKuliah: "Basis Data",
    Kelas: "B",
    "Tanggal ambil": "2022-03-20",
    "Tanggal proses": "2022-03-22",
    Pengambil: "Farhan",
    Status: "Selesai",
  },
  {
    Nomor: 24680,
    MataKuliah: "Sistem Operasi",
    Kelas: "C",
    "Tanggal ambil": "2022-03-28",
    "Tanggal proses": "2022-03-30",
    Pengambil: "Gita",
    Status: "Diproses",
  },
  {
    Nomor: 13579,
    MataKuliah: "Jaringan Komputer",
    Kelas: "D",
    "Tanggal ambil": "2022-04-04",
    "Tanggal proses": "2022-04-06",
    Pengambil: "Hari",
    Status: "Diproses",
  },
  {
    Nomor: 24680,
    MataKuliah: "Algoritma dan Struktur Data",
    Kelas: "A",
    "Tanggal ambil": "2022-04-11",
    "Tanggal proses": "2022-04-13",
    Pengambil: "Ira",
    Status: "Diproses",
  },
  {
    Nomor: 13579,
    MataKuliah: "Basis Data",
    Kelas: "B",
    "Tanggal ambil": "2022-04-18",
    "Tanggal proses": "2022-04-20",
    Pengambil: "Joko",
    Status: "Selesai",
  },
  {
    Nomor: 24680,
    MataKuliah: "Sistem Operasi",
    Kelas: "C",
    "Tanggal ambil": "2022-04-25",
    "Tanggal proses": "2022-04-27",
    Pengambil: "Khan",
    Status: "Diproses",
  },
  {
    Nomor: 13579,
    MataKuliah: "Jaringan Komputer",
    Kelas: "D",
    "Tanggal ambil": "2022-05-02",
    "Tanggal proses": "2022-05-04",
    Pengambil: "Lia",
    Status: "Diproses",
  },
];

const poppins = Poppins({ weight: "600", subsets: ["latin"] });

const FRS = () => {
  const toast = useToast();
  const bgcard = useColorModeValue("white", "gray.900");
  const bgbutton = useColorModeValue("black", "gray.800");
  const colorborder = useColorModeValue("gray.100", "gray.800");

  return (
    <>
      <PageTransition pageTitle="Rencana Studi">
        <PageRow>
          <ContainerQuery>
            <Box
              mt="24px"
              data-group="card--shadow"
              className="card__menu_shadow"
              pos="relative"
              p="36px 24px"
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
              <Box
                display={{ base: "block", a: "flex" }}
                justifyContent="space-between"
                alignItems="center"
                mb="24px"
              >
                <Text className={poppins.className} fontSize="20px">
                  Mata Kuliah Anda
                </Text>
                <Link href="/rencana-studi/kelola">
                  <Button
                    colorScheme="blue"
                    w={{ base: "full", a: "auto" }}
                    h="64px"
                    px="36px"
                    borderRadius="12px"
                    bg={bgbutton}
                    color="white"
                    mt={{ base: "16px", a: "0px" }}
                  >
                    Kelola
                  </Button>
                </Link>
              </Box>

              <Box>
                {daftarmatkul.map((item, index) => (
                  <Box
                    key={index}
                    mt="24px"
                    pt="24px"
                    borderTop="2px"
                    borderColor={colorborder}
                    _first={{ 
                      mt:"0px",
                      pt:"0px",
                      borderTop:"0px"}}
                  >
                    <Text fontSize="16px" fontWeight={600} mb="2px">
                      {item.MataKuliah} ({item.Kelas})
                    </Text>
                    <Text>{item.Nomor} • 3 SKS • Semester berlangsung</Text>
                    <Text color="gray" mt="2px">
                      Kelas Departemen
                    </Text>
                  </Box>
                ))}
              </Box>
            </Box>
          </ContainerQuery>
        </PageRow>
      </PageTransition>
    </>
  );
};

export default FRS;

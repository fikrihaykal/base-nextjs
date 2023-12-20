import { Berkas } from "@/types/berkas";
import { fuzzySort } from "@/utils/table";
import { Box, Flex, Link, Text } from "@chakra-ui/react";
import { ColumnDef } from "@tanstack/table-core";
import NextLink from "next/link";

const kolomTabelBerkas: ColumnDef<Berkas, any>[] = [
  {
    accessorFn: (row) => row.name,
    id: "name",
    header: "Name",
    
    cell: (row) => {
      return (
        <Link as={NextLink} href="#" data-group="card--shadow">
          <Flex
            className="file__container"
            display="inline-flex"
            alignItems="center"
            transition="color .15s"
            _groupHover={{
              color: "#008fff",
            }}
            w="100%"
            my="12px"
          >
            <Flex
              className="file__preview"
              pos="relative"
              justifyContent="center"
              alignItems="center"
              flexShrink="0"
              w="96px"
              h="72px"
              borderRadius="8px"
              bgImage={row.row.original.fileDir}
              bgSize="cover"
              fontSize="0"
            />
            <Box className="file__detail" pl="24px">
              <Box
                className="file__title"
                mb="9px"
                fontSize="16px"
                lineHeight="1.1875"
                fontWeight="600"
                _groupHover={{
                  color: "#008fff",
                }}
              >
                <Text
                  variant="tabletitle"
                  data-group="card--shadow"
                  _groupHover={{
                    color: "#008fff",
                  }}
                >
                  {row.row.original.name}
                </Text>
              </Box>
              <Box
                className="file__subtitle"
                fontSize="13px"
                lineHeight="1.38462"
                fontWeight="600"
                color="#808080"
              >
                {row.row.original.extension} . {row.row.original.size} KB
              </Box>
            </Box>
          </Flex>
        </Link>
      );
    },
    filterFn: "fuzzy",
    sortingFn: fuzzySort,
  },
  {
    accessorFn: (row) => row.type,
    id: "type",
    header: "Jenis",
    
    cell: (row) => (
      <Text textTransform="capitalize" color="#7fba7a" fontSize="14px">
        {row.getValue()}
      </Text>
    ),
    filterFn: "fuzzy",
    sortingFn: fuzzySort,
  },
  {
    accessorFn: (row) => row.create_date,
    id: "create_date",
    header: "Tanggal",
    
    cell: (info) => <Text variant="tabletext" fontWeight="500">{info.getValue()}</Text>,
    filterFn: "date",
    sortingFn: fuzzySort,
  },
  {
    accessorFn: (row) => row.description,
    id: "description",
    header: "Deskripsi",
    
    cell: (info) => <Text variant="tabletext" fontWeight="500">{info.getValue()}</Text>,
    filterFn: "fuzzy",
    sortingFn: fuzzySort,
  },
];

const dataTabelBerkas: Berkas[] = [
  {
    id: 1,
    name: "Sertif Bukti Wirausaha",
    extension: "PDF",
    fileDir: "/images/cert.jpg",
    size: 1200,
    type: "sertifikat",
    create_date: "2023-02-03 08:49",
    description: "Dokumen bukti wirausaha slip pendapatan dan gaji",
  },
  {
    id: 2,
    name: "Foto Profil 001",
    extension: "JPG",
    fileDir: "/images/profilepicmine.jpg",
    size: 800,
    type: "foto",
    create_date: "2023-02-05 14:20",
    description: "Foto profil pengguna",
  },
  {
    id: 3,
    name: "Sertif Kursus Seni",
    extension: "PDF",
    fileDir: "/images/cert.jpg",
    size: 1050,
    type: "sertifikat",
    create_date: "2023-02-08 11:05",
    description: "Sertifikat kursus seni lukis dan melukis",
  },
  {
    id: 4,
    name: "Foto Liburan 2023",
    extension: "PNG",
    fileDir: "/images/profilepicmine.jpg",
    size: 650,
    type: "foto",
    create_date: "2023-02-10 16:30",
    description: "Foto liburan ke pantai",
  },
  {
    id: 5,
    name: "Sertif Kompetisi Musik",
    extension: "PDF",
    fileDir: "/images/cert.jpg",
    size: 980,
    type: "sertifikat",
    create_date: "2023-02-12 09:15",
    description: "Sertifikat juara kompetisi musik tingkat nasional",
  },
  {
    id: 6,
    name: "Foto Keluarga",
    extension: "JPG",
    fileDir: "/images/profilepicmine.jpg",
    size: 700,
    type: "foto",
    create_date: "2023-02-15 18:50",
    description: "Foto bersama keluarga saat acara ulang tahun",
  },
  {
    id: 7,
    name: "Sertif Pelatihan IT",
    extension: "PDF",
    fileDir: "/images/cert.jpg",
    size: 850,
    type: "sertifikat",
    create_date: "2023-02-18 13:25",
    description: "Sertifikat pelatihan teknologi informasi",
  },
  {
    id: 8,
    name: "Foto Wisuda",
    extension: "PNG",
    fileDir: "/images/profilepicmine.jpg",
    size: 720,
    type: "foto",
    create_date: "2023-02-20 10:40",
    description: "Foto saat acara wisuda universitas",
  },
  {
    id: 9,
    name: "Sertif Workshop Fotografi",
    extension: "PDF",
    fileDir: "/images/cert.jpg",
    size: 900,
    type: "sertifikat",
    create_date: "2023-02-23 12:55",
    description: "Sertifikat mengikuti workshop fotografi",
  },
  {
    id: 10,
    name: "Foto Pemandangan",
    extension: "JPG",
    fileDir: "/images/profilepicmine.jpg",
    size: 620,
    type: "foto",
    create_date: "2023-02-25 09:10",
    description: "Foto indah pemandangan gunung",
  },
  {
    id: 11,
    name: "Sertif Seminar Pendidikan",
    extension: "PDF",
    fileDir: "/images/cert.jpg",
    size: 830,
    type: "sertifikat",
    create_date: "2023-02-28 15:05",
    description: "Sertifikat mengikuti seminar pendidikan",
  },
  {
    id: 12,
    name: "Foto Anak",
    extension: "PNG",
    fileDir: "/images/profilepicmine.jpg",
    size: 690,
    type: "foto",
    create_date: "2023-03-02 17:30",
    description: "Foto lucu anak bermain di taman",
  },
  {
    id: 13,
    name: "Sertif Pelatihan Bahasa",
    extension: "PDF",
    fileDir: "/images/cert.jpg",
    size: 820,
    type: "sertifikat",
    create_date: "2023-03-05 11:15",
    description: "Sertifikat pelatihan bahasa inggris",
  },
  {
    id: 14,
    name: "Foto Makanan",
    extension: "JPG",
    fileDir: "/images/profilepicmine.jpg",
    size: 670,
    type: "foto",
    create_date: "2023-03-08 14:20",
    description: "Foto hidangan makanan lezat",
  },
  {
    id: 15,
    name: "Sertif Keahlian Teknik",
    extension: "PDF",
    fileDir: "/images/cert.jpg",
    size: 790,
    type: "sertifikat",
    create_date: "2023-03-10 09:50",
    description: "Sertifikat keahlian teknik mesin",
  },
  {
    id: 16,
    name: "Foto Senja",
    extension: "PNG",
    fileDir: "/images/profilepicmine.jpg",
    size: 740,
    type: "foto",
    create_date: "2023-03-12 18:40",
    description: "Foto indah matahari terbenam di pantai",
  },
  {
    id: 17,
    name: "Sertif Kursus Bisnis",
    extension: "PDF",
    fileDir: "/images/cert.jpg",
    size: 880,
    type: "sertifikat",
    create_date: "2023-03-15 12:30",
    description: "Sertifikat kursus manajemen bisnis",
  },
  {
    id: 18,
    name: "Foto Taman",
    extension: "JPG",
    fileDir: "/images/profilepicmine.jpg",
    size: 610,
    type: "foto",
    create_date: "2023-03-18 16:55",
    description: "Foto indah taman bunga",
  },
  {
    id: 19,
    name: "Sertif Lomba Seni",
    extension: "PDF",
    fileDir: "/images/cert.jpg",
    size: 940,
    type: "sertifikat",
    create_date: "2023-03-20 11:10",
    description: "Sertifikat juara lomba seni tari",
  },
  {
    id: 20,
    name: "Foto Pasangan",
    extension: "PNG",
    fileDir: "/images/profilepicmine.jpg",
    size: 690,
    type: "foto",
    create_date: "2023-03-23 13:45",
    description: "Foto romantis bersama pasangan",
  },
  {
    id: 21,
    name: "Sertif Workshop Komputer",
    extension: "PDF",
    fileDir: "/images/cert.jpg",
    size: 870,
    type: "sertifikat",
    create_date: "2023-03-25 09:30",
    description: "Sertifikat workshop penggunaan komputer",
  },
  {
    id: 22,
    name: "Foto Hewan Peliharaan",
    extension: "JPG",
    fileDir: "/images/profilepicmine.jpg",
    size: 630,
    type: "foto",
    create_date: "2023-03-28 15:20",
    description: "Foto lucu hewan peliharaan",
  },
  {
    id: 23,
    name: "Sertif Pelatihan Keamanan",
    extension: "PDF",
    fileDir: "/images/cert.jpg",
    size: 920,
    type: "sertifikat",
    create_date: "2023-03-30 10:15",
    description: "Sertifikat pelatihan keamanan dan penjagaan",
  },
  {
    id: 24,
    name: "Foto Pemandangan 002",
    extension: "PNG",
    fileDir: "/images/profilepicmine.jpg",
    size: 710,
    type: "foto",
    create_date: "2023-04-02 18:30",
    description: "Foto pemandangan alam yang menakjubkan",
  },
  {
    id: 25,
    name: "Sertif Pelatihan Bisnis",
    extension: "PDF",
    fileDir: "/images/cert.jpg",
    size: 850,
    type: "sertifikat",
    create_date: "2023-04-05 12:55",
    description: "Sertifikat pelatihan strategi bisnis",
  },
  {
    id: 26,
    name: "Foto Bermain Olahraga",
    extension: "JPG",
    fileDir: "/images/profilepicmine.jpg",
    size: 670,
    type: "foto",
    create_date: "2023-04-08 16:40",
    description: "Foto saat bermain olahraga bersama teman",
  },
  {
    id: 27,
    name: "Sertif Lomba Futsal",
    extension: "PDF",
    fileDir: "/images/cert.jpg",
    size: 890,
    type: "sertifikat",
    create_date: "2023-04-10 09:30",
    description: "Sertifikat juara lomba futsal",
  },
  {
    id: 28,
    name: "Foto Wisata Alam",
    extension: "PNG",
    fileDir: "/images/profilepicmine.jpg",
    size: 730,
    type: "foto",
    create_date: "2023-04-12 15:20",
    description: "Foto indah saat berwisata alam",
  },
  {
    id: 29,
    name: "Sertif Seminar Keuangan",
    extension: "PDF",
    fileDir: "/images/cert.jpg",
    size: 920,
    type: "sertifikat",
    create_date: "2023-04-15 11:15",
    description: "Sertifikat mengikuti seminar keuangan",
  },
  {
    id: 30,
    name: "Foto Kelas",
    extension: "JPG",
    fileDir: "/images/profilepicmine.jpg",
    size: 650,
    type: "foto",
    create_date: "2023-04-18 17:30",
    description: "Foto suasana belajar di dalam kelas",
  },
];

export { dataTabelBerkas, kolomTabelBerkas };

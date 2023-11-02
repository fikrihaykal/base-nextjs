import { DangerClearButton } from "@/components/atoms/Buttons/DangerButton";
import { DarkButton } from "@/components/atoms/Buttons/DarkButton";
import { SmOutlineButton } from "@/components/atoms/Buttons/SmOutlineBtn";
import { MatkulRiwayat } from "@/types/mk-riwayat";
import { Absen } from "@/types/rekap-absen";
import { RencanaKerja } from "@/types/renker";
import { fuzzySort } from "@/utils/table";
import {
  Text,
  Link,
  Flex,
  Box,
  border,
  useColorMode,
  Badge,
} from "@chakra-ui/react";
import { ColumnDef } from "@tanstack/table-core";
import Image from "next/image";
import NextLink from "next/link";
import {
  IoAlert,
  IoAlertCircle,
  IoCheckmarkCircle,
  IoClose,
  IoCloseCircle,
  IoEllipse,
  IoEllipsisHorizontalCircle,
  IoRefresh,
} from "react-icons/io5";

const kolomTabelRiwayatKelas: ColumnDef<MatkulRiwayat, any>[] = [
  {
    accessorFn: (row) => row.no,
    id: "no",
    header: "No",
    footer: (props) => props.column.id,
    cell: (row) => {
      const { colorMode } = useColorMode();
      return <Text variant="tabletext">{row.getValue()}</Text>;
    },
    filterFn: "fuzzy",
    sortingFn: fuzzySort,
  },
  {
    accessorFn: (row) => row.mk,
    id: "mk",
    header: "Mata Kuliah",
    footer: (props) => props.column.id,
    cell: (row) => {
      return (
        <Box
          className="file__title"
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
            fontSize="16px"
            lineHeight="1.1875"
            fontWeight="550"
            _groupHover={{
              color: "#008fff",
            }}
          >
            {row.getValue()}
          </Text>
        </Box>
      );
    },
    filterFn: "fuzzy",
    sortingFn: fuzzySort,
  },
  {
    accessorFn: (row) => row.kelas,
    id: "kelas",
    header: "Kelas",
    footer: (props) => props.column.id,
    cell: (row) => {
      return <Text variant="tabletext">{row.getValue()}</Text>;
    },
    filterFn: "fuzzy",
    sortingFn: fuzzySort,
  },
  {
    accessorFn: (row) => row.jam_ambil,
    id: "jam_ambil",
    header: "Diambil",
    footer: (props) => props.column.id,
    cell: (row) => {
      return (
        <Box>
          <Text variant="tabletext">
            {row.getValue()} • {row.row.original.tgl_ambil}
          </Text>
          <Text fontSize="13px" fontWeight="500" color="gray" mt="6px">
            {row.row.original.pengambil}
          </Text>
        </Box>
      );
    },
    filterFn: "fuzzy",
    sortingFn: fuzzySort,
  },
  {
    accessorFn: (row) => row.jam_proses,
    id: "jam_proses",
    header: "Diproses",
    footer: (props) => props.column.id,
    cell: (row) => {
      return (
        <Box>
          <Text variant="tabletext">
            {row.getValue()} • {row.row.original.tgl_proses}
          </Text>
        </Box>
      );
    },
    filterFn: "fuzzy",
    sortingFn: fuzzySort,
  },
  {
    accessorFn: (row) => row.status,
    id: "status",
    header: "Status",
    footer: (props) => props.column.id,
    cell: (row) => {
      return (
        <Box>
          {row.row.original.status == 1 ? (
            <Badge
              colorScheme="cyan"
              variant="subtle"
              borderRadius="full"
              p="6px 12px"
              fontSize="13px"
              fontWeight="600"
              textTransform="capitalize"
            >
              Sedang diproses
            </Badge>
          ) : (
            <></>
          )}
          {row.row.original.status == 2 ? (
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
          ) : (
            <></>
          )}
          {row.row.original.status == 3 ? (
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
          ) : (
            <></>
          )}
          {row.row.original.status == 4 ? (
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
            <></>
          )}
        </Box>
      );
    },
    filterFn: "fuzzy",
    sortingFn: fuzzySort,
  },

  // {row.row.original.mk}

  // {
  //   accessorFn: (row) => row.judul,
  //   id: "type",
  //   header: "Judul",
  //   footer: (props) => props.column.id,
  //   cell: (row) => (
  //     <Box className="file__detail">
  //       <Box
  //         className="file__title"
  //         mb="9px"
  //         fontSize="16px"
  //         lineHeight="1.1875"
  //         fontWeight="600"
  //         _groupHover={{
  //           color: "#008fff",
  //         }}
  //       >
  //         <Text
  //           variant="tabletitle"
  //           data-group="card--shadow"
  //           fontSize="16px"
  //           lineHeight="1.1875"
  //           fontWeight="550"
  //           _groupHover={{
  //             color: "#008fff",
  //           }}
  //           textDecoration={
  //             row.row.original.status == 3 ? "line-through" : "none"
  //           }
  //         >
  //           {row.getValue()}
  //         </Text>
  //       </Box>
  //       <Box
  //         className="file__subtitle"
  //         fontSize="13px"
  //         lineHeight="1.38462"
  //         fontWeight="500"
  //         color="#b2b3BD"
  //         textDecoration={
  //           row.row.original.status == 3 ? "line-through" : "none"
  //         }
  //       >
  //         {row.row.original.subjudul}
  //       </Box>
  //     </Box>
  //   ),
  //   filterFn: "fuzzy",
  //   sortingFn: fuzzySort,
  // }
];

const dataRiwayatKelas: MatkulRiwayat[] = [
  {
    no: 1,
    mk: "Kalkulus",
    kelas: "A",
    tgl_ambil: "2021-03-10",
    jam_ambil: "12:30",
    tgl_proses: "2021-03-11",
    jam_proses: "15:00",
    pengambil: "Adi Nugraha",
    status: 1,
  },
  {
    no: 2,
    mk: "Pemrograman Web",
    kelas: "B",
    tgl_ambil: "2021-03-12",
    jam_ambil: "10:30",
    tgl_proses: "2021-03-14",
    jam_proses: "16:00",
    pengambil: "Amalia Ramadhani",
    status: 2,
  },
  {
    no: 3,
    mk: "Basis Data",
    kelas: "C",
    tgl_ambil: "2021-03-15",
    jam_ambil: "13:30",
    tgl_proses: "2021-03-17",
    jam_proses: "11:00",
    pengambil: "Bima Amirudin",
    status: 3,
  },
  {
    no: 4,
    mk: "Struktur Data",
    kelas: "D",
    tgl_ambil: "2021-03-18",
    jam_ambil: "16:30",
    tgl_proses: "2021-03-20",
    jam_proses: "13:00",
    pengambil: "Cecep Putra",
    status: 4,
  },
  {
    no: 5,
    mk: "Sistem Operasi",
    kelas: "A",
    tgl_ambil: "2021-03-21",
    jam_ambil: "15:30",
    tgl_proses: "2021-03-23",
    jam_proses: "10:00",
    pengambil: "Danianti Hapsari",
    status: 5,
  },
  {
    no: 6,
    mk: "Algoritma",
    kelas: "B",
    tgl_ambil: "2021-03-24",
    jam_ambil: "17:30",
    tgl_proses: "2021-03-26",
    jam_proses: "12:00",
    pengambil: "Eliza Rosana",
    status: 6,
  },
  {
    no: 7,
    mk: "Desain Web",
    kelas: "C",
    tgl_ambil: "2021-03-27",
    jam_ambil: "11:30",
    tgl_proses: "2021-03-29",
    jam_proses: "14:00",
    pengambil: "Faisal Nabil",
    status: 7,
  },
  {
    no: 8,
    mk: "Arsitektur Komputer",
    kelas: "D",
    tgl_ambil: "2021-03-30",
    jam_ambil: "18:30",
    tgl_proses: "2021-04-01",
    jam_proses: "16:00",
    pengambil: "Gani Yunus",
    status: 8,
  },
  {
    no: 9,
    mk: "Rekayasa Perangkat Lunak",
    kelas: "A",
    tgl_ambil: "2021-04-02",
    jam_ambil: "19:30",
    tgl_proses: "2021-04-04",
    jam_proses: "18:00",
    pengambil: "Hanan Adzkiya",
    status: 9,
  },
  {
    no: 10,
    mk: "Teknologi Jaringan",
    kelas: "B",
    tgl_ambil: "2021-04-05",
    jam_ambil: "12:30",
    tgl_proses: "2021-04-07",
    jam_proses: "11:00",
    pengambil: "Ibrahim Sanjaya",
    status: 10,
  },
];
export { dataRiwayatKelas, kolomTabelRiwayatKelas };

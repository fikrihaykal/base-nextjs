import { DangerSubtleButton } from "@/components/atoms/Buttons/DangerButton";
import { PrimarySubtleButton } from "@/components/atoms/Buttons/PrimaryButton";
import {
  CloseOutlineIconMade,
  RefreshOutlineIconMade,
  TrashOutlineIconMade,
} from "@/components/atoms/IconsMade";
import ModalContext from "@/providers/ModalProvider";
import { MatkulRencanaStudi } from "@/types/mk-rencanastudi";
import { MatkulRiwayat } from "@/types/mk-riwayat";
import { fuzzySort } from "@/utils/table";
import {
  Text,
  Box,
  useColorMode,
  Tooltip,
  Center,
  Badge,
} from "@chakra-ui/react";
import { ColumnDef } from "@tanstack/table-core";
import { useContext } from "react";

const kolomTabelRencanaStudi: ColumnDef<MatkulRencanaStudi, any>[] = [
  {
    accessorFn: (row) => row.kelas,
    id: "kelas",
    header: "Kelas",
    footer: (props) => props.column.id,
    cell: (row) => (
      <Box className="file__detail">
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
            fontSize="16px"
            lineHeight="1.1875"
            fontWeight="550"
            _groupHover={{
              color: "#008fff",
            }}
          >
            {row.row.original.mk} ({row.row.original.kelas})
          </Text>
        </Box>
        <Box
          className="file__subtitle"
          fontSize="13px"
          lineHeight="1.38462"
          fontWeight="500"
          color="gray"
        >
          IF9382983 • Semester 3 (saat ini)
        </Box>
      </Box>
    ),
    filterFn: "fuzzy",
    sortingFn: fuzzySort,
  },
  {
    accessorFn: (row) => row.sks,
    id: "sks",
    header: "SKS",
    footer: (props) => props.column.id,
    cell: (row) => {
      const { colorMode } = useColorMode();
      return <Text variant="tabletext">{row.getValue()}</Text>;
    },
    filterFn: "fuzzy",
    sortingFn: fuzzySort,
  },
  {
    accessorFn: (row) => "jadwal",
    id: "jadwal",
    header: "Jadwal",
    footer: (props) => props.column.id,
    cell: (row) => {
      const { colorMode } = useColorMode();
      return (
        <Box>
          <Text variant="tabletext" mb="4px">
            Senin
          </Text>
          <Box
            className="file__subtitle"
            fontSize="13px"
            lineHeight="1.38462"
            fontWeight="500"
            color="gray"
          >
            18.00-20.00
          </Box>
        </Box>
      );
    },
    filterFn: "fuzzy",
    sortingFn: fuzzySort,
  },
  {
    accessorFn: (row) => row.alih_kredit,
    id: "alihkredit",
    header: "Alih Kredit",
    footer: (props) => props.column.id,
    cell: (row) => {
      const { colorMode } = useColorMode();
      return (
        <Box>
          {row.row.original.alih_kredit == 1 ? (
            <Text variant="tabletext">Ya</Text>
          ) : (
            <Text variant="tabletext">Tidak</Text>
          )}
        </Box>
      );
    },
    filterFn: "fuzzy",
    sortingFn: fuzzySort,
  },
  {
    accessorFn: (row) => row.dosen,
    id: "dosen",
    header: "Dosen",
    footer: (props) => props.column.id,
    cell: (row) => {
      const { colorMode } = useColorMode();
      return <Text variant="tabletext">{row.row.original.dosen}</Text>;
    },
    filterFn: "fuzzy",
    sortingFn: fuzzySort,
  },
  {
    id: "aksi",
    header: "",
    footer: (props) => props.column.id,
    cell: (row) => {
      const { colorMode } = useColorMode();
      const { setIsModalActive } = useContext(ModalContext);
      return (
        <Tooltip label="Hapus">
          <Center>
            <DangerSubtleButton
              onClick={() => setIsModalActive(true)}
              isLoading={false}
              minW="10px"
            >
              <TrashOutlineIconMade fontSize="20px" />
            </DangerSubtleButton>
          </Center>
        </Tooltip>
      );
    },
  },
];

const dataRencanaStudi: MatkulRencanaStudi[] = [
  {
    mk: "Struktur Data",
    kelas: "C",
    sks: 3,
    alih_kredit: 0,
    dosen: "Sri Marini, S.Kom., M.Kom.",
  },
  {
    mk: "Pemrograman Berorientasi Objek",
    kelas: "D",
    sks: 4,
    alih_kredit: 1,
    dosen: "Umak Surya, S.Kom., M.T.",
  },
  {
    mk: "Rekayasa Perangkat Lunak",
    kelas: "B",
    sks: 2,
    alih_kredit: 0,
    dosen: "Kamilia Ayu, S.Kom., M.T.",
  },
  {
    mk: "Pengantar Teknologi Kecerdasan Buatan",
    kelas: "A",
    sks: 1,
    alih_kredit: 1,
    dosen: "Ivan Aditama, S.Kom., M.T.",
  },
  {
    mk: "Basis Data",
    kelas: "E",
    sks: 3,
    alih_kredit: 0,
    dosen: "Wulan Luthfiah, S.Kom., M.T.",
  },
];

const kolomTabelRiwayatKelas: ColumnDef<MatkulRiwayat, any>[] = [
  {
    accessorFn: (row) => row.kelas,
    id: "kelas",
    header: "Kelas",
    footer: (props) => props.column.id,
    cell: (row) => (
      <Box className="file__detail">
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
            fontSize="16px"
            lineHeight="1.1875"
            fontWeight="550"
            _groupHover={{
              color: "#008fff",
            }}
          >
            {row.row.original.mk} ({row.row.original.kelas})
          </Text>
        </Box>
        <Box
          className="file__subtitle"
          fontSize="13px"
          lineHeight="1.38462"
          fontWeight="500"
          color="gray"
        >
          IF9382983 • Semester 3 (saat ini)
        </Box>
      </Box>
    ),
    filterFn: "fuzzy",
    sortingFn: fuzzySort,
  },
  {
    accessorFn: (row) => row.tgl_ambil,
    id: "diambil",
    header: "Diambil",
    footer: (props) => props.column.id,
    cell: (row) => {
      const { colorMode } = useColorMode();
      return (
        <Box>
          <Text variant="tabletext" mb="6px">
            {row.getValue()} {row.row.original.jam_ambil}
          </Text>
          <Text
            fontSize="13px"
            fontWeight="500"
            variant="tabletext"
            color="gray"
          >
            oleh {row.row.original.pengambil}
          </Text>
        </Box>
      );
    },
    filterFn: "fuzzy",
    sortingFn: fuzzySort,
  },
  {
    accessorFn: (row) => row.tgl_proses,
    id: "diproses",
    header: "Diproses",
    footer: (props) => props.column.id,
    cell: (row) => {
      const { colorMode } = useColorMode();
      return (
        <Box>
          {row.row.original.status == 1 ? (
            <Text
              fontSize="14px"
              fontWeight="500"
              variant="tabletext"
              color="gray"
            >
              Sedang diproses
            </Text>
          ) : (
            <Text variant="tabletext">
              {row.getValue()} {row.row.original.jam_proses}
            </Text>
          )}
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
      const { colorMode } = useColorMode();
      return (
        <Box>
          {row.row.original.status == 1 ? (
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
          ) : row.row.original.status === 2 ? (
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
          ) : row.row.original.status === 3 ? (
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
          ) : row.row.original.status === 4 ? (
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
        </Box>
      );
    },
    filterFn: "fuzzy",
    sortingFn: fuzzySort,
  },
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
    status: 3,
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
    mk: "Struktur Data",
    kelas: "D",
    tgl_ambil: "2021-03-18",
    jam_ambil: "16:30",
    tgl_proses: "2021-03-20",
    jam_proses: "13:00",
    pengambil: "Cecep Putra",
    status: 1,
  },
  {
    no: 4,
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
    no: 5,
    mk: "Sistem Operasi",
    kelas: "A",
    tgl_ambil: "2021-03-21",
    jam_ambil: "15:30",
    tgl_proses: "2021-03-23",
    jam_proses: "10:00",
    pengambil: "Danianti Hapsari",
    status: 2,
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
    status: 3,
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
    status: 4,
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
    status: 2,
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
    status: 1,
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
    status: 2,
  },
  {
    no: 11,
    mk: "Teknologi Jaringan",
    kelas: "B",
    tgl_ambil: "2021-04-05",
    jam_ambil: "12:30",
    tgl_proses: "2021-04-07",
    jam_proses: "11:00",
    pengambil: "Ibrahim Sanjaya",
    status: 5,
  },
];

export {
  dataRencanaStudi,
  kolomTabelRencanaStudi,
  dataRiwayatKelas,
  kolomTabelRiwayatKelas,
};

import { DangerSubtleButton } from "@/components/customs/Buttons/DangerButton";
import { PrimarySubtleButton } from "@/components/customs/Buttons/PrimaryButton";
import {
  AlertCircleSolidIconMade,
  CheckmarkCircleSolidIconMade,
  ChevronDownOutlineIconMade,
  ChevronUpOutlineIconMade,
  CircleOutlineIconMade,
  CloseCircleSolidIconMade,
  CloseOutlineIconMade,
  CloseSolidIconMade,
  EditOutlineIconMade,
  MinusCircleSolidIconMade,
  RefreshOutlineIconMade,
  TrashCircleSolidIconMade,
  TrashOutlineIconMade,
  TrashSolidIconMade,
} from "@/components/atoms/IconsMade";
import ModalContext from "@/providers/ModalProvider";
import { DaftarMahasiswaFRS } from "@/types/mhs-list";
import { MatkulRencanaStudi } from "@/types/mk-rencanastudi";
import { MatkulRiwayat } from "@/types/mk-riwayat";
import { fuzzySort } from "@/utils/table";
import {
  Text,
  Box,
  useColorMode,
  Tooltip,
  Center,
  Flex,
  Popover,
  PopoverTrigger,
  Button,
  PopoverArrow,
  PopoverContent,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
  Portal,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { ColumnDef } from "@tanstack/table-core";
import { useContext } from "react";
import { IoWarning } from "react-icons/io5";
import NextLink from "next/link";
import { DaliOutlineButton } from "@/components/customs/Buttons/DaliButton";
import { SuccessTextBadge } from "@/components/customs/BadgeStatus/SuccessBadge";
import { WarningTextBadge } from "@/components/customs/BadgeStatus/WarningBadge";
import { NeutralTextBadge } from "@/components/customs/BadgeStatus/NeutralBadge";
import { DangerTextBadge } from "@/components/customs/BadgeStatus/DangerBadge";
import { DaftarKelasDepartemen } from "@/types/departemen";
import { PrimaryTextBadge } from "@/components/customs/BadgeStatus/PrimaryBadge";

const kolomTabelRencanaStudi: ColumnDef<MatkulRencanaStudi, any>[] = [
  {
    accessorFn: (row) => row.kelas,
    id: "kelas",
    header: "Kelas",
    footer: (props) => props.column.id,
    cell: (row) => {
      const { colorMode } = useColorMode();
      return (
        <Box className="file__detail">
          {row.row.original.kelas === "E" ? (
            <PrimaryTextBadge mb="8px">Mata kuliah paket</PrimaryTextBadge>
          ) : null}
          <Box display="flex" flexWrap="wrap">
            <Text
              variant="tabletitle"
              mb="9px"
              fontSize="16px"
              lineHeight="1.1875"
              fontWeight={600}
            >
              {row.row.original.mk} ({row.row.original.kelas})
            </Text>
            {row.row.original.kelas === "B" ? (
              <Tooltip
                hasArrow
                label="Pengambilan mata kuliah melanggar prasyarat"
              >
                <Box
                  color={colorMode == "light" ? "yellow.500" : "yellow.600"}
                  ml="8px"
                >
                  <IoWarning fontSize="20px" />
                </Box>
              </Tooltip>
            ) : null}
          </Box>
          <Text
            fontSize="13px"
            lineHeight="1.38462"
            fontWeight={500}
            color="gray"
          >
            IF9382983 • Semester 3 (saat ini)
          </Text>
        </Box>
      );
    },
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
        <>
          {row.row.original.kelas === "C" ? (
            <Menu>
              {({ isOpen }) => (
                <>
                  <MenuButton
                    cursor="pointer"
                    color={colorMode == "light" ? "blue.500" : "#007FEB"}
                  >
                    <Box display="flex" alignItems="center" gap={2}>
                      <Text fontSize="14px" fontWeight={600}>
                        2 jadwal
                      </Text>

                      <ChevronDownOutlineIconMade
                        fontSize="16px"
                        mt={!isOpen ? "2px" : "0px"}
                        transition="transform 0.3s ease"
                        transform={!isOpen ? "rotate(0deg)" : "rotate(-180deg)"}
                      />
                    </Box>
                  </MenuButton>
                  <MenuList
                    border={
                      colorMode == "light"
                        ? "1px solid #e4e4e4"
                        : "1px solid #333333"
                    }
                    boxShadow={
                      colorMode == "light"
                        ? "0 4px 16px rgba(227, 230, 236, 0.4)"
                        : "0 4px 24px rgba(0, 0, 0, 0.15)"
                    }
                    p="24px"
                    borderRadius="24px"
                    defaultChecked={false}
                    bg={colorMode == "light" ? "#fff" : "#222222"}
                  >
                    <Text fontWeight={600} variant="tabletext">
                      Jadwal pada kelas ini
                    </Text>
                    <Box
                      mt="16px"
                      pt="16px"
                      borderTop="1px solid"
                      borderTopColor={
                        colorMode == "light" ? "gray.100" : "gray.800"
                      }
                    >
                      <Text variant="tabletext">Senin</Text>
                      <Box
                        className="file__subtitle"
                        fontSize="13px"
                        lineHeight="1.38462"
                        fontWeight={500}
                        color="gray"
                        mt="4px"
                      >
                        18.00-20.00
                      </Box>
                    </Box>
                    <Box
                      mt="16px"
                      pt="16px"
                      borderTop="1px solid"
                      borderTopColor={
                        colorMode == "light" ? "gray.100" : "gray.800"
                      }
                    >
                      <Text variant="tabletext">Selasa</Text>
                      <Box
                        className="file__subtitle"
                        fontSize="13px"
                        lineHeight="1.38462"
                        fontWeight={500}
                        color="gray"
                        mt="4px"
                      >
                        18.00-20.00
                      </Box>
                    </Box>
                  </MenuList>
                </>
              )}
            </Menu>
          ) : (
            <Box>
              <Text variant="tabletext" mb="4px">
                Senin
              </Text>
              <Box
                className="file__subtitle"
                fontSize="13px"
                lineHeight="1.38462"
                fontWeight={500}
                color="gray"
              >
                18.00-20.00
              </Box>
            </Box>
          )}
        </>
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
      // return <Text variant="tabletext">{row.row.original.dosen}</Text>;
      return (
        <>
          {row.row.original.kelas === "C" ? (
            <Menu>
              {({ isOpen }) => (
                <>
                  <MenuButton
                    cursor="pointer"
                    color={colorMode == "light" ? "blue.500" : "#007FEB"}
                  >
                    <Box display="flex" alignItems="center" gap={2}>
                      <Text fontSize="14px" fontWeight={600}>
                        2 dosen
                      </Text>

                      <ChevronDownOutlineIconMade
                        fontSize="16px"
                        mt={!isOpen ? "2px" : "0px"}
                        transition="transform 0.3s ease"
                        transform={!isOpen ? "rotate(0deg)" : "rotate(-180deg)"}
                      />
                    </Box>
                  </MenuButton>
                  <MenuList
                    border={
                      colorMode == "light"
                        ? "1px solid #e4e4e4"
                        : "1px solid #333333"
                    }
                    boxShadow={
                      colorMode == "light"
                        ? "0 4px 16px rgba(227, 230, 236, 0.4)"
                        : "0 4px 24px rgba(0, 0, 0, 0.15)"
                    }
                    p="24px"
                    borderRadius="24px"
                    defaultChecked={false}
                    bg={colorMode == "light" ? "#fff" : "#222222"}
                  >
                    <Text fontWeight={600} variant="tabletext">
                      Dosen pada kelas ini
                    </Text>
                    <Box
                      mt="16px"
                      pt="16px"
                      borderTop="1px solid"
                      borderTopColor={
                        colorMode == "light" ? "gray.100" : "gray.800"
                      }
                    >
                      <Text variant="tabletext">{row.getValue()}</Text>
                    </Box>
                    <Box
                      mt="16px"
                      pt="16px"
                      borderTop="1px solid"
                      borderTopColor={
                        colorMode == "light" ? "gray.100" : "gray.800"
                      }
                    >
                      <Text variant="tabletext">{row.getValue()}</Text>
                    </Box>
                  </MenuList>
                </>
              )}
            </Menu>
          ) : (
            <Box>
              <Text variant="tabletext" mb="4px">
                {row.getValue()}
              </Text>
            </Box>
          )}
        </>
      );
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
        <>
          {row.row.original.kelas === "E" ? (
            <Tooltip label="Mata kuliah paket tidak bisa didrop">
              <Center>
                <DaliOutlineButton
                  onClick={() => setIsModalActive(true)}
                  isLoading={false}
                  minW="10px"
                  color={colorMode == "light" ? "red.500" : "#B53F3F"}
                  isDisabled
                >
                  <TrashOutlineIconMade fontSize="20px" />
                </DaliOutlineButton>
              </Center>
            </Tooltip>
          ) : (
            <Tooltip label="Drop">
              <Center>
                <DaliOutlineButton
                  onClick={() => setIsModalActive(true)}
                  isLoading={false}
                  minW="10px"
                  color={colorMode == "light" ? "red.500" : "#B53F3F"}
                >
                  <TrashOutlineIconMade fontSize="20px" />
                </DaliOutlineButton>
              </Center>
            </Tooltip>
          )}
        </>
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
    cell: (row) => {
      const { colorMode } = useColorMode();
      return (
        <Box className="file__detail">
          <Box display="flex" flexWrap="wrap">
            <Text
              variant="tabletitle"
              mb="9px"
              fontSize="16px"
              lineHeight="1.1875"
              fontWeight={600}
            >
              {row.row.original.mk} ({row.row.original.kelas})
            </Text>
            {row.row.original.kelas === "D" ? (
              <Tooltip
                hasArrow
                label="Pengambilan mata kuliah melanggar prasyarat"
              >
                <Box
                  color={colorMode == "light" ? "yellow.500" : "yellow.600"}
                  ml="8px"
                >
                  <IoWarning fontSize="20px" />
                </Box>
              </Tooltip>
            ) : null}
          </Box>
          <Text
            fontSize="13px"
            lineHeight="1.38462"
            fontWeight={500}
            color="gray"
          >
            IF9382983 • Semester 3 (saat ini)
          </Text>
        </Box>
      );
    },
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
          <Text fontSize="13px" fontWeight={500} color="gray">
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
            <Text fontSize="14px" fontWeight={500} color="gray">
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
    id: "status_riwayat",
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
                  <DaliOutlineButton isLoading={false} minW="10px">
                    <RefreshOutlineIconMade fontSize="20px" />
                  </DaliOutlineButton>
                </Center>
              </Tooltip>
              <Tooltip label="Batalkan">
                <Center>
                  <DaliOutlineButton
                    isLoading={false}
                    minW="10px"
                    color={colorMode == "light" ? "red.500" : "#B53F3F"}
                  >
                    <CloseOutlineIconMade fontSize="20px" />
                  </DaliOutlineButton>
                </Center>
              </Tooltip>
            </Box>
          ) : row.row.original.status === 2 ? (
            <SuccessTextBadge>
              <CheckmarkCircleSolidIconMade fontSize="16px" />
              <Text>Berhasil diambil</Text>
            </SuccessTextBadge>
          ) : row.row.original.status === 3 ? (
            <DangerTextBadge>
              <MinusCircleSolidIconMade fontSize="16px" />
              <Text>Kelas penuh</Text>
            </DangerTextBadge>
          ) : row.row.original.status === 4 ? (
            <DangerTextBadge>
              <CloseCircleSolidIconMade fontSize="16px" />
              <Text>Dibatalkan</Text>
            </DangerTextBadge>
          ) : row.row.original.status === 5 ? (
            <DangerTextBadge>
              <TrashCircleSolidIconMade fontSize="16px" />
              <Text>Didropp</Text>
            </DangerTextBadge>
          ) : (
            <WarningTextBadge>
              <AlertCircleSolidIconMade fontSize="16px" />
              <Text>Ada kesalahan</Text>
            </WarningTextBadge>
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
    status: 5,
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

const kolomTabelMahasiswaFRS: ColumnDef<DaftarMahasiswaFRS, any>[] = [
  {
    accessorFn: (row) => row.nama,
    id: "mahasiswa",
    header: "Mahasiswa",
    footer: (props) => props.column.id,
    cell: (row) => (
      <Box className="file__detail">
        <Text
          variant="tabletitle"
          mb="9px"
          fontSize="16px"
          lineHeight="1.1875"
          fontWeight={600}
        >
          {row.row.original.nama}
        </Text>
        <Text
          fontSize="13px"
          lineHeight="1.38462"
          fontWeight={500}
          color="gray"
        >
          {row.row.original.nrp}
        </Text>
      </Box>
    ),
    filterFn: "fuzzy",
    sortingFn: fuzzySort,
  },
  {
    accessorFn: (row) => row.semester,
    id: "semester",
    header: "Semester",
    footer: (props) => props.column.id,
    cell: (row) => {
      const { colorMode } = useColorMode();
      return <Text variant="tabletext">{row.getValue()}</Text>;
    },
    filterFn: "fuzzy",
    sortingFn: fuzzySort,
  },
  {
    accessorFn: (row) => row.sks_tempuh,
    id: "sks_tempuh",
    header: "SKS tempuh",
    footer: (props) => props.column.id,
    cell: (row) => {
      const { colorMode } = useColorMode();
      return <Text variant="tabletext">{row.getValue()}</Text>;
    },
    filterFn: "fuzzy",
    sortingFn: fuzzySort,
  },
  {
    accessorFn: (row) => row.sks_lulus,
    id: "sks_lulus",
    header: "SKS lulus",
    footer: (props) => props.column.id,
    cell: (row) => {
      const { colorMode } = useColorMode();
      return <Text variant="tabletext">{row.getValue()}</Text>;
    },
    filterFn: "fuzzy",
    sortingFn: fuzzySort,
  },
  {
    accessorFn: (row) => row.mk_wajib,
    id: "mk_wajib",
    header: "Wajib diambil",
    footer: (props) => props.column.id,
    cell: (row) => {
      const { colorMode } = useColorMode();
      return <Text variant="tabletext">{row.getValue()}</Text>;
    },
    filterFn: "fuzzy",
    sortingFn: fuzzySort,
  },
  {
    accessorFn: (row) => row.mk_mengulang,
    id: "mk_mengulang",
    header: "Mengulang",
    footer: (props) => props.column.id,
    cell: (row) => {
      const { colorMode } = useColorMode();
      return <Text variant="tabletext">{row.getValue()}</Text>;
    },
    filterFn: "fuzzy",
    sortingFn: fuzzySort,
  },
  {
    accessorFn: (row) => row.mk_melanggar,
    id: "mk_melanggar",
    header: "Melanggar",
    footer: (props) => props.column.id,
    cell: (row) => {
      const { colorMode } = useColorMode();
      return <Text variant="tabletext">{row.getValue()}</Text>;
    },
    filterFn: "fuzzy",
    sortingFn: fuzzySort,
  },
  {
    accessorFn: (row) => row.mk_ekivalensi,
    id: "mk_ekivalensi",
    header: "Ekivalensi",
    footer: (props) => props.column.id,
    cell: (row) => {
      const { colorMode } = useColorMode();
      return <Text variant="tabletext">{row.getValue()}</Text>;
    },
    filterFn: "fuzzy",
    sortingFn: fuzzySort,
  },
  {
    accessorFn: (row) => row.status_frs,
    id: "status_frs",
    header: "Status FRS",
    footer: (props) => props.column.id,
    cell: (row) => {
      const { colorMode } = useColorMode();
      return (
        <Box>
          {row.row.original.status_frs == 0 ? (
            <NeutralTextBadge>
              <MinusCircleSolidIconMade fontSize="16px" />
              <Text>Cuti semester</Text>
            </NeutralTextBadge>
          ) : row.row.original.status_frs === 1 ? (
            <WarningTextBadge>
              <AlertCircleSolidIconMade fontSize="16px" />
              <Text>Belum disetujui</Text>
            </WarningTextBadge>
          ) : row.row.original.status_frs === 2 ? (
            <SuccessTextBadge>
              <CheckmarkCircleSolidIconMade fontSize="16px" />
              <Text>Disetujui</Text>
            </SuccessTextBadge>
          ) : null}
        </Box>
      );
    },
    filterFn: "fuzzy",
    sortingFn: fuzzySort,
  },
];

const dataMahasiswaFRS: DaftarMahasiswaFRS[] = [
  {
    nama: "Budi Setiawan",
    nrp: "1234567890",
    semester: 5,
    sks_tempuh: 120,
    sks_lulus: 100,
    mk_wajib: 2,
    mk_mengulang: 1,
    mk_melanggar: 0,
    mk_ekivalensi: 3,
    status_frs: 2,
  },
  {
    nama: "Dewi Rahayu",
    nrp: "2345678901",
    semester: 3,
    sks_tempuh: 80,
    sks_lulus: 60,
    mk_wajib: 1,
    mk_mengulang: 2,
    mk_melanggar: 0,
    mk_ekivalensi: 1,
    status_frs: 0,
  },
  {
    nama: "Citra Sari",
    nrp: "3456789012",
    semester: 7,
    sks_tempuh: 140,
    sks_lulus: 120,
    mk_wajib: 3,
    mk_mengulang: 0,
    mk_melanggar: 2,
    mk_ekivalensi: 2,
    status_frs: 1,
  },
  {
    nama: "Eko Prabowo",
    nrp: "4567890123",
    semester: 1,
    sks_tempuh: 30,
    sks_lulus: 25,
    mk_wajib: 0,
    mk_mengulang: 1,
    mk_melanggar: 1,
    mk_ekivalensi: 0,
    status_frs: 2,
  },
  {
    nama: "Fitri Indah",
    nrp: "5678901234",
    semester: 5,
    sks_tempuh: 110,
    sks_lulus: 95,
    mk_wajib: 2,
    mk_mengulang: 0,
    mk_melanggar: 3,
    mk_ekivalensi: 1,
    status_frs: 2,
  },
  {
    nama: "Gunawan Santoso",
    nrp: "6789012345",
    semester: 3,
    sks_tempuh: 70,
    sks_lulus: 50,
    mk_wajib: 1,
    mk_mengulang: 2,
    mk_melanggar: 0,
    mk_ekivalensi: 2,
    status_frs: 1,
  },
  {
    nama: "Hana Putri",
    nrp: "7890123456",
    semester: 7,
    sks_tempuh: 130,
    sks_lulus: 110,
    mk_wajib: 3,
    mk_mengulang: 1,
    mk_melanggar: 1,
    mk_ekivalensi: 1,
    status_frs: 2,
  },
  {
    nama: "Irfan Hermawan",
    nrp: "8901234567",
    semester: 1,
    sks_tempuh: 25,
    sks_lulus: 20,
    mk_wajib: 0,
    mk_mengulang: 0,
    mk_melanggar: 2,
    mk_ekivalensi: 3,
    status_frs: 2,
  },
  {
    nama: "Joko Susilo",
    nrp: "9012345678",
    semester: 5,
    sks_tempuh: 130,
    sks_lulus: 110,
    mk_wajib: 2,
    mk_mengulang: 2,
    mk_melanggar: 0,
    mk_ekivalensi: 1,
    status_frs: 1,
  },
  {
    nama: "Kartika Wulandari",
    nrp: "0123456789",
    semester: 3,
    sks_tempuh: 90,
    sks_lulus: 70,
    mk_wajib: 1,
    mk_mengulang: 1,
    mk_melanggar: 1,
    mk_ekivalensi: 0,
    status_frs: 2,
  },
  {
    nama: "Luthfi Rahman",
    nrp: "1234509876",
    semester: 7,
    sks_tempuh: 150,
    sks_lulus: 140,
    mk_wajib: 3,
    mk_mengulang: 0,
    mk_melanggar: 3,
    mk_ekivalensi: 2,
    status_frs: 2,
  },
  {
    nama: "Mia Nurul",
    nrp: "2345098765",
    semester: 1,
    sks_tempuh: 40,
    sks_lulus: 35,
    mk_wajib: 0,
    mk_mengulang: 1,
    mk_melanggar: 0,
    mk_ekivalensi: 1,
    status_frs: 1,
  },
  {
    nama: "Nanda Pratama",
    nrp: "3450987654",
    semester: 5,
    sks_tempuh: 100,
    sks_lulus: 85,
    mk_wajib: 2,
    mk_mengulang: 2,
    mk_melanggar: 2,
    mk_ekivalensi: 0,
    status_frs: 2,
  },
  {
    nama: "Oktavia Sari",
    nrp: "4509876543",
    semester: 3,
    sks_tempuh: 75,
    sks_lulus: 55,
    mk_wajib: 1,
    mk_mengulang: 0,
    mk_melanggar: 1,
    mk_ekivalensi: 3,
    status_frs: 2,
  },
  {
    nama: "Pandu Setiawan",
    nrp: "5098765432",
    semester: 7,
    sks_tempuh: 140,
    sks_lulus: 120,
    mk_wajib: 3,
    mk_mengulang: 1,
    mk_melanggar: 0,
    mk_ekivalensi: 2,
    status_frs: 1,
  },
];

const kolomTabelDaftarKelasDepartemen: ColumnDef<DaftarKelasDepartemen, any>[] =
  [
    {
      accessorFn: (row) => row.kelas,
      id: "kelas",
      header: "Kelas",
      footer: (props) => props.column.id,
      cell: (row) => {
        const { colorMode } = useColorMode();
        return (
          <Box className="file__detail">
            <Text
              variant="tabletitle"
              mb="9px"
              fontSize="16px"
              lineHeight="1.1875"
              fontWeight={600}
            >
              {row.row.original.mk} ({row.row.original.kelas})
            </Text>
            <Text
              mb="6px"
              fontSize="13px"
              lineHeight="1.38462"
              fontWeight={500}
              color="gray"
            >
              {row.row.original.kode_mk} • Semester 3 (saat ini)
            </Text>
            <Text
              fontSize="14px"
              fontWeight={700}
              color="blue"
              cursor="pointer"
            >
              Lihat detail
            </Text>
          </Box>
        );
      },
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
        return <Text variant="tabletext">{row.row.original.sks}</Text>;
      },
      filterFn: "fuzzy",
      sortingFn: fuzzySort,
    },
    {
      accessorFn: (row) => row.peserta_kuota,
      id: "kuota",
      header: "Kuota",
      footer: (props) => props.column.id,
      cell: (row) => {
        const { colorMode } = useColorMode();
        return (
          <Box>
            <Text variant="tabletext" mb="6px">
              {row.getValue()}
            </Text>
            <Text fontSize="13px" fontWeight={500} color="gray">
              terisi {row.row.original.peserta_isi} orang
            </Text>
          </Box>
        );
      },
      filterFn: "fuzzy",
      sortingFn: fuzzySort,
    },
    {
      accessorFn: (row) => row.dosen,
      id: "dosen_jadwal",
      header: "Dosen & Jadwal",
      footer: (props) => props.column.id,
      cell: (row) => {
        const { colorMode } = useColorMode();
        return (
          <Box>
            <Text variant="tabletext" mb="6px">
              {row.getValue()}
            </Text>
            <Text fontSize="13px" fontWeight={500} color="gray" mb="4px">
              {row.row.original.jadwal_hari},{" "}
              {row.row.original.jadwal_jam_mulai} -{" "}
              {row.row.original.jadwal_jam_akhir}
            </Text>
            <Text fontSize="13px" fontWeight={500} color="gray">
              di ruang {row.row.original.jadwal_ruang}
            </Text>
          </Box>
        );
      },
      filterFn: "fuzzy",
      sortingFn: fuzzySort,
    },

    // {
    //   id: "tindakan",
    //   header: "Tindakan",
    //   footer: (props) => props.column.id,
    //   cell: (row) => {
    //     const { colorMode } = useColorMode();
    //     return (
    //       <Box gap={3} display="inline-flex" w="auto">
    //         <Tooltip label="Edit">
    //           <Center>
    //             <DaliOutlineButton isLoading={false} minW="10px">
    //               <EditOutlineIconMade fontSize="20px" />
    //             </DaliOutlineButton>
    //           </Center>
    //         </Tooltip>
    //         <Tooltip label="Hapus">
    //           <Center>
    //             <DaliOutlineButton
    //               isLoading={false}
    //               minW="10px"
    //               color={colorMode == "light" ? "red.500" : "#B53F3F"}
    //             >
    //               <TrashOutlineIconMade fontSize="20px" />
    //             </DaliOutlineButton>
    //           </Center>
    //         </Tooltip>
    //       </Box>
    //     );
    //   },
    // },
  ];

const dataKelasDepartemen: DaftarKelasDepartemen[] = [
  {
    kode_mk: "IF123456",
    mk: "Pemrograman Dasar",
    kelas: "A",
    sks: 3,
    peserta_kuota: 30,
    peserta_isi: 25,
    dosen: "Dr. Budi Santoso, M.Sc.",
    jadwal_hari: "Senin",
    jadwal_jam_mulai: "08.00",
    jadwal_jam_akhir: "10.00",
    jadwal_ruang: "101",
  },
  {
    kode_mk: "IF789012",
    mk: "Struktur Data",
    kelas: "B",
    sks: 4,
    peserta_kuota: 35,
    peserta_isi: 28,
    dosen: "Prof. Dr. Andi Wijaya, S.T., M.T.",
    jadwal_hari: "Selasa",
    jadwal_jam_mulai: "10.30",
    jadwal_jam_akhir: "12.30",
    jadwal_ruang: "102",
  },
  {
    kode_mk: "IF345678",
    mk: "Basis Data",
    kelas: "C",
    sks: 3,
    peserta_kuota: 40,
    peserta_isi: 36,
    dosen: "Dra. Cindy Kurniawati, M.Kom.",
    jadwal_hari: "Rabu",
    jadwal_jam_mulai: "13.00",
    jadwal_jam_akhir: "15.00",
    jadwal_ruang: "103",
  },
  {
    kode_mk: "IF901234",
    mk: "Sistem Operasi",
    kelas: "D",
    sks: 4,
    peserta_kuota: 38,
    peserta_isi: 32,
    dosen: "Prof. Dr. Ir. Slamet Riyadi, M.Sc.",
    jadwal_hari: "Kamis",
    jadwal_jam_mulai: "15.30",
    jadwal_jam_akhir: "17.30",
    jadwal_ruang: "104",
  },
  {
    kode_mk: "IF567890",
    mk: "Algoritma dan Pemrograman Lanjut",
    kelas: "A",
    sks: 3,
    peserta_kuota: 32,
    peserta_isi: 30,
    dosen: "Prof. Dr. Ida Bagus Putu Perdana, S.T., M.T.",
    jadwal_hari: "Jumat",
    jadwal_jam_mulai: "09.30",
    jadwal_jam_akhir: "11.30",
    jadwal_ruang: "105",
  },
  {
    kode_mk: "IF234567",
    mk: "Jaringan Komputer",
    kelas: "B",
    sks: 4,
    peserta_kuota: 36,
    peserta_isi: 34,
    dosen: "Dr. Ni Luh Putu Artini, S.Kom., M.Kom.",
    jadwal_hari: "Senin",
    jadwal_jam_mulai: "13.30",
    jadwal_jam_akhir: "15.30",
    jadwal_ruang: "106",
  },
  {
    kode_mk: "IF345678",
    mk: "Interaksi Manusia dan Komputer",
    kelas: "C",
    sks: 3,
    peserta_kuota: 40,
    peserta_isi: 37,
    dosen: "Dr. I Gusti Ngurah Agung Trisna, S.T., M.T.",
    jadwal_hari: "Rabu",
    jadwal_jam_mulai: "08.30",
    jadwal_jam_akhir: "10.30",
    jadwal_ruang: "107",
  },
  {
    kode_mk: "IF456789",
    mk: "Keamanan Sistem Informasi",
    kelas: "D",
    sks: 4,
    peserta_kuota: 39,
    peserta_isi: 38,
    dosen: "Drs. I Ketut Wijaya, M.Kom.",
    jadwal_hari: "Selasa",
    jadwal_jam_mulai: "14.00",
    jadwal_jam_akhir: "16.00",
    jadwal_ruang: "108",
  },
  {
    kode_mk: "IF567890",
    mk: "Pengembangan Aplikasi Web",
    kelas: "A",
    sks: 3,
    peserta_kuota: 30,
    peserta_isi: 27,
    dosen: "Prof. Dr. Ir. Ida Ayu Made Diastuti, M.T.",
    jadwal_hari: "Kamis",
    jadwal_jam_mulai: "10.00",
    jadwal_jam_akhir: "12.00",
    jadwal_ruang: "109",
  },
  {
    kode_mk: "IF234567",
    mk: "Manajemen Proyek TI",
    kelas: "B",
    sks: 4,
    peserta_kuota: 35,
    peserta_isi: 31,
    dosen: "Dr. I Putu Eka Widyadharma, S.T., M.T.",
    jadwal_hari: "Jumat",
    jadwal_jam_mulai: "14.30",
    jadwal_jam_akhir: "16.30",
    jadwal_ruang: "110",
  },
  {
    kode_mk: "IF345678",
    mk: "Data Mining",
    kelas: "C",
    sks: 3,
    peserta_kuota: 37,
    peserta_isi: 33,
    dosen: "Dra. Ni Nyoman Kerti Yasa, M.Kom.",
    jadwal_hari: "Senin",
    jadwal_jam_mulai: "11.00",
    jadwal_jam_akhir: "13.00",
    jadwal_ruang: "111",
  },
  {
    kode_mk: "IF901234",
    mk: "Artificial Intelligence",
    kelas: "D",
    sks: 4,
    peserta_kuota: 40,
    peserta_isi: 39,
    dosen: "Prof. Dr. I Gusti Ngurah Agung Trisna, S.T., M.T.",
    jadwal_hari: "Selasa",
    jadwal_jam_mulai: "09.00",
    jadwal_jam_akhir: "11.00",
    jadwal_ruang: "112",
  },
  {
    kode_mk: "IF567890",
    mk: "Pemrograman Mobile",
    kelas: "A",
    sks: 3,
    peserta_kuota: 32,
    peserta_isi: 30,
    dosen: "Dr. Ida Bagus Surya Manuaba, S.T., M.T.",
    jadwal_hari: "Rabu",
    jadwal_jam_mulai: "15.30",
    jadwal_jam_akhir: "17.30",
    jadwal_ruang: "113",
  },
  {
    kode_mk: "IF234567",
    mk: "E-Business",
    kelas: "B",
    sks: 4,
    peserta_kuota: 38,
    peserta_isi: 36,
    dosen: "Prof. Dr. Ida Ayu Made Diastuti, M.T.",
    jadwal_hari: "Kamis",
    jadwal_jam_mulai: "13.30",
    jadwal_jam_akhir: "15.30",
    jadwal_ruang: "114",
  },
  {
    kode_mk: "IF345678",
    mk: "Pemrosesan Citra Digital",
    kelas: "C",
    sks: 3,
    peserta_kuota: 35,
    peserta_isi: 34,
    dosen: "Drs. I Putu Eka Widyadharma, S.T., M.T.",
    jadwal_hari: "Jumat",
    jadwal_jam_mulai: "10.30",
    jadwal_jam_akhir: "12.30",
    jadwal_ruang: "115",
  },
  {
    kode_mk: "IF901234",
    mk: "Cloud Computing",
    kelas: "D",
    sks: 4,
    peserta_kuota: 39,
    peserta_isi: 37,
    dosen: "Dra. Ni Nyoman Kerti Yasa, M.Kom.",
    jadwal_hari: "Senin",
    jadwal_jam_mulai: "14.00",
    jadwal_jam_akhir: "16.00",
    jadwal_ruang: "116",
  },
  {
    kode_mk: "IF567890",
    mk: "Big Data Analytics",
    kelas: "A",
    sks: 3,
    peserta_kuota: 40,
    peserta_isi: 38,
    dosen: "Dr. Ida Bagus Putu Perdana, S.T., M.T.",
    jadwal_hari: "Selasa",
    jadwal_jam_mulai: "11.30",
    jadwal_jam_akhir: "13.30",
    jadwal_ruang: "117",
  },
  {
    kode_mk: "IF234567",
    mk: "Mobile App Development",
    kelas: "B",
    sks: 4,
    peserta_kuota: 37,
    peserta_isi: 35,
    dosen: "Prof. Dr. Andi Wijaya, S.T., M.T.",
    jadwal_hari: "Rabu",
    jadwal_jam_mulai: "08.00",
    jadwal_jam_akhir: "10.00",
    jadwal_ruang: "118",
  },
];

export {
  kolomTabelRencanaStudi,
  dataRencanaStudi,
  kolomTabelRiwayatKelas,
  dataRiwayatKelas,
  kolomTabelMahasiswaFRS,
  dataMahasiswaFRS,
  kolomTabelDaftarKelasDepartemen,
  dataKelasDepartemen,
};

import { DangerSubtleButton } from "@/components/atoms/Buttons/DangerButton";
import { SecondaryButton } from "@/components/atoms/Buttons/SecondaryButton";
import { SuccessSubtleButton } from "@/components/atoms/Buttons/SuccessButton";
import {
  CloseOutlineIconMade,
  RefreshOutlineIconMade,
} from "@/components/atoms/IconsMade";
import { MatkulRiwayat } from "@/types/mk-riwayat";
import { fuzzySort } from "@/utils/table";
import {
  Text,
  Box,
  Badge,
  useColorMode,
  Flex,
  Button,
  Tooltip,
  Link,
  Center,
} from "@chakra-ui/react";
import { ColumnDef } from "@tanstack/table-core";

const kolomTabelRiwayatKelas: ColumnDef<MatkulRiwayat, any>[] = [
  {
    accessorFn: (row) => row.mk,
    id: "mk",
    header: "Mata Kuliah",
    footer: (props) => props.column.id,
    cell: (row) => {
      return (
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
            >
              {row.getValue()} ({row.row.original.kelas})
            </Text>
          </Box>
          <Box
            className="file__subtitle"
            fontSize="13px"
            lineHeight="1.38462"
            fontWeight="500"
            color="#b2b3BD"
          >
            IF9382983
          </Box>
          {row.row.original.kelas == "C" ? (
            <Box fontSize="14px" fontWeight="500" color="orange" mt="6px">
              Pengambilan kelas melanggar prasyarat
            </Box>
          ) : (
            <></>
          )}
        </Box>
      );
    },
    filterFn: "fuzzy",
    sortingFn: fuzzySort,
  },
  {
    accessorFn: (row) => "3",
    id: "sks",
    header: "SKS",
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
          <Text fontSize="13px" fontWeight="500" color="gray" mt="9px">
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
          {row.row.original.status == 1 ? (
            <Text variant="tabletext">
              -
            </Text>
          ) : (
            <Text variant="tabletext">
              {row.getValue()} • {row.row.original.tgl_proses}
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
      return (
        <Box>
          {row.row.original.status == 1 ? (
            <Flex gap={3}>
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
            </Flex>
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
];

export default kolomTabelRiwayatKelas;

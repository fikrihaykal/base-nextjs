import { Libur } from "@/types/hari-libur";
import { fuzzySort } from "@/utils/table";
import { Box, Flex, Text } from "@chakra-ui/react";
import { ColumnDef } from "@tanstack/table-core";

const kolomTabelLibur: ColumnDef<Libur, any>[] = [
  {
    accessorFn: (row) => row.tanggal,
    id: "tanggal",
    header: "Tanggal",
    enableSorting: false,
    // footer: (props) => props.column.id,
    cell: (row) => {
      return (
        <Box py="-8px" minW="140px" pl="4px">
          <Text variant="tabletext">
            {new Date(row.row.original.tanggal).toLocaleDateString("id-ID", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </Text>
        </Box>
      );
    },
    filterFn: "includesString",
    sortingFn: fuzzySort,
  },
  {
    accessorFn: (row) => row.keterangan,
    id: "keterangan",
    header: "Keterangan",
    enableHiding: true,
    enableSorting: false,
    // footer: (props) => props.column.id,
    cell: (row) => {
      return (
        <Flex py="-8px" minW="90px">
          <Text variant="tabletext">{row.row.original.keterangan}</Text>
        </Flex>
      );
    },
    filterFn: "fuzzy",
    sortingFn: fuzzySort,
  },
  {
    accessorFn: (row) => row.jenis,
    id: "jenis",
    header: "Jenis",
    enableSorting: false,
    // footer: (props) => props.column.id,
    cell: (row) => {
      return (
        <Flex py="-8px" minW="90px">
          <Text variant="tabletext">{row.row.original.keterangan}</Text>
        </Flex>
      );
    },
    filterFn: "includesString",
    sortingFn: fuzzySort,
  },
];

export { kolomTabelLibur };

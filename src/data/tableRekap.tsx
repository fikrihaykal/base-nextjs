import { Absen } from "@/types/rekap-absen";
import { RencanaKerja } from "@/types/renker";
import { fuzzySort } from "@/utils/table";
import { Box, Flex, Link, Text, useColorMode } from "@chakra-ui/react";
import { ColumnDef } from "@tanstack/table-core";
import NextLink from "next/link";

const kolomTabelAbsen: ColumnDef<Absen, any>[] = [
  {
    accessorFn: (row) => row.tanggal,
    id: "tanggal",
    header: "Tanggal",
    footer: (props) => props.column.id,
    cell: (row) => {
      return (
        <Flex py="30px" minW="180px" pl="4px">
          <Text variant="tabletext">
            {/* {new Date(row.original.tanggal).toLocaleDateString("id-ID", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })} */}
            {row.getValue()}
          </Text>
        </Flex>
      );
    },
    filterFn: "includesString",
    sortingFn: fuzzySort,
  },
  {
    accessorFn: (row) => row.hari,
    id: "hari",
    header: "Hari",
    enableHiding: true,
    footer: (props) => props.column.id,
    cell: (row) => {
      return (
        <Flex py="30px" minW="90px">
          {/* <Text variant="tabletext">
            {new Date(row.row.original.tanggal).toLocaleDateString("id-ID", {
              weekday: "long",
            })}
          </Text> */}
          {row.getValue()}
        </Flex>
      );
    },
    filterFn: "fuzzy",
    sortingFn: fuzzySort,
  },
  {
    accessorFn: (row) => row.waktumulai,
    id: "waktumasuk",
    header: "Waktu Masuk",
    footer: (props) => props.column.id,
    cell: (row) => {
      return (
        <Text
          color={
            new Date(row.getValue()).getHours() > 7 ||
            new Date(row.getValue()).getMinutes() > 45
              ? "red"
              : "#141414"
          }
        >
          {/* {("0" + new Date(row.getValue()).getHours().toString()).slice(-2) +
            ":" +
            ("0" + new Date(row.getValue()).getMinutes().toString()).slice(-2)} */}
          {row.getValue()}
        </Text>
      );
    },
    filterFn: "includesString",
    sortingFn: fuzzySort,
  },
  {
    accessorFn: (row) => row.waktupulang,
    id: "waktupulang",
    header: "Waktu Pulang",
    footer: (props) => props.column.id,
    cell: (row) => {
      return (
        <Text variant="tabletext">
          {/* {("0" + new Date(row.getValue()).getHours().toString()).slice(-2) +
            ":" +
            ("0" + new Date(row.getValue()).getMinutes().toString()).slice(-2)} */}
          {row.getValue()}
        </Text>
      );
    },
    filterFn: "fuzzy",
    sortingFn: fuzzySort,
  },
  {
    accessorFn: (row) => row.durasikerja,
    id: "durasikerja",
    header: "Durasi Kerja",
    footer: (props) => props.column.id,
    cell: (row) => {
      return (
        <Text variant="tabletext">
          {/* {Math.floor(
            Math.round(
              (new Date(row.row.original.waktupulang).getTime() -
                new Date(row.row.original.waktumulai).getTime()) /
                60000
            ) / 60
          ).toString() +
            " Jam " +
            Math.floor(
              Math.round(
                (new Date(row.row.original.waktupulang).getTime() -
                  new Date(row.row.original.waktumulai).getTime()) /
                  60000
              ) % 60
            ).toString() +
            " Menit"} */}
          {row.getValue()}
        </Text>
      );
    },
    filterFn: "fuzzy",
    sortingFn: fuzzySort,
  },
  {
    accessorFn: (row) => row.keterangan,
    id: "keterangan",
    header: "Keterangan",
    footer: (props) => props.column.id,
    cell: (row) => {
      const dur = Math.round(
        (new Date(row.row.original.waktupulang).getTime() -
          new Date(row.row.original.waktumulai).getTime()) /
          60000
      );
      const diff = 510 - dur;
      const diffH = Math.round(diff / 60);
      const diffM = diff % 60;
      return (
        <Text variant="tabletext">
          {/* {dur < 510
            ? "Durasi kerja kurang " + diffH + " Jam " + diffM + " Menit"
            : ""} */}
          {row.getValue()}
        </Text>
      );
    },
    filterFn: "fuzzy",
    sortingFn: fuzzySort,
  },
];

const dataAbsen: Absen[] = [
  {
    id: 1,
    tanggal: new Date("11/20/2023 07:24:00"),
    hari: new Date("11/20/2023 07:24:00").getDay(),
    waktumulai: new Date("11/20/2023 07:24:00"),
    waktupulang: new Date("11/20/2023 16:01:00"),
    durasikerja: 8.3,
  },
  {
    id: 2,
    tanggal: new Date("11/21/2023 07:26:00"),
    hari: new Date("11/21/2023 07:26:00").getDay(),
    waktumulai: new Date("11/21/2023 07:26:00"),
    waktupulang: new Date("11/21/2023 16:01:00"),
    durasikerja: 8.3,
  },
  {
    id: 3,
    tanggal: new Date("11/22/2023 07:46:00"),
    hari: new Date("11/22/2023 07:24:00").getDay(),
    waktumulai: new Date("11/22/2023 07:06:00"),
    waktupulang: new Date("11/22/2023 16:31:00"),
    durasikerja: 8.3,
  },
  {
    id: 4,
    tanggal: new Date("11/23/2023 07:46:00"),
    hari: new Date("11/23/2023 07:24:00").getDay(),
    waktumulai: new Date("11/23/2023 07:54:00"),
    waktupulang: new Date("11/23/2023 16:47:00"),
    durasikerja: 8.3,
  },
  {
    id: 5,
    tanggal: new Date("11/24/2023 07:46:00"),
    hari: new Date("11/24/2023 07:24:00").getDay(),
    waktumulai: new Date("11/24/2023 07:56:00"),
    waktupulang: new Date("11/24/2023 16:03:00"),
    durasikerja: 8.3,
  },
  {
    id: 6,
    tanggal: new Date("10/24/2023 07:46:00"),
    hari: new Date("10/24/2023 07:24:00").getDay(),
    waktumulai: new Date("10/24/2023 07:56:00"),
    waktupulang: new Date("10/24/2023 16:03:00"),
    durasikerja: 8.3,
  },
];
export { dataAbsen, kolomTabelAbsen };

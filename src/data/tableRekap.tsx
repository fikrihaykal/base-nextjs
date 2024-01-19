import { DarkButton } from "@/components/atoms/Buttons/DarkButton";
import { SmOutlineButton } from "@/components/atoms/Buttons/SmOutlineBtn";
import { Absen } from "@/types/rekap-absen";
import { fuzzySort } from "@/utils/table";
import { Box, Flex, Text } from "@chakra-ui/react";
import { ColumnDef } from "@tanstack/table-core";
import _ from "lodash";

const kolomTabelAbsen: ColumnDef<Absen, any>[] = [
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
              month: "short",
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
    accessorFn: (row) => row.hari,
    id: "hari",
    header: "Hari",
    enableHiding: true,
    enableSorting: false,
    // footer: (props) => props.column.id,
    cell: (row) => {
      return (
        <Flex py="-8px" minW="90px">
          <Text variant="tabletext">
            {new Date(row.row.original.tanggal).toLocaleDateString("id-ID", {
              weekday: "long",
            })}
          </Text>
        </Flex>
      );
    },
    filterFn: "fuzzy",
    sortingFn: fuzzySort,
  },
  {
    accessorFn: (row) => row.waktumulai,
    id: "waktumulai",
    header: "Waktu Mulai",
    enableSorting: false,
    // footer: (props) => props.column.id,
    cell: (row) => {
      return (
        <Text
          color={
            new Date(
              row.getValue().slice(0, -1) + row.row.original.clock_in_tz
            ).getHours() *
              60 +
              new Date(
                row.getValue().slice(0, -1) + row.row.original.clock_in_tz
              ).getMinutes() >
            465
              ? "red"
              : "#141414"
          }
          fontWeight="550"
        >
          {(
            "0" +
            new Date(row.getValue().slice(0, -1) + row.row.original.clock_in_tz)
              .getHours()
              .toString()
          ).slice(-2) +
            ":" +
            (
              "0" +
              new Date(
                row.getValue().slice(0, -1) + row.row.original.clock_in_tz
              )
                .getMinutes()
                .toString()
            ).slice(-2)}
          {/* {   new Date((row.getValue().slice(0, -1)) + row.row.original.clock_in_tz).getHours()} */}
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
    enableSorting: false,
    footer: (props) => <Text textAlign="left" ml="24px" maxW="100px">Total durasi kerja:</Text>,
    cell: (row) => {
      return (
        <>
          {row.getValue() !== null ? (
            <Text color="#141414" fontWeight="550">
              {" "}
              {(
                "0" +
                new Date(
                  row.getValue().slice(0, -1) + row.row.original.clock_out_tz
                )
                  .getHours()
                  .toString()
              ).slice(-2) +
                ":" +
                (
                  "0" +
                  new Date(
                    row.getValue().slice(0, -1) + row.row.original.clock_out_tz
                  )
                    .getMinutes()
                    .toString()
                ).slice(-2)}
            </Text>
          ) : (
            <Text fontSize="18px" fontWeight="550" color="#ff4900" ml="13px">
              -
            </Text>
          )}
        </>
      );
    },
    filterFn: "fuzzy",
    sortingFn: fuzzySort,
  },

  {
    accessorFn: (row) => row.durasikerja,
    id: "durasikerja",
    header: "Durasi Kerja",
    enableSorting: false,
    footer: ({ table }) => {
      const total = table
        .getFilteredRowModel()
        .rows.reduce(
          (total, row) => total + Number(row.getValue("durasikerja")),
          0
        );
      return (
        <Text textAlign="left" ml="24px">
          {" "}
          {Math.floor(Math.round(total / 60000) / 60).toString()} Jam{" "}
          {Math.floor(Math.round(total / 60000) % 60).toString()} Menit
        </Text>
      );
    },
    cell: (row) => {
      return (
        <>
          {row.row.original.durasikerja !== null ? (
            <Text variant="tabletext" fontWeight="550" fontSize="14px">
              {Math.floor(
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
                " Menit"}
            </Text>
          ) : (
            ""
          )}
        </>
      );
    },
    filterFn: "fuzzy",
    sortingFn: fuzzySort,
  },
  {
    accessorFn: (row) => row.durasikerja,
    id: "keterangan",
    header: "Keterangan",
    enableSorting: false,
    footer: ({ table }) => {
      const total = table
        .getFilteredRowModel()
        .rows.reduce(
          (total, row) => total + Number(row.getValue("durasikerja")),
          0
        );

      const min = 673200000;
      const diff = min - total;
      return total < min ? (
        <Flex whiteSpace="normal" pt="16px" pl="19px" maxW="240px" minW="200px">
          <Text textAlign="left">
            Total durasi kerja kurang{" "}
            {Math.floor(Math.round(diff / 60000) / 60).toString()} Jam{" "}
            {Math.floor(Math.round(diff / 60000) % 60).toString()} Menit
          </Text>
        </Flex>
      ) : (
        ""
      );
    },
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
        <Flex maxW="240px" minW="200px" whiteSpace="normal" flexDir="column">
          <Text variant="tabletext">
            {row.row.original.waktupulang ? null : (
              <Text fontWeight="550">Belum clock out</Text>
            )}
            {row.row.original.waktumulai ? null : (
              <Text fontWeight="550">Belum clock in</Text>
            )}
            {dur < 510 && row.row.original.waktupulang !== null ? (
              <Text fontWeight="550">
                Durasi kerja kurang {diffH} Jam {diffM} Menit
              </Text>
            ) : null}
          </Text>
        </Flex>
      );
    },
    filterFn: "fuzzy",
    sortingFn: fuzzySort,
  },
];

export { kolomTabelAbsen };

import { DarkButton } from "@/components/atoms/Buttons/DarkButton";
import { SmOutlineButton } from "@/components/atoms/Buttons/SmOutlineBtn";
import { Absen } from "@/types/rekap-absen";
import { RencanaKerja } from "@/types/renker";
import { fuzzySort } from "@/utils/table";
import { Text, Link, Flex, Box, border, useColorMode } from "@chakra-ui/react";
import { ColumnDef } from "@tanstack/table-core";
import Image from "next/image";
import NextLink from "next/link";

export const kolomTabelRenker: ColumnDef<RencanaKerja, any>[] = [
  {
    accessorFn: (row) => row.status,
    id: "name",
    enableSorting: false,
    header: "Status",
    // footer: (props) => props.column.id,
    cell: (row) => {
      // const { colorMode } = useColorMode();
      return (
        <Flex
          className="file__container"
          display="inline-flex"
          alignItems="center"
          transition="color .15s"
          _groupHover={{
            color: "#008fff",
          }}
          // w="76px"
          // my="16px"
        >
          {row.row.original.status == 3 ? (
            <Flex
              pos="relative"
              justifyContent="center"
              alignItems="center"
              flexShrink="0"
              w="54px"
              h="54px"
              borderRadius="50%"
              fontSize="0"
              bg="#57bc3b30"
              _hover={{
                backgroundColor: "#57bc3b44",
              }}
              transition="all 0.12s ease-in-out"
            >
              <Box
                w="36px"
                h="36px"
                bgSize="contain"
                bgRepeat="no-repeat"
                bgImage={"../images/icon/checkmark.png"}
              ></Box>
            </Flex>
          ) : (
            <Flex
              pos="relative"
              justifyContent="center"
              alignItems="center"
              flexShrink="0"
              w="54px"
              h="54px"
              borderRadius="50%"
              fontSize="0"
              bg="#da494930"
              _hover={{
                backgroundColor: "#da494944",
              }}
              transition="all 0.12s ease-in-out"
            >
              <Box
                w="36px"
                h="36px"
                bgSize="contain"
                bgRepeat="no-repeat"
                bgImage={"../images/icon/remove.png"}
              ></Box>
            </Flex>
          )}
        </Flex>
      );
    },
    filterFn: "fuzzy",
    sortingFn: fuzzySort,
  },
  {
    accessorFn: (row) => row.subjudul,
    id: "type",
    enableSorting: false,
    header: "Judul",
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
          {row.row.original.subjudul}
        </Text>
      </Box>
      <Box
        className="file__subtitle"
        fontSize="13px"
        lineHeight="1.38462"
        fontWeight="500"
        color="#b2b3BD"
      >
        {row.row.original.status == 3 ? "Selesai" : "Dihapus atau dibatalkan"}
      </Box>
    </Box>
    ),
    filterFn: "fuzzy",
    sortingFn: fuzzySort,
  },
];

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
    header: "Status",
    // footer: (props) => props.column.id,
    cell: (row) => {
      // const { colorMode } = useColorMode();
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
            my="20px"
          >
            {row.row.original.status == 1 ? (
              <Flex
                pos="relative"
                justifyContent="center"
                alignItems="center"
                flexShrink="0"
                w="54px"
                h="54px"
                borderRadius="50%"
                fontSize="0"
                bg="#008fff33"
                _hover={{
                  backgroundColor: "#008fff45",
                }}
                transition="all 0.12s ease-in-out"
              >
                <Box
                  w="36px"
                  h="36px"
                  bgSize="contain"
                  bgRepeat="no-repeat"
                  bgImage="images/icon/clock.png"
                ></Box>
              </Flex>
            ) : (
              <></>
            )}
            {row.row.original.status == 2 ? (
              <Flex
                pos="relative"
                justifyContent="center"
                alignItems="center"
                flexShrink="0"
                w="54px"
                h="54px"
                borderRadius="50%"
                fontSize="0"
                bg="#ffdd0033"
                _hover={{
                  // borderRadius: "16px",
                  backgroundColor: "#ffdd0050",
                }}
                transition="all 0.12s ease-in-out"
              >
                <Box
                  w="36px"
                  h="36px"
                  bgSize="contain"
                  bgRepeat="no-repeat"
                  // bgImage={
                  //   colorMode == "light"
                  //     ? "images/icon/play.png"
                  //     : "images/icon/playdark.png"
                  // }
                  bgImage={"images/icon/play.png"}
                ></Box>
              </Flex>
            ) : (
              <></>
            )}
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
                  bgImage="images/icon/checkmark.png"
                ></Box>
              </Flex>
            ) : (
              <></>
            )}
          </Flex>
        </Link>
      );
    },
    filterFn: "fuzzy",
    sortingFn: fuzzySort,
  },
  {
    accessorFn: (row) => row.subjudul,
    id: "type",
    header: "Judul",
    // footer: (props) => props.column.id,
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
            textDecoration={
              row.row.original.status == 3 ? "line-through" : "none"
            }
          >
            {row.getValue()}
          </Text>
        </Box>
        <Box
          className="file__subtitle"
          fontSize="13px"
          lineHeight="1.38462"
          fontWeight="500"
          color="#b2b3BD"
          textDecoration={
            row.row.original.status == 3 ? "line-through" : "none"
          }
        >
          {row.row.original.subjudul}
        </Box>
      </Box>
    ),
    filterFn: "fuzzy",
    sortingFn: fuzzySort,
  },
];


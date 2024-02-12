import { RencanaKerja } from "@/types/renker";
import { fuzzySort } from "@/utils/table";
import { Box, Flex, Text } from "@chakra-ui/react";
import { ColumnDef } from "@tanstack/table-core";

export const kolomTabelRenker: ColumnDef<RencanaKerja, any>[] = [
  {
    accessorFn: (row) => row.status_pekerjaan,
    id: "status_pekerjaan",
    enableSorting: false,
    header: "Status",

    cell: (row) => {
      return (
        <Flex
          className="file__container"
          display="inline-flex"
          alignItems="center"
          transition="color .15s"
          _groupHover={{
            color: "#008fff",
          }}
        >
          {row.row.original.completed_at ? (
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
    accessorFn: (row) => row.deskripsi,
    id: "deskripsi",
    enableSorting: false,
    header: "Judul",
    cell: (row) => (
      <Box
        className="file__detail"
        flex="2"
        display="flex"
        flexDir="column"
        minW="500px"
      >
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
            {row.row.original.deskripsi}
          </Text>
        </Box>
        <Box
          className="file__subtitle"
          fontSize="13px"
          lineHeight="1.38462"
          fontWeight="500"
          color="#b2b3BD"
        >
          {row.row.original.completed_at
            ? "Selesai"
            : "Dihapus atau dibatalkan"}
        </Box>
      </Box>
    ),
    filterFn: "fuzzy",
    sortingFn: fuzzySort,
  },
  {
    accessorFn: (row) => row.started_at,
    id: "started_at",
    enableSorting: true,
    header: "Waktu mulai",
    cell: (row) => (
      <Box
        mb="9px"
        // display="inline-flex"
        flex="1"
        fontWeight="600"
        _groupHover={{
          color: "#008fff",
        }}
        w="min-content"
      >
        <Text
          variant="tabletitle"
          fontSize="15px"
          lineHeight="1.1875"
          fontWeight="550"
          _groupHover={{
            color: "#008fff",
          }}
        >
          {row.row.original.started_at !== undefined
            ? new Date(row.row.original.started_at).toLocaleDateString(
                "id-ID",
                {
                  weekday: "long",
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                }
              )
            : ""}
        </Text>
      </Box>
    ),
    filterFn: "fuzzy",
    sortingFn: fuzzySort,
  },
  {
    accessorFn: (row) => row.completed_at,
    id: "completed_at",
    enableSorting: true,
    header: "Waktu selesai",
    cell: (row) => (
      <Box
        mb="9px"
        // display="inline-flex"
        flex="1"
        fontWeight="600"
        _groupHover={{
          color: "#008fff",
        }}
        w="min-content"
      >
        <Text
          variant="tabletitle"
          fontSize="15px"
          lineHeight="1.1875"
          fontWeight="550"
          _groupHover={{
            color: "#008fff",
          }}
        >
          {row.row.original.completed_at !== undefined
            ? new Date(row.row.original.completed_at).toLocaleDateString(
                "id-ID",
                {
                  weekday: "long",
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                }
              )
            : ""}
        </Text>
      </Box>
    ),
    filterFn: "fuzzy",
    sortingFn: fuzzySort,
  },
];

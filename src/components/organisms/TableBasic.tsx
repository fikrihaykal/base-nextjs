import {
  useReactTable,
  getCoreRowModel,
  ColumnDef,
  flexRender,
} from "@tanstack/react-table";
import { fuzzyFilter, dateFilter } from "@/utils/table";
import {
  Box,
  Card,
  Flex,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

const TableBasic = ({
  columns,
  data,
}: {
  columns: ColumnDef<any, any>[];
  data: any[];
}) => {
  const table = useReactTable({
    data,
    columns,
    filterFns: {
      fuzzy: fuzzyFilter,
      date: dateFilter
    },
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <>
      <TableContainer bg="none" minW="900px" width="calc(100vw - 72px)" overflowX="unset" overflowY="unset">
        <Table variant="unstyled">
          <Thead bg="#fafafa" pos="sticky" top="0px" zIndex="300">
            {table.getHeaderGroups().map((headerGroup) => (
              <Tr key={headerGroup.id} borderColor="#eeeeee">
                {headerGroup.headers.map((header) => {
                  return (
                    <Th
                      key={header.id}
                      colSpan={header.colSpan}
                      paddingBottom="16px"
                      paddingTop="60px"
                      paddingInlineEnd="0px"
                      paddingInlineStart="0px"
                      _first={{
                        paddingInlineStart: "24px",
                      }}
                      _last={{
                        paddingInlineEnd: "24px",
                      }}
                    >
                      {header.isPlaceholder ? null : (
                        <Text
                          textAlign="left"
                          color="#707070"
                          textTransform="capitalize"
                          fontSize="14px"
                          fontWeight="500"
                          letterSpacing="0px"
                        >
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                        </Text>
                      )}
                    </Th>
                  );
                })}
              </Tr>
            ))}
          </Thead>

          <Tbody bg="white">
            {table.getRowModel().rows.map((row) => {
              return (
                <Tr key={row.id} pos="relative">
                  {row.getVisibleCells().map((cell) => {
                    return (
                      <Td
                        key={cell.id}
                        paddingBottom="0px"
                        paddingTop="0px"
                        paddingInlineEnd="0px"
                        paddingInlineStart="0px"
                        _first={{
                          paddingInlineStart: "24px",
                        }}
                        _last={{
                          paddingInlineEnd: "24px",
                        }}
                        pos="relative"
                        minH="100px"
                        h="1px"
                      >
                        <Flex py="8px" borderBottom="1px solid #eeeeee" flexDirection="column" minH="full" justifyContent="center">

                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </Flex>
                      </Td>
                    );
                  })}
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default TableBasic;

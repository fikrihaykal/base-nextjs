import {
  useReactTable,
  ColumnFiltersState,
  getCoreRowModel,
  getFilteredRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFacetedMinMaxValues,
  getPaginationRowModel,
  getSortedRowModel,
  ColumnDef,
  flexRender,
  FilterFn,
} from "@tanstack/react-table";
import { useState } from "react";
import { DebouncedInput, Filter } from "@/utils/table_old";
import { RankingInfo } from "@tanstack/match-sorter-utils";
import {
  Box,
  Button,
  HStack,
  Input,
  Select,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import {
  IoChevronBack,
  IoChevronBackCircle,
  IoChevronForward,
  IoChevronForwardCircle,
} from "react-icons/io5";
import { dateFilter, fuzzyFilter } from "@/utils/table";

const TableAdvance = ({
  columns,
  data,
}: {
  columns: ColumnDef<any, any>[];
  data: any[];
}) => {
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [globalFilter, setGlobalFilter] = useState("");

  const table = useReactTable({
    data,
    columns,
    filterFns: {
      fuzzy: fuzzyFilter,
      date: dateFilter
    },
    state: {
      columnFilters,
      globalFilter,
    },
    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange: setGlobalFilter,
    globalFilterFn: fuzzyFilter,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    getFacetedMinMaxValues: getFacetedMinMaxValues(),
  });

  return (
    <>
      <TableContainer>
        <Box>
          <DebouncedInput
            value={globalFilter ?? ""}
            onChange={(value) => setGlobalFilter(String(value))}
            className="p-2 font-lg shadow border border-block"
            placeholder="Search all columns..."
          />
        </Box>
        <Table variant="unstyled">
          <Thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <Tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <Th
                      key={header.id}
                      colSpan={header.colSpan}
                      paddingBottom="16px"
                      paddingTop="0px"
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
                        <>
                          <Box
                            {...{
                              className: header.column.getCanSort()
                                ? "cursor-pointer select-none"
                                : "",
                              onClick: header.column.getToggleSortingHandler(),
                            }}
                          >
                            <Text textAlign="center">
                              {flexRender(
                                header.column.columnDef.header,
                                header.getContext()
                              )}
                              {{
                                asc: " 🔼",
                                desc: " 🔽",
                              }[header.column.getIsSorted() as string] ?? null}
                            </Text>
                          </Box>
                          {header.column.getCanFilter() ? (
                            <Box>
                              <Filter column={header.column} table={table} />
                            </Box>
                          ) : null}
                        </>
                      )}
                    </Th>
                  );
                })}
              </Tr>
            ))}
          </Thead>
          <Tbody>
            {table.getRowModel().rows.map((row) => {
              return (
                <Tr key={row.id}>
                  {row.getVisibleCells().map((cell) => {
                    return (
                      <Td key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </Td>
                    );
                  })}
                </Tr>
              );
            })}
          </Tbody>
        </Table>
        <HStack justifyContent="space-between" marginTop="30px">
          <HStack>
            <Button
              className="border rounded p-1"
              onClick={() => table.setPageIndex(0)}
              isDisabled={!table.getCanPreviousPage()}
            >
              <IoChevronBackCircle />
            </Button>
            <Button
              className="border rounded p-1"
              onClick={() => table.previousPage()}
              isDisabled={!table.getCanPreviousPage()}
            >
              <IoChevronBack />
            </Button>
            <Button
              className="border rounded p-1"
              onClick={() => table.nextPage()}
              isDisabled={!table.getCanNextPage()}
            >
              <IoChevronForward />
            </Button>
            <Button
              className="border rounded p-1"
              onClick={() => table.setPageIndex(table.getPageCount() - 1)}
              isDisabled={!table.getCanNextPage()}
            >
              <IoChevronForwardCircle />
            </Button>
            <Box as="span">
              <Text>
                {"Page "}
                {table.getState().pagination.pageIndex + 1} of{" "}
                {table.getPageCount()}
              </Text>
            </Box>
            <Box as="span">
              | Go to page:
              <Input
                width="fit-content"
                type="number"
                defaultValue={table.getState().pagination.pageIndex + 1}
                onChange={(e) => {
                  const page = e.target.value ? Number(e.target.value) - 1 : 0;
                  if (page < table.getPageCount()) {
                    table.setPageIndex(page);
                  }
                }}
                min={1}
                max={table.getPageCount()}
              />
            </Box>
          </HStack>
          <HStack>
            <Select
              value={table.getState().pagination.pageSize}
              onChange={(e) => {
                table.setPageSize(Number(e.target.value));
              }}
            >
              {[10, 20, 30, 40, 50].map((pageSize) => (
                <option key={pageSize} value={pageSize}>
                  Show {pageSize}
                </option>
              ))}
            </Select>
          </HStack>
        </HStack>
      </TableContainer>
    </>
  );
};

export default TableAdvance;

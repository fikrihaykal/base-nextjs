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
} from '@tanstack/react-table'
import { useState } from "react";
import { DebouncedInput, Filter, fuzzyFilter } from "@/utils/table";
import { RankingInfo } from '@tanstack/match-sorter-utils';
import { Box, Button, HStack, Heading, Input, Select, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react';
import { BsChevronExpand } from 'react-icons/bs';
import { CgChevronDoubleLeft, CgChevronDoubleRight, CgChevronDown, CgChevronLeft, CgChevronRight, CgChevronUp } from 'react-icons/cg'
import { TableButton } from '../atoms/Button';

declare module '@tanstack/table-core' {
    interface FilterFns {
        fuzzy: FilterFn<unknown>
    }
    interface FilterMeta {
        itemRank: RankingInfo
    }
}

const TableAdvance = ({ columns, data, filterGlobal = true, filterColumn = true }: { columns: ColumnDef<any, any>[], data: any[], filterGlobal?: boolean, filterColumn?: boolean }) => {

    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
    const [globalFilter, setGlobalFilter] = useState('')

    const table = useReactTable({
        data,
        columns,
        filterFns: {
            fuzzy: fuzzyFilter,
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
        getFacetedMinMaxValues: getFacetedMinMaxValues()
    })

    return (
        <>
            <TableContainer
                whiteSpace="normal"
                border="1px solid #ededf0"
                borderRadius="12px"
                padding="20px"
                fontSize="14px"
            >
                {
                    <HStack justifyContent="space-between" mb="20px">
                        <HStack>
                            <Select
                                w="fit-content"
                                value={table.getState().pagination.pageSize}
                                fontSize="14px"
                                onChange={e => {
                                    table.setPageSize(Number(e.target.value))
                                }}
                            >
                                {[10, 20, 30, 40, 50].map(pageSize => (
                                    <option key={pageSize} value={pageSize}>
                                        Show {pageSize}
                                    </option>
                                ))}
                            </Select>
                            <Text>
                                {"data/halaman"}
                            </Text>
                        </HStack>
                        {
                            filterGlobal ?
                                <DebouncedInput
                                    value={globalFilter ?? ''}
                                    onChange={value => setGlobalFilter(String(value))}
                                    className="p-2 font-lg shadow border border-block"
                                    placeholder="Search all columns..."
                                /> : null
                        }
                    </HStack>
                }
                <Table variant='simple'>
                    <Thead>
                        {table.getHeaderGroups().map(headerGroup => (
                            <Tr key={headerGroup.id}>
                                {headerGroup.headers.map(header => {
                                    return (
                                        <Th key={header.id} colSpan={header.colSpan}>
                                            {header.isPlaceholder ? null : (
                                                <>
                                                    <Box
                                                        {...{
                                                            className: header.column.getCanSort()
                                                                ? 'cursor-pointer select-none'
                                                                : '',
                                                            onClick: header.column.getToggleSortingHandler(),
                                                        }}
                                                    >
                                                        <HStack justifyContent="space-between">
                                                            <Heading textAlign="center" textTransform="capitalize" fontSize="14px" fontWeight="semibold" color="#001737">
                                                                {flexRender(
                                                                    header.column.columnDef.header,
                                                                    header.getContext()
                                                                )}
                                                            </Heading>
                                                            {{
                                                                asc: <CgChevronUp display="inline-block" />,
                                                                desc: <CgChevronDown />,
                                                            }[header.column.getIsSorted() as string] ?? (header.column.getCanSort() ? <BsChevronExpand /> : null)}
                                                        </HStack>
                                                    </Box>
                                                    {
                                                        header.column.getCanFilter() && filterColumn ? (
                                                            <Box>
                                                                <Filter column={header.column} table={table} />
                                                            </Box>
                                                        ) : null
                                                    }
                                                </>
                                            )}
                                        </Th>
                                    )
                                })}
                            </Tr>
                        ))}
                    </Thead>
                    <Tbody>
                        {table.getRowModel().rows.map(row => {
                            return (
                                <Tr key={row.id}>
                                    {row.getVisibleCells().map(cell => {
                                        return (
                                            <Td key={cell.id}>
                                                {flexRender(
                                                    cell.column.columnDef.cell,
                                                    cell.getContext()
                                                )}
                                            </Td>
                                        )
                                    })}
                                </Tr>
                            )
                        })}
                    </Tbody>
                </Table>
                <HStack justifyContent="space-between" marginTop="30px">
                    <HStack>
                        <HStack>
                            <Text>
                                {"Menampilkan halaman "}
                                {table.getState().pagination.pageIndex + 1}
                                {" dari "}
                                {table.getPageCount()}
                                {" halaman"}
                            </Text>
                        </HStack>
                        <Text>
                            {"|"}
                        </Text>
                        <HStack>
                            <Text>
                                {"Pergi ke halaman "}
                            </Text>
                            <Input
                                width="fit-content"
                                type="number"
                                defaultValue={table.getState().pagination.pageIndex + 1}
                                onChange={e => {
                                    const page = e.target.value ? Number(e.target.value) - 1 : 0
                                    if (page < table.getPageCount()) {
                                        table.setPageIndex(page)
                                    }
                                }}
                                min={1}
                                max={table.getPageCount()}
                            />
                        </HStack>
                    </HStack>
                    <HStack>
                        <HStack>
                            <TableButton
                                onClick={() => table.setPageIndex(0)}
                                isDisabled={!table.getCanPreviousPage()}
                            >
                                <CgChevronDoubleLeft />
                            </TableButton>
                            <TableButton
                                onClick={() => table.previousPage()}
                                isDisabled={!table.getCanPreviousPage()}
                            >
                                <CgChevronLeft />
                            </TableButton>
                            <Button
                                colorScheme="itsblue"
                                className="rounded p-1"
                                padding="0"
                                borderRadius="50%"
                                fontWeight="normal"
                            >
                                {table.getState().pagination.pageIndex + 1}
                            </Button>
                            <TableButton
                                onClick={() => table.nextPage()}
                                isDisabled={!table.getCanNextPage()}
                            >
                                <CgChevronRight />
                            </TableButton>
                            <TableButton
                                onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                                isDisabled={!table.getCanNextPage()}
                            >
                                <CgChevronDoubleRight />
                            </TableButton>
                        </HStack>
                    </HStack>
                </HStack>
            </TableContainer>
        </>
    )
}

export default TableAdvance
import {
    useReactTable,
    ColumnFiltersState,
    getCoreRowModel,
    getFilteredRowModel,
    getFacetedRowModel,
    getFacetedUniqueValues,
    getFacetedMinMaxValues,
    getSortedRowModel,
    ColumnDef,
    flexRender,
    FilterFn,
} from '@tanstack/react-table'
import { useState } from "react";
import { DebouncedInput, Filter } from "@/utils/table_old";
import { Box, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr, Button, Input, InputGroup, Stack, HStack } from '@chakra-ui/react';
import { useInfiniteQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from 'axios';
import { dateFilter, fuzzyFilter } from '@/utils/table';
import { IoChevronDown, IoChevronUp } from 'react-icons/io5';

const PAGE_SIZE = 20

const TableScroll = ({ columns, url, name, filterColumn = true }: { columns: ColumnDef<any, any>[], url: string, name: string, filterColumn?: boolean }) => {

    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
    const [globalFilter, setGlobalFilter] = useState('')

    const fetchCharacters = async ({ pageParam = url }) => {
        const res = await axios.get(pageParam)
            .then(
                res => res.data
            ).catch(
                err => {
                    throw err
                }
            )

        return res
    }

    const {
        data,
        error,
        fetchNextPage,
        hasNextPage,
        isFetching,
        isFetchingNextPage,
        status,
    } = useInfiniteQuery({
        queryKey: ['character'],
        queryFn: fetchCharacters,
        getNextPageParam: (lastPage) => lastPage.info.next,
    })

    const flatData = useMemo(
        () => data?.pages?.flatMap((page) => page.results) ?? [],
        [data]
    )

    const table = useReactTable({
        data: flatData,
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
        getFacetedRowModel: getFacetedRowModel(),
        getFacetedUniqueValues: getFacetedUniqueValues(),
        getFacetedMinMaxValues: getFacetedMinMaxValues()
    })

    return (
        <>
            <Box
                id={"infinite-scroll-container-" + name}
                style={{
                    overflow: "auto",
                    height: "100vh",
                }}>
                {status === "success" && (
                    <InfiniteScroll
                        dataLength={data?.pages.length * PAGE_SIZE}
                        next={fetchNextPage}
                        hasMore={hasNextPage ?? true}
                        loader={<h4>Loading...</h4>}
                        endMessage={
                            <p style={{ textAlign: 'center' }}>
                                <b>Yay! You have seen it all</b>
                            </p>
                        }
                        scrollableTarget={"infinite-scroll-container-" + name}
                    >
                        <InputGroup>
                            <Input type="text" placeholder="Cari server side" />
                        </InputGroup>
                        <TableContainer>
                            <Box>
                                <DebouncedInput
                                    value={globalFilter ?? ''}
                                    onChange={value => setGlobalFilter(String(value))}
                                    className="p-2 font-lg shadow border border-block"
                                    placeholder="Search all columns..."
                                />
                            </Box>
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
                                                                        <Text textAlign="center">
                                                                            {flexRender(
                                                                                header.column.columnDef.header,
                                                                                header.getContext()
                                                                            )}
                                                                        </Text>
                                                                        {{
                                                                            asc: <IoChevronUp display="inline-block" />,
                                                                            desc: <IoChevronDown />,
                                                                        }[header.column.getIsSorted() as string] ?? null}
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
                        </TableContainer>
                        <Stack justifyContent="center">
                            <Button onClick={() => fetchNextPage()} disabled={!hasNextPage || isFetchingNextPage}>
                                {isFetchingNextPage
                                    ? 'Loading more...'
                                    : hasNextPage
                                        ? 'Load More'
                                        : 'Nothing more to load'}
                            </Button>
                        </Stack>
                    </InfiniteScroll>

                )}
            </Box>
        </>
    )
}

export default TableScroll
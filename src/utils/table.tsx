import {
    ColumnDef,
    FilterFn,
    SortingFn,
    getCoreRowModel,
    getFacetedMinMaxValues,
    getFacetedRowModel,
    getFacetedUniqueValues,
    getFilteredRowModel,
    getSortedRowModel,
    sortingFns,
    useReactTable
} from "@tanstack/react-table";
import axios, {AxiosRequestConfig} from "axios";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import { compareItems, rankItem } from "@tanstack/match-sorter-utils";

const fuzzySort: SortingFn<any> = (rowA, rowB, columnId) => {
    let dir = 0

    if (rowA.columnFiltersMeta[columnId]) {
        dir = compareItems(
            rowA.columnFiltersMeta[columnId]?.itemRank!,
            rowB.columnFiltersMeta[columnId]?.itemRank!
        )
    }

    return dir === 0 ? sortingFns.alphanumeric(rowA, rowB, columnId) : dir
}

const fuzzyFilter: FilterFn<any> = (row, columnId, value, addMeta) => {
    const itemRank = rankItem(row.getValue(columnId), value)

    addMeta({
        itemRank,
    })

    return itemRank.passed
}

const dateFilter: FilterFn<any> = (row, columnId, value) => {
    const date: Date = new Date(row.getValue(columnId))
    console.log(date, value, date >= value)

    return date >= value

    // const [start, end] = value

    // if ((start || end) && !date) return false

    // if (start && !end) {
    //     return date.getTime() >= start.getTime()
    // } else if (!start && end) {
    //     return date.getTime() <= end.getTime()
    // } else if (start && end) {
    //     return date.getTime() >= start.getTime() && date.getTime() <= end.getTime()
    // } else return true
}

const tableLoadMoreConf = (
    data: any[],
    columns: ColumnDef<any, any>[],
    globalFilter: any,
    setGlobalFilter: any,
) => useReactTable({
    data,
    columns,
    filterFns: {
        fuzzy: fuzzyFilter,
        date: dateFilter
    },
    state: {
        globalFilter,
    },
    onGlobalFilterChange: setGlobalFilter,
    globalFilterFn: fuzzyFilter,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    getFacetedMinMaxValues: getFacetedMinMaxValues(),
})

const tablePaginateConf = (
    data: any[],
    columns: ColumnDef<any, any>[],
    globalFilter: any,
    setGlobalFilter: any,
    pagination: any
) => useReactTable({
    data,
    columns,
    filterFns: {
        fuzzy: fuzzyFilter,
        date: dateFilter
    },
    state: {
        globalFilter,
        pagination
    },
    getCoreRowModel: getCoreRowModel(),
    onGlobalFilterChange: setGlobalFilter,
    globalFilterFn: fuzzyFilter,
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    getFacetedMinMaxValues: getFacetedMinMaxValues(),
})

const fetchInfiniteData = async (pageParam: string) => {
    const res = await axios.get(pageParam)
        .then(
            res => {
                return res.data
            }
        ).catch(
            err => {
                throw err
            }
        )

    return res
}

const fetchPaginateData = async (url:string, config?: AxiosRequestConfig) => {
    const res = await axios.get(url, {...config})
        .then(res => res.data)
        .catch(err => {
            throw err
        })
    return res
}

const paginateQuery = (url: string, queryKey: Array<any>, config?: AxiosRequestConfig) => {
    const queryResult = useQuery({
        queryKey: queryKey,
        queryFn: () => fetchPaginateData(url, config),
        keepPreviousData: true
    })

    let result: any = { ...queryResult }

    const flatData = useMemo(
        () => queryResult?.data?.data?.flatMap((data: object) => data) ?? [],
        [queryResult?.data]
    );

    result.flatData = flatData

    return result
}

const infiniteQuery = (url: string, queryKey: string) => {
    const infinite = useInfiniteQuery({
        queryKey: [queryKey],
        queryFn: ({ pageParam = url }) => fetchInfiniteData(pageParam),
        getNextPageParam: (lastPage) => lastPage.links.next,
    })

    let result: any = { ...infinite }

    const flatData = useMemo(
        () => infinite?.data?.pages?.flatMap((page) => page.data) ?? [],
        [infinite?.data]
    );

    result.flatData = flatData

    return result
}

export { tableLoadMoreConf, tablePaginateConf, infiniteQuery, paginateQuery, fetchInfiniteData, fuzzySort, fuzzyFilter, dateFilter }
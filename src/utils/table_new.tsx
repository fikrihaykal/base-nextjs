import {
    ColumnDef,
    FilterFn,
    getCoreRowModel,
    getFacetedMinMaxValues,
    getFacetedRowModel,
    getFacetedUniqueValues,
    getFilteredRowModel,
    getSortedRowModel,
    useReactTable
} from "@tanstack/react-table";
import { dateFilter, fuzzyFilter } from "./table";
import axios from "axios";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import { RankingInfo } from "@tanstack/match-sorter-utils";

declare module "@tanstack/table-core" {
    interface FilterFns {
        fuzzy: FilterFn<unknown>;
        date: FilterFn<unknown>;
    }
    interface FilterMeta {
        itemRank: RankingInfo;
    }
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

const fetchInfiniteData = async (url: string) => {
    const res = await axios.get(url)
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

const infiniteQuery = (url: string, queryKey: string) => {
    const infinite = useInfiniteQuery({
        queryKey: [queryKey],
        queryFn: () => fetchInfiniteData(url),
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

export { tableLoadMoreConf, infiniteQuery, fetchInfiniteData }
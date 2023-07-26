import {
    ColumnDef,
    getCoreRowModel,
    getFacetedMinMaxValues,
    getFacetedRowModel,
    getFacetedUniqueValues,
    getFilteredRowModel,
    getSortedRowModel,
    useReactTable
} from "@tanstack/react-table";
import { fuzzyFilter } from "./table";
import axios from "axios";

const URL = "/api/berkas/1"
const PAGE_SIZE = 20

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
});

const fetchInfiniteData = async ({ pageParam = URL }) => {
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

export { tableLoadMoreConf, fetchInfiniteData }
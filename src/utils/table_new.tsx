import {
    ColumnDef,
    getCoreRowModel,
    getFacetedMinMaxValues,
    getFacetedRowModel,
    getFacetedUniqueValues,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable
} from "@tanstack/react-table";
import { fuzzyFilter } from "./table";

const tableConf = (
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
    getPaginationRowModel: getPaginationRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    getFacetedMinMaxValues: getFacetedMinMaxValues(),
});

export { tableConf }
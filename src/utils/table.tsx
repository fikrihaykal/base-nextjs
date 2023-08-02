import { Box, Flex, Input } from "@chakra-ui/react"
import { compareItems, rankItem } from "@tanstack/match-sorter-utils"
import { Column, FilterFn, SortingFn, Table, sortingFns } from "@tanstack/table-core"
import { InputHTMLAttributes, useEffect, useMemo, useState } from "react"

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
    const now: Date = new Date("2023-02-04 11:25")
    console.log(date, value)
    return date >= now
    const [start, end] = value

    if ((start || end) && !date) return false

    if (start && !end) {
        return date.getTime() >= start.getTime()
    } else if (!start && end) {
        return date.getTime() <= end.getTime()
    } else if (start && end) {
        return date.getTime() >= start.getTime() && date.getTime() <= end.getTime()
    } else return true
}

const Filter = ({ column, table }: { column: Column<any, unknown>, table: Table<any> }) => {
    const firstValue = table
        .getPreFilteredRowModel()
        .flatRows[0]?.getValue(column.id)

    const columnFilterValue = column.getFilterValue()

    const sortedUniqueValues = useMemo(
        () =>
            typeof firstValue === 'number'
                ? []
                : Array.from(column.getFacetedUniqueValues().keys()).sort(),
        [column.getFacetedUniqueValues()]
    )

    return typeof firstValue === 'number' ? (
        <Box>
            <Flex>
                <DebouncedInput
                    type="number"
                    min={Number(column.getFacetedMinMaxValues()?.[0] ?? '')}
                    max={Number(column.getFacetedMinMaxValues()?.[1] ?? '')}
                    value={(columnFilterValue as [number, number])?.[0] ?? ''}
                    onChange={value =>
                        column.setFilterValue((old: [number, number]) => [value, old?.[1]])
                    }
                    placeholder={`Min ${column.getFacetedMinMaxValues()?.[0]
                        ? `(${column.getFacetedMinMaxValues()?.[0]})`
                        : ''
                        }`}
                    className="w-24 border shadow rounded"
                />
                <DebouncedInput
                    type="number"
                    min={Number(column.getFacetedMinMaxValues()?.[0] ?? '')}
                    max={Number(column.getFacetedMinMaxValues()?.[1] ?? '')}
                    value={(columnFilterValue as [number, number])?.[1] ?? ''}
                    onChange={value =>
                        column.setFilterValue((old: [number, number]) => [old?.[0], value])
                    }
                    placeholder={`Max ${column.getFacetedMinMaxValues()?.[1]
                        ? `(${column.getFacetedMinMaxValues()?.[1]})`
                        : ''
                        }`}
                    className="w-24 border shadow rounded"
                />
            </Flex>
        </Box>
    ) : (
        <>
            <datalist id={column.id + 'list'}>
                {sortedUniqueValues.slice(0, 5000).map((value: any) => (
                    <option value={value} key={value} />
                ))}
            </datalist>
            <DebouncedInput
                type="text"
                value={(columnFilterValue ?? '') as string}
                onChange={value => column.setFilterValue(value)}
                placeholder={`Search... (${column.getFacetedUniqueValues().size})`}
                className="w-36 border shadow rounded"
                list={column.id + 'list'}
            />
        </>
    )
}

const DebouncedInput = (
    { value: initialValue, onChange, debounce = 500, size, ...props }:
        { value: string | number, onChange: (value: string | number) => void, debounce?: number } &
        Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'>
) => {
    const [value, setValue] = useState(initialValue)

    useEffect(() => {
        setValue(initialValue)
    }, [initialValue])

    useEffect(() => {
        const timeout = setTimeout(() => {
            onChange(value)
        }, debounce)

        return () => clearTimeout(timeout)
    }, [value])

    return (
        <Input {...props} value={value} onChange={e => setValue(e.target.value)} />
    )
}

export { fuzzySort, fuzzyFilter, dateFilter, Filter, DebouncedInput }
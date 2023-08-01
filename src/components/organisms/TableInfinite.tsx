import { Box, Text, HStack } from "@chakra-ui/react"
import { useState, useEffect } from "react";
import { Table } from "@tanstack/table-core";
import { flexRender } from "@tanstack/react-table";
import { CgChevronDown, CgChevronUp } from 'react-icons/cg'
import { BsChevronExpand } from 'react-icons/bs';
import { TableBody, TableBodyCell, TableCheckbox, TableHead, TableHeadCell, TableMain } from "../molecules/Table";

const TableInfinite = ({ table, select }: { table: Table<any>; select?: boolean }) => {
    const dataLength = table.getRowModel().rows.length
    const [list, setList] = useState<Number[]>([0]);
    const [allChecked, setAllChecked] = useState<boolean>(false);
    const [someChecked, setSomeChecked] = useState<boolean>(false);

    const checkAll = () => {
        if (allChecked) {
            setList([]);
            setAllChecked(false);
            setSomeChecked(false);
        } else {
            const temp = Array.from({ length: dataLength }, (value, index) => index);
            setList(temp);
            setAllChecked(true);
            setSomeChecked(false);
        }
    };

    const checkOne = (id: Number, checked: boolean) => {
        const temp = list;

        if (checked) {
            const index = temp.indexOf(id);
            if (index > -1) temp.splice(index, 1);
        } else {
            temp.push(id);
        }

        setList(temp.length === 0 ? [] : temp)

        if (list.length >= dataLength) {
            setAllChecked(true);
            setSomeChecked(false);
        } else if (list.length > 0) {
            setAllChecked(false);
            setSomeChecked(true);
        } else {
            setAllChecked(false);
            setSomeChecked(false);
        }

        console.log(list)
    }

    return (
        <>
            <TableMain>
                {table.getHeaderGroups().map((headerGroup) => (
                    <TableHead key={headerGroup.id}>
                        {
                            select && (
                                <TableHeadCell>
                                    <TableCheckbox id="berkas_table" isChecked={allChecked} onClick={() => checkAll()} header={true} isIndeterminate={someChecked} />
                                </TableHeadCell>
                            )
                        }
                        {headerGroup.headers.map((header) => {
                            return (
                                <TableHeadCell
                                    key={header.id}
                                // colSpan={header.colSpan}
                                >
                                    <Box
                                        {...{
                                            className: header.column.getCanSort()
                                                ? 'cursor-pointer select-none'
                                                : '',
                                            onClick: header.column.getToggleSortingHandler(),
                                        }}
                                    >
                                        <HStack justifyContent="space-between">
                                            <Text>
                                                {
                                                    flexRender(
                                                        header.column.columnDef.header,
                                                        header.getContext()
                                                    )
                                                }
                                            </Text>
                                            {{
                                                asc: <CgChevronUp display="inline-block" />,
                                                desc: <CgChevronDown />,
                                            }[header.column.getIsSorted() as string] ?? (header.column.getCanSort() ? <BsChevronExpand /> : null)}
                                        </HStack>
                                    </Box>
                                </TableHeadCell>
                            );
                        })}
                    </TableHead>
                ))}
                {table.getRowModel().rows.map((row, index) => {
                    return (
                        <TableBody key={row.id}>
                            {
                                select && (
                                    <TableHeadCell>
                                        <TableCheckbox id="berkas_table" isChecked={list.includes(index)} onClick={() => checkOne(index, list.includes(index))} />
                                    </TableHeadCell>
                                )
                            }
                            {row.getVisibleCells().map((cell) => {
                                return (
                                    <TableBodyCell key={cell.id}>
                                        {flexRender(
                                            cell.column.columnDef.cell,
                                            cell.getContext()
                                        )}
                                    </TableBodyCell>
                                );
                            })}
                        </TableBody>
                    );
                })}
            </TableMain>
        </>
    )
}

export { TableInfinite }
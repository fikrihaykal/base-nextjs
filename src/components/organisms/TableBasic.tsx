import { dateFilter, fuzzyFilter } from "@/utils/table";
import {
  Box,
  HStack,
  Text
} from "@chakra-ui/react";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { BsChevronExpand } from "react-icons/bs";
import { CgChevronDown, CgChevronUp } from "react-icons/cg";
import { TableBody, TableBodyCell, TableFooter, TableFooterCell, TableHead, TableHeadCell, TableMain } from "../molecules/Table";

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
    getFilteredRowModel: getFilteredRowModel(),
  });

  return (
    <>
       
          <TableMain>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableHead key={headerGroup.id}>
                {/* {select && (
                  <TableHeadCell>
                    <TableCheckbox
                      id="berkas_table"
                      isChecked={allChecked}
                      onClick={() => checkAll()}
                      header={true}
                      isIndeterminate={someChecked}
                    />
                  </TableHeadCell>
                )} */}
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHeadCell
                      key={header.id}
                      // colSpan={header.colSpan}
                    >
                      <Box
                        {...{
                          className: header.column.getCanSort()
                            ? "cursor-pointer select-none"
                            : "",
                          onClick: header.column.getToggleSortingHandler(),
                        }}
                      >
                        <HStack justifyContent="space-between">
                          <Text>
                            {flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                          </Text>
                          {{
                            asc: <CgChevronUp display="inline-block" />,
                            desc: <CgChevronDown />,
                          }[header.column.getIsSorted() as string] ??
                            (header.column.getCanSort() ? (
                              <BsChevronExpand />
                            ) : null)}
                        </HStack>
                      </Box>
                    </TableHeadCell>
                  );
                })}
              </TableHead>
            ))}
            {table.getFilteredRowModel().rows.map((row, index) => {
              function checkOne(index: number, arg1: any) {
                throw new Error("Function not implemented.");
              }

              return (
                <TableBody key={row.id}>
                  {/* {select && (
                    <TableHeadCell>
                      <TableCheckbox
                        id="berkas_table"
                        isChecked={list.includes(index)}
                        onClick={() => checkOne(index, list.includes(index))}
                      />
                    </TableHeadCell>
                  )} */}
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
            {table.getFooterGroups().map((footerGroup) => (
              <TableFooter key={footerGroup.id}>
                {footerGroup.headers.map((header) => (
                  <TableFooterCell key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.footer,
                          header.getContext()
                        )}
                  </TableFooterCell>
                ))}
              </TableFooter>
            ))}
          </TableMain>
        </>
  );
};

export default TableBasic;
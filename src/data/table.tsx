import { Person } from "@/types/person";
import { fuzzySort } from "@/utils/table";
import { ColumnDef } from "@tanstack/table-core";
import { makeData } from "../utils/make_person";

const kolomTabelPerson: ColumnDef<Person, any>[] = [
    {
        header: 'Name',
        footer: props => props.column.id,
        columns: [
            {
                accessorKey: 'firstName',
                cell: info => info.getValue(),
                footer: props => props.column.id,
            },
            {
                accessorFn: row => row.lastName,
                id: 'lastName',
                cell: info => info.getValue(),
                header: () => <span>Last Name</ span >,
                footer: props => props.column.id,
            },
            {
                accessorFn: row => `${row.firstName} ${row.lastName}`,
                id: 'fullName',
                header: 'Full Name',
                cell: info => info.getValue(),
                footer: props => props.column.id,
                filterFn: 'fuzzy',
                sortingFn: fuzzySort,
            },
        ],
    },
    {
        header: 'Info',
        footer: props => props.column.id,
        columns: [
            {
                accessorKey: 'age',
                header: () => 'Age',
                footer: props => props.column.id,
            },
            {
                header: 'More Info',
                columns: [
                    {
                        accessorKey: 'visits',
                        header: () => <span>Visits </span>,
                        footer: props => props.column.id,
                    },
                    {
                        accessorKey: 'status',
                        header: 'Status',
                        footer: props => props.column.id,
                    },
                    {
                        accessorKey: 'progress',
                        header: 'Profile Progress',
                        footer: props => props.column.id,
                    },
                ],
            },
        ],
    },
]

const dataTabelPerson: Person[] = makeData(500)

export { kolomTabelPerson, dataTabelPerson }
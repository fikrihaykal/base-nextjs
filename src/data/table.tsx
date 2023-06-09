import { Character, Person } from "@/types/person";
import { fuzzySort } from "@/utils/table";
import { ColumnDef } from "@tanstack/table-core";

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

const dataTabelPerson: Person[] = [
    {
        firstName: 'tanner',
        lastName: 'linsley',
        age: 24,
        visits: 100,
        status: 'relationship',
        progress: 50,
    },
    {
        firstName: 'tandy',
        lastName: 'miller',
        age: 40,
        visits: 40,
        status: 'single',
        progress: 80,
    },
    {
        firstName: 'joe',
        lastName: 'dirte',
        age: 45,
        visits: 20,
        status: 'complicated',
        progress: 10,
    },
]

const kolomTabelCharacter: ColumnDef<Character, any>[] = [
    {
        accessorFn: row => row.id,
        id: 'no',
        header: 'ID Character',
        footer: props => props.column.id,
        cell: info => info.getValue(),
    },
    {
        accessorFn: row => row.name,
        id: 'name',
        header: 'Name',
        footer: props => props.column.id,
        cell: info => info.getValue(),
        filterFn: 'fuzzy',
        sortingFn: fuzzySort,
    },
    {
        accessorFn: row => row.location.name,
        id: 'livesIn',
        header: 'Lives In',
        footer: props => props.column.id,
        cell: info => info.getValue(),
        filterFn: 'fuzzy',
        sortingFn: fuzzySort,
    },
    {
        accessorFn: row => row.species,
        id: 'species',
        header: 'Species',
        footer: props => props.column.id,
        cell: info => info.getValue(),
        filterFn: 'fuzzy',
        sortingFn: fuzzySort,
    },
]

const dataTabelCharacter: Character[] = [
    {
        id: 1,
        name: "Rick Sanchez",
        species: "Human",
        location: {
            name: "Citadel of Ricks",
            url: "https://rickandmortyapi.com/api/location/3"
        },
        image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    },
    {
        id: 2,
        name: "Morty Smith",
        species: "Human",
        location: {
            name: "Citadel of Ricks",
            url: "https://rickandmortyapi.com/api/location/3"
        },
        image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg"
    },
    {
        id: 3,
        name: "Summer Smith",
        species: "Human",
        location: {
            name: "Earth (Replacement Dimension)",
            url: "https://rickandmortyapi.com/api/location/20"
        },
        image: "https://rickandmortyapi.com/api/character/avatar/3.jpeg"
    }
]
export { kolomTabelPerson, dataTabelPerson, kolomTabelCharacter, dataTabelCharacter }
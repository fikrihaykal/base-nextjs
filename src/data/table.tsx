import { Character, Person } from "@/types/person";
import { fuzzySort } from "@/utils/table";
import { Text } from "@chakra-ui/react";
import { ColumnDef } from "@tanstack/table-core";

const kolomTabelBasic: ColumnDef<Person, any>[] = [
    {
        header: 'No',
        cell: (row) => <Text textAlign="center">{row.row.index + 1}</Text>,
    },
    {
        header: 'First Name',
        accessorKey: 'firstName',
    },
    {
        header: 'Last Name',
        accessorKey: 'lastName',
    },
    {
        header: 'Full Name',
        accessorKey: 'fullName',
        accessorFn: row => `${row.firstName} ${row.lastName}`,
    },
    {
        header: 'Visits',
        accessorKey: 'visits',
        cell: (row) => <Text textAlign="center">{row.getValue()}</Text>,
    },
    {
        header: 'Status',
        accessorKey: 'status',
    },
    {
        header: 'Profile Progress',
        accessorKey: 'progress',
        cell: (row) => <Text textAlign="center">{row.getValue()}</Text>,
    },
]

const kolomTabelPerson: ColumnDef<Person, any>[] = [
    {
        header: 'No',
        footer: props => props.column.id,
        cell: (row) => {
            return (
                <Text textAlign="center">{row.row.index + 1}</Text>
            )
        }
    },
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
        "firstName": "Joe",
        "lastName": "Dirte",
        "age": 45,
        "visits": 20,
        "status": "complicated",
        "progress": 10
    },
    {
        "firstName": "Alice",
        "lastName": "Smith",
        "age": 29,
        "visits": 8,
        "status": "single",
        "progress": 5
    },
    {
        "firstName": "John",
        "lastName": "Doe",
        "age": 37,
        "visits": 15,
        "status": "complicated",
        "progress": 3
    },
    {
        "firstName": "Sarah",
        "lastName": "Johnson",
        "age": 52,
        "visits": 12,
        "status": "married",
        "progress": 9
    },
    {
        "firstName": "Michael",
        "lastName": "Brown",
        "age": 41,
        "visits": 18,
        "status": "single",
        "progress": 7
    },
    {
        "firstName": "Emma",
        "lastName": "Wilson",
        "age": 34,
        "visits": 6,
        "status": "complicated",
        "progress": 2
    },
    {
        "firstName": "David",
        "lastName": "Lee",
        "age": 47,
        "visits": 10,
        "status": "married",
        "progress": 8
    },
    {
        "firstName": "Olivia",
        "lastName": "Garcia",
        "age": 26,
        "visits": 14,
        "status": "single",
        "progress": 6
    },
    {
        "firstName": "Daniel",
        "lastName": "Miller",
        "age": 33,
        "visits": 9,
        "status": "complicated",
        "progress": 4
    },
    {
        "firstName": "Sophia",
        "lastName": "Martinez",
        "age": 38,
        "visits": 16,
        "status": "married",
        "progress": 9
    },
    {
        "firstName": "William",
        "lastName": "Taylor",
        "age": 31,
        "visits": 7,
        "status": "single",
        "progress": 3
    },
    {
        "firstName": "Isabella",
        "lastName": "Anderson",
        "age": 43,
        "visits": 11,
        "status": "complicated",
        "progress": 7
    },
    {
        "firstName": "James",
        "lastName": "Jackson",
        "age": 49,
        "visits": 19,
        "status": "married",
        "progress": 10
    },
    {
        "firstName": "Ava",
        "lastName": "Harris",
        "age": 27,
        "visits": 13,
        "status": "single",
        "progress": 6
    },
    {
        "firstName": "Benjamin",
        "lastName": "Clark",
        "age": 39,
        "visits": 17,
        "status": "complicated",
        "progress": 8
    },
    {
        "firstName": "Mia",
        "lastName": "Lewis",
        "age": 35,
        "visits": 9,
        "status": "married",
        "progress": 5
    },
    {
        "firstName": "Jacob",
        "lastName": "Taylor",
        "age": 28,
        "visits": 14,
        "status": "single",
        "progress": 4
    },
    {
        "firstName": "Charlotte",
        "lastName": "White",
        "age": 42,
        "visits": 11,
        "status": "complicated",
        "progress": 7
    },
    {
        "firstName": "Liam",
        "lastName": "Adams",
        "age": 32,
        "visits": 8,
        "status": "married",
        "progress": 6
    },
    {
        "firstName": "Harper",
        "lastName": "Green",
        "age": 36,
        "visits": 15,
        "status": "single",
        "progress": 3
    },
    {
        "firstName": "Elijah",
        "lastName": "Mitchell",
        "age": 46,
        "visits": 20,
        "status": "complicated",
        "progress": 9
    },
    {
        "firstName": "Amelia",
        "lastName": "Anderson",
        "age": 30,
        "visits": 7,
        "status": "married",
        "progress": 5
    },
    {
        "firstName": "Logan",
        "lastName": "Turner",
        "age": 25,
        "visits": 13,
        "status": "single",
        "progress": 2
    },
    {
        "firstName": "Sofia",
        "lastName": "Smith",
        "age": 33,
        "visits": 9,
        "status": "complicated",
        "progress": 4
    },
    {
        "firstName": "Henry",
        "lastName": "Martin",
        "age": 44,
        "visits": 16,
        "status": "married",
        "progress": 7
    },
    {
        "firstName": "Evelyn",
        "lastName": "Wilson",
        "age": 39,
        "visits": 10,
        "status": "single",
        "progress": 5
    },
    {
        "firstName": "Jackson",
        "lastName": "Brown",
        "age": 31,
        "visits": 18,
        "status": "complicated",
        "progress": 8
    },
    {
        "firstName": "Abigail",
        "lastName": "Garcia",
        "age": 40,
        "visits": 11,
        "status": "married",
        "progress": 6
    },
    {
        "firstName": "Sebastian",
        "lastName": "Cooper",
        "age": 26,
        "visits": 14,
        "status": "single",
        "progress": 3
    },
    {
        "firstName": "Mila",
        "lastName": "Adams",
        "age": 37,
        "visits": 9,
        "status": "complicated",
        "progress": 5
    },
    {
        "firstName": "Lucas",
        "lastName": "Parker",
        "age": 43,
        "visits": 17,
        "status": "married",
        "progress": 9
    },
    {
        "firstName": "Joe",
        "lastName": "Dirte",
        "age": 45,
        "visits": 20,
        "status": "complicated",
        "progress": 10
    },
    {
        "firstName": "Alice",
        "lastName": "Smith",
        "age": 36,
        "visits": 18,
        "status": "single",
        "progress": 8
    },
    {
        "firstName": "John",
        "lastName": "Doe",
        "age": 29,
        "visits": 12,
        "status": "complicated",
        "progress": 7
    },
    {
        "firstName": "Sarah",
        "lastName": "Johnson",
        "age": 52,
        "visits": 16,
        "status": "married",
        "progress": 9
    },
    {
        "firstName": "Michael",
        "lastName": "Brown",
        "age": 41,
        "visits": 15,
        "status": "single",
        "progress": 6
    },
    {
        "firstName": "Emma",
        "lastName": "Wilson",
        "age": 34,
        "visits": 9,
        "status": "complicated",
        "progress": 4
    },
    {
        "firstName": "David",
        "lastName": "Lee",
        "age": 47,
        "visits": 19,
        "status": "married",
        "progress": 10
    },
    {
        "firstName": "Olivia",
        "lastName": "Garcia",
        "age": 26,
        "visits": 14,
        "status": "single",
        "progress": 8
    },
    {
        "firstName": "Daniel",
        "lastName": "Miller",
        "age": 33,
        "visits": 11,
        "status": "complicated",
        "progress": 7
    },
    {
        "firstName": "Sophia",
        "lastName": "Martinez",
        "age": 38,
        "visits": 17,
        "status": "married",
        "progress": 9
    },
    {
        "firstName": "William",
        "lastName": "Taylor",
        "age": 31,
        "visits": 10,
        "status": "single",
        "progress": 6
    },
    {
        "firstName": "Isabella",
        "lastName": "Anderson",
        "age": 43,
        "visits": 13,
        "status": "complicated",
        "progress": 8
    },
    {
        "firstName": "James",
        "lastName": "Jackson",
        "age": 49,
        "visits": 20,
        "status": "married",
        "progress": 10
    },
    {
        "firstName": "Ava",
        "lastName": "Harris",
        "age": 27,
        "visits": 16,
        "status": "single",
        "progress": 7
    },
    {
        "firstName": "Benjamin",
        "lastName": "Clark",
        "age": 39,
        "visits": 12,
        "status": "complicated",
        "progress": 6
    },
    {
        "firstName": "Mia",
        "lastName": "Lewis",
        "age": 35,
        "visits": 14,
        "status": "married",
        "progress": 9
    },
    {
        "firstName": "Alexander",
        "lastName": "Hall",
        "age": 30,
        "visits": 8,
        "status": "single",
        "progress": 5
    },
    {
        "firstName": "Charlotte",
        "lastName": "White",
        "age": 42,
        "visits": 19,
        "status": "complicated",
        "progress": 10
    },
    {
        "firstName": "Ethan",
        "lastName": "Walker",
        "age": 28,
        "visits": 15,
        "status": "married",
        "progress": 8
    },
    {
        "firstName": "Scarlett",
        "lastName": "Baker",
        "age": 37,
        "visits": 11,
        "status": "single",
        "progress": 6
    },
    {
        "firstName": "Daniel",
        "lastName": "Rodriguez",
        "age": 32,
        "visits": 18,
        "status": "complicated",
        "progress": 9
    },
    {
        "firstName": "Emily",
        "lastName": "Adams",
        "age": 44,
        "visits": 13,
        "status": "married",
        "progress": 7
    },
    {
        "firstName": "Matthew",
        "lastName": "Allen",
        "age": 25,
        "visits": 10,
        "status": "single",
        "progress": 5
    },
    {
        "firstName": "Luna",
        "lastName": "Young",
        "age": 46,
        "visits": 16,
        "status": "complicated",
        "progress": 8
    },
    {
        "firstName": "Henry",
        "lastName": "King",
        "age": 29,
        "visits": 9,
        "status": "married",
        "progress": 6
    },
    {
        "firstName": "Avery",
        "lastName": "Scott",
        "age": 38,
        "visits": 14,
        "status": "single",
        "progress": 7
    },
    {
        "firstName": "Victoria",
        "lastName": "Robinson",
        "age": 33,
        "visits": 12,
        "status": "complicated",
        "progress": 9
    },
    {
        "firstName": "Liam",
        "lastName": "Young",
        "age": 31,
        "visits": 17,
        "status": "married",
        "progress": 10
    },
    {
        "firstName": "Grace",
        "lastName": "Carter",
        "age": 26,
        "visits": 15,
        "status": "single",
        "progress": 8
    }
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
export { kolomTabelBasic, kolomTabelPerson, dataTabelPerson, kolomTabelCharacter, dataTabelCharacter }
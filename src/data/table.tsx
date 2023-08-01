import { Berkas } from "@/types/berkas";
import { Character, Person } from "@/types/person";
import { fuzzySort } from "@/utils/table";
import {
  Flex,
  Text,
  Link,
  Box,
  useColorMode,
  Checkbox,
} from "@chakra-ui/react";
import { ColumnDef } from "@tanstack/table-core";
import NextLink from "next/link";

const kolomTabelBasic: ColumnDef<Person, any>[] = [
  {
    header: "No",
    cell: (row) => <Text textAlign="center">{row.row.index + 1}</Text>,
  },
  {
    header: "First Name",
    accessorKey: "firstName",
  },
  {
    header: "Last Name",
    accessorKey: "lastName",
  },
  {
    header: "Full Name",
    accessorKey: "fullName",
    accessorFn: (row) => `${row.firstName} ${row.lastName}`,
    cell: (row) => {
      return (
        <>
          <Text color="#181818" fontWeight="500">
            {row.getValue()}
          </Text>
          <Text color="#a8a8a8" fontWeight="300" fontSize="14px">
            Administrator
          </Text>
        </>
      );
    },
  },
  {
    header: "Visits",
    accessorKey: "visits",
    cell: (row) => <Text textAlign="center">{row.getValue()}</Text>,
  },
  {
    header: "Status",
    accessorKey: "status",
  },
  {
    header: "Profile Progress",
    accessorKey: "progress",
    cell: (row) => <Text textAlign="center">{row.getValue()}</Text>,
  },
];

const kolomTabelPerson: ColumnDef<Person, any>[] = [
  {
    header: "No",
    footer: (props) => props.column.id,
    cell: (row) => {
      return <Text textAlign="center">{row.row.index + 1}</Text>;
    },
  },
  {
    header: "Name",
    footer: (props) => props.column.id,
    columns: [
      {
        accessorKey: "firstName",
        cell: (info) => info.getValue(),
        footer: (props) => props.column.id,
      },
      {
        accessorFn: (row) => row.lastName,
        id: "lastName",
        cell: (info) => info.getValue(),
        header: () => <span>Last Name</span>,
        footer: (props) => props.column.id,
      },
      {
        accessorFn: (row) => `${row.firstName} ${row.lastName}`,
        id: "fullName",
        header: "Full Name",
        cell: (info) => info.getValue(),
        footer: (props) => props.column.id,
        filterFn: "fuzzy",
        sortingFn: fuzzySort,
      },
    ],
  },
  {
    header: "Info",
    footer: (props) => props.column.id,
    columns: [
      {
        accessorKey: "age",
        header: () => "Age",
        footer: (props) => props.column.id,
      },
      {
        header: "More Info",
        columns: [
          {
            accessorKey: "visits",
            header: () => <span>Visits </span>,
            footer: (props) => props.column.id,
          },
          {
            accessorKey: "status",
            header: "Status",
            footer: (props) => props.column.id,
          },
          {
            accessorKey: "progress",
            header: "Profile Progress",
            footer: (props) => props.column.id,
          },
        ],
      },
    ],
  },
];

const dataTabelPerson: Person[] = [
  {
    firstName: "Joe",
    lastName: "Dirte",
    age: 45,
    visits: 20,
    status: "complicated",
    progress: 10,
  },
  {
    firstName: "Alice",
    lastName: "Smith",
    age: 29,
    visits: 8,
    status: "single",
    progress: 5,
  },
  {
    firstName: "John",
    lastName: "Doe",
    age: 37,
    visits: 15,
    status: "complicated",
    progress: 3,
  },
  {
    firstName: "Sarah",
    lastName: "Johnson",
    age: 52,
    visits: 12,
    status: "married",
    progress: 9,
  },
  {
    firstName: "Michael",
    lastName: "Brown",
    age: 41,
    visits: 18,
    status: "single",
    progress: 7,
  },
  {
    firstName: "Emma",
    lastName: "Wilson",
    age: 34,
    visits: 6,
    status: "complicated",
    progress: 2,
  },
  {
    firstName: "David",
    lastName: "Lee",
    age: 47,
    visits: 10,
    status: "married",
    progress: 8,
  },
  {
    firstName: "Olivia",
    lastName: "Garcia",
    age: 26,
    visits: 14,
    status: "single",
    progress: 6,
  },
  {
    firstName: "Daniel",
    lastName: "Miller",
    age: 33,
    visits: 9,
    status: "complicated",
    progress: 4,
  },
  {
    firstName: "Sophia",
    lastName: "Martinez",
    age: 38,
    visits: 16,
    status: "married",
    progress: 9,
  },
  {
    firstName: "William",
    lastName: "Taylor",
    age: 31,
    visits: 7,
    status: "single",
    progress: 3,
  },
  {
    firstName: "Isabella",
    lastName: "Anderson",
    age: 43,
    visits: 11,
    status: "complicated",
    progress: 7,
  },
  {
    firstName: "James",
    lastName: "Jackson",
    age: 49,
    visits: 19,
    status: "married",
    progress: 10,
  },
  {
    firstName: "Ava",
    lastName: "Harris",
    age: 27,
    visits: 13,
    status: "single",
    progress: 6,
  },
  {
    firstName: "Benjamin",
    lastName: "Clark",
    age: 39,
    visits: 17,
    status: "complicated",
    progress: 8,
  },
  {
    firstName: "Mia",
    lastName: "Lewis",
    age: 35,
    visits: 9,
    status: "married",
    progress: 5,
  },
  {
    firstName: "Jacob",
    lastName: "Taylor",
    age: 28,
    visits: 14,
    status: "single",
    progress: 4,
  },
  {
    firstName: "Charlotte",
    lastName: "White",
    age: 42,
    visits: 11,
    status: "complicated",
    progress: 7,
  },
  {
    firstName: "Liam",
    lastName: "Adams",
    age: 32,
    visits: 8,
    status: "married",
    progress: 6,
  },
  {
    firstName: "Harper",
    lastName: "Green",
    age: 36,
    visits: 15,
    status: "single",
    progress: 3,
  },
  {
    firstName: "Elijah",
    lastName: "Mitchell",
    age: 46,
    visits: 20,
    status: "complicated",
    progress: 9,
  },
  {
    firstName: "Amelia",
    lastName: "Anderson",
    age: 30,
    visits: 7,
    status: "married",
    progress: 5,
  },
  {
    firstName: "Logan",
    lastName: "Turner",
    age: 25,
    visits: 13,
    status: "single",
    progress: 2,
  },
  // {
  //     "firstName": "Sofia",
  //     "lastName": "Smith",
  //     "age": 33,
  //     "visits": 9,
  //     "status": "complicated",
  //     "progress": 4
  // },
  // {
  //     "firstName": "Henry",
  //     "lastName": "Martin",
  //     "age": 44,
  //     "visits": 16,
  //     "status": "married",
  //     "progress": 7
  // },
  // {
  //     "firstName": "Evelyn",
  //     "lastName": "Wilson",
  //     "age": 39,
  //     "visits": 10,
  //     "status": "single",
  //     "progress": 5
  // },
  // {
  //     "firstName": "Jackson",
  //     "lastName": "Brown",
  //     "age": 31,
  //     "visits": 18,
  //     "status": "complicated",
  //     "progress": 8
  // },
  // {
  //     "firstName": "Abigail",
  //     "lastName": "Garcia",
  //     "age": 40,
  //     "visits": 11,
  //     "status": "married",
  //     "progress": 6
  // },
  // {
  //     "firstName": "Sebastian",
  //     "lastName": "Cooper",
  //     "age": 26,
  //     "visits": 14,
  //     "status": "single",
  //     "progress": 3
  // },
  // {
  //     "firstName": "Mila",
  //     "lastName": "Adams",
  //     "age": 37,
  //     "visits": 9,
  //     "status": "complicated",
  //     "progress": 5
  // },
  // {
  //     "firstName": "Lucas",
  //     "lastName": "Parker",
  //     "age": 43,
  //     "visits": 17,
  //     "status": "married",
  //     "progress": 9
  // },
  // {
  //     "firstName": "Joe",
  //     "lastName": "Dirte",
  //     "age": 45,
  //     "visits": 20,
  //     "status": "complicated",
  //     "progress": 10
  // },
  // {
  //     "firstName": "Alice",
  //     "lastName": "Smith",
  //     "age": 36,
  //     "visits": 18,
  //     "status": "single",
  //     "progress": 8
  // },
  // {
  //     "firstName": "John",
  //     "lastName": "Doe",
  //     "age": 29,
  //     "visits": 12,
  //     "status": "complicated",
  //     "progress": 7
  // },
  // {
  //     "firstName": "Sarah",
  //     "lastName": "Johnson",
  //     "age": 52,
  //     "visits": 16,
  //     "status": "married",
  //     "progress": 9
  // },
  // {
  //     "firstName": "Michael",
  //     "lastName": "Brown",
  //     "age": 41,
  //     "visits": 15,
  //     "status": "single",
  //     "progress": 6
  // },
  // {
  //     "firstName": "Emma",
  //     "lastName": "Wilson",
  //     "age": 34,
  //     "visits": 9,
  //     "status": "complicated",
  //     "progress": 4
  // },
  // {
  //     "firstName": "David",
  //     "lastName": "Lee",
  //     "age": 47,
  //     "visits": 19,
  //     "status": "married",
  //     "progress": 10
  // },
  // {
  //     "firstName": "Olivia",
  //     "lastName": "Garcia",
  //     "age": 26,
  //     "visits": 14,
  //     "status": "single",
  //     "progress": 8
  // },
  // {
  //     "firstName": "Daniel",
  //     "lastName": "Miller",
  //     "age": 33,
  //     "visits": 11,
  //     "status": "complicated",
  //     "progress": 7
  // },
  // {
  //     "firstName": "Sophia",
  //     "lastName": "Martinez",
  //     "age": 38,
  //     "visits": 17,
  //     "status": "married",
  //     "progress": 9
  // },
  // {
  //     "firstName": "William",
  //     "lastName": "Taylor",
  //     "age": 31,
  //     "visits": 10,
  //     "status": "single",
  //     "progress": 6
  // },
  // {
  //     "firstName": "Isabella",
  //     "lastName": "Anderson",
  //     "age": 43,
  //     "visits": 13,
  //     "status": "complicated",
  //     "progress": 8
  // },
  // {
  //     "firstName": "James",
  //     "lastName": "Jackson",
  //     "age": 49,
  //     "visits": 20,
  //     "status": "married",
  //     "progress": 10
  // },
  // {
  //     "firstName": "Ava",
  //     "lastName": "Harris",
  //     "age": 27,
  //     "visits": 16,
  //     "status": "single",
  //     "progress": 7
  // },
  // {
  //     "firstName": "Benjamin",
  //     "lastName": "Clark",
  //     "age": 39,
  //     "visits": 12,
  //     "status": "complicated",
  //     "progress": 6
  // },
  // {
  //     "firstName": "Mia",
  //     "lastName": "Lewis",
  //     "age": 35,
  //     "visits": 14,
  //     "status": "married",
  //     "progress": 9
  // },
  // {
  //     "firstName": "Alexander",
  //     "lastName": "Hall",
  //     "age": 30,
  //     "visits": 8,
  //     "status": "single",
  //     "progress": 5
  // },
  // {
  //     "firstName": "Charlotte",
  //     "lastName": "White",
  //     "age": 42,
  //     "visits": 19,
  //     "status": "complicated",
  //     "progress": 10
  // },
  // {
  //     "firstName": "Ethan",
  //     "lastName": "Walker",
  //     "age": 28,
  //     "visits": 15,
  //     "status": "married",
  //     "progress": 8
  // },
  // {
  //     "firstName": "Scarlett",
  //     "lastName": "Baker",
  //     "age": 37,
  //     "visits": 11,
  //     "status": "single",
  //     "progress": 6
  // },
  // {
  //     "firstName": "Daniel",
  //     "lastName": "Rodriguez",
  //     "age": 32,
  //     "visits": 18,
  //     "status": "complicated",
  //     "progress": 9
  // },
  // {
  //     "firstName": "Emily",
  //     "lastName": "Adams",
  //     "age": 44,
  //     "visits": 13,
  //     "status": "married",
  //     "progress": 7
  // },
  // {
  //     "firstName": "Matthew",
  //     "lastName": "Allen",
  //     "age": 25,
  //     "visits": 10,
  //     "status": "single",
  //     "progress": 5
  // },
  // {
  //     "firstName": "Luna",
  //     "lastName": "Young",
  //     "age": 46,
  //     "visits": 16,
  //     "status": "complicated",
  //     "progress": 8
  // },
  // {
  //     "firstName": "Henry",
  //     "lastName": "King",
  //     "age": 29,
  //     "visits": 9,
  //     "status": "married",
  //     "progress": 6
  // },
  // {
  //     "firstName": "Avery",
  //     "lastName": "Scott",
  //     "age": 38,
  //     "visits": 14,
  //     "status": "single",
  //     "progress": 7
  // },
  // {
  //     "firstName": "Victoria",
  //     "lastName": "Robinson",
  //     "age": 33,
  //     "visits": 12,
  //     "status": "complicated",
  //     "progress": 9
  // },
  // {
  //     "firstName": "Liam",
  //     "lastName": "Young",
  //     "age": 31,
  //     "visits": 17,
  //     "status": "married",
  //     "progress": 10
  // },
  // {
  //     "firstName": "Grace",
  //     "lastName": "Carter",
  //     "age": 26,
  //     "visits": 15,
  //     "status": "single",
  //     "progress": 8
  // }
];

const kolomTabelCharacter: ColumnDef<Character, any>[] = [
  {
    accessorFn: (row) => row.id,
    id: "no",
    header: "ID Character",
    footer: (props) => props.column.id,
    cell: (info) => info.getValue(),
  },
  {
    accessorFn: (row) => row.name,
    id: "name",
    header: "Name",
    footer: (props) => props.column.id,
    cell: (info) => info.getValue(),
    filterFn: "fuzzy",
    sortingFn: fuzzySort,
  },
  {
    accessorFn: (row) => row.location.name,
    id: "livesIn",
    header: "Lives In",
    footer: (props) => props.column.id,
    cell: (info) => info.getValue(),
    filterFn: "fuzzy",
    sortingFn: fuzzySort,
  },
  {
    accessorFn: (row) => row.species,
    id: "species",
    header: "Species",
    footer: (props) => props.column.id,
    cell: (info) => info.getValue(),
    filterFn: "fuzzy",
    sortingFn: fuzzySort,
  },
];

const dataTabelCharacter: Character[] = [
  {
    id: 1,
    name: "Rick Sanchez",
    species: "Human",
    location: {
      name: "Citadel of Ricks",
      url: "https://rickandmortyapi.com/api/location/3",
    },
    image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  },
  {
    id: 2,
    name: "Morty Smith",
    species: "Human",
    location: {
      name: "Citadel of Ricks",
      url: "https://rickandmortyapi.com/api/location/3",
    },
    image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
  },
  {
    id: 3,
    name: "Summer Smith",
    species: "Human",
    location: {
      name: "Earth (Replacement Dimension)",
      url: "https://rickandmortyapi.com/api/location/20",
    },
    image: "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
  },
];

const kolomTabelBerkas: ColumnDef<Berkas, any>[] = [
  {
    accessorFn: (row) => row.name,
    id: "name",
    header: "Name",
    footer: (props) => props.column.id,
    cell: (row) => {
      const { colorMode } = useColorMode();
      return (
        <Link as={NextLink} href="#">
          <Flex
            className="file__container"
            display="inline-flex"
            alignItems="center"
            transition="color .15s"
            _hover={{
              color: "#008fff",
            }}
          >
            <Flex
              className="file__preview"
              pos="relative"
              justifyContent="center"
              alignItems="center"
              flexShrink="0"
              w="96px"
              h="72px"
              borderRadius="8px"
              bg={colorMode == "light" ? "#aadaff" : "#444444"}
              fontSize="0"
            />
            <Box className="file__detail" pl="24px">
              <Box
                className="file__title"
                mb="9px"
                fontSize="16px"
                lineHeight="1.1875"
                fontWeight="600"
              >
                <Text variant="tabletitle">{row.row.original.name}</Text>
              </Box>
              <Box
                className="file__subtitle"
                fontSize="13px"
                lineHeight="1.38462"
                fontWeight="600"
                color="#808080"
              >
                {row.row.original.extension} . {row.row.original.size} KB
              </Box>
            </Box>
          </Flex>
        </Link>
      );
    },
    filterFn: "fuzzy",
    sortingFn: fuzzySort,
  },
  {
    accessorFn: (row) => row.type,
    id: "type",
    header: "Jenis",
    footer: (props) => props.column.id,
    cell: (row) => (
      <Text textTransform="capitalize" color="#7fba7a" fontSize="14px">
        {row.getValue()}
      </Text>
    ),
    filterFn: "fuzzy",
    sortingFn: fuzzySort,
  },
  {
    accessorFn: (row) => row.create_date,
    id: "create_date",
    header: "Tanggal",
    footer: (props) => props.column.id,
    cell: (info) => <Text variant="tabletext">{info.getValue()}</Text>,
    filterFn: "fuzzy",
    sortingFn: fuzzySort,
  },
  {
    accessorFn: (row) => row.description,
    id: "description",
    header: "Deskripsi",
    footer: (props) => props.column.id,
    cell: (info) => <Text variant="tabletext">{info.getValue()}</Text>,
    filterFn: "fuzzy",
    sortingFn: fuzzySort,
  },
];

const dataTabelBerkas: Berkas[] = [
  {
    id: 1,
    name: "Sertif Bukti Wirausaha",
    extension: "PDF",
    size: 1200,
    type: "sertifikat",
    create_date: "2023-02-03 08:49",
    description: "Dokumen bukti wirausaha slip pendapatan dan gaji",
  },
  {
    id: 2,
    name: "Foto_001",
    extension: "jpg",
    size: 800,
    type: "foto",
    create_date: "2023-02-04 11:25",
    description: "Scenic landscape.",
  },
  {
    id: 3,
    name: "Sertif Prestasi",
    extension: "PDF",
    size: 1050,
    type: "sertifikat",
    create_date: "2023-02-05 15:30",
    description: "Prestigious achievement award.",
  },
  {
    id: 4,
    name: "Foto_002",
    extension: "png",
    size: 650,
    type: "foto",
    create_date: "2023-02-06 09:15",
    description: "Family gathering.",
  },
  {
    id: 5,
    name: "Sertif Penghargaan",
    extension: "PDF",
    size: 850,
    type: "sertifikat",
    create_date: "2023-02-07 14:05",
    description: "Certificate of appreciation.",
  },
  {
    id: 6,
    name: "Foto_003",
    extension: "jpg",
    size: 750,
    type: "foto",
    create_date: "2023-02-08 12:20",
    description: "Artistic portrait.",
  },
  {
    id: 7,
    name: "Sertif Keahlian",
    extension: "PDF",
    size: 920,
    type: "sertifikat",
    create_date: "2023-02-09 10:10",
    description: "Skill certification.",
  },
  {
    id: 8,
    name: "Foto_004",
    extension: "png",
    size: 900,
    type: "foto",
    create_date: "2023-02-10 16:35",
    description: "Nature's beauty.",
  },
  {
    id: 9,
    name: "Sertif Peningkatan",
    extension: "PDF",
    size: 800,
    type: "sertifikat",
    create_date: "2023-02-11 11:40",
    description: "Improvement achievement.",
  },
  {
    id: 10,
    name: "Foto_005",
    extension: "jpg",
    size: 720,
    type: "foto",
    create_date: "2023-02-12 13:55",
    description: "Urban exploration.",
  },
  {
    id: 11,
    name: "Sertif Keterampilan",
    extension: "PDF",
    size: 950,
    type: "sertifikat",
    create_date: "2023-02-13 15:20",
    description: "Skill mastery recognition.",
  },
  {
    id: 12,
    name: "Foto_006",
    extension: "png",
    size: 820,
    type: "foto",
    create_date: "2023-02-14 08:30",
    description: "Pets' day out.",
  },
  {
    id: 13,
    name: "Sertif Perseverance",
    extension: "PDF",
    size: 880,
    type: "sertifikat",
    create_date: "2023-02-15 09:45",
    description: "Endurance and determination award.",
  },
  {
    id: 14,
    name: "Foto_007",
    extension: "jpg",
    size: 780,
    type: "foto",
    create_date: "2023-02-16 10:50",
    description: "Street photography.",
  },
  {
    id: 15,
    name: "Sertif Kreativitas",
    extension: "PDF",
    size: 1050,
    type: "sertifikat",
    create_date: "2023-02-17 12:05",
    description: "Creative thinking acknowledgment.",
  },
  {
    id: 16,
    name: "Foto_008",
    extension: "png",
    size: 690,
    type: "foto",
    create_date: "2023-02-18 14:15",
    description: "Sunset on the beach.",
  },
  {
    id: 17,
    name: "Sertif Dedikasi",
    extension: "PDF",
    size: 970,
    type: "sertifikat",
    create_date: "2023-02-19 15:30",
    description: "Dedicated service recognition.",
  },
  {
    id: 18,
    name: "Foto_009",
    extension: "jpg",
    size: 770,
    type: "foto",
    create_date: "2023-02-20 16:40",
    description: "Adventure time.",
  },
  {
    id: 19,
    name: "Sertif Kepemimpinan",
    extension: "PDF",
    size: 880,
    type: "sertifikat",
    create_date: "2023-02-21 09:10",
    description: "Leadership excellence award.",
  },
  {
    id: 20,
    name: "Foto_010",
    extension: "png",
    size: 740,
    type: "foto",
    create_date: "2023-02-22 10:20",
    description: "City lights.",
  },
  {
    id: 21,
    name: "Sertif Inovasi",
    extension: "PDF",
    size: 920,
    type: "sertifikat",
    create_date: "2023-02-23 11:30",
    description: "Innovative ideas accolade.",
  },
  {
    id: 22,
    name: "Foto_011",
    extension: "jpg",
    size: 710,
    type: "foto",
    create_date: "2023-02-24 12:45",
    description: "Festive celebration.",
  },
  {
    id: 23,
    name: "Sertif Kontribusi",
    extension: "PDF",
    size: 930,
    type: "sertifikat",
    create_date: "2023-02-25 14:00",
    description: "Contributions to the community recognition.",
  },
  {
    id: 24,
    name: "Foto_012",
    extension: "png",
    size: 680,
    type: "foto",
    create_date: "2023-02-26 15:15",
    description: "Exploring the wilderness.",
  },
  {
    id: 25,
    name: "Sertif Dedikasi",
    extension: "PDF",
    size: 890,
    type: "sertifikat",
    create_date: "2023-02-27 16:25",
    description: "Exemplary dedication award.",
  },
  {
    id: 26,
    name: "Foto_013",
    extension: "jpg",
    size: 750,
    type: "foto",
    create_date: "2023-02-28 08:50",
    description: "Family picnic.",
  },
  {
    id: 27,
    name: "Sertif Kewirausahaan",
    extension: "PDF",
    size: 990,
    type: "sertifikat",
    create_date: "2023-03-01 11:05",
    description: "Entrepreneurial excellence recognition.",
  },
  {
    id: 28,
    name: "Foto_014",
    extension: "png",
    size: 700,
    type: "foto",
    create_date: "2023-03-02 14:20",
    description: "Cultural festival.",
  },
  {
    id: 29,
    name: "Sertif Penghargaan",
    extension: "PDF",
    size: 910,
    type: "sertifikat",
    create_date: "2023-03-03 15:40",
    description: "Acknowledgment of outstanding performance.",
  },
  {
    id: 30,
    name: "Foto_015",
    extension: "jpg",
    size: 730,
    type: "foto",
    create_date: "2023-03-04 16:55",
    description: "A day in the park.",
  },
];
export {
  kolomTabelBasic,
  kolomTabelPerson,
  dataTabelPerson,
  kolomTabelCharacter,
  dataTabelCharacter,
  kolomTabelBerkas,
  dataTabelBerkas,
};

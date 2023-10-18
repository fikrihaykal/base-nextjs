import { Berkas } from "@/types/berkas";
import { Character, Person } from "@/types/person";
import { fuzzySort } from "@/utils/table";
import {
  Flex,
  Text,
  Link,
  Box,
  // useColorMode,
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
      return (
        <Link as={NextLink} href="#" data-group="card--shadow">
          <Flex
            className="file__container"
            display="inline-flex"
            alignItems="center"
            transition="color .15s"
            _groupHover={{
              color: "#008fff",
            }}
            w="100%"
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
              bgImage={row.row.original.fileDir}
              bgSize="cover"
              fontSize="0"
            />
            <Box className="file__detail" pl="24px">
              <Box
                className="file__title"
                mb="9px"
                fontSize="16px"
                lineHeight="1.1875"
                fontWeight="600"
                _groupHover={{
                  color: "#008fff",
                }}
              >
                <Text
                  variant="tabletitle"
                  data-group="card--shadow"
                  _groupHover={{
                    color: "#008fff",
                  }}
                >
                  {row.row.original.name}
                </Text>
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
    filterFn: "date",
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
    fileDir: "/images/cert.jpg",
    size: 1200,
    type: "sertifikat",
    create_date: "2023-02-03 08:49",
    description: "Dokumen bukti wirausaha slip pendapatan dan gaji",
  },
  {
    id: 2,
    name: "Foto Profil 001",
    extension: "JPG",
    fileDir: "/images/profilepicmine.jpg",
    size: 800,
    type: "foto",
    create_date: "2023-02-05 14:20",
    description: "Foto profil pengguna",
  },
  {
    id: 3,
    name: "Sertif Kursus Seni",
    extension: "PDF",
    fileDir: "/images/cert.jpg",
    size: 1050,
    type: "sertifikat",
    create_date: "2023-02-08 11:05",
    description: "Sertifikat kursus seni lukis dan melukis",
  },
  {
    id: 4,
    name: "Foto Liburan 2023",
    extension: "PNG",
    fileDir: "/images/profilepicmine.jpg",
    size: 650,
    type: "foto",
    create_date: "2023-02-10 16:30",
    description: "Foto liburan ke pantai",
  },
  {
    id: 5,
    name: "Sertif Kompetisi Musik",
    extension: "PDF",
    fileDir: "/images/cert.jpg",
    size: 980,
    type: "sertifikat",
    create_date: "2023-02-12 09:15",
    description: "Sertifikat juara kompetisi musik tingkat nasional",
  },
  {
    id: 6,
    name: "Foto Keluarga",
    extension: "JPG",
    fileDir: "/images/profilepicmine.jpg",
    size: 700,
    type: "foto",
    create_date: "2023-02-15 18:50",
    description: "Foto bersama keluarga saat acara ulang tahun",
  },
  {
    id: 7,
    name: "Sertif Pelatihan IT",
    extension: "PDF",
    fileDir: "/images/cert.jpg",
    size: 850,
    type: "sertifikat",
    create_date: "2023-02-18 13:25",
    description: "Sertifikat pelatihan teknologi informasi",
  },
  {
    id: 8,
    name: "Foto Wisuda",
    extension: "PNG",
    fileDir: "/images/profilepicmine.jpg",
    size: 720,
    type: "foto",
    create_date: "2023-02-20 10:40",
    description: "Foto saat acara wisuda universitas",
  },
  {
    id: 9,
    name: "Sertif Workshop Fotografi",
    extension: "PDF",
    fileDir: "/images/cert.jpg",
    size: 900,
    type: "sertifikat",
    create_date: "2023-02-23 12:55",
    description: "Sertifikat mengikuti workshop fotografi",
  },
  {
    id: 10,
    name: "Foto Pemandangan",
    extension: "JPG",
    fileDir: "/images/profilepicmine.jpg",
    size: 620,
    type: "foto",
    create_date: "2023-02-25 09:10",
    description: "Foto indah pemandangan gunung",
  },
  {
    id: 11,
    name: "Sertif Seminar Pendidikan",
    extension: "PDF",
    fileDir: "/images/cert.jpg",
    size: 830,
    type: "sertifikat",
    create_date: "2023-02-28 15:05",
    description: "Sertifikat mengikuti seminar pendidikan",
  },
  {
    id: 12,
    name: "Foto Anak",
    extension: "PNG",
    fileDir: "/images/profilepicmine.jpg",
    size: 690,
    type: "foto",
    create_date: "2023-03-02 17:30",
    description: "Foto lucu anak bermain di taman",
  },
  {
    id: 13,
    name: "Sertif Pelatihan Bahasa",
    extension: "PDF",
    fileDir: "/images/cert.jpg",
    size: 820,
    type: "sertifikat",
    create_date: "2023-03-05 11:15",
    description: "Sertifikat pelatihan bahasa inggris",
  },
  {
    id: 14,
    name: "Foto Makanan",
    extension: "JPG",
    fileDir: "/images/profilepicmine.jpg",
    size: 670,
    type: "foto",
    create_date: "2023-03-08 14:20",
    description: "Foto hidangan makanan lezat",
  },
  {
    id: 15,
    name: "Sertif Keahlian Teknik",
    extension: "PDF",
    fileDir: "/images/cert.jpg",
    size: 790,
    type: "sertifikat",
    create_date: "2023-03-10 09:50",
    description: "Sertifikat keahlian teknik mesin",
  },
  {
    id: 16,
    name: "Foto Senja",
    extension: "PNG",
    fileDir: "/images/profilepicmine.jpg",
    size: 740,
    type: "foto",
    create_date: "2023-03-12 18:40",
    description: "Foto indah matahari terbenam di pantai",
  },
  {
    id: 17,
    name: "Sertif Kursus Bisnis",
    extension: "PDF",
    fileDir: "/images/cert.jpg",
    size: 880,
    type: "sertifikat",
    create_date: "2023-03-15 12:30",
    description: "Sertifikat kursus manajemen bisnis",
  },
  {
    id: 18,
    name: "Foto Taman",
    extension: "JPG",
    fileDir: "/images/profilepicmine.jpg",
    size: 610,
    type: "foto",
    create_date: "2023-03-18 16:55",
    description: "Foto indah taman bunga",
  },
  {
    id: 19,
    name: "Sertif Lomba Seni",
    extension: "PDF",
    fileDir: "/images/cert.jpg",
    size: 940,
    type: "sertifikat",
    create_date: "2023-03-20 11:10",
    description: "Sertifikat juara lomba seni tari",
  },
  {
    id: 20,
    name: "Foto Pasangan",
    extension: "PNG",
    fileDir: "/images/profilepicmine.jpg",
    size: 690,
    type: "foto",
    create_date: "2023-03-23 13:45",
    description: "Foto romantis bersama pasangan",
  },
  {
    id: 21,
    name: "Sertif Workshop Komputer",
    extension: "PDF",
    fileDir: "/images/cert.jpg",
    size: 870,
    type: "sertifikat",
    create_date: "2023-03-25 09:30",
    description: "Sertifikat workshop penggunaan komputer",
  },
  {
    id: 22,
    name: "Foto Hewan Peliharaan",
    extension: "JPG",
    fileDir: "/images/profilepicmine.jpg",
    size: 630,
    type: "foto",
    create_date: "2023-03-28 15:20",
    description: "Foto lucu hewan peliharaan",
  },
  {
    id: 23,
    name: "Sertif Pelatihan Keamanan",
    extension: "PDF",
    fileDir: "/images/cert.jpg",
    size: 920,
    type: "sertifikat",
    create_date: "2023-03-30 10:15",
    description: "Sertifikat pelatihan keamanan dan penjagaan",
  },
  {
    id: 24,
    name: "Foto Pemandangan 002",
    extension: "PNG",
    fileDir: "/images/profilepicmine.jpg",
    size: 710,
    type: "foto",
    create_date: "2023-04-02 18:30",
    description: "Foto pemandangan alam yang menakjubkan",
  },
  {
    id: 25,
    name: "Sertif Pelatihan Bisnis",
    extension: "PDF",
    fileDir: "/images/cert.jpg",
    size: 850,
    type: "sertifikat",
    create_date: "2023-04-05 12:55",
    description: "Sertifikat pelatihan strategi bisnis",
  },
  {
    id: 26,
    name: "Foto Bermain Olahraga",
    extension: "JPG",
    fileDir: "/images/profilepicmine.jpg",
    size: 670,
    type: "foto",
    create_date: "2023-04-08 16:40",
    description: "Foto saat bermain olahraga bersama teman",
  },
  {
    id: 27,
    name: "Sertif Lomba Futsal",
    extension: "PDF",
    fileDir: "/images/cert.jpg",
    size: 890,
    type: "sertifikat",
    create_date: "2023-04-10 09:30",
    description: "Sertifikat juara lomba futsal",
  },
  {
    id: 28,
    name: "Foto Wisata Alam",
    extension: "PNG",
    fileDir: "/images/profilepicmine.jpg",
    size: 730,
    type: "foto",
    create_date: "2023-04-12 15:20",
    description: "Foto indah saat berwisata alam",
  },
  {
    id: 29,
    name: "Sertif Seminar Keuangan",
    extension: "PDF",
    fileDir: "/images/cert.jpg",
    size: 920,
    type: "sertifikat",
    create_date: "2023-04-15 11:15",
    description: "Sertifikat mengikuti seminar keuangan",
  },
  {
    id: 30,
    name: "Foto Kelas",
    extension: "JPG",
    fileDir: "/images/profilepicmine.jpg",
    size: 650,
    type: "foto",
    create_date: "2023-04-18 17:30",
    description: "Foto suasana belajar di dalam kelas",
  },
];

export {
  kolomTabelBasic,
  kolomTabelPerson,
  dataTabelPerson,
  kolomTabelCharacter,
  dataTabelCharacter,
  kolomTabelBerkas,
  dataTabelBerkas
};

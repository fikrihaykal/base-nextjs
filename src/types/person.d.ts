interface Person {
    firstName: string
    lastName: string
    age: number
    visits: number
    progress: number
    status: 'married' | 'complicated' | 'single'
    subRows?: Person[]
}

interface Location {
    name: string;
    url: string;
}

interface Character {
    id: number;
    name: string;
    image: string;
    species: string;
    location: Location;
}

export { Person, Character, Location }
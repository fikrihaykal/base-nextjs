
import PageTransition from "@/components/PageTransitions";
import TableScroll from "@/components/organisms/TableScroll";
import { kolomTabelCharacter } from "@/data/table";

const Table = () => {

    return (
        <PageTransition pageTitle="Table Scroll">
            <TableScroll columns={kolomTabelCharacter} url={"https://rickandmortyapi.com/api/character"} name={"tabel-karakter"} />
        </PageTransition>
    );

};

export default Table;
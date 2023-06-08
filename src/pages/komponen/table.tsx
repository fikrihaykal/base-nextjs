import PageTransition from "@/components/PageTransitions";
import TableIts from "@/components/organisms/TableIts";
import { dataTabelPerson, kolomTabelPerson } from "@/data/table";

const Table = () => {

    return (
        <>
            <PageTransition pageTitle="Table">
                <TableIts columns={kolomTabelPerson} data={dataTabelPerson} />
            </PageTransition>
        </>
    );
};

export default Table;
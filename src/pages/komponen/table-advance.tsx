import PageTransition from "@/components/PageTransitions";
import TableAdvance from "@/components/organisms/TableAdvance";
import { dataTabelPerson, kolomTabelPerson } from "@/data/table";

const Table = () => {

    return (
        <>
            <PageTransition pageTitle="Table Advance">
                <TableAdvance columns={kolomTabelPerson} data={dataTabelPerson} />
            </PageTransition>
        </>
    );
};

export default Table;
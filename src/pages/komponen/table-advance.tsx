import PageTransition from "@/components/PageLayout";
import TableAdvance from "@/components/organisms/OldTableAdvance";
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
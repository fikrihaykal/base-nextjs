import PageTransition from "@/components/PageTransitions";
import TableBasic from "@/components/organisms/TableBasic";
import { dataTabelPerson, kolomTabelBasic } from "@/data/table";

const Table = () => {

    return (
        <>
            <PageTransition pageTitle="Table Basic">
                <TableBasic columns={kolomTabelBasic} data={dataTabelPerson} />
            </PageTransition>
        </>
    );
};

export default Table;
import PageTransition from "@/components/PageLayout";
import { TableContainer, Table, Thead, Tr, Th, Tbody, Td } from "@chakra-ui/react";

const TableCustom = () => {

    return (
        <>
            <PageTransition pageTitle="Table Custom">
                <TableContainer>
                    <Table variant='simple'>
                        <Thead>
                            <Tr>
                                <Th>No</Th>
                                <Th>First Name</Th>
                                <Th>Last Name</Th>
                                <Th>Full Name</Th>
                                <Th>Status</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td rowSpan={2}>1</Td>
                                <Td>Fikri</Td>
                                <Td>Haykal</Td>
                                <Td>Fikri Haykal</Td>
                                <Td>19</Td>
                            </Tr>
                            <Tr>
                                <Td>Haykal</Td>
                                <Td>Fikri</Td>
                                <Td>Haykal Fikri</Td>
                                <Td>19</Td>
                            </Tr>
                            <Tr>
                                <Td rowSpan={3}>2</Td>
                                <Td colSpan={2}>Sulthon Nashir</Td>
                                <Td>Nashir</Td>
                                <Td>19</Td>
                            </Tr>
                            <Tr>
                                <Td>Sulthon</Td>
                                <Td colSpan={2}>Sulthon Nashir</Td>
                                <Td>19</Td>
                            </Tr>
                            <Tr>
                                <Td colSpan={2}>Sulthon</Td>
                                <Td>Sulthon Nashir</Td>
                                <Td>19</Td>
                            </Tr>
                        </Tbody>
                    </Table>
                </TableContainer>
            </PageTransition>
        </>
    );
};

export default TableCustom;
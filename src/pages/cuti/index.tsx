import PageTransition from "@/components/PageLayout";
import MenuWrapper from "@/components/atoms/ContainerQuery";
import PageRow from "@/components/atoms/PageRow";
import {
  TableContainer,
  TableFilter,
  TableFilterDate,
  TableSearch,
  TableSorting,
  TableSortingCol,
  TableSortingRow,
  TableWrapper,
} from "@/components/molecules/Table";
import { Modal, ModalButton } from "@/components/organisms/Modal";
import { TableInfinite } from "@/components/organisms/TableInfinite";
import { DropdownItem, DropdownItemDate } from "@/data/dummy";
import { kolomTabelBerkas } from "@/data/table";
import { ModalContextProvider } from "@/providers/ModalProvider";
import { InfiniteQuery, TableLoadMoreConf } from "@/utils/table";
import { Flex } from "@chakra-ui/react";
import { useState } from "react";
import WizardWidget from "./wizard/wizard";

const Cuti = () => {
  const [globalFilter, setGlobalFilter] = useState("");
  const URL = "/api/berkas";
  const infiniteData = InfiniteQuery(URL, "berkas");
  const table = TableLoadMoreConf(
    infiniteData.flatData,
    kolomTabelBerkas,
    globalFilter,
    setGlobalFilter
  );

  return (
    <>
      <ModalContextProvider>
        <PageTransition>
          <PageRow>
            <MenuWrapper>
              <TableWrapper>
                <TableSorting>
                  <TableSortingRow>
                    <TableSortingCol>
                      <TableFilterDate
                        placeholder="Tanpa batas waktu"
                        data={DropdownItemDate}
                        column={table.getHeaderGroups()[0].headers[2].column}
                      />
                      <TableFilter
                        placeholder="Semua jenis"
                        data={DropdownItem}
                        column={table.getHeaderGroups()[0].headers[1].column}
                      />
                    </TableSortingCol>

                    <TableSortingCol>
                      <TableSearch
                        placeholder="Search"
                        target={setGlobalFilter}
                      />
                      <Flex pr="8px" pt={["16px", "0px"]}>
                        <ModalButton>Buat ajuan baru</ModalButton>
                      </Flex>
                    </TableSortingCol>
                  </TableSortingRow>
                </TableSorting>

                <TableContainer>
                  <TableInfinite
                    table={table}
                    infiniteData={infiniteData}
                    select={true}
                  />
                </TableContainer>
              </TableWrapper>
            </MenuWrapper>
          </PageRow>
        </PageTransition>
        <Modal>
          <WizardWidget />
        </Modal>
      </ModalContextProvider>
    </>
  );
};
export default Cuti;

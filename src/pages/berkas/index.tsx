import PageTransition from "@/components/PageLayout";
import { BoxIconMade, EditIconMade } from "@/components/atoms/IconsMade";
import MenuWrapper from "@/components/atoms/MenuWrapper";
import { Flex, Button } from "@chakra-ui/react";
import { useState } from "react";
import { DropdownItem, DropdownItemDate } from "@/data/dummy";
import {
  TableSearch,
  TableSorting,
  TableSortingCol,
  TableSortingRow,
  TableWrapper,
  TableFilter,
  TableFilterDate,
  TableContainer,
} from "@/components/molecules/Table";
import { kolomTabelBerkas } from "@/data/table";
import { ButtonIcon } from "@/components/molecules/Button";
import { TableInfinite } from "@/components/organisms/TableInfinite";
import { infiniteQuery, tableLoadMoreConf } from "@/utils/table";

const Berkas = () => {
  const [globalFilter, setGlobalFilter] = useState("");

  const URL = "/api/berkas";
  const infiniteData = infiniteQuery(URL, "berkas");
  const table = tableLoadMoreConf(
    infiniteData.flatData,
    kolomTabelBerkas,
    globalFilter,
    setGlobalFilter
  );

  return (
    <>
      <PageTransition>
        <Flex className="page__row" mb="80px">
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
                    <Flex
                      justifyContent="space-between"
                      alignItems="center"
                      w="full"
                      wrap="wrap"
                    >
                      <TableSearch
                        placeholder="Search"
                        target={setGlobalFilter}
                      />
                      <Flex
                        className="sorting__btn"
                        align-items="center"
                        w={{ base: "100%", s: "unset" }}
                      >
                        {/* -----PRIMARY BUTTON----- */}
                        <Button
                          className="button__more"
                          // bg="#1b1b1b"
                          color="#fff"
                          minW="166px"
                          width={{ base: "100%", s: "unset" }}
                          h="56px"
                          p="0 20px"
                          ml="12px"
                          mr="10px"
                          mt={{ base: "16px", s: "0px" }}
                          borderRadius="16px/16px"
                          fontSize="14px"
                          lineHeight="1.42857"
                          fontWeight="700"
                          transition="all .25s"
                          bg="#008fff"
                          // _hover={{
                          //   background:
                          //     colorMode == "light" ? "#008fff" : "#0071ca",
                          // }}
                          // {...btnProps}
                        >
                          Unggah berkas
                        </Button>
                      </Flex>
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
        </Flex>
      </PageTransition>
    </>
  );
};

export default Berkas;

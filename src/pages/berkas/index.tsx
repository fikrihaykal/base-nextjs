import PageTransition from "@/components/PageLayout";
import { BoxIconMade, EditIconMade } from "@/components/atoms/IconsMade";
import MenuWrapper from "@/components/atoms/MenuWrapper";
import { Box, Flex, TableContainer, Text } from "@chakra-ui/react";
import { useMemo, useState } from "react";
import { DropdownItem, DropdownItemDate } from "@/data/dummy";
import {
  TableMore,
  TableSearch,
  TableSorting,
  TableSortingCol,
  TableSortingRow,
  TableWrapper,
  TableFilter,
  TableFilterDate,
} from "@/components/molecules/Table";
import { fetchInfiniteData, tableLoadMoreConf } from "@/utils/table_new";
import { kolomTabelBerkas } from "@/data/table";
import { ButtonIcon } from "@/components/molecules/Button";
import { useInfiniteQuery } from "@tanstack/react-query";
import { TableInfinite } from "@/components/organisms/TableInfinite";

const Berkas = () => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, status } =
    useInfiniteQuery({
      queryKey: ["berkas"],
      queryFn: fetchInfiniteData,
      getNextPageParam: (lastPage) => lastPage.links.next,
    });

  const flatData = useMemo(
    () => data?.pages?.flatMap((page) => page.data) ?? [],
    [data]
  );

  const [globalFilter, setGlobalFilter] = useState("");
  const table = tableLoadMoreConf(
    flatData,
    kolomTabelBerkas,
    globalFilter,
    setGlobalFilter
  );

  return (
    <>
      <PageTransition>
        <Flex className="page__row">
          <MenuWrapper>
            <TableWrapper>
              <TableSorting>
                <TableSortingRow>
                  <TableSortingCol>
                    <TableFilterDate
                      placeholder="Tanpa batas waktu"
                      data={DropdownItemDate}
                      column={table.getHeaderGroups()[0].headers[3].column}
                    />
                    <TableFilter
                      placeholder="Semua jenis"
                      data={DropdownItem}
                      column={table.getHeaderGroups()[0].headers[2].column}
                    />
                  </TableSortingCol>
                  <TableSortingCol>
                    <Flex
                      justifyContent="space-between"
                      alignItems="center"
                      w="full"
                    >
                      <TableSearch
                        placeholder="Search"
                        target={setGlobalFilter}
                      />
                      <Flex className="sorting__search" align-items="center">
                        <ButtonIcon>
                          <EditIconMade
                            fontSize="19px"
                            fill="#11142d"
                            w="1em"
                            h="1em"
                          ></EditIconMade>
                        </ButtonIcon>
                        <ButtonIcon>
                          <BoxIconMade
                            fontSize="19px"
                            fill="#11142d"
                            w="1em"
                            h="1em"
                          ></BoxIconMade>
                        </ButtonIcon>
                      </Flex>
                    </Flex>
                  </TableSortingCol>
                </TableSortingRow>
              </TableSorting>
              {status === "success" && (
                <TableContainer>
                  {table.getFilteredRowModel().rows.length > 0 ? (
                    <>
                      <TableInfinite table={table} select={true} />
                      <TableMore
                        moreText={hasNextPage ? "Load more" : "All data loaded"}
                        onClick={() => fetchNextPage()}
                        isDisabled={
                          !hasNextPage || isFetchingNextPage ? true : false
                        }
                      />
                    </>
                  ) : (
                    <>
                      <Flex
                        py="120px"
                        justifyContent="center"
                        alignItems="center"
                        flexDirection="column"
                      >
                        <Text fontWeight="600" fontSize="20px">
                          Data Tidak Ditemukan
                        </Text>
                        <Text
                          fontWeight="500"
                          fontSize="14px"
                          lineHeight="0.8"
                          mt="4px"
                          color="#9a9a9f"
                        >
                          Hasil pencarian atau filter tidak ditemukan.
                        </Text>
                        <Text fontWeight="500" fontSize="14px" color="#9a9a9f">
                          Pilih filter lain atau ganti kata kunci pencarian, dan
                          coba lagi.
                        </Text>
                      </Flex>
                    </>
                  )}
                </TableContainer>
              )}
            </TableWrapper>
          </MenuWrapper>
        </Flex>
      </PageTransition>
    </>
  );
};

export default Berkas;

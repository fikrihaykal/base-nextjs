import PageTransition from "@/components/PageLayout";
import { BoxIconMade, EditIconMade } from "@/components/atoms/IconsMade";
import MenuWrapper from "@/components/atoms/MenuWrapper";
import { Flex, TableContainer, Text } from "@chakra-ui/react";
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
  TableLoadMore,
} from "@/components/molecules/Table";
import { tableLoadMoreConf } from "@/utils/table_new";
import { kolomTabelBerkas } from "@/data/table";
import { ButtonIcon } from "@/components/molecules/Button";
import axios from "axios";
import { useInfiniteQuery } from "@tanstack/react-query";

const URL = "/api/berkas/1";
const PAGE_SIZE = 20;

const Berkas = () => {
  const fetchBerkas = async ({ pageParam = URL }) => {
    const res = await axios
      .get(pageParam)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        throw err;
      });

    return res;
  };

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, status } =
    useInfiniteQuery({
      queryKey: ["berkas"],
      queryFn: fetchBerkas,
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
                      <TableLoadMore table={table} />
                      <TableMore
                        moreText={
                          hasNextPage ? "Load more" : "All data loaded"
                        }
                        onClick={() => fetchNextPage()}
                        isDisabled={
                          !hasNextPage || isFetchingNextPage ? true : false
                        }
                      />
                    </>
                  ) : (
                    <>
                      <Text py="80px" textAlign="center">
                        {"Gak nemu apa2 ya bang :)"}
                      </Text>
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

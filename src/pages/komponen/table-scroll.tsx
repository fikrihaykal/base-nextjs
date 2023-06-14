
import PageTransition from "@/components/PageTransitions";
import TableScroll from "@/components/organisms/TableScroll";
import { kolomTabelCharacter } from "@/data/table";
import { Box, Button, Input, InputGroup, Stack } from "@chakra-ui/react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const PAGE_SIZE = 20

const Table = () => {

    const fetchCharacters = async ({ pageParam = "https://rickandmortyapi.com/api/character/?page=1" }) => {
        const res = await fetch(pageParam)
        return res.json()
    }

    const {
        data,
        error,
        fetchNextPage,
        hasNextPage,
        isFetching,
        isFetchingNextPage,
        status,
    } = useInfiniteQuery({
        queryKey: ['character'],
        queryFn: fetchCharacters,
        getNextPageParam: (lastPage, pages) => lastPage.info.next,
    })

    const flatData = useMemo(
        () => data?.pages?.flatMap((page) => page.results) ?? [],
        [data]
    )

    return (
        <PageTransition>
            <Box
                id="infinite-scroll-container"
                style={{
                    overflow: "auto",
                    // height: "100vh",
                }}>
                {status === "success" && (
                    <InfiniteScroll
                        dataLength={data?.pages.length * PAGE_SIZE}
                        next={fetchNextPage}
                        hasMore={hasNextPage ?? true}
                        loader={<h4>Loading...</h4>}
                        endMessage={
                            <p style={{ textAlign: 'center' }}>
                                <b>Yay! You have seen it all</b>
                            </p>
                        }
                        scrollableTarget="infinite-scroll-container"
                    >
                        <InputGroup>
                            <Input type="text" placeholder="Cari server side" />
                        </InputGroup>
                        <TableScroll columns={kolomTabelCharacter} row={flatData} />
                        <Stack justifyContent="center">
                            <Button onClick={() => fetchNextPage()} disabled={!hasNextPage || isFetchingNextPage}>
                                {isFetchingNextPage
                                    ? 'Loading more...'
                                    : hasNextPage
                                        ? 'Load More'
                                        : 'Nothing more to load'}
                            </Button>
                        </Stack>
                    </InfiniteScroll>

                )}
            </Box>
        </PageTransition>
    );

};

export default Table;
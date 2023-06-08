import { Character } from "@/types/person";
import { Box } from "@chakra-ui/react";
import { useInfiniteQuery } from "@tanstack/react-query";
import InfiniteScroll from "react-infinite-scroll-component";

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

    // return (
    //     <>
    //         <PageTransition pageTitle="Table">
    //             <TableIts columns={kolomTabelPerson} data={dataTabelPerson} />
    //         </PageTransition>
    //     </>
    // );

    return (
        <Box
            id="infinite-scroll-container"
            style={{
                overflow: "auto",
                height: "100vh",
            }}>
            <h1>
                Rick and Morty with React Query and Infinite Scroll - Client Side Rendered
            </h1>
            {status === "success" && (
                <InfiniteScroll
                    dataLength={data?.pages.length * 20}
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
                    <div className='grid-container'>
                        {data?.pages.map((page) => (
                            <div key={'data-page-' + page}>
                                {page.results.map(
                                    (character: Character) => {
                                        return (
                                            <>
                                                <article key={'data-character-' + character.id}>
                                                    {/* <img
                                                        src={character.image}
                                                        alt={character.name}
                                                        height={250}
                                                        loading='lazy'
                                                        width={"100%"}
                                                    /> */}
                                                    <div className='text'>
                                                        <p>Name: {character.name}</p>
                                                        <p>Lives in: {character.location.name}</p>
                                                        <p>Species: {character.species}</p>
                                                        <i>Id: {character.id} </i>
                                                    </div>
                                                </article>
                                            </>
                                        )
                                    })
                                }
                            </div>
                        ))}
                    </div>
                </InfiniteScroll>
            )}
        </Box>
    );

};

export default Table;
import { Box, Button, Input, useColorMode } from "@chakra-ui/react"
import { ReactNode } from "react";
import { SearchIconMade } from "../atoms/IconsMade";

const TableWrapper = ({ children }: { children: ReactNode }) => {
    const { colorMode } = useColorMode();

    return (
        <>
            <Box
                className="card__big"
                pos="relative"
                p="32px 32px 40px"
                borderRadius="24px"
                bg={colorMode == "light" ? "#fff" : "#222222"}
                _before={{
                    content: '""',
                    pos: "absolute",
                    top: "43px",
                    left: "32px",
                    right: "32px",
                    bottom: "-43px",
                    zIndex: "-1",
                    background: colorMode == "light" ? "#e3e6ec" : "#000",
                    opacity: colorMode == "light" ? "0.91" : "0.51",
                    filter: "blur(86.985px)",
                    borderRadius: "24px",
                }}
            >
                {children}
            </Box>
        </>
    )
}

const TableSorting = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <Box
                className="table__sorting"
                _notLast={{
                    marginBottom: "15px",
                }}
            >
                {children}
            </Box>
        </>
    )
}

const TableSortingRow = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <Box className="sorting__row" m="0 -8px" display={{ d: "block", x: "flex" }}>
                {children}
            </Box>
        </>
    )
}

const TableSortingCol = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <Box
                className="sorting__col"
                flex={{ base: "calc(50% - 16px)", a: "100%" }}
                width={{ base: "calc(50% - 16px)", a: "100%" }}
                m={{ base: "0", x: "0 8px" }}
                _last={{
                    marginTop: { base: "16px", x: "0" }
                }}
            >
                <Box display={{ base: "block", m: "flex" }} className="sorting__dropdown" m="0 -8px">
                    {children}
                </Box>
            </Box>
        </>
    )
}

const TableSearch = ({ placeholder }: { placeholder: string }) => {
    const { colorMode } = useColorMode();

    return (
        <>
            <Box
                className="sorting__search"
                m="0 8px"
                pos="relative"
                flexGrow="1"
            >
                <Button
                    className="sorting__open"
                    pos="absolute"
                    top="0"
                    left="0"
                    bottom="0"
                    w="55px"
                    fontSize="0"
                    bg="transparent"
                    h="100%"
                    zIndex="10"
                    _hover={{
                        background: "transparent",
                    }}
                >
                    <SearchIconMade
                        fontSize="20px"
                        fill={colorMode == "light" ? "#11142D" : "#fff"}
                        transition="fill .25s"
                        w="1em"
                        h="1em"
                    />
                </Button>
                <Input
                    className="sorting__input"
                    // w="100%"
                    h="56px"
                    p="0 20px 0 55px"
                    border="none"
                    borderRadius="16px"
                    bg={
                        colorMode == "light"
                            ? "rgba(228,228,228,0.2)"
                            : "#292929"
                    }
                    fontSize="14px"
                    fontWeight="600"
                    color={colorMode == "light" ? "#1b1d21" : "#fff"}
                    _placeholder={{
                        color: "#808080",
                    }}
                    placeholder={placeholder}
                    _focusVisible={{
                        border: "none",
                    }}
                />
            </Box>
        </>
    )
}

export { TableWrapper, TableSorting, TableSortingRow, TableSortingCol, TableSearch }
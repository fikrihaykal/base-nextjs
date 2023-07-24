import { Box, useColorMode } from "@chakra-ui/react"
import { ReactNode } from "react";

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

export { TableWrapper, TableSorting, TableSortingRow, TableSortingCol }
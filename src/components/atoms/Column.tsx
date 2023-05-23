import { Box, Flex } from "@chakra-ui/react";
import { ReactNode } from "react";

const Row = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <Flex flexWrap="wrap" flex="1">
                {children}
            </Flex>
        </>
    )
}

const Box1 = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <Box flex="0 0 8.33333%">
                {children}
            </Box>
        </>
    )
}

const Box2 = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <Box flex="0 0 16.66666%">
                {children}
            </Box>
        </>
    )
}

const Box3 = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <Box flex="0 0 25%">
                {children}
            </Box>
        </>
    )
}

const Box4 = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <Box flex="0 0 33.33333%">
                {children}
            </Box>
        </>
    )
}

const Box5 = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <Box flex="0 0 41.66666%">
                {children}
            </Box>
        </>
    )
}

const Box6 = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <Box flex="0 0 50%">
                {children}
            </Box>
        </>
    )
}

const Box7 = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <Box flex="0 0 58.33333%">
                {children}
            </Box>
        </>
    )
}

const Box8 = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <Box flex="0 0 66.66666%">
                {children}
            </Box>
        </>
    )
}

const Box9 = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <Box flex="0 0 75%">
                {children}
            </Box>
        </>
    )
}

const Box10 = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <Box flex="0 0 83.33333%">
                {children}
            </Box>
        </>
    )
}

const Box11 = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <Box flex="0 0 91.66666%">
                {children}
            </Box>
        </>
    )
}

const Box12 = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <Box flex="0 0 100%">
                {children}
            </Box>
        </>
    )
}

const BoxAuto = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <Box flex="0 0 auto">
                {children}
            </Box>
        </>
    )
}

const BoxFill = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <Box flex="1 0 0%">
                {children}
            </Box>
        </>
    )
}

export {
    Row,
    Box1,
    Box2,
    Box3,
    Box4,
    Box5,
    Box6,
    Box7,
    Box8,
    Box9,
    Box10,
    Box11,
    Box12,
    BoxAuto,
    BoxFill
}
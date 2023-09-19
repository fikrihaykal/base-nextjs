import { Button, useColorMode } from "@chakra-ui/react"
import { ReactNode } from "react";

const ButtonIcon = ({ children }: { children: ReactNode }) => {
    const { colorMode } = useColorMode();

    return (
        <>
            <Button
                className="sorting__action"
                pos="relative"
                w="48px"
                h="48px"
                borderRadius="50%"
                transition="all .25s"
                bg={colorMode == "light" ? "#fff" : "#222222"}
                _hover={{
                    background:
                        colorMode == "light" ? "white" : "#292929",
                    boxShadow:
                        "rgba(17, 12, 46, 0.07) 0px 4px 12px 0px;",
                }}
                _notLast={{
                    marginRight: "24px",
                }}
            >
                {children}
            </Button>

        </>
    )
}

export { ButtonIcon }
import { Button, ButtonProps } from "@chakra-ui/react"
import { ReactNode } from "react"

interface TableButtonInterface extends ButtonProps {
    children: ReactNode;
    cardProps?: ButtonProps;
}

const TableButton = ({ children, ...btnProps }: TableButtonInterface) => {
    return (
        <>
            <Button
                variant="outline"
                colorScheme="itsgray"
                className="border rounded p-1"
                padding="0"
                borderRadius="50%"
                {...btnProps}
            >
                {children}
            </Button>
        </>
    )
}

export { TableButton }
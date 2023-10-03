import { Flex, Text } from "@chakra-ui/react"

interface TableStatusInterface {
    title: string;
    subtitle?: string;
    description?: string;
}

const TableStatus = ({ title, subtitle, description }: TableStatusInterface) => {
    return (
        <>
            <Flex
                py="120px"
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
            >
                <Text fontWeight="600" fontSize="20px">
                    {title}
                </Text>
                {
                    subtitle && (
                        <Text
                            fontWeight="500"
                            fontSize="14px"
                            lineHeight="0.8"
                            mt="4px"
                            color="#9a9a9f"
                        >
                            {subtitle}
                        </Text>
                    )
                }
                {
                    description && (
                        <Text fontWeight="500" fontSize="14px" color="#9a9a9f">
                            {description}
                        </Text>
                    )
                }
            </Flex>
        </>
    )
}

export { TableStatus }
import { Box, Card, CardProps, Heading, Link, Stack, Text } from "@chakra-ui/react"


interface CardImageInterface extends CardProps {
    title: string;
    description: string;
    image: string;
    imageBackground: string;
    url: string;
    cardProps?: CardProps;
}

const CardImage = ({ title, description, image, imageBackground, url, ...cardProps }: CardImageInterface) => {
    return (
        <>
            <Card p="10px" mt="10px" _hover={{ marginTop: "0px" }} transition="all 0.2s ease-in-out" data-group="card-image" {...cardProps}>
                <Link href={url}>
                    <Box bgImage='url("/images/app/card/background.png")' pos="relative" bgSize="cover" bgPosition="center" bgRepeat="no-repeat" h="210px" data-group="card-image">
                        <Box bgImage='url("/images/app/card/cover.png")' pos="absolute" bgSize="cover" bgPosition="center" bgRepeat="no-repeat" w="100%" h="100%" transition="opacity 150ms ease-out" opacity="0" _groupHover={{ opacity: "1" }} data-group="card-image" />
                        <Box bgImage={`url("${imageBackground}")`} pos="absolute" bgSize="cover" bgPosition="center" bgRepeat="no-repeat" w="100%" h="100%" transition="opacity 150ms ease-out" data-group="card-image" />
                        <Box bgImage={`url("${image}")`} pos="absolute" bgSize="cover" bgPosition="center" bgRepeat="no-repeat" w="100%" h="100%" transition="opacity 150ms ease-out" opacity="0" _groupHover={{ opacity: "1" }} data-group="card-image" />
                    </Box>
                    <Stack mt="10px" mb="5px" px="5px" mx="5px">
                        <Heading size='md'>{title}</Heading>
                        {
                            description && (
                                <Text>{description}</Text>
                            )
                        }
                    </Stack>
                </Link>
            </Card>
        </>
    )
}

export default CardImage
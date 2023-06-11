import {
  Box,
  Card,
  CardProps,
  Heading,
  Stack,
  Link,
  Text,
} from "@chakra-ui/react";
import NextLink from "next/link";
import useDimensions from "react-cool-dimensions";

interface StyleCardInterface extends CardProps {
  title: string;
  description: string;
  image?: string;
  imageBackground: string;
  url: string;
  cardProps?: CardProps;
}

const StyleCard = ({
  title,
  description,
  image,
  imageBackground,
  url,
  ...cardProps
}: StyleCardInterface) => {
  const { observe, width } = useDimensions({
    onResize: ({ observe, unobserve, width, height, entry }) => {
      unobserve(); // To stop observing the current target element
      observe(); // To re-start observing the current target element
    },
  });
  return (
    <>
      <Card
        pos="relative"
        p="10px"
        transition="all 0.2s ease-in-out"
        bg="white"
        _before={{
          content: `""`,
          position: "absolute",
          width: "100%",
          height: "100%",
          display: "block",
          top: "0",
          left: "0",
          zIndex: "-1",
          borderRadius: "12px",
          transition: "all 0.2s ease-in-out",
          boxShadow: "rgba(17, 12, 46, 0.08) 0px 48px 100px 0px;",
        }}
        _hover={{
          marginTop: "-4px",
          marginBottom: "4px",
          _before:{
            boxShadow: "rgba(17, 12, 46, 0.2) 0px 48px 100px 0px;",
          }
        }}
        boxShadow="none "
        data-group="card-image"
        borderRadius="12px"
        {...cardProps}
        style={{}}
      >
        <Link as={NextLink} href={url} _hover={{textDecor:"none"}}>
          <Box
            bgImage='url("/images/app/styles/orangebg.png")'
            pos="relative"
            bgSize="cover"
            bgPosition="center"
            bgRepeat="no-repeat"
            h={width < 230 ? 230 : width * 0.6}
            data-group="card-image"
            borderRadius="6px"
            ref={observe}
          >
            <Box
              bgImage='url("/images/app/styles/cardcoverorange.png")'
              pos="absolute"
              bgSize="cover"
              bgPosition="center"
              bgRepeat="no-repeat"
              w="100%"
              h="100%"
              transition="opacity 150ms ease-out"
              opacity="0"
              _groupHover={{ opacity: "1" }}
              data-group="card-image"
              borderRadius="6px"
            />
            <Box
              bgImage={`url("${imageBackground}")`}
              pos="absolute"
              bgSize="cover"
              bgPosition="center"
              bgRepeat="no-repeat"
              w="100%"
              h="100%"
              transition="opacity 150ms ease-out"
              data-group="card-image"
            />
            <Box
              bgImage={`url("${image}")`}
              pos="absolute"
              bgSize="cover"
              bgPosition="center"
              bgRepeat="no-repeat"
              w="100%"
              h="100%"
              transition="opacity 150ms ease-out"
              opacity="0"
              _groupHover={{ opacity: "1" }}
              data-group="card-image"
            />
          </Box>
          <Stack mt="10px" mb="12px" px="5px" mx="0px">
            <Heading fontSize="22px" lineHeight="0.7" mt="12px" mb="2px">{title}</Heading>
            {description && <Text variant="subtitle">{description}</Text>}
          </Stack>
        </Link>
      </Card>
    </>
  );
};

export default StyleCard;

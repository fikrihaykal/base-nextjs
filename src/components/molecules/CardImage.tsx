import {
  Box,
  Card,
  CardProps,
  Heading,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import NextLink from "next/link";
import useDimensions from "react-cool-dimensions";

interface CardImageInterface extends CardProps {
  title: string;
  description: string;
  bgImage: string;
  bgImageHover?: string;
  contentImage: string;
  contentImageHover?: string;
  blurColor?: string;
  url: string;
  cardProps?: CardProps;
}

const CardImage = ({
  title,
  description,
  bgImage,
  bgImageHover,
  contentImage,
  contentImageHover,
  blurColor,
  url,
  ...cardProps
}: CardImageInterface) => {
  const { observe, width } = useDimensions({
    onResize: ({ observe, unobserve }) => {
      unobserve();
      observe();
    },
  });
  return (
    <>
      <Card
        className="col-span-12 md:col-span-6 xl:col-span-6 2xl:col-span-3"
        pos="relative"
        p="8px"
        bg="#ffffff"
        transition="all 0.2s ease-in-out"
        // border="1px solid #f0f0f1"
        _before={{
          content: `""`,
          position: "absolute",
          width: "100%",
          height: "100%",
          display: "block",
          top: "0",
          left: "0",
          zIndex: "-1",
          borderRadius: "14px",
          transition: "all 0.2s ease-in-out",
          // boxShadow: "rgba(17, 12, 46, 0.06) 0px 20px 80px 0px;",
          transform: "scale(1)",
        }}
        _hover={{
          // marginTop: "-3px",
          // marginBottom: "3px",
          // transform: 'scale(1.007)',
          // borderColor: "#e0e0e1",
          backgroundColor: "white",
          // border: "1px solid #dddddd",
          boxShadow: "none",
          _before: {
            // boxShadow: "rgba(17, 12, 46, 0.1) 0px 30px 60px 0px;",
          },
        }}
        boxShadow="none"
        data-group="card-image"
        borderRadius="14px"
        // border="1px solid #eeeeee"
        {...cardProps}
      >
        <Link
          as={NextLink}
          href={url}
          _hover={{ textDecor: "none", backgroundColor: "none" }}
        >
          <Box
            // bgImage={`url("${bgImage}")`}
            pos="relative"
            h={width < 300 ? 200 : width * 0.58}
            // h="300px"
            data-group="card-image"
            borderRadius="8px"
            ref={observe}
          >
            <Image
              src={`${bgImage}`}
              alt={""}
              fill={true}
              priority={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw"
              style={{
                objectFit: "cover",
                borderRadius: "8px",
                borderTopRightRadius: "8px",
                borderTopLeftRadius: "8px",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            />
            <Box
              bgImage={
                bgImageHover !== undefined ? `url("${bgImageHover}")` : "none"
              }
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
              borderRadius="8px"
            />
            <Box pos="absolute" w="100%" h="100%" data-group="card-image" />
            <Image
              src={`${contentImage}`}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw"
              alt={""}
              fill={true}
              priority={true}
              style={{
                objectFit: "cover",
                borderRadius: "6px",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            />
            <Box
              bgImage={
                contentImageHover !== undefined
                  ? `url("${contentImageHover}")`
                  : "none"
              }
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
          <Stack mt="16px" ml="8px" mb="16px" mr="8px">
            <Heading
              color="text.dark"
              fontSize="20px"
              lineHeight="0.7"
              mt="4px"
              // mb="2px"
            >
              {title}
            </Heading>
            {description && (
              <Text variant="subtitle" fontSize="md">
                {description}
              </Text>
            )}
          </Stack>
        </Link>
      </Card>
    </>
  );
};

export default CardImage;

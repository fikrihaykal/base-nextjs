import AppSettingContext from "@/providers/AppSettingProvider";
import {
  Box,
  useColorMode,
  Link,
  Flex,
  Text,
  CardProps,
  BoxProps,
  ChakraComponent,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";
import { useContext } from "react";
import NextLink from "next/link";
import { DarkButton } from "../atoms/Buttons/DarkButton";
import { SmOutlineButton } from "../atoms/Buttons/SmOutlineBtn";

const CardIconShadowSkeleton = () => {
  const { cardWidth } = useContext(AppSettingContext);
  const { colorMode } = useColorMode();
  function titleCase(str: string) {
    return str
      .toLowerCase()
      .split(" ")
      .map(function (word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(" ");
  }

  return (
    <>
      <Box
        pos="relative"
        data-group="card--shadow"
        className="card__menu_shadow"
        flex={`0 0 calc(${cardWidth} - 32px)`}
        w={`calc(${cardWidth} - 32px)`}
        minH="400px"
        m="16px 8px 0px 8px"
        p="10px"
        _hover={{
          _before: {
            boxShadow: "rgba(17, 12, 46, 0.085) 0px 18px 160px 10px",
          },
        }}
        borderRadius="24px"
        opacity="1"
        bg={colorMode == "light" ? "#fff" : "#222222"}
        _before={{
          content: '""',
          pos: "absolute",
          top: "0px",
          left: "0px",
          right: "0px",
          bottom: "0px",
          width: "100%",
          height: "100%",
          zIndex: "-2",
          boxShadow: "rgba(17, 12, 46, 0.05) 0px 10px 160px 10px",
          borderRadius: "24px",
          transition: "all 0.25s",
        }}
        transition="all 0.25s"
      >
        <Flex alignItems="center" gap="16px">
          <Skeleton
            className="card__icon"
            bg={colorMode == "light" ? "#f8f8f8" : "#313131"}
            // bgImage={icon}
            bgSize="cover"
            bgRepeat="no-repeat"
            bgPos="center"
            borderRadius="16px"
            h="200px"
            w="100%"
          ></Skeleton>
        </Flex>
        <Flex
          flexDir="column"
          justifyContent="center"
          w="100%"
          ml="2px"
          mt="10px"
          pl="4px"
          mb="24px"
        >
          <Flex
            w="100%"
            justifyContent="space-between"
            alignItems="center"
            pr="4px"
          >
            <Text fontSize="12px" fontWeight="500"></Text>
            <Skeleton
              py="2px"
              px="6px"
              w="40px"
              h="16px"
              borderRadius="6px"
              fontWeight="500"
              bg="#ffdd00"
              fontSize="12px"
            ></Skeleton>
          </Flex>

          <SkeletonText
            mt="12px"
            mr="6px"
            variant="cardtitle"
            fontSize="16px"
            fontWeight="550"
            data-group="card--shadow"
          ></SkeletonText>
        </Flex>
        <Flex w="100%" pos="absolute" bottom="14px" pl="4px" pr="24px">
          {/* <SmOutlineButton
            minW="100%"
            mt="auto"
            onClick={(event) => {
              event.stopPropagation();
              event.preventDefault();
            }}
          >
            Hubungi Agen
          </SmOutlineButton> */}
          <Skeleton w="100%" h="32px" borderRadius="10px"></Skeleton>
        </Flex>
      </Box>
    </>
  );
};

export default CardIconShadowSkeleton;

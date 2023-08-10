import AppSettingContext from "@/providers/AppSettingProvider";
import { Box, useColorMode, Link, Flex, Text } from "@chakra-ui/react";
import { useContext } from "react";
import NextLink from "next/link";

interface CardIconShadowInterface {
  title: string;
  subtitle: string;
  link: string;
  icon?: string;
}

const CardIconShadow = ({ title, subtitle, link, icon}: CardIconShadowInterface) => {
  const { cardWidth } = useContext(AppSettingContext);
  const { colorMode } = useColorMode();

  return (
    <>
      <Box
        as={NextLink}
        href={link}
        data-group="card--shadow"
        className="card__menu_shadow"
        flex={`0 0 calc(${cardWidth} - 32px)`}
        w={`calc(${cardWidth} - 32px)`}
        minH="200px"
        m="32px 16px 0px 16px"
        pos="relative"
        p="24px"
        _hover={{
          marginTop: "27px",
          marginBottom: "5px",
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
          <Box
            className="card__icon"
            bg={colorMode == "light"? "#f5f5f5" : "#444444"}
            bgImage={icon}
            bgSize="cover"
            w="48px"
            h="48px"
            borderRadius="12px"
          ></Box>
        </Flex>
        <Box ml="2px" mt="24px" mb="24px">
          <Text variant="cardtitle" fontSize="16px" data-group="card--shadow">
            {title}
          </Text>
          <Text color="#9a9a9f" fontSize="14px" mt="2px" fontWeight="500">
            {subtitle}
          </Text>
        </Box>
      </Box>
    </>
  );
};

export default CardIconShadow;

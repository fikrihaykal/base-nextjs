import PageTransition from "@/components/PageLayout";
import PageCol from "@/components/atoms/PageCol";
import PageRow from "@/components/atoms/PageRow";
import Wrapper from "@/components/atoms/Wrapper";
import CardIconShadow from "@/components/organisms/CardIconShadow";
import PageBanner from "@/components/organisms/PageBanner";
import { DropdownItem, foundItems, menuItem } from "@/data/dummy";
import { Box, Flex, Link, Text, useColorMode } from "@chakra-ui/react";
import { useState } from "react";
import NextLink from "next/link";
import { LightButton } from "@/components/atoms/Buttons/LightButton";
import Dropdown from "@/components/molecules/Dropdown";
import { SmOutlineButton } from "@/components/atoms/Buttons/SmOutlineBtn";
import { title } from "process";

const Temuan = () => {
  const { colorMode } = useColorMode();
  const [filteredData, setFilteredData] = useState(foundItems);
  const itemTypes = [...new Set(foundItems.map((q) => q.type))];
  const itemLoc = [...new Set(foundItems.map((q) => q.location))];
  const [filterType, setFilterType] = useState<string | null>();
  function titleCase(str: string) {
    return str
      .toLowerCase()
      .split(" ")
      .map(function (word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(" ");
  }

  const filterItem = (curcat: string | null) => {
    if (curcat === null) {
      setFilteredData(foundItems);
    } else {
      const newItem = foundItems.filter((newVal) => {
        return newVal.type === curcat;
      });
      setFilteredData(newItem);
    }
  };

  return (
    <>
      <PageTransition pageTitle="Temuan">
        <PageRow>
          <PageCol>
            <Box
              className="page__banner"
              pos="relative"
              w="full"
              h="320px"
              borderRadius="1.6rem"
              bg={colorMode == "light" ? "#008fff" : "#0071ca"}
              _before={{
                content: '""',
                position: "absolute",
                top: "10px",
                left: "50%",
                transform: "translateX(-50%)",
                width: "95%",
                h: "100%",
                zIndex: "-1",
                borderRadius: "24px",
                background: colorMode == "light" ? "#008fff30" : "#003967",
              }}
            >
              <Box
                w="100%"
                h="320PX"
                pos="absolute"
                bgImage="/images/bigbg.png"
                bgSize="cover"
                bgRepeat="no-repeat"
              ></Box>
              <Flex
                w="100%"
                h="100%"
                p="36px"
                pl="48px"
                flexDir="column"
                justifyContent="center"
              >
                <Text
                  fontWeight="600"
                  variant="toptitle"
                  color="white"
                  fontSize="32px"
                >
                  Tenangkan hati pemilik barang temuanmu
                </Text>
                <Text fontWeight="500" color="white" fontSize="16px">
                  Buat laporan segera agar informasi cepat tersebar
                </Text>
                <Flex mt="20px">
                  <Link as={NextLink} href="/laporpenemuan" mr="16px">
                    <LightButton
                      _hover={{
                        background: "white",
                        color: "#008fff",
                      }}
                    >
                      Lapor Temuan
                    </LightButton>
                  </Link>
                </Flex>
              </Flex>
            </Box>
            <Flex
              w="100%"
              justifyContent="space-between"
              alignItems="center"
              mt="64px"
            >
              <Text
                fontSize="24px"
                fontWeight="600"
                letterSpacing="-0.2px"
                mb="12px"
              >
                Laporan temuan
              </Text>
            </Flex>
            <Flex>
              <SmOutlineButton
                bg={filterType == null ? "#008fff" : "none"}
                color={filterType == null ? "white" : "#b4b4b4"}
                boxShadow={
                  filterType == null
                    ? "inset 0 0 0 0 none"
                    : "inset 0 0 0 2px #e4e4e4"
                }
                _hover={{
                  boxShadow: "inset 0 0 0 2px #008fff",
                  color: filterType == null ? "white" : "#008fff",
                }}
                mt="auto"
                onClick={(event) => {
                  event.stopPropagation();
                  event.preventDefault();
                  setFilterType(null);
                  filterItem(null);
                }}
              >
                Semua
              </SmOutlineButton>
              {itemTypes.map((Val, id) => {
                return (
                  <SmOutlineButton
                    bg={filterType == Val ? "#008fff" : "none"}
                    color={filterType == Val ? "white" : "#b4b4b4"}
                    boxShadow={
                      filterType == Val
                        ? "inset 0 0 0 0 none"
                        : "inset 0 0 0 2px #e4e4e4"
                    }
                    _hover={{
                      boxShadow: "inset 0 0 0 2px #008fff",
                      color: filterType == Val ? "white" : "#008fff",
                    }}
                    mt="auto"
                    onClick={(event) => {
                      event.stopPropagation();
                      event.preventDefault();
                      setFilterType(Val);
                      filterItem(Val);
                    }}
                  >
                    {titleCase(Val)}
                  </SmOutlineButton>
                );
              })}
            </Flex>

            <Wrapper pt="0px">
              {filteredData.map((Val, id) => {
                return (
                  <CardIconShadow
                    title={Val.title}
                    subtitle={Val.subtitle}
                    icon={Val.icon}
                    link={Val.link}
                    type={Val.type}
                    location={Val.location}
                    status={Val.status}
                  />
                );
              })}
            </Wrapper>
          </PageCol>
        </PageRow>
      </PageTransition>
    </>
  );
};

export default Temuan;

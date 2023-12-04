import PageTransition from "@/components/PageLayout";
import { LightButton } from "@/components/atoms/Buttons/LightButton";
import PageCol from "@/components/atoms/PageCol";
import PageRow from "@/components/atoms/PageRow";
import Wrapper from "@/components/atoms/Wrapper";
import CardIconShadow from "@/components/organisms/CardIconShadow";
import PageBanner from "@/components/organisms/PageBanner";
import { lostItems } from "@/data/dummy";
import { Box, Flex, Link, Text, useColorMode } from "@chakra-ui/react";
import { useState } from "react";
import NextLink from "next/link";
import CardLost from "@/components/organisms/CardLost";

const Kehilangan = () => {
  const { colorMode } = useColorMode();
  const [globalFilter, setGlobalFilter] = useState("");

  return (
    <>
      <PageTransition pageTitle="Kehilangan">
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
                  Mungkin barang kamu yang hilang ada disini...
                </Text>
                <Text fontWeight="500" color="white" fontSize="16px">
                  Buat laporan segera agar informasi cepat tersebar
                </Text>
                <Flex mt="20px">
                  <Link as={NextLink} href="/laporkehilangan" mr="16px">
                    <LightButton
                      _hover={{
                        background: "white",
                        color: "#008fff",
                      }}
                    >
                      Lapor Kehilangan
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
              <Text fontSize="24px" fontWeight="600" letterSpacing="-0.2px">
                Laporan kehilangan
              </Text>
            </Flex>

            <Wrapper pt="0px">
              {lostItems.map((Val, id) => {
                return (
                  <CardLost
                    title={Val.title}
                    subtitle={Val.subtitle}
                    icon={Val.icon}
                    link={Val.link}
                    type={Val.type}
                    location={Val.location}
                    status={Val.status}
                    contact={Val.contact}
                  />
                );
              })}
            </Wrapper>
          </PageCol>
          {/* <PageColWidget><></></PageColWidget> */}
        </PageRow>
      </PageTransition>
    </>
  );
};

export default Kehilangan;

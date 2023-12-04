import PageTransition from "@/components/PageLayout";
import ContainerQuery from "@/components/atoms/ContainerQuery";
import PageRow from "@/components/atoms/PageRow";
import MenuWrap from "@/components/atoms/MenuWrap";
import CardIconShadow from "@/components/organisms/CardIconShadow";
import { Poppins } from "next/font/google";
import {
  Badge,
  Box,
  Button,
  Center,
  Flex,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import Carousel from "@/components/customs/Carousel";

const poppins = Poppins({ weight: "600", subsets: ["latin"] });

const Beranda = () => {
  const { colorMode } = useColorMode();
  return (
    <>
      <PageTransition pageTitle="Hi, Fulan">
        <PageRow>
          <ContainerQuery>
            <Carousel duration={5000} w="100%" borderRadius="24px" shadow="lg">
              <Flex
                bgGradient={
                  colorMode === "light"
                    ? "linear(to-tr, blue.500, cyan.500)"
                    : "linear(to-tr, blue.600, cyan.600)"
                }
                alignItems="center"
                p="32px 62px"
                h="250px"
              >
                <Box>
                  <Text
                    fontSize="32px"
                    color="white"
                    className={poppins.className}
                    lineHeight="1.111"
                  >
                    myITS Academics
                  </Text>
                  <Text
                    fontSize="16px"
                    fontWeight="500"
                    color="white"
                    mt="8px"
                    lineHeight="1.5"
                  >
                    Kelola perkuliahan di sini
                  </Text>
                </Box>
              </Flex>
              <Flex
                bgGradient={
                  colorMode === "light"
                    ? "linear(to-tr, red.500, orange.500)"
                    : "linear(to-tr, red.600, orange.600)"
                }
                alignItems="center"
                p="32px 62px"
                h="250px"
              >
                <Box>
                  <Text
                    fontSize="32px"
                    color="white"
                    className={poppins.className}
                    lineHeight="1.111"
                  >
                    myITS Portal
                  </Text>
                  <Text
                    fontSize="16px"
                    fontWeight="500"
                    color="white"
                    mt="8px"
                    lineHeight="1.5"
                  >
                    Rumah aplikasi myITS
                  </Text>
                </Box>
              </Flex>
            </Carousel>
            <MenuWrap>
              <CardIconShadow
                title="Cuti"
                subtitle="Cuti Akademik"
                link="/cuti"
                icon="/images/card-icon/user-time.svg"
              />
              <CardIconShadow
                title="Rencana Studi"
                subtitle="Pengelolaan rencana studi"
                link="/rencana-studi"
                icon="/images/card-icon/form.svg"
              />
            </MenuWrap>
          </ContainerQuery>
        </PageRow>
      </PageTransition>
    </>
  );
};

export default Beranda;

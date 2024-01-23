import PageTransition from "@/components/PageLayout";
import ContainerQuery from "@/components/atoms/ContainerQuery";
import PageRow from "@/components/atoms/PageRow";
import MenuWrap from "@/components/atoms/MenuWrap";
import CardIconShadow, { CardDynamicIconShadow } from "@/components/organisms/CardIconShadow";
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
import Wrapper from "@/components/atoms/Wrapper";
import PlainCard from "@/components/organisms/Cards/Card";
import { CalendarSolidIconMade, FormSolidIconMade, UserTimeSolidIconMade, UsersSolidIconMade } from "@/components/atoms/IconsMade";

const poppins = Poppins({ weight: "600", subsets: ["latin"] });

const Beranda = () => {
  const { colorMode } = useColorMode();
  return (
    <>
      <PageTransition pageTitle="Hi, Fulan">
        <PageRow>
          <ContainerQuery>
            <PlainCard p="0px">
              {/* <Carousel duration={8000} w="100%" borderRadius="24px">
                <Flex
                  bgGradient={
                    colorMode === "light"
                      ? "linear(to-tr, green.500, yellow.500)"
                      : "linear(to-tr, green.600, yellow.600)"
                  }
                  alignItems="center"
                  p="32px 56px"
                  h="300px"
                >
                  <Box>
                    <Text
                      fontSize="28px"
                      color="white"
                      className={poppins.className}
                      lineHeight="1.111"
                    >
                      Pengisian Rencana Studi
                    </Text>
                    <Text
                      fontSize="16px"
                      fontWeight="500"
                      color="white"
                      mt="8px"
                      lineHeight="1.5"
                    >
                      Pengelolaan rencana studi mulai dari 11 Maret 1945 sampai
                      15 Maret 1945
                    </Text>
                  </Box>
                </Flex>
                <Flex
                  bgGradient={
                    colorMode === "light"
                      ? "linear(to-tr, blue.500, cyan.500)"
                      : "linear(to-tr, blue.600, cyan.600)"
                  }
                  alignItems="center"
                  p="32px 56px"
                  h="300px"
                >
                  <Box>
                    <Text
                      fontSize="28px"
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
                  p="32px 56px"
                  h="300px"
                >
                  <Box>
                    <Text
                      fontSize="28px"
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
              </Carousel> */}
            </PlainCard>
            <Wrapper>
              <CardDynamicIconShadow
                title="Cuti"
                subtitle="Cuti akademik mahasiswa"
                link="/cuti"
                icon={<UserTimeSolidIconMade w="30px" h="30px" />}
              />
              <CardDynamicIconShadow
                title="Rencana Studi"
                subtitle="Pengelolaan rencana studi"
                link="/rencana-studi"
                icon={<FormSolidIconMade w="30px" h="30px" />}
              />
              <CardDynamicIconShadow
                title="Perwalian"
                subtitle="Perwalian mahasiswa Anda"
                link="/perwalian"
                icon={<UsersSolidIconMade w="30px" h="30px" />}
              />
              <CardDynamicIconShadow
                title="Kelas"
                subtitle="Penjadwalan kelas / mata kuliah"
                link="/kelas"
                icon={<CalendarSolidIconMade w="30px" h="30px" />}
              />
            </Wrapper>
          </ContainerQuery>
        </PageRow>
      </PageTransition>
    </>
  );
};

export default Beranda;

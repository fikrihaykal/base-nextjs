import PageTransition from "@/components/PageLayout";
import ContainerQuery from "@/components/atoms/ContainerQuery";
import PageRow from "@/components/atoms/PageRow";
import {
  Box,
  Button,
  Center,
  Flex,
  Grid,
  GridItem,
  RadioGroup,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import PlainCard from "@/components/organisms/Cards/Card";
import { IoMoon, IoSunny } from "react-icons/io5";
import {
  MoonOutlineIconMade,
  MoonSolidIconMade,
  SunOutlineIconMade,
  SunSolidIconMade,
} from "@/components/atoms/IconsMade";
import { RadioCard, RadioCardGroup } from "@/components/customs/RadioCard";

const Pengaturan = () => {
  const { setColorMode, colorMode } = useColorMode();
  return (
    <>
      <PageTransition pageTitle="Pengaturan">
        <PageRow>
          <ContainerQuery>
            <PlainCard>
              <Text fontSize="18px" fontWeight="600" mb="4px">
                Mode tampilan
              </Text>
              <Text fontSize="16px" fontWeight="500" color="gray">
                Pilih mode tampilan website
              </Text>
              <Grid
                mt="24px"
                templateColumns={{
                  base: "repeat(1, 1fr)",
                  a: "repeat(2, 1fr)",
                }}
                gap={3}
                as={RadioCardGroup}
                defaultValue={colorMode}
                transition="all .25s"
              >
                <RadioCard
                  isDisabled={false}
                  isMark={false}
                  h="100%"
                  as={GridItem}
                  value="light"
                  onClick={() => setColorMode("light")}
                >
                  <Box display="flex" alignItems="center">
                    <Center w="48px" h="32px" mr="8px">
                      <SunOutlineIconMade fontSize="24px" />
                    </Center>
                    <Box>
                      <Text fontSize="14px" fontWeight={600}>
                        Mode Terang
                      </Text>
                      <Text fontSize="13px" fontWeight="500" mt="4px">
                        Padang
                      </Text>
                    </Box>
                  </Box>
                </RadioCard>
                <RadioCard
                  isDisabled={false}
                  isMark={false}
                  h="100%"
                  as={GridItem}
                  value="dark"
                  onClick={() => setColorMode("dark")}
                >
                  <Box display="flex" alignItems="center">
                    <Center w="48px" h="32px" mr="8px">
                      <MoonOutlineIconMade fontSize="24px" />
                    </Center>
                    <Box>
                      <Text fontSize="14px" fontWeight={600}>
                        Mode Gelap
                      </Text>
                      <Text fontSize="13px" fontWeight="500" mt="4px">
                        Peteng
                      </Text>
                    </Box>
                  </Box>
                </RadioCard>
                {/* <RadioCard
                  h="100%"
                  as={GridItem}
                  value="auto"
                >
                  <Text fontSize="14px" fontWeight={600}>
                    Mode Auto
                  </Text>
                  <Text fontSize="13px" fontWeight="500" mt="4px">
                    Kadang padang kadang peteng
                  </Text>
                </RadioCard> */}
              </Grid>
            </PlainCard>
          </ContainerQuery>
        </PageRow>
      </PageTransition>
    </>
  );
};

export default Pengaturan;

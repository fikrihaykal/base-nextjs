import PageTransition from "@/components/PageLayout";
import ContainerQuery from "@/components/atoms/ContainerQuery";
import PageRow from "@/components/atoms/PageRow";
import {
  Box,
  Button,
  ButtonGroup,
  Center,
  CloseButton,
  Flex,
  Grid,
  GridItem,
  SimpleGrid,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import Link from "next/link";
import PlainCard from "@/components/organisms/Cards/Card";
import { LightButton } from "@/components/atoms/Buttons/LightButton";
import { PrimaryButton } from "@/components/atoms/Buttons/PrimaryButton";
import { SecondaryButton } from "@/components/atoms/Buttons/SecondaryButton";

const FRS = () => {
  const toast = useToast();
  return (
    <>
      <PageTransition pageTitle="Rencana Studi Saya">
        <PageRow>
          <ContainerQuery>
            <PlainCard
              display={{ base: "block", x: "flex" }}
              justifyContent="space-between"
              alignItems="center"
              gap="2"
              bgGradient="linear(to-r, pink.500, orange.500)"
            >
              <Grid
                templateColumns={{
                  base: "repeat(2, 1fr)",
                  a: "repeat(4, 1fr)",
                }}
              >
                <GridItem minW="150px">
                  <Box
                    p="4px 0px"
                    m="12px 0px"
                    borderRight="2px"
                    borderRightColor="whiteAlpha.400"
                  >
                    <Text
                      fontSize="14px"
                      fontWeight="500"
                      color="whiteAlpha.700"
                      textAlign="center"
                      mb="4px"
                    >
                      Mengulang
                    </Text>
                    <Text
                      fontSize="22px"
                      fontWeight="500"
                      color="white"
                      textAlign="center"
                    >
                      0
                    </Text>
                  </Box>
                </GridItem>
                <GridItem minW="150px">
                  <Box
                    p="4px 0px"
                    m="12px 0px"
                    borderRight={{ base: "0px", a: "2px" }}
                    borderRightColor={{ base: "unset", a: "whiteAlpha.400" }}
                  >
                    <Text
                      fontSize="14px"
                      fontWeight="500"
                      color="whiteAlpha.700"
                      textAlign="center"
                      mb="4px"
                    >
                      Wajib diambil
                    </Text>
                    <Text
                      fontSize="22px"
                      fontWeight="500"
                      color="white"
                      textAlign="center"
                    >
                      0
                    </Text>
                  </Box>
                </GridItem>
                <GridItem minW="150px">
                  <Box
                    p="4px 0px"
                    m="12px 0px"
                    borderRight="2px"
                    borderRightColor="whiteAlpha.400"
                  >
                    <Text
                      fontSize="14px"
                      fontWeight="500"
                      color="whiteAlpha.700"
                      textAlign="center"
                      mb="4px"
                    >
                      Melanggar
                    </Text>
                    <Text
                      fontSize="22px"
                      fontWeight="500"
                      color="white"
                      textAlign="center"
                    >
                      0
                    </Text>
                  </Box>
                </GridItem>
                <GridItem minW="150px">
                  <Box p="4px 0px" m="12px 0px">
                    <Text
                      fontSize="14px"
                      fontWeight="500"
                      color="whiteAlpha.700"
                      textAlign="center"
                      mb="4px"
                    >
                      Ekivalensi
                    </Text>
                    <Text
                      fontSize="22px"
                      fontWeight="500"
                      color="white"
                      textAlign="center"
                    >
                      0
                    </Text>
                  </Box>
                </GridItem>
              </Grid>
              <Link href="/">
                <Center
                  mt={{ base: "16px", x: "0px" }}
                  w={{ base: "full", x: "auto" }}
                >
                  <LightButton>Selengkapnya</LightButton>
                </Center>
              </Link>
            </PlainCard>
            <SimpleGrid
              columns={{ base: 1, a: 2, w: 3 }}
              spacingX="24px"
              transition="all 0.25s"
            >
              <PlainCard>
                <Text fontSize="18px" fontWeight="600">
                  Semester 7
                </Text>
                <Text fontSize="14px" fontWeight="500" color="gray" mt="2px">
                  Gasal 2023/2024
                </Text>
                <Text
                  fontSize="14px"
                  fontWeight="500"
                  mt="16px"
                  display="inline-flex"
                  alignItems="center"
                >
                  IPS 0,00
                  <Text fontSize="12px" color="gray" mx="8px">
                    •
                  </Text>
                  0 SKS diambil
                </Text>
                <Center mt="36px" w="full">
                  <PrimaryButton
                    onClick={() =>
                      toast({
                        position: "top-right",
                        title: "Gagal membuat rencana studi",
                        description:
                          "Anda belum membayra UKT. Silakan hubungi Service Desk apabila sudah membayar",
                        status: "error",
                        duration: 5000,
                        isClosable: true,
                        render: (props) => (
                          <Box
                            as="section"
                            pt={{ base: "4", md: "8" }}
                            pb={{ base: "12", md: "24" }}
                            px={{ base: "4", md: "8" }}
                          >
                            <Flex direction="row-reverse">
                              <Box
                                width={{ base: "full", sm: "md" }}
                                boxShadow="md"
                                bg="white"
                                borderRadius="lg"
                              >
                                <Stack direction="row" p="4" spacing="3">
                                  <Stack spacing="2.5">
                                    <Stack spacing="1">
                                      <Text textStyle="sm" fontWeight="medium">
                                        {props.title}
                                      </Text>
                                      <Text textStyle="sm" color="fg.muted">
                                        {props.description}
                                      </Text>
                                    </Stack>
                                    <ButtonGroup
                                      variant="text"
                                      size="sm"
                                      spacing="3"
                                    >
                                      <Button colorScheme="gray">Skip</Button>
                                      <Button color="blue" colorScheme="blue">
                                        Update
                                      </Button>
                                    </ButtonGroup>
                                  </Stack>
                                  <CloseButton
                                    transform="translateY(-6px)"
                                    onClick={props.onClose}
                                  />
                                </Stack>
                              </Box>
                            </Flex>
                          </Box>
                        ),
                      })
                    }
                  >
                    Buat Rencana Studi
                  </PrimaryButton>
                </Center>
              </PlainCard>
              <PlainCard>
                <Text fontSize="18px" fontWeight="600">
                  Semester 6
                </Text>
                <Text fontSize="14px" fontWeight="500" color="gray" mt="2px">
                  Genap 2022/2023
                </Text>
                <Text
                  fontSize="14px"
                  fontWeight="500"
                  mt="16px"
                  display="inline-flex"
                  alignItems="center"
                >
                  IPS 3,36
                  <Text fontSize="12px" color="gray" mx="8px">
                    •
                  </Text>
                  18 SKS diambil
                </Text>
                <Link href="rencana-studi/detail">
                  <Center mt="36px" w="full">
                    <SecondaryButton>Lihat Detail</SecondaryButton>
                  </Center>
                </Link>
              </PlainCard>
            </SimpleGrid>
          </ContainerQuery>
        </PageRow>
      </PageTransition>
    </>
  );
};

export default FRS;

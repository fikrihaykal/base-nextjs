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
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import Link from "next/link";
import PlainCard from "@/components/organisms/Cards/Card";
import { LightButton } from "@/components/atoms/Buttons/LightButton";
import { PrimaryButton } from "@/components/atoms/Buttons/PrimaryButton";
import { SecondaryButton } from "@/components/atoms/Buttons/SecondaryButton";

const FRS = () => {
  const toast = useToast();
  const colorborder = useColorModeValue("gray.100", "gray.800");
  return (
    <>
      <PageTransition pageTitle="Rencana Studi">
        <PageRow>
          <ContainerQuery>
            <PlainCard mb="32px">
              <Box mb="24px">
                <Text fontSize="18px" fontWeight="600">
                  Semester 3
                </Text>
                <Text fontSize="14px" fontWeight="500" mt="2px">
                  Gasal 2023/2024
                </Text>
              </Box>
              <Grid templateColumns="repeat(12, 1fr)" gap={{ base: 6, a: "0" }}>
                <GridItem colSpan={{ base: 6, a: 3 }}>
                  <Text fontSize="14px" fontWeight="500" color="gray">
                    SKS Tempuh
                  </Text>
                  <Text fontSize="16px" fontWeight="500" mt="2px">
                    99
                  </Text>
                </GridItem>
                <GridItem colSpan={{ base: 6, a: 3 }}>
                  <Text fontSize="14px" fontWeight="500" color="gray">
                    SKS Lulus
                  </Text>
                  <Text fontSize="16px" fontWeight="500" mt="2px">
                    99
                  </Text>
                </GridItem>
                <GridItem colSpan={{ base: 12, a: 6 }}>
                  <Text fontSize="14px" fontWeight="500" color="gray">
                    Dosen Wali
                  </Text>
                  <Text fontSize="16px" fontWeight="500" mt="2px">
                    Bintang Nuralamsyah, S.Kom. M.Kom.
                  </Text>
                </GridItem>
              </Grid>
              <Box
                display={{ base: "block", a: "flex" }}
                alignItems="center"
                pt={{ base: "unset", a: "24px" }}
                mt={{ base: "48px", a: "24px" }}
                gap={4}
                borderTop={{ base: "unset", a: "2px" }}
                borderTopColor={{ base: "unset", a: colorborder }}
              >
                <Center w="auto" mb={{ base: "16px", a: "0px" }}>
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
                <Text
                  fontSize="14px"
                  fontWeight="500"
                  color="gray"
                  textAlign="center"
                >
                  0 SKS diambil
                </Text>
              </Box>
            </PlainCard>
            <Text fontWeight="600" mb="24px">
              Riwayat Rencana Studi
            </Text>
            <PlainCard>
              <Grid templateColumns="repeat(12, 1fr)" gap={{ base: 6, m: 0 }}>
                <GridItem
                  colSpan={{ base: 12, s: 6, m: 4, x: 5 }}
                  display="inline-flex"
                  alignItems="center"
                >
                  <Box>
                    <Text fontSize="18px" fontWeight="600">
                      Semester 2
                    </Text>
                    <Text fontSize="14px" fontWeight="500" mt="2px">
                      Genap 2022/2023
                    </Text>
                  </Box>
                </GridItem>
                <GridItem
                  colSpan={{ base: 6, s: 3, m: 2, x: 2 }}
                  display="inline-flex"
                  alignItems="center"
                >
                  <Box>
                    <Text fontSize="14px" fontWeight="500" color="gray">
                      IPS
                    </Text>
                    <Text fontSize="16px" fontWeight="500" mt="2px">
                      3,31
                    </Text>
                  </Box>
                </GridItem>
                <GridItem
                  colSpan={{ base: 6, s: 3, m: 2, x: 2 }}
                  display="inline-flex"
                  alignItems="center"
                >
                  <Box>
                    <Text fontSize="14px" fontWeight="500" color="gray">
                      SKS diambil
                    </Text>
                    <Text fontSize="16px" fontWeight="500" mt="2px">
                      18
                    </Text>
                  </Box>
                </GridItem>
                <GridItem colSpan={{ base: 12, s: 12, m: 4, x: 3 }}>
                  <Link href="rencana-studi/detail">
                    <Center w="auto" mt={{ base: "8px", s: "unset" }}>
                      <SecondaryButton>Lihat Detail</SecondaryButton>
                    </Center>
                  </Link>
                </GridItem>
              </Grid>
            </PlainCard>
            <PlainCard>
              <Grid templateColumns="repeat(12, 1fr)" gap={{ base: 6, m: 0 }}>
                <GridItem
                  colSpan={{ base: 12, s: 6, m: 4, x: 5 }}
                  display="inline-flex"
                  alignItems="center"
                >
                  <Box>
                    <Text fontSize="18px" fontWeight="600">
                      Semester 1
                    </Text>
                    <Text fontSize="14px" fontWeight="500" mt="2px">
                      Gasal 2022/2023
                    </Text>
                  </Box>
                </GridItem>
                <GridItem
                  colSpan={{ base: 6, s: 3, m: 2, x: 2 }}
                  display="inline-flex"
                  alignItems="center"
                >
                  <Box>
                    <Text fontSize="14px" fontWeight="500" color="gray">
                      IPS
                    </Text>
                    <Text fontSize="16px" fontWeight="500" mt="2px">
                      3,36
                    </Text>
                  </Box>
                </GridItem>
                <GridItem
                  colSpan={{ base: 6, s: 3, m: 2, x: 2 }}
                  display="inline-flex"
                  alignItems="center"
                >
                  <Box>
                    <Text fontSize="14px" fontWeight="500" color="gray">
                      SKS diambil
                    </Text>
                    <Text fontSize="16px" fontWeight="500" mt="2px">
                      18
                    </Text>
                  </Box>
                </GridItem>
                <GridItem colSpan={{ base: 12, s: 12, m: 4, x: 3 }}>
                  <Link href="rencana-studi/detail">
                    <Center w="auto" mt={{ base: "8px", s: "unset" }}>
                      <SecondaryButton>Lihat Detail</SecondaryButton>
                    </Center>
                  </Link>
                </GridItem>
              </Grid>
            </PlainCard>
          </ContainerQuery>
        </PageRow>
      </PageTransition>
    </>
  );
};

export default FRS;

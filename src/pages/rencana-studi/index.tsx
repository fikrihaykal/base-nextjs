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
              display={{ base: "block", a: "flex" }}
              justifyContent="space-between"
              alignItems="center"
            >
              <Box>
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
              </Box>
              <Box mt={{ base: "36px", a: "0px" }} w="auto">
                <Center w="auto">
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
              </Box>
            </PlainCard>
            <PlainCard
              display={{ base: "block", a: "flex" }}
              justifyContent="space-between"
              alignItems="center"
            >
              <Box>
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
              </Box>
              <Box mt={{ base: "36px", a: "0px" }} w="auto">
                <Link href="rencana-studi/detail">
                  <Center w="auto">
                    <SecondaryButton>Lihat Detail</SecondaryButton>
                  </Center>
                </Link>
              </Box>
            </PlainCard>
          </ContainerQuery>
        </PageRow>
      </PageTransition>
    </>
  );
};

export default FRS;

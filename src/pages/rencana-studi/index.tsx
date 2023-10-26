import PageTransition from "@/components/PageLayout";
import ContainerQuery from "@/components/atoms/ContainerQuery";
import PageRow from "@/components/atoms/PageRow";
import {
  Box,
  Button,
  Center,
  Text,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import Link from "next/link";
import { PrimaryButton } from "@/components/atoms/Buttons/PrimaryButton";
import { DarkButton } from "@/components/atoms/Buttons/DarkButton";
import PlainCard from "@/components/organisms/Cards/Card";
import { LightButton } from "@/components/atoms/Buttons/LightButton";
import { SecondaryButton } from "@/components/atoms/Buttons/SecondaryButton";

const FRS = () => {
  const bgcard = useColorModeValue("white", "gray.900");
  const bgbutton = useColorModeValue("black", "white");

  return (
    <>
      <PageTransition pageTitle="Rencana Studi Saya">
        <PageRow>
          <ContainerQuery>
            <PlainCard>
              <Box
                display={{ base: "block", a: "flex" }}
                justifyContent="space-between"
                alignItems="center"
              >
                <Box>
                  <Text fontSize="18px" fontWeight="600">
                    Semester 7
                  </Text>
                  <Text fontSize="14px" fontWeight="500" color="gray">
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
                <Box mt={{ base: "24px", a: "0px" }}>
                  <Link href="/rencana-studi/detail">
                    <PrimaryButton>Buat Rencana Studi</PrimaryButton>
                  </Link>
                </Box>
              </Box>
            </PlainCard>
            <PlainCard>
              <Box
                display={{ base: "block", a: "flex" }}
                justifyContent="space-between"
                alignItems="center"
              >
                <Box>
                  <Text fontSize="18px" fontWeight="600">
                    Semester 6
                  </Text>
                  <Text fontSize="14px" fontWeight="500" color="gray">
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
                <Box mt={{ base: "24px", a: "0px" }}>
                  <Link href="/rencana-studi/detail">
                    <SecondaryButton>Detail</SecondaryButton>
                  </Link>
                </Box>
              </Box>
            </PlainCard>
          </ContainerQuery>
        </PageRow>
      </PageTransition>
    </>
  );
};

export default FRS;

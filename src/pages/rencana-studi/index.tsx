import PageTransition from "@/components/PageLayout";
import ContainerQuery from "@/components/atoms/ContainerQuery";
import PageRow from "@/components/atoms/PageRow";
import { Poppins } from "next/font/google";
import {
  Box,
  Button,
  Text,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import Link from "next/link";

const poppins = Poppins({ weight: "600", subsets: ["latin"] });

const FRS = () => {
  const bgcard = useColorModeValue("white", "gray.900");
  const bgbutton = useColorModeValue("black", "white");

  return (
    <>
      <PageTransition pageTitle="Rencana Studi Saya">
        <PageRow>
          <ContainerQuery>
            <Box
              mb="24px"
              data-group="card--shadow"
              className="card__menu_shadow"
              pos="relative"
              p="24px"
              borderRadius="24px"
              opacity="1"
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
              bg={bgcard}
              transition="all 0.25s"
            >
              <Box
                display={{ base: "block", a: "flex" }}
                justifyContent="space-between"
                alignItems="center"
              >
                <Box>
                  <Text className={poppins.className} fontSize="20px">
                    Semester 7
                  </Text>
                  <Text color="gray">Gasal 2023/2024</Text>
                  <Text mt="16px" display="inline-flex" alignItems="center">
                    0 SKS diambil
                    <Text color="gray" fontSize="12px" mx="8px">
                      •
                    </Text>
                    IPS 0,00
                  </Text>
                </Box>
                <Link href="/rencana-studi/detail">
                  <Button
                    colorScheme="blue"
                    backgroundColor={bgbutton}
                    w={{ base: "full", a: "auto" }}
                    h="64px"
                    px="36px"
                    borderRadius="12px"
                    mt={{ base: "16px", a: "0px" }}
                  >
                    Buat Rencana Studi
                  </Button>
                </Link>
              </Box>
            </Box>
            <Box
              mb="24px"
              data-group="card--shadow"
              className="card__menu_shadow"
              pos="relative"
              p="24px"
              borderRadius="24px"
              opacity="1"
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
              bg={bgcard}
              transition="all 0.25s"
            >
              <Box
                display={{ base: "block", a: "flex" }}
                justifyContent="space-between"
                alignItems="center"
              >
                <Box>
                  <Text className={poppins.className} fontSize="20px">
                    Semester 6
                  </Text>
                  <Text color="gray">Genap 2022/2023</Text>
                  <Text mt="16px" display="inline-flex" alignItems="center">
                    18 SKS diambil
                    <Text color="gray" fontSize="12px" mx="8px">
                      •
                    </Text>
                    IPS 3,36
                  </Text>
                </Box>
                <Link href="/rencana-studi/detail">
                  <Button
                    colorScheme="gray"
                    w={{ base: "full", a: "auto" }}
                    h="64px"
                    px="36px"
                    borderRadius="12px"
                    mt={{ base: "16px", a: "0px" }}
                  >
                    Lihat Detail
                  </Button>
                </Link>
              </Box>
            </Box>
          </ContainerQuery>
        </PageRow>
      </PageTransition>
    </>
  );
};

export default FRS;

import PageTransition from "@/components/PageLayout";
import ContainerQuery from "@/components/atoms/ContainerQuery";
import PageRow from "@/components/atoms/PageRow";
import { Poppins } from "next/font/google";
import {
  Badge,
  Box,
  Button,
  LightMode,
  Text,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import Link from "next/link";

const poppins = Poppins({ weight: "600", subsets: ["latin"] });

const FRS = () => {
  const toast = useToast();
  const bgcard = useColorModeValue("white", "gray.900");
  const bgbutton = useColorModeValue("black", "gray.800");
  const colorborder = useColorModeValue("gray.100", "gray.800");

  return (
    <>
      <PageTransition pageTitle="Rencana Studi">
        <PageRow>
          <ContainerQuery>
            <Box
              p="36px 24px"
              bgGradient="linear(to-r, purple.500, pink.500)"
              borderRadius="24px"
              display={{ base: "block", a: "flex" }}
              justifyContent="space-between"
              alignItems="center"
              gap={5}
              mb="36px"
            >
              <Box>
                <Text
                  className={poppins.className}
                  color="white"
                  fontSize="22px"
                  mb="4px"
                  display="flex"
                  alignItems="center"
                >
                  FRS
                  <LightMode>
                    <Badge
                      colorScheme="orange"
                      variant="solid"
                      ml="8px"
                      fontSize="15px"
                    >
                      Premium
                    </Badge>
                  </LightMode>
                </Text>
                <Text color="white" fontSize="15px">
                  FRS bebas hambatan, bisa tendang teman kapan saja. Beli FRS
                  Premium sekarang.
                </Text>
              </Box>
              <Box>
                <Button
                  w={{ base: "full", a: "auto" }}
                  h="64px"
                  px="36px"
                  borderRadius="12px"
                  bg="white"
                  color="black"
                  mt={{ base: "24px", a: "0px" }}
                  shadow="lg"
                  onClick={() =>
                    toast({
                      title: "Berhasil membeli",
                      description:
                        "Pembayaran sebesar Rp 65.000 sudah ditagihkan ke rekening Anda",
                      status: "success",
                      isClosable: true,
                    })
                  }
                >
                  Rp 59.000
                </Button>
              </Box>
            </Box>
            <Box
              mt="24px"
              data-group="card--shadow"
              className="card__menu_shadow"
              pos="relative"
              p="36px 24px"
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
                mb="24px"
              >
                <Text className={poppins.className} fontSize="20px">
                  Mata Kuliah Anda
                </Text>
                <Link href="/rencana-studi/kelola">
                  <Button
                    colorScheme="blue"
                    w={{ base: "full", a: "auto" }}
                    h="64px"
                    px="36px"
                    borderRadius="12px"
                    bg={bgbutton}
                    color="white"
                    mt={{ base: "16px", a: "0px" }}
                  >
                    Kelola
                  </Button>
                </Link>
              </Box>
              <Box>
                <Text fontSize="16px" fontWeight={600} mb="2px">
                  Pemrograman Berbasis Kerangka Kerja - Kelas A
                </Text>
                <Text>IF92832 • 3 SKS • Semester berlangsung</Text>
                <Text color="gray" mt="2px">
                  Kelas Departemen
                </Text>
              </Box>
              <Box
                mt="24px"
                pt="24px"
                borderTop="2px"
                borderColor={colorborder}
              >
                <Text fontSize="16px" fontWeight={600} mb="2px">
                  Pemrograman Berbasis Kerangka Kerja - Kelas A
                </Text>
                <Text>IF92832 • 3 SKS • Semester berlangsung</Text>
                <Text color="gray" mt="2px">
                  Kelas Departemen
                </Text>
              </Box>
            </Box>
          </ContainerQuery>
        </PageRow>
      </PageTransition>
    </>
  );
};

export default FRS;

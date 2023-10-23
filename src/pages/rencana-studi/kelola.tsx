import PageTransition from "@/components/PageLayout";
import ContainerQuery from "@/components/atoms/ContainerQuery";
import PageRow from "@/components/atoms/PageRow";
import { Poppins } from "next/font/google";
import {
  Badge,
  Box,
  Button,
  Text,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import {
  IoCheckmarkCircle,
  IoCloseCircle,
  IoTime,
} from "react-icons/io5";

const poppins = Poppins({ weight: "600", subsets: ["latin"] });

const KelolaFRS = () => {
  const bgcard = useColorModeValue("white", "gray.900");
  const bgbutton = useColorModeValue("black", "gray.800");
  const colorborder = useColorModeValue("gray.100", "gray.800");
  const colorred = useColorModeValue("red", "red.200");

  return (
    <>
      <PageTransition pageTitle="Kelola Mata Kuliah">
        <PageRow>
          <ContainerQuery>

            <Box
              display={{ base: "block", a: "flex" }}
              justifyContent="space-between"
              alignItems="center"
              gap={5}
              mb="36px"
              px={{ base: "16px", x: "0px" }}
            >
              <Box>
                <Text className={poppins.className} fontSize="22px" mb="4px">
                  6 dari 24 SKS terpakai
                </Text>
                <Text fontSize="15px">
                  Anda dapat mengambil mata kuliah hingga 24 SKS
                </Text>
              </Box>
              <Box>
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
                  Tambah mata kuliah
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
              <Badge
                colorScheme="yellow"
                mb="24px"
                display="inline-flex"
                alignItems="center"
                borderRadius="full"
                p="4px 8px"
                gap="4px"
              >
                <IoTime fontSize="20px" />
                Menunggu antrian
              </Badge>
              <Box
                display={{ base: "block", a: "flex" }}
                justifyContent="space-between"
                alignItems="center"
                gap={5}
              >
                <Box>
                  <Text fontSize="16px" fontWeight={600} mb="2px">
                    Pemrograman Berbasis Kerangka Kerja - Kelas A
                  </Text>
                  <Text>IF92832 • 3 SKS • Semester berlangsung</Text>
                  <Text color="gray" mt="2px">
                    Kelas Departemen
                  </Text>
                </Box>
                <Box>
                  <Button
                    colorScheme="red"
                    variant="outline"
                    w={{ base: "full", a: "auto" }}
                    h="64px"
                    px="36px"
                    borderRadius="12px"
                    mt={{ base: "24px", a: "0px" }}
                  >
                    Batalkan
                  </Button>
                </Box>
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
              <Badge
                colorScheme="green"
                mb="24px"
                display="inline-flex"
                alignItems="center"
                borderRadius="full"
                p="4px 8px"
                gap="4px"
              >
                <IoCheckmarkCircle fontSize="20px" />
                Berhasil diambil
              </Badge>
              <Box
                display={{ base: "block", a: "flex" }}
                justifyContent="space-between"
                alignItems="center"
                gap={5}
              >
                <Box>
                  <Text fontSize="16px" fontWeight={600} mb="2px">
                    Pemrograman Berbasis Kerangka Kerja - Kelas A
                  </Text>
                  <Text>IF92832 • 3 SKS • Semester berlangsung</Text>
                  <Text color="gray" mt="2px">
                    Kelas Departemen
                  </Text>
                </Box>
                <Box>
                  <Button
                    colorScheme="red"
                    variant="outline"
                    w={{ base: "full", a: "auto" }}
                    h="64px"
                    px="36px"
                    borderRadius="12px"
                    mt={{ base: "24px", a: "0px" }}
                  >
                    Hapus
                  </Button>
                </Box>
              </Box>
              <Box
                display={{ base: "block", a: "flex" }}
                justifyContent="space-between"
                alignItems="center"
                gap={5}
                mt="24px"
                pt="24px"
                borderTop="2px"
                borderColor={colorborder}
              >
                <Box>
                  <Text fontSize="16px" fontWeight={600} mb="2px">
                    Pemrograman Berbasis Kerangka Kerja - Kelas A
                  </Text>
                  <Text>IF92832 • 3 SKS • Semester berlangsung</Text>
                  <Text color="gray" mt="2px">
                    Kelas Departemen
                  </Text>
                </Box>
                <Box>
                  <Button
                    colorScheme="red"
                    variant="outline"
                    w={{ base: "full", a: "auto" }}
                    h="64px"
                    px="36px"
                    borderRadius="12px"
                    mt={{ base: "24px", a: "0px" }}
                  >
                    Hapus
                  </Button>
                </Box>
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
              <Badge
                colorScheme="red"
                mb="24px"
                display="inline-flex"
                alignItems="center"
                borderRadius="full"
                p="4px 8px"
                gap="4px"
              >
                <IoCloseCircle fontSize="20px" />
                Kelas penuh / dibatalkan / dihapus
              </Badge>
              <Box>
                <Text fontSize="16px" fontWeight={600} mb="2px">
                  Pemrograman Berbasis Kerangka Kerja - Kelas A
                </Text>
                <Text>IF92832 • 3 SKS • Semester berlangsung</Text>
                <Text color="gray" mt="2px">
                  Kelas Departemen
                </Text>
                <Text color={colorred} mt="16px">Kelas penuh</Text>
              </Box>
              <Box mt="24px" pt="24px" borderTop="2px" borderColor={colorborder}>
                <Text fontSize="16px" fontWeight={600} mb="2px">
                  Pemrograman Berbasis Kerangka Kerja - Kelas A
                </Text>
                <Text>IF92832 • 3 SKS • Semester berlangsung</Text>
                <Text color="gray" mt="2px">
                  Kelas Departemen
                </Text>
                <Text color={colorred} mt="16px">Dihapus</Text>
              </Box>
            </Box>
          </ContainerQuery>
        </PageRow>
      </PageTransition>
    </>
  );
};

export default KelolaFRS;

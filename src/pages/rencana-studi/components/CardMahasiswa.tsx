import Dropdown from "@/components/customs/Dropdown";
import PlainCard from "@/components/organisms/Cards/Card";
import { DropdownSemester } from "@/data/dummy";
import {
  Box,
  Center,
  Flex,
  Text,
  useColorMode,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { ModalMataKuliah, ModalMelanggar } from "./Modal/ModalMataKuliah";

const CardMahasiswa = () => {
  const { colorMode } = useColorMode();
  const colorborder = useColorModeValue("gray.100", "gray.800");
  const {
    isOpen: isOpenMataKuliah,
    onOpen: onOpenMataKuliah,
    onClose: onCloseMataKuliah,
  } = useDisclosure();
  const {
    isOpen: isOpenMelanggar,
    onOpen: onOpenMelanggar,
    onClose: onCloseMelanggar,
  } = useDisclosure();

  return (
    <>
      <PlainCard>
        <Flex
          justifyContent="space-between"
          alignItems="center"
          flexWrap={{ base: "wrap", x: "nowrap" }}
          gap={6}
        >
          <Box w={{ base: "full", x: "auto" }}>
            <Text fontSize="26px" fontWeight="600">
              Sarah Nasywa Azizah
            </Text>
            <Text fontSize="18px" fontWeight="500" mt="4px">
              5013231063
            </Text>
          </Box>

          <Flex
            alignItems="center"
            flexWrap="wrap"
            gap={2}
            w={{ base: "full", x: "auto" }}
          >
            <Flex
              border="1px solid"
              borderColor={colorborder}
              p="7px 15px"
              borderRadius="full"
              alignItems="center"
              gap={2}
              transition="all .25s"
              onClick={onOpenMataKuliah}
              _hover={{
                bg: colorMode == "light" ? "blackAlpha.50" : "whiteAlpha.100",
                cursor: "pointer",
                transition: "all .25s",
              }}
            >
              <Text fontSize="14px" fontWeight="600">
                Wajib diambil
              </Text>
              <Center
                fontSize="12px"
                fontWeight="700"
                minW="20px"
                h="20px"
                bg={colorMode === "light" ? "blackAlpha.100" : "whiteAlpha.200"}
                borderRadius="full"
                mr="-4px"
              >
                1
              </Center>
            </Flex>
            <Flex
              border="1px solid"
              borderColor={colorborder}
              p="7px 15px"
              borderRadius="full"
              alignItems="center"
              gap={2}
              transition="all .25s"
              // onClick={onOpenMataKuliah}
              _hover={{
                bg: colorMode == "light" ? "blackAlpha.50" : "whiteAlpha.100",
                cursor: "pointer",
                transition: "all .25s",
              }}
            >
              <Text fontSize="14px" fontWeight="600">
                Mengulang
              </Text>
            </Flex>
            <Flex
              border="1px solid"
              borderColor={colorborder}
              p="7px 15px"
              borderRadius="full"
              alignItems="center"
              gap={2}
              transition="all .25s"
              onClick={onOpenMelanggar}
              _hover={{
                bg: colorMode == "light" ? "blackAlpha.50" : "whiteAlpha.100",
                cursor: "pointer",
                transition: "all .25s",
              }}
            >
              <Text fontSize="14px" fontWeight="600">
                Melanggar prasyarat
              </Text>
              <Center
                fontSize="12px"
                fontWeight="700"
                minW="20px"
                h="20px"
                bg={colorMode === "light" ? "blackAlpha.100" : "whiteAlpha.200"}
                borderRadius="full"
                mr="-4px"
              >
                1
              </Center>
            </Flex>
            <Flex
              border="1px solid"
              borderColor={colorborder}
              p="7px 15px"
              borderRadius="full"
              alignItems="center"
              gap={2}
              transition="all .25s"
              // onClick={onOpenMataKuliah}
              _hover={{
                bg: colorMode == "light" ? "blackAlpha.50" : "whiteAlpha.100",
                cursor: "pointer",
                transition: "all .25s",
              }}
            >
              <Text fontSize="14px" fontWeight="600">
                Ekivalensi
              </Text>
            </Flex>
          </Flex>
        </Flex>

        <Flex flexWrap="wrap" gap={6} mt="32px">
          <Dropdown
            data={DropdownSemester}
            placeholder="Semester 3 (Ganjil 2023/2024)"
          />
        </Flex>
      </PlainCard>

      <ModalMataKuliah isOpen={isOpenMataKuliah} onClose={onCloseMataKuliah} />
      <ModalMelanggar isOpen={isOpenMelanggar} onClose={onCloseMelanggar} />
    </>
  );
};

export default CardMahasiswa;

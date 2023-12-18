import {
  Box,
  Center,
  Flex,
  Text,
  Tooltip,
  useColorMode,
} from "@chakra-ui/react";
import PlainCard from "@/components/organisms/Cards/Card";
import { SecondaryButton } from "@/components/customs/Buttons/SecondaryButton";
import {
  EditOutlineIconMade,
  UsersOutlineIconMade,
} from "@/components/atoms/IconsMade";

const CardMahasiswaKelas = () => {
  const { colorMode } = useColorMode();
  return (
    <PlainCard>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        flexWrap={{ base: "wrap", a: "nowrap" }}
      >
        <Flex alignItems="center" w="full" gap={4}>
          <Box w="48px" h="48px">
            <Center
              w="48px"
              h="48px"
              bg={colorMode === "light" ? "blackAlpha.100" : "whiteAlpha.200"}
              borderRadius="full"
            >
              <UsersOutlineIconMade fontSize="24px" />
            </Center>
          </Box>
          <Text fontSize="20px" fontWeight={600}>
            Daftar Mahasiswa
          </Text>
        </Flex>
      </Flex>
    </PlainCard>
  );
};

export default CardMahasiswaKelas;

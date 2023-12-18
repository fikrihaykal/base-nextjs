import {
  Box,
  Center,
  Divider,
  Flex,
  Grid,
  GridItem,
  Text,
  Tooltip,
  useColorMode,
  useDisclosure,
} from "@chakra-ui/react";
import { SuccessButton } from "@/components/customs/Buttons/SuccessButton";
import PlainCard from "@/components/organisms/Cards/Card";
import { DaliOutlineButton } from "@/components/customs/Buttons/DaliButton";
import CleanPlainCard from "@/components/customs/Card";
import {
  EditOutlineIconMade,
  ExternalOutlineIconMade,
  ListOutlineIconMade,
  StatusOutlineIconMade,
  TrashOutlineIconMade,
  UserOutlineIconMade,
} from "@/components/atoms/IconsMade";

const CardRangkumanKelas = () => {
  const { colorMode } = useColorMode();
  return (
    <>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        flexWrap={{ base: "wrap", a: "nowrap" }}
        mb="32px"
        p={{ base: "16px", d: "0px" }}
      >
        <Box w="full">
          <Text fontSize="22px" fontWeight={600}>
            Pemrograman Dasar (A)
          </Text>
          <Text fontSize="18px" fontWeight={500} mt="4px">
            IF123456 • 3 SKS
          </Text>
        </Box>
        <Box display={{ base: "none", a: "block" }}>
          <Tooltip hasArrow label="Hapus Kelas">
            <Center>
              <DaliOutlineButton
                isLoading={false}
                minW="10px"
                color={colorMode == "light" ? "red.500" : "#B53F3F"}
              >
                <TrashOutlineIconMade fontSize="20px" />
              </DaliOutlineButton>
            </Center>
          </Tooltip>
        </Box>
        <Box w="full" display={{ base: "block", a: "none" }} mt={{ base: "24px", a: "0px" }}>
          <Center>
            <DaliOutlineButton
              isLoading={false}
              minW="10px"
              color={colorMode == "light" ? "red.500" : "#B53F3F"}
            >
              Hapus Kelas
            </DaliOutlineButton>
          </Center>
        </Box>
      </Flex>
    </>
  );
};

export default CardRangkumanKelas;

import { Box, Flex, Text, useColorMode } from "@chakra-ui/react";
import {
  SuccessButton,
  SuccessOutlineButton,
  SuccessSubtleButton,
} from "@/components/atoms/Buttons/SuccessButton";
import {
  CheckMarkOutlineIconMade,
  CloseOutlineIconMade,
} from "@/components/atoms/IconsMade";
import PlainCard from "@/components/organisms/Cards/Card";

const CardPersetujuan = () => {
  const { colorMode } = useColorMode();
  return (
    <>
      <PlainCard
        display={{ base: "block", a: "flex" }}
        justifyContent="space-between"
        alignItems="center"
        borderRadius="16px"
      >
        <Box>
          <Text fontWeight="600">Setujui Rencana Studi</Text>
          <Text
            fontSize="14px"
            fontWeight="500"
            color={colorMode == "light" ? "blackAlpha.700" : "whiteAlpha.700"}
            mt="4px"
          >
            Rencana studi Sarah Nasywa Azizah memerlukan persetujuan Anda
          </Text>
        </Box>
        <Box
          mt={{ base: "24px", a: "0px" }}
          display="flex"
          justifyContent="center"
        >
          <SuccessButton>Setuju</SuccessButton>
        </Box>
      </PlainCard>

      {/* <PlainCard
        display={{ base: "block", a: "flex" }}
        justifyContent="space-between"
        alignItems="center"
        borderRadius="16px"
      >
        <Box>
          <Text fontWeight="600">Rencana Studi Disetujui</Text>
          <Text
            fontSize="14px"
            fontWeight="500"
            color={colorMode == "light" ? "blackAlpha.700" : "whiteAlpha.700"}
            mt="4px"
          >
            Anda telah menyetujui rencana studi ini pada Senin, 10 Maret 1970
          </Text>
        </Box>
        <Box
          mt={{ base: "24px", a: "0px" }}
          display="flex"
          justifyContent="center"
        >
          <SuccessSubtleButton>Batalkan</SuccessSubtleButton>
        </Box>
      </PlainCard> */}

      {/* <PlainCard
        display="flex"
        justifyContent="start"
        alignItems="center"
        borderRadius="16px"
      >
        <Box
          w={{ base: "32px", s: "48px" }}
          h={{ base: "32px", s: "48px" }}
          mr="16px"
        >
          <Flex
            w={{ base: "32px", s: "48px" }}
            h={{ base: "32px", s: "48px" }}
            justifyContent="center"
            alignItems="center"
            bgGradient="linear(to-tr, green.500, green.400)"
            borderRadius="full"
          >
            <CheckMarkOutlineIconMade
              fontSize={{ base: "16px", s: "24px" }}
              color="white"
            />
          </Flex>
        </Box>
        <Box>
          <Text fontWeight="600">Rencana Studi Anda Disetujui</Text>
          <Text
            fontSize="14px"
            fontWeight="500"
            color={colorMode == "light" ? "blackAlpha.700" : "whiteAlpha.700"}
            mt="4px"
          >
            Dosen wali telah menyetujui rencana studi Anda pada Senin, 10 Maret
            1970
          </Text>
        </Box>
      </PlainCard> */}

      {/* <PlainCard
        display="flex"
        justifyContent="start"
        alignItems="center"
        borderRadius="16px"
      >
        <Box w={{ base: "32px", s: "48px" }} h={{ base: "32px", s: "48px" }} mr="16px">
          <Flex
            w={{ base: "32px", s: "48px" }}
            h={{ base: "32px", s: "48px" }}
            justifyContent="center"
            alignItems="center"
            bgGradient="linear(to-tr, gray.500, gray.400)"
            borderRadius="full"
          >
            <CloseOutlineIconMade fontSize={{ base: "16px", s: "24px" }} color="white" />
          </Flex>
        </Box>
        <Box>
          <Text fontWeight="600">Rencana Studi Belum Disetujui</Text>
          <Text
            fontSize="14px"
            fontWeight="500"
            color={colorMode == "light" ? "blackAlpha.700" : "whiteAlpha.700"}
            mt="4px"
          >
            Dosen wali belum menyetujui rencana studi Anda
          </Text>
        </Box>
      </PlainCard> */}
    </>
  );
};

export default CardPersetujuan;

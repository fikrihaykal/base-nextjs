import { Box, Center, Text, useColorMode } from "@chakra-ui/react";
import { IoCalendar, IoCheckmark } from "react-icons/io5";
import PlainCard from "@/components/organisms/Cards/Card";
import { LightButton } from "@/components/atoms/Buttons/LightButton";
import {
  CheckMarkOutlineIconMade,
  CloseOutlineIconMade,
} from "@/components/atoms/IconsMade";
import { PrimaryButton } from "@/components/atoms/Buttons/PrimaryButton";
import {
  SuccessButton,
} from "@/components/atoms/Buttons/SuccessButton";

const CardPersetujuan = () => {
  const { colorMode } = useColorMode();
  return (
    <>
      <PlainCard
        bgGradient={
          colorMode == "light"
            ? "linear(to-tr, green.500, green.400)"
            : "linear(to-tr, green.700, green.600)"
        }
      >
        <Box display={{ base: "block", m: "flex" }} alignItems="center">
          <Box w="48px" h="48px" mr="16px" mb={{ base: "16px", m: "0px" }}>
            <Box
              w="48px"
              h="48px"
              display="flex"
              justifyContent="center"
              alignItems="center"
              bg="white"
              borderRadius="full"
            >
              <CheckMarkOutlineIconMade fontSize="24px" color="green" />
            </Box>
          </Box>
          <Box>
            <Text fontSize="18px" fontWeight="600" mb="4px" color="white">
              Rencana studi telah disetujui
            </Text>
            <Text fontSize="16px" fontWeight="500" color="whiteAlpha.800">
              Rencana studi Anda telah disetujui oleh dosen wali pada 11 Maret
              2020
            </Text>
          </Box>
        </Box>
      </PlainCard>
      <PlainCard
        bgGradient={
          colorMode == "light"
            ? "linear(to-tr, red.500, red.400)"
            : "linear(to-tr, red.700, red.600)"
        }
      >
        <Box display={{ base: "block", m: "flex" }} alignItems="center">
          <Box w="48px" h="48px" mr="16px" mb={{ base: "16px", m: "0px" }}>
            <Box
              w="48px"
              h="48px"
              display="flex"
              justifyContent="center"
              alignItems="center"
              bg="white"
              borderRadius="full"
            >
              <CloseOutlineIconMade fontSize="24px" color="red" />
            </Box>
          </Box>
          <Box>
            <Text fontSize="18px" fontWeight="600" mb="4px" color="white">
              Rencana studi belum disetujui
            </Text>
            <Text fontSize="16px" fontWeight="500" color="whiteAlpha.800">
              Masa FRS sudah terlewat, tetapi dosen wali belum menyetujui
              rencana studi Anda
            </Text>
          </Box>
        </Box>
      </PlainCard>
      <PlainCard>
        <Box
          display={{ base: "block", m: "flex" }}
          justifyContent="space-between"
          alignItems="center"
        >
          <Box>
            <Text fontSize="18px" fontWeight="600" mb="4px">
              Setujui rencana studi ini
            </Text>
            <Text fontSize="16px" fontWeight="500" color="gray">
              Usulan rencana studi ini menunggu persetujuan dari Anda
            </Text>
          </Box>
          <Center mt={{ base: "24px", m: "0px" }}>
            <SuccessButton>Setuju</SuccessButton>
          </Center>
        </Box>
      </PlainCard>
      <PlainCard
        bgGradient={
          colorMode == "light"
            ? "linear(to-tr, green.500, green.400)"
            : "linear(to-tr, green.700, green.600)"
        }
      >
        <Box
          display={{ base: "block", m: "flex" }}
          justifyContent="space-between"
          alignItems="center"
        >
          <Box>
            <Text fontSize="18px" fontWeight="600" mb="4px" color="white">
              Anda telah menyetujui rencana studi ini
            </Text>
            <Text fontSize="16px" fontWeight="500" color="whiteAlpha.800">
              Rencana studi mahasiswa ini telah Anda setujui pada 11 Maret 2020
            </Text>
          </Box>
          <Center mt={{ base: "24px", m: "0px" }}>
            <LightButton bg="white">Batalkan Persetujuan</LightButton>
          </Center>
        </Box>
      </PlainCard>
    </>
  );
};

export default CardPersetujuan;

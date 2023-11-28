import {
  AlertCircleSolidIconMade,
  CheckmarkCircleSolidIconMade,
  CircleOutlineIconMade,
  CircleSolidIconMade,
  CloseCircleSolidIconMade,
  MinusCircleSolidIconMade,
  TrashCircleSolidIconMade,
} from "@/components/atoms/IconsMade";
import { Badge, Box, Text, useColorMode } from "@chakra-ui/react";

export const BadgeKelasBerhasil = () => {
  const { colorMode } = useColorMode();
  return (
    <Box
      fontSize="14px"
      fontWeight="500"
      color={colorMode === "light" ? "green.500" : "green.400"}
      display="inline-flex"
      alignItems="center"
      gap="6px"
    >
      <CheckmarkCircleSolidIconMade fontSize="16px" />
      <Text>Berhasil diambil</Text>
    </Box>
  );
};

export const BadgeKelasPenuh = () => {
  const { colorMode } = useColorMode();
  return (
    <Box
      fontSize="14px"
      fontWeight="500"
      color={colorMode === "light" ? "red.500" : "red.400"}
      display="inline-flex"
      alignItems="center"
      gap="6px"
    >
      <MinusCircleSolidIconMade fontSize="16px" />
      <Text>Kelas penuh</Text>
    </Box>
  );
};

export const BadgeKelasBatal = () => {
  const { colorMode } = useColorMode();
  return (
    <Box
      fontSize="14px"
      fontWeight="500"
      color={colorMode === "light" ? "red.500" : "red.400"}
      display="inline-flex"
      alignItems="center"
      gap="6px"
    >
      <CloseCircleSolidIconMade fontSize="16px" />
      <Text>Dibatalkan</Text>
    </Box>
  );
};

export const BadgeKelasHapus = () => {
  const { colorMode } = useColorMode();
  return (
    <Box
      fontSize="14px"
      fontWeight="500"
      color={colorMode === "light" ? "red.500" : "red.400"}
      display="inline-flex"
      alignItems="center"
      gap="6px"
    >
      <TrashCircleSolidIconMade fontSize="16px" />
      <Text>Dihapus</Text>
    </Box>
  );
};

export const BadgeKelasError = () => {
  const { colorMode } = useColorMode();
  return (
    <Box
      fontSize="14px"
      fontWeight="500"
      color={colorMode === "light" ? "yellow.500" : "yellow.400"}
      display="inline-flex"
      alignItems="center"
      gap="6px"
    >
      <AlertCircleSolidIconMade fontSize="16px" />
      <Text>Terjadi kesalahan</Text>
    </Box>
  );
};

export const BadgeFRSBelumIsi = () => {
  const { colorMode } = useColorMode();
  return (
    <Box
      fontSize="14px"
      fontWeight="500"
      color={colorMode === "light" ? "gray.500" : "gray.400"}
      display="inline-flex"
      alignItems="center"
      gap="6px"
    >
      <CircleOutlineIconMade fontSize="16px" />
      <Text>Belum diisi</Text>
    </Box>
  );
};

export const BadgeFRSBelumSetuju = () => {
  const { colorMode } = useColorMode();
  return (
    <Box
      fontSize="14px"
      fontWeight="500"
      color={colorMode === "light" ? "yellow.500" : "yellow.400"}
      display="inline-flex"
      alignItems="center"
      gap="6px"
    >
      <AlertCircleSolidIconMade fontSize="16px" />
      <Text>Belum disetujui</Text>
    </Box>
  );
};

export const BadgeFRSSetuju = () => {
  const { colorMode } = useColorMode();
  return (
    <Box
      fontSize="14px"
      fontWeight="500"
      color={colorMode === "light" ? "green.500" : "green.400"}
      display="inline-flex"
      alignItems="center"
      gap="6px"
    >
      <CheckmarkCircleSolidIconMade fontSize="16px" />
      <Text>Disetujui</Text>
    </Box>
  );
};
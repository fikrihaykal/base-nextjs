import {
  CheckmarkOutlineIconMade,
  CloseOutlineIconMade,
  HourGlassOutlineIconMade,
} from "@/components/atoms/IconsMade";
import { DangerBadge } from "@/components/customs/BadgeStatus/DangerBadge";
import { PrimaryBadge } from "@/components/customs/BadgeStatus/PrimaryBadge";
import { SuccessBadge } from "@/components/customs/BadgeStatus/SuccessBadge";
import ToastCard from "@/components/customs/ToastCard";
import PlainCard from "@/components/organisms/Cards/Card";
import {
  Badge,
  Box,
  Center,
  Flex,
  Text,
  useColorMode,
  useToast,
} from "@chakra-ui/react";

const CardTestToast = () => {
  const toast = useToast();
  const { colorMode } = useColorMode();

  const ToastBerhasil = () => {
    toast({
      position: "top-right",
      status: "success",
      duration: 5000,
      isClosable: true,
      render: (props) => (
        <ToastCard
          title="Kelas Berhasil Diambil"
          description="Manajemen Basis Data (D) berhasil diambil. Kelola di bagian Rencana Studi"
          colorMode={colorMode}
          onClose={props.onClose}
          status="success"
          icon={<CheckmarkOutlineIconMade fontSize="24px" color="white" />}
        />
      ),
    });
  };
  const ToastPenuh = () => {
    toast({
      position: "top-right",
      status: "error",
      duration: 5000,
      isClosable: true,
      render: (props) => (
        <ToastCard
          title="Kelas Penuh"
          description="Manajemen Basis Data (D) sudah penuh sehingga gagal diambil."
          colorMode={colorMode}
          onClose={props.onClose}
          status="error"
          icon={<CloseOutlineIconMade fontSize="24px" color="white" />}
        />
      ),
    });
  };
  const ToastDiproses = () => {
    toast({
      position: "top-right",
      status: "info",
      duration: 5000,
      isClosable: true,
      render: (props) => (
        <ToastCard
          title="Sedang Diproses"
          description="Kelas Manajemen Basis Data (D) sedang dalam antrian."
          colorMode={colorMode}
          onClose={props.onClose}
          status="info"
          icon={<HourGlassOutlineIconMade fontSize="24px" color="white" />}
        />
      ),
    });
  };
  return (
    <>
      <PlainCard>
        <Box>
          <Text fontSize="20px" fontWeight="600">
            Tes Toast
          </Text>
        </Box>
        <Flex flexWrap="wrap" gap={2} mt="16px">
          <SuccessBadge cursor="pointer" onClick={ToastBerhasil}>
            Berhasil diambil
          </SuccessBadge>
          <DangerBadge cursor="pointer" onClick={ToastPenuh}>
            Kelas penuh
          </DangerBadge>
          <PrimaryBadge cursor="pointer" onClick={ToastDiproses}>
            Sedang diproses
          </PrimaryBadge>
        </Flex>
      </PlainCard>
    </>
  );
};

export default CardTestToast;

import {
  Box,
  Center,
  Text,
  useColorMode,
  useDisclosure,
} from "@chakra-ui/react";
import { SuccessButton } from "@/components/customs/Buttons/SuccessButton";
import PlainCard from "@/components/organisms/Cards/Card";
import {
  ModalBatalPersetujuan,
  ModalPersetujuan,
} from "./Modal/ModalPersetujuan";
import { DaliOutlineButton } from "@/components/customs/Buttons/DaliButton";

const CardPersetujuan = () => {
  const { colorMode } = useColorMode();
  const {
    isOpen: isOpenPersetujuan,
    onOpen: onOpenPersetujuan,
    onClose: onClosePersetujuan,
  } = useDisclosure();
  const {
    isOpen: isOpenBatalPersetujuan,
    onOpen: onOpenBatalPersetujuan,
    onClose: onCloseBatalPersetujuan,
  } = useDisclosure();
  return (
    <>
      <PlainCard
        display={{ base: "block", a: "flex" }}
        justifyContent="space-between"
        alignItems="center"
        gap={6}
      >
        <Box>
          <Text fontSize="18px" fontWeight="600">
            Setujui Rencana Studi
          </Text>
          <Text fontSize="15px" fontWeight="500" color="gray" mt="4px">
            Rencana studi Sarah Nasywa Azizah memerlukan persetujuan Anda
          </Text>
        </Box>
        <Center mt={{ base: "24px", a: "0px" }}>
          <SuccessButton onClick={onOpenPersetujuan} isLoading={false}>
            Setuju
          </SuccessButton>
        </Center>
      </PlainCard>

      <PlainCard
        display={{ base: "block", a: "flex" }}
        justifyContent="space-between"
        alignItems="center"
        gap={6}
      >
        <Box>
          <Text fontSize="18px" fontWeight="600">
            Rencana Studi Disetujui
          </Text>
          <Text fontSize="15px" fontWeight="500" color="gray" mt="4px">
            Anda telah menyetujui rencana studi Sarah Nasywa Azizah pada 13
            Agustus 1945.
          </Text>
        </Box>
        <Center mt={{ base: "24px", a: "0px" }}>
          <DaliOutlineButton
            onClick={onOpenBatalPersetujuan}
            isLoading={false}
          >
            Batalkan
          </DaliOutlineButton>
        </Center>
      </PlainCard>

      {/* Modal */}
      <ModalPersetujuan
        isOpen={isOpenPersetujuan}
        onClose={onClosePersetujuan}
      />
      <ModalBatalPersetujuan
        isOpen={isOpenBatalPersetujuan}
        onClose={onCloseBatalPersetujuan}
      />
    </>
  );
};

export default CardPersetujuan;

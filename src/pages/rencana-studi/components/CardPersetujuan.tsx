import {
  Box,
  Text,
  useColorMode,
  useDisclosure,
} from "@chakra-ui/react";
import {
  SuccessButton,
} from "@/components/atoms/Buttons/SuccessButton";
import PlainCard from "@/components/organisms/Cards/Card";
import { ModalPersetujuan } from "./Modal/ModalPersetujuan";

const CardPersetujuan = () => {
  const { colorMode } = useColorMode();
  const {
    isOpen: isOpenPersetujuan,
    onOpen: onOpenPersetujuan,
    onClose: onClosePersetujuan,
  } = useDisclosure();
  return (
    <>
      <PlainCard
        display={{ base: "block", a: "flex" }}
        justifyContent="space-between"
        alignItems="center"
      >
        <Box>
          <Text fontSize="18px" fontWeight="600">Setujui Rencana Studi</Text>
          <Text
            fontSize="15px"
            fontWeight="500"
            color="gray"
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
          <SuccessButton onClick={onOpenPersetujuan} isLoading={false}>
            Setuju
          </SuccessButton>
        </Box>
      </PlainCard>

      {/* Modal */}
      <ModalPersetujuan isOpen={isOpenPersetujuan} onClose={onClosePersetujuan} />
    </>
  );
};

export default CardPersetujuan;

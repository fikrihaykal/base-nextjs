import {
  Box,
  Center,
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
        gap={6}
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
        <Center
          mt={{ base: "24px", a: "0px" }}
        >
          <SuccessButton onClick={onOpenPersetujuan} isLoading={false}>
            Setuju
          </SuccessButton>
        </Center>
      </PlainCard>

      {/* Modal */}
      <ModalPersetujuan isOpen={isOpenPersetujuan} onClose={onClosePersetujuan} />
    </>
  );
};

export default CardPersetujuan;

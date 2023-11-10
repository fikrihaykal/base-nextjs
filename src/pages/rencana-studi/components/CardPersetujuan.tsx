import {
  Box,
  Center,
  Flex,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useColorMode,
  useDisclosure,
} from "@chakra-ui/react";
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
import { TextButton } from "@/components/atoms/Buttons/TextButton";
import { DangerButton } from "@/components/atoms/Buttons/DangerButton";
import { PrimaryButton } from "@/components/atoms/Buttons/PrimaryButton";

const CardPersetujuan = () => {
  const { colorMode } = useColorMode();
  const {
    isOpen: isOpenSetujuFRS,
    onOpen: onOpenSetujuFRS,
    onClose: onCloseSetujuFRS,
  } = useDisclosure();
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
          <SuccessButton onClick={onOpenSetujuFRS} isLoading={false}>
            Setuju
          </SuccessButton>
        </Box>
      </PlainCard>

      <Modal
        isOpen={isOpenSetujuFRS}
        onClose={onCloseSetujuFRS}
        size="lg"
        isCentered
      >
        <ModalOverlay />
        <ModalContent
          borderRadius="16px"
          py="8px"
          m="16px 24px"
          bg={colorMode == "light" ? "white" : "gray.900"}
        >
          <ModalHeader
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            Setujui Rencana Studi
          </ModalHeader>
          <ModalBody>
            <Text fontSize="15px" fontWeight="500" lineHeight="1.7">
              Apakah Anda yakin ingin menyetujui rencana studi ini?
            </Text>
          </ModalBody>
          <ModalFooter>
            <Center>
              <TextButton onClick={onCloseSetujuFRS}>Kembali</TextButton>
            </Center>
            <Center>
              <PrimaryButton type="submit" isLoading={false}>
                Setuju
              </PrimaryButton>
            </Center>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CardPersetujuan;

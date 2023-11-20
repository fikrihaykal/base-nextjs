import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useColorMode,
  Box,
  Select,
  useColorModeValue,
  Input,
  Text,
  Flex,
  Center,
} from "@chakra-ui/react";
import { TextButton } from "@/components/atoms/Buttons/TextButton";
import { PrimaryButton } from "@/components/atoms/Buttons/PrimaryButton";
import {
  RadioCard,
  RadioCardGroup,
  RadioCardReverse,
} from "@/components/customs/RadioCard";
import {
  CalendarOutlineIconMade,
  ClockOutlineIconMade,
} from "@/components/atoms/IconsMade";
import { isChrome, isFirefox } from "react-device-detect";
import { SuccessButton } from "@/components/atoms/Buttons/SuccessButton";

interface ButtonPersetujuanProps {
  onClick: () => void;
}

export const ButtonPersetujuan: React.FC<ButtonPersetujuanProps> = ({
  onClick,
}) => {
  return <SuccessButton onClick={onClick}>Setuju</SuccessButton>;
};

interface ModalPersetujuanProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ModalPersetujuan: React.FC<ModalPersetujuanProps> = ({
  isOpen,
  onClose,
}) => {
  const { colorMode } = useColorMode();
  const inputgray = useColorModeValue("gray.50", "gray.800");
  return (
    <Modal size="lg" onClose={onClose} isOpen={isOpen} isCentered>
      <ModalOverlay />
      <ModalContent
        borderRadius="16px"
        m="16px 24px"
        bg={colorMode === "light" ? "white" : "gray.900"}
        mx="16px"
      >
        <ModalHeader mt="2px">Setujui Rencana Studi</ModalHeader>
        <ModalBody>
          <Text fontSize="15px" fontWeight="500" lineHeight="1.7">
            Apakah Anda yakin ingin menyetujui rencana studi ini?
          </Text>
        </ModalBody>
        <ModalFooter pb="24px">
          <Center>
            <TextButton onClick={onClose}>Kembali</TextButton>
          </Center>
          <Center>
            <SuccessButton type="submit" isLoading={false}>
              Setuju
            </SuccessButton>
          </Center>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

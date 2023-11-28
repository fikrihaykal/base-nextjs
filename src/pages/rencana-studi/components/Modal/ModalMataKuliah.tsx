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
  useColorModeValue,
  Text,
  Center,
  Badge,
} from "@chakra-ui/react";
import { TextButton } from "@/components/atoms/Buttons/TextButton";
import { isChrome, isFirefox } from "react-device-detect";
import { NeutralGhostButton } from "@/components/atoms/Buttons/NeutralButton";

interface ModalMataKuliahProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ModalMataKuliah: React.FC<ModalMataKuliahProps> = ({
  isOpen,
  onClose,
}) => {
  const { colorMode } = useColorMode();
  const colorborder = useColorModeValue("gray.100", "gray.800");
  return (
    <Modal size="lg" onClose={onClose} isOpen={isOpen} isCentered>
      <ModalOverlay />
      <ModalContent
        borderRadius="16px"
        m="16px 24px"
        bg={colorMode === "light" ? "white" : "gray.900"}
        mx="16px"
      >
        <ModalHeader mt="2px">Wajib Diambil</ModalHeader>
        <ModalCloseButton
          as={NeutralGhostButton}
          minW="50px"
          h="50px"
          borderRadius="16px/16px"
        />
        <ModalBody maxH="80vh" overflowY="auto">
          <Box
            h={{ base: "calc(100vh - 450px)", d: "calc(100vh - 350px)" }}
            overflowY="scroll"
            sx={{
              "::-webkit-scrollbar-thumb": {
                backgroundColor: colorMode == "light" ? "gray.200" : "gray.800",
              },
              scrollbarWidth: "thin",
              scrollbarColor: "silver transparent;",
              ...(isFirefox && { marginRight: "-15px", paddingRight: "15px" }),
            }}
            mr="-20px"
          >
            <Box
              border="1px solid"
              borderColor={colorborder}
              borderRadius="16px"
              p="16px"
              mb="1rem"
            >
              <Box>
                <Text fontSize="13px" fontWeight="500" color="blue">
                  Semester 4
                </Text>
                <Text fontSize="15px" fontWeight="600" mt="4px">
                  Perancangan dan Analisis Algoritma
                </Text>
                <Text fontSize="14px" fontWeight="500" mt="4px">
                  IF23212 • 3 SKS
                </Text>
              </Box>
            </Box>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export const ModalMelanggar: React.FC<ModalMataKuliahProps> = ({
  isOpen,
  onClose,
}) => {
  const { colorMode } = useColorMode();
  const colorborder = useColorModeValue("gray.100", "gray.800");
  return (
    <Modal size="lg" onClose={onClose} isOpen={isOpen} isCentered>
      <ModalOverlay />
      <ModalContent
        borderRadius="16px"
        m="16px 24px"
        bg={colorMode === "light" ? "white" : "gray.900"}
        mx="16px"
      >
        <ModalHeader mt="2px">Melanggar Prasyarat</ModalHeader>
        <ModalCloseButton
          as={NeutralGhostButton}
          minW="50px"
          h="50px"
          borderRadius="16px/16px"
        />
        <ModalBody maxH="80vh" overflowY="auto">
          <Box
            h={{ base: "calc(100vh - 450px)", d: "calc(100vh - 350px)" }}
            overflowY="scroll"
            sx={{
              "::-webkit-scrollbar-thumb": {
                backgroundColor: colorMode == "light" ? "gray.200" : "gray.800",
              },
              scrollbarWidth: "thin",
              scrollbarColor: "silver transparent;",
              ...(isFirefox && { marginRight: "-15px", paddingRight: "15px" }),
            }}
            mr="-20px"
          >
            <Box
              border="1px solid"
              borderColor={colorborder}
              borderRadius="16px"
              p="16px"
              mb="1rem"
            >
              <Box
                mb="16px"
                pb="16px"
                borderBottom="1px dashed"
                borderBottomColor={colorborder}
              >
                <Text fontSize="13px" fontWeight="500" color="gray">
                  Mata kuliah yang Anda ambil
                </Text>
                <Text fontSize="15px" fontWeight="600" mt="4px">
                  Rekayasa Perangkat Lunak
                </Text>
                <Text fontSize="14px" fontWeight="500" mt="4px">
                  IF9382983
                </Text>
              </Box>
              <Box>
                <Text fontSize="13px" fontWeight="500" color="gray">
                  Mata kuliah prasyarat
                </Text>
                <Text fontSize="15px" fontWeight="600" mt="4px">
                  Rekayasa Perangkat Lunak
                </Text>
                <Text fontSize="14px" fontWeight="500" mt="4px">
                  IF9382983 •{" "}
                  <Box as="span" color="red">
                    Belum diambil
                  </Box>
                </Text>
              </Box>
            </Box>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

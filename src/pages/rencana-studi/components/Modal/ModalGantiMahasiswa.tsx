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
  Flex,
  Center,
  Skeleton,
} from "@chakra-ui/react";
import { TextButton } from "@/components/customs/Buttons/TextButton";
import { PrimaryButton } from "@/components/customs/Buttons/PrimaryButton";
import {
  RadioCardGroup,
  RadioCardReverse,
} from "@/components/customs/RadioCard";
import {
  CalendarOutlineIconMade,
  ClockOutlineIconMade,
} from "@/components/atoms/IconsMade";
import { isChrome, isFirefox } from "react-device-detect";
import Dropdown from "@/components/customs/Dropdown";
import { DropdownJenisKelas } from "@/data/dummy";
import { TableSearch } from "@/components/customs/Table";
import { DarkButton } from "@/components/customs/Buttons/DarkButton";
import {
  DaliButton,
  DaliGhostButton,
} from "@/components/customs/Buttons/DaliButton";

interface ButtonGantiMahasiswaProps {
  onClick: () => void;
}

export const ButtonGantiMahasiswa: React.FC<ButtonGantiMahasiswaProps> = ({
  onClick,
}) => {
  return <PrimaryButton onClick={onClick}>Ganti</PrimaryButton>;
};

interface ModalGantiMahasiswaProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ModalGantiMahasiswa: React.FC<ModalGantiMahasiswaProps> = ({
  isOpen,
  onClose,
}) => {
  const { colorMode } = useColorMode();
  const inputgray = useColorModeValue("gray.50", "gray.800");
  return (
    <Modal size="lg" onClose={onClose} isOpen={isOpen} isCentered autoFocus={false}>
      <ModalOverlay />
      <ModalContent
        borderRadius="16px"
        m="16px 24px"
        bg={colorMode === "light" ? "white" : "gray.900"}
        mx="16px"
      >
        <ModalHeader mt="2px">Ganti</ModalHeader>
        <ModalCloseButton
          as={TextButton}
          minW="50px"
          h="50px"
          borderRadius="16px/16px"
        />
        <ModalBody maxH="80vh" overflowY="auto">
          <Box
            display="flex"
            alignItems="center"
            mb="16px"
            flexWrap={{ base: "wrap", s: "nowrap" }}
            gap={3}
          >
            <Box w="100%">
              <TableSearch target={[]} placeholder="Cari mahasiswa" />
            </Box>
          </Box>
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
            <Text fontSize="14px" fontWeight="500" color="gray" mb="8px">
              Pilih salah satu
            </Text>
            <RadioCardGroup
              defaultValue="5013231063"
              display="flex"
              flexWrap="wrap"
              gap={2}
            >
              <RadioCardReverse
                value="5013231063"
                isMark={true}
                isRequired={false}
                isDisabled={false}
              >
                <Text fontSize="15px" fontWeight="600">
                  Sarah Nasywa Azizah
                </Text>
                <Text fontSize="14px" fontWeight="500" mt="6px">
                  5013231063
                </Text>
              </RadioCardReverse>
              <RadioCardReverse
                value="5013231064"
                isMark={true}
                isRequired={false}
                isDisabled={false}
              >
                <Text fontSize="15px" fontWeight="600">
                  Indah Andira
                </Text>
                <Text fontSize="14px" fontWeight="500" mt="6px">
                  5013231064
                </Text>
              </RadioCardReverse>
              {/* Skeleton */}
              {/* <Skeleton w="full" h="85px" borderRadius="24px" mb="0.5rem" />
              <Skeleton w="full" h="85px" borderRadius="24px" mb="0.5rem" /> */}
            </RadioCardGroup>

            {/* Skeleton */}
            {/* <Skeleton w="full" h="113px" borderRadius="24px" mb="0.5rem" />
            <Skeleton w="full" h="113px" borderRadius="24px" mb="0.5rem" /> */}
          </Box>
        </ModalBody>
        <ModalFooter
          display="flex"
          flexWrap={{ base: "wrap", s: "nowrap" }}
          pb="24px"
          gap={2}
        >
          {/* <Center w={{base: "full", s: "auto"}}>
            <DaliGhostButton onClick={onClose}>Kembali</DaliGhostButton>
          </Center> */}
          <Center w={{ base: "full", s: "auto" }}>
            <PrimaryButton type="submit" isLoading={false}>
              Terapkan
            </PrimaryButton>
          </Center>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

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
import Dropdown from "@/components/customs/Dropdown";
import { DropdownJenisKelas, DropdownSemester } from "@/data/dummy";
import { TableSearch } from "@/components/customs/Table";

interface ButtonAmbilKelasProps {
  onClick: () => void;
}

export const ButtonAmbilKelas: React.FC<ButtonAmbilKelasProps> = ({
  onClick,
}) => {
  return <PrimaryButton onClick={onClick}>Ambil Kelas</PrimaryButton>;
};

interface ModalAmbilKelasProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ModalAmbilKelas: React.FC<ModalAmbilKelasProps> = ({
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
        <ModalHeader mt="2px">Ambil Kelas</ModalHeader>
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
            <Box w={{ base: "100%", s: "50%" }}>
              <Dropdown data={DropdownJenisKelas} placeholder="Jenis kelas" />
            </Box>
            <Box w={{ base: "100%", s: "50%" }}>
              <TableSearch target={[]} placeholder="Cari kelas" />
            </Box>
          </Box>
          <Box
            maxH={{ base: "calc(100vh - 400px)", d: "calc(100vh - 350px)" }}
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
            <RadioCardGroup defaultValue="" display="flex" flexWrap="wrap" gap={2}>
              <RadioCardReverse
                value="IF1"
                isMark={true}
                isRequired={false}
                isDisabled={false}
              >
                <Text fontSize="14px" fontWeight={600}>
                  Analisis & Desain Sistem Informasi (A)
                </Text>
                <Text fontSize="13px" fontWeight="500" mt="6px">
                  IF23212 • 3 SKS • Semester 3 (saat ini)
                </Text>
                <Flex alignItems="center" mt="8px" gap={3}>
                  <Flex alignItems="center">
                    <CalendarOutlineIconMade fontSize="14px" mr="6px" />
                    <Text fontWeight="500" fontSize="13px">
                      Senin
                    </Text>
                  </Flex>
                  <Flex alignItems="center">
                    <ClockOutlineIconMade fontSize="14px" mr="6px" />
                    <Text fontWeight="500" fontSize="13px">
                      07.30-10.00
                    </Text>
                  </Flex>
                </Flex>
              </RadioCardReverse>
              <RadioCardReverse
                value="IF2"
                isMark={true}
                isRequired={false}
                isDisabled={false}
              >
                <Text fontSize="14px" fontWeight={600}>
                  Analisis & Desain Sistem Informasi (B)
                </Text>
                <Text fontSize="13px" fontWeight="500" mt="6px">
                  IF23212 • 3 SKS • Semester 3 (saat ini)
                </Text>
                <Flex alignItems="center" mt="8px" gap={3}>
                  <Flex alignItems="center">
                    <CalendarOutlineIconMade fontSize="14px" mr="6px" />
                    <Text fontWeight="500" fontSize="13px">
                      Senin
                    </Text>
                  </Flex>
                  <Flex alignItems="center">
                    <ClockOutlineIconMade fontSize="14px" mr="6px" />
                    <Text fontWeight="500" fontSize="13px">
                      07.30-10.00
                    </Text>
                  </Flex>
                </Flex>
              </RadioCardReverse>
              <RadioCardReverse
                value="IF3"
                isMark={true}
                isRequired={false}
                isDisabled={true}
              >
                <Text fontSize="14px" fontWeight={600}>
                  Analisis & Desain Sistem Informasi (C)
                </Text>
                <Text fontSize="13px" fontWeight="500" mt="6px">
                  IF23212 • 3 SKS • Semester 3 (saat ini)
                </Text>
                <Flex alignItems="center" mt="8px" gap={3}>
                  <Flex alignItems="center">
                    <CalendarOutlineIconMade fontSize="14px" mr="6px" />
                    <Text fontWeight="500" fontSize="13px">
                      Senin
                    </Text>
                  </Flex>
                  <Flex alignItems="center">
                    <ClockOutlineIconMade fontSize="14px" mr="6px" />
                    <Text fontWeight="500" fontSize="13px">
                      07.30-10.00
                    </Text>
                  </Flex>
                </Flex>
                <Box fontSize="14px" fontWeight="500" mt="24px">
                  Kelas penuh
                </Box>
              </RadioCardReverse>
              <RadioCardReverse
                value="IF4"
                isMark={true}
                isRequired={false}
                isDisabled={false}
              >
                <Text fontSize="14px" fontWeight={600}>
                  Analisis & Desain Sistem Informasi (D)
                </Text>
                <Text fontSize="13px" fontWeight="500" mt="6px">
                  IF23212 • 3 SKS • Semester 3 (saat ini)
                </Text>
                <Flex alignItems="center" mt="8px" gap={3}>
                  <Flex alignItems="center">
                    <CalendarOutlineIconMade fontSize="14px" mr="6px" />
                    <Text fontWeight="500" fontSize="13px">
                      Senin
                    </Text>
                  </Flex>
                  <Flex alignItems="center">
                    <ClockOutlineIconMade fontSize="14px" mr="6px" />
                    <Text fontWeight="500" fontSize="13px">
                      07.30-10.00
                    </Text>
                  </Flex>
                </Flex>
              </RadioCardReverse>
              <RadioCardReverse
                value="IF5"
                isMark={true}
                isRequired={false}
                isDisabled={true}
              >
                <Text fontSize="14px" fontWeight={600}>
                  Analisis & Desain Sistem Informasi (E)
                </Text>
                <Text fontSize="13px" fontWeight="500" mt="6px">
                  IF23212 • 3 SKS • Semester 3 (saat ini)
                </Text>
                <Flex alignItems="center" mt="8px" gap={3}>
                  <Flex alignItems="center">
                    <CalendarOutlineIconMade fontSize="14px" mr="6px" />
                    <Text fontWeight="500" fontSize="13px">
                      Senin
                    </Text>
                  </Flex>
                  <Flex alignItems="center">
                    <ClockOutlineIconMade fontSize="14px" mr="6px" />
                    <Text fontWeight="500" fontSize="13px">
                      07.30-10.00
                    </Text>
                  </Flex>
                </Flex>
                <Box fontSize="14px" fontWeight="500" mt="24px">
                  Kelas penuh
                </Box>
              </RadioCardReverse>
              <RadioCardReverse
                value="IF6"
                isMark={true}
                isRequired={false}
                isDisabled={false}
              >
                <Text fontSize="14px" fontWeight={600}>
                  Analisis & Desain Sistem Informasi (F)
                </Text>
                <Text fontSize="13px" fontWeight="500" mt="6px">
                  IF23212 • 3 SKS • Semester 3 (saat ini)
                </Text>
                <Flex alignItems="center" mt="8px" gap={3}>
                  <Flex alignItems="center">
                    <CalendarOutlineIconMade fontSize="14px" mr="6px" />
                    <Text fontWeight="500" fontSize="13px">
                      Senin
                    </Text>
                  </Flex>
                  <Flex alignItems="center">
                    <ClockOutlineIconMade fontSize="14px" mr="6px" />
                    <Text fontWeight="500" fontSize="13px">
                      07.30-10.00
                    </Text>
                  </Flex>
                </Flex>
              </RadioCardReverse>
              <RadioCardReverse
                value="IF7"
                isMark={true}
                isRequired={false}
                isDisabled={false}
              >
                <Text fontSize="14px" fontWeight={600}>
                  Analisis & Desain Sistem Informasi (G)
                </Text>
                <Text fontSize="13px" fontWeight="500" mt="6px">
                  IF23212 • 3 SKS • Semester 3 (saat ini)
                </Text>
                <Flex alignItems="center" mt="8px" gap={3}>
                  <Flex alignItems="center">
                    <CalendarOutlineIconMade fontSize="14px" mr="6px" />
                    <Text fontWeight="500" fontSize="13px">
                      Senin
                    </Text>
                  </Flex>
                  <Flex alignItems="center">
                    <ClockOutlineIconMade fontSize="14px" mr="6px" />
                    <Text fontWeight="500" fontSize="13px">
                      07.30-10.00
                    </Text>
                  </Flex>
                </Flex>
              </RadioCardReverse>
              <RadioCardReverse
                value="IF8"
                isMark={true}
                isRequired={false}
                isDisabled={false}
              >
                <Text fontSize="14px" fontWeight={600}>
                  Analisis & Desain Sistem Informasi (H)
                </Text>
                <Text fontSize="13px" fontWeight="500" mt="6px">
                  IF23212 • 3 SKS • Semester 3 (saat ini)
                </Text>
                <Flex alignItems="center" mt="8px" gap={3}>
                  <Flex alignItems="center">
                    <CalendarOutlineIconMade fontSize="14px" mr="6px" />
                    <Text fontWeight="500" fontSize="13px">
                      Senin
                    </Text>
                  </Flex>
                  <Flex alignItems="center">
                    <ClockOutlineIconMade fontSize="14px" mr="6px" />
                    <Text fontWeight="500" fontSize="13px">
                      07.30-10.00
                    </Text>
                  </Flex>
                </Flex>
              </RadioCardReverse>
            </RadioCardGroup>
          </Box>
        </ModalBody>
        <ModalFooter pb="24px">
          <Center>
            <TextButton onClick={onClose}>Kembali</TextButton>
          </Center>
          <Center>
            <PrimaryButton type="submit" isLoading={false}>
              Tambahkan
            </PrimaryButton>
          </Center>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

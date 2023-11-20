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
import { RadioCard, RadioCardGroup } from "@/components/customs/RadioCard";
import {
  CalendarOutlineIconMade,
  ClockOutlineIconMade,
} from "@/components/atoms/IconsMade";
import { isChrome, isFirefox } from "react-device-detect";

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
            display={{ base: "block", a: "flex" }}
            alignItems="center"
            gap={3}
            mb="24px"
          >
            <Select
              cursor="pointer"
              size="lg"
              border="2px"
              borderColor={inputgray}
              background={inputgray}
              borderRadius="xl"
              fontSize="14px"
              fontWeight="700"
              defaultValue={"option1"}
              w="full"
              _focus={{ boxShadow: "none" }}
            >
              <option value="option1">Mata Kuliah Umum</option>
              <option value="option2">Departemen</option>
            </Select>
            <Input
              size="lg"
              border="2px"
              borderColor={inputgray}
              background={inputgray}
              placeholder="Cari nama kelas"
              borderRadius="xl"
              fontSize="14px"
              fontWeight="500"
              w="full"
              mt={{ base: "8px", a: "unset" }}
              _focus={{ boxShadow: "none" }}
            />
          </Box>
          <Box
            maxH={{base: "calc(100vh - 400px)", d: "calc(100vh - 350px)"}}
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
            <RadioCardGroup>
              <RadioCard
                value="IF1"
                mb="0.5rem"
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
              </RadioCard>
              <RadioCard
                value="IF2"
                mb="0.5rem"
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
              </RadioCard>
              <RadioCard
                value="IF3"
                mb="0.5rem"
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
              </RadioCard>
              <RadioCard
                value="IF4"
                mb="0.5rem"
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
              </RadioCard>
              <RadioCard
                value="IF5"
                mb="0.5rem"
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
              </RadioCard>
              <RadioCard
                value="IF6"
                mb="0.5rem"
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
              </RadioCard>
              <RadioCard
                value="IF7"
                mb="0.5rem"
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
              </RadioCard>
              <RadioCard
                value="IF8"
                mb="0.5rem"
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
              </RadioCard>
            </RadioCardGroup>
          </Box>
        </ModalBody>
        <ModalFooter>
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

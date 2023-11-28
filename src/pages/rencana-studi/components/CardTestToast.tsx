import {
  CheckmarkOutlineIconMade,
  CloseOutlineIconMade,
  HourGlassOutlineIconMade,
} from "@/components/atoms/IconsMade";
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
  return (
    <>
      <PlainCard>
        <Box>
          <Text fontSize="20px" fontWeight="600">
            Tes Toast
          </Text>
        </Box>
        <Flex flexWrap="wrap" gap={4} mt="16px">
          <Badge
            colorScheme="red"
            variant="subtle"
            borderRadius="full"
            p="6px 12px"
            fontSize="13px"
            fontWeight="600"
            textTransform="capitalize"
            cursor="pointer"
            onClick={() =>
              toast({
                position: "top-right",
                title: "Kelas Penuh",
                description:
                  "Kelas Struktur Data (C) gagal diambil karena sudah penuh. Coba kelas lain.",
                status: "error",
                duration: 5000,
                isClosable: true,
                render: (props) => (
                  <Box as="section" pt="4px">
                    <Box
                      width={{ base: "full", s: "md" }}
                      boxShadow="md"
                      bg={colorMode === "light" ? "red.500" : "red.700"}
                      borderRadius="24"
                      p="24px"
                      display="flex"
                      justifyContent="start"
                      alignItems="center"
                      flexWrap={{ base: "wrap", a: "nowrap" }}
                      gap={4}
                    >
                      <Flex alignItems="center" gap={4} w="100%">
                        <Center h="42px" w="42px">
                          <Center
                            h="42px"
                            w="42px"
                            bg={colorMode === "light" ? "red.600" : "red.800"}
                            borderRadius="full"
                          >
                            <CloseOutlineIconMade
                              fontSize="24px"
                              color="white"
                            />
                          </Center>
                        </Center>
                        <Box>
                          <Text fontSize="16px" fontWeight="600" color="white">
                            {props.title}
                          </Text>
                          <Text fontSize="15px" color="whiteAlpha.900" mt="4px">
                            {props.description}
                          </Text>
                        </Box>
                      </Flex>
                      <Box
                        w={{ base: "100%", a: "auto" }}
                        display="flex"
                        justifyContent="end"
                      >
                        <Box
                          fontSize="14px"
                          fontWeight="700"
                          color="white"
                          cursor="pointer"
                          onClick={props.onClose}
                          p="14px 20px"
                          borderRadius="16px"
                          transition="all .25s"
                          _hover={{
                            bg: colorMode === "light" ? "red.600" : "red.800",
                            transition: "all .25s",
                          }}
                        >
                          Tutup
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                ),
              })
            }
          >
            Kelas penuh
          </Badge>
          <Badge
            colorScheme="green"
            variant="subtle"
            borderRadius="full"
            p="6px 12px"
            fontSize="13px"
            fontWeight="600"
            textTransform="capitalize"
            cursor="pointer"
            onClick={() =>
              toast({
                position: "top-right",
                title: "Kelas Berhasil Diambil",
                description:
                  "Kelas Struktur Data (C) yang Anda idam-idamkan tadi akhirnya berhasil diambil.",
                status: "success",
                duration: 5000,
                isClosable: true,
                render: (props) => (
                  <Box as="section" pt="4px">
                    <Box
                      width={{ base: "full", s: "md" }}
                      boxShadow="md"
                      bg={colorMode === "light" ? "green.500" : "green.700"}
                      borderRadius="24"
                      p="24px"
                      display="flex"
                      justifyContent="start"
                      alignItems="center"
                      flexWrap={{ base: "wrap", a: "nowrap" }}
                      gap={4}
                    >
                      <Flex alignItems="center" gap={4} w="100%">
                        <Center h="42px" w="42px">
                          <Center
                            h="42px"
                            w="42px"
                            bg={
                              colorMode === "light" ? "green.600" : "green.800"
                            }
                            borderRadius="full"
                          >
                            <CheckmarkOutlineIconMade
                              fontSize="24px"
                              color="white"
                            />
                          </Center>
                        </Center>
                        <Box>
                          <Text fontSize="16px" fontWeight="600" color="white">
                            {props.title}
                          </Text>
                          <Text fontSize="15px" color="whiteAlpha.900" mt="4px">
                            {props.description}
                          </Text>
                        </Box>
                      </Flex>
                      <Box
                        w={{ base: "100%", a: "auto" }}
                        display="flex"
                        justifyContent="end"
                      >
                        <Box
                          fontSize="14px"
                          fontWeight="700"
                          color="white"
                          cursor="pointer"
                          onClick={props.onClose}
                          p="14px 20px"
                          borderRadius="16px"
                          transition="all .25s"
                          _hover={{
                            bg:
                              colorMode === "light" ? "green.600" : "green.800",
                            transition: "all .25s",
                          }}
                        >
                          Tutup
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                ),
              })
            }
          >
            Berhasil Diambil
          </Badge>
          <Badge
            colorScheme="blue"
            variant="subtle"
            borderRadius="full"
            p="6px 12px"
            fontSize="13px"
            fontWeight="600"
            textTransform="capitalize"
            cursor="pointer"
            onClick={() =>
              toast({
                position: "top-right",
                title: "Sedang Diproses",
                description:
                  "Anda sudah masuk dalam antrian pengambilan kelas Struktur Data (C). Mohon ditunggu.",
                status: "loading",
                duration: 5000,
                isClosable: true,
                render: (props) => (
                  <Box as="section" pt="4px">
                    <Box
                      width={{ base: "full", s: "md" }}
                      boxShadow="md"
                      bg={colorMode === "light" ? "blue.500" : "blue.700"}
                      borderRadius="24"
                      p="24px"
                      display="flex"
                      justifyContent="start"
                      alignItems="center"
                      flexWrap={{ base: "wrap", a: "nowrap" }}
                      gap={4}
                    >
                      <Flex alignItems="center" gap={4} w="100%">
                        <Center h="42px" w="42px">
                          <Center
                            h="42px"
                            w="42px"
                            bg={colorMode === "light" ? "blue.600" : "blue.800"}
                            borderRadius="full"
                          >
                            <HourGlassOutlineIconMade
                              fontSize="24px"
                              color="white"
                            />
                          </Center>
                        </Center>
                        <Box>
                          <Text fontSize="16px" fontWeight="600" color="white">
                            {props.title}
                          </Text>
                          <Text fontSize="15px" color="whiteAlpha.900" mt="4px">
                            {props.description}
                          </Text>
                        </Box>
                      </Flex>
                      <Box
                        w={{ base: "100%", a: "auto" }}
                        display="flex"
                        justifyContent="end"
                      >
                        <Box
                          fontSize="14px"
                          fontWeight="700"
                          color="white"
                          cursor="pointer"
                          onClick={props.onClose}
                          p="14px 20px"
                          borderRadius="16px"
                          transition="all .25s"
                          _hover={{
                            bg: colorMode === "light" ? "blue.600" : "blue.800",
                            transition: "all .25s",
                          }}
                        >
                          Tutup
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                ),
              })
            }
          >
            Sedang diproses
          </Badge>
        </Flex>
      </PlainCard>
    </>
  );
};

export default CardTestToast;

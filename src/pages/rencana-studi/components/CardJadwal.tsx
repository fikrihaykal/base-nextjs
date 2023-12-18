import {
  Badge,
  Box,
  Button,
  Center,
  Collapse,
  Fade,
  Flex,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import PlainCard from "@/components/organisms/Cards/Card";
import React, { useState } from "react";
import {
  CalendarOutlineIconMade,
  ChevronDownOutlineIconMade,
  ChevronUpOutlineIconMade,
} from "@/components/atoms/IconsMade";
import { TextButton } from "@/components/customs/Buttons/TextButton";

const stepstatus = [
  { no: 1, title: "Belum masa FRS", description: "Persiapan", status: 2 },
  { no: 2, title: "Pengisian", description: "30 Jan - 3 Feb 2023", status: 1 },
  { no: 3, title: "Perubahan", description: "4 Feb - 24 Feb 2023", status: 0 },
  { no: 4, title: "Drop", description: "25 Feb - 14 Apr 2023", status: 0 },
  {
    no: 5,
    title: "Di luar masa FRS",
    description: "Masa FRS berakhir",
    status: 0,
  },
];

const CardJadwal = () => {
  const [showJadwal, setShowJadwal] = useState(false);
  const handleToggle = () => setShowJadwal(!showJadwal);
  const { colorMode } = useColorMode();
  const colorstatus0 = useColorModeValue("gray.400", "gray.600");
  const colorborder = useColorModeValue("gray.100", "gray.800");

  return (
    <>
      <PlainCard>
        <Box
          m="-16px"
          p="16px"
          display="flex"
          flexWrap="nowrap"
          alignItems="center"
          borderRadius="16px"
          onClick={handleToggle}
          _hover={{
            cursor: "pointer",
          }}
        >
          {!showJadwal ? (
            <Box w="full">
              {stepstatus.map((item, index) => (
                <Box key={index}>
                  {item.status === 1 ? (
                    <Flex alignItems="center" gap={5}>
                      <Box w="48px" h="48px">
                        <Center
                          w="48px"
                          h="48px"
                          bg={
                            colorMode === "light"
                              ? "blackAlpha.100"
                              : "whiteAlpha.200"
                          }
                          borderRadius="full"
                        >
                          <CalendarOutlineIconMade fontSize="24px" />
                        </Center>
                      </Box>
                      <Box>
                        <Text fontSize="13px" fontWeight={500} color="gray">
                          Jadwal saat ini
                        </Text>
                        <Text
                          fontSize="18px"
                          fontWeight={600}
                          color={colorMode == "light" ? "blue.500" : "#007FEB"}
                          mt="2px"
                        >
                          Masa {item.title}
                        </Text>
                        <Text
                          fontSize="14px"
                          fontWeight={500}
                          color="gray"
                          mt="2px"
                        >
                          {item.description}
                        </Text>
                      </Box>
                    </Flex>
                  ) : null}
                </Box>
              ))}
            </Box>
          ) : (
            <Text fontSize="20px" fontWeight={600} w="full">
              Jadwal
            </Text>
          )}
          <Button
            h="48px"
            borderRadius="16px"
            bg="unset"
            _hover={{ bg: colorMode == "light" ? "gray.50" : "gray.800" }}
          >
            <ChevronUpOutlineIconMade
              fontSize="20px"
              transition="transform 0.3s ease"
              transform={showJadwal ? "rotate(0deg)" : "rotate(-180deg)"}
            />
          </Button>
        </Box>
        <Box mx="-8px">
          <Collapse in={showJadwal} animateOpacity>
            <Flex
              overflowX="scroll"
              sx={{
                "::-webkit-scrollbar-thumb": {
                  backgroundColor:
                    colorMode == "light" ? "gray.200" : "gray.800",
                },
                scrollbarWidth: "thin",
                scrollbarColor: "silver transparent;",
              }}
              mt="16px"
              px="8px"
            >
              {stepstatus.map((item, index) => (
                <Box
                  mt="16px"
                  pt="24px"
                  pr="16px"
                  minW={{ base: "200px", d: "auto" }}
                  h="100%"
                  w="full"
                  fontWeight={item.status === 1 ? "600" : "500"}
                  color={
                    item.status === 1
                      ? colorMode == "light"
                        ? "blue.500"
                        : "#007FEB"
                      : colorstatus0
                  }
                  borderTop="2px dashed"
                  borderTopColor={item.no === 5 ? "transparent" : colorborder}
                  _notLast={{
                    borderTop: "2px dashed",
                    borderTopColor: colorborder,
                  }}
                  pos="relative"
                  key={index}
                >
                  <Box
                    w="14px"
                    h="14px"
                    bg={
                      item.status === 1
                        ? colorMode == "light"
                          ? "blue.500"
                          : "#007FEB"
                        : colorstatus0
                    }
                    borderRadius="full"
                    pos="absolute"
                    top="-7px"
                    boxShadow={
                      item.status === 1 ? "0px 0px 0px 5px #008fff38" : "unset"
                    }
                  />
                  <Text>{item.title}</Text>
                  <Text fontSize="13px" mt="2px">
                    {item.description}
                  </Text>
                  {item.status === 1 ? (
                    <Badge
                      bgGradient="linear(to-r, blue.500, blue.400)"
                      color="white"
                      borderRadius="full"
                      p="6px 12px"
                      fontSize="13px"
                      fontWeight={600}
                      textTransform="capitalize"
                      mt="16px"
                    >
                      Saat ini
                    </Badge>
                  ) : item.status === 2 ? (
                    <Badge
                      bg={colorMode == "light" ? "gray.300" : "gray.800"}
                      color="white"
                      borderRadius="full"
                      p="6px 12px"
                      fontSize="13px"
                      fontWeight={600}
                      textTransform="capitalize"
                      mt="16px"
                    >
                      Selesai
                    </Badge>
                  ) : (
                    <></>
                  )}
                </Box>
              ))}
            </Flex>

            {/* Skeleton */}
            {/* <Flex
          overflowX="scroll"
          sx={{
            "::-webkit-scrollbar-thumb": {
              backgroundColor: colorMode == "light" ? "gray.200" : "gray.800",
            },
            scrollbarWidth: "thin",
            scrollbarColor: "silver transparent;",
          }}
          mt="16px"
        >
          {stepstatus.map((item, index) => (
            <Box
              mt="16px"
              pt="24px"
              pr="16px"
              minW={{ base: "200px", d: "auto" }}
              h="100%"
              w="full"
              fontWeight={item.status === 1 ? "600" : "500"}
              color={item.status === 1 ? "blue.500" : colorstatus0}
              borderTop="2px dashed"
              borderTopColor={item.no === 5 ? "transparent" : colorborder}
              _notLast={{
                borderTop: "2px dashed",
                borderTopColor: colorborder,
              }}
              pos="relative"
              key={index}
            >
              <Box
                w="14px"
                h="14px"
                bg={colorstatus0}
                borderRadius="full"
                pos="absolute"
                top="-7px"
              />
              <Skeleton w="40%" h="20px" borderRadius="full" />
              <Skeleton w="75%" h="18px" borderRadius="full" mt="8px" />

              <Skeleton w="60px" h="30px" borderRadius="full" mt="24px" />
            </Box>
          ))}
        </Flex> */}
          </Collapse>
        </Box>
      </PlainCard>
    </>
  );
};

export default CardJadwal;

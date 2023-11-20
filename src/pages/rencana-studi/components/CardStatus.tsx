import {
  Badge,
  Box,
  Flex,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import PlainCard from "@/components/organisms/Cards/Card";

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

const CardStatus = () => {
  const { colorMode } = useColorMode();
  const colorstatus0 = useColorModeValue("gray.400", "gray.600");
  const colorborder = useColorModeValue("gray.100", "gray.800");

  return (
    <>
      <PlainCard>
        <Flex
          overflowX="scroll"
          sx={{
            "::-webkit-scrollbar-thumb": {
              backgroundColor: colorMode == "light" ? "gray.200" : "gray.800",
            },
            scrollbarWidth: "thin",
            scrollbarColor: "silver transparent;",
          }}
        >
          {stepstatus.map((item, index) => (
            <Box
              mt="16px"
              pt="24px"
              minW={{ base: "200px", d: "auto" }}
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
                bg={item.status === 1 ? "blue.500" : colorstatus0}
                borderRadius="full"
                pos="absolute"
                top="-7px"
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
                  fontWeight="600"
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
                  fontWeight="600"
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
      </PlainCard>
    </>
  );
};

export default CardStatus;

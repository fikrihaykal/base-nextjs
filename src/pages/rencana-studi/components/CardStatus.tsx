import {
  Box,
  Center,
  Flex,
  Grid,
  GridItem,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import PlainCard from "@/components/organisms/Cards/Card";
import {
  AddOutlineIconMade,
  BannedOutlineIconMade,
  EditOutlineIconMade,
  HourGlassOutlineIconMade,
  TrashOutlineIconMade,
} from "@/components/atoms/IconsMade";

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
  const colorstatus0 = useColorModeValue("gray.200", "gray.700");

  return (
    <>
      <PlainCard p="8px">
        <Grid templateColumns="repeat(5, 1fr)" overflowX="auto" whiteSpace="nowrap">
          {stepstatus.map((item, index) => (
            <GridItem
              minW="200px"
              p="24px"
              borderRadius="16px"
              fontWeight={item.status === 1 ? "600" : "500"}
              color={
                item.status === 1
                  ? "white"
                  : item.status === 2
                  ? colorstatus0
                  : "gray.500"
              }
              key={index}
              bgGradient={
                item.status === 1
                  ? "linear(to-tr, blue.500, cyan.500)"
                  : "unset"
              }
            >
              <Center
                w="40px"
                h="40px"
                bg={
                  item.status === 1
                    ? "white"
                    : item.status === 2
                    ? colorstatus0
                    : "gray.400"
                }
                borderRadius="full"
                mb="20px"
              >
                {item.no === 1 ? (
                  <HourGlassOutlineIconMade
                    fontSize="18px"
                    color={item.status === 1 ? "blue.500" : "blackAlpha.500"}
                  />
                ) : item.no === 2 ? (
                  <AddOutlineIconMade
                    fontSize="18px"
                    color={item.status === 1 ? "blue.500" : "blackAlpha.500"}
                  />
                ) : item.no === 3 ? (
                  <EditOutlineIconMade
                    fontSize="18px"
                    color={item.status === 1 ? "blue.500" : "blackAlpha.500"}
                  />
                ) : item.no === 4 ? (
                  <TrashOutlineIconMade
                    fontSize="18px"
                    color={item.status === 1 ? "blue.500" : "blackAlpha.500"}
                  />
                ) : (
                  <BannedOutlineIconMade
                    fontSize="18px"
                    color={item.status === 1 ? "blue.500" : "blackAlpha.500"}
                  />
                )}
              </Center>
              <Text>{item.title}</Text>
              <Text fontSize="13px" mt="2px">
                {item.description}
              </Text>
            </GridItem>
          ))}
        </Grid>
      </PlainCard>
    </>
  );
};

export default CardStatus;

import {
  Box,
  Center,
  Divider,
  Flex,
  ListItem,
  OrderedList,
  Text,
  Tooltip,
  useColorMode,
} from "@chakra-ui/react";
import NextLink from "next/link";
import PlainCard from "@/components/organisms/Cards/Card";
import { SecondaryButton } from "@/components/customs/Buttons/SecondaryButton";
import {
  CalendarOutlineIconMade,
  EditOutlineIconMade,
} from "@/components/atoms/IconsMade";
import { PrimaryOutlineBadge } from "@/components/customs/BadgeStatus/PrimaryBadge";

const CardJadwalKelas = () => {
  const { colorMode } = useColorMode();
  return (
    <PlainCard>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        flexWrap={{ base: "wrap", a: "nowrap" }}
      >
        <Flex alignItems="center" w="full" gap={4}>
          <Box w="48px" h="48px">
            <Center
              w="48px"
              h="48px"
              bg={colorMode === "light" ? "blackAlpha.100" : "whiteAlpha.200"}
              borderRadius="full"
            >
              <CalendarOutlineIconMade fontSize="24px" />
            </Center>
          </Box>
          <Text fontSize="20px" fontWeight={600}>
            Jadwal
          </Text>
        </Flex>
        <Box display={{ base: "none", a: "block" }}>
          <Tooltip hasArrow label="Edit">
            <Center as={NextLink} href="editjadwal">
              <SecondaryButton isLoading={false} minW="10px">
                <EditOutlineIconMade fontSize="20px" />
              </SecondaryButton>
            </Center>
          </Tooltip>
        </Box>
        <Box
          w="full"
          display={{ base: "block", a: "none" }}
          mt={{ base: "16px", a: "0px" }}
        >
          <Center>
            <SecondaryButton isLoading={false} minW="10px">
              Edit
            </SecondaryButton>
          </Center>
        </Box>
      </Flex>
      <Text fontSize="16px" fontWeight={600} mt="24px">
        Minggu Perkuliahan
      </Text>
      <Flex flexWrap="wrap" gap={2} mt="16px">
        <PrimaryOutlineBadge>Minggu 1</PrimaryOutlineBadge>
        <PrimaryOutlineBadge>Minggu 2</PrimaryOutlineBadge>
        <PrimaryOutlineBadge>Minggu 3</PrimaryOutlineBadge>
        <PrimaryOutlineBadge>Minggu 4</PrimaryOutlineBadge>
      </Flex>
      <Text fontSize="16px" fontWeight={600} mt="32px">
        Hari dan Jam
      </Text>
      <OrderedList>
        <ListItem fontSize="14px" fontWeight={500} mt="16px">
          <Text>Senin</Text>
          <Text fontSize="13px" fontWeight={500} color="gray" mt="2px">
            10.00-12.50
          </Text>
        </ListItem>
        <ListItem fontSize="14px" fontWeight={500} mt="16px">
          <Text>Selasa</Text>
          <Text fontSize="13px" fontWeight={500} color="gray" mt="2px">
            10.00-12.50
          </Text>
        </ListItem>
      </OrderedList>
    </PlainCard>
  );
};

export default CardJadwalKelas;

import {
  Box,
  Center,
  Divider,
  Flex,
  Grid,
  GridItem,
  ListItem,
  OrderedList,
  Text,
  Tooltip,
  useColorMode,
} from "@chakra-ui/react";
import PlainCard from "@/components/organisms/Cards/Card";
import {
  EditOutlineIconMade,
  ListOutlineIconMade,
} from "@/components/atoms/IconsMade";
import { SecondaryButton } from "@/components/customs/Buttons/SecondaryButton";

const CardInformasiKelas = () => {
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
              <ListOutlineIconMade fontSize="24px" />
            </Center>
          </Box>
          <Text fontSize="20px" fontWeight={600}>
            Informasi
          </Text>
        </Flex>
        <Box display={{ base: "none", a: "block" }}>
          <Tooltip hasArrow label="Edit">
            <Center>
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
        Mata Kuliah
      </Text>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          a: "repeat(2, 1fr)",
          m: "repeat(3, 1fr)",
          x: "repeat(3, 1fr)",
        }}
        gap={5}
        mt="16px"
      >
        <GridItem colSpan={1} py="0px">
          <Text fontSize="13px" fontWeight={500} color="gray">
            Tahun Kurikulum
          </Text>
          <Text fontSize="14px" fontWeight={500} mt="2px">
            2023
          </Text>
        </GridItem>
        <GridItem colSpan={1} py="0px">
          <Text fontSize="13px" fontWeight={500} color="gray">
            Periode
          </Text>
          <Text fontSize="14px" fontWeight={500} mt="2px">
            Semester Gasal 2023/2024
          </Text>
        </GridItem>
        <GridItem colSpan={1} py="0px">
          <Text fontSize="13px" fontWeight={500} color="gray">
            Mata Kuliah
          </Text>
          <Text fontSize="14px" fontWeight={500} mt="2px">
            IF123456 - Pemrograman Dasar
          </Text>
        </GridItem>
        <GridItem colSpan={1} py="0px">
          <Text fontSize="13px" fontWeight={500} color="gray">
            Kelas
          </Text>
          <Text fontSize="14px" fontWeight={500} mt="2px">
            A
          </Text>
        </GridItem>
        <GridItem colSpan={1} py="0px">
          <Text fontSize="13px" fontWeight={500} color="gray">
            SKS
          </Text>
          <Text fontSize="14px" fontWeight={500} mt="2px">
            3
          </Text>
        </GridItem>
      </Grid>
      <Divider my="32px" />
      <Text fontSize="16px" fontWeight={600}>
        Dosen Pengajar
      </Text>
      <OrderedList>
        <ListItem fontSize="14px" fontWeight={500} mt="16px">
          <Text>
            Budi Santoso
          </Text>
          <Text fontSize="13px" fontWeight={500} color="gray" mt="2px">
            1,5 SKS • 8 kali tatap muka
          </Text>
        </ListItem>
        <ListItem fontSize="14px" fontWeight={500} mt="16px">
          <Text>
            Budi Santoso
          </Text>
          <Text fontSize="13px" fontWeight={500} color="gray" mt="2px">
            1,5 SKS • 8 kali tatap muka
          </Text>
        </ListItem>
      </OrderedList>
      <Divider my="32px" />
      <Text fontSize="16px" fontWeight={600}>
        Prodi Lain
      </Text>
      <Text fontSize="14px" fontWeight={500} color="gray" mt="16px">
        Tidak diatur
      </Text>
    </PlainCard>
  );
};

export default CardInformasiKelas;

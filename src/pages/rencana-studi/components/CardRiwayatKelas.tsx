import { PrimaryButton } from "@/components/atoms/Buttons/PrimaryButton";
import PlainCard from "@/components/organisms/Cards/Card";
import {
  Badge,
  Box,
  Button,
  Center,
  Flex,
  Grid,
  GridItem,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { matkulfrs } from "./DataFRS";
import { TableBasic } from "@/components/organisms/TableBasic";
import { InfiniteQuery, TableLoadMoreConf } from "@/utils/table";
import { useState } from "react";
import { TableInfinite } from "@/components/organisms/TableInfinite";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import kolomTabelRiwayatKelas from "./TableRiwayatKelas";
import dataRiwayatKelas from "./DataRiwayatKelas";
import { DangerClearButton } from "@/components/atoms/Buttons/DangerButton";
import {
  CloseOutlineIconMade,
  RefreshOutlineIconMade,
  TrashOutlineIconMade,
} from "@/components/atoms/IconsMade";
import { WarningClearButton } from "@/components/atoms/Buttons/WarningButton";
import { IoCheckmarkCircle } from "react-icons/io5";

const CardRiwayatKelas = () => {
  const colorborder = useColorModeValue("gray.100", "gray.800");
  const { colorMode } = useColorMode();

  const [globalFilter, setGlobalFilter] = useState("");
  const URL = "/api/riwayatkelas";
  const infiniteData = InfiniteQuery(URL, "riwayatkelas");
  const realInfiniteData = useQuery({
    queryKey: ["riwayat-kelas"],
    queryFn: async () => {
      const res = await axios
        .get(URL)
        .then((res) => res.data)
        .catch((err) => err);
      return res;
    },
  });

  console.log(realInfiniteData);
  const table = TableLoadMoreConf(
    infiniteData.flatData,
    kolomTabelRiwayatKelas,
    globalFilter,
    setGlobalFilter
  );
  return (
    <>
      <PlainCard>
        <Box
          display={{ base: "block", a: "flex" }}
          justifyContent="space-between"
          alignItems="center"
          mb="24px"
        >
          <Box>
            <Text fontSize="18px" fontWeight="600" mb="4px">
              Pengambilan Kelas
            </Text>
            <Text fontSize="16px" fontWeight="500" color="gray">
              Riwayat pengambilan kelas Anda
            </Text>
          </Box>
          <Box mt={{ base: "24px", a: "0px" }}>
            <PrimaryButton>Tambah Mata Kuliah</PrimaryButton>
          </Box>
        </Box>

        <Box display={{ base: "block", a: "none" }} mt="36px">
          {dataRiwayatKelas.map((item, index) => (
            <Box
              key={index}
              mt="36px"
              pt="36px"
              borderTop="2px"
              borderColor={colorborder}
            >
              <Box mb="20px">
                {item.status === 2 ? (
                  <Badge
                    colorScheme="green"
                    variant="subtle"
                    borderRadius="full"
                    p="6px 12px"
                    fontSize="13px"
                    fontWeight="600"
                    textTransform="capitalize"
                  >
                    Berhasil diambil
                  </Badge>
                ) : item.status === 3 ? (
                  <Badge
                    colorScheme="red"
                    variant="subtle"
                    borderRadius="full"
                    p="6px 12px"
                    fontSize="13px"
                    fontWeight="600"
                    textTransform="capitalize"
                  >
                    Kelas penuh
                  </Badge>
                ) : item.status === 4 ? (
                  <Badge
                    colorScheme="red"
                    variant="subtle"
                    borderRadius="full"
                    p="6px 12px"
                    fontSize="13px"
                    fontWeight="600"
                    textTransform="capitalize"
                  >
                    Dibatalkan
                  </Badge>
                ) : null}
              </Box>
              <Box>
                <Text fontSize="18px" fontWeight={600}>
                  {item.mk} ({item.kelas})
                </Text>
                {/* <Text fontSize="14px" fontWeight="500" mt="4px">
                  {item.Kode} • {item.SKS} SKS • Semester 3 (saat ini)
                  {item.AlihKredit === "Ya" ? "• Alih kredit" : null}
                </Text> */}
                <Text fontSize="15px" fontWeight="500" mt="4px">
                  x SKS • Semester 3 (saat ini)
                </Text>
                {/* <Text fontSize="14px" fontWeight="500" color="gray" mt="4px">
                {item.NamaDosen}
              </Text> */}
              </Box>
              <Grid templateColumns="repeat(2, 1fr)">
                <GridItem w="full" mt="16px">
                  <Text fontSize="14px" fontWeight="500" color="gray">
                    Diambil
                  </Text>
                  <Text fontSize="14px" fontWeight="500" mt="2px">
                    {item.jam_ambil} {item.tgl_ambil}
                  </Text>
                  <Text fontSize="14px" fontWeight="600" mt="2px">
                    {item.pengambil}
                  </Text>
                </GridItem>
                <GridItem w="full" mt="16px">
                  <Text fontSize="14px" fontWeight="500" color="gray">
                    Diproses
                  </Text>
                  {
                    item.status === 1 ?
                    <Text fontSize="14px" fontWeight="500" mt="2px">
                      -
                    </Text>
                    :
                    <Text fontSize="14px" fontWeight="500" mt="2px">
                      {item.jam_proses} {item.tgl_proses}
                    </Text>
                  }
                </GridItem>
              </Grid>
              {item.kelas === "D" ? (
                <Text
                  fontSize="14px"
                  fontWeight="500"
                  color={colorMode == "light" ? "orange" : "orange.200"}
                  mt="24px"
                >
                  Pengambilan kelas melanggar prasyarat
                </Text>
              ) : null}
              {item.status === 1 ? (
                <Box>
                  <Center mt="36px" w="full">
                    <WarningClearButton>
                      <RefreshOutlineIconMade fontSize="20px" mr="6px" />
                      Ulangi
                    </WarningClearButton>
                  </Center>
                  <Center mt="16px" w="full">
                    <DangerClearButton>
                      <CloseOutlineIconMade fontSize="20px" mr="6px" />
                      Batalkan
                    </DangerClearButton>
                  </Center>
                </Box>
              ) : null}
            </Box>
          ))}
        </Box>

        {/* <TableContainer display={{ base: "none", a: "block" }}> */}
        <TableContainer>
          <TableBasic
            table={table}
            infiniteData={infiniteData}
            select={false}
          />
        </TableContainer>
      </PlainCard>
    </>
  );
};

export default CardRiwayatKelas;

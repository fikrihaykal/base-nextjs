import { PrimaryButton } from "@/components/atoms/Buttons/PrimaryButton";
import PlainCard from "@/components/organisms/Cards/Card";
import {
  Box,
  Button,
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
import { kolomTabelRiwayatKelas } from "./DataRiwayatKelas";

const CardRiwayatKelas = () => {
  const colorborder = useColorModeValue("gray.100", "gray.800");

  const [globalFilter, setGlobalFilter] = useState("");
  const URL = "/api/riwayatkelas";
  const infiniteData = InfiniteQuery(URL, "riwayatkelas");
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
          <Box mt={{ base: "16px", a: "0px" }}>
            <PrimaryButton>Tambah Mata Kuliah</PrimaryButton>
          </Box>
        </Box>
        
        <TableContainer>
          <TableBasic table={table} infiniteData={infiniteData} select={true}/>
        </TableContainer>
      </PlainCard>
    </>
  );
};

export default CardRiwayatKelas;

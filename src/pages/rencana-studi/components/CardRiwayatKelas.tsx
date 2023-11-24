import {
  PrimaryButton,
  PrimarySubtleButton,
} from "@/components/atoms/Buttons/PrimaryButton";
import PlainCard from "@/components/organisms/Cards/Card";
import {
  Badge,
  Box,
  Center,
  Grid,
  GridItem,
  TableContainer,
  Text,
  useColorMode,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { DangerSubtleButton } from "@/components/atoms/Buttons/DangerButton";
import {
  CloseOutlineIconMade,
  RefreshOutlineIconMade,
} from "@/components/atoms/IconsMade";
import { ButtonAmbilKelas, ModalAmbilKelas } from "./Modal/ModalAmbilKelas";
import { useState } from "react";
import { InfiniteQuery, TableLoadMoreConf } from "@/utils/table";
import { dataRiwayatKelas, kolomTabelRiwayatKelas } from "@/data/table";
import { TableWrapper } from "@/components/molecules/Table";
import { TableInfinite } from "@/components/organisms/TableInfinite";

const CardRiwayatKelas = () => {
  const {
    isOpen: isOpenAmbilKelas,
    onOpen: onOpenAmbilKelas,
    onClose: onCloseAmbilKelas,
  } = useDisclosure();
  const inputgray = useColorModeValue("gray.50", "gray.800");
  const { colorMode } = useColorMode();

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
          gap={6}
          mb="24px"
        >
          <Box>
            <Text fontSize="20px" fontWeight="600">
              Pengambilan Kelas
            </Text>
            <Text fontSize="16px" fontWeight="500" color="gray" mt="4px">
              Riwayat pengambilan kelas Anda
            </Text>
          </Box>
          <Center mt={{ base: "24px", a: "0px" }}>
            <ButtonAmbilKelas onClick={onOpenAmbilKelas} />
          </Center>
        </Box>

        {/* Tampilan tabel desktop */}
        <TableWrapper w="100%" p="unset" display={{ base: "none", a: "block" }}>
          <TableContainer
            sx={{
              "::-webkit-scrollbar-thumb": {
                backgroundColor: colorMode == "light" ? "gray.200" : "gray.800",
              },
              scrollbarWidth: "thin",
              scrollbarColor: "silver transparent;",
            }}
          >
            <TableInfinite table={table} infiniteData={infiniteData} />
          </TableContainer>
        </TableWrapper>

        {/* Tampilan daftar mobile */}
        <Box display={{ base: "block", a: "none" }} mt="36px">
          {dataRiwayatKelas.map((item, index) => (
            <Box
              key={index}
              mt="36px"
              pt="36px"
              borderTop="2px"
              borderColor={inputgray}
            >
              <Box>
                <Text fontSize="16px" fontWeight={600}>
                  {item.mk} ({item.kelas})
                </Text>
                <Text fontSize="14px" fontWeight="500" mt="4px">
                  IF23212 • 3 SKS • Semester 3 (saat ini)
                </Text>
              </Box>
              {item.kelas === "D" ? (
                <Text
                  fontSize="14px"
                  fontWeight="500"
                  color={colorMode == "light" ? "orange" : "orange.200"}
                  mt="6px"
                >
                  Pengambilan kelas melanggar prasyarat
                </Text>
              ) : null}
              <Grid templateColumns="repeat(12, 1fr)" gap={3} mt="24px">
                <GridItem w="100%" colSpan={3}>
                  <Text fontSize="14px" fontWeight="500" color="gray">
                    Diambil
                  </Text>
                </GridItem>
                <GridItem w="100%" colSpan={9}>
                  <Text fontSize="14px" fontWeight="500">
                    {item.tgl_ambil} • {item.jam_ambil}
                  </Text>
                  <Text fontSize="14px" fontWeight="500" mt="2px">
                    oleh {item.pengambil}
                  </Text>
                </GridItem>
                <GridItem w="100%" colSpan={3}>
                  <Text fontSize="14px" fontWeight="500" color="gray">
                    Diproses
                  </Text>
                </GridItem>
                <GridItem w="100%" colSpan={9}>
                  {item.status === 1 ? (
                    <Text fontSize="14px" fontWeight="500" color="gray">
                      Sedang diproses
                    </Text>
                  ) : (
                    <Text fontSize="14px" fontWeight="500">
                      {item.jam_proses} • {item.tgl_proses}
                    </Text>
                  )}
                </GridItem>
                {item.status === 1 ? null : (
                  <GridItem
                    w="100%"
                    colSpan={3}
                    display="flex"
                    alignItems="center"
                  >
                    <Text fontSize="14px" fontWeight="500" color="gray">
                      Status
                    </Text>
                  </GridItem>
                )}
                {item.status === 1 ? null : (
                  <GridItem w="100%" colSpan={9}>
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
                    ) : (
                      <Badge
                        colorScheme="yellow"
                        variant="subtle"
                        borderRadius="full"
                        p="6px 12px"
                        fontSize="13px"
                        fontWeight="600"
                        textTransform="capitalize"
                      >
                        Terjadi kesalahan
                      </Badge>
                    )}
                  </GridItem>
                )}
              </Grid>
              {item.status === 1 ? (
                <Box>
                  <Center mt="36px" w="full">
                    <PrimarySubtleButton isLoading={false}>
                      <RefreshOutlineIconMade fontSize="20px" mr="6px" />
                      Ulangi
                    </PrimarySubtleButton>
                  </Center>
                  <Center mt="16px" w="full">
                    <DangerSubtleButton isLoading={false}>
                      <CloseOutlineIconMade fontSize="20px" mr="6px" />
                      Batalkan
                    </DangerSubtleButton>
                  </Center>
                </Box>
              ) : null}
            </Box>
          ))}
        </Box>
      </PlainCard>

      {/* Modal */}
      <ModalAmbilKelas isOpen={isOpenAmbilKelas} onClose={onCloseAmbilKelas} />
    </>
  );
};

export default CardRiwayatKelas;

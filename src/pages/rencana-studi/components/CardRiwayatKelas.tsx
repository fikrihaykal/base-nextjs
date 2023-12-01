import {
  PrimaryButton,
  PrimarySubtleButton,
} from "@/components/customs/Buttons/PrimaryButton";
import PlainCard from "@/components/organisms/Cards/Card";
import {
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
import {
  AlertCircleSolidIconMade,
  CheckmarkCircleSolidIconMade,
  CloseCircleSolidIconMade,
  MinusCircleSolidIconMade,
  TrashCircleSolidIconMade,
} from "@/components/atoms/IconsMade";
import { ButtonAmbilKelas, ModalAmbilKelas } from "./Modal/ModalAmbilKelas";
import { useState } from "react";
import { InfiniteQuery, TableLoadMoreConf } from "@/utils/table";
import { dataRiwayatKelas, kolomTabelRiwayatKelas } from "@/data/table";
import { TableWrapper } from "@/components/molecules/Table";
import { TableInfinite } from "@/components/organisms/TableInfinite";
import { DaliOutlineButton } from "@/components/customs/Buttons/DaliButton";
import { SuccessTextBadge } from "@/components/customs/BadgeStatus/SuccessBadge";
import { DangerTextBadge } from "@/components/customs/BadgeStatus/DangerBadge";
import { WarningTextBadge } from "@/components/customs/BadgeStatus/WarningBadge";

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
            <TableInfinite
              table={table}
              infiniteData={infiniteData}
              noDataTitle="Belum ada riwayat"
              noDataSubtitle="Anda belum melakukan pengambilan kelas"
              noDataDescription=""
            />
          </TableContainer>
        </TableWrapper>

        {/* Tampilan daftar mobile */}
        <Box display={{ base: "block", a: "none" }} mt="36px">
          {dataRiwayatKelas.map((item, index) => (
            <Box
              key={index}
              mt="36px"
              pt="36px"
              borderTop="1px solid"
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
                  color={colorMode == "light" ? "yellow.500" : "#E3AD1D"}
                  mt="6px"
                >
                  Pengambilan mata kuliah melanggar prasyarat
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
                      <SuccessTextBadge>
                        <CheckmarkCircleSolidIconMade fontSize="16px" />
                        <Text>Berhasil diambil</Text>
                      </SuccessTextBadge>
                    ) : item.status === 3 ? (
                      <DangerTextBadge>
                        <MinusCircleSolidIconMade fontSize="16px" />
                        <Text>Kelas penuh</Text>
                      </DangerTextBadge>
                    ) : item.status === 4 ? (
                      <DangerTextBadge>
                        <CloseCircleSolidIconMade fontSize="16px" />
                        <Text>Dibatalkan</Text>
                      </DangerTextBadge>
                    ) : item.status === 5 ? (
                      <DangerTextBadge>
                        <TrashCircleSolidIconMade fontSize="16px" />
                        <Text>Dihapus</Text>
                      </DangerTextBadge>
                    ) : (
                      <WarningTextBadge>
                        <AlertCircleSolidIconMade fontSize="16px" />
                        <Text>Ada kesalahan</Text>
                      </WarningTextBadge>
                    )}
                  </GridItem>
                )}
              </Grid>
              {item.status === 1 ? (
                <Box>
                  <Center mt="36px" w="full">
                    <DaliOutlineButton isLoading={false}>
                      Ulangi
                    </DaliOutlineButton>
                  </Center>
                  <Center mt="16px" w="full">
                    <DaliOutlineButton
                      isLoading={false}
                      color={colorMode == "light" ? "red.500" : "#B53F3F"}
                    >
                      Batalkan
                    </DaliOutlineButton>
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

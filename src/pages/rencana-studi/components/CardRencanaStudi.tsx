import PlainCard from "@/components/organisms/Cards/Card";
import {
  Box,
  Center,
  Flex,
  Grid,
  GridItem,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  TableContainer,
  Text,
  useColorMode,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import {
  DangerButton,
  DangerSubtleButton,
} from "@/components/customs/Buttons/DangerButton";
import {
  AlertOutlineIconMade,
  AlertSolidIconMade,
  CheckmarkOutlineIconMade,
  TrashOutlineIconMade,
} from "@/components/atoms/IconsMade";
import { TextButton } from "@/components/customs/Buttons/TextButton";
import { useState } from "react";
import { InfiniteQuery, TableLoadMoreConf } from "@/utils/table";
import { dataRencanaStudi, kolomTabelRencanaStudi } from "@/data/table";
import { TableWrapper } from "@/components/molecules/Table";
import { TableBasic } from "@/components/organisms/TableBasic";
import ModalContext from "@/providers/ModalProvider";
import { useContext } from "react";
import {
  DaliGhostButton,
  DaliOutlineButton,
} from "@/components/customs/Buttons/DaliButton";
import CleanPlainCard from "@/components/customs/Card";
const CardRencanaStudi = () => {
  const colorborder = useColorModeValue("gray.100", "gray.800");
  const { colorMode } = useColorMode();
  const {
    isOpen: isOpenHapusKelas,
    onOpen: onOpenHapusKelas,
    onClose: onCloseHapusKelas,
  } = useDisclosure();

  const [globalFilter, setGlobalFilter] = useState("");
  const URL = "/api/rencanastudi";
  const infiniteData = InfiniteQuery(URL, "rencanastudi");
  const table = TableLoadMoreConf(
    infiniteData.flatData,
    kolomTabelRencanaStudi,
    globalFilter,
    setGlobalFilter
  );

  const { isModalActive, setIsModalActive } = useContext(ModalContext);

  const closeModalHapus = async () => {
    setIsModalActive(false);
  };

  return (
    <>
      <PlainCard p="0px" bg="unset">

        {/* Status disetujui */}
        <CleanPlainCard
          bgGradient={
            colorMode === "light"
              ? "linear(to-tr, green.50, green.100)"
              : "linear(to-tr, green.900, green.950)"
          }
          pt="24px"
          pb="70px"
          mb="-48px"
        >
          <Flex alignItems="center" gap={3}>
            <Box w="36px" h="36px">
              <Center
                w="36px"
                h="36px"
                bgGradient="linear(to-tr, green.500, green.400)"
                borderRadius="full"
              >
                <CheckmarkOutlineIconMade
                  fontSize="20px"
                  color={colorMode === "light" ? "white" : "gray.800"}
                />
              </Center>
            </Box>
            <Box>
              <Text fontSize="15px" fontWeight="500">
                Disetujui oleh{" "}
                <Box as="span" fontWeight="600">
                  Bambang Pramudjati
                </Box>{" "}
                pada 13 Agustus 1945
              </Text>
            </Box>
          </Flex>
        </CleanPlainCard>
        
        {/* Status belum disetujui */}
        {/* <CleanPlainCard
          bgGradient={
            colorMode === "light"
              ? "linear(to-tr, yellow.50, yellow.100)"
              : "linear(to-tr, yellow.900, yellow.950)"
          }
          pt="24px"
          pb="70px"
          mb="-48px"
        >
          <Flex alignItems="center" gap={3}>
            <Box w="36px" h="36px">
              <Center
                w="36px"
                h="36px"
                bgGradient="linear(to-tr, yellow.500, yellow.400)"
                borderRadius="full"
              >
                <AlertOutlineIconMade
                  fontSize="20px"
                  color={colorMode === "light" ? "white" : "gray.800"}
                />
              </Center>
            </Box>
            <Box>
              <Text fontSize="15px" fontWeight="500">
                Belum disetujui dosen wali
              </Text>
            </Box>
          </Flex>
        </CleanPlainCard> */}

        <CleanPlainCard>
          <Box
            display={{ base: "block", a: "flex" }}
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Text fontSize="20px" fontWeight="600">
                Rencana Studi
              </Text>
              <Text fontSize="16px" fontWeight="500" color="gray" mt="4px">
                Kelas yang berhasil Anda ambil
              </Text>
            </Box>
          </Box>

          {/* Tampilan tabel desktop */}
          <TableWrapper
            w="100%"
            p="unset"
            display={{ base: "none", a: "block" }}
          >
            <TableContainer
              sx={{
                "::-webkit-scrollbar-thumb": {
                  backgroundColor:
                    colorMode == "light" ? "gray.200" : "gray.800",
                },
                scrollbarWidth: "thin",
                scrollbarColor: "silver transparent;",
              }}
            >
              <TableBasic
                table={table}
                infiniteData={infiniteData}
                noDataTitle="Belum ada rencana studi"
                noDataSubtitle="Ambil kelas Anda sekarang"
                noDataDescription=""
              />
            </TableContainer>
          </TableWrapper>

          {/* Tampilan daftar mobile */}
          <Box display={{ base: "block", a: "none" }} mt="36px">
            {dataRencanaStudi.map((item, index) => (
              <Box
                key={index}
                mt="36px"
                pt="36px"
                borderTop="1px solid"
                borderColor={colorborder}
              >
                <Box>
                  <Text fontSize="16px" fontWeight={600}>
                    {item.mk} ({item.kelas})
                  </Text>
                  <Text fontSize="14px" fontWeight="500" mt="4px">
                    IF23212 • {item.sks} SKS • Semester 3 (saat ini){" "}
                    {item.alih_kredit === 1 ? " • Alih kredit" : null}
                  </Text>
                </Box>
                {item.kelas === "C" ? (
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
                      Jadwal
                    </Text>
                  </GridItem>
                  <GridItem w="100%" colSpan={9}>
                    <Text fontSize="14px" fontWeight="500">
                      Senin, 10.00-12.30
                    </Text>
                  </GridItem>
                  <GridItem w="100%" colSpan={3}>
                    <Text fontSize="14px" fontWeight="500" color="gray">
                      Dosen
                    </Text>
                  </GridItem>
                  <GridItem w="100%" colSpan={9}>
                    <Text fontSize="14px" fontWeight="500">
                      {item.dosen}
                    </Text>
                  </GridItem>
                </Grid>
                <Center w="full" mt="32px">
                  <DaliOutlineButton
                    onClick={() => setIsModalActive(true)}
                    isLoading={false}
                    color={colorMode == "light" ? "red.500" : "#B53F3F"}
                  >
                    Hapus Kelas
                  </DaliOutlineButton>
                </Center>
              </Box>
            ))}
          </Box>
        </CleanPlainCard>
      </PlainCard>

      <Modal
        isOpen={isModalActive}
        onClose={closeModalHapus}
        size="lg"
        isCentered
      >
        <ModalOverlay />
        <ModalContent
          borderRadius="16px"
          py="8px"
          m="16px 24px"
          bg={colorMode == "light" ? "white" : "gray.900"}
        >
          <ModalHeader
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            Hapus Kelas
          </ModalHeader>
          <ModalBody>
            <Text fontSize="15px" fontWeight="500" lineHeight="1.7">
              Apakah Anda yakin ingin menghapus kelas ini?
            </Text>
          </ModalBody>
          <ModalFooter
            display="flex"
            pt="24px"
            gap={2}
          >
            <Center w={{ base: "full", s: "auto" }}>
              <DaliGhostButton onClick={closeModalHapus}>
                Batalkan
              </DaliGhostButton>
            </Center>
            <Center w={{ base: "full", s: "auto" }}>
              <DangerButton type="submit" isLoading={false}>
                Hapus
              </DangerButton>
            </Center>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CardRencanaStudi;

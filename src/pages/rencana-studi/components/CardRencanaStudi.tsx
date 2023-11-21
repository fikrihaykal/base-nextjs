import PlainCard from "@/components/organisms/Cards/Card";
import {
  Badge,
  Box,
  Button,
  Center,
  Grid,
  GridItem,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tooltip,
  Tr,
  useColorMode,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import {
  DangerButton,
  DangerSubtleButton,
} from "@/components/atoms/Buttons/DangerButton";
import {
  CloseOutlineIconMade,
  TrashOutlineIconMade,
} from "@/components/atoms/IconsMade";
import { IoWarning } from "react-icons/io5";
import {
  SuccessButton,
  SuccessSubtleButton,
} from "@/components/atoms/Buttons/SuccessButton";
import { LightButton } from "@/components/atoms/Buttons/LightButton";
import CardPersetujuan from "./CardPersetujuan";
import { TextButton } from "@/components/atoms/Buttons/TextButton";
import { PrimaryButton } from "@/components/atoms/Buttons/PrimaryButton";
import { useState } from "react";
import { InfiniteQuery, TableLoadMoreConf } from "@/utils/table";
import { dataRencanaStudi, kolomTabelRencanaStudi } from "@/data/table";
import { TableWrapper } from "@/components/molecules/Table";
import { TableBasic } from "@/components/organisms/TableBasic";
import ModalContext from "@/providers/ModalProvider";
import { useContext } from "react";
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

  const {isModalActive, setIsModalActive} = useContext(ModalContext)

  const closeModalHapus = async () => {
    setIsModalActive(false)
  }

  return (
    <>
      <PlainCard>
        <Box
          display={{ base: "block", a: "flex" }}
          justifyContent="space-between"
          alignItems="center"
        >
          <Box>
            <Text fontSize="18px" fontWeight="600">
              Rencana Studi
            </Text>
            <Text fontSize="16px" fontWeight="500" color="gray" mt="4px">
              Kelas yang berhasil Anda ambil
            </Text>
          </Box>
        </Box>

        {/* Tampilan tabel desktop */}
        <TableWrapper w="100%" p="unset" display={{ base: "none", a: "block" }}>
          <TableContainer>
            <TableBasic table={table} infiniteData={infiniteData} />
          </TableContainer>
        </TableWrapper>

        {/* Tampilan daftar mobile */}
        <Box display={{ base: "block", a: "none" }} mt="36px">
          {dataRencanaStudi.map((item, index) => (
            <Box
              key={index}
              mt="36px"
              pt="36px"
              borderTop="2px"
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
                  color={colorMode == "light" ? "orange" : "orange.200"}
                  mt="6px"
                >
                  Pengambilan kelas melanggar prasyarat
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
                <DangerSubtleButton
                  onClick={onOpenHapusKelas}
                  isLoading={false}
                >
                  <TrashOutlineIconMade fontSize="20px" mr="6px" />
                  Hapus
                </DangerSubtleButton>
              </Center>
            </Box>
          ))}
        </Box>
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
          <ModalFooter>
            <Center>
              <TextButton onClick={closeModalHapus}>Kembali</TextButton>
            </Center>
            <Center>
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

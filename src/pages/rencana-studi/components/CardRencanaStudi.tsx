import PlainCard from "@/components/organisms/Cards/Card";
import { matkulfix } from "./DataFRS";
import {
  Box,
  Center,
  Grid,
  GridItem,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { DangerClearButton } from "@/components/atoms/Buttons/DangerButton";
import {
  CheckMarkOutlineIconMade,
  TrashOutlineIconMade,
} from "@/components/atoms/IconsMade";

const CardRencanaStudi = () => {
  const bgcard = useColorModeValue("white", "gray.900");
  const bgbutton = useColorModeValue("black", "white");
  const textbtn = useColorModeValue("white", "gray.900");
  const colorborder = useColorModeValue("gray.100", "gray.800");
  const colorred = useColorModeValue("red", "red.200");
  const { colorMode } = useColorMode();

  return (
    <>
      <PlainCard>
        <Text fontSize="18px" fontWeight="600" mb="4px">
          Rencana Studi
        </Text>
        <Text fontSize="16px" fontWeight="500" color="gray">
          Mata kuliah yang berhasil Anda ambil
        </Text>
        <Box display={{ base: "none", a: "block" }} overflowX="auto" mt="16px">
          <Grid
            templateColumns="repeat(12, 1fr)"
            gap={4}
            fontSize="14px"
            fontWeight="500"
            color="gray.400"
            letterSpacing="0px"
          >
            <GridItem w="100%" py="16px" textAlign="center">
              No
            </GridItem>
            <GridItem w="100%" py="16px" colSpan={3}>
              Mata Kuliah
            </GridItem>
            <GridItem w="100%" py="16px">
              Kelas
            </GridItem>
            <GridItem w="100%" py="16px">
              SKS
            </GridItem>
            <GridItem w="100%" py="16px">
              Alih Kredit
            </GridItem>
            <GridItem w="100%" py="16px" colSpan={2}>
              Nama Dosen
            </GridItem>
            <GridItem w="100%" py="16px" colSpan={3}></GridItem>
          </Grid>
          {matkulfix.map((item, index) => (
            <Grid
              templateColumns="repeat(12, 1fr)"
              gap={4}
              fontSize="14px"
              fontWeight="500"
              key={index}
              borderTop="2px"
              borderColor={colorMode == "light" ? "gray.100" : "gray.800"}
            >
              <GridItem w="100%" py="24px" textAlign="center">
                {index + 1}.
              </GridItem>
              <GridItem w="100%" py="24px" colSpan={3}>
                <Text fontSize="15px" fontWeight="600">
                  {item.Kode} - {item.MataKuliah}
                </Text>
                <Text fontSize="15px" fontWeight="500" color="gray" mt="2px">
                  Semester 3 (saat ini)
                </Text>
                {item.Kelas === "C" ? (
                  <Text
                    fontSize="14px"
                    fontWeight="500"
                    color={colorMode == "light" ? "orange" : "orange.200"}
                    mt="2px"
                  >
                    Pengambilan melanggar prasyarat
                  </Text>
                ) : null}
              </GridItem>
              <GridItem w="100%" py="24px">
                {item.Kelas}
              </GridItem>
              <GridItem w="100%" py="24px">
                {item.SKS}
              </GridItem>
              <GridItem w="100%" py="24px">
                {item.AlihKredit}
              </GridItem>
              <GridItem w="100%" py="24px" colSpan={2}>
                {item.NamaDosen}
              </GridItem>
              <GridItem w="100%" py="24px" colSpan={3} textAlign="center">
                {item.SKS === 3 ? (
                  <DangerClearButton>
                    <TrashOutlineIconMade fontSize="20px" mr="6px" />
                    Hapus
                  </DangerClearButton>
                ) : item.SKS === 2 ? (
                  <Box>
                    <DangerClearButton isDisabled>
                      <TrashOutlineIconMade fontSize="20px" mr="6px" />
                      Hapus
                    </DangerClearButton>
                    <Center
                      fontSize="13px"
                      fontWeight="500"
                      color="gray"
                      mt="8px"
                    >
                      Mata kuliah paket tidak dapat dihapus
                    </Center>
                  </Box>
                ) : null}
              </GridItem>
            </Grid>
          ))}
        </Box>
        <Box display={{ base: "block", a: "none" }} mt="36px">
          {matkulfix.map((item, index) => (
            <Box
              key={index}
              mt="36px"
              pt="36px"
              borderTop="2px"
              borderColor={colorborder}
              _first={{
                mt: "0px",
                pt: "0px",
                borderTop: "0px",
              }}
            >
              <Box>
                <Text fontSize="16px" fontWeight={600}>
                  {item.MataKuliah} ({item.Kelas})
                </Text>
                <Text fontSize="14px" fontWeight="500" mt="4px">
                  {item.Kode} • {item.SKS} SKS • Semester 3 (saat ini){" "}
                  {item.AlihKredit === "Ya" ? "• Alih kredit" : null}
                </Text>
                <Text fontSize="14px" fontWeight="500" color="gray" mt="4px">
                  {item.NamaDosen}
                </Text>
              </Box>
              {item.Kelas === "C" ? (
                <Text
                  fontSize="14px"
                  fontWeight="500"
                  color={colorMode == "light" ? "orange" : "orange.200"}
                  mt="6px"
                >
                  Pengambilan melanggar prasyarat
                </Text>
              ) : null}
              <Box>
                {item.SKS === 3 ? (
                  <Center mt="24px" w="full">
                    <DangerClearButton>
                      <TrashOutlineIconMade fontSize="20px" mr="6px" />
                      Hapus
                    </DangerClearButton>
                  </Center>
                ) : item.SKS === 2 ? (
                  <Box>
                    <Center mt="24px" w="full">
                      <DangerClearButton isDisabled>
                        <TrashOutlineIconMade fontSize="20px" mr="6px" />
                        Hapus
                      </DangerClearButton>
                    </Center>
                    <Center
                      fontSize="13px"
                      fontWeight="500"
                      color="gray"
                      mt="8px"
                    >
                      Mata kuliah paket tidak dapat dihapus
                    </Center>
                  </Box>
                ) : null}
              </Box>
            </Box>
          ))}
        </Box>
      </PlainCard>
    </>
  );
};

export default CardRencanaStudi;

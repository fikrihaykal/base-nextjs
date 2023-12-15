import PlainCard from "@/components/organisms/Cards/Card";
import {
  Box,
  Center,
  Flex,
  Grid,
  GridItem,
  Menu,
  MenuButton,
  MenuList,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
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
  AlertTriangleSolidIconMade,
  CheckmarkOutlineIconMade,
  ChevronDownOutlineIconMade,
  ChevronUpOutlineIconMade,
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
  DaliSubtleButton,
} from "@/components/customs/Buttons/DaliButton";
import CleanPlainCard from "@/components/customs/Card";
import { SuccessButton } from "@/components/customs/Buttons/SuccessButton";
import {
  WarningButton,
  WarningSubtleButton,
} from "@/components/customs/Buttons/WarningButton";
import { PrimaryTextBadge } from "@/components/customs/BadgeStatus/PrimaryBadge";
import { WarningTextBadge } from "@/components/customs/BadgeStatus/WarningBadge";
import {
  ModalBatalPersetujuan,
  ModalPersetujuan,
} from "./Modal/ModalPersetujuan";
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

  const closeModalDropKelas = async () => {
    setIsModalActive(false);
  };

  const {
    isOpen: isOpenPersetujuan,
    onOpen: onOpenPersetujuan,
    onClose: onClosePersetujuan,
  } = useDisclosure();
  const {
    isOpen: isOpenBatalPersetujuan,
    onOpen: onOpenBatalPersetujuan,
    onClose: onCloseBatalPersetujuan,
  } = useDisclosure();

  return (
    <>
      <PlainCard p="0px" bg="unset">
        {/* Status disetujui role Mahasiswa */}
        {/* <CleanPlainCard
          bgGradient={
            colorMode === "light"
              ? "linear(to-tr, green.50, green.100)"
              : "linear(to-tr, green.900, green.800)"
          }
          pt="24px"
          pb="72px"
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
                  Bintang Nuralamsyah, S.Kom. M.Kom.
                </Box>{" "}
                pada 13 Agustus 1945 pukul 19.45
              </Text>
            </Box>
          </Flex>
        </CleanPlainCard> */}

        {/* Status belum disetujui role Mahasiswa */}
        {/* <CleanPlainCard
          bgGradient={
            colorMode === "light"
              ? "linear(to-tr, yellow.50, yellow.100)"
              : "linear(to-tr, yellow.900, yellow.800)"
          }
          pt="24px"
          pb="72px"
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

        {/* Status disetujui role Dosen */}
        {/* <CleanPlainCard
          bgGradient={
            colorMode === "light"
              ? "linear(to-tr, green.50, green.100)"
              : "linear(to-tr, green.900, green.800)"
          }
          pt="24px"
          pb="72px"
          mb="-48px"
        >
          <Box
            display={{ base: "block", a: "flex" }}
            justifyContent="space-between"
            alignItems="center"
            gap={6}
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
                    Anda
                  </Box>{" "}
                  pada 13 Agustus 1945 pukul 19.45
                </Text>
              </Box>
            </Flex>
            <Center mt={{ base: "24px", a: "0px" }}>
              <DaliOutlineButton onClick={onOpenBatalPersetujuan} borderColor={colorMode === "light" ? "white" : "gray.700"} isLoading={false}>Batalkan</DaliOutlineButton>
            </Center>
          </Box>
        </CleanPlainCard> */}

        {/* Status belum disetujui role Dosen */}
        <CleanPlainCard
          bgGradient={
            colorMode === "light"
              ? "linear(to-tr, yellow.50, yellow.100)"
              : "linear(to-tr, yellow.900, yellow.800)"
          }
          pt="24px"
          pb="72px"
          mb="-48px"
        >
          <Box
            display={{ base: "block", a: "flex" }}
            justifyContent="space-between"
            alignItems="center"
            gap={6}
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
                  Rencana studi ini menunggu persetujuan Anda
                </Text>
              </Box>
            </Flex>
            <Center mt={{ base: "24px", a: "0px" }}>
              <SuccessButton isLoading={false} onClick={onOpenPersetujuan}>
                Setuju
              </SuccessButton>
            </Center>
          </Box>
        </CleanPlainCard>

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
                  {item.kelas === "E" ? (
                    <PrimaryTextBadge mb="6px">
                      Mata kuliah paket
                    </PrimaryTextBadge>
                  ) : null}
                  <Text fontSize="16px" fontWeight={600}>
                    {item.mk} ({item.kelas})
                  </Text>
                  <Text fontSize="14px" fontWeight="500" mt="4px">
                    IF23212 • {item.sks} SKS • Semester 3 (saat ini){" "}
                    {item.alih_kredit === 1 ? " • Alih kredit" : null}
                  </Text>
                </Box>
                {item.kelas === "B" ? (
                  <WarningTextBadge mt="6px">
                    <AlertTriangleSolidIconMade fontSize="16px" />
                    <Text>Pengambilan mata kuliah melanggar prasyarat</Text>
                  </WarningTextBadge>
                ) : null}
                <Grid templateColumns="repeat(12, 1fr)" gap={3} mt="24px">
                  <GridItem w="100%" colSpan={3}>
                    <Text fontSize="14px" fontWeight="500" color="gray">
                      Jadwal
                    </Text>
                  </GridItem>
                  <GridItem w="100%" colSpan={9}>
                    {item.kelas === "C" ? (
                      <Menu>
                        {({ isOpen }) => (
                          <>
                            <MenuButton
                              cursor="pointer"
                              color={
                                colorMode == "light" ? "blue.500" : "#007FEB"
                              }
                            >
                              <Box display="flex" alignItems="center" gap={2}>
                                <Text fontSize="14px" fontWeight={600}>
                                  2 jadwal
                                </Text>

                                <ChevronDownOutlineIconMade
                                  fontSize="16px"
                                  mt={!isOpen ? "2px" : "0px"}
                                  transition="transform 0.3s ease"
                                  transform={
                                    !isOpen ? "rotate(0deg)" : "rotate(-180deg)"
                                  }
                                />
                              </Box>
                            </MenuButton>
                            <MenuList
                              border={
                                colorMode == "light"
                                  ? "1px solid #e4e4e4"
                                  : "1px solid #333333"
                              }
                              fontSize="14px"
                              boxShadow={
                                colorMode == "light"
                                  ? "0 4px 16px rgba(227, 230, 236, 0.4)"
                                  : "0 4px 24px rgba(0, 0, 0, 0.15)"
                              }
                              p="24px"
                              borderRadius="24px"
                              defaultChecked={false}
                              bg={colorMode == "light" ? "#fff" : "#222222"}
                            >
                              <Text fontWeight={600}>
                                Jadwal pada kelas ini
                              </Text>
                              <Box
                                mt="16px"
                                pt="16px"
                                borderTop="1px solid"
                                borderTopColor={
                                  colorMode == "light" ? "gray.100" : "gray.800"
                                }
                              >
                                <Text>Senin</Text>
                                <Box
                                  className="file__subtitle"
                                  fontSize="13px"
                                  lineHeight="1.38462"
                                  fontWeight={500}
                                  color="gray"
                                  mt="4px"
                                >
                                  18.00-20.00
                                </Box>
                              </Box>
                              <Box
                                mt="16px"
                                pt="16px"
                                borderTop="1px solid"
                                borderTopColor={
                                  colorMode == "light" ? "gray.100" : "gray.800"
                                }
                              >
                                <Text>Selasa</Text>
                                <Box
                                  className="file__subtitle"
                                  fontSize="13px"
                                  lineHeight="1.38462"
                                  fontWeight={500}
                                  color="gray"
                                  mt="4px"
                                >
                                  18.00-20.00
                                </Box>
                              </Box>
                            </MenuList>
                          </>
                        )}
                      </Menu>
                    ) : (
                      <Text fontSize="14px" fontWeight="500">
                        Senin, 10.00-12.30
                      </Text>
                    )}
                  </GridItem>
                  <GridItem w="100%" colSpan={3}>
                    <Text fontSize="14px" fontWeight="500" color="gray">
                      Dosen
                    </Text>
                  </GridItem>
                  <GridItem w="100%" colSpan={9}>
                    {item.kelas === "C" ? (
                      <Menu>
                        {({ isOpen }) => (
                          <>
                            <MenuButton
                              cursor="pointer"
                              color={
                                colorMode == "light" ? "blue.500" : "#007FEB"
                              }
                            >
                              <Box display="flex" alignItems="center" gap={2}>
                                <Text fontSize="14px" fontWeight={600}>
                                  2 dosen
                                </Text>

                                <ChevronDownOutlineIconMade
                                  fontSize="16px"
                                  mt={!isOpen ? "2px" : "0px"}
                                  transition="transform 0.3s ease"
                                  transform={
                                    !isOpen ? "rotate(0deg)" : "rotate(-180deg)"
                                  }
                                />
                              </Box>
                            </MenuButton>
                            <MenuList
                              border={
                                colorMode == "light"
                                  ? "1px solid #e4e4e4"
                                  : "1px solid #333333"
                              }
                              fontSize="14px"
                              boxShadow={
                                colorMode == "light"
                                  ? "0 4px 16px rgba(227, 230, 236, 0.4)"
                                  : "0 4px 24px rgba(0, 0, 0, 0.15)"
                              }
                              p="24px"
                              borderRadius="24px"
                              defaultChecked={false}
                              bg={colorMode == "light" ? "#fff" : "#222222"}
                            >
                              <Text fontWeight={600}>Dosen pada kelas ini</Text>
                              <Box
                                mt="16px"
                                pt="16px"
                                borderTop="1px solid"
                                borderTopColor={
                                  colorMode == "light" ? "gray.100" : "gray.800"
                                }
                              >
                                <Text>{item.dosen}</Text>
                              </Box>
                              <Box
                                mt="16px"
                                pt="16px"
                                borderTop="1px solid"
                                borderTopColor={
                                  colorMode == "light" ? "gray.100" : "gray.800"
                                }
                              >
                                <Text>{item.dosen}</Text>
                              </Box>
                            </MenuList>
                          </>
                        )}
                      </Menu>
                    ) : (
                      <Text fontSize="14px" fontWeight="500">
                        {item.dosen}
                      </Text>
                    )}
                  </GridItem>
                </Grid>
                {item.kelas === "E" ? (
                  <Box>
                    <Center w="full" mt="32px">
                      <DaliOutlineButton
                        onClick={() => setIsModalActive(true)}
                        isLoading={false}
                        color={colorMode == "light" ? "red.500" : "#B53F3F"}
                        isDisabled
                      >
                        Drop Kelas
                      </DaliOutlineButton>
                    </Center>
                    <Text
                      fontSize="14px"
                      color="gray"
                      textAlign="center"
                      mt="8px"
                    >
                      Mata kulah paket tidak bisa didrop
                    </Text>
                  </Box>
                ) : (
                  <Center w="full" mt="32px">
                    <DaliOutlineButton
                      onClick={() => setIsModalActive(true)}
                      isLoading={false}
                      color={colorMode == "light" ? "red.500" : "#B53F3F"}
                    >
                      Drop Kelas
                    </DaliOutlineButton>
                  </Center>
                )}
              </Box>
            ))}
          </Box>
        </CleanPlainCard>
      </PlainCard>

      <Modal
        isOpen={isModalActive}
        onClose={closeModalDropKelas}
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
            Drop Kelas
          </ModalHeader>
          <ModalBody>
            <Text fontSize="15px" fontWeight="500" lineHeight="1.7">
              Apakah Anda yakin ingin mengedrop kelas ini?
            </Text>
          </ModalBody>
          <ModalFooter display="flex" pt="24px" gap={2}>
            <Center w={{ base: "full", s: "auto" }}>
              <DaliGhostButton onClick={closeModalDropKelas}>
                Batalkan
              </DaliGhostButton>
            </Center>
            <Center w={{ base: "full", s: "auto" }}>
              <DangerButton type="submit" isLoading={false}>
                Drop
              </DangerButton>
            </Center>
          </ModalFooter>
        </ModalContent>
      </Modal>

      {/* Modal */}
      <ModalPersetujuan
        isOpen={isOpenPersetujuan}
        onClose={onClosePersetujuan}
      />
      <ModalBatalPersetujuan
        isOpen={isOpenBatalPersetujuan}
        onClose={onCloseBatalPersetujuan}
      />
    </>
  );
};

export default CardRencanaStudi;

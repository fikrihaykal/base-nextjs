import { PrimaryButton } from "@/components/atoms/Buttons/PrimaryButton";
import { SecondaryButton } from "@/components/atoms/Buttons/SecondaryButton";
import { MyITSLogo } from "@/components/atoms/IconsMade";
import { MotionBox } from "@/components/motion/Motion";
import { ModalSheet } from "@/components/organisms/Modal";
import AppSettingContext from "@/providers/AppSettingProvider";
import { useLocalStorage } from "@/utils/use_local_storage";
import {
  Box,
  BoxProps,
  Center,
  Collapse,
  Flex,
  Link,
  Text,
  useColorMode,
  useDisclosure
} from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
interface PanduanInterface extends BoxProps {
  title: string;
  subtitle: string;
  icon?: string;
  cardProps?: BoxProps;
}

const Panduan = ({ title, subtitle, icon, cardProps }: PanduanInterface) => {
  const { cardWidth } = useContext(AppSettingContext);
  const { colorMode } = useColorMode();

  const panduanSheetDc = useDisclosure();
  const { isOpen: isPresensiOpen, onToggle: onPresensiToggle } =
    useDisclosure();
  const { isOpen: isAKOpen, onToggle: onAKToggle } = useDisclosure();
  const { isOpen: isPrOpen, onToggle: onPrToggle } = useDisclosure();
  const [firstTime, setFirstTime] = useLocalStorage("firstTime", "3");

  useEffect(() => {
    setTimeout(function () {
      firstTime == "3" ? setFirstTime("1") : "";
    }, 1000);
  }, [firstTime]);

  return (
    <>
      <Box
        cursor="pointer"
        data-group="card--shadow"
        className="card__menu_shadow"
        flex={`0 0 calc(${cardWidth} - 32px)`}
        w={`calc(${cardWidth} - 32px)`}
        minH="200px"
        m="32px 16px 0px 16px"
        pos="relative"
        p="24px"
        onClick={panduanSheetDc.onOpen}
        _hover={{
          marginTop: "27px",
          marginBottom: "5px",
          _before: {
            boxShadow: "rgba(17, 12, 46, 0.085) 0px 18px 160px 10px",
          },
        }}
        borderRadius="24px"
        opacity="1"
        bg={colorMode == "light" ? "#fff" : "#222222"}
        _before={{
          content: '""',
          pos: "absolute",
          top: "0px",
          left: "0px",
          right: "0px",
          bottom: "0px",
          width: "100%",
          height: "100%",
          zIndex: "-2",
          boxShadow: "rgba(17, 12, 46, 0.05) 0px 10px 160px 10px",
          borderRadius: "24px",
          transition: "all 0.25s",
        }}
        transition="all 0.25s"
        {...cardProps}
      >
        <Flex alignItems="center" gap="16px">
          <Box
            className="card__icon"
            bg={colorMode == "light" ? "#f8f8f8" : "#313131"}
            bgImage={icon}
            bgSize="cover"
            w="48px"
            h="48px"
            borderRadius="12px"
          ></Box>
        </Flex>
        <Box ml="2px" mt="24px" mb="24px">
          <Text variant="cardtitle" fontSize="16px" data-group="card--shadow">
            {title}
          </Text>
          <Text color="#9a9a9f" fontSize="14px" mt="2px" fontWeight="500">
            {subtitle}
          </Text>
        </Box>
      </Box>
      <ModalSheet
        onClose={panduanSheetDc.onClose}
        isOpen={
          firstTime == "3" || firstTime == "2" ? panduanSheetDc.isOpen : true
        }
        onExit={() => {
          setFirstTime("2");
        }}
        footer={
          <>
            <Box
              borderRadius="50%"
              h="48px"
              w="48px"
              bgImage="/images/profilepicmine.jpg"
              bgPos="center"
              bgSize="contain"
            ></Box>
            <Flex>
              <Text fontSize="12px" pl="3px">
                Ada pertanyaan lain?&nbsp;
              </Text>
              <Link
                isExternal
                href="https://www.its.ac.id/dptsi/id/kontak-kami-2/"
                fontSize="12px"
                color="#008ffa"
                fontWeight="550"
                _hover={{
                  color: "#0072cc",
                }}
              >
                <Text>Hubungi kami disini</Text>
              </Link>
            </Flex>
          </>
        }
      >
        <Flex
          w="100%"
          justifyContent="center"
          alignItems="center"
          flexDir="column"
          px={["12px", "12px", "32px", "92px"]}
        >
          <Flex gap="8px">
            <Center>
              <MyITSLogo
                w={{ base: "68px", d: "98px" }}
                h="auto"
                color={colorMode === "light" ? "#013880" : "white"}
              />
            </Center>
            <Center>
              <Text
                fontSize={{ base: "18px", d: "22px" }}
                fontWeight={600}
                textAlign="center"
                lineHeight={1.2}
                mt="1px"
              >
                Worktime
              </Text>
            </Center>
          </Flex>
          <Text
            fontWeight="600"
            fontSize={["26px", "32px", "36px"]}
            mt={["0px", "0px", "-6px"]}
            textAlign={"center"}
          >
            Panduan Penggunaan Aplikasi
          </Text>
          <Text textAlign="center" pt="12px">
            Panduan penggunaan ini berisi informasi perubahan-perubahan dan tata
            cara penggunaan modul baru pada myITS Worktime baru.
          </Text>
          <Box
            w="100%"
            h="1px"
            bg={colorMode == "light" ? "#e4e4e4" : "#444444"}
            my="24px"
          ></Box>
          <Flex
            w="100%"
            onClick={onPresensiToggle}
            justifyContent="space-between"
            alignItems="center"
            cursor="pointer"
          >
            <Text fontWeight="600" fontSize="20px">
              Widget Presensi
            </Text>
            <Flex w="36px" h="36px" justifyContent="center" alignItems="center">
              {isPresensiOpen ? (
                <IoIosArrowUp></IoIosArrowUp>
              ) : (
                <IoIosArrowDown></IoIosArrowDown>
              )}
            </Flex>
          </Flex>
          <Collapse in={isPresensiOpen} id="modulPresensi">
            <Flex w="100%" flexDir="column">
              <Text fontWeight="550" mt="12px">
                Perubahan
              </Text>
              <Text>
                Tombol mulai kerja dan akhiri kerja dipisah menjadi dua tombol
                berbeda.
              </Text>
            </Flex>
            <Flex
              gap="16px"
              w="100%"
              wrap={{ base: "wrap", m: "nowrap" }}
              mt="24px"
            >
              <PrimaryButton w={{ base: "100%", m: "50%" }}>
                Mulai kerja
              </PrimaryButton>
              <SecondaryButton w={{ base: "100%", m: "50%" }}>
                Akhiri kerja
              </SecondaryButton>
            </Flex>
            <Flex w="100%" flexDir="column">
              <Text fontWeight="550" mt="32px">
                Mulai kerja
              </Text>
              <Text>
                Untuk memulai kerja, anda perlu menekan tombol mulai kerja.
                Setelah berhasil memulai kerja, tulisan tombol akan berubah
                menjadi &quot;Kerja dimulai&quot; dan tombol akhiri kerja akan
                aktif.
              </Text>
            </Flex>
            <Flex
              gap="16px"
              w="100%"
              wrap={{ base: "wrap", m: "nowrap" }}
              mt="24px"
            >
              <PrimaryButton w={{ base: "100%", m: "50%" }} isDisabled>
                Kerja dimulai
              </PrimaryButton>
              <SecondaryButton w={{ base: "100%", m: "50%" }}>
                Akhiri kerja
              </SecondaryButton>
            </Flex>
            <Flex w="100%" flexDir="column">
              <Text fontWeight="550" mt="32px">
                Akhiri kerja
              </Text>
              <Text>
                Untuk mengakhiri kerja, anda perlu menekan tombol akhiri kerja.
                Setelah berhasil mengakhiri kerja, tombol &quot;Mulai
                kerja&quot; dan &quot;Akhiri kerja&quot; tidak aktif dan tulisan
                kedua tombol berubah menjadi &quot;Kerja diakhiri&quot;.
              </Text>
            </Flex>
            <Flex
              gap="16px"
              w="100%"
              wrap={{ base: "wrap", m: "nowrap" }}
              mt="24px"
              mb="24px"
            >
              <PrimaryButton w={{ base: "100%", m: "50%" }} isDisabled>
                Kerja diakhiri
              </PrimaryButton>
              <SecondaryButton w={{ base: "100%", m: "50%" }} isDisabled>
                Kerja diakhiri
              </SecondaryButton>
            </Flex>
          </Collapse>
          <Box
            w="100%"
            h="1px"
            bg={colorMode == "light" ? "#e4e4e4" : "#444444"}
            my="24px"
          ></Box>
          <Flex
            w="100%"
            onClick={onAKToggle}
            justifyContent="space-between"
            alignItems="center"
            cursor="pointer"
          >
            <Text fontWeight="600" fontSize="20px">
              Modul Aktivitas Kerja
            </Text>
            <Flex w="36px" h="36px" justifyContent="center" alignItems="center">
              {isAKOpen ? (
                <IoIosArrowUp></IoIosArrowUp>
              ) : (
                <IoIosArrowDown></IoIosArrowDown>
              )}
            </Flex>
          </Flex>
          <Collapse in={isAKOpen} id="modulAK">
            <Flex w="100%" flexDir="column">
              <Text fontWeight="550" mt="16px">
                Perubahan
              </Text>
              <Text>
                Istilah{" "}
                <span
                  style={{
                    fontWeight: "550",
                  }}
                >
                  Realisasi Kerja{" "}
                </span>
                berubah menjadi{" "}
                <span
                  style={{
                    fontWeight: "550",
                  }}
                >
                  Aktivitas Kerja.
                </span>
                <p>
                  <span
                    style={{
                      fontWeight: "550",
                    }}
                  >
                    Realisasi Kerja{" "}
                  </span>
                  sekarang adalah istilah untuk{" "}
                  <span
                    style={{
                      fontWeight: "550",
                    }}
                  >
                    Aktivitas Kerja{" "}
                  </span>{" "}
                  yang berhasil diselesaikan atau dihapus.
                </p>
                <p>
                  Pada halaman Beranda, ditampilkan 4 aktivitas kerja terbaru.
                </p>
              </Text>
            </Flex>
            <Flex w="100%" flexDir="column">
              <Text fontWeight="550" mt="16px">
                Melihat semua aktivitas kerja
              </Text>
              <Text>
                Untuk melihat semua aktivitas kerja, anda dapat menekan tombol
                &quot;Lihat Semua&quot; pada modul di beranda atau menggunakan
                menu samping kiri yang tersedia.
              </Text>
            </Flex>
            <Flex w="100%" flexDir="column">
              <Text fontWeight="550" mt="16px">
                Menambahkan aktivitas kerja
              </Text>
              <Text>
                Pada halaman Aktivitas Kerja,uliskan aktivitas kerja pada input
                field yang tersedia, lalu tekan tombol &quot;Tambahkan&quot;.
              </Text>
            </Flex>
            <Flex
              mt="12px"
              w="100%"
              gap="18px"
              wrap={["wrap", "wrap", "nowrap"]}
              alignItems="center"
            >
              <Flex w="100%" h="56px" bg="#f7f7f7" borderRadius="16px"></Flex>
              <PrimaryButton type="submit">Tambahkan</PrimaryButton>
            </Flex>
            <Flex w="100%" flexDir="column">
              <Text fontWeight="550" mt="24px">
                Mengganti status aktivitas kerja
              </Text>
              <Text>
                Klik pada salah satu dari tiga tombol status untuk mengganti
                status aktivitas kerja.
              </Text>
            </Flex>
            <Flex
              flexDir={["column", "column", "row"]}
              w="100%"
              justifyContent="space-between"
              mt="24px"
              gap="8px"
            >
              <Flex
                alignItems="center"
                gap="8px"
                flex="1"
                justifyContent={["start"]}
              >
                <MotionBox
                  display="flex"
                  cursor="pointer"
                  pos="relative"
                  justifyContent="center"
                  alignItems="center"
                  flexShrink="0"
                  w="48px"
                  h="48px"
                  borderRadius="50%"
                  fontSize="0"
                  bg="#008fff33"
                  _hover={{
                    filter: "none",
                    opacity: "1",
                    backgroundColor: "#008fff45",
                  }}
                  transition="all 0.12s ease-in-out"
                >
                  <MotionBox
                    w="36px"
                    h="36px"
                    pos="relative"
                    bgSize="contain"
                    bgRepeat="no-repeat"
                    bgImage="images/icon/clock.png"
                    whileTap={{ scale: 0.95 }}
                  ></MotionBox>
                </MotionBox>
                <Text fontWeight="500">Sedang dikerjakan</Text>
              </Flex>
              <Flex
                alignItems="center"
                gap="8px"
                flex="1"
                justifyContent={["start", "start", "center"]}
              >
                <MotionBox
                  display="flex"
                  cursor="pointer"
                  pos="relative"
                  justifyContent="center"
                  alignItems="center"
                  flexShrink="0"
                  w="48px"
                  h="48px"
                  borderRadius="50%"
                  fontSize="0"
                  bg="#ffdd0033"
                  _hover={{
                    filter: "none",
                    opacity: "1",
                    backgroundColor: "#ffdd0050",
                  }}
                  transition="all 0.12s ease-in-out"
                >
                  <MotionBox
                    w="36px"
                    h="36px"
                    pos="relative"
                    bgSize="contain"
                    bgRepeat="no-repeat"
                    bgImage="images/icon/play.png"
                    whileTap={{ scale: 0.95 }}
                  ></MotionBox>
                </MotionBox>
                <Text fontWeight="500">Dijeda / Belum dimulai</Text>
              </Flex>
              <Flex
                alignItems="center"
                gap="8px"
                flex="1"
                justifyContent={["start", "start", "end"]}
              >
                <MotionBox
                  display="flex"
                  cursor="pointer"
                  pos="relative"
                  justifyContent="center"
                  alignItems="center"
                  flexShrink="0"
                  w="48px"
                  h="48px"
                  borderRadius="50%"
                  fontSize="0"
                  bg="#57bc3b30"
                  _hover={{
                    filter: "none",
                    opacity: "1",
                    backgroundColor: "#57bc3b44",
                  }}
                  transition="all 0.12s ease-in-out"
                >
                  <MotionBox
                    w="36px"
                    h="36px"
                    pos="relative"
                    bgSize="contain"
                    bgRepeat="no-repeat"
                    bgImage="images/icon/checkmark.png"
                    whileTap={{ scale: 0.95 }}
                  ></MotionBox>
                </MotionBox>
                <Text fontWeight="500">Selesai</Text>
              </Flex>
            </Flex>
            <Flex w="100%" flexDir="column">
              <Text fontWeight="550" mt="24px">
                Mengubah judul aktivitas kerja
              </Text>
              <Text>
                Klik <span style={{ fontWeight: "550" }}> lihat menu</span> pada
                item yang ingin diubah, lalu pilih
                <span style={{ fontWeight: "550" }}> Edit</span>.
              </Text>
            </Flex>
            <Flex w="100%" flexDir="column">
              <Text fontWeight="550" mt="24px">
                Menghapus aktivitas kerja
              </Text>
              <Text>
                Klik <span style={{ fontWeight: "550" }}> lihat menu</span> pada
                item yang ingin diubah, lalu pilih
                <span style={{ fontWeight: "550" }}> Hapus</span>.
              </Text>
            </Flex>
          </Collapse>
          <Box
            w="100%"
            h="1px"
            bg={colorMode == "light" ? "#e4e4e4" : "#444444"}
            my="24px"
          ></Box>
          <Flex
            w="100%"
            onClick={onPrToggle}
            justifyContent="space-between"
            alignItems="center"
            cursor="pointer"
          >
            <Text fontWeight="600" fontSize="20px">
              Modul Presensi
            </Text>
            <Flex w="36px" h="36px" justifyContent="center" alignItems="center">
              {isPrOpen ? (
                <IoIosArrowUp></IoIosArrowUp>
              ) : (
                <IoIosArrowDown></IoIosArrowDown>
              )}
            </Flex>
          </Flex>
          <Collapse in={isPrOpen} id="modulPR">
            <Flex w="100%" flexDir="column">
              <Text fontWeight="550" mt="16px">
                Perubahan
              </Text>
              <Text>
                Terdapat submenu baru pada bagian atas halaman untuk mengakses
                submodul cuti, perbaikan presensi, dan rekap presensi per
                semester.
              </Text>
            </Flex>

            <Flex w="100%" flexDir="column">
              <Text fontWeight="550" mt="16px">
                Perbaikan presensi
              </Text>
              <Text>
                Pilih jenis presensi (masuk/pulang) dan lengkapi data lainnya
                untuk mengajukan perbaikan presensi. Daftar pengajuan dan
                statusnya dapat dilihat pada tabel di halaman yang sama.
              </Text>
            </Flex>

            <Flex w="100%" flexDir="column">
              <Text fontWeight="550" mt="16px">
                Cuti
              </Text>
              <Text>
                Selesaikan multistep wizard yang disediakan ketika klik tombol
                &quot;Ajukan cuti&quot; untuk membuat ajuan cuti baru.
              </Text>
            </Flex>

            <Flex w="100%" flexDir="column">
              <Text fontWeight="550" mt="16px">
                Rekap presensi per semester
              </Text>
              <Text>
                Rekap presnesi per semester dengan data total waktu kerja tiap
                bulan dalam satu semester, waktu kurang, dan lain-lain. Detail
                tiap bulan dapat dilihat di halaman utama presensi dengan
                mengatur filter sesuai dengan bulan dan tahun yang diinginkan.
              </Text>
            </Flex>
          </Collapse>
          <Box
            w="100%"
            h="1px"
            bg={colorMode == "light" ? "#e4e4e4" : "#444444"}
            my="24px"
          ></Box>
        </Flex>
      </ModalSheet>
    </>
  );
};

export default Panduan;

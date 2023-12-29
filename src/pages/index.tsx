import PageTransition from "@/components/PageLayout";
import { DarkButton } from "@/components/atoms/Buttons/DarkButton";
import MenuWrapper from "@/components/atoms/PageCol";
import ContainerQuery from "@/components/atoms/PageCol";
import {
  TableWrapper,
  TableSorting,
  TableSortingRow,
  TableSortingCol,
  TableFilterDate,
  TableFilter,
  TableSearch,
} from "@/components/molecules/Table";
import CardIconShadow from "@/components/organisms/CardIconShadow";
import Card from "@/components/organisms/Cards/Card";
import PageBanner from "@/components/organisms/PageBanner";
import { TableBasic } from "@/components/organisms/TableBasic";
import { kolomTabelRenker } from "@/data/table";
import AppSettingContext from "@/providers/AppSettingProvider";
import { InfiniteQuery, TableLoadMoreConf } from "@/utils/table";
import {
  Flex,
  useColorMode,
  Box,
  Text,
  Button,
  TableContainer,
  Link,
  Center,
} from "@chakra-ui/react";
import { table } from "console";
import { useContext, useEffect, useState } from "react";
import NextLink from "next/link";
import dynamic from "next/dynamic";
import PageCol from "@/components/atoms/PageCol";
import PageRow from "@/components/atoms/PageRow";
import PageColWidget from "@/components/atoms/PageColWidget";
import Wrapper from "@/components/atoms/Wrapper";
import WidgetCard from "@/components/organisms/Cards/WidgetCard";
import PlainCard from "@/components/organisms/Cards/Card";
import { PrimaryButton } from "@/components/atoms/Buttons/PrimaryButton";
import { SecondaryButton } from "@/components/atoms/Buttons/SecondaryButton";
import AbsenWidget from "./Widget/AbsenWidget";
import { RencanaKerja } from "@/types/renker";
import {
  AnimatePresence,
  LayoutGroup,
  motion,
  useIsPresent,
} from "framer-motion";
import { dataRelker } from "@/data/relker";
import { MotionBox } from "@/components/motion/Motion";
// import AbsenWidget from "./Widget/AbsenWidget";
const AbsenChart = dynamic(() => import("@/components/organisms/AbsenChart"), {
  ssr: false,
});

const Beranda = () => {
  const { colorMode } = useColorMode();
  const { running, startTime, endTime } = useContext(AppSettingContext);
  const [relkerItems, setRelkerItems] = useState<RencanaKerja[]>(dataRelker);
  const setWorking = (relker: RencanaKerja) => {
    let el = relkerItems.map((item) => {
      if (item.id === relker.id) {
        item.status = 1;
      }
      return item;
    });
    setRelkerItems(el);
  };

  const setPaused = (relker: RencanaKerja) => {
    let el = relkerItems.map((item) => {
      if (item.id === relker.id) {
        item.status = 2;
      }
      return item;
    });
    setRelkerItems(el);
  };

  const setDone = (relker: RencanaKerja) => {
    let el = relkerItems.map((item) => {
      if (item.id === relker.id) {
        item.status = 3;
      }
      return item;
    });
    setRelkerItems(el);
  };
  return (
    <>
      <PageTransition
        pageTitle={
          startTime == undefined
            ? "Halo, Sulthon. Silahkan memulai kerja."
            : endTime == undefined
            ? "Halo, Sulthon."
            : "Halo, Sulthon. Kerja telah diakhiri."
        }
      >
        <PageRow>
          <LayoutGroup>
            <PageCol>
              <AbsenWidget></AbsenWidget>

              <MotionBox
                className="card__big"
                pos="relative"
                layout
                p="32px"
                pb="64px"
                borderRadius="24px"
                bg={colorMode == "light" ? "#fff" : "#222222"}
                boxShadow="rgba(17, 12, 46, 0.07) 0px 18px 160px 10px"
              >
                <MotionBox layout>
                  <Text fontWeight="550" fontSize="16px" mb="16px">
                    Aktivitas kerja terbaru
                  </Text>
                </MotionBox>
                <MotionBox
                  layout
                  overflowY="hidden"
                  overflowX="scroll"
                  sx={{
                    "::-webkit-scrollbar-thumb": {
                      backgroundColor:
                        colorMode == "light" ? "#dadada" : "#313131",
                      border: "5px solid transparent",
                    },
                    "::-webkit-scrollbar-thumb:hover": {
                      backgroundColor:
                        colorMode == "light" ? "#b3b3b3" : "#393939",
                    },
                  }}
                >
                  <AnimatePresence>
                    {relkerItems
                      .filter((val) => val.status !== 3 && val.status !== 4)
                      .map((item, index) => (
                        <Item
                          key={item.id}
                          relkerItem={item}
                          relkerIndex={index}
                          setWorking={() => setWorking(item)}
                          setPaused={() => setPaused(item)}
                          setDone={() => setDone(item)}
                        ></Item>
                      ))}
                  </AnimatePresence>
                </MotionBox>
                <Flex
                  as={motion.div}
                  layout
                  justifyContent="center"
                  alignItems="center"
                  w="100%"
                  pt="36px"
                >
                  {/* refactor */}
                  <Link
                    w={{ base: "100%", t: "unset" }}
                    as={NextLink}
                    href="/relker"
                  >
                    <DarkButton>Lihat Semua</DarkButton>
                  </Link>
                </Flex>
              </MotionBox>

              <Wrapper pt="12px" as={motion.div} layout>
                <CardIconShadow
                  title="Aktivitas Kerja"
                  subtitle="Lihat dan kelola aktivitas kerja anda"
                  link="/relker"
                  icon="/images/icon/porto.svg"
                />
                <CardIconShadow
                  title="Rekap Presensi"
                  subtitle="Lihat dan kelola rekap presensi anda"
                  link="/rekapabsen"
                  icon="/images/icon/skem.svg"
                />
                <CardIconShadow
                  title="Panduan"
                  subtitle="Baca panduan penggunaan myITS Worktime baru"
                  link="/beasiswa"
                  icon="/images/icon/beasiswa.svg"
                />
                {/* <CardIconShadow
                  title="Cuti (Coming Soon)"
                  subtitle="Lihat dan kelola semua ajuan cuti"
                  link="/"
                  icon="/images/icon/folderbf.svg"
                /> */}
              </Wrapper>
            </PageCol>
          </LayoutGroup>
        </PageRow>
      </PageTransition>
    </>
  );
};

export default Beranda;

const Item = ({
  relkerItem,
  relkerIndex,
  setWorking,
  setPaused,
  setDone,
}: // onClick,
{
  relkerItem: RencanaKerja;
  relkerIndex: number;
  setWorking: any;
  setPaused: any;
  setDone: any;
}) => {
  const animations = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.25, easing: "easeOut" } },
    exit: {
      opacity: 0,
      transition: { duration: 0.25, easing: "easeOut", delay: 0.34 },
    },
  };

  const strikeAnimation = {
    initial: { width: "0%" },
    animate: { width: "0%" },
    exit: { width: "100%" },
    transition: { duration: 0.45, easing: "easeOut" },
  };

  const [workTooltip, setWorkTooltip] = useState<boolean>(false);
  const [pauseTooltip, setPauseTooltip] = useState<boolean>(false);
  const [doneTooltip, setDoneTooltip] = useState<boolean>(false);

  const [st, setSt] = useState<string>("");

  useEffect(() => {
    if (relkerItem.status == 1) {
      setSt("Sedang dikerjakan");
    } else if (relkerItem.status == 2) {
      setSt("Dijeda atau belum dimulai");
    }
  }, [relkerItem.status]);

  return (
    <Box
      as={motion.div}
      layout
      {...animations}
      className="relker__item"
      style={{
        background: "#fff",
        width: "100%",
        alignItems: "center",
        borderTop: "1px solid #e4e4e4",
        borderBottom: "1px solid #e4e4e4",
        marginTop: "-1px",
      }}
    >
      <Flex dir="column" justifyContent="start" alignItems="center">
        <Flex
          className="file__container"
          alignItems="center"
          transition="color .15s"
          _groupHover={{
            color: "#008fff",
          }}
          my="20px"
        >
          <Flex gap="6px">
            <MotionBox
              display="flex"
              cursor="pointer"
              pos="relative"
              justifyContent="center"
              alignItems="center"
              flexShrink="0"
              w="44px"
              h="44px"
              borderRadius="50%"
              fontSize="0"
              bg="#008fff33"
              filter={relkerItem.status == 1 ? "none" : "grayscale(100%)"}
              opacity={relkerItem.status == 1 ? "1" : "0.32"}
              _hover={{
                filter: "none",
                opacity: "1",
                backgroundColor: "#008fff45",
              }}
              transition="all 0.12s ease-in-out"
              onClick={setWorking}
            >
              <MotionBox
                w="32px"
                h="32px"
                pos="relative"
                bgSize="contain"
                bgRepeat="no-repeat"
                bgImage="images/icon/clock.png"
                onClick={setWorking}
                onHoverStart={() => setWorkTooltip(true)}
                onHoverEnd={() => setWorkTooltip(false)}
                whileTap={{ scale: 0.95 }}
              ></MotionBox>
              <MotionBox
                display={workTooltip ? "flex" : "none"}
                pos="absolute"
                bg="#fff"
                border="1px solid #e4e4e4"
                top="98%"
                width="118px"
                p="2px"
                py="3px"
                borderRadius="6px"
                zIndex="2"
                left="-37px"
                justifyContent="center"
                alignItems="center"
              >
                <Text fontSize="12px" fontWeight="450">
                  Mulai pengerjaan
                </Text>
              </MotionBox>
            </MotionBox>
            <Flex
              cursor="pointer"
              pos="relative"
              justifyContent="center"
              alignItems="center"
              flexShrink="0"
              w="44px"
              h="44px"
              borderRadius="50%"
              fontSize="0"
              bg="#ffdd0033"
              filter={relkerItem.status == 2 ? "none" : "grayscale(100%)"}
              _hover={{
                filter: "none",
                opacity: "1",
                backgroundColor: "#ffdd0050",
              }}
              transition="all 0.12s ease-in-out"
              onClick={setPaused}
            >
              <MotionBox
                w="32px"
                h="32px"
                bgSize="contain"
                bgRepeat="no-repeat"
                pos="relative"
                // bgImage={
                //   colorMode == "light"
                //     ? "images/icon/play.png"
                //     : "images/icon/playdark.png"
                // }x
                onHoverStart={() => setPauseTooltip(true)}
                onHoverEnd={() => setPauseTooltip(false)}
                bgImage={"images/icon/play.png"}
                onClick={setPaused}
                whileTap={{ scale: 0.95 }}
              ></MotionBox>
              <Box
                display={pauseTooltip ? "flex" : "none"}
                pos="absolute"
                bg="#fff"
                border="1px solid #e4e4e4"
                // display="flex"
                top="98%"
                width="50px"
                p="2px"
                py="3px"
                borderRadius="6px"
                zIndex="2"
                left="-4px"
                justifyContent="center"
                alignItems="center"
              >
                <Text fontSize="12px" fontWeight="450">
                  Jeda
                </Text>
              </Box>
            </Flex>
            <Flex
              cursor="pointer"
              pos="relative"
              justifyContent="center"
              alignItems="center"
              flexShrink="0"
              w="44px"
              h="44px"
              borderRadius="50%"
              fontSize="0"
              filter={relkerItem.status == 3 ? "none" : "grayscale(100%)"}
              opacity={relkerItem.status == 3 ? "1" : "0.42"}
              bg="#57bc3b30"
              _hover={{
                filter: "none",
                opacity: "1",
                backgroundColor: "#57bc3b44",
              }}
              transition="all 0.12s ease-in-out"
              onClick={setDone}
            >
              <MotionBox
                w="32px"
                h="32px"
                bgSize="contain"
                pos="relative"
                bgRepeat="no-repeat"
                bgImage="images/icon/checkmark.png"
                onClick={setDone}
                whileTap={{ scale: 0.95 }}
                onHoverStart={() => setDoneTooltip(true)}
                onHoverEnd={() => setDoneTooltip(false)}
              ></MotionBox>
              <Box
                display={doneTooltip ? "flex" : "none"}
                pos="absolute"
                bg="#fff"
                border="1px solid #e4e4e4"
                // display="flex"
                top="98%"
                width="80px"
                p="2px"
                py="3px"
                borderRadius="6px"
                zIndex="2"
                left="-20px"
                justifyContent="center"
                alignItems="center"
              >
                <Text fontSize="12px" fontWeight="450">
                  Selesaikan
                </Text>
              </Box>
            </Flex>
          </Flex>
        </Flex>
        <Box className="file__detail" ml="16px" w="100%">
          <Box
            display="flex"
            alignItems="center"
            className="file__title"
            mb="4px"
            fontSize="16px"
            lineHeight="1.1875"
            fontWeight="600"
            _groupHover={{
              color: "#008fff",
            }}
          >
            <Flex w="100%" pos="relative">
              <Text
                variant="tabletitle"
                pos="relative"
                data-group="card--shadow"
                fontSize="16px"
                lineHeight="1.1875"
                fontWeight="550"
                w="max-content"
                _groupHover={{
                  color: "#008fff",
                }}
                // bg="red"
              >
                {relkerItem.subjudul}
              </Text>
              <motion.div
                // layout
                style={{
                  zIndex: "1",
                  position: "absolute",
                  height: "2px",
                  background: "#141414",
                  top: "calc(50% + 1px)",
                  // width: "20%",
                }}
                {...strikeAnimation}
              ></motion.div>
              <Flex flex="1" zIndex="2" bg="white"></Flex>
            </Flex>
          </Box>
          <Flex w="100%" pos="relative">
            <Box
              className="file__subtitle"
              fontSize="13px"
              pos="relative"
              lineHeight="1.38462"
              fontWeight="500"
              w="max-content"
              color="#b2b3BD"
            >
              {st}
            </Box>
            <motion.div
              style={{
                zIndex: "1",
                position: "absolute",
                height: "2px",
                background: "#141414",
                top: "calc(50% + 1px)",
              }}
              {...strikeAnimation}
            ></motion.div>
            <Flex flex="1" zIndex="2" bg="white"></Flex>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

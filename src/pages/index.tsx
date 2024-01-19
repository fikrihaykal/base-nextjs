import PageTransition from "@/components/PageLayout";
import { DarkButton } from "@/components/atoms/Buttons/DarkButton";
import PageCol from "@/components/atoms/PageCol";
import PageRow from "@/components/atoms/PageRow";
import Wrapper from "@/components/atoms/Wrapper";
import { MotionBox } from "@/components/motion/Motion";
import CardIconShadow from "@/components/organisms/CardIconShadow";
import AccountInfoContext from "@/providers/AccountInfoProvider";
import AppSettingContext from "@/providers/AppSettingProvider";
import { fetcherGetBackend } from "@/utils/common/Fetcher";
import { Box, Flex, Link, Text, useColorMode } from "@chakra-ui/react";
import axios from "axios";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import NextLink from "next/link";
import { useContext } from "react";
import useSWR, { mutate } from "swr";
import AbsenWidget from "./Widget/AbsenWidget";
import Panduan from "./Widget/PanduanWidget";
import { Item } from "./relker";
import AktivitasKerja from "./Widget/AktivitasKerjaWidget";

const Beranda = () => {
  const {
    data: dataRealisasi,
    error,
    isValidating,
    isLoading,
  } = useSWR("data_realisasi", fetcherGetBackend);

  const { colorMode } = useColorMode();
  const { running, startTime, endTime } = useContext(AppSettingContext);
  const { nickname, name } = useContext(AccountInfoContext);

  const setWorking = (id: string) => {
    const endpoint =
      (process.env.NEXT_PUBLIC_BACKEND_URL ?? "localhost:8080") +
      "/rencana-kerja/" +
      id +
      "/mulai";

    axios
      .post(endpoint, id, {
        withCredentials: true,
        xsrfCookieName: "CSRF-TOKEN",
        xsrfHeaderName: "X-CSRF-TOKEN",
        withXSRFToken: true,
      })
      .then((res) => {
        mutate("data_realisasi");
      });
  };

  const setDone = (id: string) => {
    const endpoint =
      (process.env.NEXT_PUBLIC_BACKEND_URL ?? "localhost:8080") +
      "/rencana-kerja/" +
      id +
      "/akhiri";

    axios
      .post(endpoint, id, {
        withCredentials: true,
        xsrfCookieName: "CSRF-TOKEN",
        xsrfHeaderName: "X-CSRF-TOKEN",
        withXSRFToken: true,
      })
      .then((res) => {
        mutate("data_realisasi");
      });
  };

  const removeItem = (id: string) => {
    const endpoint =
      (process.env.NEXT_PUBLIC_BACKEND_URL ?? "localhost:8080") +
      "/rencana-kerja/" +
      id +
      "/hapus";

    axios
      .post(endpoint, id, {
        withCredentials: true,
        xsrfCookieName: "CSRF-TOKEN",
        xsrfHeaderName: "X-CSRF-TOKEN",
        withXSRFToken: true,
      })
      .then((res) => {
        mutate("data_realisasi");
      });
  };
  return (
    <>
      <PageTransition
        pageTitle={
          startTime == undefined
            ? "Halo, " + (nickname ?? name) + ". Silahkan memulai kerja."
            : endTime == undefined
            ? "Halo, " + (nickname ?? name) + "."
            : "Halo, " + (nickname ?? name) + ". Kerja telah diakhiri."
        }
      >
        <PageRow>
          <LayoutGroup>
            <PageCol>
              <AbsenWidget></AbsenWidget>
              <AktivitasKerja></AktivitasKerja>
              {/* <Flex flexDir="column" pos="relative" mb="8px">
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
                    pt="1px"
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
                    {dataRealisasi?.filter((val) => val.completed_at == null)
                      .length == 0 ? (
                      <Flex
                        w="100%"
                        h="100px"
                        justifyContent="center"
                        alignItems="center"
                        fontWeight="550"
                      >
                        Tidak ada aktivitas kerja
                      </Flex>
                    ) : (
                      <AnimatePresence initial={false}>
                        {dataRealisasi
                          ?.filter((val: any) => val.completed_at == null)
                          .sort().slice(0,4)
                          .map((item: any, index: any) => (
                            <Item
                              key={item.id}
                              relkerItem={item}
                              relkerIndex={index}
                              setWorking={() => setWorking(item.id)}
                              setDone={() => setDone(item.id)}
                              removeItem={() => removeItem(item.id)}
                            ></Item>
                          ))}
                      </AnimatePresence>
                    )}
                  </MotionBox>
                  <Flex
                    as={motion.div}
                    layout
                    justifyContent="center"
                    alignItems="center"
                    w="100%"
                    pt="36px"
                  >
                    <Link
                      w={{ base: "100%", t: "unset" }}
                      as={NextLink}
                      href="/relker"
                    >
                      <DarkButton>Lihat Semua</DarkButton>
                    </Link>
                  </Flex>
                </MotionBox>

            
              </Flex> */}
              <Wrapper
                pt="12px"
                mr={{ base: "-14px", t: "-24px" }}
                as={motion.div}
                layout
              >
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
                <Panduan
                  title="Panduan"
                  subtitle="Pelajari cara penggunaan myITS Worktime baru"
                  icon="/images/icon/beasiswa.svg"
                />
              </Wrapper>
            </PageCol>
          </LayoutGroup>
        </PageRow>
      </PageTransition>
    </>
  );
};

export default Beranda;

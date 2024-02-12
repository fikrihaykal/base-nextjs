import PageTransition from "@/components/PageLayout";
import PageCol from "@/components/atoms/PageCol";
import PageRow from "@/components/atoms/PageRow";
import Wrapper from "@/components/atoms/Wrapper";
import CardIconShadow from "@/components/organisms/CardIconShadow";
import AccountInfoContext from "@/providers/AccountInfoProvider";
import AppSettingContext from "@/providers/AppSettingProvider";
import { LayoutGroup, motion } from "framer-motion";
import { useContext } from "react";
import AbsenWidget from "./Widget/AbsenWidget";
import AktivitasKerja from "./Widget/AktivitasKerjaWidget";
import Panduan from "./Widget/PanduanWidget";

const Beranda = () => {
  const { running, startTime, endTime } = useContext(AppSettingContext);
  const { nickname, name } = useContext(AccountInfoContext);

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

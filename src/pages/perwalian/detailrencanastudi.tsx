import PageTransition from "@/components/PageLayout";
import ContainerQuery from "@/components/atoms/ContainerQuery";
import PageRow from "@/components/atoms/PageRow";
import { ModalContextProvider } from "@/providers/ModalProvider";
import CardMahasiswa from "../rencana-studi/components/CardMahasiswa";
import CardRangkuman from "../rencana-studi/components/CardRangkuman";
import CardJadwal from "../rencana-studi/components/CardJadwal";
import CardRencanaStudi from "../rencana-studi/components/CardRencanaStudi";
import CardRiwayatKelas from "../rencana-studi/components/CardRiwayatKelas";
import CardTestToast from "../rencana-studi/components/CardTestToast";

const DetailMahasiswaFRS = () => {
  return (
    <>
      <ModalContextProvider>
        <PageTransition
          pageTitle="Detail Rencana Studi"
          previousPage="/perwalian"
        >
          <PageRow>
            <ContainerQuery>
              <CardMahasiswa />
              <CardRangkuman />
              <CardJadwal />
              <CardRencanaStudi />
              <CardRiwayatKelas />
              <CardTestToast />
            </ContainerQuery>
          </PageRow>
        </PageTransition>
      </ModalContextProvider>
    </>
  );
};

export default DetailMahasiswaFRS;

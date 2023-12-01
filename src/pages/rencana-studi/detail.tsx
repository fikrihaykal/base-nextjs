import PageTransition from "@/components/PageLayout";
import ContainerQuery from "@/components/atoms/ContainerQuery";
import PageRow from "@/components/atoms/PageRow";
import CardRencanaStudi from "./components/CardRencanaStudi";
import CardPersetujuan from "./components/CardPersetujuan";
import CardRiwayatKelas from "./components/CardRiwayatKelas";
import { ModalContextProvider } from "@/providers/ModalProvider";
import CardTestToast from "./components/CardTestToast";
import CardJadwal from "./components/CardJadwal";
import CardMahasiswa from "./components/CardMahasiswa";
import CardRangkuman from "./components/CardRangkuman";

const DetailFRS = () => {
  return (
    <>
      <ModalContextProvider>
        <PageTransition
          pageTitle="Detail Rencana Studi"
          previousPage="/rencana-studi"
        >
          <PageRow>
            <ContainerQuery>
              <CardMahasiswa />
              <CardRangkuman />
              <CardJadwal />
              <CardRencanaStudi />
              <CardRiwayatKelas />
              <CardPersetujuan />
              <CardTestToast />
            </ContainerQuery>
          </PageRow>
        </PageTransition>
      </ModalContextProvider>
    </>
  );
};

export default DetailFRS;

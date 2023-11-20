import PageTransition from "@/components/PageLayout";
import ContainerQuery from "@/components/atoms/ContainerQuery";
import PageRow from "@/components/atoms/PageRow";
import StatusFRS from "./components/CardStatus";
import InformasiMahasiswa from "./components/InformasiMahasiswa";
import CardRencanaStudi from "./components/CardRencanaStudi";
import CardPersetujuan from "./components/CardPersetujuan";
import CardRiwayatKelas from "./components/CardRiwayatKelas";
import ModalContext, { ModalContextProvider } from "@/providers/ModalProvider";

const DetailFRS = () => {
  return (
    <>
      <PageTransition pageTitle="Detail Rencana Studi" previousPage="/rencana-studi">
        <PageRow>
          <ContainerQuery>
            <InformasiMahasiswa />
            <StatusFRS />
            <CardRencanaStudi />
            <CardPersetujuan />
            <CardRiwayatKelas />
          </ContainerQuery>
        </PageRow>
      </PageTransition>
    </>
  );
};

export default DetailFRS;
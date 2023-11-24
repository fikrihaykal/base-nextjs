import PageTransition from "@/components/PageLayout";
import ContainerQuery from "@/components/atoms/ContainerQuery";
import PageRow from "@/components/atoms/PageRow";
import InformasiMahasiswa from "./components/CardInformasiMahasiswa";
import CardRencanaStudi from "./components/CardRencanaStudi";
import CardPersetujuan from "./components/CardPersetujuan";
import CardRiwayatKelas from "./components/CardRiwayatKelas";
import { ModalContextProvider } from "@/providers/ModalProvider";
import {
  Box,
  Flex,
} from "@chakra-ui/react";
import CardTestToast from "./components/CardTestToast";
import CardJadwal from "./components/CardJadwal";

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
              <Flex flexWrap={{ base: "wrap", x: "nowrap" }} gap={{ base: "unset", x: 8 }}>
                <Box w="100%" display={{base: "block", x: "none"}}>
                  <InformasiMahasiswa/>
                </Box>
                <Box w={{ base: "100%", x: "67%" }}>
                  <CardJadwal />
                  <CardRencanaStudi />
                  <CardRiwayatKelas />
                  <CardPersetujuan />
                </Box>
                <Box w="100%" display={{base: "none", x: "block"}}>
                  <InformasiMahasiswa/>
                  <CardTestToast />
                </Box>
              </Flex>
            </ContainerQuery>
          </PageRow>
        </PageTransition>
      </ModalContextProvider>
    </>
  );
};

export default DetailFRS;

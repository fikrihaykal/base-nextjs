import PageTransition from "@/components/PageLayout";
import ContainerQuery from "@/components/atoms/ContainerQuery";
import PageRow from "@/components/atoms/PageRow";
import { ModalContextProvider } from "@/providers/ModalProvider";
import { Box, Text, useColorMode } from "@chakra-ui/react";
import CardRangkumanKelas from "./components/CardRangkuman";
import PlainCard from "@/components/organisms/Cards/Card";
import CardInformasiKelas from "./components/CardInformasi";
import CardJadwalKelas from "./components/CardJadwal";
import CardMahasiswaKelas from "./components/CardMahasiswa";

const DetailKelas = () => {
  return (
    <>
      <ModalContextProvider>
        <PageTransition pageTitle="Detail Kelas" previousPage="/kelas">
          <PageRow>
            <ContainerQuery>
              <Box w="full" mb="48px" p={{ base: "16px", d: "0px" }}>
                <Text fontSize="24px" fontWeight={600}>
                  Pemrograman Dasar (A)
                </Text>
                <Text fontSize="18px" fontWeight={500} mt="4px">
                  IF123456 • 3 SKS
                </Text>
              </Box>
              <CardInformasiKelas />
              <CardJadwalKelas />
              <CardMahasiswaKelas />
            </ContainerQuery>
          </PageRow>
        </PageTransition>
      </ModalContextProvider>
    </>
  );
};

export default DetailKelas;

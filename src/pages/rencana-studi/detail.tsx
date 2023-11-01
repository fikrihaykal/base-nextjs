import PageTransition from "@/components/PageLayout";
import ContainerQuery from "@/components/atoms/ContainerQuery";
import PageRow from "@/components/atoms/PageRow";
import StatusFRS from "./components/CardStatus";
import InformasiMahasiswa from "./components/InformasiMahasiswa";
import CardRencanaStudi from "./components/CardRencanaStudi";
import CardPersetujuan from "./components/CardPersetujuan";
import CardPengambilanKelas from "./components/CardPengambilanKelas";
import PlainCard from "@/components/organisms/Cards/Card";
import {
  SuccessButton,
  SuccessClearButton,
  SuccessGhostButton,
  SuccessOutlineButton,
} from "@/components/atoms/Buttons/SuccessButton";
import { Box } from "@chakra-ui/react";
import { WarningButton, WarningClearButton, WarningGhostButton, WarningOutlineButton } from "@/components/atoms/Buttons/WarningButton";
import { DangerButton, DangerClearButton, DangerGhostButton, DangerOutlineButton } from "@/components/atoms/Buttons/DangerButton";

const DetailFRS = () => {
  return (
    <>
      <PageTransition pageTitle="Detail Rencana Studi">
        <PageRow>
          <ContainerQuery>
            <InformasiMahasiswa />
            <StatusFRS />
            <CardRencanaStudi />
            <CardPengambilanKelas />
            <CardPersetujuan />
            <PlainCard>
              <Box mb="16px">
                <SuccessButton>Test</SuccessButton>
                <SuccessClearButton>Test</SuccessClearButton>
                <SuccessOutlineButton>Test</SuccessOutlineButton>
                <SuccessGhostButton>Test</SuccessGhostButton>
              </Box>
              <Box mb="16px">
                <WarningButton>Test</WarningButton>
                <WarningClearButton>Test</WarningClearButton>
                <WarningOutlineButton>Test</WarningOutlineButton>
                <WarningGhostButton>Test</WarningGhostButton>
              </Box>
              <Box mb="16px">
                <DangerButton>Test</DangerButton>
                <DangerClearButton>Test</DangerClearButton>
                <DangerOutlineButton>Test</DangerOutlineButton>
                <DangerGhostButton>Test</DangerGhostButton>
              </Box>
            </PlainCard>
          </ContainerQuery>
        </PageRow>
      </PageTransition>
    </>
  );
};

export default DetailFRS;

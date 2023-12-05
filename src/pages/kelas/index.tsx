import PageTransition from "@/components/PageLayout";
import ContainerQuery from "@/components/atoms/ContainerQuery";
import PageRow from "@/components/atoms/PageRow";
import {
  useColorMode,
} from "@chakra-ui/react";
import PlainCard from "@/components/organisms/Cards/Card";
const Cuti = () => {
  const { colorMode } = useColorMode();
  return (
    <>
      <PageTransition pageTitle="Kelas">
        <PageRow>
          <ContainerQuery>
            <PlainCard>
            </PlainCard>
          </ContainerQuery>
        </PageRow>
      </PageTransition>
    </>
  );
};

export default Cuti;

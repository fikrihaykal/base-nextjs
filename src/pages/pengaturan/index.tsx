import PageTransition from "@/components/PageLayout";
import ContainerQuery from "@/components/atoms/ContainerQuery";
import PageRow from "@/components/atoms/PageRow";
import {
  Box,
  Button,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import PlainCard from "@/components/organisms/Cards/Card";

const Pengaturan = () => {
  const { setColorMode } = useColorMode();
  return (
    <>
      <PageTransition pageTitle="Pengaturan">
        <PageRow>
          <ContainerQuery>
            <PlainCard>
              <Text fontSize="18px" fontWeight="600" mb="4px">
                Mode tampilan
              </Text>
              <Text fontSize="16px" fontWeight="500" color="gray">
                Pilih mode tampilan website
              </Text>

              <Box mt="16px" display="flex" gap={3}>
                <Button onClick={() => setColorMode("light")}>
                  Mode terang
                </Button>
                <Button onClick={() => setColorMode("dark")}>Mode gelap</Button>
              </Box>
            </PlainCard>
          </ContainerQuery>
        </PageRow>
      </PageTransition>
    </>
  );
};

export default Pengaturan;

import PageTransition from "@/components/PageLayout";
import ContainerQuery from "@/components/atoms/ContainerQuery";
import PageRow from "@/components/atoms/PageRow";
import MenuWrap from "@/components/atoms/MenuWrap";
import CardIconShadow from "@/components/organisms/CardIconShadow";
import { Poppins } from "next/font/google";
import { Badge, Box, Button, Text } from "@chakra-ui/react";

const poppins = Poppins({ weight: "600", subsets: ["latin"] });

const Beranda = () => {
  return (
    <>
      <PageTransition pageTitle="Hi, Sulthon">
        <PageRow>
          <ContainerQuery>
            <Box
              p="24px"
              bgGradient="linear(to-r, blue.500, cyan.500)"
              borderRadius="24px"
            >
              <Text className={poppins.className} color="white" fontSize="24px">
                Hayo
              </Text>
            </Box>
            <MenuWrap>
              <CardIconShadow
                title="Rencana Studi"
                subtitle="Dulunya FRS"
                link="/rencana-studi"
                icon="/images/icons/form.svg"
              />
            </MenuWrap>
          </ContainerQuery>
        </PageRow>
      </PageTransition>
    </>
  );
};

export default Beranda;

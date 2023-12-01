import PageTransition from "@/components/PageLayout";
import ContainerQuery from "@/components/atoms/ContainerQuery";
import PageRow from "@/components/atoms/PageRow";
import MenuWrap from "@/components/atoms/MenuWrap";
import CardIconShadow from "@/components/organisms/CardIconShadow";
import { Poppins } from "next/font/google";
import { Badge, Box, Button, Center, Text } from "@chakra-ui/react";

const poppins = Poppins({ weight: "600", subsets: ["latin"] });

const Beranda = () => {
  return (
    <>
      <PageTransition pageTitle="Hi, Fulan">
        <PageRow>
          <ContainerQuery>
            <Box
              p="80px 24px"
              bgGradient="linear(to-r, purple.500, blue.500)"
              borderRadius="24px"
            >
              <Center className={poppins.className} color="white" fontSize="32px">
                myITS Academics
              </Center>
            </Box>
            <MenuWrap>
              <CardIconShadow
                title="Rencana Studi"
                subtitle="Dulunya FRS"
                link="/rencana-studi"
                icon="/images/card-icon/form.svg"
              />
            </MenuWrap>
          </ContainerQuery>
        </PageRow>
      </PageTransition>
    </>
  );
};

export default Beranda;

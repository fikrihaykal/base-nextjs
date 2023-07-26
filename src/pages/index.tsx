import PageTransition from "@/components/PageLayout";
import ContainerQuery from "@/components/atoms/MenuWrapper";
import CardImage from "@/components/molecules/CardImage";
import CardIconShadow from "@/components/organisms/CardIconShadow";
import PageBanner from "@/components/organisms/PageBanner";
import RightMenu from "@/components/organisms/RightMenu";
import AppSettingContext from "@/providers/AppSettingProvider";
import {
  Box,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { useContext } from "react";

const Beranda = () => {
  const { colorMode } = useColorMode();
  const bgLight = "/images/app/card/background.png";
  const bgDark = "/images/app/card/backgrounddark.png";
  const cover = "/images/app/card/cover.png";
  const coverdark = "/images/app/card/coverdark.png";
  const { cardWidth, setCardWidth } = useContext(AppSettingContext);

  return (
    <>
      <PageTransition>
        <Flex className="page__row" mb="80px">
          <ContainerQuery>
            <PageBanner></PageBanner>
            <Flex className="page__mainmenu" m="0 -16px" wrap="wrap" pt="24px">
              <CardIconShadow></CardIconShadow>
              <CardIconShadow></CardIconShadow>
              <CardIconShadow></CardIconShadow>
              <CardIconShadow></CardIconShadow>
              <CardIconShadow></CardIconShadow>
              <CardIconShadow></CardIconShadow>
             
            </Flex>
          </ContainerQuery>
        </Flex>
      </PageTransition>
    </>
  );
};

export default Beranda;

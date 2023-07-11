import PageTransition from "@/components/PageLayout";
import MenuWrapper from "@/components/atoms/MenuWrapper";
import CardImage from "@/components/molecules/CardImage";
import CardIconShadow from "@/components/organisms/CardIconShadow";
import DashboardMenu from "@/components/organisms/DashboardMenu";
import PageBanner from "@/components/organisms/PageBanner";
import RightMenu from "@/components/organisms/RightMenu";
import {
  Box,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useColorMode,
} from "@chakra-ui/react";

const Berkas = () => {
  const { colorMode } = useColorMode();
  const bgLight = "/images/app/card/background.png";
  const bgDark = "/images/app/card/backgrounddark.png";
  const cover = "/images/app/card/cover.png";
  const coverdark = "/images/app/card/coverdark.png";

  return (
    <>
      <PageTransition>
        <Flex className="page__row">
          <MenuWrapper>
           
            <Flex className="page__mainmenu" m="0 -16px" wrap="wrap" pt="24px">
              <CardIconShadow></CardIconShadow>
              <CardIconShadow></CardIconShadow>
              <CardIconShadow></CardIconShadow>
              <CardIconShadow></CardIconShadow>
              <CardIconShadow></CardIconShadow>
              <CardIconShadow></CardIconShadow>
              <CardIconShadow></CardIconShadow>
            </Flex>

          </MenuWrapper>
         
        </Flex>
      </PageTransition>
    </>
  );
};

export default Berkas;

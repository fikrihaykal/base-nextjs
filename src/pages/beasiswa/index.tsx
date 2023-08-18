import PageTransition from "@/components/PageLayout";
import CardImage from "@/components/molecules/CardImage";
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
          <RightMenu />
        </Flex>
      </PageTransition>
    </>
  );
};

export default Berkas;

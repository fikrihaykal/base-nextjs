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

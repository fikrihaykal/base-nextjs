import PageTransition from "@/components/PageTransitions";
import CardImage from "@/components/molecules/CardImage";
import {
  Box,
  Heading,
  Image,
  Stack,
  Text,
  useColorMode,
} from "@chakra-ui/react";

const Beranda = () => {
  const { colorMode } = useColorMode();
  const bgLight = "/images/app/card/background.png";
  const bgDark = "/images/app/card/backgrounddark.png";
  const cover = "/images/app/card/cover.png";
  const coverdark = "/images/app/card/coverdark.png";

  return (
    <>
      <PageTransition>
        <Box
          as="section"
          id="dashboard-hero-section"
          pb={{ base: "4", md: "8" }}
        >
          <Stack
            direction={{ base: "column", sm: "row" }}
            justifyContent="space-between"
            alignItems="center"
          >
            <Stack justifyContent="center" h="250px" mb={5}>
              <Heading fontSize={48} fontWeight={600}>
                Hai,
              </Heading>
              <Heading fontSize={48} fontWeight={600}>
                Sulthon Nashir!
              </Heading>
              <Text variant="subtitle" fontSize={22}>
                Selamat datang di myITS Design System
              </Text>
            </Stack>

            <Image
              display={{ base: "none", lg: "block" }}
              src="/images/app/myITS-DesignSystem.svg"
              h="200px"
            />
          </Stack>
        </Box>
        <Box
          as="section"
          id="dashboard-hero-section"
          pb={{ base: "4", md: "8" }}
        >
          <Stack>
            <Stack
              direction={{ base: "column", sm: "row" }}
              justifyContent="space-between"
              alignItems="center"
            >
              {/* <Text fontSize="22px">All Guides</Text> */}
            </Stack>
            <Box className="grid grid-cols-12" pos="relative" gap="10px">
              <CardImage
                title="Komponen"
                description="Cara menggunakan komponen untuk membangun antar muka aplikasi."
                contentImageHover="/images/app/card/components-art.png"
                contentImage="/images/app/card/components-back.png"
                bgImageHover={colorMode == "light" ? cover : coverdark}
                bgImage={colorMode == "light" ? bgLight : bgDark}
                url="/komponen/"
                // optional props
              />
              <CardImage
                title="Style"
                description="Penggunaan gaya yang tepat pada aplikasi-aplikasi myITS."
                contentImageHover="/images/app/card/styles-art.png"
                contentImage="/images/app/card/styles-back.png"
                bgImageHover={colorMode == "light" ? cover : coverdark}
                bgImage={colorMode == "light" ? bgLight : bgDark}
                url="/style"
              />
              <CardImage
                title="Pattern"
                description="Pola-pola yang biasanya muncul pada user flow untuk mempercepat pengerjaan aplikasi."
                contentImageHover="/images/app/card/pattern-art.png"
                contentImage="/images/app/card/pattern-back.png"
                bgImageHover={colorMode == "light" ? cover : coverdark}
                bgImage={colorMode == "light" ? bgLight : bgDark}
                url="/pattern"
              />
              <CardImage
                title="Foundations"
                description="Lihat pola-pola yang biasanya muncul pada user flow untuk mempercepat pengerjaan aplikasi."
                contentImageHover="/images/app/card/found-art.png"
                contentImage="/images/app/card/found-back.png"
                bgImageHover={colorMode == "light" ? cover : coverdark}
                bgImage={colorMode == "light" ? bgLight : bgDark}
                url="/foundations"
              />
            </Box>
          </Stack>
        </Box>
      </PageTransition>
    </>
  );
};

export default Beranda;

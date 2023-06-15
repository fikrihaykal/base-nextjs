import PageTransition from "@/components/PageTransitions";
import CardImage from "@/components/molecules/CardImage";
import { Box } from "@chakra-ui/react";

const Style = () => {
  const bgLight = "/images/app/styles/orangebg.png";
  const cover = "/images/app/styles/cardcoverorange.png";
  return (
    <>
      <PageTransition>
        <Box
          className="grid grid-cols-12"
          gap="10px"
          pos="relative"
          bg="transparent"
        >
          <CardImage
            title="Elevasi"
            description="Penggunaan efek jarak, transparansi, dan bayangan untuk tampilan lebih dinamis."
            contentImage="/images/app/styles/elevation.png"
            bgImageHover={cover}
            bgImage={bgLight}
            url="/komponen/"
          />
          <CardImage
            title="Ikonografi"
            description="Penyusunan dan pembuatan ikon."
            contentImage="/images/app/styles/iconography.png"
            bgImageHover={cover}
            bgImage={bgLight}
            url="/style"
          />
          <CardImage
            title="Tifografi"
            description="Pemilihan tipe dan gaya font untuk berbagai kasus."
            contentImage="/images/app/styles/typography.png"
            bgImageHover={cover}
            bgImage={bgLight}
            url="/pattern"
          />
          <CardImage
            title="Warna"
            description="Penggunaan warna untuk pembedaan kategori, informasi, dan lain-lain."
            contentImage="/images/app/styles/color.png"
            bgImageHover={cover}
            bgImage={bgLight}
            url="/foundations"
          />
        
        </Box>
      </PageTransition>
    </>
  );
};

export default Style;

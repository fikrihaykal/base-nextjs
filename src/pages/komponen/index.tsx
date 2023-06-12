import { Box, useColorMode } from "@chakra-ui/react";
import PageTransition from "@/components/PageTransitions";
import CardImage from "@/components/molecules/CardImage";

const Komponen = () => {
  const bgLight = "/images/app/komponen/bluebg.png";
  const cover = "/images/app/komponen/bluebgfull.png";
  return (
    <>
      <PageTransition>
        <Box
          className="grid grid-cols-12 gap-2"
          pos="relative"
          bg="transparent"
        >
          <CardImage
            title="Komponen"
            description="Pelajari bagaimana cara menggunakan komponen yang tersedia untuk membangun antar muka aplikasi."
            contentImage="/images/app/komponen/button.png"
            bgImageHover={cover}
            bgImage={bgLight}
            url="/komponen/"
          />
          <CardImage
            title="Style"
            description="Cari tahu bagaimana penggunaan gaya yang tepat pada aplikasi-aplikasi myITS."
            contentImage="/images/app/komponen/badge.png"
            bgImageHover={cover}
            bgImage={bgLight}
            url="/style"
          />
          <CardImage
            title="Pattern"
            description="Lihat pola-pola yang biasanya muncul pada user flow untuk mempercepat pengerjaan aplikasi."
            contentImage="/images/app/komponen/alert.png"
            bgImageHover={cover}
            bgImage={bgLight}
            url="/pattern"
          />
          <CardImage
            title="Foundations"
            description="Lihat pola-pola yang biasanya muncul pada user flow untuk mempercepat pengerjaan aplikasi."
            contentImage="/images/app/komponen/card.png"
            bgImageHover={cover}
            bgImage={bgLight}
            url="/foundations"
          />
           <CardImage
            title="Asset"
            description="Lihat pola-pola yang biasanya muncul pada user flow untuk mempercepat pengerjaan aplikasi."
            contentImage="/images/app/komponen/selector.png"
            bgImageHover={cover}
            bgImage={bgLight}
            url="/asset"
          />
          <CardImage
            title="Komponen"
            description="Pelajari bagaimana cara menggunakan komponen yang tersedia untuk membangun antar muka aplikasi."
            contentImage="/images/app/komponen/button.png"
            bgImageHover={cover}
            bgImage={bgLight}
            url="/komponen/"
          />
          <CardImage
            title="Style"
            description="Cari tahu bagaimana penggunaan gaya yang tepat pada aplikasi-aplikasi myITS."
            contentImage="/images/app/komponen/badge.png"
            bgImageHover={cover}
            bgImage={bgLight}
            url="/style"
          />
          <CardImage
            title="Pattern"
            description="Lihat pola-pola yang biasanya muncul pada user flow untuk mempercepat pengerjaan aplikasi."
            contentImage="/images/app/komponen/alert.png"
            bgImageHover={cover}
            bgImage={bgLight}
            url="/pattern"
          />
          <CardImage
            title="Foundations"
            description="Lihat pola-pola yang biasanya muncul pada user flow untuk mempercepat pengerjaan aplikasi."
            contentImage="/images/app/komponen/card.png"
            bgImageHover={cover}
            bgImage={bgLight}
            url="/foundations"
          />
           <CardImage
            title="Asset"
            description="Lihat pola-pola yang biasanya muncul pada user flow untuk mempercepat pengerjaan aplikasi."
            contentImage="/images/app/komponen/selector.png"
            bgImageHover={cover}
            bgImage={bgLight}
            url="/asset"
          />
        </Box>
      </PageTransition>
    </>
  );
};

export default Komponen;

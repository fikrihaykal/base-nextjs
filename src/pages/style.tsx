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
          className="grid grid-cols-12 gap-2"
          pos="relative"
          bg="transparent"
        >
          <CardImage
            title="Komponen"
            description="Pelajari bagaimana cara menggunakan komponen yang tersedia untuk membangun antar muka aplikasi."
            contentImage="/images/app/styles/elevation.png"
            bgImageHover={cover}
            bgImage={bgLight}
            url="/komponen/"
          />
          <CardImage
            title="Style"
            description="Cari tahu bagaimana penggunaan gaya yang tepat pada aplikasi-aplikasi myITS."
            contentImage="/images/app/styles/iconography.png"
            bgImageHover={cover}
            bgImage={bgLight}
            url="/style"
          />
          <CardImage
            title="Pattern"
            description="Lihat pola-pola yang biasanya muncul pada user flow untuk mempercepat pengerjaan aplikasi."
            contentImage="/images/app/styles/typography.png"
            bgImageHover={cover}
            bgImage={bgLight}
            url="/pattern"
          />
          <CardImage
            title="Foundations"
            description="Lihat pola-pola yang biasanya muncul pada user flow untuk mempercepat pengerjaan aplikasi."
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

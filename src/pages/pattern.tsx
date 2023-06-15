import PageTransition from "@/components/PageTransitions";
import CardImage from "@/components/molecules/CardImage";
import { Box } from "@chakra-ui/react";

const Pattern = () => {
  const bgLight = "/images/app/patterns/purplebg.png";
  const cover = "/images/app/patterns/cardcoverpurple.png";
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
            title="Komponen"
            description="Pelajari bagaimana cara menggunakan komponen yang tersedia untuk membangun antar muka aplikasi."
            contentImage="/images/app/patterns/dashboard.png"
            bgImageHover={cover}
            bgImage={bgLight}
            url="/komponen"
          />
          <CardImage
            title="Style"
            description="Cari tahu bagaimana penggunaan gaya yang tepat pada aplikasi-aplikasi myITS."
            contentImage="/images/app/patterns/inputdata.png"
            bgImageHover={cover}
            bgImage={bgLight}
            url="/style"
          />
          <CardImage
            title="Pattern"
            description="Lihat pola-pola yang biasanya muncul pada user flow untuk mempercepat pengerjaan aplikasi."
            contentImage="/images/app/patterns/setting.png"
            bgImageHover={cover}
            bgImage={bgLight}
            url="/pattern"
          />
        </Box>
      </PageTransition>
    </>
  );
};

export default Pattern;

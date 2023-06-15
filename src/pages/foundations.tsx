import PageTransition from "@/components/PageTransitions";
import CardImage from "@/components/molecules/CardImage";
import { Box } from "@chakra-ui/react";

const Foundations = () => {
  const bgLight = "/images/app/foundations/foundbg.png";
  const cover = "/images/app/foundations/foundcover.png";
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
            contentImage="/images/app/foundations/responsiveness.png"
            bgImageHover={cover}
            bgImage={bgLight}
            url="/komponen/"
          />
          <CardImage
            title="Style"
            description="Cari tahu bagaimana penggunaan gaya yang tepat pada aplikasi-aplikasi myITS."
            contentImage="/images/app/foundations/scaling.png"
            bgImageHover={cover}
            bgImage={bgLight}
            url="/style"
          />
          <CardImage
            title="Pattern"
            description="Lihat pola-pola yang biasanya muncul pada user flow untuk mempercepat pengerjaan aplikasi."
            contentImage="/images/app/foundations/sizing.png"
            bgImageHover={cover}
            bgImage={bgLight}
            url="/pattern"
          />
        </Box>
      </PageTransition>
    </>
  );
};

export default Foundations;

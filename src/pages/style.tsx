import PageTransition from "@/components/PageTransitions";
import StyleCard from "@/components/molecules/StyleCard";
import { Box, Heading, Stack } from "@chakra-ui/react";

const Komponen = () => {
  return (
    <>
      <PageTransition>
        <Box className="grid grid-cols-12 gap-2" pos="relative">
          <StyleCard
            title="Komponen"
            description="Pelajari bagaimana cara menggunakan komponen yang tersedia untuk membangun antar muka aplikasi."
            // image="/images/app/styles/components-art.png"
            imageBackground="/images/app/styles/typography.png"
            url="/komponen/"
            className="col-span-12 md:col-span-6 xl:col-span-4"
            // optional props
          />
          <StyleCard
            title="Style"
            description="Cari tahu bagaimana penggunaan gaya yang tepat pada aplikasi-aplikasi myITS."
            // image="/images/app/styles/styles-art.png"
            imageBackground="/images/app/styles/color.png"
            url="/style"
            className="col-span-12 md:col-span-6 xl:col-span-4"
          />
          <StyleCard
            title="Pattern"
            description="Lihat pola-pola yang biasanya muncul pada user flow untuk mempercepat pengerjaan aplikasi."
            // image="/images/app/styles/pattern-art.png"
            imageBackground="/images/app/styles/iconography.png"
            url="/pattern"
            className="col-span-12 md:col-span-6 xl:col-span-4"
          />
          <StyleCard
            title="Foundations"
            description="Lihat pola-pola yang biasanya muncul pada user flow untuk mempercepat pengerjaan aplikasi."
            // image="/images/app/styles/found-art.png"
            imageBackground="/images/app/styles/elevation.png"
            url="/foundations"
            className="col-span-12 md:col-span-6 xl:col-span-4"
          />
          <StyleCard
            title="Komponen"
            description="Pelajari bagaimana cara menggunakan komponen yang tersedia untuk membangun antar muka aplikasi."
            // image="/images/app/styles/components-art.png"
            imageBackground="/images/app/styles/typography.png"
            url="/komponen/"
            className="col-span-12 md:col-span-6 xl:col-span-4"
            // optional props
          />
          <StyleCard
            title="Style"
            description="Cari tahu bagaimana penggunaan gaya yang tepat pada aplikasi-aplikasi myITS."
            // image="/images/app/styles/styles-art.png"
            imageBackground="/images/app/styles/color.png"
            url="/style"
            className="col-span-12 md:col-span-6 xl:col-span-4"
          />
          <StyleCard
            title="Pattern"
            description="Lihat pola-pola yang biasanya muncul pada user flow untuk mempercepat pengerjaan aplikasi."
            // image="/images/app/styles/pattern-art.png"
            imageBackground="/images/app/styles/iconography.png"
            url="/pattern"
            className="col-span-12 md:col-span-6 xl:col-span-4"
          />
          <StyleCard
            title="Foundations"
            description="Lihat pola-pola yang biasanya muncul pada user flow untuk mempercepat pengerjaan aplikasi."
            // image="/images/app/styles/found-art.png"
            imageBackground="/images/app/styles/elevation.png"
            url="/foundations"
            className="col-span-12 md:col-span-6 xl:col-span-4"
          />
          <StyleCard
            title="Komponen"
            description="Pelajari bagaimana cara menggunakan komponen yang tersedia untuk membangun antar muka aplikasi."
            // image="/images/app/styles/components-art.png"
            imageBackground="/images/app/styles/typography.png"
            url="/komponen/"
            className="col-span-12 md:col-span-6 xl:col-span-4"
            // optional props
          />
          <StyleCard
            title="Style"
            description="Cari tahu bagaimana penggunaan gaya yang tepat pada aplikasi-aplikasi myITS."
            // image="/images/app/styles/styles-art.png"
            imageBackground="/images/app/styles/color.png"
            url="/style"
            className="col-span-12 md:col-span-6 xl:col-span-4"
          />
          <StyleCard
            title="Pattern"
            description="Lihat pola-pola yang biasanya muncul pada user flow untuk mempercepat pengerjaan aplikasi."
            // image="/images/app/styles/pattern-art.png"
            imageBackground="/images/app/styles/iconography.png"
            url="/pattern"
            className="col-span-12 md:col-span-6 xl:col-span-4"
          />
          <StyleCard
            title="Foundations"
            description="Lihat pola-pola yang biasanya muncul pada user flow untuk mempercepat pengerjaan aplikasi."
            // image="/images/app/styles/found-art.png"
            imageBackground="/images/app/styles/elevation.png"
            url="/foundations"
            className="col-span-12 md:col-span-6 xl:col-span-4"
          />
        </Box>
      </PageTransition>
    </>
  );
};

export default Komponen;

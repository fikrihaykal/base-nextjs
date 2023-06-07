import BaseLayout from "@/components/BaseLayout";
import { Box, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import PageTransition from "@/components/PageTransitions";
import CardImage from "@/components/molecules/CardImage";

const variants = {
  hiddenHeading: { opacity: 0, x: 0, y: 0 },
  enterHeading: { opacity: 1, x: 0, y: 0 },
  exitHeading: { opacity: 0, x: 0, y: 0 },
  hiddenBody: { opacity: 0, x: 0, y: 300 },
  enterBody: { opacity: 1, x: 0, y: 0 },
  exitBody: { opacity: 0, x: 0, y: 300 },
};

const Komponen = () => {
  const page = useRouter();
  return (
    <>
      <PageTransition pageTitle="TESTTT">
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
            {/* <Heading>Style</Heading> */}
          </Stack>

          <Box className="grid grid-cols-12 gap-2 mt-5" pos="relative">
            <CardImage
              title="Komponen"
              description="Pelajari bagaimana cara menggunakan komponen yang tersedia untuk membangun antar muka aplikasi."
              image="/images/app/card/components-art.png"
              imageBackground="/images/app/card/components-back.png"
              url="/komponen/"
              className="col-span-12 md:col-span-6 xl:col-span-4"
              // optional props
            />
            <CardImage
              title="Style"
              description="Cari tahu bagaimana penggunaan gaya yang tepat pada aplikasi-aplikasi myITS."
              image="/images/app/card/styles-art.png"
              imageBackground="/images/app/card/styles-back.png"
              url="/style"
              className="col-span-12 md:col-span-6 xl:col-span-4"
            />
            <CardImage
              title="Pattern"
              description="Lihat pola-pola yang biasanya muncul pada user flow untuk mempercepat pengerjaan aplikasi."
              image="/images/app/card/pattern-art.png"
              imageBackground="/images/app/card/pattern-back.png"
              url="/pattern"
              className="col-span-12 md:col-span-6 xl:col-span-4"
            />
            <CardImage
              title="Foundations"
              description="Lihat pola-pola yang biasanya muncul pada user flow untuk mempercepat pengerjaan aplikasi."
              image="/images/app/card/found-art.png"
              imageBackground="/images/app/card/found-back.png"
              url="/foundations"
              className="col-span-12 md:col-span-6 xl:col-span-4"
            />
          </Box>
       
        </Box>
      </PageTransition>
    </>
  );
};

export default Komponen;

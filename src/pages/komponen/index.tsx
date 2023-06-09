import BaseLayout from "@/components/BaseLayout";
import { Box, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import PageTransition from "@/components/PageTransitions";
import KomponenCard from "@/components/molecules/KomponenCard";

const Komponen = () => {
  const page = useRouter();
  return (
    <>
      <PageTransition>
       
        <Box className="grid grid-cols-12 gap-2" pos="relative" bg="transparent">
          <KomponenCard
            title="Komponen"
            description="Pelajari bagaimana cara menggunakan komponen yang tersedia untuk membangun antar muka aplikasi."
            // image="/images/app/komponen/button.png"
            imageBackground="/images/app/komponen/button.png"
            url="/komponen/"
            className="col-span-12 md:col-span-6 xl:col-span-4"
          />
          <KomponenCard
            title="Style"
            description="Cari tahu bagaimana penggunaan gaya yang tepat pada aplikasi-aplikasi myITS."
            // image="/images/app/komponen/badge.png"
            imageBackground="/images/app/komponen/badge.png"
            url="/style"
            className="col-span-12 md:col-span-6 xl:col-span-4"
          />
          <KomponenCard
            title="Pattern"
            description="Lihat pola-pola yang biasanya muncul pada user flow untuk mempercepat pengerjaan aplikasi."
            // image="/images/app/komponen/bluebgfull.png"
            imageBackground="/images/app/komponen/card.png"
            url="/pattern"
            className="col-span-12 md:col-span-6 xl:col-span-4"
          />
          <KomponenCard
            title="Foundations"
            description="Lihat pola-pola yang biasanya muncul pada user flow untuk mempercepat pengerjaan aplikasi."
            // image="/images/app/komponen/bluebgfull.png"
            imageBackground="/images/app/komponen/topbar.png"
            url="/foundations"
            className="col-span-12 md:col-span-6 xl:col-span-4"
          />
          <KomponenCard
            title="Komponen"
            description="Pelajari bagaimana cara menggunakan komponen yang tersedia untuk membangun antar muka aplikasi."
            // image="/images/app/komponen/button.png"
            imageBackground="/images/app/komponen/button.png"
            url="/komponen/"
            className="col-span-12 md:col-span-6 xl:col-span-4"
          />
          <KomponenCard
            title="Style"
            description="Cari tahu bagaimana penggunaan gaya yang tepat pada aplikasi-aplikasi myITS."
            // image="/images/app/komponen/badge.png"
            imageBackground="/images/app/komponen/badge.png"
            url="/style"
            className="col-span-12 md:col-span-6 xl:col-span-4"
          />
          <KomponenCard
            title="Pattern"
            description="Lihat pola-pola yang biasanya muncul pada user flow untuk mempercepat pengerjaan aplikasi."
            // image="/images/app/komponen/bluebgfull.png"
            imageBackground="/images/app/komponen/card.png"
            url="/pattern"
            className="col-span-12 md:col-span-6 xl:col-span-4"
          />
          <KomponenCard
            title="Foundations"
            description="Lihat pola-pola yang biasanya muncul pada user flow untuk mempercepat pengerjaan aplikasi."
            // image="/images/app/komponen/bluebgfull.png"
            imageBackground="/images/app/komponen/topbar.png"
            url="/foundations"
            className="col-span-12 md:col-span-6 xl:col-span-4"
          />
          <KomponenCard
            title="Komponen"
            description="Pelajari bagaimana cara menggunakan komponen yang tersedia untuk membangun antar muka aplikasi."
            // image="/images/app/komponen/button.png"
            imageBackground="/images/app/komponen/button.png"
            url="/komponen/"
            className="col-span-12 md:col-span-6 xl:col-span-4"
          />
          <KomponenCard
            title="Style"
            description="Cari tahu bagaimana penggunaan gaya yang tepat pada aplikasi-aplikasi myITS."
            // image="/images/app/komponen/badge.png"
            imageBackground="/images/app/komponen/badge.png"
            url="/style"
            className="col-span-12 md:col-span-6 xl:col-span-4"
          />
          <KomponenCard
            title="Pattern"
            description="Lihat pola-pola yang biasanya muncul pada user flow untuk mempercepat pengerjaan aplikasi."
            // image="/images/app/komponen/bluebgfull.png"
            imageBackground="/images/app/komponen/card.png"
            url="/pattern"
            className="col-span-12 md:col-span-6 xl:col-span-4"
          />
          <KomponenCard
            title="Foundations"
            description="Lihat pola-pola yang biasanya muncul pada user flow untuk mempercepat pengerjaan aplikasi."
            // image="/images/app/komponen/bluebgfull.png"
            imageBackground="/images/app/komponen/topbar.png"
            url="/foundations"
            className="col-span-12 md:col-span-6 xl:col-span-4"
          />
          <KomponenCard
            title="Komponen"
            description="Pelajari bagaimana cara menggunakan komponen yang tersedia untuk membangun antar muka aplikasi."
            // image="/images/app/komponen/button.png"
            imageBackground="/images/app/komponen/button.png"
            url="/komponen/"
            className="col-span-12 md:col-span-6 xl:col-span-4"
          />
          <KomponenCard
            title="Style"
            description="Cari tahu bagaimana penggunaan gaya yang tepat pada aplikasi-aplikasi myITS."
            // image="/images/app/komponen/badge.png"
            imageBackground="/images/app/komponen/badge.png"
            url="/style"
            className="col-span-12 md:col-span-6 xl:col-span-4"
          />
          <KomponenCard
            title="Pattern"
            description="Lihat pola-pola yang biasanya muncul pada user flow untuk mempercepat pengerjaan aplikasi."
            // image="/images/app/komponen/bluebgfull.png"
            imageBackground="/images/app/komponen/card.png"
            url="/pattern"
            className="col-span-12 md:col-span-6 xl:col-span-4"
          />
          <KomponenCard
            title="Foundations"
            description="Lihat pola-pola yang biasanya muncul pada user flow untuk mempercepat pengerjaan aplikasi."
            // image="/images/app/komponen/bluebgfull.png"
            imageBackground="/images/app/komponen/topbar.png"
            url="/foundations"
            className="col-span-12 md:col-span-6 xl:col-span-4"
          />
        </Box>
      </PageTransition>
    </>
  );
};

export default Komponen;

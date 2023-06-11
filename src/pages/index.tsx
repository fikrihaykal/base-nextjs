import BaseLayout from "@/components/BaseLayout";
import PageTransition from "@/components/PageTransitions";
import CardImage from "@/components/molecules/CardImage";
import { Box, Button, Heading, Image, Stack, Text, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

const Beranda = () => {
  const page = useRouter();
 
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
              <Heading fontSize={48} fontWeight={600}>Hai,</Heading>
              <Heading fontSize={48} fontWeight={600}>Sulthon Nashir!</Heading>
              <Text variant="subtitle" fontSize={22}>Selamat datang di myITS Design System</Text>
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
              <Text fontSize="22px">
                All Guides
              </Text>
            </Stack>
            <Box className="grid grid-cols-12 gap-2" pos="relative">
              <CardImage
                title="Komponen"
                description="Pelajari bagaimana cara menggunakan komponen yang tersedia untuk membangun antar muka aplikasi."
                image="/images/app/card/components-art.png"
                imageBackground="/images/app/card/components-back.png"
                url="/komponen/"
                className="col-span-12 md:col-span-6 xl:col-span-6 2xl:col-span-4"
                // optional props
              />
              <CardImage
                title="Style"
                description="Cari tahu bagaimana penggunaan gaya yang tepat pada aplikasi-aplikasi myITS."
                image="/images/app/card/styles-art.png"
                imageBackground="/images/app/card/styles-back.png"
                url="/style"
                className="col-span-12 md:col-span-6 xl:col-span-6 2xl:col-span-4"
              />
              <CardImage
                title="Pattern"
                description="Lihat pola-pola yang biasanya muncul pada user flow untuk mempercepat pengerjaan aplikasi."
                image="/images/app/card/pattern-art.png"
                imageBackground="/images/app/card/pattern-back.png"
                url="/pattern"
                className="col-span-12 md:col-span-6 xl:col-span-6 2xl:col-span-4"
              />
              <CardImage
                title="Foundations"
                description="Lihat pola-pola yang biasanya muncul pada user flow untuk mempercepat pengerjaan aplikasi."
                image="/images/app/card/found-art.png"
                imageBackground="/images/app/card/found-back.png"
                url="/foundations"
                className="col-span-12 md:col-span-6 xl:col-span-6 2xl:col-span-4"
              />
            </Box>
          </Stack>
        </Box>
      </PageTransition>
    </>
  );
};

export default Beranda;

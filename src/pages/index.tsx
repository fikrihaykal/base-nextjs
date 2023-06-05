import BaseLayout from "@/components/BaseLayout";
import CardImage from "@/components/molecules/CardImage";
import { Box, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

const variants = {
  hidden: { opacity: 0, x: 0, y: 100 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};

const Beranda = () => {
  const page = useRouter();
  return (
    <>
      <BaseLayout>
        <motion.main
          key={page.route}
          variants={variants} // Pass the variant object into Framer Motion
          initial="hidden" // Set the initial state to variants.hidden
          animate="enter" // Animated state to variants.enter
          exit="exit" // Exit state (used later) to variants.exit
          transition={{ type: "linear", duration: 0.2, delay: 0.3 }} // Set the transition to linear
        >
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
              {/* <motion.main
              variants={variants} // Pass the variant object into Framer Motion
              initial="hidden" // Set the initial state to variants.hidden
              animate="enter" // Animated state to variants.enter
              exit="exit" // Exit state (used later) to variants.exit
              transition={{ type: "linear", duration: 0.2 }} // Set the transition to linear
            > */}
              <Stack justifyContent="center" h="250px">
                <Heading>Hai,</Heading>
                <Heading>Sulthon Nashir!</Heading>
                <Text>Selamat datang di myITS Design System</Text>
              </Stack>
              {/* </motion.main> */}
              <Image
                display={{ base: "none", lg: "block" }}
                src="images/app/myITS-DesignSystem.svg"
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
                <Text fontWeight="semibold" fontSize="24px">
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
            </Stack>
          </Box>
        </motion.main>
      </BaseLayout>
    </>
  );
};

export default Beranda;

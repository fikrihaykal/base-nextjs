import PageTransition from "@/components/PageTransitions";
import StyleCard from "@/components/molecules/StyleCard";
import { Box, Heading, Stack } from "@chakra-ui/react";

const Style = () => {
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
        </Box>
      </PageTransition>
    </>
  );
};

export default Style;

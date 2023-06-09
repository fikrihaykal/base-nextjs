import PageTransition from "@/components/PageTransitions";
import PatternCard from "@/components/molecules/PatternCard";
import { Box, Heading, Stack } from "@chakra-ui/react";

const Pattern = () => {
  return (
    <>
      <PageTransition>
        <Box className="grid grid-cols-12 gap-2" pos="relative">
          <PatternCard
            title="Komponen"
            description="Pelajari bagaimana cara menggunakan komponen yang tersedia untuk membangun antar muka aplikasi."
            // image="/images/app/styles/components-art.png"
            imageBackground="/images/app/patterns/dashboard.png"
            url="/komponen/"
            className="col-span-12 md:col-span-6 xl:col-span-4"
            // optional props
          />
		   <PatternCard
            title="Komponen"
            description="Pelajari bagaimana cara menggunakan komponen yang tersedia untuk membangun antar muka aplikasi."
            // image="/images/app/styles/components-art.png"
            imageBackground="/images/app/patterns/inputdata.png"
            url="/komponen/"
            className="col-span-12 md:col-span-6 xl:col-span-4"
            // optional props
          />
		   <PatternCard
            title="Komponen"
            description="Pelajari bagaimana cara menggunakan komponen yang tersedia untuk membangun antar muka aplikasi."
            // image="/images/app/styles/components-art.png"
            imageBackground="/images/app/patterns/setting.png"
            url="/komponen/"
            className="col-span-12 md:col-span-6 xl:col-span-4"
            // optional props
          />
         
          
        </Box>
      </PageTransition>
    </>
  );
};

export default Pattern;

import PageTransition from "@/components/PageTransitions";
import FoundationCard from "@/components/molecules/FoundationCard";
import { Box } from "@chakra-ui/react";

const Foundations = () => {
  return (
    <>
      <PageTransition>
        <Box className="grid grid-cols-12 gap-2" pos="relative">
          <FoundationCard
            title="Komponen"
            description="Pelajari bagaimana cara menggunakan komponen yang tersedia untuk membangun antar muka aplikasi."
            // image="/images/app/styles/components-art.png"
            imageBackground="/images/app/foundations/responsiveness.png"
            url="/komponen/"
            className="col-span-12 md:col-span-6 xl:col-span-4"
            // optional props
          />
		   <FoundationCard
            title="Komponen"
            description="Pelajari bagaimana cara menggunakan komponen yang tersedia untuk membangun antar muka aplikasi."
            // image="/images/app/styles/components-art.png"
            imageBackground="/images/app/foundations/scaling.png"
            url="/komponen/"
            className="col-span-12 md:col-span-6 xl:col-span-4"
            // optional props
          />
		   <FoundationCard
            title="Komponen"
            description="Pelajari bagaimana cara menggunakan komponen yang tersedia untuk membangun antar muka aplikasi."
            // image="/images/app/styles/components-art.png"
            imageBackground="/images/app/foundations/sizing.png"
            url="/komponen/"
            className="col-span-12 md:col-span-6 xl:col-span-4"
            // optional props
          />
         
          
        </Box>
      </PageTransition>
    </>
  );
};

export default Foundations;

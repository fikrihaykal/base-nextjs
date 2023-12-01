import PageTransition from "@/components/PageLayout";
import PageCol from "@/components/atoms/PageCol";
import PageRow from "@/components/atoms/PageRow";
import Wrapper from "@/components/atoms/Wrapper";
import CardIconShadow from "@/components/organisms/CardIconShadow";
import PageBanner from "@/components/organisms/PageBanner";
import { lostItems } from "@/data/dummy";
import { Flex, Text } from "@chakra-ui/react";
import { useState } from "react";

const Kehilangan = () => {
  const [globalFilter, setGlobalFilter] = useState("");

  return (
    <>
      <PageTransition pageTitle="Kehilangan">
        <PageRow>
          <PageCol>
            <PageBanner />
            <Flex
              w="100%"
              justifyContent="space-between"
              alignItems="center"
              mt="64px"
            >
              <Text fontSize="24px" fontWeight="600" letterSpacing="-0.2px">
                Laporan kehilangan
              </Text>
            </Flex>

            <Wrapper pt="0px">
              {lostItems.map((Val, id) => {
                return (
                  <CardIconShadow
                    title={Val.title}
                    subtitle={Val.subtitle}
                    icon={Val.icon}
                    link={Val.link}
                    type={Val.type}
                    location={Val.location}
                    status={Val.status}
                  />
                );
              })}
            </Wrapper>
          </PageCol>
          {/* <PageColWidget><></></PageColWidget> */}
        </PageRow>
      </PageTransition>
    </>
  );
};

export default Kehilangan;

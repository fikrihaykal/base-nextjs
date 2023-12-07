import PageTransition from "@/components/PageLayout";
import ContainerQuery from "@/components/atoms/ContainerQuery";
import PageRow from "@/components/atoms/PageRow";
import { Box, Button, Radio, RadioGroup, useColorMode } from "@chakra-ui/react";
import PlainCard from "@/components/organisms/Cards/Card";
import React from "react";
import { MyITSLogo } from "@/components/atoms/IconsMade";
const Test = () => {
  const [color, setColor] = React.useState("orange");
  const { colorMode } = useColorMode();
  return (
    <>
      <PageTransition pageTitle="Test">
        <PageRow>
          <ContainerQuery>
            <PlainCard>
              <Button colorScheme={color}>Test</Button>
              <RadioGroup
                mt="16px"
                value={color}
                onChange={(newColor) => setColor(newColor)}
                display="inline-flex"
                flexWrap="wrap"
                gap={4}
                w="full"
              >
                <Radio value="orange" colorScheme="orange">orange</Radio>
                <Radio value="blue" colorScheme="blue">blue</Radio>
                <Radio value="green" colorScheme="green">green</Radio>
                <Radio value="purple" colorScheme="purple">purple</Radio>
                <Radio value="pink" colorScheme="pink">pink</Radio>
                <Radio value="cyan" colorScheme="cyan">cyan</Radio>
                <Radio value="yellow" colorScheme="yellow">yellow</Radio>
              </RadioGroup>
              <Box maxW="256px">
                <MyITSLogo fontSize="6em" color={colorMode === "light" ? color : "white"}/>
              </Box>
            </PlainCard>
          </ContainerQuery>
        </PageRow>
      </PageTransition>
    </>
  );
};

export default Test;

import { Box, Button, Flex, Text, useColorMode } from "@chakra-ui/react";
import { useState } from "react";
import { Wizard, useWizard } from "react-use-wizard";

const WizardHeader = () => {
 

  return (
    <>
      <Flex w="100%" justifyContent="space-between" mb="16px">
        <Text color="#808080" fontSize="14px">
          {/* Langkah {activeStep + 1} dari {stepCount} */}
        </Text>
      </Flex>
    </>
  );
};

export default WizardHeader;

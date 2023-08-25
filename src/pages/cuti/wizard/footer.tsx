import { Box, Button, Flex, Text, useColorMode } from "@chakra-ui/react";
import { useState } from "react";
import { Wizard, useWizard } from "react-use-wizard";

const WizardFooter = () => {
  const {
    isLoading,
    isLastStep,
    isFirstStep,
    activeStep,
    stepCount,
    previousStep,
    nextStep,
    goToStep,
    handleStep,
  } = useWizard();
  const { colorMode } = useColorMode();

  return (
    <>
      <Flex w="100%" justifyContent="space-between">
        <Button
          className="button__more"
          bg="#1b1b1b"
          color="#fff"
          minW="166px"
          h="56px"
          p="0 20px"
          borderRadius="16px/16px"
          fontSize="14px"
          lineHeight="1.42857"
          fontWeight="700"
          transition="all .25s"
          _hover={{
            background: !isFirstStep
              ? colorMode == "light"
                ? "#008fff"
                : "#0071ca"
              : "#1b1b1b",
          }}
          onClick={() => previousStep()}
          isDisabled={isFirstStep ? true : false}
        >
          Sebelumnya
        </Button>
        <Button
          className="button__more"
          bg="#1b1b1b"
          color="#fff"
          minW="166px"
          h="56px"
          p="0 20px"
          borderRadius="16px/16px"
          fontSize="14px"
          lineHeight="1.42857"
          fontWeight="700"
          transition="all .25s"
          _hover={{
            background: colorMode == "light" ? "#008fff" : "#0071ca",
          }}
          onClick={() => nextStep()}
          isDisabled={isLastStep ? true : false}
        >
          Selanjutnya
        </Button>
      </Flex>
    </>
  );
};

export default WizardFooter;

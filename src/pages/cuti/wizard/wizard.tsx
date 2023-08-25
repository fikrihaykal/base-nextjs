import { Box, Button, Flex, Text, useColorMode } from "@chakra-ui/react";
import { useState } from "react";
import { Wizard, useWizard } from "react-use-wizard";
import WizardHeader from "./header";
import WizardFooter from "./footer";
import Step1 from "./step1";
import Step2 from "./step2";

const WizardWidget = () => {
  return (
    <>
      <Wizard header={<WizardHeader />}>
        <Step1 />
        <Step2 />
      </Wizard>
    </>
  );
};

export default WizardWidget;

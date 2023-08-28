import { Box, Button, Flex, Text, useColorMode } from "@chakra-ui/react";
import { createContext, useState } from "react";
import { Wizard, useWizard } from "react-use-wizard";
import WizardHeader from "./header";
import WizardFooter from "./footer";
import Step1 from "./step1";
import Step2 from "./step2";
import { WizardContextProvider } from "../../../providers/WizardProvider";

const WizardWidget = () => {
  return (
    <>
      <WizardContextProvider>
        <Wizard header={<WizardHeader />}>
          <Step1 />
          <Step2 />
        </Wizard>
      </WizardContextProvider>
    </>
  );
};

export default WizardWidget;

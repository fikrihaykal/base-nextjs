import { DarkButton } from "@/components/atoms/Buttons/DarkButton";
import InputFormik from "@/components/molecules/InputField";
import NameContext, { NameContextProvider } from "@/providers/FormContext";
import { Flex, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { Wizard, useWizard } from "react-use-wizard";

const WizardForm = () => {
  return (
    <NameContextProvider>
      <Wizard>
        <Step1 />
        <Step2 />
      </Wizard>
    </NameContextProvider>
  );
};

export default WizardForm;

const Step1 = () => {
  const { previousStep, nextStep } = useWizard();
  const { setName } = useContext(NameContext);
  return (
    <>
      <Flex w="100%" flexDir="column" h="400px" gap="16px" p="36px">
        <Flex
          w="100%"
          h="56px"
          bg="#aadaff"
          borderRadius="50px"
          justifyContent="center"
          alignItems="center"
          cursor="pointer"
          onClick={() => {
            setName("Sulthon");
          }}
        >
          <Text>Sulthon</Text>
        </Flex>
        <Flex
          w="100%"
          h="56px"
          bg="#aadaff"
          borderRadius="50px"
          id="Fikri"
          justifyContent="center"
          alignItems="center"
          cursor="pointer"
          onClick={() => {
            setName("Fikri");
          }}
        >
          <Text>Fikri</Text>
        </Flex>
      </Flex>
      <Flex w="100%" justifyContent="space-between" alignItems="center">
        <DarkButton onClick={() => previousStep()}>Sebelumnya</DarkButton>
        <DarkButton onClick={() => nextStep()}>Selanjutnya</DarkButton>
      </Flex>
    </>
  );
};

const Step2 = () => {
  const { previousStep, nextStep } = useWizard();
  const { name } = useContext(NameContext);
  return (
    <>
      <Flex w="100%" h="400px">
        <Text>{name}</Text>
      </Flex>
      <Flex w="100%" justifyContent="space-between" alignItems="center">
        <DarkButton onClick={() => previousStep()}>Sebelumnya</DarkButton>
        <DarkButton onClick={() => nextStep()}>Selanjutnya</DarkButton>
      </Flex>
    </>
  );
};

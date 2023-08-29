import {
  Box,
  BoxProps,
  Button,
  Flex,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { useWizard } from "react-use-wizard";
import WizardContext from "../../../providers/WizardProvider";

interface MultistepCardInterface extends BoxProps {
  id: string;
  title: string;
  subtitle: string;
  choice?: string;
  boxProps?: BoxProps;
  disabled?: boolean;
}

const MultistepCard = ({
  id,
  title,
  subtitle,
  choice,
  disabled,
  ...boxProps
}: MultistepCardInterface) => {

  const { colorMode } = useColorMode()

  return (
    <>
      <Box
        w="100%"
        id={id}
        flex="1"
        borderRadius="16px"
        bg={colorMode == "light" ? disabled ? "#f4f4f4" : "white" : disabled ? "#333333" : "#222222"}
        boxShadow={
          disabled
            ? "none"
            : choice == id
            ? "inset 0 0 0 2.6px #008ffa"
            : colorMode == "light" ? "inset 0 0 0 1.6px #e4e4e4": "inset 0 0 0 1.6px #333333"
        }
        _hover={{
          boxShadow: disabled
            ? "none"
            : choice == id
            ? colorMode == "light" ? "inset 0 0 0 2.6px #008ffa" : "inset 0 0 0 2.6px #0071ca"
            : colorMode == "light" ? "inset 0 0 0 1.6px #008ffa" : "inset 0 0 0 1.6px #0071ca",
        }}
        transition="all .18s"
        cursor={disabled ? "not-allowed" : "pointer"}
        p="24px"
        // pointerEvents={disabled ? "none" : "all"}
        {...boxProps}
        onClick={disabled ? null : boxProps.onClick}
      >
        <Flex alignItems="center" h="fit-content">
          <Box>
            <Text
              fontWeight="500"
              fontSize="16px"
              mb="2px"
              color={disabled ? "#b4b4b4" : "unset"}
            >
              {title}
            </Text>
            <Text
              fontWeight="400"
              fontSize="14px"
              color={!disabled ? "#808080" : "#b4b4b4"}
              lineHeight="1.35"
            >
              {subtitle}
            </Text>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

const Step1 = () => {
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
  const { cutiType, setCutiType } = useContext(WizardContext);
  const { colorMode } = useColorMode();
  const handleSubmit = (idVal: string) => {
    cutiType == idVal ? setCutiType("") : setCutiType(idVal);
  };

  return (
    <>
      <Box w="100%" h="100%">
        <Text fontWeight="500" fontSize="26px" lineHeight="1.2">
          Pilih jenis cuti anda
        </Text>
        <Text fontWeight="400" fontSize="14px" color="#808080">
          Pilih salah satu jenis cuti dibawah sesuai dengan yang anda butuhkan
        </Text>
        <Flex w="100%" gap="24px" mt="32px">
          <MultistepCard
            id="tahunan"
            title="Cuti tahunan"
            subtitle="Cuti tahunan anda tersisa 8 hari dari 14 hari"
            onClick={(e) => {
              handleSubmit(e.currentTarget.id);
            }}
            choice={cutiType}
          />
          <MultistepCard
            id="besar"
            title="Cuti besar"
            subtitle="Anda dapat mengajukan cuti besar dengan syarat tertentu"
            onClick={(e) => {
              handleSubmit(e.currentTarget.id);
            }}
            choice={cutiType}
          />
        </Flex>
        <Flex w="100%" gap="24px" mt="24px">
          <MultistepCard
            id="sakit"
            title="Cuti sakit"
            subtitle="Wajib menyertakan dokumen bukti sakit yang valid"
            onClick={(e) => {
              handleSubmit(e.currentTarget.id);
            }}
            choice={cutiType}
          />
          <MultistepCard
            id="melahirkan"
            title="Cuti melahirkan"
            subtitle="Anda tidak berhak mengambil cuti melahirkan"
            onClick={(e) => {
              handleSubmit(e.currentTarget.id);
            }}
            disabled={true}
            choice={cutiType}
          />
        </Flex>
        <Flex w="100%" gap="24px" mt="24px" mb="36px">
          <MultistepCard
            id="bersama"
            title="Cuti bersama"
            subtitle="Cuti bersama sesuai dengan cuti pada kalender tahunan"
            onClick={(e) => {
              handleSubmit(e.currentTarget.id);
            }}
            choice={cutiType}
          />
          <MultistepCard
            id="alasanpenting"
            title="Cuti alasan penting"
            subtitle="Cuti alasan penting yang telah disetujui oleh AL"
            onClick={(e) => {
              handleSubmit(e.currentTarget.id);
            }}
            choice={cutiType}
          />
        </Flex>
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
              background:
                cutiType !== ""
                  ? isLastStep
                    ? "#1b1b1b"
                    : colorMode == "light"
                    ? "#008fff"
                    : "#0071ca"
                  : "#1b1b1b",
            }}
            onClick={() => nextStep()}
            isDisabled={cutiType !== "" ? (isLastStep ? true : false) : true}
          >
            Selanjutnya
          </Button>
        </Flex>
      </Box>
    </>
  );
};

export default Step1;

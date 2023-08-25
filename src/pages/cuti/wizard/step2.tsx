import { Box, Button, Flex, Text, useColorMode } from "@chakra-ui/react";
import { useState } from "react";
import { Wizard, useWizard } from "react-use-wizard";

const Step2 = () => {
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
  
    // Attach an optional handler
    handleStep(() => {
      // alert("Going to step 3");
    });
  
    return (
      <>
        <Box w="100%" h="100%" mb="36px">
          <Text fontWeight="500" fontSize="26px" lineHeight="1.2" mb="4px">
            Isi data untuk ajuan cuti anda
          </Text>
          <Text fontWeight="400" fontSize="14px" color="#808080">
            Pastikan data yang anda isikan benar serta isikan data selengkap
            mungkin, untuk mempermudah penyetujuan ajuan cuti anda.
          </Text>
          <Flex w="100%" gap="24px" mt="32px">
            <Box
              w="100%"
              h="56px"
              borderRadius="16px"
              boxShadow="inset 0 0 0 1.6px #e3e6ec"
              _hover={{
                boxShadow: "inset 0 0 0 1.6px #008ffa",
              }}
              transition="all .18s"
              cursor="pointer"
            ></Box>
          </Flex>
          <Flex w="100%" gap="24px" mt="24px">
            <Box
              w="100%"
              h="56px"
              borderRadius="16px"
              boxShadow="inset 0 0 0 1.6px #e3e6ec"
              _hover={{
                boxShadow: "inset 0 0 0 1.6px #008ffa",
              }}
              transition="all .18s"
              cursor="pointer"
            ></Box>
            <Box
              w="100%"
              h="56px"
              borderRadius="16px"
              boxShadow="inset 0 0 0 1.6px #e3e6ec"
              _hover={{
                boxShadow: "inset 0 0 0 1.6px #008ffa",
              }}
              transition="all .18s"
              cursor="pointer"
            ></Box>
          </Flex>
          <Flex w="100%" gap="24px" mt="24px">
            <Box
              w="100%"
              h="120px"
              borderRadius="16px"
              boxShadow="inset 0 0 0 1.6px #e3e6ec"
              _hover={{
                boxShadow: "inset 0 0 0 1.6px #008ffa",
              }}
              transition="all .18s"
              cursor="pointer"
            ></Box>
            <Box
              w="100%"
              h="120px"
              borderRadius="16px"
              boxShadow="inset 0 0 0 1.6px #e3e6ec"
              _hover={{
                boxShadow: "inset 0 0 0 1.6px #008ffa",
              }}
              transition="all .18s"
              cursor="pointer"
            ></Box>
          </Flex>
        </Box>
      </>
    );
  };

  export default Step2;
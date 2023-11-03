import {
  Box,
  Center,
  Flex,
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  Text,
  useColorMode,
  useSteps,
} from "@chakra-ui/react";
import PlainCard from "@/components/organisms/Cards/Card";
import {
  CalendarOutlineIconMade,
  CheckMarkOutlineIconMade,
  CloseOutlineIconMade,
} from "@/components/atoms/IconsMade";
import { IoCalendar, IoEllipse } from "react-icons/io5";

const steps = [
  { title: "Pengisian", description: "30 Jan - 3 Feb 2023" },
  { title: "Perubahan", description: "4 Feb - 24 Feb 2023" },
  { title: "Drop", description: "25 Feb - 14 Apr 2023" },
];

const CardStatus = () => {
  const { colorMode } = useColorMode();
  const { activeStep } = useSteps({
    index: 2,
    count: steps.length,
  });

  return (
    <>
      {/* <PlainCard>
        <Box display={{ base: "none", a: "block" }}>
          <Stepper
            index={activeStep}
            colorScheme="blue"
            size="md"
            px={{ base: "0px", d: "24px", x: "36px" }}
          >
            {steps.map((step, index) => (
              <Step key={index}>
                <Box display="block" alignItems="center">
                  <Center mb="8px">
                    <StepIndicator>
                      <StepStatus
                        complete={<CheckMarkOutlineIconMade/>}
                        incomplete={<StepNumber />}
                        active={<IoEllipse />}
                      />
                    </StepIndicator>
                  </Center>

                  <Box flexShrink="0">
                    <StepTitle>
                      <Text fontWeight="600" textAlign="center">
                        {step.title}
                      </Text>
                    </StepTitle>
                    <StepDescription>
                      <Text fontWeight="500" textAlign="center">
                        {step.description}
                      </Text>
                    </StepDescription>
                  </Box>
                </Box>

                <StepSeparator />
              </Step>
            ))}
          </Stepper>
        </Box>
        <Box display={{ base: "block", a: "none" }}>
          <Stepper
            index={activeStep}
            colorScheme="blue"
            orientation="vertical"
            height="200px"
            gap="0"
          >
            {steps.map((step, index) => (
              <Step key={index}>
                <StepIndicator>
                  <StepStatus
                    complete={<StepIcon />}
                    incomplete={<StepNumber />}
                    active={<IoEllipse />}
                  />
                </StepIndicator>

                <Box flexShrink="0">
                  <StepTitle>{step.title}</StepTitle>
                  <StepDescription>{step.description}</StepDescription>
                </Box>

                <StepSeparator />
              </Step>
            ))}
          </Stepper>
        </Box>
      </PlainCard> */}
      <PlainCard>
        <Box display="flex" justifyContent="start" alignItems="center">
          <Box
            w={{ base: "32px", s: "48px" }}
            h={{ base: "32px", s: "48px" }}
            mr="16px"
          >
            <Flex
              w={{ base: "32px", s: "48px" }}
              h={{ base: "32px", s: "48px" }}
              justifyContent="center"
              alignItems="center"
              bgGradient="linear(to-tr, red.500, orange.400)"
              borderRadius="full"
            >
              <CalendarOutlineIconMade
                fontSize={{ base: "16px", s: "24px" }}
                color="white"
              />
            </Flex>
          </Box>
          <Box>
            <Text fontWeight="600">Di Luar Masa FRS</Text>
            <Text
              fontSize="14px"
              fontWeight="500"
              color={colorMode == "light" ? "blackAlpha.700" : "whiteAlpha.700"}
              mt="4px"
            >
              Masa pengelolaan rencana studi untuk semester ini sudah terlewat
            </Text>
          </Box>
        </Box>
      </PlainCard>
    </>
  );
};

export default CardStatus;

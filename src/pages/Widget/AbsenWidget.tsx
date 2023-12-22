import { PrimaryButton } from "@/components/atoms/Buttons/PrimaryButton";
import { SecondaryButton } from "@/components/atoms/Buttons/SecondaryButton";
import PlainCard from "@/components/organisms/Cards/Card";
import { Box, Flex, Text } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
const AbsenChart = dynamic(() => import("@/components/organisms/AbsenChart"), {
  ssr: false,
});

const AbsenWidget = () => {
  const [dur, setDur] = useState(0);

  // state to check stopwatch running or not
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId: NodeJS.Timer;
    if (isRunning) {
      // setting time from 0 to 1 every 10 milisecond using javascript setInterval method
      intervalId = setInterval(() => setDur(dur + 1), 10);
    }
    return () => clearInterval(intervalId);
  }, [isRunning, dur]);

  // Hours calculation
  const hours = Math.floor(dur / 360000);

  // Minutes calculation
  const minutes = Math.floor((dur % 360000) / 6000);

  // Seconds calculation
  const seconds = Math.floor((dur % 6000) / 100);

  // Milliseconds calculation
  const milliseconds = dur % 100;

  const reset = () => {
    setDur(0);
  };

  // Method to start and stop timer
  const startDur = () => {
    setIsRunning(true);
  };

  const stopDur = () => {
    setIsRunning(false);
  };

  const [time, setTime] = useState({
    minutes: new Date().getMinutes(),
    hours: new Date().getHours(),
    seconds: new Date().getSeconds(),
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      const date = new Date();
      setTime({
        minutes: date.getMinutes(),
        hours: date.getHours(),
        seconds: date.getSeconds(),
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const convertToTwoDigit = (number: number) => {
    return number.toLocaleString("en-US", {
      minimumIntegerDigits: 2,
    });
  };

  return (
    <>
      <PlainCard mb="48px">
        <Flex justifyContent="center" alignItems="center">
          <Text
            fontSize="36px"
            fontWeight="550"
            variant="title"
            suppressHydrationWarning
          >
            {hours.toString().padStart(2, "0")}:{minutes.toString().padStart(2, "0")}:
            {seconds.toString().padStart(2, "0")}
          </Text>
        </Flex>

        <Flex
          w="100%"
          // h="128px"
          py="32px"
          borderRadius="10px"
          justifyContent="space-between"
          gap={{ base: "0px", t: "36px" }}
          wrap={{ base: "wrap", t: "nowrap" }}
        >
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            w="100%"
          >
            <Text fontWeight="500" fontSize="14px" color="#9a9a9f">
              Waktu mulai kerja
            </Text>
            <Text
              fontWeight="600"
              fontSize={{ base: "20px", t: "30px" }}
              variant="title"
              w="100%"
              textAlign="center"
              mb="10px"
              suppressHydrationWarning
            >
              07:28:30
            </Text>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            w="100%"
          >
            <Text fontWeight="500" fontSize="14px" color="#9a9a9f">
              Waktu selesai kerja
            </Text>
            <Text
              fontWeight="600"
              fontSize={{ base: "20px", t: "30px" }}
              variant="title"
              w="100%"
              textAlign="center"
              mb="10px"
              suppressHydrationWarning
            >
              {/* 04:05:21 */}-
            </Text>
          </Box>
          {/* <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            w="100%"
          >
            <Text fontWeight="500" fontSize="14px" color="#9a9a9f">
              Total lama kerja
            </Text>
            <Text
              fontWeight="600"
              fontSize={{ base: "20px", t: "28px" }}
              variant="title"
              w="100%"
              textAlign="center"
              mb="10px"
              suppressHydrationWarning
            >
              8 jam 37 menit
            </Text>
          </Box> */}
        </Flex>

        <Flex gap="16px" wrap={{ base: "wrap", m: "nowrap" }}>
          <PrimaryButton w={{ base: "100%", m: "50%" }} onClick={startDur}>
            Mulai Kerja
          </PrimaryButton>
          <SecondaryButton w={{ base: "100%", m: "50%" }} onClick={stopDur}>
            Akhiri Kerja
          </SecondaryButton>
        </Flex>
      </PlainCard>
    </>
  );
};

export default AbsenWidget;

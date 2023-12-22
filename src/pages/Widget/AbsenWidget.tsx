import { PrimaryButton } from "@/components/atoms/Buttons/PrimaryButton";
import { SecondaryButton } from "@/components/atoms/Buttons/SecondaryButton";
import PlainCard from "@/components/organisms/Cards/Card";
import { Box, Flex, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const AbsenWidget = () => {
  const [startTime, setStartTime] = useState<number>(
    new Date("2023-12-22T07:20:00+07:00").getTime()
  );
  const [endTime, setEndTime] = useState<number>(new Date().getTime());
  const [diffS, setDiffS] = useState<number>(0);

  useEffect(() => {
    setDiffS(endTime - startTime);
    const interval = setInterval(() => {
      setDiffS(endTime - startTime);
    }, 60000);

    return () => clearInterval(interval);
  });

  const [isRunning, setIsRunning] = useState(true);

  const hours = Math.floor(diffS / 1000 / 60 / 60);
  const minutes = Math.floor((diffS / 1000 / 60 / 60 - hours) * 60);
  const seconds = Math.floor((diffS % 6000) / 100);

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
            {hours + " Jam " + minutes + " Menit"}
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
          <PrimaryButton w={{ base: "100%", m: "50%" }}>
            Mulai Kerja
          </PrimaryButton>
          <SecondaryButton
            w={{ base: "100%", m: "50%" }}
            onClick={() => setEndTime(new Date().getTime())}
          >
            Akhiri Kerja
          </SecondaryButton>
        </Flex>
      </PlainCard>
    </>
  );
};

export default AbsenWidget;

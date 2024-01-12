import { MdPrimaryButton } from "@/components/atoms/Buttons/MdPrimaryButton";
import { MdSecondaryButton } from "@/components/atoms/Buttons/MdSecondaryButton";
import { PrimaryButton } from "@/components/atoms/Buttons/PrimaryButton";
import { SecondaryButton } from "@/components/atoms/Buttons/SecondaryButton";
import PlainCard from "@/components/organisms/Cards/Card";
import ModalAnimated from "@/components/organisms/Modal";
import AppSettingContext from "@/providers/AppSettingProvider";
import { clockInPegawai } from "@/services/beranda/clock_in_pegawai";
import { fetchDataBeranda } from "@/services/beranda/fetcher_data_beranda";
import { Box, Flex, Text, useDisclosure } from "@chakra-ui/react";
import { useContext } from "react";
import useSWR, { mutate } from "swr";

const AbsenWidget = () => {
  const {
    startTime,
    setStartTime,
    endTime,
    setEndTime,
    setRunning,
    hours,
    minutes,
  } = useContext(AppSettingContext);

  const endWorkDisclouse = useDisclosure();

  async function handleStart() {
    try {
      // get world time
      const response = await fetch("https://worldtimeapi.org/api/ip");
      const data = await response.json();
      const utc_datetime = new Date(data.utc_datetime);
      // set world time
      setStartTime(utc_datetime);
      setRunning(true);
      // clock in
      clockInPegawai({ tanggal: startTime, waktuMasuk: startTime }).then(
        (r) => {
          mutate("data_beranda");
        }
      );
    } catch (error) {
      setStartTime(new Date());
      setRunning(true);
    }
  }

  async function handleEnd() {
    try {
      const response = await fetch("https://worldtimeapi.org/api/ip");
      const data = await response.json();
      const utc_datetime = new Date(data.utc_datetime);
      setEndTime(utc_datetime);
      setRunning(false);
      endWorkDisclouse.onClose();
    } catch (error) {
      setEndTime(new Date());
      setRunning(false);
      endWorkDisclouse.onClose();
    }
  }

  const startHour = startTime?.getHours();
  const startMinutes = startTime?.getMinutes();
  const startSeconds = startTime?.getSeconds();
  const endHour = endTime?.getHours();
  const endMinutes = endTime?.getMinutes();
  const endSeconds = endTime?.getSeconds();

  const convertToTwoDigit = (number: number | undefined) => {
    return number?.toLocaleString("en-US", {
      minimumIntegerDigits: 2,
    });
  };

  return (
    <>
      <PlainCard mb="48px">
        <Flex justifyContent="center" alignItems="center">
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            w="100%"
          >
            <Text fontWeight="500" fontSize="14px" color="#9a9a9f">
              {endTime == undefined ? "Durasi kerja" : "Total durasi kerja"}
            </Text>
            <Text
              fontSize={{ base: "28px", t: "36px" }}
              fontWeight="550"
              variant="title"
              suppressHydrationWarning
            >
              {startTime == undefined
                ? "Belum mulai kerja"
                : endTime !== undefined
                ? hours + " Jam " + minutes + " Menit"
                : hours + " Jam " + minutes + " Menit"}
            </Text>
          </Box>
        </Flex>

        <Flex
          w="100%"
          py={{ base: "16px", t: "32px" }}
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
              fontSize={{ base: "28px", t: "30px" }}
              variant="title"
              w="100%"
              textAlign="center"
              mb="10px"
              suppressHydrationWarning
            >
              {startTime == undefined
                ? "-"
                : convertToTwoDigit(startHour) +
                  ":" +
                  convertToTwoDigit(startMinutes) +
                  ":" +
                  convertToTwoDigit(startSeconds)}
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
              fontSize={{ base: "28px", t: "30px" }}
              variant="title"
              w="100%"
              textAlign="center"
              mb="10px"
              suppressHydrationWarning
            >
              {endTime == undefined
                ? "-"
                : convertToTwoDigit(endHour) +
                  ":" +
                  convertToTwoDigit(endMinutes) +
                  ":" +
                  convertToTwoDigit(endSeconds)}
            </Text>
          </Box>
        </Flex>

        <Flex gap="16px" wrap={{ base: "wrap", m: "nowrap" }}>
          <PrimaryButton
            bg={startTime == undefined ? "#008fff" : "#008fff30"}
            color={startTime == undefined ? "white" : "#008fff"}
            _hover={{
              backgroundColor: startTime == undefined ? "#0072ca" : "#008fff30",
            }}
            isDisabled={startTime == undefined ? false : true}
            w={{ base: "100%", m: "50%" }}
            onClick={handleStart}
          >
            {startTime == undefined
              ? "Mulai kerja"
              : endTime == undefined
              ? "Kerja dimulai"
              : "Kerja diakhiri"}
          </PrimaryButton>
          <SecondaryButton
            w={{ base: "100%", m: "50%" }}
            bg={startTime == undefined ? "#ff494930" : "#ff4949"}
            color={startTime == undefined ? "#ff4949" : "white"}
            _hover={{
              backgroundColor: startTime == undefined ? "#ff494930" : "#cc3a3a",
            }}
            onClick={endWorkDisclouse.onOpen}
            isDisabled={
              endTime == undefined && startTime !== undefined ? false : true
            }
          >
            {startTime == undefined
              ? "Kerja belum dimulai"
              : endTime == undefined
              ? "Akhiri kerja"
              : "Kerja diakhiri"}
          </SecondaryButton>
        </Flex>
        <Flex
          w="100%"
          pt="12px"
          flexDir="column"
          mb="-18px"
          justifyContent="center"
          alignItems="center"
        >
          <Text color="#9a9a9f" fontSize="12px" fontWeight="500">
            {
              "*Durasi kerja adalah 8 jam 30 menit sudah termasuk 1 jam waktu untuk istirahat."
            }{" "}
            {
              "Waktu mulai kerja normal adalah 07:30 dengan toleransi keterlambatan hingga 07:45."
            }
          </Text>
          <Text color="#9a9a9f" fontSize="12px" fontWeight="500"></Text>
        </Flex>
      </PlainCard>

      <ModalAnimated
        {...endWorkDisclouse}
        headerTitle="Konfirmasi akhiri kerja"
      >
        <Flex w="100%" flexDir="column" pt="16px" className="modal__body">
          <Text fontSize="16px">
            Anda akan mengakhiri kerja pada pukul
            <span
              style={{
                fontWeight: "550",
                fontSize: "18px",
              }}
            >
              {" " + convertToTwoDigit(new Date().getHours())}:
              {convertToTwoDigit(new Date().getMinutes()) + " "}
            </span>
            dengan durasi{" "}
            <span
              style={{
                fontWeight: "550",
                fontSize: "18px",
              }}
            >
              {hours + " Jam " + minutes + " Menit"}.
            </span>
          </Text>
        </Flex>
        <Box
          display={["block", "block", "block", "flex"]}
          gap="12px"
          mt="24px"
          w="100%"
          justifyContent="end"
        >
          <MdSecondaryButton mt="12px" onClick={endWorkDisclouse.onClose}>
            Batal
          </MdSecondaryButton>
          <MdPrimaryButton mt="12px" onClick={() => handleEnd()} type="submit">
            Akhiri kerja sekarang
          </MdPrimaryButton>
        </Box>
      </ModalAnimated>
    </>
  );
};

export default AbsenWidget;

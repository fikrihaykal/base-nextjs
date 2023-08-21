import PageTransition from "@/components/PageLayout";
import ContainerQuery from "@/components/atoms/MenuWrapper";
import CardIconShadow from "@/components/organisms/CardIconShadow";
import PageBanner from "@/components/organisms/PageBanner";
import AppSettingContext from "@/providers/AppSettingProvider";
import { Flex, useColorMode, Box, Text, Button } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";

const Beranda = () => {
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
      <PageTransition>
        <Flex className="page__row" mb="80px">
          {/* <ContainerQuery>
            <Box
              display="flex"
              justifyContent="center"
              className="widget__presensi"
              // as={NextLink}
              // href={link}
              data-group="card--shadow"
              // className="card__menu_shadow"
              // flex={`0 0 calc(${cardWidth} - 32px)`}
              // w={`calc(${cardWidth} - 32px)`}
              w="100%"
              minH="400px"
              // m="32px 16px 0px 16px"
              pos="relative"
              p="24px"
              borderRadius="24px"
              opacity="1"
              // bg={colorMode == "light" ? "#fff" : "#222222"}
              _before={{
                content: '""',
                pos: "absolute",
                top: "0px",
                left: "0px",
                right: "0px",
                bottom: "0px",
                width: "100%",
                height: "100%",
                zIndex: "-2",
                boxShadow: "rgba(17, 12, 46, 0.05) 0px 10px 160px 10px",
                borderRadius: "24px",
                transition: "all 0.25s",
              }}
              transition="all 0.25s"
            >
              <Text fontWeight="600" fontSize="36px" >07:28:00</Text>
            </Box>
          </ContainerQuery> */}
          <ContainerQuery>
            {/* <PageBanner></PageBanner> */}
            <Box
              w="100%"
              pos="relative"
              display="flex"
              flexDir="column"
              // h="340px"
              bg="white"
              borderRadius="1.6rem"
              p="56px"
              pt="36px"
              // _after={{
              //   content: '""',
              //   position: "absolute",
              //   top: "20px",
              //   left: "50%",
              //   transform: "translateX(-50%)",
              //   width: "95%",
              //   h: "100%",
              //   zIndex: "-1",
              //   borderRadius: "24px",
              //   background: "#008fff80"
              //   // background: colorMode == "light" ? "#008fff30" : "#003967",
              // }}
              _before={{
                content: '""',
                pos: "absolute",
                top: "0px",
                left: "0px",
                right: "0px",
                bottom: "0px",
                // width: "100%",
                // height: "100%",
                zIndex: "-2",
                boxShadow: "rgba(17, 12, 46, 0.05) 0px 10px 160px 10px",
                borderRadius: "24px",
                transition: "all 0.25s",
              }}
            >
              <Text
                fontWeight="600"
                fontSize="42px"
                variant="title"
                w="100%"
                textAlign="center"
                // mb="30px"
                suppressHydrationWarning
              >
                {convertToTwoDigit(time.hours)}:
                {convertToTwoDigit(time.minutes)}:
                {convertToTwoDigit(time.seconds)}
              </Text>
              <Flex
                w="100%"
                h="128px"
                borderRadius="10px"
                justifyContent="space-between"
                gap="36px"
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
                    fontSize="30px"
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
                    fontSize="30px"
                    variant="title"
                    w="100%"
                    textAlign="center"
                    mb="10px"
                    suppressHydrationWarning
                  >
                    04:05:21
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
                    Total lama kerja
                  </Text>
                  <Text
                    fontWeight="600"
                    fontSize="28px"
                    variant="title"
                    w="100%"
                    textAlign="center"
                    mb="10px"
                    suppressHydrationWarning
                  >
                    8 jam 37 menit
                  </Text>
                </Box>
              </Flex>
              <Flex w="100%" gap="36px" mt="auto">
                <Button
                  w="100%"
                  h="64px"
                  borderRadius="12px"
                  bg="#008ffa"
                  color="white"
                >
                  Mulai kerja
                </Button>
                <Button
                  w="100%"
                  h="64px"
                  bg="#1b1b1b"
                  borderRadius="12px"
                  color="white"
                  // isDisabled={true}
                >
                  Jeda kerja
                </Button>
                <Button
                  w="100%"
                  h="64px"
                  borderRadius="12px"
                  color="#646464"
                  isDisabled={true}
                >
                  Berhenti kerja
                </Button>
              </Flex>
            </Box>
            <Flex className="page__mainmenu" m="0 -16px" wrap="wrap" pt="24px">
              <CardIconShadow
                title="Cuti"
                subtitle="Lihat dan kelola semua ajuan cuti"
                link="/cuti"
                icon="/images/icon/folderbf.svg"
              />
              <CardIconShadow
                title="Portofolio"
                subtitle="Lihat dan kelola portofolio dari berbagai macam kegiatan"
                link="/portofolio"
                icon="/images/icon/porto.svg"
              />
              <CardIconShadow
                title="SKEM"
                subtitle="Ajuan kegiatan dari portofolio yang anda buat"
                link="/skem"
                icon="/images/icon/skem.svg"
              />
              <CardIconShadow
                title="Beasiswa"
                subtitle="Cari dan dapatkan beasiswa yang anda inginkan disini"
                link="/beasiswa"
                icon="/images/icon/beasiswa.svg"
              />
              <CardIconShadow
                title="Magang"
                subtitle="Cari dan dapatkan magang yang anda inginkan disini"
                link="/magang"
                icon="/images/icon/magang.svg"
              />
              <CardIconShadow
                title="Kewirausahaan"
                subtitle="Lihat dan kelola ajuan kewirausahaan anda"
                link="/wirausaha"
                icon="/images/icon/wira.svg"
              />
            </Flex>
          </ContainerQuery>
        </Flex>
      </PageTransition>
    </>
  );
};

export default Beranda;

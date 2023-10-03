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
          <ContainerQuery>
            <PageBanner></PageBanner>

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

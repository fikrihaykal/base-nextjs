import PageTransition from "@/components/PageLayout";
import ContainerQuery from "@/components/atoms/MenuWrapper";
import CardIconShadow from "@/components/organisms/CardIconShadow";
import PageBanner from "@/components/organisms/PageBanner";
import AppSettingContext from "@/providers/AppSettingProvider";
import { Flex, useColorMode, Box, Text } from "@chakra-ui/react";
import { useContext } from "react";

const Beranda = () => {
  return (
    <>
      <PageTransition>
        <Flex className="page__row" mb="80px">
          <ContainerQuery>
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
          </ContainerQuery>
          {/* <ContainerQuery> */}
          {/* <PageBanner></PageBanner> */}
          {/* <Flex className="page__mainmenu" m="0 -16px" wrap="wrap" pt="24px">
              <CardIconShadow
                title="Berkas"
                subtitle="Lihat dan kelola semua berkas saya"
                link="/berkas"
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
            </Flex> */}
          {/* </ContainerQuery> */}
        </Flex>
      </PageTransition>
    </>
  );
};

export default Beranda;

import PageTransition from "@/components/PageLayout";
import MenuWrapper from "@/components/atoms/MenuWrapper";
import ContainerQuery from "@/components/atoms/MenuWrapper";
import {
  TableWrapper,
  TableSorting,
  TableSortingRow,
  TableSortingCol,
  TableFilterDate,
  TableFilter,
  TableSearch,
} from "@/components/molecules/Table";
import CardIconShadow from "@/components/organisms/CardIconShadow";
import PageBanner from "@/components/organisms/PageBanner";
import { TableBasic } from "@/components/organisms/TableBasic";
import { DropdownItem, DropdownItemDate } from "@/data/dummy";
import { kolomTabelBerkas } from "@/data/table";
import AppSettingContext from "@/providers/AppSettingProvider";
import { InfiniteQuery, TableLoadMoreConf } from "@/utils/table";
import {
  Flex,
  useColorMode,
  Box,
  Text,
  Button,
  TableContainer,
} from "@chakra-ui/react";
import { table } from "console";
import { useContext, useEffect, useState } from "react";

const Beranda = () => {
  const [globalFilter, setGlobalFilter] = useState("");
  const URL = "/api/berkas";
  const infiniteData = InfiniteQuery(URL, "berkas");
  const table = TableLoadMoreConf(
    infiniteData.flatData,
    kolomTabelBerkas,
    globalFilter,
    setGlobalFilter
  );
  const { colorMode } = useColorMode();
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
            {/* <PageBanner></PageBanner> */}
            <Box
              w="100%"
              pos="relative"
              display="flex"
              flexDir="column"
              // h="340px"
              bg={colorMode == "light" ? "white" : "#222222"}
              borderRadius="1.6rem"
              p="56px"
              pt="36px"
              mb="36px"
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
                    {/* 04:05:21 */}-
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
                    {/* - */}
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
                  isDisabled={true}
                >
                  Mulai kerja
                </Button>

                <Button
                  w="100%"
                  h="64px"
                  bg="#dd2424"
                  borderRadius="12px"
                  color="white"
                  // isDisabled={true}
                >
                  Berhenti kerja
                </Button>
              </Flex>
            </Box>
            <TableWrapper>
                <TableSorting>
                  <TableSortingRow>
                    <TableSortingCol>
                      <TableFilterDate
                        placeholder="Tanpa batas waktu"
                        data={DropdownItemDate}
                        column={table.getHeaderGroups()[0].headers[2].column}
                      />
                      <TableFilter
                        placeholder="Semua jenis"
                        data={DropdownItem}
                        column={table.getHeaderGroups()[0].headers[1].column}
                      />
                    </TableSortingCol>
                    <TableSortingCol>
                      <Flex
                        justifyContent="space-between"
                        alignItems="center"
                        w="full"
                        wrap="wrap"
                      >
                        <TableSearch
                          placeholder="Search"
                          target={setGlobalFilter}
                        />
                        <Flex
                          className="sorting__btn"
                          align-items="center"
                          w={{ base: "100%", s: "unset" }}
                        >
                          {/* <ModalButton /> */}
                        </Flex>
                      </Flex>
                    </TableSortingCol>
                  </TableSortingRow>
                </TableSorting>
                <TableContainer>
                  <TableBasic
                    table={table}
                    infiniteData={infiniteData}
                    select={false}
                  />
                </TableContainer>
              </TableWrapper>
            
            <Flex className="page__mainmenu" m="0 -16px" wrap="wrap" pt="24px">
              <CardIconShadow
                title="Cuti"
                subtitle="Lihat dan kelola semua ajuan cuti"
                link="/cuti"
                icon="/images/icon/folderbf.svg"
              />
              <CardIconShadow
                title="Rencana Kerja"
                subtitle="Lihat dan kelola portofolio dari berbagai macam kegiatan"
                link="/portofolio"
                icon="/images/icon/porto.svg"
              />
              <CardIconShadow
                title="Rekap Absen"
                subtitle="Ajuan kegiatan dari portofolio yang anda buat"
                link="/skem"
                icon="/images/icon/skem.svg"
              />
              <CardIconShadow
                title="Panduan"
                subtitle="Cari dan dapatkan beasiswa yang anda inginkan disini"
                link="/beasiswa"
                icon="/images/icon/beasiswa.svg"
              />
            </Flex>
          </ContainerQuery>
        </Flex>
      </PageTransition>
    </>
  );
};

export default Beranda;

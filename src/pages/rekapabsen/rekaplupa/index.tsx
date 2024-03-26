import PageTransition from "@/components/PageLayout";
import { DarkButton } from "@/components/atoms/Buttons/DarkButton";
import ContainerQuery from "@/components/atoms/PageCol";
import Wrapper from "@/components/atoms/Wrapper";
import TimeInput from "@/components/customs/TimeInput";
import InputFormik from "@/components/molecules/InputField";
import {
  TableFilter,
  TableSorting,
  TableSortingCol,
  TableSortingRow,
  TableWrapper,
} from "@/components/molecules/Table";
import Card from "@/components/organisms/Cards/Card";
import {
  RadioCardGroup,
  RadioCardReverse,
} from "@/components/organisms/RadioCard";
import TableBasic from "@/components/organisms/TableBasic";
import { DropdownItem, DropdownItemYr } from "@/data/dummy";
import { kolomTabelAbsen } from "@/data/tableRekap";
import { InfiniteQuery, TableLoadMoreConf } from "@/utils/table";
import {
  Box,
  Flex,
  Grid,
  GridItem,
  TableContainer,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { VisibilityState } from "@tanstack/table-core";
import { Form, Formik } from "formik";
import { useState } from "react";
import { PilihTanggal } from "./PilihTanggal";

const RekapLupa = () => {
  const [globalFilter, setGlobalFilter] = useState("");
  const [columnFilters, setColumnFilters] = useState([
    {
      id: "tanggal",
      value: "-" + (new Date().getMonth() + 1).toString() + "-",
    },
    {
      id: "waktumasuk",
      value: new Date().getFullYear().toString() + "-",
    },
  ]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({
    bulan: false,
  });
  const URL = "/api/rekapabsen";
  const infiniteData = InfiniteQuery(URL, "rekapabsen");
  const table = TableLoadMoreConf(
    infiniteData.flatData,
    kolomTabelAbsen,
    globalFilter,
    setGlobalFilter,
    columnVisibility,
    setColumnVisibility,
    columnFilters
    // setColumnFilters
  );
  const { colorMode } = useColorMode();

  return (
    <>
      <PageTransition
        pageTitle="Perbaikan presensi"
        previousPage="/rekapabsen"
        previousPageTitle="Presensi"
      >
        <Flex className="page__row" mb="80px">
          <ContainerQuery>
            <Wrapper p="12px" mt="-12px" mb="32px">
              <Flex w="100%" gap="42px">
                <Card p="0" w="100%" display="flex">
                  <FormAjuanLupa />
                </Card>
                {/* <Card bg="#008fff" h="100%" flex="1" display="flex"></Card> */}
              </Flex>
            </Wrapper>

            <Flex w="100%" gap="36px">
              <TableWrapper w="100%">
                <Text
                  // variant="toptitle"
                  fontSize="18px"
                  fontWeight="550"
                  // mb="22px"
                >
                  Rekap Perbaikan Presensi
                </Text>
                <Text
                  variant="subtitle"
                  mb="22px"
                  fontSize="15px"
                  color="#a9a9a9"
                >
                  Rekap ajuan perbaikan presensi anda
                </Text>
                <TableSorting>
                  <TableSortingRow>
                    <TableSortingCol>
                      <TableFilter
                        placeholder={new Date().toLocaleDateString("id-ID", {
                          month: "long",
                        })}
                        data={DropdownItem}
                        column={table.getHeaderGroups()[0].headers[0].column}
                      />
                      <TableFilter
                        placeholder={new Date().toLocaleDateString("id-ID", {
                          year: "numeric",
                        })}
                        data={DropdownItemYr}
                        column={table.getHeaderGroups()[0].headers[2].column}
                      />
                    </TableSortingCol>
                  </TableSortingRow>
                </TableSorting>
                <TableContainer>
                  {/* <TableBasic table={table} infiniteData={infiniteData} /> */}
                </TableContainer>
              </TableWrapper>
            </Flex>
          </ContainerQuery>
        </Flex>
      </PageTransition>
    </>
  );
};

export default RekapLupa;

const FormAjuanLupa = () => {
  const { colorMode } = useColorMode();

  function validateName(valueName: string) {
    let error;
    if (!valueName) {
      error = "Wajib diisi";
    }
    return error;
  }
  const formatString = (string: string) => {
    if (string.length === 2 || string.length === 3) {
      return string.replace(/(\d{2})/, "$1 - ");
    } else if (string.length >= 4) {
      return string.replace(/(\d{2})(\d{2})/, "$1 - $2 - ");
    }
  };
  function validateNumber(valueNumb: string) {
    let er;
    if (!valueNumb) {
      er = "Wajib diisi";
    } else if (!/^0*?[1-9]\d*$/.test(valueNumb)) {
      er = "Format nomor salah";
    } else if (valueNumb.length < 10) {
      er = "Format nomor salah";
    }
    return er;
  }
  return (
    <Formik
      initialValues={{
        tanggalMulai: "",
        tanggalSelesai: "",
        durasiCuti: "",
        alamatCuti: "",
        noTelp: "",
        keteranganCuti: "",
        dokumen: "",
      }}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2));
          // alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }, 1000);
      }}
    >
      {(props) => (
        // <Form>
        <Flex p="32px" flexDir="column" w="100%">
          <Form>
            <Box>
              <Text fontSize="18px" fontWeight="550">
                Ajuan Perbaikan Presensi
              </Text>
              <Text
                variant="subtitle"
                mb="22px"
                fontSize="15px"
                fontWeight="500"
                color="#a9a9a9"
              >
                Buat ajuan perbaikan presensi baru
              </Text>
            </Box>

            <Box mb="12px">
              <Flex mb="6px">
                <Text fontSize="14px" fontWeight="500">
                  Jenis presensi
                </Text>
                <Text fontSize="14px" fontWeight="500" color="#ff3333">
                  &nbsp;*
                </Text>
              </Flex>

              <Grid
                as={RadioCardGroup}
                templateColumns="repeat(2, 1fr)"
                gap="8px"
              >
                <GridItem
                  as={RadioCardReverse}
                  value="masuk"
                  isMark={true}
                  isRequired={false}
                  isDisabled={false}
                >
                  <Text fontSize="14px" fontWeight="600">
                    Presensi Masuk
                  </Text>
                </GridItem>
                <GridItem
                  as={RadioCardReverse}
                  value="pulang"
                  isMark={true}
                  isRequired={false}
                  isDisabled={false}
                >
                  <Text fontSize="14px" fontWeight="600">
                    Presensi Pulang
                  </Text>
                </GridItem>
              </Grid>
            </Box>
            <Flex>
             <PilihTanggal />
              <TimeInput
                name="Waktu Presensi"
                type="text"
                label="Pilih waktu"
                // validate={validateName}
                req
                placeholder="07:30 "
              />
            </Flex>

            <InputFormik
              name="Keterangan"
              type="text"
              label="Keterangan"
              validate={validateName}
              req
              placeholder=""
            />
            <Flex w="100%" justifyContent="end" pt="8px">
              {/* <DarkButton ml="auto">Ajukan</DarkButton> */}
              <DarkButton ml="auto">Ajukan</DarkButton>
            </Flex>
          </Form>
        </Flex>
        // </Form>
      )}
    </Formik>
  );
};

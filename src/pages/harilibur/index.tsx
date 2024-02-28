import PageTransition from "@/components/PageLayout";
import ContainerQuery from "@/components/atoms/PageCol";
import { RencanaKerjaRequest } from "@/types/renker";
import { Button, Flex, TableContainer, Text } from "@chakra-ui/react";
import axios from "axios";
import { Form, Formik } from "formik";
import { mutate } from "swr";
import AktivitasKerjaWidget from "../Widget/AktivitasKerjaWidget";
import PlainCard from "@/components/organisms/Cards/Card";
import { PilihTanggal } from "./PilihTanggal";
import InputArea from "@/components/molecules/InputArea";
import { PrimaryButton } from "@/components/atoms/Buttons/PrimaryButton";
import DropdownSelect from "@/components/customs/Select";
import { InfiniteQuery, TableLoadMoreConf } from "@/utils/table";
import { useEffect } from "react";
import {
  TableWrapper,
  TableSorting,
  TableSortingRow,
  TableSortingCol,
  TableFilter,
} from "@/components/molecules/Table";
import { TableInfinite } from "@/components/organisms/TableInfinite";
import { DropdownItemYr } from "@/data/dummy";
import { DropdownItem } from "@/types/dropdown-items";
import { table } from "console";
import { kolomTabelAbsen } from "@/data/tableRekap";
import PageCol from "@/components/atoms/PageCol";
import PageRow from "@/components/atoms/PageRow";
import { kolomTabelLibur } from "@/data/tableLibur";

const HariLibur = () => {
  // const URL =
  //   (process.env.NEXT_PUBLIC_BACKEND_URL ?? "localhost:8080") + "/hari-libur/";

  // const infiniteData = InfiniteQuery(URL, "harilibur");
  const URL =
    (process.env.NEXT_PUBLIC_BACKEND_URL ?? "localhost:8080") + "/hari-libur/";
  // const URL = "api/berkas";
  const infiniteData = InfiniteQuery(URL, "data_libur");

  function validateName(valueName: string) {
    let error;
    if (!valueName) {
      error = "Wajib diisi";
    }
    return error;
  }
  const table = TableLoadMoreConf(
    infiniteData.flatData,
    kolomTabelLibur
    // globalFilter,
    // setGlobalFilter,
    // columnVisibility,
    // setColumnVisibility,
    // columnFilters
    // setColumnFilters
  );

  const addItem = (
    tanggal_awal: String,
    tanggal_akhir: String,
    keterangan: String,
    jenis: String
  ) => {
    const addNew: any = {
      tanggal_awal: tanggal_awal,
      tanggal_akhir: tanggal_akhir,
      keterangan: keterangan,
      jenis: jenis,
    };
    const endpoint =
      (process.env.NEXT_PUBLIC_BACKEND_URL ?? "localhost:8080") +
      "/hari-libur/tambah";

    axios
      .post(endpoint, addNew, {
        withCredentials: true,
        xsrfCookieName: "CSRF-TOKEN",
        xsrfHeaderName: "X-CSRF-TOKEN",
        withXSRFToken: true,
      })
      .then((res) => {
        mutate("data_libur");
      });
  };

  // useEffect(() => {
  //   console.log(infiniteData.flatData);
  // }, [infiniteData]);

  return (
    <Formik
      initialValues={{
        tanggal_awal: "",
        tanggal_akhir: "",
        keterangan: "",
        jenis: "",
      }}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2));
          addItem(
            values.tanggal_awal,
            values.tanggal_akhir,
            values.keterangan,
            values.jenis
          );
          actions.setSubmitting(false);
        }, 1000);
      }}
    >
      {(props) => (
        <PageTransition pageTitle="Manajemen Libur">
          <PageRow>
            <PageCol>
              <PlainCard mb="48px">
                <Text fontWeight="550" fontSize="20px" mb="16px">
                  Tambah hari libur baru
                </Text>
                <Form>
                  <PilihTanggal></PilihTanggal>
                  <InputArea
                    name="keterangan"
                    type="text"
                    label="Keterangan libur"
                    validate={validateName}
                    req
                  />

                  <Flex w="100%" flexDir="row-reverse" pt="24px">
                    <PrimaryButton
                      isLoading={props.isSubmitting}
                      type="submit"
                      mt="-18px"
                    >
                      Tambahkan
                    </PrimaryButton>
                  </Flex>
                </Form>
              </PlainCard>

              <TableWrapper w="100%">
                <Text
                  // variant="toptitle"
                  fontSize="20px"
                  fontWeight="550"
                  mb="22px"
                  letterSpacing="-0.3px"
                >
                  Hari Libur
                </Text>
                <TableSorting>
                  <TableSortingRow>
                    <TableSortingCol>
                      <></>
                      {/* <TableFilter
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
                      /> */}
                    </TableSortingCol>
                  </TableSortingRow>
                </TableSorting>
                <TableContainer px="8px">
                  <TableInfinite
                    table={table}
                    infiniteData={infiniteData}
                    button={false}
                  />
                </TableContainer>
              </TableWrapper>
            </PageCol>
          </PageRow>
        </PageTransition>
      )}
    </Formik>
  );
};

export default HariLibur;

import PageTransition from "@/components/PageLayout";
import ContainerQuery from "@/components/atoms/PageCol";
import { RencanaKerjaRequest } from "@/types/renker";
import {
  Flex
} from "@chakra-ui/react";
import axios from "axios";
import { Formik } from "formik";
import { mutate } from "swr";
import AktivitasKerjaWidget from "../Widget/AktivitasKerjaWidget";

const AktivitasKerja = () => {
  const addItem = (subjudul: string) => {
    const addNew: RencanaKerjaRequest = {
      deskripsi: subjudul,
    };
    const endpoint =
      (process.env.NEXT_PUBLIC_BACKEND_URL ?? "localhost:8080") +
      "/rencana-kerja/tambah";
    axios
      .post(endpoint, addNew, {
        withCredentials: true,
        xsrfCookieName: "CSRF-TOKEN",
        xsrfHeaderName: "X-CSRF-TOKEN",
        withXSRFToken: true,
      })
      .then((res) => {
        mutate("data_realisasi");
      });
  };

  return (
    <Formik
      initialValues={{
        subjudul: "",
      }}
      onSubmit={(values, actions) => {
        actions.setSubmitting(false);
        // addLostReport(values, actions, toast)
        addItem(values.subjudul);
        actions.resetForm();
      }}
    >
      {(props) => (
        <PageTransition pageTitle="Aktivitas kerja">
          <Flex className="page__row" mb="80px">
            <ContainerQuery>
              <AktivitasKerjaWidget/>
            </ContainerQuery>
          </Flex>
        </PageTransition>
      )}
    </Formik>
  );
};

export default AktivitasKerja;
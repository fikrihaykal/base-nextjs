import PageTransition from "@/components/PageLayout";
import ContainerQuery from "@/components/atoms/PageCol";
import { RencanaKerjaRequest } from "@/types/renker";
import { Card, Flex } from "@chakra-ui/react";
import axios from "axios";
import { Formik } from "formik";
import { mutate } from "swr";
import AktivitasKerjaWidget from "../Widget/AktivitasKerjaWidget";
import PlainCard from "@/components/organisms/Cards/Card";
import PageCol from "@/components/atoms/PageCol";
import PageRow from "@/components/atoms/PageRow";

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
          <PageRow>
            <PageCol>
              <AktivitasKerjaWidget />
            </PageCol>
          </PageRow>
        </PageTransition>
      )}
    </Formik>
  );
};

export default AktivitasKerja;

import InputAreaFormik from "@/components/molecules/InputArea";
import { Box, Button, Flex, Text, useColorMode } from "@chakra-ui/react";
import { Form, Formik, FormikErrors } from "formik";
import {
  FunctionComponent,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { registerLocale } from "react-datepicker";
import { Wizard, useWizard } from "react-use-wizard";
import WizardContext, {
  WizardContextProvider,
} from "../../../providers/WizardProvider";

import "react-datepicker/dist/react-datepicker.css";

import InputFormik from "@/components/molecules/InputField";
import ModalContext from "@/providers/ModalProvider";
import { id } from "date-fns/locale";
import React from "react";
import { MultistepCard } from "./Components/MultiStepCard";
import { PilihTanggalCuti } from "./Components/PilihTanggalCuti";
import InputFileFormik from "@/components/molecules/InputFile";
import { DragnDrop } from "@/components/organisms/DragnDrop";

registerLocale("id", id);

const WizardWidget = () => {
  return (
    <>
      <WizardContextProvider>
        <Wizard startIndex={0}>
          <Step1 />
          <Step2 />
          <Step3 />
        </Wizard>
      </WizardContextProvider>
    </>
  );
};

export default WizardWidget;

type Props = {
  number: number;
  withCallback?: boolean;
};

const Step1 = () => {
  const {} = useWizard();
  const {
    isLastStep,
    isFirstStep,
    previousStep,
    nextStep,
    activeStep,
    stepCount,
  } = useWizard();
  const { cutiType, setCutiType } = useContext(WizardContext);
  const [isBload, setIsBload] = useState(false);
  const { colorMode } = useColorMode();

  const handleSubmit = (idVal: string) => {
    cutiType == idVal ? setCutiType("") : setCutiType(idVal);
  };

  return (
    <>
      <Flex w="100%" justifyContent="space-between" mb="16px">
        <Text color="#808080" fontSize="14px">
          Langkah {activeStep + 1} dari {stepCount}
        </Text>
      </Flex>
      <Box w="100%" h="100%">
        <Text fontWeight="500" fontSize="26px" lineHeight="1.2">
          Pilih jenis cuti anda
        </Text>
        <Text fontWeight="400" fontSize="14px" color="#808080">
          Pilih salah satu jenis cuti dibawah sesuai dengan yang anda butuhkan
        </Text>
        <Flex w="100%" gap="24px" mt="32px">
          <MultistepCard
            id="tahunan"
            title="Cuti tahunan"
            subtitle="Cuti tahunan anda tersisa 8 hari dari 14 hari"
            onClick={(e) => {
              handleSubmit(e.currentTarget.id);
            }}
            choice={cutiType}
          />
          <MultistepCard
            id="besar"
            title="Cuti besar"
            subtitle="Anda dapat mengajukan cuti besar dengan syarat tertentu"
            onClick={(e) => {
              handleSubmit(e.currentTarget.id);
            }}
            choice={cutiType}
          />
        </Flex>
        <Flex w="100%" gap="24px" mt="24px">
          <MultistepCard
            id="sakit"
            title="Cuti sakit"
            subtitle="Wajib menyertakan dokumen bukti sakit yang valid"
            onClick={(e) => {
              handleSubmit(e.currentTarget.id);
            }}
            choice={cutiType}
          />
          <MultistepCard
            id="melahirkan"
            title="Cuti melahirkan"
            subtitle="Anda tidak berhak mengambil cuti melahirkan"
            onClick={(e) => {
              handleSubmit(e.currentTarget.id);
            }}
            disabled={true}
            choice={cutiType}
          />
        </Flex>
        <Flex w="100%" gap="24px" mt="24px" mb="36px">
          <MultistepCard
            id="bersama"
            title="Cuti bersama"
            subtitle="Cuti bersama sesuai dengan cuti pada kalender tahunan"
            onClick={(e) => {
              handleSubmit(e.currentTarget.id);
            }}
            choice={cutiType}
          />
          <MultistepCard
            id="alasanpenting"
            title="Cuti alasan penting"
            subtitle="Cuti alasan penting yang telah disetujui oleh AL"
            onClick={(e) => {
              handleSubmit(e.currentTarget.id);
            }}
            choice={cutiType}
          />
        </Flex>
        <Flex w="100%" justifyContent="space-between">
          <Button
            bg="#1b1b1b"
            color="#fff"
            minW="166px"
            h="56px"
            p="0 20px"
            borderRadius="16px/16px"
            fontSize="14px"
            lineHeight="1.42857"
            fontWeight="700"
            transition="all .25s"
            _hover={{
              background: !isFirstStep
                ? colorMode == "light"
                  ? "#008fff"
                  : "#0071ca"
                : "#1b1b1b",
            }}
            onClick={() => previousStep()}
            isDisabled={isFirstStep ? true : false}
          >
            Sebelumnya
          </Button>
          <Button
            bg="#1b1b1b"
            color="#fff"
            minW="166px"
            h="56px"
            p="0 20px"
            borderRadius="16px/16px"
            fontSize="14px"
            lineHeight="1.42857"
            fontWeight="700"
            transition="all .25s"
            _hover={{
              background:
                cutiType !== ""
                  ? isLastStep
                    ? "#1b1b1b"
                    : colorMode == "light"
                    ? "#008fff"
                    : "#0071ca"
                  : "#1b1b1b",
            }}
            isLoading={isBload ? true : false}
            onClick={() => {
              setIsBload(true);
              setTimeout(() => {
                setIsBload(false);
                nextStep();
              }, 1000);
            }}
            isDisabled={cutiType !== "" ? (isLastStep ? true : false) : true}
          >
            Selanjutnya
          </Button>
        </Flex>
      </Box>
    </>
  );
};

const Step2 = () => {
  const {
    isLastStep,
    isFirstStep,
    previousStep,
    nextStep,
    activeStep,
    stepCount,
  } = useWizard();
  const { cutiType } = useContext(WizardContext);
  const { colorMode } = useColorMode();

  function validateName(valueName: string) {
    let error;
    if (!valueName) {
      error = "Wajib diisi";
    }
    return error;
  }
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
          actions.setSubmitting(false);
          nextStep();
        }, 1000);
      }}
    >
      {(props) => (
        <Form>
          <Flex
            w="100%"
            justifyContent="space-between"
            mb="16px"
            transition="all .25s"
          >
            <Text color="#808080" fontSize="14px">
              Langkah {activeStep + 1} dari {stepCount}
            </Text>
          </Flex>
          <Box w="100%" h="100%" transition="all .25s">
            <Text fontWeight="500" fontSize="26px" lineHeight="1.2" mb="4px">
              Isi data untuk ajuan cuti {cutiType} anda
            </Text>
            <Text fontWeight="400" fontSize="14px" color="#808080" mb="36px">
              Pastikan data yang anda isikan benar serta isikan data selengkap
              mungkin, untuk mempermudah penyetujuan ajuan cuti anda.
            </Text>
            <PilihTanggalCuti />

            {cutiType == "sakit" ? (
              <InputFileFormik
                display={cutiType == "sakit" ? "blocks" : "none"}
                name="dokumen"
                label="Surat dokter"
                validate={validateName}
                // maxSize={2}
                req
                helpertext=""
              />
            ) : (
              <></>
            )}

            <InputFormik
              name="alamatCuti"
              type="text"
              label="Alamat cuti"
              validate={validateName}
              req
              placeholder=""
            />
            <InputFormik
              name="noTelp"
              type="number"
              label="No. Telp."
              validate={validateNumber}
              req
              helpertext="Masukkan nomor telepon dengan kode negara. Contoh: +628123456789"
            />
            <InputAreaFormik
              name="keteranganCuti"
              type="text"
              label="Alasan"
              validate={validateName}
              req
            />
            <Flex w="100%" justifyContent="space-between" mt="36px">
              <Button
                bg="#1b1b1b"
                color="#fff"
                minW="166px"
                h="56px"
                p="0 20px"
                borderRadius="16px/16px"
                fontSize="14px"
                lineHeight="1.42857"
                fontWeight="700"
                transition="all .25s"
                _hover={{
                  background: !isFirstStep
                    ? colorMode == "light"
                      ? "#008fff"
                      : "#0071ca"
                    : "#1b1b1b",
                }}
                onClick={() => previousStep()}
                isDisabled={isFirstStep ? true : false}
              >
                Sebelumnya
              </Button>

              <Button
                bg="#1b1b1b"
                color="#fff"
                minW="166px"
                h="56px"
                p="0 20px"
                borderRadius="16px/16px"
                fontSize="14px"
                lineHeight="1.42857"
                fontWeight="700"
                transition="all .25s"
                _hover={{
                  background: !isLastStep
                    ? colorMode == "light"
                      ? "#008fff"
                      : "#0071ca"
                    : "#1b1b1b",
                }}
                isLoading={props.isSubmitting}
                type="submit"
              >
                Ajukan
              </Button>
            </Flex>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

const Step3 = () => {
  const { isLastStep, isFirstStep, previousStep, nextStep, goToStep } =
    useWizard();
  const { cutiType, setCutiType } = useContext(WizardContext);
  const { colorMode } = useColorMode();
  const [choosen, setChoosen] = useState("");
  const { isModalActive, setIsModalActive } = useContext(ModalContext);
  return (
    <>
      <Flex
        w="100%"
        justifyContent="center"
        alignItems="center"
        flexDir="column"
      >
        <Box
          bgImage="/images/checkmark.png"
          bgSize="contain"
          w="210px"
          h="210px"
          bgPos="center"
          bgRepeat="no-repeat"
        ></Box>
        <Text fontWeight="600" fontSize="18px" mt="20px">
          Berhasil!
        </Text>
        <Text fontWeight="400" fontSize="18px">
          Cuti {cutiType} anda berhasil diajukan
        </Text>
      </Flex>
      <Flex justifyContent="center" alignItems="center">
        <Button
          bg="#1b1b1b"
          color="#fff"
          minW="100%"
          h="56px"
          p="0 20px"
          borderRadius="16px/16px"
          fontSize="14px"
          lineHeight="1.42857"
          fontWeight="700"
          transition="all .25s"
          mt="20px"
          _hover={{
            background: colorMode == "light" ? "#008fff" : "#0071ca",
          }}
          onClick={() => {
            setIsModalActive(false);
            setCutiType("");
            setTimeout(() => {
              goToStep(0);
            }, 500);
          }}
        >
          Tutup
        </Button>
      </Flex>

      {/* <Flex w="100%" justifyContent="center" mt="36px">
        <Button
          bg="#1b1b1b"
          color="#fff"
          minW="166px"
          h="56px"
          p="0 20px"
          borderRadius="16px/16px"
          fontSize="14px"
          lineHeight="1.42857"
          fontWeight="700"
          transition="all .25s"
          _hover={{
            background: !isFirstStep
              ? colorMode == "light"
                ? "#008fff"
                : "#0071ca"
              : "#1b1b1b",
          }}
          // onClick={() => previousStep()}
          isDisabled={isFirstStep ? true : false}
        >
          Tutup
        </Button>
      </Flex> */}
    </>
  );
};

// interface IUploadFile {
//   data: { image?: File };
//   setFieldValue: (
//     field: string,
//     value: any,
//     shouldValidate?: boolean | undefined
//   ) => Promise<FormikErrors<{ image?: File }>> | Promise<void>;
//   errors: FormikErrors<{ image?: File }>;
// }

// const { cutiType, setCutiType } = useContext(WizardContext);
// const { colorMode } = useColorMode();

// const FormikFileUpload: FunctionComponent<IUploadFile> = ({
//   data,
//   setFieldValue,
//   errors,
// }) => {
//   const fileInput = useRef<HTMLInputElement>(null);
//   const [objUrl, setObjUrl] = useState<string | undefined>();

//   const handleClick = (event: any) => {
//     if (fileInput.current != null) {
//       fileInput.current.click();
//     }
//   };
//   return <></>;
// };

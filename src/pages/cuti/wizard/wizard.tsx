import InputAreaFormik from "@/components/molecules/InputArea";
import {
  Box,
  BoxProps,
  Button,
  Flex,
  FormLabel,
  Input,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { Form, Formik, useField, useFormikContext } from "formik";
import { forwardRef, useContext, useEffect, useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import { Wizard, useWizard } from "react-use-wizard";
import WizardContext, {
  WizardContextProvider,
} from "../../../providers/WizardProvider";

import "react-datepicker/dist/react-datepicker.css";

import InputFormik from "@/components/molecules/InputField";
import { id } from "date-fns/locale";
import { get } from "http";
import { differenceInBusinessDays, eachDayOfInterval } from "date-fns";
import { MultistepCard } from "./Components/MultiStepCard";
import { PilihTanggalCuti } from "./Components/PilihTanggalCuti";
import React from "react";
import ModalContext from "@/providers/ModalProvider";

registerLocale("id", id);

const WizardWidget = () => {
  return (
    <>
      <WizardContextProvider>
        <Wizard startIndex={0}>
          <Step1 number={0} />
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

const Step1: React.FC<Props> = React.memo(({ number, withCallback = true }) => {
  const {} = useWizard();
  const {
    isLastStep,
    isFirstStep,
    previousStep,
    nextStep,
    activeStep,
    stepCount,
    isLoading,
    handleStep,
  } = useWizard();
  const { cutiType, setCutiType } = useContext(WizardContext);
  const [isBload, setIsBload] = useState(false);
  const { colorMode } = useColorMode();
  const handleSubmit = (idVal: string) => {
    cutiType == idVal ? setCutiType("") : setCutiType(idVal);
  };

  if (withCallback) {
    handleStep(() => {
      alert("Submitted " + cutiType + ", lets goo");
    });
  }

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
});

const Step2 = () => {
  const {
    isLastStep,
    isFirstStep,
    previousStep,
    nextStep,
    activeStep,
    stepCount,
  } = useWizard();
  const { cutiType, setCutiType } = useContext(WizardContext);
  const { colorMode } = useColorMode();
  const [choosen, setChoosen] = useState("");
  const handleSubmit = (idVal: string) => {
    choosen == idVal ? setChoosen("") : setChoosen(idVal);
  };

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
      }}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
          nextStep();
        }, 1000);
      }}
    >
      {(props) => (
        <Form>
          <Flex w="100%" justifyContent="space-between" mb="16px">
            <Text color="#808080" fontSize="14px">
              Langkah {activeStep + 1} dari {stepCount}
            </Text>
          </Flex>
          <Box w="100%" h="100%">
            <Text fontWeight="500" fontSize="26px" lineHeight="1.2" mb="4px">
              Isi data untuk ajuan cuti {cutiType} anda
            </Text>
            <Text fontWeight="400" fontSize="14px" color="#808080" mb="36px">
              Pastikan data yang anda isikan benar serta isikan data selengkap
              mungkin, untuk mempermudah penyetujuan ajuan cuti anda.
            </Text>

            <PilihTanggalCuti />

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
                  background:
                    choosen !== ""
                      ? isLastStep
                        ? "#1b1b1b"
                        : colorMode == "light"
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
      <Flex w="100%" justifyContent="center" alignItems="center">
        <Flex
          borderRadius="50%"
          w="400px"
          h="400px"
          bg="#008ffa30"
          justifyContent="center"
          alignItems="center"
          onClick={() => {
            setIsModalActive(false);
            // reset cuti state here
            setCutiType("");
            setTimeout(() => {
              goToStep(0);
            }, 1000);
          }}
        >
          <Flex borderRadius="50%" w="300px" h="300px" bg="#008ffa"></Flex>
        </Flex>
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

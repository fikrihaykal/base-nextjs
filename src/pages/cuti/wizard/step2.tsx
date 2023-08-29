import InputAreaFormik from "@/components/molecules/InputArea";
import InputFormik from "@/components/molecules/InputField";
import { Box, Button, Flex, Text, useColorMode } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { useContext, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { useWizard } from "react-use-wizard";
import WizardContext from "../../../providers/WizardProvider";

const Step2 = () => {
  const {
    isLoading,
    isLastStep,
    isFirstStep,
    activeStep,
    stepCount,
    previousStep,
    nextStep,
    goToStep,
    handleStep,
  } = useWizard();

  const { cutiType, setCutiType } = useContext(WizardContext);

  const { colorMode } = useColorMode();

  const [choosen, setChoosen] = useState("");

  const [startDate, setStartDate] = useState(new Date());

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
    }
    return er;
  }

  return (
    <Formik
      initialValues={{
        alamatCuti: "",
        noTelp: "",
        keteranganCuti: "",
      }}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }, 1000);
      }}
    >
      {(props) => (
        <Form>
          <Box w="100%" h="100%">
            <Text fontWeight="500" fontSize="26px" lineHeight="1.2" mb="4px">
              Isi data untuk ajuan cuti {cutiType} anda
            </Text>
            <Text fontWeight="400" fontSize="14px" color="#808080" mb="36px">
              Pastikan data yang anda isikan benar serta isikan data selengkap
              mungkin, untuk mempermudah penyetujuan ajuan cuti anda.
            </Text>

            <InputFormik
              name="alamatCuti"
              type="text"
              label="Alamat cuti"
              validate={validateName}
              req
            />

            <InputFormik
              name="noTelp"
              type="number"
              label="No. Telp."
              validate={validateNumber}
              req
              helperText="Masukkan nomor telepon yang anda gunakan ketika cuti"
            />

            <InputAreaFormik
              name="keteranganCuti"
              type="text"
              label="Keterangan"
              validate={validateName}
              req
            />

            <Flex w="100%" justifyContent="space-between" mt="36px">
              <Button
                className="button__more"
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
                className="button__more"
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
                Selanjutnya
              </Button>
            </Flex>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default Step2;

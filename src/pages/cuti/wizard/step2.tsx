import { Box, Button, Flex, Input, Text, useColorMode } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { Wizard, useWizard } from "react-use-wizard";
import WizardContext from "../../../providers/WizardProvider";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import { Field, Form, Formik, useField } from "formik";

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

  function validateName(value: any) {
    let error;
    if (!value) {
      error = "Wajib diisi";
    }
    return error;
  }

  return (
    <Formik
      initialValues={{
        alamatDom: "",
        alamatCuti: "",
        tanggalmulai: "",
        tanggalselesai: "",
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
              name="alamatDom"
              type="text"
              label="Alamat domisili"
              validate={validateName}
              req
            />
            <InputFormik
              name="alamatCuti"
              type="text"
              label="Alamat cuti"
              // validate={validateName}
              // req={true}
            />

            <InputFormik name="noTelp" type="number" label="No. Telp." req/>

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
                // onClick={() => nextStep()}
                isLoading={props.isSubmitting}
                type="submit"
                // isDisabled={choosen !== "" ? (isLastStep ? true : false) : true}
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

interface Values {
  firstName: string;
  lastName: string;
  email: string;
}

const InputFormik = ({ label, ...props }: any) => {
  const [field, meta, helpers] = useField(props);
  const { colorMode } = useColorMode();

  return (
    <>
      <Box
        className="wizard__input_container"
        pos="relative"
        flexGrow="1"
        mb="16px"
      >
        <FormLabel
          fontSize="14px"
          fontWeight="400"
          color="#808080"
          mb="8px"
          display="flex"
          justifyContent="space-between"
        >
          <Flex>
            {label}{" "}
            <Text display={props.req ? "unset" : "none"} color="#ff3333">
              {"\u00A0"}*
            </Text>
          </Flex>

          <Text color="#ff3333" fontWeight="500">
            {"\u00A0"}
            {meta.error}
          </Text>
        </FormLabel>
        <Input
          {...field}
          {...props}
          className="sorting__input"
          w="100%"
          h="56px"
          p="0 20px 0 20px"
          border="0px solid transparent"
          borderRadius="16px"
          bg={
            meta.touched && meta.error
              ? "white"
              : colorMode == "light"
              ? "rgba(228,228,228,0.3)"
              : "#292929"
          }
          fontSize="14px"
          fontWeight="600"
          color={colorMode == "light" ? "#1b1d21" : "#fff"}
          _placeholder={{
            color: "#bababa",
          }}
          borderColor={meta.touched && meta.error ? "none" : "none"}
          sx={{
            boxShadow:
              meta.touched && meta.error
                ? "inset 0 0 0 2px #ff3333 !important"
                : "none",
          }}
          _focusVisible={{
            border: "none",
            boxShadow: "inset 0 0 0 2px #008ffa",
            background: "white",
          }}
        />
      </Box>
    </>
  );
};

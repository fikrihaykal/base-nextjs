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

registerLocale("id", id);

const WizardWidget = () => {
  return (
    <>
      <WizardContextProvider>
        <Wizard header={<WizardHeader></WizardHeader>}>
          <Step1 />
          <Step2 />
        </Wizard>
      </WizardContextProvider>
    </>
  );
};

export default WizardWidget;

const WizardHeader = () => {
  const { activeStep, stepCount } = useWizard();
  return (
    <>
      <Flex w="100%" justifyContent="space-between" mb="16px">
        <Text color="#808080" fontSize="14px">
          Langkah {activeStep + 1} dari {stepCount}
        </Text>
      </Flex>
    </>
  );
};

const Step1 = () => {
  const { isLastStep, isFirstStep, previousStep, nextStep } = useWizard();
  const { cutiType, setCutiType } = useContext(WizardContext);
  const { colorMode } = useColorMode();
  const handleSubmit = (idVal: string) => {
    cutiType == idVal ? setCutiType("") : setCutiType(idVal);
  };
  return (
    <>
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
                cutiType !== ""
                  ? isLastStep
                    ? "#1b1b1b"
                    : colorMode == "light"
                    ? "#008fff"
                    : "#0071ca"
                  : "#1b1b1b",
            }}
            onClick={() => nextStep()}
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
  const { isLastStep, isFirstStep, previousStep, nextStep } = useWizard();
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

const PilihTanggalCuti = () => {
  const { setFieldValue } = useFormikContext();
  const { colorMode } = useColorMode();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [totalDay, setTotalDay] = useState<number>();

  function getBusinessDays(startDate: Date, endDate: Date) {
    return differenceInBusinessDays(new Date(endDate), new Date(startDate));
  }

  useEffect(() => {
    setFieldValue("tanggalMulai", startDate);
    setFieldValue("tanggalSelesai", endDate);
    setTotalDay(getBusinessDays(startDate, endDate) + 1);
    setFieldValue("durasiCuti", totalDay);
  }, [startDate, endDate]);

  return (
    <>
      <Flex w="100%" gap="0px">
        <DatePicker
          locale="id"
          dateFormat="EEEE, dd MMMM yyyy"
          selected={startDate}
          startDate={startDate}
          endDate={endDate}
          filterDate={(date) => {
            return date.getDay() !== 0 && date.getDay() !== 6;
          }}
          selectsStart
          onChange={(date: Date) => {
            setStartDate(date);
            setFieldValue("tanggalMulai", date);
          }}
          customInput={<TanggalMulaiInput />}
        />
        <DatePicker
          locale="id"
          dateFormat="EEEE, dd MMMM yyyy"
          selected={endDate}
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          filterDate={(date) => {
            return date.getDay() !== 0 && date.getDay() !== 6;
          }}
          selectsEnd
          onChange={(date: Date) => {
            setEndDate(date);
            setFieldValue("tanggalSelesai", date);
            // getDates(startDate, endDate, dateArray);
          }}
          customInput={<TanggalSelesaiInput />}
        />
        <Box>
          <Box ml="16px">
            <Text fontSize="14px" mb="8px">
              Durasi cuti
            </Text>
            <Input
              className="sorting__input"
              w="120px"
              h="56px"
              p="0px 20px 0 20px"
              border="0px solid transparent"
              borderRadius="16px"
              bg={colorMode == "light" ? "rgba(228,228,228,0.3)" : "#292929"}
              fontSize="14px"
              fontWeight="600"
              color={colorMode == "light" ? "#1b1d21" : "#fff"}
              _placeholder={{
                color: "#bababa",
              }}
              value={totalDay + " hari kerja"}
              readOnly
            ></Input>
          </Box>
        </Box>
      </Flex>
    </>
  );
};

const TanggalMulaiInput = forwardRef<HTMLDivElement, unknown>(
  ({ value, onClick }: any, ref) => {
    const { colorMode } = useColorMode();
    return (
      <Box
        className="wizard__input_container"
        pos="relative"
        flex="1"
        mb="16px"
        onClick={onClick}
        ref={ref}
        maxW="100%"
        pr="8px"
      >
        <FormLabel
          fontSize="14px"
          fontWeight="400"
          mb="7px"
          display="flex"
          justifyContent="space-between"
        >
          <Flex>
            {/* {label}{" "} */}
            Tanggal mulai
            <Text color="#ff3333">{"\u00A0"}*</Text>
          </Flex>

          <Text
            // display={meta.touched && meta.error ? "block" : "none"}
            display="none"
            color="#ff3333"
            fontWeight="500"
          >
            {"\u00A0"}
            {/* {meta.error} */}
          </Text>
        </FormLabel>

        <Input
          // {...field}
          // {...props}
          className="sorting__input"
          // w="max-content"
          // w="400px"
          maxW="100%"
          h="56px"
          p="0px 20px 0 20px"
          border="0px solid transparent"
          borderRadius="16px"
          bg={colorMode == "light" ? "rgba(228,228,228,0.3)" : "#292929"}
          fontSize="14px"
          fontWeight="600"
          color={colorMode == "light" ? "#1b1d21" : "#fff"}
          _placeholder={{
            color: "#bababa",
          }}
          // borderColor={meta.touched && meta.error ? "none" : "none"}
          // sx={{
          //   boxShadow:
          //     meta.touched && meta.error
          //       ? "inset 0 0 0 2px #ff3333d0 !important"
          //       : "none",
          // }}
          value={value}
          _focusVisible={{
            border: "none",
            boxShadow:
              colorMode == "light"
                ? "inset 0 0 0 2px #008ffa"
                : "inset 0 0 0 2px #0071ca",
            background: colorMode == "light" ? "white" : "#222222",
          }}
        ></Input>
        <Text color="#808080" fontSize="13px" mt="7px">
          {/* {props.helperText} */}
        </Text>
      </Box>
    );
  }
);
TanggalMulaiInput.displayName = "TanggalMulaiInput";

const TanggalSelesaiInput = forwardRef<HTMLDivElement, unknown>(
  ({ value, onClick }: any, ref) => {
    const { colorMode } = useColorMode();

    return (
      <Box
        className="wizard__input_container"
        pos="relative"
        flexGrow="1"
        mb="16px"
        onClick={onClick}
        ref={ref}
        pl="8px"
      >
        <FormLabel
          fontSize="14px"
          fontWeight="400"
          mb="7px"
          display="flex"
          justifyContent="space-between"
        >
          <Flex>
            Tanggal selesai
            <Text color="#ff3333">{"\u00A0"}*</Text>
          </Flex>

          <Text
            // display={meta.touched && meta.error ? "block" : "none"}
            display="none"
            color="#ff3333"
            fontWeight="500"
          >
            {"\u00A0"}
            {/* {meta.error} */}
          </Text>
        </FormLabel>

        <Input
          // {...field}
          // {...props}
          className="sorting__input"
          w="100%"
          h="56px"
          p="0px 20px 0 20px"
          border="0px solid transparent"
          borderRadius="16px"
          bg={colorMode == "light" ? "rgba(228,228,228,0.3)" : "#292929"}
          fontSize="14px"
          fontWeight="600"
          color={colorMode == "light" ? "#1b1d21" : "#fff"}
          _placeholder={{
            color: "#bababa",
          }}
          // borderColor={meta.touched && meta.error ? "none" : "none"}
          // sx={{
          //   boxShadow:
          //     meta.touched && meta.error
          //       ? "inset 0 0 0 2px #ff3333d0 !important"
          //       : "none",
          // }}
          value={value}
          _focusVisible={{
            border: "none",
            boxShadow:
              colorMode == "light"
                ? "inset 0 0 0 2px #008ffa"
                : "inset 0 0 0 2px #0071ca",
            background: colorMode == "light" ? "white" : "#222222",
          }}
        ></Input>
        <Text color="#808080" fontSize="13px" mt="7px">
          {/* {props.helperText} */}
        </Text>
      </Box>
    );
  }
);
TanggalSelesaiInput.displayName = "TanggalSelesaiInput";

interface MultistepCardInterface extends BoxProps {
  id: string;
  title: string;
  subtitle: string;
  choice?: string;
  boxProps?: BoxProps;
  disabled?: boolean;
}

const MultistepCard = ({
  id,
  title,
  subtitle,
  choice,
  disabled,
  ...boxProps
}: MultistepCardInterface) => {
  const { colorMode } = useColorMode();

  return (
    <>
      <Box
        w="100%"
        id={id}
        flex="1"
        borderRadius="16px"
        bg={
          colorMode == "light"
            ? disabled
              ? "#f4f4f4"
              : "white"
            : disabled
            ? "#333333"
            : "#222222"
        }
        boxShadow={
          disabled
            ? "none"
            : choice == id
            ? "inset 0 0 0 2.6px #008ffa"
            : colorMode == "light"
            ? "inset 0 0 0 1.6px #e4e4e4"
            : "inset 0 0 0 1.6px #333333"
        }
        _hover={{
          boxShadow: disabled
            ? "none"
            : choice == id
            ? colorMode == "light"
              ? "inset 0 0 0 2.6px #008ffa"
              : "inset 0 0 0 2.6px #0071ca"
            : colorMode == "light"
            ? "inset 0 0 0 1.6px #008ffa"
            : "inset 0 0 0 1.6px #0071ca",
        }}
        transition="all .18s"
        cursor={disabled ? "not-allowed" : "pointer"}
        p="24px"
        pointerEvents={disabled ? "none" : "all"}
        {...boxProps}
        onClick={disabled ? null : boxProps.onClick}
      >
        <Flex alignItems="center" h="fit-content">
          <Box>
            <Text
              fontWeight="500"
              fontSize="16px"
              mb="2px"
              color={disabled ? "#b4b4b4" : "unset"}
            >
              {title}
            </Text>
            <Text
              fontWeight="400"
              fontSize="14px"
              color={!disabled ? "#808080" : "#b4b4b4"}
              lineHeight="1.35"
            >
              {subtitle}
            </Text>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

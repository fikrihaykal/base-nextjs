import {
  Box,
  Flex,
  FormLabel,
  Input,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { useFormikContext } from "formik";
import { forwardRef, useEffect, useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import { differenceInBusinessDays } from "date-fns";
import { id } from "date-fns/locale";
import DropdownSelect from "@/components/customs/Select";
import InputSelectFormik from "@/components/molecules/InputSelectFormik";
import { InfiniteQuery } from "@/utils/table";

registerLocale("id", id);

export const PilihTanggal = () => {
  const { setFieldValue } = useFormikContext();
  const { colorMode } = useColorMode();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [totalDay, setTotalDay] = useState<number>(1);
  const [tipeLibur, setTipeLibur] = useState("");


  const DropdownTipeLibur = [
    { value: "LN", label: "Libur Nasional" },
    { value: "CB", label: "Cuti Bersama" },
  ];

  function getBusinessDays(startDate: Date, endDate: Date) {
    return differenceInBusinessDays(new Date(endDate), new Date(startDate));
  }

  useEffect(() => {
    setFieldValue("tanggal_awal", startDate);
    setFieldValue("tanggal_akhir", endDate);
    // setTotalDay(getBusinessDays(startDate, endDate) + 1);
    // setFieldValue("durasiLibur", totalDay);
    // setFieldValue("tipeLibur", tipeLibur);
  }, [startDate, endDate, totalDay]);

  return (
    <>
      <Flex w="100%" gap="16px" wrap={["wrap"]}>
        <Flex flex="1" minW="240px">
          <Flex
            w="100%"
            flexDir="column"
            className="wizard__input_container"
            pos="relative"
          >
            <DatePicker
              locale="id"
              dateFormat="EEEE, dd MMMM yyyy"
              selected={startDate}
              startDate={startDate}
              endDate={endDate}
              maxDate={endDate}
              filterDate={(date) => {
                return date.getDay() !== 0 && date.getDay() !== 6;
              }}
              selectsStart
              onChange={(date: Date) => {
                setStartDate(date);
                setFieldValue("tanggal_awal", date);
              }}
              customInput={<TanggalMulaiInput />}
            />
          </Flex>
        </Flex>
        <Flex flex="1" minW="240px">
          <Flex
            w="100%"
            flexDir="column"
            className="wizard__input_container"
            pos="relative"

            // pl="8px"
          >
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
                setFieldValue("tanggal_akhir", date);
                // getDates(startDate, endDate, dateArray);
              }}
              customInput={<TanggalSelesaiInput />}
            />
          </Flex>
        </Flex>
        <Flex flex="1" minW="240px">
          <Flex flexDir="column" w="100%">
            <Text fontSize="14px" mb="8px" fontWeight="500">
              Durasi libur
            </Text>
            <Input
              className="sorting__input"
              h="56px"
              //   p="0px 20px 0 20px"
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
          </Flex>
        </Flex>
        <Flex flex="1" minW="240px">
          <Flex flexDir="column" w="100%" mb="24px">
            {/* <Text fontSize="14px" mb="8px" fontWeight="500">
              Tipe libur
            </Text>
            <DropdownSelect
              placeholder="Pilih role"
              defaultValue={[DropdownTipeLibur[0]]}
              options={DropdownTipeLibur}
              isDisabled={false}
              isMulti={false}
              isClearable={false}
            /> */}
            <InputSelectFormik
              label="Tipe libur"
              placeholder="Pilih Tipe Libur"
              name="jenis"
              defaultValue={[DropdownTipeLibur[0]]}
              options={DropdownTipeLibur}
              req
              
              validate={(value) => {
                let error;

                if (!value) {
                  error = " ";
                }

                return error;
              }}
            />
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

const TanggalMulaiInput = forwardRef<HTMLDivElement, unknown>(
  ({ value, onClick }: any, ref) => {
    const { colorMode } = useColorMode();
    return (
      <Box onClick={onClick} ref={ref}>
        <FormLabel
          fontSize="14px"
          fontWeight="400"
          mb="7px"
          display="flex"
          justifyContent="space-between"
        >
          <Flex>
            {/* {label}{" "} */}
            <Text fontWeight="500">Tanggal mulai libur</Text>
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
          cursor="pointer"
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
      <Box onClick={onClick} ref={ref}>
        <FormLabel
          fontSize="14px"
          fontWeight="400"
          mb="7px"
          display="flex"
          justifyContent="space-between"
        >
          <Flex>
            <Text fontWeight="500">Tanggal selesai libur</Text>
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

export default TanggalMulaiInput;

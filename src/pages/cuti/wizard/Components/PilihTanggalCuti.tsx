import {
    Box,
    Flex,
    FormLabel,
    Input,
    Text,
    useColorMode
} from "@chakra-ui/react";
import { useFormikContext } from "formik";
import { forwardRef, useEffect, useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import { differenceInBusinessDays } from "date-fns";
import { id } from "date-fns/locale";

registerLocale("id", id);

export const PilihTanggalCuti = () => {
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
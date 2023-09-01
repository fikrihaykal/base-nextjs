import { Box, Button, Flex, Input, Text, useColorMode } from "@chakra-ui/react";
import { ReactNode, forwardRef, useContext, useState } from "react";
import { Wizard, useWizard } from "react-use-wizard";
import DatePicker, { ReactDatePickerProps } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Textarea,
} from "@chakra-ui/react";
import { Field, Form, Formik, useField, useFormikContext } from "formik";

interface InputPropsDate {
  label: string;
  name: string;
  validate?: (value: any) => undefined | string | Promise<any>;
  type?: string;
  multiple?: boolean;
  value?: string;
  req?: boolean;
  helpertext?: string;
  custominput?: ReactNode;
  locale?: string;
  dateFormat?: string;
}

export const InputDateFormik = ({ ...props }: InputPropsDate) => {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(props);
  return (
    <DatePicker
      {...field}
      {...props}
      selected={(field.value && new Date(field.value)) || null}
      onChange={(val) => {
        setFieldValue(field.name, val);
      }}
      customInput={<TanggalMulaiInput />}
    />
  );
};
export default InputDateFormik;

const TanggalMulaiInput = forwardRef<HTMLInputElement, unknown>(
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
            Tanggal mulai
            <Text color="#ff3333">{"\u00A0"}*</Text>
          </Flex>

          <Text color="#ff3333" fontWeight="500">
            {"\u00A0"}
          </Text>
        </FormLabel>

        <Input
          className="sorting__input"
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

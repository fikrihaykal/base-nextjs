import React from "react";
import {
  Box,
  Text,
  useColorMode,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import { useField } from "formik";
import DropdownSelect from "../customs/Select";

interface InputSelectProps {
  label?: string;
  name: string;
  validate?: (value: any) => undefined | string | Promise<any>;
  type?: string;
  multiple?: boolean;
  req?: boolean;
  helpertext?: string;
  placeholder?: string;
  onBlur?: () => void;
  options: any[];
  isRequired?: boolean;
  isClearable?: boolean;
  defaultValue?: any;
}

const InputSelectFormik = ({ ...selectProps }: InputSelectProps) => {
  const [field, meta, helpers] = useField(selectProps);
  const { colorMode } = useColorMode();

  const {
    defaultValue,
    label,
    name,
    req,
    helpertext,
    onBlur,
    options,
    isRequired,
    isClearable,
    placeholder,
  } = selectProps;

  return (
    <FormControl>
      <Box
        className="wizard__input_container"
        pos="relative"
        flexGrow="1"
        mb="16px"
      >
        <FormLabel
          fontSize="14px"
          fontWeight="500"
          mb="2px"
          pl="2px"
          display="flex"
          justifyContent="space-between"
          alignItems="end"
        >
          <Box>
            {label}
            <Text
              display={req ? "unset" : "none"}
              color={colorMode === "light" ? "red.500" : "redDim.500"}
            >
              {"\u00A0"}*
            </Text>
            <Text
              color="#808080"
              fontSize="13px"
              display="block"
              mb="6px"
              mt="1px"
            >
              {helpertext}
            </Text>
          </Box>

          <Text
            display={meta.touched && meta.error ? "block" : "none"}
            color={colorMode === "light" ? "red.500" : "redDim.500"}
            fontWeight="500"
            pb="6px"
            fontSize="14px"
          >
            {"\u00A0"}
            {meta.error}
          </Text>
        </FormLabel>

        <DropdownSelect
          placeholder={placeholder}
          defaultValue={
            options
              ? options.find((option) => option.value === field.value)
              : ""
          }
          isInvalid={meta.touched && meta.error ? true : false}
          isRequired={isRequired}
          isClearable={isClearable}
          options={options}
          name={name}
          value={
            options
              ? options.find((option) => option.value === field.value)
              : ""
          }
          onChange={(option: any) => helpers.setValue(option.value)}
          onBlur={() => {
            helpers.setTouched(true);
            if (onBlur) onBlur();
          }}
        />
      </Box>
    </FormControl>
  );
};

export default InputSelectFormik;

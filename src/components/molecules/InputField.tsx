import { Box, Button, Flex, Input, Text, useColorMode } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { Wizard, useWizard } from "react-use-wizard";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Textarea,
} from "@chakra-ui/react";
import { Field, Form, Formik, useField } from "formik";

type InputProps = {
  label: string;
  name: string;
  validate?: (value: any) => undefined | string | Promise<any>;
  type?: string;
  multiple?: boolean;
  value?: string;
  req?: boolean;
  helpertext?: string;
  placeholder?: string;
};

const InputFormik = ({ ...props }: InputProps) => {
  const [field, meta, helpers] = useField(props);
  const { colorMode } = useColorMode();

  return (
    <>
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
            mb="0px"
            pl="2px"
            display="flex"
            justifyContent="space-between"
            alignItems="end"
          >
            <Box>
              <Flex>
                {props.label}{" "}
                <Text display={props.req ? "unset" : "none"} color="#ff3333">
                  {"\u00A0"}*
                </Text>
              </Flex>
              <Text
                // pl="2px"
                color="#808080"
                fontSize="13px"
                display="block"
                mb="6px"
                mt="1px"
              >
                {props.helpertext}
              </Text>
            </Box>

            <Text
              display={meta.touched && meta.error ? "block" : "none"}
              color="#ff3333"
              fontWeight="500"
              pb="6px"
              fontSize="14px"
            >
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
            p="0px 20px 0 20px"
            border="0px solid transparent"
            borderRadius="16px"
            bg={colorMode == "light" ? "rgba(228,228,228,0.3)" : "#292929"}
            fontSize="14px"
            fontWeight="600"
            color={colorMode == "light" ? "#1b1d21" : "#fff"}
            _placeholder={{
              color: "#bababa",
              fontWeight: "500",
            }}
            placeholder={props.placeholder}
            borderColor={meta.touched && meta.error ? "none" : "none"}
            sx={{
              boxShadow:
                meta.touched && meta.error
                  ? "inset 0 0 0 2px #ff3333d0 !important"
                  : "none",
            }}
            _focusVisible={{
              border: "none",
              boxShadow:
                colorMode == "light"
                  ? "inset 0 0 0 2px #008ffa"
                  : "inset 0 0 0 2px #0071ca",
              background: colorMode == "light" ? "white" : "#222222",
            }}
          />
        </Box>
      </FormControl>
    </>
  );
};

export default InputFormik;

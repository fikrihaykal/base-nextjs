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

const InputAreaFormik = ({ label, ...props }: any) => {
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
            fontWeight="400"
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

            <Text
              display={meta.touched && meta.error ? "block" : "none"}
              color="#ff3333"
              fontWeight="500"
            >
              {"\u00A0"}
              {meta.error}
            </Text>
          </FormLabel>
          <Textarea
            {...field}
            {...props}
            className="sorting__input"
            w="100%"
            h="112px"
            p="20px"
            border="0px solid transparent"
            borderRadius="16px"
            bg={colorMode == "light" ? "rgba(228,228,228,0.3)" : "#292929"}
            resize="none"
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

export default InputAreaFormik;

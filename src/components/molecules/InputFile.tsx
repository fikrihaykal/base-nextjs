import { Box, Button, Flex, Input, Text, useColorMode } from "@chakra-ui/react";
import { useContext, useRef, useState } from "react";
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
import { Field, Form, Formik, useField, useFormikContext } from "formik";

type InputProps = {
  label: string;
  name: string;
  validate?: (value: any) => undefined | string | Promise<any>;
  type?: string;
  multiple?: boolean;
  req?: boolean;
  helpertext?: string;
  placeholder?: string;
  display?: string;
};

const InputFileFormik = ({ ...props }: InputProps) => {
  const { setFieldValue } = useFormikContext();
  const fileInput = useRef<HTMLInputElement>(null);
  const [field, meta, helpers] = useField(props);
  const [objUrl, setObjUrl] = useState<string | undefined>();
  const { colorMode } = useColorMode();
  const handleClick = (event: any) => {
    if (fileInput.current != null) {
      fileInput.current.click();
    }
  };

  return (
    <>
      <FormControl>
        <Flex mt="6px" mb="24px" display={props.display}>
          <Box>
            <Flex>
              <Text fontSize="14px" fontWeight="500" mb="8px">
                {props.label}{" "}
              </Text>
              <Text display={props.req ? "unset" : "none"} color="#ff3333">
                {"\u00A0"}*
              </Text>
            </Flex>

            <Flex gap="24px">
              <Box
                minWidth="92px"
                height="92px"
                borderRadius="12px"
                bg="#f7f7f7"
                bgImg={objUrl}
                bgSize="cover"
              ></Box>

              <Flex flexDir="column">
                <Button
                  w="fit-content"
                  px="16px"
                  mb="15px"
                  fontSize="12px"
                  borderRadius="12px"
                  bg="#1b1b1b"
                  color="white"
                  onClick={handleClick}
                  _hover={{
                    background: colorMode == "light" ? "#008ffa" : "#0071ca",
                  }}
                  transition="all .2s linear"
                >
                  <input
                    {...field}
                    {...props}
                    accept="image/*"
                    type="file"
                    hidden
                    ref={fileInput}
                    value={undefined}
                    onChange={(e) => {
                      if (e.currentTarget.files) {
                        setObjUrl(
                          URL.createObjectURL(e.currentTarget.files[0])
                        );
                        setFieldValue("dokumen", e.currentTarget.files[0]);
                      }
                    }}
                  />
                  Pilih dokumen
                </Button>
                <Text color="#808080" fontSize="13px" display="block">
                  Dokumen pendukung untuk cuti sakit dapat berupa surat dokter,
                  resep dokter, atau foto sakit. (PNG/JPG, max. 2 MB)
                </Text>
              </Flex>
            </Flex>
          </Box>
        </Flex>
      </FormControl>
    </>
  );
};

export default InputFileFormik;

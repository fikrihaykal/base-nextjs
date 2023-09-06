import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { ChangeEvent, useContext, useRef, useState } from "react";
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
  const handleClick = () => {
    if (fileInput.current != null) {
      fileInput.current.click();
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      setObjUrl(URL.createObjectURL(e.target.files[0]));
      reader.onloadend = (readerEvent: ProgressEvent<FileReader>) => {
        if (readerEvent?.target?.result) {
          setFieldValue(props.label, readerEvent.target.result);
        }
      };
    }
  };

  return (
    <>
      <FormControl>
        <Flex mt="6px" mb="24px" display={props.display} flexDir="column">
          <Flex>
            <Text fontSize="14px" fontWeight="500">
              {props.label}{" "}
            </Text>
            <Text display={props.req ? "unset" : "none"} color="#ff3333">
              {"\u00A0"}*
            </Text>
          </Flex>
          <Text color="#808080" fontSize="13px" lineHeight="1.12" mb="8px">
            Dokumen pendukung untuk cuti sakit dapat berupa surat dokter, resep
            dokter, atau foto sakit.
          </Text>
          <Box
            display="flex"
            pos="relative"
            w="100%"
            minH="300px"
            bg={colorMode == "light" ? "#f7f7f7" : "#292929"}
            borderRadius="24px"
            justifyContent="center"
            alignItems="start"
            overflowY="auto"
            overflowX="hidden"
            pt="34px"
            pl="20px"
          >
            <Image
              maxW="90%"
              pos="absolute"
              zIndex="0"
              src={objUrl}
              borderRadius="12px"
            ></Image>
            <Box
              display="flex"
              flexDir="column"
              justifyContent="center"
              alignItems="center"
              zIndex="10"
              alignSelf="center"
            >
              <Button
                w="fit-content"
                px="16px"
                mb="6px"
                minW="112px"
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
                    handleFileChange(e);
                  }}
                />
                Pilih dokumen
              </Button>

              <Text color="#808080" fontSize="13px">
                PNG/JPG, max. 2 MB
              </Text>
            </Box>
          </Box>

          {/* <Flex gap="24px">
              <Box
                minWidth="92px"
                height="92px"
                borderRadius="12px"
                bg="#f7f7f7"
                bgImg={objUrl}
                bgSize="cover"
              ></Box>
          
              <Flex >
                <Button
                  w="fit-content"
                  px="16px"
                  mb="15px"
                  minW="112px"
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
                      handleFileChange(e);
                    }}
                  />
                  Pilih dokumen
                </Button>
                <Text color="#808080" fontSize="13px" display="block" pl="12px">
                  Dokumen pendukung untuk cuti sakit dapat berupa surat dokter,
                  resep dokter, atau foto sakit. (PNG/JPG, max. 2 MB)
                </Text>
              </Flex>
            </Flex> */}
        </Flex>
      </FormControl>
    </>
  );
};

export default InputFileFormik;

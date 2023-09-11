import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { ChangeEvent, useContext, useEffect, useRef, useState } from "react";
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
import { FileUploader } from "react-drag-drop-files";

const fileTypes = ["JPEG", "PNG", "GIF"];

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
  const [file, setFile] = useState<any>();
  const { setFieldValue } = useFormikContext();
  const fileInput = useRef<HTMLInputElement>(null);
  const [field, meta, helpers] = useField(props);
  const [objUrl, setObjUrl] = useState<string | undefined>();
  const [fileName, setFileName] = useState<string | undefined>();
  const { colorMode } = useColorMode();
  const handleClick = () => {
    if (fileInput.current != null) {
      fileInput.current.click();
    }
  };

  const handleChange = (file: any) => {
    setFile(file);
    console.log(file[0].name);
    const reader = new FileReader();
    reader.readAsDataURL(file[0]);
    setObjUrl(URL.createObjectURL(file[0]));
    setFileName(file[0].name);
    reader.onloadend = (readerEvent: ProgressEvent<FileReader>) => {
      if (readerEvent?.target?.result) {
        console.log(file[0].name, readerEvent.target.result);
        setFieldValue(props.name, readerEvent.target.result);
      }
    };
    file[0].value = "";
  };

  // const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   if (e.target.files && e.target.files[0]) {
  //     const reader = new FileReader();
  //     reader.readAsDataURL(e.target.files[0]);
  //     setObjUrl(URL.createObjectURL(e.target.files[0]));
  //     setFileName(e.target.files[0].name);
  //     reader.onloadend = (readerEvent: ProgressEvent<FileReader>) => {
  //       if (readerEvent?.target?.result) {
  //         console.log(props.name, readerEvent.target.result);
  //         setFieldValue(props.name, readerEvent.target.result);
  //       }
  //     };
  //     e.target.value = "";
  //   }
  // };

  return (
    <>
      <FormControl>
        <Box
          className="wizard__input_container"
          pos="relative"
          flexGrow="1"
          // mb="16px"
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
              pb="8px"
            >
              {"\u00A0"}
              {meta.error}
            </Text>
          </FormLabel>
        </Box>
        <FileUploader
          {...field}
          {...props}
          multiple={true}
          handleChange={handleChange}
          name="file"
          types={fileTypes}
        >
          <Flex mt="6px" mb="24px" display={props.display} flexDir="column">
            <Box
              display="flex"
              pos="relative"
              w="100%"
              minH="300px"
              bg={colorMode == "light" ? "#f7f7f7" : "#292929"}
              borderRadius="16px"
              justifyContent="center"
              alignItems="start"
              overflowY="scroll"
              overflowX="hidden"
              pt={objUrl == undefined ? "0px" : "34px"}
              sx={{
                scrollbarGutter: "stable both-edges",
                "::-webkit-scrollbar-thumb": {
                  backgroundColor: colorMode == "light" ? "#dadada" : "#292929",
                },
              }}
              ref={fileInput}
            >
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexDir="column"
                pos="absolute"
              >
                <Image
                  maxW="94%"
                  zIndex="0"
                  src={objUrl}
                  borderRadius="12px"
                ></Image>
                <Box w="100%" h="34px" bg="none"></Box>
              </Box>

              <Box
                display="flex"
                flexDir="column"
                justifyContent="center"
                alignItems="center"
                zIndex="10"
                alignSelf="center"
              ></Box>
            </Box>
          </Flex>
        </FileUploader>
      </FormControl>
    </>
  );
};

export default InputFileFormik;

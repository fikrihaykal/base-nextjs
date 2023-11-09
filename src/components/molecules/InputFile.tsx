import {
  Box,
  Button,
  Flex,
  Input,
  Text,
  Tooltip,
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
import { CloseIcon, EyeIcon } from "../atoms/IconParams";
import { title } from "process";

const fileTypes = ["JPEG", "PNG", "JPG"];

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
  maxSize?: number;
};

const InputFileFormik = ({ ...props }: InputProps) => {
  type StatusFile = "error" | "selected" | "dropped" | "";

  const [file, setFile] = useState<any>();
  const { setFieldValue } = useFormikContext();
  const [field, meta, helpers] = useField(props);
  const [statusFile, setStatus] = useState<StatusFile>("");
  const [objUrl, setObjectUrl] = useState<any>("");
  const [fileName, setFileName] = useState<string | undefined>();
  const [fileSize, setFileSize] = useState<number | undefined>();
  const { colorMode } = useColorMode();
  const [dragged, setDragged] = useState<boolean | undefined>();

  const handleChange = (file: any) => {
    setFile(file);
    console.log(file)
    const reader = new FileReader();
    reader.readAsDataURL(file[0]);
    setFileName(file[0].name);
    setFileSize(file[0].size);
    reader.onloadend = (readerEvent: ProgressEvent<FileReader>) => {
      if (readerEvent?.target?.result) {
        setFieldValue(props.name, readerEvent.target.result);
        setObjectUrl(URL.createObjectURL(file[0]));
      }
    };
    file[0].value = "";
  };

  return (
    <>
      <FormControl>
        <Box
          className="wizard__input_container"
          pos="relative"
          flexGrow="1"
          transition="all .25s"
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
              display={
                (meta.touched && meta.error) || statusFile == "error"
                  ? "block"
                  : "none"
              }
              color="#ff3333"
              fontWeight="500"
              pb="6px"
              fontSize="14px"
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
          onDraggingStateChange={() => {
            dragged ? setDragged(false) : setDragged(true);
          }}
          name="file"
          types={fileTypes}
          zIndex="0"
          position="relative"
          onSizeError={() => {
            setStatus("error");
          }}
          onSelect={() => {
            setStatus("selected");
          }}
          onDrop={() => {
            setStatus("dropped");
          }}
        >
          <Flex
            // mt="6px"
            mb="12px"
            display={props.display}
            flexDir="column"
            bg={colorMode == "light" ? "white" : "#222222"}
            zIndex="0"
            position="relative"
          >
            <Box
              className="file__uploader"
              display="flex"
              pos="relative"
              w="100%"
              maxH="200px"
              h="120px"
              bg={
                colorMode == "light"
                  ? dragged
                    ? "#f7f7f7"
                    : "#008ffa10"
                  : "#292929"
              }
              borderRadius="16px"
              justifyContent="center"
              alignItems="center"
              cursor="pointer"
              sx={{
                scrollbarGutter: "stable both-edges",
                "::-webkit-scrollbar-thumb": {
                  backgroundColor: colorMode == "light" ? "#dadada" : "#292929",
                },
              }}
              _hover={{
                backgroundColor: colorMode == "light" ? "#fff" : "#141414",
              }}
              transition="all 0.25s"
            >
              <Box
                w="100%"
                h="100%"
                pos="relative"
                bgImage="/images/borderdashed.png"
                bgSize="contain"
                bgPosition="center"
                bgRepeat="no-repeat"
                borderRadius="16px"
                filter={
                  !dragged
                    ? "grayscale(0)"
                    : (meta.touched && meta.error) || statusFile == "error"
                    ? statusFile == "selected" || statusFile == "dropped"
                      ? "grayscale(1)"
                      : "grayscale(0) hue-rotate(140deg)"
                    : "grayscale(1)"
                }
                opacity={
                  !dragged
                    ? "1"
                    : (meta.touched && meta.error) || statusFile == "error"
                    ? statusFile == "selected" || statusFile == "dropped"
                      ? "0.45"
                      : "1"
                    : "0.45"
                }
                transition="all 0.18s"
                _groupHover={{
                  filter: "grayscale(0)",
                  opacity: "1",
                }}
              ></Box>
              <Box
                display="flex"
                flexDir="column"
                justifyContent="center"
                alignItems="center"
                pos="absolute"
              >
                <Flex>
                  <Text
                    fontSize="14px"
                    fontWeight="500"
                    color="#808080"
                    textDecor="underline"
                    _groupHover={{
                      color: "#008fff",
                    }}
                    transition="all .25s"
                  >
                    Klik untuk upload
                  </Text>
                  <Text
                    fontSize="14px"
                    fontWeight="500"
                    color="#808080"
                    transition="all .25s"
                  >
                    &nbsp;atau
                  </Text>
                  <Text
                    fontSize="14px"
                    fontWeight="500"
                    transition="all .25s"
                    color={
                      !dragged
                        ? "#008fff"
                        : meta.touched && meta.error
                        ? statusFile == "selected" || statusFile == "dropped"
                          ? "#808080"
                          : "#808080"
                        : "#808080"
                    }
                  >
                    &nbsp;seret & lepas file disini
                  </Text>
                </Flex>

                <Flex>
                  <Text
                    pt="8px"
                    fontSize="13px"
                    fontWeight="500"
                    color="#808080"
                    transition="all .25s"
                  >
                    PNG/JPG maks. 2 MB
                  </Text>
                </Flex>
              </Box>
            </Box>
          </Flex>
        </FileUploader>
      </FormControl>
      
    </>
  );
};

export default InputFileFormik;

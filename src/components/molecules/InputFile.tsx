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
  const [fileName, setFileName] = useState<string | undefined>();
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
      setFileName(e.target.files[0].name);
      reader.onloadend = (readerEvent: ProgressEvent<FileReader>) => {
        if (readerEvent?.target?.result) {
          // console.log(props.label, readerEvent.target.result);
          setFieldValue(props.name, readerEvent.target.result);
        }
      };
      e.target.value = "";
    }
  };

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

          <Box
            w="100%"
            h="56px"
            display="flex"
            alignItems="center"
            pl="8px"
            // p="0px 20px 0 20px"
            border="0px solid transparent"
            borderRadius="16px"
            bg={colorMode == "light" ? "rgba(228,228,228,0.3)" : "#292929"}
            fontSize="14px"
            fontWeight="600"
            color={colorMode == "light" ? "#1b1d21" : "#fff"}
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
          >
            <Button
              w="fit-content"
              px="16px"
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
            <Text
              fontSize="14px"
              fontWeight="600"
              pl="8px"
              color={colorMode == "light" ? "#1b1d21" : "#fff"}
            >
              {fileName}
            </Text>
            <input
              {...field}
              {...props}
              readOnly={true}
              id="inputPlace"
              hidden
              value={fileName}
              // onChange={(e) => {
              //   console.log("changed");
              // }}
            ></input>
            <Button
              w="fit-content"
              px="16px"
              ml="auto"
              mr="8px"
              fontSize="12px"
              borderRadius="12px"
              onClick={() => {
                setObjUrl(undefined);
                setFileName(undefined);
                setFieldValue(props.name, null);
              }}
              bg="#1b1b1b"
              display={objUrl == undefined ? "none" : "block"}
              color="white"
              _hover={{
                background: colorMode == "light" ? "#008ffa" : "#0071ca",
              }}
              transition="all .2s linear"
            >
              X
            </Button>
          </Box>
        </Box>
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

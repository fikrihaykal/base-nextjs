import {
  Box,
  BoxProps,
  Center,
  Circle,
  createIcon,
  Icon,
  Stack,
  StackProps,
  Text,
  useColorModeValue,
  useId,
  useRadio,
  useRadioGroup,
  UseRadioProps,
  useStyleConfig,
} from "@chakra-ui/react";
import {
  Children,
  cloneElement,
  isValidElement,
  ReactElement,
  useMemo,
} from "react";

interface RadioCardGroupProps<T> extends Omit<StackProps, "onChange"> {
  name?: string;
  value?: T;
  defaultValue?: string;
  onChange?: (value: T) => void;
}

export const RadioCardGroup = <T extends string>(
  props: RadioCardGroupProps<T>
) => {
  const { children, name, defaultValue, value, onChange, ...rest } = props;
  const { getRootProps, getRadioProps } = useRadioGroup({
    name,
    defaultValue,
    value,
    onChange,
  });

  const cards = useMemo(
    () =>
      Children.toArray(children)
        .filter<ReactElement<RadioCardProps>>(isValidElement)
        .map((card) => {
          return cloneElement(card, {
            radioProps: getRadioProps({
              value: card.props.value,
            }),
          });
        }),
    [children, getRadioProps]
  );

  return <Stack {...getRootProps(rest)}>{cards}</Stack>;
};

interface RadioCardProps extends BoxProps {
  value: string;
  isMark?: boolean;
  isDisabled?: boolean;
  isRequired?: boolean;
  radioProps?: UseRadioProps;
}

export const RadioCard = (props: RadioCardProps) => {
  const { radioProps, children, isMark, isDisabled, isRequired, ...rest } =
    props;
  const { getInputProps, getCheckboxProps, getLabelProps, state } =
    useRadio(radioProps);
  const id = useId(undefined, "radio-button");

  const styles = useStyleConfig("RadioCard", props);
  const inputProps = getInputProps();
  const checkboxProps = getCheckboxProps();
  const labelProps = getLabelProps();
  const borderdefault = useColorModeValue("gray.100", "gray.700");
  const borderactive = useColorModeValue("blue.500", "#007FEB");
  const backgroundactive = useColorModeValue("blue.50", "blue.900");
  const disabledborderdefault = useColorModeValue("gray.100", "gray.800");
  const disabledbordermark = useColorModeValue("gray.200", "gray.800");
  const disabledbackground = useColorModeValue("gray.50", "whiteAlpha.100");
  const disabledcheckmarkactive = useColorModeValue("white", "gray.700");
  const disabledtext = useColorModeValue("gray.400", "gray.700");
  return (
    <Box
      as="label"
      {...labelProps}
      sx={{
        ".focus-visible + [data-focus]": {
          boxShadow: "outline",
          zIndex: 1,
        },
      }}
      _notFirst={{ marginInlineStart: "0px", marginTop: "0px" }}
      w="auto"
    >
      <input
        {...inputProps}
        aria-labelledby={id}
        width="auto"
        disabled={isDisabled}
        required={isRequired}
        style={{ position: "relative", display: "none" }}
      />

      {isDisabled ? (
        <Box
          sx={styles}
          {...checkboxProps}
          {...rest}
          cursor="not-allowed"
          bg={disabledbackground}
          border="2px solid"
          color={disabledtext}
          borderColor={disabledborderdefault}
          borderRadius="16px"
          p="16px"
          transition="all .25s"
          display="flex"
          alignItems="start"
          gap={3}
        >
          {isMark && (
            <Box w="22px" h="22px" mt="1px" ml="2px">
              <Center
                w="22px"
                h="22px"
                bg={state.isChecked ? disabledbordermark : "unset"}
                border="2px solid"
                borderColor={disabledbordermark}
                borderRadius="16px"
              >
                <Box
                  w="8px"
                  h="8px"
                  borderRadius="full"
                  bg={state.isChecked ? disabledcheckmarkactive : "transparent"}
                />
              </Center>
            </Box>
          )}
          <Box>{children}</Box>
        </Box>
      ) : (
        <Box
          sx={styles}
          {...checkboxProps}
          {...rest}
          cursor="pointer"
          bg={state.isChecked ? backgroundactive : "unset"}
          border="2px solid"
          borderColor={
            state.isChecked ? borderactive : isRequired ? "red" : borderdefault
          }
          borderRadius="16px"
          p="16px"
          transition="all .25s"
          display="flex"
          alignItems="start"
          gap={3}
        >
          {isMark && (
            <Box w="22px" h="22px" mt="1px" ml="2px">
              <Center
                w="22px"
                h="22px"
                bg={state.isChecked ? borderactive : "unset"}
                border="2px solid"
                borderColor={state.isChecked ? borderactive : borderdefault}
                borderRadius="16px"
                transition="all .25s"
              >
                <Box
                  w="8px"
                  h="8px"
                  borderRadius="full"
                  bg={state.isChecked ? "white" : "transparent"}
                  transition="all .25s"
                />
              </Center>
            </Box>
          )}
          <Box>{children}</Box>
        </Box>
      )}
      {isRequired && (
        <Text fontSize="13px" fontWeight="500" color="red.500" mb="16px">
          Wajib dipilih
        </Text>
      )}
    </Box>
  );
};

export const RadioCardReverse = (props: RadioCardProps) => {
  const { radioProps, children, isMark, isDisabled, isRequired, ...rest } =
    props;
  const { getInputProps, getCheckboxProps, getLabelProps, state } =
    useRadio(radioProps);
  const id = useId(undefined, "radio-button");

  const styles = useStyleConfig("RadioCard", props);
  const inputProps = getInputProps();
  const checkboxProps = getCheckboxProps();
  const labelProps = getLabelProps();
  const borderdefault = useColorModeValue("gray.100", "gray.700");
  const borderactive = useColorModeValue("blue.500", "#007FEB");
  const backgroundactive = useColorModeValue("blue.50", "blue.900");
  const disabledborderdefault = useColorModeValue("gray.100", "gray.800");
  const disabledbordermark = useColorModeValue("gray.200", "gray.800");
  const disabledbackground = useColorModeValue("gray.50", "whiteAlpha.100");
  const disabledcheckmarkactive = useColorModeValue("white", "gray.700");
  const disabledtext = useColorModeValue("gray.400", "gray.700");
  return (
    <Box
      as="label"
      {...labelProps}
      sx={{
        ".focus-visible + [data-focus]": {
          boxShadow: "outline",
          zIndex: 1,
        },
      }}
      _notFirst={{ marginInlineStart: "0px", marginTop: "0px" }}
      w="auto"
    >
      <input
        {...inputProps}
        aria-labelledby={id}
        width="auto"
        disabled={isDisabled}
        required={isRequired}
        style={{ position: "relative", display: "none" }}
      />

      {isDisabled ? (
        <Box
          sx={styles}
          {...checkboxProps}
          {...rest}
          cursor="not-allowed"
          bg={disabledbackground}
          border="2px solid"
          color={disabledtext}
          borderColor={disabledborderdefault}
          borderRadius="16px"
          p="16px"
          transition="all .25s"
          display="flex"
          justifyContent="space-between"
          alignItems="start"
          gap={3}
        >
          <Box>{children}</Box>
          {isMark && (
            <Box w="22px" h="22px" mt="1px" mr="2px">
              <Center
                w="22px"
                h="22px"
                bg={state.isChecked ? disabledbordermark : "unset"}
                border="2px solid"
                borderColor={disabledbordermark}
                borderRadius="16px"
              >
                <Box
                  w="8px"
                  h="8px"
                  borderRadius="full"
                  bg={state.isChecked ? disabledcheckmarkactive : "transparent"}
                />
              </Center>
            </Box>
          )}
        </Box>
      ) : (
        <Box
          sx={styles}
          {...checkboxProps}
          {...rest}
          cursor="pointer"
          bg={state.isChecked ? backgroundactive : "unset"}
          border="2px solid"
          borderColor={
            state.isChecked ? borderactive : isRequired ? "red" : borderdefault
          }
          borderRadius="16px"
          p="16px"
          transition="all .25s"
          display="flex"
          justifyContent="space-between"
          alignItems="start"
          gap={3}
        >
          <Box>{children}</Box>
          {isMark && (
            <Box w="22px" h="22px" mt="1px" mr="2px">
              <Center
                w="22px"
                h="22px"
                bg={state.isChecked ? borderactive : "unset"}
                border="2px solid"
                borderColor={state.isChecked ? borderactive : borderdefault}
                borderRadius="16px"
                transition="all .25s"
              >
                <Box
                  w="8px"
                  h="8px"
                  borderRadius="full"
                  bg={state.isChecked ? "white" : "transparent"}
                  transition="all .25s"
                />
              </Center>
            </Box>
          )}
        </Box>
      )}
      {isRequired && (
        <Text fontSize="13px" fontWeight="500" color="red.500" mb="16px">
          Wajib dipilih
        </Text>
      )}
    </Box>
  );
};

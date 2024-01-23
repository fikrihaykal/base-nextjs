import AppSettingContext from "@/providers/AppSettingProvider";
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
  useContext,
  useMemo,
} from "react";

interface PlainRadioGroupProps<T> extends Omit<StackProps, "onChange"> {
  name?: string;
  value?: T;
  defaultValue?: string;
  onChange?: (value: T) => void;
}

export const PlainRadioGroup = <T extends string>(
  props: PlainRadioGroupProps<T>
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
        .filter<ReactElement<PlainRadioProps>>(isValidElement)
        .map((card) => {
          return cloneElement(card, {
            radioprops: getRadioProps({
              value: card.props.value,
            }),
          });
        }),
    [children, getRadioProps]
  );

  return <Stack {...getRootProps(rest)}>{cards}</Stack>;
};

interface PlainRadioProps extends BoxProps {
  value: string;
  isDisabled?: boolean;
  isRequired?: boolean;
  isInvalid?: boolean;
  name?: string;
  radioprops?: UseRadioProps;
  alignMark?: "start" | "center" | "end";
}

export const PlainRadio = (props: PlainRadioProps) => {
  const {
    radioprops,
    children,
    isDisabled,
    isRequired,
    isInvalid,
    name,
    alignMark = "center",
    ...rest
  } = props;
  const { getInputProps, getCheckboxProps, getLabelProps, state } =
    useRadio(radioprops);
  const id = useId(undefined, "radio-button");

  const { colorPref } = useContext(AppSettingContext);
  const styles = useStyleConfig("PlainRadio", props);
  const inputProps = getInputProps();
  const checkboxProps = getCheckboxProps();
  const labelProps = getLabelProps();
  const borderdefault = useColorModeValue("gray.100", "gray.700");
  const borderactive = useColorModeValue(`${colorPref}.500`, `${colorPref}Dim.500`);
  const backgroundactive = useColorModeValue(`${colorPref}.50`, `${colorPref}Dim.800`);
  const disabledborderdefault = useColorModeValue("gray.100", "gray.800");
  const disabledbordermark = useColorModeValue("gray.200", "gray.800");
  const disabledbackground = useColorModeValue("gray.50", "whiteAlpha.100");
  const disabledcheckmarkactive = useColorModeValue("white", "gray.700");
  const disabledtext = useColorModeValue("gray.400", "gray.700");
  const errorcolor = useColorModeValue("red.500", "#B53F3F");
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
      _first={{ marginInlineStart: "0px", marginTop: "0px" }}
      _notFirst={{ marginInlineStart: "0px", marginTop: "0px" }}
      w="auto"
      display="flex"
      alignItems="center"
    >
      <input
        {...inputProps}
        aria-labelledby={id}
        width="auto"
        disabled={isDisabled}
        required={isRequired}
        name={name}
        style={{ position: "relative", display: "none" }}
      />

      {isDisabled ? (
        <Box
          sx={styles}
          {...checkboxProps}
          {...rest}
          cursor="not-allowed"
          transition="all .25s"
          display="flex"
          alignItems={alignMark}
          gap={3}
        >
          <Box w="20px" h="20px">
            <Center
              w="20px"
              h="20px"
              bg={borderdefault}
              border="2px solid"
              borderColor={borderdefault}
              borderRadius="16px"
            >
              <Box
                w="6px"
                h="6px"
                borderRadius="full"
                bg={state.isChecked ? disabledcheckmarkactive : "transparent"}
              />
            </Center>
          </Box>
          <Box color="gray">{children}</Box>
        </Box>
      ) : (
        <Box
          sx={styles}
          {...checkboxProps}
          {...rest}
          cursor="pointer"
          transition="all .25s"
          display="flex"
          alignItems={alignMark}
          gap={3}
        >
          <Box w="20px" h="20px">
            <Center
              w="20px"
              h="20px"
              bg={state.isChecked ? borderactive : "unset"}
              border="2px solid"
              borderColor={
                state.isChecked
                  ? borderactive
                  : isInvalid
                  ? errorcolor
                  : borderdefault
              }
              borderRadius="16px"
              transition="all .25s"
            >
              <Box
                w="6px"
                h="6px"
                borderRadius="full"
                bg={state.isChecked ? "white" : "transparent"}
                transition="all .25s"
              />
            </Center>
          </Box>
          <Box>{children}</Box>
        </Box>
      )}
    </Box>
  );
};

export const PlainRadioReverse = (props: PlainRadioProps) => {
  const {
    radioprops,
    children,
    isDisabled,
    isRequired,
    isInvalid,
    name,
    alignMark = "center",
    ...rest
  } = props;
  const { getInputProps, getCheckboxProps, getLabelProps, state } =
    useRadio(radioprops);
  const id = useId(undefined, "radio-button");

  const { colorPref } = useContext(AppSettingContext);
  const styles = useStyleConfig("PlainRadio", props);
  const inputProps = getInputProps();
  const checkboxProps = getCheckboxProps();
  const labelProps = getLabelProps();
  const borderdefault = useColorModeValue("gray.100", "gray.700");
  const borderactive = useColorModeValue(`${colorPref}.500`, `${colorPref}Dim.500`);
  const backgroundactive = useColorModeValue(`${colorPref}.50`, `${colorPref}Dim.800`);
  const disabledborderdefault = useColorModeValue("gray.100", "gray.800");
  const disabledbordermark = useColorModeValue("gray.200", "gray.800");
  const disabledbackground = useColorModeValue("gray.50", "whiteAlpha.100");
  const disabledcheckmarkactive = useColorModeValue("white", "gray.700");
  const disabledtext = useColorModeValue("gray.400", "gray.700");
  const errorcolor = useColorModeValue("red.500", "#B53F3F");
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
      _first={{ marginInlineStart: "0px", marginTop: "0px" }}
      _notFirst={{ marginInlineStart: "0px", marginTop: "0px" }}
      w="auto"
      display="flex"
      alignItems="center"
    >
      <input
        {...inputProps}
        aria-labelledby={id}
        width="auto"
        disabled={isDisabled}
        required={isRequired}
        name={name}
        style={{ position: "relative", display: "none" }}
      />

      {isDisabled ? (
        <Box
          sx={styles}
          {...checkboxProps}
          {...rest}
          cursor="not-allowed"
          transition="all .25s"
          display="flex"
          justifyContent="space-between"
          alignItems={alignMark}
          gap={3}
        >
          <Box color="gray">{children}</Box>
          <Box w="20px" h="20px">
            <Center
              w="20px"
              h="20px"
              bg={borderdefault}
              border="2px solid"
              borderColor={borderdefault}
              borderRadius="16px"
            >
              <Box
                w="6px"
                h="6px"
                borderRadius="full"
                bg={state.isChecked ? disabledcheckmarkactive : "transparent"}
              />
            </Center>
          </Box>
        </Box>
      ) : (
        <Box
          sx={styles}
          {...checkboxProps}
          {...rest}
          cursor="pointer"
          transition="all .25s"
          display="flex"
          justifyContent="space-between"
          alignItems={alignMark}
          gap={3}
        >
          <Box>{children}</Box>
          <Box w="20px" h="20px">
            <Center
              w="20px"
              h="20px"
              bg={state.isChecked ? borderactive : "unset"}
              border="2px solid"
              borderColor={
                state.isChecked
                  ? borderactive
                  : isInvalid
                  ? errorcolor
                  : borderdefault
              }
              borderRadius="16px"
              transition="all .25s"
            >
              <Box
                w="6px"
                h="6px"
                borderRadius="full"
                bg={state.isChecked ? "white" : "transparent"}
                transition="all .25s"
              />
            </Center>
          </Box>
        </Box>
      )}
    </Box>
  );
};

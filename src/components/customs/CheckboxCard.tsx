import {
  Box,
  BoxProps,
  Center,
  Checkbox,
  createIcon,
  Stack,
  StackProps,
  Text,
  useCheckbox,
  useCheckboxGroup,
  UseCheckboxGroupProps,
  UseCheckboxProps,
  useColorModeValue,
  useId,
  useStyleConfig,
} from "@chakra-ui/react";
import {
  Children,
  cloneElement,
  isValidElement,
  ReactElement,
  useMemo,
} from "react";
import { CheckMarkOutlineIconMade } from "../atoms/IconsMade";

type CheckboxCardGroupProps = StackProps & UseCheckboxGroupProps;

export const CheckboxCardGroup = (props: CheckboxCardGroupProps) => {
  const { children, defaultValue, value, onChange, ...rest } = props;
  const { getCheckboxProps } = useCheckboxGroup({
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
            checkboxProps: getCheckboxProps({
              value: card.props.value,
            }),
          });
        }),
    [children, getCheckboxProps]
  );

  return <Stack {...rest}>{cards}</Stack>;
};

interface RadioCardProps extends BoxProps {
  value: string;
  isMark?: boolean;
  isDisabled?: boolean;
  isRequired?: boolean;
  checkboxProps?: UseCheckboxProps;
}

export const CheckboxCard = (props: RadioCardProps) => {
  const { checkboxProps, children, isMark, isDisabled, isRequired, ...rest } =
    props;
  const { getInputProps, getCheckboxProps, getLabelProps, state } =
    useCheckbox(checkboxProps);
  const id = useId(undefined, "checkbox-card");
  const styles = useStyleConfig("RadioCard", props);
  const borderdefault = useColorModeValue("gray.100", "gray.700");
  const borderactive = useColorModeValue("blue.500", "blue.600");
  const backgroundactive = useColorModeValue("blue.50", "blue.900");
  const disabledborderdefault = useColorModeValue("gray.100", "gray.800");
  const disabledbordermark = useColorModeValue("gray.200", "gray.800");
  const disabledbackground = useColorModeValue("gray.50", "whiteAlpha.100");
  const disabledcheckmarkactive = useColorModeValue("white", "gray.700");
  const disabledtext = useColorModeValue("gray.400", "gray.700");

  return (
    <Box
      as="label"
      {...getLabelProps()}
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
        {...getInputProps()}
        aria-labelledby={id}
        width="auto"
        disabled={isDisabled}
        required={isRequired}
        style={{ position: "relative", display: "none" }}
      />

      {isDisabled ? (
        <Box
          sx={styles}
          {...getCheckboxProps()}
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
          mb="0.5rem"
        >
          {isMark && (
            <Box w="22px" h="22px" mt="1px" ml="2px">
              <Center
                w="22px"
                h="22px"
                bg={state.isChecked ? disabledbordermark : "unset"}
                border="2px solid"
                borderColor={disabledbordermark}
                borderRadius="8px"
                transition="all .25s"
              >
                <CheckMarkOutlineIconMade
                  fontSize="16px"
                  color={
                    state.isChecked ? disabledcheckmarkactive : "transparent"
                  }
                />
              </Center>
            </Box>
          )}
          <Box flex="1">{children}</Box>
        </Box>
      ) : (
        <Box
          sx={styles}
          {...getCheckboxProps()}
          {...rest}
          cursor="pointer"
          bg={state.isChecked ? backgroundactive : "unset"}
          border="2px solid"
          borderColor={state.isChecked ? borderactive : borderdefault}
          borderRadius="16px"
          p="16px"
          transition="all .25s"
          display="flex"
          alignItems="start"
          gap={3}
          mb="0.5rem"
        >
          {isMark && (
            <Box w="22px" h="22px" mt="1px" ml="2px">
              <Center
                w="22px"
                h="22px"
                bg={state.isChecked ? borderactive : "unset"}
                border="2px solid"
                borderColor={state.isChecked ? borderactive : borderdefault}
                borderRadius="8px"
                transition="all .25s"
              >
                <CheckMarkOutlineIconMade
                  fontSize="16px"
                  color={state.isChecked ? "white" : "transparent"}
                />
              </Center>
            </Box>
          )}
          <Box flex="1">{children}</Box>
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

export const CheckboxCardReverse = (props: RadioCardProps) => {
  const { checkboxProps, children, isMark, isDisabled, isRequired, ...rest } =
    props;
  const { getInputProps, getCheckboxProps, getLabelProps, state } =
    useCheckbox(checkboxProps);
  const id = useId(undefined, "checkbox-card");
  const styles = useStyleConfig("RadioCard", props);
  const borderdefault = useColorModeValue("gray.100", "gray.700");
  const borderactive = useColorModeValue("blue.500", "blue.600");
  const backgroundactive = useColorModeValue("blue.50", "blue.900");
  const disabledborderdefault = useColorModeValue("gray.100", "gray.800");
  const disabledbordermark = useColorModeValue("gray.200", "gray.800");
  const disabledbackground = useColorModeValue("gray.50", "whiteAlpha.100");
  const disabledcheckmarkactive = useColorModeValue("white", "gray.700");
  const disabledtext = useColorModeValue("gray.400", "gray.700");

  return (
    <Box
      as="label"
      {...getLabelProps()}
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
        {...getInputProps()}
        aria-labelledby={id}
        width="auto"
        disabled={isDisabled}
        required={isRequired}
        style={{ position: "relative", display: "none" }}
      />

      {isDisabled ? (
        <Box
          sx={styles}
          {...getCheckboxProps()}
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
          mb="0.5rem"
        >
          <Box flex="1">{children}</Box>
          {isMark && (
            <Box w="22px" h="22px" mt="1px" ml="2px">
              <Center
                w="22px"
                h="22px"
                bg={state.isChecked ? disabledbordermark : "unset"}
                border="2px solid"
                borderColor={disabledbordermark}
                borderRadius="8px"
                transition="all .25s"
              >
                <CheckMarkOutlineIconMade
                  fontSize="16px"
                  color={
                    state.isChecked ? disabledcheckmarkactive : "transparent"
                  }
                />
              </Center>
            </Box>
          )}
        </Box>
      ) : (
        <Box
          sx={styles}
          {...getCheckboxProps()}
          {...rest}
          cursor="pointer"
          bg={state.isChecked ? backgroundactive : "unset"}
          border="2px solid"
          borderColor={state.isChecked ? borderactive : borderdefault}
          borderRadius="16px"
          p="16px"
          transition="all .25s"
          display="flex"
          justifyContent="space-between"
          alignItems="start"
          gap={3}
          mb="0.5rem"
        >
          <Box flex="1">{children}</Box>
          {isMark && (
            <Box w="22px" h="22px" mt="1px" ml="2px">
              <Center
                w="22px"
                h="22px"
                bg={state.isChecked ? borderactive : "unset"}
                border="2px solid"
                borderColor={state.isChecked ? borderactive : borderdefault}
                borderRadius="8px"
                transition="all .25s"
              >
                <CheckMarkOutlineIconMade
                  fontSize="16px"
                  color={state.isChecked ? "white" : "transparent"}
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

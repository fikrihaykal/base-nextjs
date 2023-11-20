import {
  Box,
  BoxProps,
  Center,
  Checkbox,
  Stack,
  StackProps,
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
  checkboxProps?: UseCheckboxProps;
}

export const CheckboxCard = (props: RadioCardProps) => {
  const { checkboxProps, children, ...rest } = props;
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
    >
      <input {...getInputProps()} aria-labelledby={id} />
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
      >
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
            <Box w="8px" h="8px" borderRadius="full" />
            <CheckMarkOutlineIconMade
              fontSize="16px"
              color={state.isChecked ? "white" : "transparent"}
            />
          </Center>
        </Box>
        <Box flex="1">{children}</Box>
        <Box display="none">
          <Checkbox
            pointerEvents="none"
            isFocusable={false}
            isChecked={state.isChecked}
          />
        </Box>
      </Box>
    </Box>
  );
};

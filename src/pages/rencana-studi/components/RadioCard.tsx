import { CheckMarkOutlineIconMade } from "@/components/atoms/IconsMade";
import {
  Box,
  BoxProps,
  Center,
  Circle,
  createIcon,
  Icon,
  Stack,
  StackProps,
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
  checkmark?: boolean;
  isDisabled?: boolean;
  radioProps?: UseRadioProps;
}

export const RadioCard = (props: RadioCardProps) => {
  const { radioProps, children, checkmark, isDisabled, ...rest } = props;
  const { getInputProps, getCheckboxProps, getLabelProps, state } =
    useRadio(radioProps);
  const id = useId(undefined, "radio-button");

  const styles = useStyleConfig("RadioCard", props);
  const inputProps = getInputProps();
  const checkboxProps = getCheckboxProps();
  const labelProps = getLabelProps();
  const borderdefault = useColorModeValue("gray.50", "gray.800");
  const borderactive = useColorModeValue("blue.500", "blue.600");
  const backgroundactive = useColorModeValue("blue.50", "blue.900");
  return (
    <Box
      as="label"
      cursor="pointer"
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
      />
      {isDisabled ? (
        <Box
          sx={styles}
          {...checkboxProps}
          {...rest}
          border="2px solid"
          borderColor="gray.100"
          borderRadius="16px"
          p="16px 24px 16px 16px"
          transition="all .25s"
          bg="gray.50"
          color="gray.500"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box>
            {children}

            <Box fontSize="14px" fontWeight="500" mt="24px">
              Kelas penuh
            </Box>
          </Box>
          {checkmark && (
            <Box w="24px" h="24px">
              <Center
                w="24px"
                h="24px"
                bg="gray.100"
                borderRadius="16px"
              ></Center>
            </Box>
          )}
        </Box>
      ) : state.isChecked ? (
        <Box
          sx={styles}
          {...checkboxProps}
          {...rest}
          border="2px solid"
          borderColor={borderactive}
          borderRadius="16px"
          p="16px 24px 16px 16px"
          transition="all .25s"
          bg={backgroundactive}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box>{children}</Box>
          {checkmark && (
            <Box w="24px" h="24px">
              <Center w="24px" h="24px" bg={borderactive} borderRadius="16px">
                <CheckMarkOutlineIconMade fontSize="16px" color="white" />
                {/* <Box w="12px" h="12px" borderRadius="full" bg="white" /> */}
              </Center>
            </Box>
          )}
        </Box>
      ) : (
        <Box
          sx={styles}
          {...checkboxProps}
          {...rest}
          border="2px solid"
          borderColor={borderdefault}
          borderRadius="16px"
          p="16px 24px 16px 16px"
          transition="all .25s"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box>{children}</Box>
          {checkmark && (
            <Box w="24px" h="24px">
              <Center
                w="24px"
                h="24px"
                bg={borderdefault}
                borderRadius="16px"
              ></Center>
            </Box>
          )}
        </Box>
      )}
    </Box>
  );
};

export const CheckIcon = createIcon({
  displayName: "CheckIcon",
  viewBox: "0 0 12 10",
  path: (
    <polyline
      fill="none"
      strokeWidth="2px"
      stroke="currentColor"
      strokeDasharray="16px"
      points="1.5 6 4.5 9 10.5 1"
    />
  ),
});

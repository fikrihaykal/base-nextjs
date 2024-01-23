import PageTransition from "@/components/PageLayout";
import ContainerQuery from "@/components/atoms/ContainerQuery";
import PageRow from "@/components/atoms/PageRow";
import {
  Box,
  BoxProps,
  Divider,
  Flex,
  Grid,
  GridItem,
  HStack,
  Text,
  UseRadioProps,
  useColorMode,
  useRadio,
  useRadioGroup,
} from "@chakra-ui/react";
import PlainCard from "@/components/organisms/Cards/Card";
import {
  CircleSolidIconMade,
} from "@/components/atoms/IconsMade";
import { RadioCard, RadioCardGroup } from "@/components/customs/RadioCard";
import AppSettingContext from "@/providers/AppSettingProvider";
import { useContext } from "react";
import { ColorPreference } from "@/types/app-setting";

const Pengaturan = () => {
  return (
    <>
      <PageTransition pageTitle="Pengaturan">
        <PageRow>
          <ContainerQuery>
            <PengaturanModeTampilan />
          </ContainerQuery>
        </PageRow>
      </PageTransition>
    </>
  );
};

interface RadioCardProps extends Omit<BoxProps, "onChange">, UseRadioProps {
  children: React.ReactNode;
}

const RadioBox: React.FC<RadioCardProps> = (props) => {
  const { getInputProps, getRadioProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getRadioProps();

  const { isChecked, ...rest } = props;

  return (
    <Box as="label" _notFirst={{ marginInlineStart: "unset" }} {...rest}>
      <input {...input} />
      <Box {...checkbox} cursor="pointer" transition="all .25s" {...rest}>
        {props.children}
      </Box>
    </Box>
  );
};

const PengaturanModeTampilan = () => {
  const { setColorMode, colorMode } = useColorMode();

  const { colorPref, setColorPref } = useContext(AppSettingContext);
  const { getRootProps, getRadioProps } = useRadioGroup({
    value: colorPref,
    onChange: (newColor) => {
      setColorPref(newColor);
      localStorage.setItem("color_pref", newColor);
    },
  });
  const group = getRootProps();
  const optionsColor: ColorPreference[] = [
    "blue",
    "purple",
    "pink",
    "orange",
    "green",
    "teal",
    "cyan",
  ];

  const handleChange = (newColorMode: "light" | "dark") => {
    setColorMode(newColorMode);
  };
  return (
    <PlainCard>
      <Text fontSize="18px" fontWeight="600" mb="4px">
        Mode tampilan
      </Text>
      <Text fontSize="16px" fontWeight="500" color="gray">
        Pilih mode tampilan website
      </Text>
      <Grid
        mt="24px"
        templateColumns={{
          base: "repeat(1, 1fr)",
          a: "repeat(2, 1fr)",
        }}
        gap={3}
        as={RadioCardGroup}
        defaultValue={colorMode}
        transition="all .25s"
        // @ts-expect-error
        onChange={handleChange}
      >
        <RadioCard hasMark h="100%" as={GridItem} value="light" hasBackground>
          <Text fontSize="14px" fontWeight={600}>
            Mode terang
          </Text>
        </RadioCard>
        <RadioCard hasMark h="100%" as={GridItem} value="dark" hasBackground>
          <Text fontSize="14px" fontWeight={600}>
            Mode gelap
          </Text>
        </RadioCard>
      </Grid>
      <Divider w="full" my="24px" />
      <HStack flexWrap="wrap" gap={4} {...group}>
        {optionsColor.map((value) => {
          const radio = getRadioProps({ value });
          return (
            <RadioBox
              key={value}
              {...radio}
              borderRadius="full"
              bg={colorMode === "light" ? `${value}.500` : `${value}Dim.500`}
              color="transparent"
              position="relative"
              w="36px"
              h="36px"
              _checked={{
                boxShadow: "0px 0px 0 2px #00000034 inset",
                color: "white",
              }}
            >
              <Flex
                justifyContent="center"
                alignItems="center"
                w="full"
                h="full"
                position="absolute"
              >
                <CircleSolidIconMade fontSize="12px" />
              </Flex>
            </RadioBox>
          );
        })}
      </HStack>
    </PlainCard>
  );
};

export default Pengaturan;

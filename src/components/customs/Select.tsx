// Select.tsx
import React from "react";
import Select, { StylesConfig, components } from "react-select";
import { useColorMode } from "@chakra-ui/react";

interface SelectProps {
  defaultValue?: any;
  options: any[];
  isDisabled?: boolean;
  isLoading?: boolean;
  isClearable?: boolean;
  isRtl?: boolean;
  isSearchable?: boolean;
  isMulti?: boolean;
  name?: string;
  placeholder?: string;
}

const DropdownSelect: React.FC<SelectProps> = ({
  defaultValue,
  options,
  isDisabled,
  isLoading,
  isClearable,
  isRtl,
  isSearchable,
  isMulti,
  name,
  placeholder,
}) => {
  const CustomNoOptionsMessage = (props: any) => {
    return (
      <components.NoOptionsMessage {...props}>
        Tidak ada data
      </components.NoOptionsMessage>
    );
  };
  const { colorMode } = useColorMode();
  const customStyles: StylesConfig = {
    control: (base, state) => {
      return {
        ...base,
        transition: "0.25s all",
        borderRadius: "16px",
        minHeight: "56px",
        padding: "2px 8px 2px 20px",
        border: state.isFocused
          ? colorMode === "light"
            ? "2px solid #008fff"
            : "2px solid #007FEB"
          : "2px solid transparent",
        "&:hover": {
          borderColor: "2px solid transparent",
        },
        boxShadow: "none",
        background: colorMode === "light" ? "rgba(228,228,228,0.3)" : "#292929",
        color: colorMode === "light" ? "#222222" : "#ffffff",
        cursor: "pointer",
      };
    },

    placeholder: (base, state) => {
      return {
        ...base,
        transition: "0.25s all",
        fontSize: "14px",
        fontWeight: 600,
        color: state.isFocused
          ? colorMode === "light"
            ? "#000000"
            : "#ffffff"
          : state.isDisabled
          ? colorMode === "light"
            ? "#c2c2c2"
            : "#5c5c5c"
          : "#808080",
      };
    },

    input: (base, state) => {
      return {
        ...base,
        fontSize: "14px",
        fontWeight: 500,
        color: colorMode === "light" ? "#000000" : "#ffffff",
      };
    },

    valueContainer: (base, state) => {
      return {
        ...base,
        padding: "0px",
      };
    },

    singleValue: (base, state) => {
      return {
        ...base,
        fontSize: "14px",
        fontWeight: 600,
        color: state.isDisabled
          ? colorMode === "light"
            ? "#919191"
            : "#8a8a8a"
          : colorMode === "light"
          ? "#000000"
          : "#ffffff",
      };
    },

    multiValue: (base, state) => {
      return {
        ...base,
        borderRadius: "16px",
        padding: "2px 6px",
        margin: "4px 6px 4px 0px",
        background: state.isDisabled
          ? colorMode === "light"
            ? "#ebebeb"
            : "#383838"
          : colorMode === "light"
          ? "#e5e5e5"
          : "#3b3b3b",
      };
    },

    multiValueLabel: (base, state) => {
      return {
        ...base,
        fontSize: "14px",
        fontWeight: 600,
        color: state.isDisabled
          ? colorMode === "light"
            ? "#919191"
            : "#8a8a8a"
          : colorMode === "light"
          ? "#000000"
          : "#ffffff",
      };
    },

    multiValueRemove: (base, state) => {
      return {
        ...base,
        color: "transparent",
        backgroundImage: `url(/closemini.svg)`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        filter: state.isDisabled
          ? "invert(0.5)"
          : colorMode === "light"
          ? "none"
          : "invert(1)",
        "&:hover": {
          background: "transparent",
          color: "black",
          filter: colorMode === "light" ? "none" : "invert(1)",
        },
      };
    },
    clearIndicator: (base, state) => {
      return {
        ...base,
        color: "transparent",
        backgroundImage: `url(/close.svg)`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        // filter: colorMode === "light" ? "none" : "invert(1)",
        filter: state.isFocused
          ? colorMode === "light"
            ? "none"
            : "invert(1)"
          : colorMode === "light"
          ? "invert(0.5)"
          : "invert(0.5)",
        "&:hover": {
          color: "transparent",
        },
      };
    },

    indicatorSeparator: (base) => {
      return {
        ...base,
        background: "transparent",
      };
    },

    dropdownIndicator: (base, state) => {
      return {
        ...base,
        transition: "0.25s all",
        color: "transparent",
        backgroundImage: `url(/arrowdown.svg)`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        filter: state.isDisabled
          ? colorMode === "light"
            ? "invert(0.7)"
            : "invert(0.3)"
          : colorMode === "light"
          ? "none"
          : "invert(1)",
        transform: state.isFocused ? "rotate(180deg)" : "rotate(0)",
      };
    },

    menu: (base) => {
      return {
        ...base,
        borderRadius: "16px",
        padding: "16px",
        boxShadow:
          colorMode === "light"
            ? "0 4px 16px rgba(227, 230, 236, 0.4)"
            : "0 4px 24px rgba(0, 0, 0, 0.15)",
        border:
          colorMode === "light" ? "1px solid #e4e4e4" : "1px solid #333333",
        background: colorMode === "light" ? "#ffffff" : "#222222",
      };
    },

    option: (base, state) => {
      return {
        ...base,
        transition: "0.25s all",
        cursor: "pointer",
        borderRadius: "8px",
        background: state.isSelected
          ? colorMode === "light"
            ? "#e8e8e8"
            : "#3b3b3b"
          : "transparent",
        padding: "12px",
        color: state.isSelected
          ? colorMode === "light"
            ? "black"
            : "white"
          : colorMode === "light"
          ? "black"
          : "white",
        fontSize: "14px",
        fontWeight: 600,
        "&:hover": {
          background: state.isSelected
            ? colorMode === "light"
              ? "#e8e8e8"
              : "#3b3b3b"
            : colorMode === "light"
            ? "#f7f7f7"
            : "#2f2f2f",
        },
      };
    },
  };
  return (
    <Select
      defaultValue={defaultValue}
      options={options}
      isDisabled={isDisabled}
      isLoading={isLoading}
      isClearable={isClearable}
      isRtl={isRtl}
      isSearchable={isSearchable}
      isMulti={isMulti}
      name={name}
      placeholder={placeholder}
      styles={customStyles}
      components={{ NoOptionsMessage: CustomNoOptionsMessage }}
    />
  );
};

export default DropdownSelect;

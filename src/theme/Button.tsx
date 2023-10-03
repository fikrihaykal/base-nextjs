const ButtonStyles = {
  baseStyle: {
    backgroundColor: "#1b1b1b",
    borderRadius: "16px",
    height: "56px",
    width: { base: "100%", s: "unset" },
    padding: "0px 20px",
    marginLeft: "8px",
    fontSize: "14px",
    lineHeight: "1.42857",
    fontWeight: "700",
    transition: "all .25s",
    _disabled: {
      backgroundColor: "#e4e4e4",
      _hover: {
        _light: {
          backgroundColor: "#008fff",
        },
        _dark: "#0071ca",
      },
    },
  },
  variants: {},
};

export default ButtonStyles;

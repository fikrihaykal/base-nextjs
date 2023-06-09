import { cardAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers, defineStyle } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(cardAnatomy.keys);

// define the base component styles
const baseStyle = definePartsStyle({
  // define the part you're going to style
  container: {
    backgroundColor: "#ffffff",
    _dark:{
      backgroundColor: "#212121",
    }
  },
  header: {
    paddingBottom: "2px"
  },
  body: {
    paddingTop: "2px"
  },
  footer: {
    paddingTop: "4px"
  }
});

// const sizes = {
//   md: definePartsStyle({
//   }),
//   // define custom styles for xl size
//   xl: definePartsStyle({
//     container: {
//       borderRadius: "36px",
//       padding: "40px"
//     }
//   })
// };


// define custom variant
//   const variants = {
//   funky: definePartsStyle({
//     container: {
//       color: "chakra-body-text"
//     }
//   })
// };

// export the component theme
export const cardTheme = defineMultiStyleConfig({
  baseStyle,
});
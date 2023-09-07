import type { Preview } from "@storybook/react";

const theme = require('../src/theme/theme')

const preview: Preview = {
  parameters: {
    chakra: {
      theme,
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;

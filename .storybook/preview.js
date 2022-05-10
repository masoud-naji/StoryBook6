import React from "react";
import { extendTheme, ChakraProvider, Box } from "@chakra-ui/react";
import { addDecorator } from "@storybook/react";
import { withConsole } from "@storybook/addon-console";
import { withKnobs } from "@storybook/addon-knobs";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind
        ? 0
        : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};

const theme = extendTheme({ colors });

export const decorators = [
  (Story) => (
    <ChakraProvider theme={theme}>
      <Box m="4">
        <Story />
      </Box>
    </ChakraProvider>
  ),
];

addDecorator((storyFn, context) => withConsole()(storyFn)(context));
addDecorator(withKnobs);

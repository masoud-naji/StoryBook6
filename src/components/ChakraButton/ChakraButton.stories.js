import React from "react";
import { Button } from "@chakra-ui/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";

export default {
  title: "Chakra/Button",
  decorators: [withKnobs],
  component: Button,
  argTypes: {
    variant: { control: "text" },
    children: { control: "text" },
    colorScheme: { control: "text" },
  },
};

const Template = (args) => <Button {...args} />;

export const Success = Template.bind({});
Success.args = {
  colorScheme: "teal",
  children: "Success",
  variant: "outline",
  onClick: action("clicked"),
};
export const Danger = Template.bind({});
Danger.args = {
  colorScheme: "red",
  children: "Danger",
  variant: "solid",
  onClick: action("clicked"),
};

export const log = Template.bind({});
log.args = {
  colorScheme: "blue",
  children: "Log",
  onClick: () => console.log("clicked"),
};

// Knobs for React props
export const withAButton = () => (
    <button disabled={boolean('Disabled', false)}>{text('Label', 'Hello Storybook')}</button>
  );
  
  // Knobs as dynamic variables.
//   export const asDynamicVariables = () => {
//     const name = text('Name', 'James');
//     const age = number('Age', 35);
//     const content = `I am ${name} and I'm ${age} years old.`;
  
//     return <div>{content}</div>;
//   };

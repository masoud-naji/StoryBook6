import React from "react";
import Input from "./Input";
import Center from "../Center/Center";

export default {
  title: "Form/Input",
  component: Input,
  
};

export const Large = () => <Input size="large" placeholder="large" />;
export const Medium = () => <Input size="medium" placeholder="medium" />;
export const Small = () => <Input size="small" placeholder="small" />;

Small.storyName = "Small Input";

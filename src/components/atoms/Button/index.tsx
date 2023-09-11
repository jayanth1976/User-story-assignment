import { ButtonProps, Button as MuiButton } from "@mui/material";
import React from "react";

interface ButtonCompProps extends ButtonProps {}

const Button = (props: ButtonCompProps) => {
  return <MuiButton {...props}>{props.children}</MuiButton>;
};

export default Button;

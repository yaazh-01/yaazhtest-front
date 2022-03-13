import React from "react";
import './Buttons.css'
import Button from "@mui/material/Button";

const YButton = (props) => {
  return (
    <Button
      className={`yBtn ${props.variant} ${props.btnSize}`}
      onClick={props.onClick}
    >
      {props.label}
    </Button>
  );
};

export default YButton;

import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "./Input.css";

export default function InputField(props) {
  return (
    <div className="inputField">
      <TextField
        id="outlined-basic"
        name={props.name}
        label={props.label}
        placeholder={props.placeholder}
        variant="outlined"
        className="w-100"
      />
    </div>
  );
}

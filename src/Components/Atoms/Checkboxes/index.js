import * as React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

export default function Checkboxes(props) {
  return (
    <div className="chkBxWrpr">
      <FormControlLabel
        control={<Checkbox name={props.name} checked={props.checked} />}
        label={props.label}
      />
    </div>
  );
}

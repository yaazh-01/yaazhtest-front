import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { IconButton } from "@mui/material";
import "./DialogBox.css";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function DialogBox(props) {
  return (
    <div>
      <Dialog
        className={`cstmModal ${props.className}`}
        open={props.open}
        TransitionComponent={Transition}
        keepMounted
        onClose={props.handleClose}
        maxWidth={props.maxWidth}
        aria-describedby="alert-dialog-slide-description"
      >
        <IconButton onClick={props.handleClose} className="clsBtn">
          <span className="material-icons">clear</span>
        </IconButton>
        {props.title && (
          <DialogTitle>{"Use Google's location service?"}</DialogTitle>
        )}
        <DialogContent>{props.children}</DialogContent>
      </Dialog>
    </div>
  );
}

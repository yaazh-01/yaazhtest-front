import React from "react";
import "./App.css";
import Router from "./Routes";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function App() {
  const mainTheme = createTheme({
    palette: {
      primary: {
        main: "#3d5e41",
      },
    },
  });

  return (
    <div className="App">
      <ThemeProvider theme={mainTheme}>
        <Router />
      </ThemeProvider>
    </div>
  );
}

export default App;

import React from "react";
import FunctionContextComponent from "./FunctionContextComponent2";
import ThemeProvider from "./ThemeContext";

export default function UseContext2() {
  return (
    <ThemeProvider>
      <FunctionContextComponent />
    </ThemeProvider>
  );
}

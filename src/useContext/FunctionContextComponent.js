import React, { useContext } from "react";
import { ThemeContext } from "./UseContext";

function FunctionContextComponent() {
  const darkTheme = useContext(ThemeContext);

  const themeStyles = {
    backgroundColor: darkTheme ? "#333" : "#CCC",
    color: darkTheme ? "#CCC" : "#333",
    margin: "2rem",
    padding: "2rem",
  };

  return <div style={themeStyles}>Function Theme</div>;
}

export default FunctionContextComponent;

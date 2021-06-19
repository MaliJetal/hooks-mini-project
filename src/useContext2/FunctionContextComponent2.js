import React from "react";
import { useTheme, useThemeUpdate } from "./ThemeContext";

function FunctionContextComponent() {
  var darkTheme = useTheme();
  const toggleTheme = useThemeUpdate();

  const themeStyles = {
    backgroundColor: darkTheme ? "#333" : "#CCC",
    color: darkTheme ? "#CCC" : "#333",
    margin: "2rem",
    padding: "2rem",
  };

  return (
    <div>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <div style={themeStyles}>Function2 Theme</div>
    </div>
  );
}

export default FunctionContextComponent;

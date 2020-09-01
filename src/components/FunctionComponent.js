import React from "react";

import { useTheme, useThemeUpdate } from "./ThemeContext";

const FunctionComponent = () => {
  const darkTheme = useTheme();
  const toggleTheme = useThemeUpdate();

  const themeStyle = {
    backgroundColor: darkTheme ? "#333" : "#CCC",
    color: darkTheme ? "#333" : "#CCC",
    padding: "2rem",
    marging: "2rem",
    width: "200px",
    height: "200px",
  };

  return (
    <>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <div style={themeStyle}>
        <p>Function Theme</p>
      </div>
    </>
  );
};

export default FunctionComponent;

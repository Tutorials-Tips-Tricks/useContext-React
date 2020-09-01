import React from "react";

// import ClassComponent from "./components/ClassComponent";
import FunctionComponnet from "./components/FunctionComponent";

import { ThemeProvider } from "./components/ThemeContext";

export default function App() {
  
  return (
  // ThemeProvider -- wraping all logic for handling state, updating, pushing different values to all children
    <ThemeProvider>
      {/* <ClassComponent /> */}
      <br />
      <FunctionComponnet />
    </ThemeProvider>
  );
}

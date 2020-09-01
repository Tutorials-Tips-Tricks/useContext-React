import React, { Component } from "react";

import { ThemeContext } from "../App";

class ClassComponents extends Component {
  themeStyle(dark) {
    return {
      backgroundColor: dark ? "#333" : "#CCC",
      color: dark ? "#333" : "#CCC",
      padding: "2rem",
      marging: "2rem",
      width: "200px",
      height: "200px",
    };
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {(darkTheme) => {
          return (
            <div style={this.themeStyle(darkTheme)}>
              <p>Class Theme</p>
            </div>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default ClassComponents;

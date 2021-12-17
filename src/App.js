import React from "react";
import "./App.css";
import { render } from "react-dom";

class App extends React.Component {
  render() {
    return (
      <header>
        <form id="to-do-form">
          <input type="text" placeholder="Enter any task" />
          <button type="submit">Add</button>
        </form>
      </header>
    );
  }
}

export default App;

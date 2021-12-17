import React from "react";
import "./App.css";
import { render } from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state={
      items:[],
      currebtItem:{
        
      }
    }
  }

  render() {
    return (
      <div className="App">
        <header>
          <form id="to-do-form">
            <input type="text" placeholder="Enter any task" />
            <button type="submit">Add</button>
          </form>
        </header>
      </div>
    );
  }
}

export default App;

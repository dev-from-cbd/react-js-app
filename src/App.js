import React from "react";
import "./App.css";
import ListItems from "./ListItems";

//import { render } from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      currentItem: {
        text: "",
        key: "",
      },
    };

    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
  }

  handleInput(e) {
    this.setState({
      currentItem: {
        text: e.target.value,
        key: Date.now(),
      },
    });
  }

  addItem(e) {
    e.preventDefault();
    const newItem = this.state.currentItem;
    //console.log(newItem);

    if (newItem.text !== "") {
      const newItems = [...this.state.items, newItems];
      this.setState({
        items: newItems,
        currentItems: {
          text: "",
          key: "",
        },
      });
    }
  }

  render() {
    return (
      <div className="App">
        <header>
          <form id="to-do-form" onSubmit={this.addItem}>
            <input
              type="text"
              placeholder="Enter any your task"
              value={this.state.currentItem.text}
              onChange={this.handleInput}
            />
            <button type="submit">Add</button>
          </form>

          <ListItems items={this.state.items} />
        </header>
      </div>
    );
  }
}

export default App;

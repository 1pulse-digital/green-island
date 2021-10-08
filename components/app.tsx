import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
      show: true,
    };
  }

  IncrementItem = () => {
    this.setState({ clicks: this.state.clicks + 1 });
  };
  DecreaseItem = () => {
    this.setState({ clicks: this.state.clicks - 1 });
  };
  ToggleClick = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    return (
      <div className="inline-block relative py-10 px-2 text-left">
        <div className="flex items-center">
          <button
            onClick={this.DecreaseItem}
            className="py-2 px-4 w text-base font-medium text-black bg-white rounded-l-md border-t border-b border-l hover:bg-gray-300">
            -
          </button>

          <button onClick={this.ToggleClick}>
            {this.state.show ? "" : ""}
          </button>

          <button
            type="button"
            className="py-2 px-4 w-full text-base font-medium text-black bg-white border hover:bg-gray-100">
            {this.state.show ? <h2>{this.state.clicks}</h2> : ""}
          </button>

          <button
            onClick={this.IncrementItem}
            className="py-2 px-4 text-base font-medium text-black bg-white rounded-l-md border-t border-b border-l hover:bg-gray-300">
            +
          </button>

          <button onClick={this.ToggleClick}></button>
        </div>
      </div>
    );
  }
}

export default App;

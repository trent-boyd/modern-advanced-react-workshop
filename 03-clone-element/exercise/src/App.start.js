import React, { Component } from "react";
import FaPlay from "react-icons/lib/fa/play";
import FaPause from "react-icons/lib/fa/pause";
import FaForward from "react-icons/lib/fa/forward";
import FaBackward from "react-icons/lib/fa/backward";

class RadioGroup extends Component {
  state = {
    selectedIndex: undefined
  };

  onButtonClick(index) {
    this.setState({ selectedIndex: index });
  }

  render() {
    return (
      <fieldset className="radio-group">
        <legend>{this.props.legend}</legend>
        {React.Children.map(this.props.children, (child, index) => {
          return React.cloneElement(child, {
            selected: index === this.state.selectedIndex,
            onClick: () => this.onButtonClick(index)
          });
        })}
      </fieldset>
    );
  }
}

class RadioButton extends Component {
  render() {
    const className = "radio-button " + (this.props.selected ? "active" : "");
    return (
      <button className={className} onClick={this.props.onClick}>
        {this.props.children}
      </button>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <RadioGroup legend="Radio Group">
          <RadioButton value="back">
            <FaBackward />
          </RadioButton>
          <RadioButton value="play">
            <FaPlay />
          </RadioButton>
          <RadioButton value="pause">
            <FaPause />
          </RadioButton>
          <RadioButton value="forward">
            <FaForward />
          </RadioButton>
        </RadioGroup>
      </div>
    );
  }
}

export default App;

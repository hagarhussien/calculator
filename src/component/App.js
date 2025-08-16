import React from "react";
import Display from "./Display";
import ButtonPanel from "./ButtonPanel";
import calculate from "../logic/calculate";
import "./App.css";

export default class App extends React.Component {
  state = {
    total: null,
    next: null,
    operation: null,
    darkMode: localStorage.getItem('calculatorDarkMode') === 'true',
  };

  toggleDarkMode = () => {
    this.setState(prevState => {
      const newDarkMode = !prevState.darkMode;
      localStorage.setItem('calculatorDarkMode', newDarkMode);
      return { darkMode: newDarkMode };
    });
  };

  handleClick = buttonName => {
    this.setState(calculate(this.state, buttonName));
  };

  render() {
    const { darkMode } = this.state;
    return (
      <div className={`component-app ${darkMode ? 'dark-mode' : ''}`}>
        <Display value={this.state.next || this.state.total || "0"} />
        <Button name={darkMode ? '☀️' : '🌙'} clickHandler={this.toggleDarkMode} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}

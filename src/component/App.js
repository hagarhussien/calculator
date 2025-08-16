import React from "react";
import Display from "./Display";
import ButtonPanel from "./ButtonPanel";
import calculate from "../logic/calculate";
import "./App.css";
import Button from './Button';


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
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '4px', 
          marginBottom: '4px',
          width: '100%',
          overflow: 'hidden'
        }}>
          <Display value={this.state.next || this.state.total || "0"} />
          <div style={{ flexShrink: 0 }}>
            <Button name={darkMode ? '☀️' : '🌙'} clickHandler={this.toggleDarkMode} />
          </div>
        </div>
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}

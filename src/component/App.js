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
    history: JSON.parse(localStorage.getItem('calculatorHistory')) || [],
    showHistory: true,
  };

  toggleDarkMode = () => {
    this.setState(prevState => {
      const newDarkMode = !prevState.darkMode;
      localStorage.setItem('calculatorDarkMode', newDarkMode);
      return { darkMode: newDarkMode };
    });
  };

  handleClick = buttonName => {
    const newState = calculate(this.state, buttonName);
    this.setState(prevState => ({
      ...newState,
      history: [
        ...prevState.history, 
        this.formatHistoryEntry(prevState, buttonName, newState)
      ].slice(-10).filter(entry => entry.trim() !== "") // Keep only last 10 non-empty entries
    }));
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.history !== this.state.history) {
      localStorage.setItem('calculatorHistory', JSON.stringify(this.state.history));
    }
  }

  formatHistoryEntry = (prevState, buttonName, newState) => {
    if (buttonName === '=') {
      return `${prevState.total || ''}${prevState.operation || ''}${prevState.next || ''}=${newState.total || ''}`;
    } else if (['+', '-', 'x', '÷'].includes(buttonName)) {
      return `${prevState.total || ''}${buttonName}${prevState.next || ''}`;
    } else if (buttonName === 'AC') {
      return 'AC';
    } else if (buttonName === '+/-') {
      return `±${prevState.next || prevState.total || ''}`;
    } else if (buttonName === '%') {
      return `${prevState.next || prevState.total || ''}%`;
    }
    return '';
  };

  toggleHistory = () => {
    this.setState(prevState => ({ showHistory: !prevState.showHistory }));
  };

  render() {
    const { darkMode, history } = this.state;
    return (
      <div className={`component-app ${darkMode ? 'dark-mode' : ''}`}>
        <div style={{ 
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'stretch',
          gap: '4px',
          marginBottom: '4px',
          width: '100%',
          flex: 1
        }}>
          <div style={{ flexShrink: 0, display: 'flex', gap: '4px', justifyContent: 'flex-end' }}>
            <Button name={darkMode ? '☀️' : '🌙'} clickHandler={this.toggleDarkMode} />
            <Button name={this.state.showHistory ? '🧮' : '📜'} clickHandler={this.toggleHistory} />
          </div>
          
          {this.state.showHistory ? (
            <div className="calculation-history" style={{ flex: 1 }}>
              {this.state.history.map((entry, i) => (
                <div key={i} className="history-entry">{entry}</div>
              ))}
            </div>
          ) : (
            <>
              <Display value={this.state.next || this.state.total || "0"} />
              <ButtonPanel clickHandler={this.handleClick} />
            </>
          )}
        </div>
      </div>
    );
  }
}

import React from "react";
import { render, fireEvent, screen } from '@testing-library/react';
import App from "./App";

// Mock localStorage
const localStorageMock = (() => {
  let store = {};
  return {
    getItem: (key) => store[key] || null,
    setItem: (key, value) => { store[key] = value.toString(); },
    clear: () => { store = {}; }
  };
})();

Object.defineProperty(window, 'localStorage', { value: localStorageMock });

describe('App', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('renders without crashing', () => {
    const { container } = render(<App />);
    expect(container).toBeInTheDocument();
  });

  it('toggles dark mode', () => {
    render(<App />);
    const toggleBtn = screen.getByRole('button', { name: /🌙|☀️/ });
    
    fireEvent.click(toggleBtn);
    expect(document.documentElement).toHaveClass('dark-mode');
    
    fireEvent.click(toggleBtn);
    expect(document.documentElement).not.toHaveClass('dark-mode');
  });

  describe('Calculation History', () => {
    it('records calculation history', () => {
      render(<App />);
      
      fireEvent.click(screen.getByText('2'));
      fireEvent.click(screen.getByText('+'));
      fireEvent.click(screen.getByText('9'));
      fireEvent.click(screen.getByText('='));
      
      const historyEntry = screen.getByText('2+9=11');
      expect(historyEntry).toBeInTheDocument();
    });

    it('shows limited history entries', () => {
      render(<App />);
      
      // Add 12 entries
      for (let i = 0; i < 12; i++) {
        fireEvent.click(screen.getByText('5'));
        fireEvent.click(screen.getByText('+'));
        fireEvent.click(screen.getByText('3'));
        fireEvent.click(screen.getByText('='));
      }
      
      const historyEntries = screen.getAllByText(/5\+3=8/);
      expect(historyEntries).toHaveLength(10);
    });

    it('toggles history view', () => {
      render(<App />);
      
      // Initial view shows calculator
      expect(screen.getByText('AC')).toBeInTheDocument();
      
      // Switch to history view
      fireEvent.click(screen.getByRole('button', { name: '🧮' }));
      expect(screen.queryByText('AC')).not.toBeInTheDocument();
      
      // Switch back to calculator
      fireEvent.click(screen.getByRole('button', { name: '📜' }));
      expect(screen.getByText('AC')).toBeInTheDocument();
    });
  });
});

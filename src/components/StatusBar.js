import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const StatusBar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="status-bar">
      <p>Status Bar</p>
      <button onClick={toggleTheme} style={{ marginLeft: 'auto' }}>
        Toggle Theme ({theme})
      </button>
    </div>
  );
};

export default StatusBar;

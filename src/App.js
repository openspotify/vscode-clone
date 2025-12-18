import React, { useContext } from 'react';
import './App.css';
import './theme.css';
import Sidebar from './components/Sidebar';
import Editor from './components/Editor';
import StatusBar from './components/StatusBar';
import { ThemeProvider, ThemeContext } from './contexts/ThemeContext';

function AppContent() {
  const { theme } = useContext(ThemeContext);

  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div className="App">
      <div className="main-layout">
        <Sidebar />
        <div className="main-content">
          <Editor />
        </div>
      </div>
      <StatusBar />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;

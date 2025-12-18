import React, { useContext } from 'react';
import Editor from '@monaco-editor/react';
import { ThemeContext } from '../contexts/ThemeContext';

const MonacoEditor = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Editor
      height="100%"
      defaultLanguage="javascript"
      defaultValue="// some comment"
      theme={theme === 'dark' ? 'vs-dark' : 'light'}
    />
  );
};

export default MonacoEditor;

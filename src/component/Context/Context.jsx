import React, { createContext, useState, useContext } from 'react';

// 1. Create the context
const ThemeContext = createContext();

// 2. Create the provider component
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// 3. Create a custom hook to use the context
const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

// 4. Export the provider and the custom hook
export { ThemeProvider, useTheme };
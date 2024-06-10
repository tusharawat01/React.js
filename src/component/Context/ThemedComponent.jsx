import React from 'react';
import {useTheme } from './Context.jsx';

const ThemedComponent = () => {
  const { theme, setTheme } = useTheme();

  return (
        <div style={{ background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff' }}>
          <p>The current theme is {theme}</p>
          <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
            Toggle Theme
          </button>
         </div>
 
  );
};


export default ThemedComponent;
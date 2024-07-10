// src/context/ThemeContext.tsx

import React, { createContext, useContext, useState } from 'react';

// Define your theme interface
export interface Theme {
  colors: {
    primary: string;
    secondary: string;
    background: string;
    text: string;
  };
}

// Default light theme
const lightTheme: Theme = {
  colors: {
    primary: '#3498db',
    secondary: '#9b59b6',
    background: '#ecf0f1',
    text: '#2c3e50',
  },
};

// Dark theme
const darkTheme: Theme = {
  colors: {
    primary: '#2980b9',
    secondary: '#8e44ad',
    background: '#2c3e50',
    text: '#ecf0f1',
  },
};

// Context setup
const ThemeContext = createContext<{
  theme: Theme;
  toggleTheme: () => void;
}>({
  theme: lightTheme,
  toggleTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider: React.FC = ({ children }: any) => {
  const [theme, setTheme] = useState<Theme>(lightTheme);

  const toggleTheme = () => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

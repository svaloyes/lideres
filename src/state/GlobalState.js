import React, { createContext, useState, useContext } from 'react';

// Create the context
const GlobalContext = createContext();

// Create a custom hook to use the context
export const useGlobalState = () => useContext(GlobalContext);

// Create the provider component
export const GlobalStateProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  const [language, setLanguage] = useState('es'); // Default to Spanish

  // Function to toggle theme
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  // Function to change language
  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
  };

  // Value object to be provided to consumers
  const value = {
    theme,
    toggleTheme,
    language,
    changeLanguage
  };

  return (
    <GlobalContext.Provider value={value}>
      {children}
    </GlobalContext.Provider>
  );
};

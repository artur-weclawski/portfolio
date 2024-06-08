import React, { useEffect } from 'react';
import './Switch.css';
import { createContext } from 'react';
export const ThemeContext = createContext("dark");

const Switch = ({theme, setTheme}) => {
    const toogleTheme = () => {
        setTheme((curr) => (curr === "dark" ? "light" : "dark"));
        document.documentElement.classList.toggle('light');

    }
  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <input
        className="react-switch-checkbox"
        id={`react-switch-new`}
        type="checkbox"
        onChange={toogleTheme}
        //checked={theme === "light"}
      />
      <label
        className="react-switch-label"
        htmlFor={`react-switch-new`}
      >
        <span className={`react-switch-button`} />
      </label>
      </ThemeContext.Provider>
  );
};

export default Switch;
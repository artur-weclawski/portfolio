import './Switch.css';
import { createContext } from 'react';
export const ThemeContext = createContext("dark");
const Switch = ({theme, setTheme, switchId}) => {
    const toogleTheme = () => {
        setTheme((curr) => (curr === "dark" ? "light" : "dark"));
        document.documentElement.classList.toggle('light');
    }
  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <input
        className="react-switch-checkbox"
        id={switchId}
        type="checkbox"
        onChange={toogleTheme}
      />
      <label
        className="react-switch-label"
        htmlFor={switchId}
      >
        <span className={`react-switch-button`}/>
      </label>
      </ThemeContext.Provider>
  );
};

export default Switch;
import React, { useEffect } from 'react';
import './Switch.css';
import { createContext } from 'react';
export const ThemeContext = createContext("dark");

const Switch = ({theme, setTheme}) => {
    const toogleTheme = () => {
        setTheme((curr) => (curr === "dark" ? "light" : "dark"));
    }
    useEffect(()=>{
      var root = document.querySelector(':root');
    if(theme === "dark"){
        root.style.setProperty('--switch-background', '#200d1b'); 
        root.style.setProperty('--switch-color', "#000")
        root.style.setProperty('--body-background', 'linear-gradient(#000, #000 33%, #200d1b)')
        root.style.setProperty('--navbar-background', '#000')
        root.style.setProperty('--a-hover-border-bottom', '#fff')
        root.style.setProperty('--a-hover-text-shadow-color', '#ce54ad')
        root.style.setProperty('--mobile-navigation-backgroud', '#000')
        root.style.setProperty('--mobile-navigation-color', '#fff')
        root.style.setProperty('--mobile-navigation-ul-background', '#000')
        root.style.setProperty('--mobile-navigation-a-color', '#fff')
        root.style.setProperty('--mobile-navigation-a-text-shadow-color', '#200d1b')
        root.style.setProperty('--neon_border-color', '#fff')
        root.style.setProperty('--neon_first_three-box-shadow-color', '#fff')
        root.style.setProperty('--neon_last_five-box-shadow-color', '#200d1b')
        root.style.setProperty('--text-color', '#fff')
    }else{
        root.style.setProperty('--switch-background', "rgba(155, 92, 72, 1)")
        root.style.setProperty('--switch-color', "#fff")
        root.style.setProperty('--body-background', 'linear-gradient(#fff, #fff 10%, #817b5b)')
        root.style.setProperty('--navbar-background', '#fff')
        root.style.setProperty('--a-hover-border-bottom', 'rgba(155, 92, 72, 1)')
        root.style.setProperty('--a-hover-text-shadow-color', 'none')
        root.style.setProperty('--mobile-navigation-backgroud', '#fff')
        root.style.setProperty('--mobile-navigation-color', 'rgba(155, 92, 72, 1)')
        root.style.setProperty('--mobile-navigation-ul-background', '#fff')
        root.style.setProperty('--mobile-navigation-a-color', 'rgb(53, 48, 37)')
        root.style.setProperty('--mobile-navigation-a-text-shadow-color', 'none')
        root.style.setProperty('--neon_border-color', 'rgba(155, 92, 72, 1)')
        root.style.setProperty('--neon_first_three-box-shadow-color', 'none')
        root.style.setProperty('--neon_last_five-box-shadow-color', 'none')
        root.style.setProperty('--text-color', '#000')

      }
    })
    
  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <input
        className="react-switch-checkbox"
        id={`react-switch-new`}
        type="checkbox"
        onChange={toogleTheme}
        checked={theme === "light"}
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
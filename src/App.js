import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Pages/Homepage';
import Projects from './Pages/Projects';
import NavBar from './Components/NavBar/NavBar';
import { useState } from 'react';
import GradientBackground from './GradientBackground';
export default function App(){
const [theme, setTheme] = useState("dark");
return(
  <>
  <GradientBackground/>
  <NavBar theme={theme} setTheme={setTheme}/>
  <Routes>
        <Route path={"/"} element={<HomePage />} />
        <Route path={"/projects"} element={<Projects />} />
  </Routes>
  </>
);
}
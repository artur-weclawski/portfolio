import './fonts.css';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Pages/Homepage';
import NavBar from './Components/NavBar/NavBar';
export default function App(){
return(
  <>
  <NavBar/>
  <Routes>
        <Route path={"/"} element={<HomePage />} />
  </Routes>
  </>
);
}
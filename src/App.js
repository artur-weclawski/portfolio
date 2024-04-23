import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Homepage';

const App = () =>{
return(
  <Routes>
    <Route>
      <Route index element={<HomePage />}></Route>
    </Route>
  </Routes>
);
}

export default App;

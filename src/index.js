import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
require('./Components/Neon/script.js')
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
  <BrowserRouter basename='/portfolio'>
    <Routes>
      <Route path="/portfolio/*" element={<App />}/>
    </Routes>
  </BrowserRouter>
</React.StrictMode>
);
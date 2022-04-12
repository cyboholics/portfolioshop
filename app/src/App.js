import React from 'react'
import { Routes, Route } from 'react-router-dom';
import MenuAppBar from './Components/MenuAppBar'
import Home from './Pages/Home'
import Team from './Pages/Team'
import Pricing from './Pages/Pricing'
function App() {
  return (
    <>
      <MenuAppBar />
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/Team" element={ <Team/> } />
        <Route path="/Pricing" element={ <Pricing/> } />
      </Routes>
    </>
  );
}

export default App;

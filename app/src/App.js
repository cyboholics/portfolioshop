import React from 'react'
import { Routes, Route } from 'react-router-dom';
import MenuAppBar from './Components/MenuAppBar'
import Home from './Pages/Home'
import Team from './Pages/Team'
function App() {
  return (
    <>
      <MenuAppBar />
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/Team" element={ <Team/> } />
      </Routes>
    </>
  );
}

export default App;

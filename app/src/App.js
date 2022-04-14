import React from 'react'
import { Routes, Route } from 'react-router-dom';
import MenuAppBar from './Components/MenuAppBar'
import Home from './Pages/Home'
import Team from './Pages/Team'
import theme from './Components/Theme'
import {ThemeProvider } from '@mui/material'
import Menufooter from './Components/MenuFooter';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <MenuAppBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Team" element={<Team />} />
        </Routes>
        <Menufooter />
      </ThemeProvider>
    </>
  );
}

export default App;

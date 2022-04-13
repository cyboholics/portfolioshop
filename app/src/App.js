import React from 'react'
import { Routes, Route } from 'react-router-dom';
import MenuAppBar from './Components/MenuAppBar'
import Home from './Pages/Home'
import Team from './Pages/Team'
import theme from './Components/Theme'
import {ThemeProvider } from '@mui/material'

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <MenuAppBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Team" element={<Team />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;

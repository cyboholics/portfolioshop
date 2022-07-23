import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Aboutus from './Pages/AboutUs'
import MenuAppBar from './Components/MenuAppBar'
import { ThemeProvider } from '@mui/material'
import theme from './Components/Theme'
import Home from './Pages/Home'
import Team from './Pages/Team'
import Menufooter from './Components/MenuFooter'
import PrivacyPolicy from './Pages/PrivacyPolicy'
import SnackbarStateProvider from './Providers/SnackbarStateProvider'
import Snackbar from './Components/MuiComponents/Snackbar'
import Page404 from './Pages/page404'

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <MenuAppBar />
        <SnackbarStateProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/team" element={<Team />} />
            <Route path="/about-us" element={<Aboutus />} />
            <Route path="*" element={<Page404 />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          </Routes>
          <Snackbar />
        </SnackbarStateProvider>
        <Menufooter />
      </ThemeProvider>
    </>
  )
}

export default App
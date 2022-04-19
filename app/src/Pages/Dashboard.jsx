import React from 'react'
import { Box, Container } from '@mui/material'
import GoogleLogoutComp from '../Components/ThirdPartyButtons/GoogleLogoutComp'
import UserDataStateProvider from '../Providers/UserDataStateProvider'
import Website from '../Components/Dashboard/Website'
import UserDisplayItems from '../Components/Dashboard/UserDisplayItems'
import About from '../Components/Dashboard/About'
import Skills from '../Components/Dashboard/Skills'
import Resume from '../Components/Dashboard/Resume'
import Projects from '../Components/Dashboard/Projects'
import Contact from '../Components/Dashboard/Contact'
import Savebutton from '../Components/Dashboard/SaveButton'

const Dashboard = () => {
    return (
        <>
            <Box sx={{ marginTop: 10 }}>
                <GoogleLogoutComp />
                <UserDataStateProvider>
                    <Container>
                        <Website />
                        <UserDisplayItems />
                        <About />
                        <Skills />
                        <Resume />
                        <Projects />
                        <Contact />
                        <Savebutton />
                    </Container>
                </UserDataStateProvider>
            </Box>

        </>
    )
}

export default Dashboard
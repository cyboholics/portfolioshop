import React from 'react'
import { Container } from '@mui/material'
import UserDataStateProvider from '../../Providers/UserDataStateProvider'
import Website from './UserDataSectionComponents/Website'
import UserDisplayItems from './UserDataSectionComponents/UserDisplayItems'
import About from './UserDataSectionComponents/About'
import Skills from './UserDataSectionComponents/Skills'
import Projects from './UserDataSectionComponents/Projects'
import Contact from './UserDataSectionComponents/Contact'

const Userdata = () => {
    return (
        <UserDataStateProvider>
            <Container>
                <Website />
                <UserDisplayItems />
                <About/>
                <Skills/>
                <Projects/>
                <Contact/>
            </Container>
        </UserDataStateProvider>

    );
}

export default Userdata;
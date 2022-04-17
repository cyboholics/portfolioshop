import React from 'react'
import { Container } from '@mui/material'
import UserDataStateProvider from '../../Providers/UserDataStateProvider'
import Website from './UserDataSectionComponents/Website'
import UserDisplayItems from './UserDataSectionComponents/UserDisplayItems'
import About from './UserDataSectionComponents/About'

const Userdata = () => {
    return (
        <UserDataStateProvider>
            <Container>
                <Website />
                <UserDisplayItems />
                <About/>
            </Container>
        </UserDataStateProvider>

    );
}

export default Userdata;
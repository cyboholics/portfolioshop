import React from 'react'
import { Container, Typography } from '@mui/material'
import { UserContext } from '../../Providers/UserStateProvider'
import axios from 'axios'
import UserDataStateProvider from '../../Providers/UserDataStateProvider'
import Website from './UserDataSectionComponents/Website'
import UserDisplayItems from './UserDataSectionComponents/UserDisplayItems'

const Userdata = () => {
    const { userToken } = React.useContext(UserContext)
    const [userData, setUserData] = React.useState({})
    React.useEffect(() => {
        axios.get(`/api/userDataRead?token=${userToken}`).then(res => {
            setUserData(res.data.doc.templateData)
        })
    }, [userToken])
    
    return (
        <UserDataStateProvider>
            <Container>
                <Website />
                <UserDisplayItems />
            </Container>
        </UserDataStateProvider>

    );
}

export default Userdata;
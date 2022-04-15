import React from 'react'
import { Container, Typography } from '@mui/material'
import { UserContext } from '../../Providers/UserStateProvider'
import { TextField } from '@mui/material'
import axios from 'axios'
import UserDataStateProvider from '../../Providers/UserDataStateProvider'
import Website from './UserDataSectionComponents/Website'

const Userdata = () => {
    const { userToken } = React.useContext(UserContext)
    const [userData, setUserData] = React.useState({})
    console.log(userData)
    React.useEffect(() => {
        axios.get(`/api/userDataRead?token=${userToken}`).then(res => {
            setUserData(res.data.doc.templateData)
        })
    }, [userToken])
    return (
        <UserDataStateProvider>
            <Container>
                <Website></Website>
            </Container>
        </UserDataStateProvider>

    );
}

export default Userdata;

import React from 'react'
import { Box } from '@mui/material'
import GoogleLogoutComp from '../Components/ThirdPartyButtons/GoogleLogoutComp'
const Dashboard = () => {
    return (
        <>
            <Box sx={{ marginTop: 10 }}>
                <GoogleLogoutComp />
            </Box>
            <Userdata />
        </>
    )
}

export default Dashboard
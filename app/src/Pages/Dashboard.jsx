import React from 'react'
import Userdata from '../Components/Dashboard/UserData'
import GoogleLogoutComp from '../Components/GoogleAuth/GoogleLogoutComp'
const Dashboard = () => {
    return (
        <>
            <GoogleLogoutComp />
            <Userdata/>
        </>
    )
}

export default Dashboard

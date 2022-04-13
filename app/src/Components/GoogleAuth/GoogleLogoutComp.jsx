import React from 'react'
import { GoogleLogout } from 'react-google-login'
import { EnvironmentContext } from '../../Providers/EnvironmentProvider';
import { UserContext } from '../../Providers/UserStateProvider';
const GoogleLogoutComp = () => {
    const { CLIENT_ID } = React.useContext(EnvironmentContext)
    const { setUserToken } = React.useContext(UserContext)
    const responseGoogleSuccess = async (res) => {
        setUserToken("")
    }
    const responseGoogleFailure = () => {
        alert("Google Sign out Failed")
    }
    return (
        <>
            {CLIENT_ID && <GoogleLogout
                clientId={CLIENT_ID}
                buttonText={"Logout"}
                onLogoutSuccess={responseGoogleSuccess}
                onFailure={responseGoogleFailure}
                theme="dark"
            />}
        </>
    );
}

export default GoogleLogoutComp;

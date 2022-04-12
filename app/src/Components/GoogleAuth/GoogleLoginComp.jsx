import axios from 'axios';
import React from 'react'
import { GoogleLogin } from 'react-google-login'
import { EnvironmentContext } from '../../Providers/EnvironmentProvider';
import { UserContext } from '../../Providers/UserStateProvider';

const GoogleLoginComp = () => {
    const { setUserToken } = React.useContext(UserContext)
    const { CLIENT_ID } = React.useContext(EnvironmentContext)
    const responseGoogleSuccess = async (res) => {
        try {
            const userEmail = await axios.get(`/api/GoogleAuthValidation?token=${res.tokenId}`)
            console.log(userEmail.data)
        } catch (err) {
            console.log(err)
        }
        setUserToken(res.tokenId)
    }
    const responseGoogleFailure = () => {
        alert("Google Sign in Failed")
    }
    return (
        <div>
            {CLIENT_ID && <GoogleLogin
                clientId={CLIENT_ID}
                buttonText={"Continue with Google"}
                onSuccess={responseGoogleSuccess}
                onFailure={responseGoogleFailure}
                cookiePolicy={'single_host_origin'}
                permission='id_token'
                theme="dark"
            />}
        </div>
    );
}

export default GoogleLoginComp;

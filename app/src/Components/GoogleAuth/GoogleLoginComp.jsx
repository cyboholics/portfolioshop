import React from 'react'
import { GoogleLogin } from 'react-google-login'
import { EnvironmentContext } from '../../Providers/EnvironmentProvider'
import { UserContext } from '../../Providers/UserStateProvider'

const GoogleLoginComp = () => {
    const { setUserToken } = React.useContext(UserContext)
    const { CLIENT_ID } = React.useContext(EnvironmentContext)
    const responseGoogleSuccess = async (res) => {
        setUserToken(res.tokenId)
        //TODO: Remove the log statements
        console.log(res.tokenId)
    }
    const responseGoogleFailure = () => {
    }
    return (
        <>
            {CLIENT_ID && <GoogleLogin
                clientId={CLIENT_ID}
                buttonText={"Continue with Google"}
                onSuccess={responseGoogleSuccess}
                onFailure={responseGoogleFailure}
                cookiePolicy={'single_host_origin'}
                permission='id_token'
                theme="dark"
            />}
        </>
    )
}

export default GoogleLoginComp

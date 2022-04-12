import axios from 'axios';
import React from 'react'
import { GoogleLogin } from 'react-google-login'
import { EnvironmentContext } from '../Providers/EnvironmentProvider';
import { UserContext } from '../Providers/UserStateProvider';

const GoogleLoginComp = ()=> {
    const {userToken, setUserToken} = React.useContext(UserContext)
    const [email, setEmail] = React.useState("")
    const {CLIENT_ID} = React.useContext(EnvironmentContext)
    const responseGoogle = async (res) => {
        try {
            const userEmail = await axios.get(`/api/GoogleAuthValidation?token=${res.tokenId}`)
            setEmail(userEmail.data)
        } catch (err) {
            console.log(err)
        }
        setUserToken(res.tokenId)
    }
    return (
        <div>
            {CLIENT_ID && <GoogleLogin
                clientId={CLIENT_ID}
                buttonText={"Continue with Google"}
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
                permission='id_token'
            />}
            <p>
                {userToken}
            </p>
            <p>
                Email: {email}
            </p>
        </div>
    );
}

export default GoogleLoginComp;

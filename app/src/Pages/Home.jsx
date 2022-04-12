import React from 'react'
import GoogleLoginComp from '../Components/GoogleAuth/GoogleLoginComp';
import GoogleLogoutComp from '../Components/GoogleAuth/GoogleLogoutComp';
import { UserContext } from '../Providers/UserStateProvider';

export default function Home() {
    const { userToken } = React.useContext(UserContext)

    return (
        <>
            {userToken ? <GoogleLogoutComp /> : <GoogleLoginComp />}
        </>
    )
}

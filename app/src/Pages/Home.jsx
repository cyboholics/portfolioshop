import React from 'react'
import { UserContext } from '../Providers/UserStateProvider';
import Landing from './Landing';
import Dashboard from './Dashboard'

export default function Home() {
    const { userToken } = React.useContext(UserContext)
    console.log(userToken)
    return (
        <>
            {userToken ?  <Dashboard/>: <Landing />}
        </>
    )
}

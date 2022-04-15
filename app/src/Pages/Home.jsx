import React from 'react'
import { UserContext } from '../Providers/UserStateProvider'
import Landing from './Landing'
import Dashboard from './Dashboard'

const Home = () => {
    const { userToken } = React.useContext(UserContext)
    console.log(userToken)
    return (
        <>
            {userToken ?  <Dashboard/>: <Landing />}
        </>
    )
}

export default Home

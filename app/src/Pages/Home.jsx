import React from 'react'
import UserDataStateProvider from '../Providers/UserDataStateProvider'
import TicketStateProvider from '../Providers/TicketStateProvider'
import { UserContext } from '../Providers/UserStateProvider'
import Landing from './Landing'
import Dashboard from './Dashboard'

const Home = () => {
    const { userToken } = React.useContext(UserContext)
    return (
        <>
            <UserDataStateProvider>
                <TicketStateProvider>
                    {userToken ? <Dashboard /> : <Landing />}
                </TicketStateProvider>
            </UserDataStateProvider>
        </>
    )
}

export default Home

import React from 'react'
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

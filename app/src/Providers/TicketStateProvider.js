import React from 'react'
import axios from 'axios'
import { UserContext } from "./UserStateProvider"
export const TicketContext = React.createContext({})

const TicketStateProvider = ({ children }) => {
    const {userToken, userEmail} = React.useContext(UserContext)
    const [userTicket, setUserTicket] = React.useState({})
    const [status, setStatus] = React.useState(false)
    const [thread, setThread] = React.useState([])
    React.useEffect(() => {
        if (!userToken) return
        axios.get(`/api/userRequestRead`, {
            headers: {
                token: userToken
            }
        }).then((res) => {
            setUserTicket(res.data)
        }).catch((err => {
            console.log(err)
        }))
    }, [userToken])

    React.useEffect(() => {
        setStatus(userTicket.status)
        setThread(userTicket.thread)
    }, [userTicket])

    return (
        <TicketContext.Provider value={{ userTicket, setUserTicket, userEmail, status, setStatus, thread, setThread}}>
            {children}
        </TicketContext.Provider>
    )
}
export default TicketStateProvider
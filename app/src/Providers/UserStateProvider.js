import React from 'react'
import axios from 'axios'
export const UserContext = React.createContext({})

const UserStateProvider = ({ children }) => {
    const [userToken, setUserToken] = React.useState("");
    const [userEmail, setUserEmail] = React.useState("");
    React.useEffect(()=>{
        axios.get(`/api/GoogleAuthValidation?token=${userToken}`).then((res) => {
            setUserEmail(res.data)
        })
    })
    return (
        <UserContext.Provider value={{ userToken, setUserToken, userEmail }}>
            {children}
        </UserContext.Provider>
    )
}
export default UserStateProvider;
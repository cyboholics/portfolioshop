import React from 'react'

export const UserContext = React.createContext({})

const UserStateProvider = ({children}) => {
    const [userToken, setUserToken] = React.useState("Token");
    return (
        <UserContext.Provider value={{userToken, setUserToken}}>
            {children}
        </UserContext.Provider>
    )
}
export default UserStateProvider;
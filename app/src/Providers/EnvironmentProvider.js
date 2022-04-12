import React from 'react'
import axios from 'axios'
export const EnvironmentContext = React.createContext({})
export default function EnvironmentProvider({ children }) {
    const [CLIENT_ID,setClientID] = React.useState("")
    console.log(CLIENT_ID)
    React.useEffect(() => {
        axios.get(`/api/environments`).then((env) => {
            setClientID(env.data["GOOGLE_CLIENT_ID"])
        }
        ).catch((err) => {
            console.log(err)
        })
    }, [])
    return (
        <EnvironmentContext.Provider value={{CLIENT_ID}}>
            {children}
        </EnvironmentContext.Provider>
    )
}

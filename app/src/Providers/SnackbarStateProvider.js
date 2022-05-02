import React from 'react'
export const SnackbarContext = React.createContext({})

const SnackbarStateProvider = ({ children }) => {
    const [openToast, setOpenToast] = React.useState(false)
    const [message, setMessage] = React.useState("")
    const [severity, setSeverity] = React.useState("info")
    const [duration, setDuration] = React.useState(6000)
    return (
        <SnackbarContext.Provider value={{ openToast, setOpenToast, message, setMessage, severity, setSeverity, duration, setDuration }}>
            {children}
        </SnackbarContext.Provider>
    )
}

export default SnackbarStateProvider
import React from 'react'
export const SnackbarContext = React.createContext({})

const SnackbarStateProvider = ({ children }) => {
    const [openToast, setOpenToast] = React.useState(false)

    return (
        <SnackbarContext.Provider value={{ openToast, setOpenToast }}>
            {children}
        </SnackbarContext.Provider>
    )
}

export default SnackbarStateProvider
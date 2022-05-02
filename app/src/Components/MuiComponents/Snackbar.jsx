import React from 'react'
import { Snackbar as SB, Alert } from '@mui/material'
import { SnackbarContext } from './../../Providers/SnackbarStateProvider'

const Snackbar = () => {
    const { openToast, setOpenToast, message, severity, duration } = React.useContext(SnackbarContext)
    const handleToastClose = () => setOpenToast(false)
    return (
        <SB
            open={openToast}
            autoHideDuration={duration}
            onClose={handleToastClose}
            sx={{ position: "absolute", bottom: 10, left: 10 }}>
            <Alert onClose={handleToastClose} severity={severity} >
                {message}
            </Alert>
        </SB>
    )
}

export default Snackbar
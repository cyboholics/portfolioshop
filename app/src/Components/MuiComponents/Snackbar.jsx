import React from 'react'
import { Snackbar as SB, Alert } from '@mui/material'
import { SnackbarContext } from './../../Providers/SnackbarStateProvider'

const Snackbar = () => {
    const { openToast, setOpenToast } = React.useContext(SnackbarContext)
    const handleToastClose = () => setOpenToast(false)
    return (
        <SB
            open={openToast}
            autoHideDuration={6000}
            onClose={handleToastClose}
            sx={{ position: "absolute", bottom: 0, left: 0 }}>
            <Alert onClose={handleToastClose} severity="success" sx={{ width: '100%' }}>
                This is a success message!
            </Alert>
        </SB>
    )
}

export default Snackbar
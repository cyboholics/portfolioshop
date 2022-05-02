import React from 'react'
import { Alert, Button, Grid, TextField, Snackbar } from '@mui/material'
import { TicketContext } from './../../../Providers/TicketStateProvider'

const Comment = (props) => {
    const { thread, setThread, userEmail, setStatus } = React.useContext(TicketContext)
    const [opneToast, setOpenToast] = React.useState(false)
    const [value, setValue] = React.useState("")
    const saveData = () => {
        if (value.trim().length == 0) return
        //TODO Save In API
        setValue("")
        setStatus(true)
        setOpenToast(true)
        setThread([...thread, { 'message': value, 'by': userEmail, 'timestamp': (new Date()).toJSON() }])
    }
    const handleChange = (e) => setValue(e.target.value)
    const handleToastClose = () => setOpenToast(false)
    const handleEnterKey = (e) => {
        if (e.key == 'Enter') {
            saveData()
        }
    }

    return (
        <>
            <Grid
                container
                spacing={{ xs: 2, sm: 2 }}
                direction={{ xs: "column", sm: "row" }}
                justifyContent={{ sm: "space-between" }}
                alignItems={{ sm: "flex-end" }}
                sx={{ marginTop: { xs: -1, sm: -2 } }}>
                <Grid item sm={10}>
                    <TextField
                        multiline
                        sx={{ width: "100%", height: 1 }}
                        label="Your Concern"
                        id="standard-size-normal"
                        variant="standard"
                        value={value || ""}
                        onChange={handleChange}
                        onKeyPress={handleEnterKey}
                    />
                </Grid>
                <Grid item sm={2}>
                    <Button
                        onClick={saveData}
                        sx={{ width: { sm: "100%" }, height: 1 }}
                        size="small"
                        variant="contained"
                        color="success">
                        Send
                    </Button>
                </Grid>
            </Grid>
            <Snackbar
                open={opneToast}
                autoHideDuration={6000}
                onClose={handleToastClose}
                sx={{position:"absolute", bottom:0, left:0}}>
                <Alert onClose={handleToastClose} severity="success" sx={{ width: '100%' }}>
                    This is a success message!
                </Alert>
            </Snackbar>
        </>
    )
}

export default Comment
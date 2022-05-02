import React from 'react'
import { SnackbarContext } from './../../../Providers/SnackbarStateProvider'
import { Button, Grid, TextField } from '@mui/material'
import { TicketContext } from './../../../Providers/TicketStateProvider'

const Comment = () => {
    const { thread, setThread, userEmail, setStatus, saveTicket } = React.useContext(TicketContext)
    const { setOpenToast, setMessage, setSeverity } = React.useContext(SnackbarContext)
    const [value, setValue] = React.useState("")

    const saveData = async () => {
        if (value.trim().length === 0) {
            setValue("")
            return;
        }
        try {
            await saveTicket(value)
            setValue("")
            setStatus(true)
            setMessage("Sent Request Successfully")
            setSeverity("success")
            setOpenToast(true)
            setThread([...thread, { 'message': value, 'by': userEmail, 'timestamp': (new Date()).toJSON() }])
        } catch (error) {
            //TODO Backend Issue: Could Not Update value in 
            setMessage("Could not raise request")
            setSeverity("error")
            setOpenToast(true)
        }
    }

    const handleChange = (e) => setValue(e.target.value)
    const handleEnterKey = (e) => {
        if (e.key === 'Enter') {
            saveData()
        }
        if (e.key === ' ' && value != null && value[0] === " ") {
            setValue("")
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
        </>
    )
}

export default Comment
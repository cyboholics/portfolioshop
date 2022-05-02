import React from 'react'
import { SnackbarContext } from './../../../Providers/SnackbarStateProvider'
import { Button, Grid, TextField } from '@mui/material'
import { TicketContext } from './../../../Providers/TicketStateProvider'

const Comment = (props) => {
    const { thread, setThread, userEmail, setStatus } = React.useContext(TicketContext)
    const { opneToast, setOpenToast } = React.useContext(SnackbarContext)
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
        </>
    )
}

export default Comment
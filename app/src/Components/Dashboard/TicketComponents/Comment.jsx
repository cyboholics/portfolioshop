import React from 'react'
import { Button, Grid, TextField } from '@mui/material'
import { TicketContext } from './../../../Providers/TicketStateProvider'

const Comment = (props) => {
    const { thread, setThread, userEmail } = React.useContext(TicketContext)
    console.log(thread)
    const [value, setValue] = React.useState("")
    const handleChange = (e) => setValue(e.target.value)
    console.log(value)
    const handleSubmit = (e) => {
        if(value.length==0) return
        //TODO Save In API
        setValue("")
        setThread([...thread, { 'message': value, 'by': userEmail, 'timestamp': (new Date()).toJSON() }])
    }
    return (
        <>
            <Grid
                container
                spacing={3}
                direction="row"
                justifyContent="space-between"
                alignItems="flex-end"
                sx={{ marginTop: -2 }}>
                <Grid item xs={10}>
                    <TextField
                        multiline
                        sx={{ width: "100%", height: 1 }}
                        label="Your Concern"
                        id="standard-size-normal"
                        variant="standard"
                        value={value || ""}
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={2}>
                    <Button
                        onClick={handleSubmit}
                        sx={{ width: "100%", height: 1 }}
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
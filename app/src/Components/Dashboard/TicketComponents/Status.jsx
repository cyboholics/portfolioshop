import React from 'react'
import { Switch, Stack, Typography } from '@mui/material'

const Status = (props) => {
    const { status, setStatus } = props
    const handleChange = () => setStatus(!status)
    //TODO: Complete Status Switch UI
    return (
        <Stack>
            <Typography>
                Resolve Status
            </Typography>
            <Stack direction="row">
                <Typography>
                    Closed
                </Typography>
                <Switch
                    checked={status}
                    onChange={handleChange}
                    inputProps={{ 'aria-label': 'controlled' }}
                />
                <Typography sx={{ marginTop: 1 }}>
                    Open
                </Typography>
            </Stack>
        </Stack >
    )
}

export default Status
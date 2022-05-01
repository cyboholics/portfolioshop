import React from 'react'
import { Avatar, Box, Stack, Typography } from '@mui/material'

const Message = (props) => {
    const message = props.message
    return (
        <Stack direction="row">
            <Stack direction="column" spacing={2}>
                <Avatar sx={{ bgcolor: 'green', width: 30, height: 30 }}>N</Avatar>
            </Stack>
            <Stack direction="column">
                <Typography >
                    {message.by}
                </Typography>
                <Typography>
                    {message.message}
                </Typography>
                <p style={{ textAlign: "left", color: "gray" }}>
                    {message.timestamp}
                </p>
                {message.by}
            </Stack>
        </Stack>
    )
}

export default Message
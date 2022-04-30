import React from 'react'
import { Box } from '@mui/material'

const Message = (props) => {
    const message = props.message
    return (
        <>
            <Box>
                {message.message}
                {message.by}
                {message.timestamp}
            </Box>
        </>
    )
}

export default Message
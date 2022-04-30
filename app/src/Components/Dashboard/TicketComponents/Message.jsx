import React from 'react'
import { Box } from '@mui/material'

const Message = (props) => {
    const message = props.message
    return (
        <>
            <Box>
                {message.message}
            </Box>
        </>
    )
}

export default Message
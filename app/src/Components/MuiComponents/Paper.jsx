import React from 'react'
import { Paper } from '@mui/material'

export default function Papers(props) {
    const {children} = props
    return (
        <Paper sx={{
            padding: 3,
            paddingBottom: 2.5,
            marginTop: 2,
            marginBottom: 2,
            marginLeft: 4,
            marginRight: 4
        }} 
        elevation={3}
        {...props} >
            {children}
        </Paper>
    )
}

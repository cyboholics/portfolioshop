import React from 'react'
import { Paper } from '@mui/material'

export default function Papers(props) {
    const {children} = props
    return (
        <Paper sx={{
            padding: 3.5,
            paddingTop: 2.5,
            paddingBottom: 2.5,
            marginTop: 3,
            marginBottom: 3,
            marginLeft: 4,
            marginRight: 4,
            borderRadius: 2,
        }} 
        elevation={3}
        {...props} >
            {children}
        </Paper>
    )
}

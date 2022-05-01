import React from 'react'
import { Switch, Stack, Typography } from '@mui/material'

const Status = (props) => {
    const { status, setStatus } = props
    const handleChange = () => setStatus(!status)
    //TODO: Complete Commenting UI
    return (
        <>
            <p>Add Comments here</p>
        </>
    )
}

export default Status
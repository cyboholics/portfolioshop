import React from 'react'
import { IconButton, Tooltip } from '@mui/material'
import InfoIcon from '@mui/icons-material/Info';

const CustomToolTip = (props) => {
    return (
        <Tooltip arrow {...props}>
            <IconButton>
                <InfoIcon fontSize={'small'} />
            </IconButton>
        </Tooltip>
    )
}

export default CustomToolTip
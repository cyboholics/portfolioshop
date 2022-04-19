import React from 'react';
import { IconButton } from "@mui/material"
import SaveIcon from '@mui/icons-material/Save';

const Savebutton = () => {
    return (
        <IconButton
            color="white"
            sx={{
                position: "fixed",
                bottom: 50,
                right: 50,
                width: 60,
                height: 60,
                padding: 0,
                backgroundColor: "#aaaaff"
            }}
        >
            <SaveIcon sx={{
                height: 30,
                width: 30
            }} />
        </IconButton>
    );
}

export default Savebutton;

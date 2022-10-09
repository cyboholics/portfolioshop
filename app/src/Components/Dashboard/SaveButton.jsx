import React from 'react';
import { Button } from "@mui/material"
import SaveIcon from '@mui/icons-material/Save';
import { UserDataContext } from '../../Providers/UserDataStateProvider'

const Savebutton = () => {
    const { saveUserData } = React.useContext(UserDataContext)
    return (
        <Button variant="contained" 
            onClick={saveUserData}
            sx={{
                position: "fixed",
                bottom: 50,
                right: 50,
                backgroundColor: "#aaaaff"
            }}
            size="large"
            startIcon={<SaveIcon />}>
            Save
        </Button>
    );
}

export default Savebutton;
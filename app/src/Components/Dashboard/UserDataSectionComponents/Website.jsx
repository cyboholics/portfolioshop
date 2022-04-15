import React, { useState } from 'react'
import { TextField } from '@mui/material'
import { UserDataContext } from '../../../Providers/UserDataStateProvider'

export default function Website() {
    const {website, setWebsite, name, about} = React.useContext(UserDataContext)
    return <>
    {console.log(about)}
        <TextField id="outlined-basic" label="Website Title" variant="outlined" value={website} onChange={(e) => { setWebsite(e.target.value) }} />
        {/*TODO: Website Favicon Upload*/}
    </>
}

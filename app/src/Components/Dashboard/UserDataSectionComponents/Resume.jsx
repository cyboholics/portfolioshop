import React from 'react'
import Paper from '../../MuiComponents/Paper'
import { withStyles } from '@mui/styles'
import { Tabs, Tab } from '@mui/material'

const styles = (theme) => ({

})

const Resume = (props) => {
    const [value, setValue] = React.useState(0);
    return (
        <Paper>
            <Tabs value={value} onChange={()=>{}} orientation='vertical' aria-label="basic tabs example">
                <Tab label="Item One" />
                <Tab label="Item Two" />
                <Tab label="Item Three" />
            </Tabs>
        </Paper>
    )
}

export default withStyles(styles)(Resume)
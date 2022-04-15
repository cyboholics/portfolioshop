import React from 'react'
import { UserDataContext } from '../../../Providers/UserDataStateProvider'
import { TextField, Typography, Stack } from '@mui/material'
import Paper from '../../MuiComponents/Paper'
import { withStyles } from '@mui/styles'

const styles = (theme) => ({
    stack: {
        marginTop: 20,
        marginBottom: 20
    }
})

const Website = (props) => {
    const { classes } = props
    const { website, setWebsite } = React.useContext(UserDataContext)
    const setWebsiteTitle = (event) => {
        setWebsite({...website, title: event.target.value})
    }
    const setFaviconUrl = (event) => {
        setWebsite({...website, faviconUrl: event.target.value})    
    }
    return <>
        <Paper
            className={classes.paper}
        >
            <Typography className={classes.heading} variant="h5">Website Details</Typography>
            <Stack spacing={2} className={classes.stack}>
                <TextField
                    id="standard-size-small"
                    size="small" 
                    label="Website Title"
                    variant="standard"
                    autoComplete='off'
                    InputLabelProps={{ shrink: true }}
                    value={website?.title || ''}
                    onChange={setWebsiteTitle} />

                <TextField
                    id="standard-size-small"
                    size="small"
                    label="Website Favicon Url"
                    variant="standard"
                    autoComplete='off'
                    InputLabelProps={{ shrink: true }}
                    value={website?.faviconUrl || ''}
                    onChange={setFaviconUrl} />
            </Stack>
        </Paper>
    </>
}

export default withStyles(styles)(Website)
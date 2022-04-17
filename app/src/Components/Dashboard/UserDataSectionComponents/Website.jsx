import React from 'react'
import { UserDataContext } from '../../../Providers/UserDataStateProvider'
import { TextField, Typography, Stack, Divider } from '@mui/material'
import Paper from '../../MuiComponents/Paper'
import { withStyles } from '@mui/styles'

const styles = (theme) => ({
    stack: {
        marginTop: 20,
        marginBottom: 10
    }
})

const Website = (props) => {
    const { classes } = props
    const { website, setWebsite } = React.useContext(UserDataContext)
    const setWebsiteTitle = (event) => {
        setWebsite({ ...website, title: event.target.value })
    }
    const setFaviconUrl = (event) => {
        setWebsite({ ...website, faviconUrl: event.target.value })
    }
    return <>
        <Paper
            className={classes.paper}
        >
            <Typography className={classes.heading} variant="h5">Website Details</Typography>
            <Stack spacing={4}
                className={classes.stack}
                direction={{ xs: 'column', md: 'row' }}>
                <TextField
                    sx={{
                        width: {
                            xs: '100%',
                            md: '30%'
                        }
                    }}
                    id="standard-size-small"
                    size="small"
                    label="Website Title"
                    variant="standard"
                    autoComplete='off'
                    InputLabelProps={{ shrink: true }}
                    value={website?.title || ''}
                    onChange={setWebsiteTitle} />

                <TextField
                    sx={{
                        width: {
                            xs: '100%',
                            md: '70%'
                        }
                    }}
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
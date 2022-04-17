import React from 'react'
import { UserDataContext } from '../../../Providers/UserDataStateProvider'
import { TextField, Typography, Stack, IconButton, Tooltip } from '@mui/material'
import InfoIcon from '@mui/icons-material/Info'
import Paper from '../../MuiComponents/Paper'
import { withStyles } from '@mui/styles'
import UploadImage from '../UploadImage'

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
    const setFaviconUrl = (image) => {
        setWebsite({ ...website, faviconUrl: image })
    }

    return <>
        <Paper
            className={classes.paper}
        >
            <Typography className={classes.heading} variant="h5">
                Website Details
                <Tooltip arrow placement='right' title="Fill up the website specific details">
                    <IconButton>
                        <InfoIcon fontSize={'small'} />
                    </IconButton>
                </Tooltip>
            </Typography>
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
                    size="medium"
                    label="Website Title"
                    variant="standard"
                    autoComplete='off'
                    InputLabelProps={{ shrink: true }}
                    value={website?.title || ''}
                    onChange={setWebsiteTitle} />

                <TextField
                    sx={{
                        width: {
                            xs: '50%',
                            md: '40%'
                        }
                    }}
                    id="standard-size-small"
                    size="medium"
                    label="Website Favicon Url"
                    variant="standard"
                    autoComplete='off'
                    InputLabelProps={{ shrink: true }}
                    value={website?.faviconUrl || ''}
                    onChange={e=>setFaviconUrl(e.target.value)} />
                <UploadImage
                    onChange={setFaviconUrl}
                    imageLink={website.faviconUrl}
                    width={20}
                    height={20}
                />
            </Stack>
        </Paper>
    </>
}

export default withStyles(styles)(Website)
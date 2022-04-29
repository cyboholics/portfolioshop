import React from 'react'
import { UserDataContext } from '../../Providers/UserDataStateProvider'
import { TextField, Typography, Stack } from '@mui/material'
import Paper from '../MuiComponents/Paper'
import { withStyles } from '@mui/styles'
import UploadImage from './UploadImage'
import CustomToolTip from './CustomToolTip'

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
    const setHeroBG = (image) => {
        setWebsite({ ...website, heroBG: image })
    }

    return <>
        <Paper
            className={classes.paper}
        >
            <Typography className={classes.heading} variant="h5">
                Website Details
                <CustomToolTip placement='right' title="Fill up the website specific details">
                </CustomToolTip>
            </Typography>
            <Stack spacing={4}
                className={classes.stack}
                direction={{ xs: 'column', md: 'row' }}>
                <TextField
                    sx={{
                        width: '100%'
                    }}

                    size="medium"
                    label="Website Title"
                    variant="standard"
                    autoComplete='off'
                    InputLabelProps={{ shrink: true }}
                    value={website?.title || ''}
                    onChange={setWebsiteTitle} />
            </Stack>
            <Stack
                spacing={2}
                direction={{ xs: 'column', md: 'row' }}>
                <TextField
                    sx={{
                        width: {
                            xs: '100%',
                            md: '35%',
                            lg: '40%'
                        }
                    }}

                    size="medium"
                    label="Website Favicon Url"
                    variant="standard"
                    autoComplete='off'
                    InputLabelProps={{ shrink: true }}
                    value={website?.faviconUrl || ''}
                    onChange={e => setFaviconUrl(e.target.value)} />
                <UploadImage
                    onChange={setFaviconUrl}
                    imageLink={website?.faviconUrl}
                    width={30}
                    height={30}
                    circular
                />

                <TextField
                    sx={{
                        width: {
                            xs: '100%',
                            md: '35%',
                            lg: '40%'
                        }
                    }}

                    size="medium"
                    label="Hero Background Image"
                    variant="standard"
                    autoComplete='off'
                    InputLabelProps={{ shrink: true }}
                    value={website?.heroBG || ''}
                    onChange={e => setHeroBG(e.target.value)} />
                <UploadImage
                    onChange={setHeroBG}
                    imageLink={website?.heroBG}
                    width={100} />
            </Stack>
        </Paper>
    </>
}

export default withStyles(styles)(Website)
import React, { useState } from 'react'
import { UserDataContext } from '../../../Providers/UserDataStateProvider'
import Paper from "../../MuiComponents/Paper"
import { Stack, Typography, TextField } from '@mui/material'
import { withStyles } from '@mui/styles'
import CustomToolTip from '../CustomToolTip'

const styles = (theme) => ({
    stack: {
        marginTop: 20,
        marginBottom: 10
    },

})

const UserDisplayItems = (props) => {
    const { classes } = props
    const { name, setName, tagline, setTagline, socials, setSocials } = React.useContext(UserDataContext)
    const [tags, setTags] = useState(tagline.join(" "))
    const handelTags = (event) => {
        setTags((event.target.value))
        var tagArr = tags.split(" ")
        setTagline(tagArr)
    }
    const handelName = (event) => {
        setName(event.target.value)
    }

    return (
        <Paper>
            <Typography variant="h5">
                User Details
                <CustomToolTip placement='right' title="Tell us about your personal details that should be put up in the website">
                </CustomToolTip>
            </Typography>
            <Stack
                className={classes.stack} spacing={2}>
                {/*TODO: Display*/}
                <Stack spacing={2}
                    direction={{ xs: 'column', md: 'row' }}>
                    <TextField
                        sx={{
                            width: {
                                xs: '100%',
                                md: '30%'
                            }
                        }}

                        label="Full Name"
                        variant="standard"
                        InputLabelProps={{ shrink: true }}
                        value={name}
                        onChange={handelName} />

                    <TextField
                        sx={{
                            width: {
                                xs: '100%',
                                md: '70%'
                            }
                        }}

                        label="Display Tags"
                        variant="standard"
                        autoComplete="off"
                        InputLabelProps={{ shrink: true }}
                        value={tagline.join(" ")}
                        onChange={handelTags}
                        placeholder="Tags Are Space Seperated (eg. <Artist Developer Singer>" />
                </Stack>

                <Typography variant="h5">Social Handles</Typography>
                {Object.keys(socials).map((site) => {
                    return <TextField
                        key={site}

                        label={site[0].toUpperCase() + site.substr(1, site.length)}
                        value={socials[site]}
                        onChange={(event) => {
                            setSocials({ ...socials, [site]: event.target.value })
                        }}
                        variant="standard"
                        autoComplete="off"
                        InputLabelProps={{ shrink: true }}
                        placeholder="Account URL" />
                })}
            </Stack>
        </Paper>
    )
}

export default withStyles(styles)(UserDisplayItems)
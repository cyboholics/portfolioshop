import React, { useState } from 'react'
import { UserDataContext } from '../../../Providers/UserDataStateProvider'
import Paper from "../../MuiComponents/Paper"
import { Stack, Typography, TextField, Divider } from '@mui/material'
import { withStyles } from '@mui/styles'

const styles = (theme) => ({
    stack: {
        marginTop: 20,
        marginBottom: 20
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
            <Typography variant="h5">User Details</Typography>
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
                        id="standard-size-small"
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
                        id="standard-size-small"
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
                        id="standard-size-small"
                        label={site[0].toUpperCase()+site.substr(1,site.length)}
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
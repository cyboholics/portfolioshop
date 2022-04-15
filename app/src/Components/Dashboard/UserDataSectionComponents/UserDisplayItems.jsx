import React, { useState } from 'react'
import { UserDataContext } from '../../../Providers/UserDataStateProvider'
import Paper from "../../MuiComponents/Paper"
import { Stack, Typography, TextField, FormHelperText } from '@mui/material'
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
    const [twitter, setTwitter] = useState(socials.twitter||"")
    const [instagram, setInstagram] = useState(socials.instagram||"")
    const [facebook, setFacebook] = useState(socials.facebook||"")
    const [linkedin, setLinkedin] = useState(socials.linkedin||"")
    const [github, setGitHub] = useState(socials.github||"")
    const [socialSites, setSocialSites] = useState({})
    const [tags, setTags] = useState(tagline.join(" "))
    const handelTags = (event) => {
        setTags((event.target.value))
        var tagArr = tags.split(" ")
        setTagline(tagArr)
    }
    const handelName = (event) => {
        console.log(name)
        setName(event.target.value)
    }
    React.useEffect(()=>{
        setSocialSites({
            Twitter: [twitter, setTwitter],
            Facebook: [facebook, setFacebook],
            LinkedIn: [linkedin, setLinkedin],
            GitHub: [github, setGitHub],
            Instagram: [instagram, setInstagram]
        })
    },[twitter,facebook,github,linkedin,instagram])
    return (
        <Paper>
            <Typography variant="h5">User Details</Typography>
            <Stack
                className={classes.stack} spacing={2}>
                    {/*TODO: Display*/}
                <TextField
                    id="standard-size-small"
                    label="Full Name"
                    variant="standard"
                    InputLabelProps={{ shrink: true }}
                    value={name}
                    onChange={handelName} />

                <TextField
                    id="standard-size-small"
                    label="Display Tags"
                    variant="standard"
                    autoComplete="off"
                    InputLabelProps={{ shrink: true }}
                    value={tagline}
                    onChange={handelTags}
                    placeholder="Tags Are Space Seperated (eg. <Artist Developer Singer>" />
                <Typography variant="h5">Social Handles</Typography>
                {Object.keys(socialSites).map((site) => {
                    return <TextField
                        key={site}
                        id="standard-size-small"
                        label={site}
                        value = {socialSites[site][0]}
                        onChange = {(event) => {socialSites[site][1](event.target.value)}}
                        variant="standard"
                        autoComplete="off"
                        InputLabelProps={{ shrink: true }}
                        placeholder = "Account URL"/>
                })}
            </Stack>
        </Paper>
    )
}

export default withStyles(styles)(UserDisplayItems)
import React, { useEffect } from 'react'
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded'
import { UserDataContext } from '../../../../Providers/UserDataStateProvider'
import Paper from '../../../MuiComponents/Paper'
import { withStyles } from '@mui/styles'
import { Box, Grid, Stack, TextField, Button, Typography, IconButton } from '@mui/material'
import CustomToolTip from '../../CustomToolTip'

const styles = (theme) => ({
    stack: {
        marginTop: 20,
        marginBottom: 10
    }
})

function changeArray(arr, index, type, imageUrl, link, title, description) {
    //search for index, and reply value
    const copy = [...arr]
    copy[index] = { "type": type, "imageUrl": imageUrl, "link": link, "title": title, "description": description }
    return copy
}
function removeArrayElement(arr, index) {
    const copy = arr.filter((e, i) => i !== index)
    return copy
}

const Education = (props) => {
    const { index, type, imageUrl, link, title, description, projects, setProjects } = props
    return (
        <>
            <Grid
                container
                spacing={2}
            >
                <Grid item xs={6}>
                    <TextField
                        sx={{ width: '100%' }}
                        label="Project Title"
                        size="medium"
                        variant="standard"
                        autoComplete="off"
                        InputLabelProps={{ shrink: true }}
                        placeholder="Title"
                        value={title || ''}
                        onChange={(e) => { console.log(projects); console.log(e.target.value); setProjects(changeArray(projects, index, type, imageUrl, link, e.target.value, description)); console.log(title); }} />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        sx={{ width: '100%' }}
                        label="Project Domain"
                        size="medium"
                        variant="standard"
                        autoComplete="off"
                        InputLabelProps={{ shrink: true }}
                        placeholder="Domain or Type of your Project"
                        value={type || ''}
                        onChange={(e) => { setProjects(changeArray(projects, index, e.target.value, imageUrl, link, title, description)) }} />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        sx={{ width: '100%' }}
                        label="Project Image Link"
                        size="medium"
                        variant="standard"
                        autoComplete="off"
                        InputLabelProps={{ shrink: true }}
                        placeholder="URL of Project Display Image"
                        value={imageUrl || ''}
                        onChange={(e) => { setProjects(changeArray(projects, index, type, e.target.value, link, title, description)) }} />
                </Grid><Grid item xs={6}>
                    <TextField
                        sx={{ width: '100%' }}
                        label="Deployment Link"
                        size="medium"
                        variant="standard"
                        autoComplete="off"
                        InputLabelProps={{ shrink: true }}
                        placeholder="Deployment or Demo Link"
                        value={link || ''}
                        onChange={(e) => { setProjects(changeArray(projects, index, type, imageUrl, e.target.value, title, description)) }} />
                </Grid>
                <Grid item xs={10.5}>
                    <TextField
                        sx={{ width: '100%' }}
                        multiline
                        label="Description"
                        variant="standard"
                        autoComplete="off"
                        InputLabelProps={{ shrink: true }}
                        placeholder="Project Description"
                        value={description || ''}
                        onChange={(e) => { setProjects(changeArray(projects, index, type, imageUrl, link, title, e.target.value)) }} />
                </Grid>
                <Grid item xs={1}>
                    <IconButton
                        sx={{
                            height: 50,
                            width: 50,
                            marginTop: { sm: 2 }
                        }}
                        disabled={projects.length <= 1}
                        aria-label="delete"
                        size="large"
                        onClick={(e) => setProjects(removeArrayElement(projects, index))}>
                        <DeleteOutlineRoundedIcon />
                    </IconButton>
                </Grid>
            </Grid>
            {index != projects.length - 1 && <Box sx={{ marginTop: 1, marginBottom: 3 }} />}
        </>
    )
}

const Educations = (props) => {
    const { classes } = props
    const { projects, setProjects } = React.useContext(UserDataContext)
    useEffect(() => {
        if (projects.length === 0) setProjects([{ project: '', value: 50 }])
    })
    return (
        <Paper>
            <Typography variant="h5">
                Projects
                <CustomToolTip placement='right' title="What are your projects and what's your proficiency in them">
                </CustomToolTip>
            </Typography>
            <Stack className={classes.stack}
                spacing={0}
                direction='column'>
                {projects.map((project, index) => { return <Education key={index} index={index} type={project.type} imageUrl={project.imageUrl} link={project.link} title={project.title} description={project.description} projects={projects} setProjects={setProjects} /> })}
            </Stack>

            <Button
                sx={{
                    width: '20%',
                    marginTop: { xs: 0, sm: 0 },
                    marginBottom: { xs: 1, sm: 1 },
                    alignSelf: 'flex-end'
                }}
                onClick={() => { projects[projects?.length - 1]?.title && setProjects([...projects, { type: '', title: '', imageUrl: '', link: '', description: '' }]) }}
                variant="outlined"
                color="success">
                Add
            </Button>
        </Paper>
    )
}

export default withStyles(styles)(Educations)
import React from 'react'
import { UserDataContext } from '../../../Providers/UserDataStateProvider'
import Paper from '../../MuiComponents/Paper'
import { withStyles } from '@mui/styles'
import { Stack, TextField, Button, Typography, Slider } from '@mui/material'


const styles = (theme) => ({
    stack: {
        marginTop: 20,
        marginBottom: 10
    }
})
const Skill = (props) => { 
    const {key, skill, value, setSkills, skills} = props
    return <Stack
    marginBottom={{ xs: 0, sm: -5 }}
    direction={{ xs: 'column', sm: 'row' }}
    spacing={{ xs: 2, sm: 4 }}>
    <TextField
        sx={{ width: { xs: '100%', sm: '30%' } }}
        id="standard-size-small"
        label="Skill"
        size="medium"
        variant="standard"
        autoComplete="off"
        InputLabelProps={{ shrink: true }}
        placeholder="Skill Name"
        value={skill || ''}
        onChange={(e) => {setSkills({...skills, [key]: {skill: e.target.value}})}}
    />
    <Slider
        sx={{
            width: { xs: '100%', sm: '70%' },
            paddingTop: { xs: 0, sm: 11.5 },
            paddingBottom: { sm: 0 }
        }}
        defaultValue={50}
        valueLabelDisplay="auto"
        step={10}
        min={10}
        max={100}
        label="Skill Expertise"
    />
</Stack>}

const Skills = (props) => {
    
    const { classes } = props
    const { skills, setSkills } = React.useContext(UserDataContext)
    return (
        <Paper>
            <Typography variant="h5">Skills</Typography>
            <Stack className={classes.stack}
                spacing={2}
                direction='column'>
                    {skills.map((skill, index) => {return <Skill key={index} skill={skill.skill} value={skill.value} setSkills={setSkills}/>})}
            </Stack>

            <Button
                sx={{
                    width: '20%',
                    marginTop: { xs: 2, sm: 0 },
                    marginBottom: 0.9,
                    alignSelf: 'flex-end'
                }}
                variant="outlined"
                color="success">
                Add
            </Button>
        </Paper>
    )
}

export default withStyles(styles)(Skills)

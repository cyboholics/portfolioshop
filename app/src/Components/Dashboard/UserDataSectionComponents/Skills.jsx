import React, { useEffect } from 'react'
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded'
import { UserDataContext } from '../../../Providers/UserDataStateProvider'
import Paper from '../../MuiComponents/Paper'
import { withStyles } from '@mui/styles'
import { Stack, TextField, Button, Typography, IconButton, Slider } from '@mui/material'
import CustomToolTip from '../CustomToolTip'


const styles = (theme) => ({
    stack: {
        marginTop: 20,
        marginBottom: 10
    }
})

function changeArray(arr, idx, newText, newValue) {
    //search for idx, and reply value
    const copy = [...arr]
    copy[idx] = { "skill": newText, "value": newValue }
    return copy
}
function removeArrayElement(arr, idx) {
    const copy = arr.filter((e, i) => i !== idx)
    return copy
}

const Skill = (props) => {
    const { index, skill, value, setSkills, skills } = props
    return <Stack
        marginBottom={{ xs: 0 }}
        direction={{ xs: 'column', sm: 'row' }}
        spacing={{ xs: 2, sm: 4 }}>
        <TextField
            sx={{ width: { xs: '100%', sm: '30%' } }}
            label="Skill"
            size="medium"
            variant="standard"
            autoComplete="off"
            InputLabelProps={{ shrink: true }}
            placeholder="Skill Name"
            value={skill || ''}
            onChange={(e) => { setSkills(changeArray(skills, index, e.target.value, value)) }}
        />
        <Stack direction='row'
            sx={{
                width: { xs: '100%', sm: '70%' },
            }}>
            <Slider
                sx={{
                    width: '90%',
                    paddingTop: { xs: 3, sm: 11.5 },
                    paddingBottom: { sm: 0 },
                }}
                value={value || 50}
                onChange={(event) => { setSkills(changeArray(skills, index, skill, event.target.value)) }}
                valueLabelDisplay="auto"
                min={10}
                max={100}
                label="Skill Expertise"
            />
            <IconButton
                sx={{
                    height: 50,
                    width: 50,
                    marginTop: { sm: 2 }
                }}
                disabled={skills.length <= 1}
                aria-label="delete"
                size="large"
                onClick={() => { setSkills(removeArrayElement(skills, index)) }}>
                <DeleteOutlineRoundedIcon />
            </IconButton>
        </Stack>
    </Stack>
}

const Skills = (props) => {
    const { classes } = props
    const { skills, setSkills } = React.useContext(UserDataContext)
    useEffect(() => {
        if (skills.length === 0) setSkills([{ skill: '', value: 50 }])
    })
    return (
        <Paper>
            <Typography variant="h5">
                Skills
                <CustomToolTip arrow placement='right' title="What are your skills and what's your proficiency in them" />
            </Typography>
            <Stack className={classes.stack}
                spacing={{ xs: 2, sm: -4 }}
                direction='column'>
                {skills.map((skill, index) => { return <Skill key={index} index={index} skill={skill.skill} value={skill.value} setSkills={setSkills} skills={skills} /> })}
            </Stack>

            <Button
                sx={{
                    width: '20%',
                    marginTop: { xs: 0, sm: -5 },
                    marginBottom: { xs: 1, sm: 0 },
                    alignSelf: 'flex-end'
                }}
                onClick={() => { skills[skills?.length - 1]?.skill && setSkills([...skills, { skill: '', value: 50 }]) }}
                variant="outlined"
                color="success">
                Add
            </Button>
        </Paper>
    )
}

export default withStyles(styles)(Skills)
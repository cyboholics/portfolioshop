import React, { useEffect } from "react"
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded"
import { UserDataContext } from "../../../Providers/UserDataStateProvider"
import { withStyles } from "@mui/styles"
import { Box, Grid, Stack, TextField, Button, IconButton } from "@mui/material"

const styles = (theme) => ({
    stack: {
        marginTop: 20,
        marginBottom: 10
    }
})

function changeArray(arr, index, title, period, institution, marks) {
    //search for index, and reply value
    const copy = [...arr]
    copy[index] = { "title": title, "period": period, "institution": institution, "marks": marks }
    return copy
}
function removeArrayElement(arr, index) {
    const copy = arr.filter((e, i) => i !== index)
    return copy
}

const Education = (props) => {
    const { index, title, period, institution, marks, education, setEducation } = props
    return (
        <>
            <Grid
                container
                spacing={2}
            >
                <Grid item xs={12} sm={6}>
                    <TextField
                        sx={{ width: "100%" }}
                        label="Degree"
                        size="medium"
                        variant="standard"
                        autoComplete="off"
                        InputLabelProps={{ shrink: true }}
                        placeholder="Eg. B.Tech or B.E"
                        value={title || ""}
                        onChange={(e) => { setEducation(changeArray(education, index, e.target.value, period, institution, marks)) }} />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        sx={{ width: "100%" }}
                        label="Period"
                        size="medium"
                        variant="standard"
                        autoComplete="off"
                        InputLabelProps={{ shrink: true }}
                        placeholder="Eg. 2020 - Present"
                        value={period || ""}
                        onChange={(e) => { setEducation(changeArray(education, index, title, e.target.value, institution, marks)) }} />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        sx={{ width: "100%" }}
                        label="Institution"
                        size="medium"
                        variant="standard"
                        autoComplete="off"
                        InputLabelProps={{ shrink: true }}
                        placeholder="Eg. IIT Madras"
                        value={institution || ""}
                        onChange={(e) => { setEducation(changeArray(education, index, title, period, e.target.value, marks)) }} />
                </Grid>
                <Grid item xs={10} sm={5}>
                    <TextField
                        sx={{ width: "100%" }}
                        label="Marks"
                        size="medium"
                        variant="standard"
                        autoComplete="off"
                        InputLabelProps={{ shrink: true }}
                        placeholder="Percentage Marks or GPA"
                        value={marks || ""}
                        onChange={(e) => { setEducation(changeArray(education, index, title, period, institution, e.target.value)) }} />
                </Grid>
                <Grid item xs={1}>
                    <IconButton
                        sx={{
                            height: 50,
                            width: 50,
                            marginTop: { sm: 2 }
                        }}
                        disabled={education.length <= 1}
                        aria-label="delete"
                        size="large"
                        onClick={(e) => setEducation(removeArrayElement(education, index))}>
                        <DeleteOutlineRoundedIcon />
                    </IconButton>
                </Grid>
            </Grid>
            {index !== education.length - 1 && <Box sx={{ marginTop: 1, marginBottom: 3 }} />}
        </>
    )
}

const Educations = (props) => {
    const { classes } = props
    const { education, setEducation } = React.useContext(UserDataContext)
    useEffect(() => {
        if (education.length === 0) setEducation([{ "title": "", "period": "", "institution": "", "marks": "" }])
    })
    return (
        <>
            <Stack className={classes.stack}
                spacing={0}
                direction="column">
                {education.map((edu, index) => { return <Education key={index} index={index} title={edu.title} period={edu.period} institution={edu.institution} marks={edu.marks} education={education} setEducation={setEducation} /> })}
            </Stack>

            <Button
                sx={{
                    width: "20%",
                    marginTop: { xs: 0, sm: 0 },
                    marginBottom: { xs: 1, sm: 1 },
                    alignSelf: "flex-end"
                }}
                onClick={() => { education[education?.length - 1]?.title && setEducation([...education, { title: "", period: "", institution: "", marks: "" }]) }}
                variant="outlined"
                color="success">
                Add
            </Button>
        </>
    )
}

export default withStyles(styles)(Educations)
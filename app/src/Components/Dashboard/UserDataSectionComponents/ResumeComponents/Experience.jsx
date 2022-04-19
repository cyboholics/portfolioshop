import React, { useEffect } from "react"
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded"
import { UserDataContext } from "../../../../Providers/UserDataStateProvider"
import { withStyles } from "@mui/styles"
import { Box, Grid, Stack, TextField, Button, IconButton } from "@mui/material"

const styles = (theme) => ({
  stack: {
    marginTop: 20,
    marginBottom: 10
  }
})

function changeArray(arr, index, title, period, company, description) {
  //search for index, and reply value
  const copy = [...arr]
  copy[index] = { "title": title, "period": period, "company": company, "description": description }
  return copy
}
function removeArrayElement(arr, index) {
  const copy = arr.filter((e, i) => i !== index)
  return copy
}

const Experience = (props) => {
  const { index, title, period, company, description, experience, setExperience } = props
  return (
    <>
      <Grid
        container
        spacing={2}
      >
        <Grid item xs={12} sm={4}>
          <TextField
            sx={{ width: "100%" }}
            label="Role"
            size="medium"
            variant="standard"
            autoComplete="off"
            InputLabelProps={{ shrink: true }}
            placeholder="Eg. Software Developer"
            value={title || ""}
            onChange={(e) => { setExperience(changeArray(experience, index, e.target.value, period, company, description)) }} />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            sx={{ width: "100%" }}
            label="Company"
            size="medium"
            variant="standard"
            autoComplete="off"
            InputLabelProps={{ shrink: true }}
            placeholder="Eg. Amazon"
            value={company || ""}
            onChange={(e) => { setExperience(changeArray(experience, index, title, period, e.target.value, description)) }} />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            sx={{ width: "100%" }}
            label="Period"
            size="medium"
            variant="standard"
            autoComplete="off"
            InputLabelProps={{ shrink: true }}
            placeholder="Eg. 2020 - Present"
            value={period || ""}
            onChange={(e) => { setExperience(changeArray(experience, index, title, e.target.value, company, description)) }} />
        </Grid>
        <Grid item xs={10} sm={11}>
          <TextField
            multiline
            sx={{ width: "100%" }}
            label="Description"
            size="medium"
            variant="standard"
            autoComplete="off"
            InputLabelProps={{ shrink: true }}
            placeholder="Summary of work"
            value={description || ""}
            onChange={(e) => { setExperience(changeArray(experience, index, title, period, company, e.target.value)) }} />
        </Grid>
        <Grid item xs={1}>
          <IconButton
            sx={{
              height: 50,
              width: 50,
              marginTop: { sm: 2 }
            }}
            disabled={experience.length <= 1}
            aria-label="delete"
            size="large"
            onClick={(e) => setExperience(removeArrayElement(experience, index))}>
            <DeleteOutlineRoundedIcon />
          </IconButton>
        </Grid>
      </Grid>
      {index !== experience.length - 1 && <Box sx={{ marginTop: 1, marginBottom: 3 }} />}
    </>
  )
}

const Experiences = (props) => {
  const { classes } = props
  const { experience, setExperience } = React.useContext(UserDataContext)
  useEffect(() => {
    if (experience.length === 0) setExperience([{ exp: "", value: 50 }])
  })
  return (
    <>
      <Stack className={classes.stack}
        spacing={0}
        direction="column">
        {experience.map((exp, index) => { return <Experience key={index} index={index} title={exp.title} period={exp.period} company={exp.company} description={exp.description} experience={experience} setExperience={setExperience} /> })}
      </Stack>

      <Button
        sx={{
          width: "20%",
          marginTop: { xs: 0, sm: 0 },
          marginBottom: { xs: 1, sm: 1 },
          alignSelf: "flex-end"
        }}
        onClick={() => { experience[experience?.length - 1]?.title && setExperience([...experience, { title: "", period: "", company: "", description: "" }]) }}
        variant="outlined"
        color="success">
        Add
      </Button>
    </>
  )
}

export default withStyles(styles)(Experiences)
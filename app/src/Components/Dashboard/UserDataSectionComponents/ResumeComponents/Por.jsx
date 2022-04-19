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

function changeArray(arr, index, title, period, organisation, description) {
  //search for index, and reply value
  const copy = [...arr]
  copy[index] = { "title": title, "period": period, "organisation": organisation, "description": description }
  return copy
}
function removeArrayElement(arr, index) {
  const copy = arr.filter((e, i) => i !== index)
  return copy
}

const Por = (props) => {
  const { index, title, period, organisation, description, por, setPor } = props
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
            onChange={(e) => { setPor(changeArray(por, index, e.target.value, period, organisation, description)) }} />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            sx={{ width: "100%" }}
            label="organisation"
            size="medium"
            variant="standard"
            autoComplete="off"
            InputLabelProps={{ shrink: true }}
            placeholder="Eg. Amazon"
            value={organisation || ""}
            onChange={(e) => { setPor(changeArray(por, index, title, period, e.target.value, description)) }} />
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
            onChange={(e) => { setPor(changeArray(por, index, title, e.target.value, organisation, description)) }} />
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
            placeholder="Summary of Voluntering work"
            value={description || ""}
            onChange={(e) => { setPor(changeArray(por, index, title, period, organisation, e.target.value)) }} />
        </Grid>
        <Grid item xs={1}>
          <IconButton
            sx={{
              height: 50,
              width: 50,
              marginTop: { sm: 2 }
            }}
            disabled={por.length <= 1}
            aria-label="delete"
            size="large"
            onClick={(e) => setPor(removeArrayElement(por, index))}>
            <DeleteOutlineRoundedIcon />
          </IconButton>
        </Grid>
      </Grid>
      {index !== por.length - 1 && <Box sx={{ marginTop: 1, marginBottom: 3 }} />}
    </>
  )
}

const Pors = (props) => {
  const { classes } = props
  const { por, setPor } = React.useContext(UserDataContext)
  useEffect(() => {
    if (por.length === 0) setPor([{ "title": "", "period": "", "organisation": "", "description": "" }])
  })
  return (
    <>
      <Stack className={classes.stack}
        spacing={0}
        direction="column">
        {por.map((edu, index) => { return <Por key={index} index={index} title={edu.title} period={edu.period} organisation={edu.organisation} description={edu.description} por={por} setPor={setPor} /> })}
      </Stack>

      <Button
        sx={{
          width: "20%",
          marginTop: { xs: 0, sm: 0 },
          marginBottom: { xs: 1, sm: 1 },
          alignSelf: "flex-end"
        }}
        onClick={() => { por[por?.length - 1]?.title && setPor([...por, { title: "", period: "", organisation: "", description: "" }]) }}
        variant="outlined"
        color="success">
        Add
      </Button>
    </>
  )
}

export default withStyles(styles)(Pors)
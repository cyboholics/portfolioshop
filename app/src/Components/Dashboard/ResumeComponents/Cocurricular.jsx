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

function changeArray(arr, index, title, description) {
  //search for index, and reply value
  const copy = [...arr]
  copy[index] = { "title": title, "description": description }
  return copy
}
function removeArrayElement(arr, index) {
  const copy = arr.filter((e, i) => i !== index)
  return copy
}

const Cocurricular = (props) => {
  const { index, title, description, cocurricular, setCocurricular } = props
  return (
    <>
      <Grid
        container
        spacing={2}
      >
        <Grid item xs={12} sm={4}>
          <TextField
            sx={{ width: "100%" }}
            label="Title"
            size="medium"
            variant="standard"
            autoComplete="off"
            InputLabelProps={{ shrink: true }}
            placeholder="Title"
            value={title || ""}
            onChange={(e) => { setCocurricular(changeArray(cocurricular, index, e.target.value, description)) }} />
        </Grid>
        <Grid item xs={10} sm={7}>
          <TextField
            multiline
            sx={{ width: "100%" }}
            label="Description"
            size="medium"
            variant="standard"
            autoComplete="off"
            InputLabelProps={{ shrink: true }}
            placeholder="Summary"
            value={description || ""}
            onChange={(e) => { setCocurricular(changeArray(cocurricular, index, title, e.target.value)) }} />
        </Grid>
        <Grid item xs={1}>
          <IconButton
            sx={{
              height: 50,
              width: 50,
              marginTop: { sm: 2 }
            }}
            disabled={cocurricular.length <= 1}
            aria-label="delete"
            size="large"
            onClick={(e) => setCocurricular(removeArrayElement(cocurricular, index))}>
            <DeleteOutlineRoundedIcon />
          </IconButton>
        </Grid>
      </Grid>
      {index !== cocurricular.length - 1 && <Box sx={{ marginTop: 1, marginBottom: 3 }} />}
    </>
  )
}

const Cocurriculars = (props) => {
  const { classes } = props
  const { cocurricular, setCocurricular } = React.useContext(UserDataContext)
  useEffect(() => {
    if (cocurricular.length === 0) setCocurricular([{ title: "", description: "" }])
  })
  return (
    <>
      <Stack className={classes.stack}
        spacing={0}
        direction="column">
        {cocurricular.map((pub, index) => { return <Cocurricular key={index} index={index} title={pub.title} period={pub.period} organisation={pub.organisation} description={pub.description} cocurricular={cocurricular} setCocurricular={setCocurricular} /> })}
      </Stack>

      <Button
        sx={{
          width: "20%",
          marginTop: { xs: 0, sm: 0 },
          marginBottom: { xs: 1, sm: 1 },
          alignSelf: "flex-end"
        }}
        onClick={() => { cocurricular[cocurricular?.length - 1]?.title && setCocurricular([...cocurricular, { title: "", period: "", description: "" }]) }}
        variant="outlined"
        color="success">
        Add
      </Button>
    </>
  )
}

export default withStyles(styles)(Cocurriculars)
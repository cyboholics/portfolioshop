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

function changeArray(arr, index, title, period, gist) {
  //search for index, and reply value
  const copy = [...arr]
  copy[index] = { "title": title, "period": period, "gist": gist }
  return copy
}
function removeArrayElement(arr, index) {
  const copy = arr.filter((e, i) => i !== index)
  return copy
}

const Publication = (props) => {
  const { index, title, period, gist, publications, setPublications } = props
  return (
    <>
      <Grid
        container
        spacing={2}
      >
        <Grid item xs={12} sm={8}>
          <TextField
            sx={{ width: "100%" }}
            label="Title"
            size="medium"
            variant="standard"
            autoComplete="off"
            InputLabelProps={{ shrink: true }}
            placeholder="Title"
            value={title || ""}
            onChange={(e) => { setPublications(changeArray(publications, index, e.target.value, period, gist)) }} />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            sx={{ width: "100%" }}
            label="Date"
            size="medium"
            variant="standard"
            autoComplete="off"
            InputLabelProps={{ shrink: true }}
            placeholder="Eg 17 August, 2020"
            value={period || ""}
            onChange={(e) => { setPublications(changeArray(publications, index, title, e.target.value, gist)) }} />
        </Grid>
        <Grid item xs={10} sm={11}>
          <TextField
            multiline
            sx={{ width: "100%" }}
            label="Gist"
            size="medium"
            variant="standard"
            autoComplete="off"
            InputLabelProps={{ shrink: true }}
            placeholder="Summary of Publication"
            value={gist || ""}
            onChange={(e) => { setPublications(changeArray(publications, index, title, period, e.target.value)) }} />
        </Grid>
        <Grid item xs={1}>
          <IconButton
            sx={{
              height: 50,
              width: 50,
              marginTop: { sm: 2 }
            }}
            disabled={publications.length <= 1}
            aria-label="delete"
            size="large"
            onClick={(e) => setPublications(removeArrayElement(publications, index))}>
            <DeleteOutlineRoundedIcon />
          </IconButton>
        </Grid>
      </Grid>
      {index !== publications.length - 1 && <Box sx={{ marginTop: 1, marginBottom: 3 }} />}
    </>
  )
}

const Publications = (props) => {
  const { classes } = props
  const { publications, setPublications } = React.useContext(UserDataContext)
  useEffect(() => {
    if (publications.length === 0) setPublications([{ title: "", gist: "", period: ""}])
  })
  return (
    <>
      <Stack className={classes.stack}
        spacing={0}
        direction="column">
        {publications.map((pub, index) => { return <Publication key={index} index={index} title={pub.title} period={pub.period} organisation={pub.organisation} gist={pub.gist} publications={publications} setPublications={setPublications} /> })}
      </Stack>

      <Button
        sx={{
          width: "20%",
          marginTop: { xs: 0, sm: 0 },
          marginBottom: { xs: 1, sm: 1 },
          alignSelf: "flex-end"
        }}
        onClick={() => { publications[publications?.length - 1]?.title && setPublications([...publications, { title: "", period: "", gist: "" }]) }}
        variant="outlined"
        color="success">
        Add
      </Button>
    </>
  )
}

export default withStyles(styles)(Publications)
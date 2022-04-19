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

function changeArray(arr, index, title, period, issuer, description) {
  //search for index, and reply value
  const copy = [...arr]
  copy[index] = { "title": title, "period": period, "issuer": issuer, "description": description }
  return copy
}
function removeArrayElement(arr, index) {
  const copy = arr.filter((e, i) => i !== index)
  return copy
}

const Award = (props) => {
  const { index, title, period, issuer, description, awards, setAwards } = props
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
            placeholder="Award Title"
            value={title || ""}
            onChange={(e) => { setAwards(changeArray(awards, index, e.target.value, period, issuer, description)) }} />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            sx={{ width: "100%" }}
            label="Issuer"
            size="medium"
            variant="standard"
            autoComplete="off"
            InputLabelProps={{ shrink: true }}
            placeholder="Organisation Issuing Award"
            value={issuer || ""}
            onChange={(e) => { setAwards(changeArray(awards, index, title, period, e.target.value, description)) }} />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            sx={{ width: "100%" }}
            label="Issue Date"
            size="medium"
            variant="standard"
            autoComplete="off"
            InputLabelProps={{ shrink: true }}
            placeholder="Eg 12 August, 2020"
            value={period || ""}
            onChange={(e) => { setAwards(changeArray(awards, index, title, e.target.value, issuer, description)) }} />
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
            placeholder="Description of Award"
            value={description || ""}
            onChange={(e) => { setAwards(changeArray(awards, index, title, period, issuer, e.target.value)) }} />
        </Grid>
        <Grid item xs={1}>
          <IconButton
            sx={{
              height: 50,
              width: 50,
              marginTop: { sm: 2 }
            }}
            disabled={awards.length <= 1}
            aria-label="delete"
            size="large"
            onClick={(e) => setAwards(removeArrayElement(awards, index))}>
            <DeleteOutlineRoundedIcon />
          </IconButton>
        </Grid>
      </Grid>
      {index !== awards.length - 1 && <Box sx={{ marginTop: 1, marginBottom: 3 }} />}
    </>
  )
}

const Awards = (props) => {
  const { classes } = props
  const { awards, setAwards } = React.useContext(UserDataContext)
  useEffect(() => {
    if (awards.length === 0) setAwards([{ title: "", period: "", issuer: "", description: "" }])
  })
  return (
    <>
      <Stack className={classes.stack}
        spacing={0}
        direction="column">
        {awards.map((awd, index) => { return <Award key={index} index={index} title={awd.title} period={awd.period} issuer={awd.issuer} description={awd.description} awards={awards} setAwards={setAwards} /> })}
      </Stack>

      <Button
        sx={{
          width: "20%",
          marginTop: { xs: 0, sm: 0 },
          marginBottom: { xs: 1, sm: 1 },
          alignSelf: "flex-end"
        }}
        onClick={() => { awards[awards?.length - 1]?.title && setAwards([...awards, { title: "", period: "", issuer: "", description: "" }]) }}
        variant="outlined"
        color="success">
        Add
      </Button>
    </>
  )
}

export default withStyles(styles)(Awards)
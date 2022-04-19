import React from "react"
import { TextField } from "@mui/material"
import { UserDataContext } from "../../../../Providers/UserDataStateProvider"
import { withStyles } from "@mui/styles"

const styles = (theme) => { }

const Summary = (props) => {
  const { summary, setSummary } = React.useContext(UserDataContext)
  return (
    <TextField
      sx={{ width: "100%" }}
      label="Summary"
      size="medium"
      variant="standard"
      autoComplete="off"
      InputLabelProps={{ shrink: true }}
      placeholder="Title"
      value={summary || ""}
      onChange={(e) => { setSummary(e.target.value) }} />
  )
}

export default withStyles(styles)(Summary)
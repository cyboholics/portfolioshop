import React from 'react'
import { withStyles } from '@mui/styles'
import 'date-fns';
import Paper from '../../MuiComponents/Paper'
import { UserDataContext } from '../../../Providers/UserDataStateProvider'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Typography, Stack, TextField, InputAdornment, IconButton, Tooltip } from '@mui/material'
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import MuiPhoneNumber from 'material-ui-phone-number';
import InfoIcon from '@mui/icons-material/Info';

const styles = (theme) => ({
  stack: {
    marginTop: 20,
    marginBottom: 10
  },
  root: {
    '& .MuiFormLabel-root.Mui-disabled': {
      color: 'red',
    },
  }
})

const About = (props) => {
  const { classes } = props
  const { about, setAbout } = React.useContext(UserDataContext)
  return (
    <Paper>
      <Typography variant="h5">
        About
        <Tooltip arrow placement='right' title="Tell us about yourself in this section">
          <IconButton>
            <InfoIcon fontSize={'small'} />
          </IconButton>
        </Tooltip>
      </Typography>

      <Stack direction={"column"}
        spacing={2}
        className={classes.stack}>
        {/* about.heading */}
        <TextField
          label="Heading"
          variant="standard"
          autoComplete="off"
          InputLabelProps={{ shrink: true }}
          placeholder="Website Heading"
          value={about.heading || ''}
          onChange={(event) => { setAbout({ ...about, heading: event.target.value }); console.log(about) }} />

        <Stack spacing={{ xs: 2, sm: 2 }}
          direction={{ xs: 'column', sm: 'row' }}>
          {/* Date Of Birth */}
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Date of Birth"
              value={about.dateOfBirth || ''}
              onChange={(newValue) => { setAbout({ ...about, dateOfBirth: newValue }) }}
              variant="inline"
              InputAdornmentProps={{ position: "start" }}
              renderInput={(params) => <TextField
                sx={{ width: { xs: '100%', sm: '35%' } }}
                variant="standard"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PermContactCalendarIcon />
                    </InputAdornment>
                  ),
                }}
                {...params} />}
            />
          </LocalizationProvider>

          {/* Age */}
          <TextField
            sx={{ width: { xs: '100%', sm: '13%' } }}
            label="Age"
            variant="standard"
            autoComplete="off"
            InputLabelProps={{ shrink: true }}
            placeholder="Your Age"
            type="number"
            value={about.age || ''}
            onChange={(event) => { if (event.target.value < 150) setAbout({ ...about, age: event.target.value }) }} />

          {/* City */}
          <TextField
            sx={{ width: { xs: '100%', sm: '50%' } }}
            label="City"
            variant="standard"
            autoComplete="off"
            InputLabelProps={{ shrink: true }}
            placeholder="Your City"
            value={about.city || ''}
            onChange={(event) => { setAbout({ ...about, city: event.target.value }) }} />
        </Stack>

        <Stack direction={{ xs: "column", sm: "row" }}
          spacing={2}>
          {/* Phone Number */}
          <MuiPhoneNumber
            sx={{ width: { xs: '100%', sm: '49%' } }}
            label="Phone Number"
            defaultCountry={'in'}
            value={about.phone || ''}
            onChange={(value) => { setAbout({ ...about, phone: value }) }} />
          {/* email */}

          <TextField
            sx={{ width: { xs: '100%', sm: '49%' } }}
            label="Email"
            variant="standard"
            autoComplete="on"
            InputLabelProps={{ shrink: true }}
            placeholder="Your Email"
            type={'email'}
            value={about.email || ''}
            onChange={(event) => { setAbout({ ...about, email: event.target.value }) }} />
        </Stack>
        <TextField
          multiline
          
          label="Summary"
          variant="standard"
          autoComplete="off"
          InputLabelProps={{ shrink: true }}
          placeholder="Summary"
          value={about.summary || ''}
          onChange={(event) => { setAbout({ ...about, summary: event.target.value }) }} />
      </Stack>

    </Paper>
  )
}

export default withStyles(styles)(About)
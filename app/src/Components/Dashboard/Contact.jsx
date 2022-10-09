import React from 'react'
import { UserDataContext } from '../../Providers/UserDataStateProvider'
import { TextField, Typography, Stack,Button, Box } from '@mui/material'
import MuiPhoneNumber from 'material-ui-phone-number';
import Paper from '../MuiComponents/Paper'
import { withStyles } from '@mui/styles'
import CustomToolTip from './CustomToolTip';

const styles = (theme) => ({
    stack: {
        marginTop: 10,
        marginBottom: 20
    },
    root: {
        '& .MuiFormLabel-root.Mui-disabled': {
            color: 'red',
        },
    }
})


const Contact = (props) => {
    const { classes } = props
    const { contact, setContact, about } = React.useContext(UserDataContext)
    const handleToggle = (e) => {
        setContact({ phone: about.phone, email: about.email, address: contact.address || about.city })
    }
    return <>
        <Paper
            className={classes.paper}
        >
            <Box sx={{
                display: "flex",
                justifyContent: 'space-between'
            }}>
                <Typography className={classes.heading} variant="h5">
                    Contact Details
                    <CustomToolTip lacement='right' title="What if someone tries to contact you">
                    </CustomToolTip>
                </Typography>
                <Button
                    sx={{
                        marginTop: 1,
                        marginBottom: 1,
                        flexDirection: 'row-reverse',
                        fontSize: 11
                    }}
                    onClick={handleToggle}
                    variant="outlined"
                    color="info">
                    Copy details from about section
                </Button>
            </Box>
            <Stack
                className={classes.stack}
                direction={{ xs: "column", sm: "row" }}
                spacing={2}>
                {/* Phone Number */}
                <MuiPhoneNumber
                    sx={{ width: { xs: '100%', sm: '49%' } }}
                    label="Phone Number"
                    defaultCountry={'in'}
                    value={contact.phone || ''}
                    onChange={(value) => { setContact({ ...contact, phone: value }) }} />
                {/* email */}

                <TextField
                    sx={{ width: { xs: '100%', sm: '49%' } }}
                    id="standard-size-small"
                    label="Email"
                    variant="standard"
                    autoComplete="on"
                    InputLabelProps={{ shrink: true }}
                    placeholder="Your Email"
                    value={contact.email || ''}
                    onChange={(event) => { setContact({ ...contact, email: event.target.value }) }} />
            </Stack>
            <TextField
                multiline
                sx={{ width: '100%', marginBottom: 1 }}
                label="Address"
                variant="standard"
                autoComplete="off"
                InputLabelProps={{ shrink: true }}
                placeholder="Your Address"
                value={contact.address || ''}
                onChange={(event) => { setContact({ ...contact, address: event.target.value }) }} />
        </Paper>
    </>
}

export default withStyles(styles)(Contact)
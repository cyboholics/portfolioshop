import React from 'react'
import { Box, Modal, Switch, Stack, Typography } from '@mui/material'
import { withStyles } from '@mui/styles'

const styles = (theme) => ({
    box: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '75%',
        backgroundColor: 'white',
        border: '0px solid #000',
        borderRadius: '10px',
        boxShadow: 24,
        padding: 20,
    }
})

const TicketModal = (props) => {
    const { classes } = props
    //TODO: Get States from API
    const [checked, setChecked] = React.useState(false);
    const handleChange = () => setChecked(!checked)
    return (
        <>
            <Modal
                {...props}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className={classes.box}>
                    <Stack>
                        <Typography>
                            Resolve Status
                        </Typography>
                        <Stack direction="row">
                            <Typography>
                                Closed
                            </Typography>
                            <Switch
                                checked={checked}
                                onChange={handleChange}
                                inputProps={{ 'aria-label': 'controlled' }}
                            />
                            <Typography sx={{marginTop:1}}>
                                Open
                            </Typography>
                        </Stack>
                    </Stack>
                    
                </Box>
            </Modal>
        </>
    )
}

export default withStyles(styles)(TicketModal)
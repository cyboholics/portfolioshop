import React from 'react';
import GoogleLoginComp from '../GoogleAuth/GoogleLoginComp';
import { Container, Typography } from '@mui/material'
import { withStyles } from '@mui/styles'
const backgroundImage = 'https://alltopstartups.com/wp-content/uploads/2015/11/professional-business.png';

const styles = (theme) => ({
    container: {
        color: theme.palette.common.white,
        display: 'flex',
        height: '90vh',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: '#7fc7d9', // Average color of the background image.
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    },
    more: {
        marginTop: theme.spacing(2),
        display: 'block'
    }
});
const Herocomponent = (props) => {
    const { classes } = props

    return (
        <>
            <Container maxWidth={false} className={classes.container}>
                <img style={{ display: 'none' }} alt="increase priority" />
                <Typography color="inherit" align="center" variant="h2" marked="center" paddingY={10}>
                    Upgrade your Presence
                </Typography>
                <Typography color="inherit" align="center" variant="h5">
                    Build and manage amazing portfolio with us, avail exciting offers and enjoy your online profile.
                </Typography>
                <div style={{ display: "flex", justifyContent: "center", marginTop:50, marginBottom:30 }}>
                    <GoogleLoginComp />
                </div>
                <Typography variant="body2" align='center' color="inherit" className={classes.more}>
                    Discover the experience
                </Typography>
                <div className={classes.backdrop} />
            </Container>
        </>
    );
}

export default withStyles(styles)(Herocomponent);

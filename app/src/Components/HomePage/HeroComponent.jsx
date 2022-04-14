import React from 'react';
import GoogleLoginComp from '../GoogleAuth/GoogleLoginComp';
import { Container, Typography } from '@mui/material'
import { withStyles } from '@mui/styles'
const backgroundImage = 'https://alltopstartups.com/wp-content/uploads/2015/11/professional-business.png';

const styles = (theme) => ({
    container: {
        color: theme.palette.common.white,
        marginTop: theme.spacing(8),
        marginBottom: theme.spacing(4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    background: {
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: '#7fc7d9', // Average color of the background image.
        backgroundPosition: 'center',
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        zIndex: -2
    },
    h5: {
        marginBottom: theme.spacing(4),
        marginTop: theme.spacing(4),
        [theme.breakpoints.up('sm')]: {
            marginTop: theme.spacing(10)
        }
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
            <Container className={classes.container}>
                <img style={{ display: 'none' }} alt="increase priority" />
                <Typography color="inherit" align="center" variant="h2" marked="center">
                    Upgrade your Presence
                </Typography>
                <Typography color="inherit" align="center" variant="h5" className={classes.h5}>
                    Build and manage amazing portfolio with us, avail exciting offers and enjoy your online profile.
                </Typography>
                <div style={{ display: "flex", justifyContent: "center", marginTop:50, marginBottom:30 }}>
                    <GoogleLoginComp />
                </div>
                <Typography variant="body2" align='center' color="inherit" className={classes.more}>
                    Discover the experience
                </Typography>
                <div className={classes.backdrop} />
                <div className={classes.background} />
            </Container>
        </>
    );
}

export default withStyles(styles)(Herocomponent);

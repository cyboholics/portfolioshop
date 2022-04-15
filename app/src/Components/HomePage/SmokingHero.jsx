import React from 'react'
import { withStyles } from '@mui/styles'
import { Grid, Container, Typography } from '@mui/material'

const styles = (theme) => ({
    root: {
        display: 'flex',
        overflow: 'hidden',
        backgroundColor: theme.palette.secondary.light,
    },
    container: {
        marginTop: theme.spacing(15),
        marginBottom: theme.spacing(30),
        display: 'flex',
        position: 'relative',
    },
    item: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: theme.spacing(0, 5),
    },
    image: {
        height: 55,
    },
    title: {
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(5),
    },
    curvyLines: {
        pointerEvents: 'none',
        position: 'absolute',
        top: -180,
    },
})

const ProductValues = (props) => {
    const { classes } = props

    return (
        <section className={classes.root}>
            <Container className={classes.container}>
                <Typography variant="h4" marked="center" align="center" marginBottom={5}>
                    Why Us?
                </Typography>
                <Grid container spacing={5}>
                    <Grid item xs={12} md={4}>
                        <div className={classes.item}>
                            <Typography variant="h6" className={classes.title}>
                                Premium Quality Templates
                            </Typography>
                            <Typography variant="h5">
                                {'From the latest trendy designs to the iconic antique themes'}
                                {', fill your details and leave the rest on us.'}
                            </Typography>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <div className={classes.item}>
                            <Typography variant="h6" className={classes.title}>
                                Free hosting Services
                            </Typography>
                            <Typography variant="h5">
                                {"Don't want to take the pain of hosting websites?"}
                                {" You're on the right place. We do it for you."}
                            </Typography>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <div className={classes.item}>
                            <Typography variant="h6" className={classes.title}>
                                Exclusive Rates
                            </Typography>
                            <Typography variant="h5">
                                {'Available with zero pricing. We are available open source'}
                            </Typography>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </section>
    )
}

export default withStyles(styles)(ProductValues)
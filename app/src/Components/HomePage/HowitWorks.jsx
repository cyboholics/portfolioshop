import React from 'react'
import { withStyles } from '@mui/styles'
import { Grid, Container, Typography } from '@mui/material'

const styles = (theme) => ({
    root: {
        display: 'flex',
        backgroundColor: theme.palette.secondary.light,
        overflow: 'hidden',
    },
    container: {
        marginTop: theme.spacing(10),
        marginBottom: theme.spacing(15),
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    item: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: theme.spacing(0, 5),
    },
    title: {
        marginBottom: theme.spacing(14),
    },
    number: {
        fontSize: 24,
        fontFamily: theme.typography.fontFamily,
        color: theme.palette.secondary.main,
        fontWeight: theme.typography.fontWeightMedium,
    },
    image: {
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(4),
    },
    curvyLines: {
        pointerEvents: 'none',
        position: 'absolute',
        top: -180,
        opacity: 0.7,
    },
    button: {
        marginTop: theme.spacing(8),
    },
})

const HowItWorks = (props) => {
    const { classes } = props

    return (
        <section className={classes.root}>
            <Container className={classes.container}>
                <Typography variant="h4" align="center" className={classes.title} component="h2" paddingBottom={10}>
                    How it works
                </Typography>
                <div style={{ marginBottom: "100px" }}>
                    <Grid container spacing={5}>
                        <Grid item xs={12} md={4}>
                            <div className={classes.item}>
                                <div className={classes.number}>1.</div>
                                <img
                                    src="/productHowItWorks1.svg"
                                    alt="suitcase"
                                    className={classes.image}
                                    width={55}
                                    height={55}
                                />
                                <Typography variant="h5" align="center">
                                    Head to signing into the website and create a profile of yours.
                                </Typography>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <div className={classes.item}>
                                <div className={classes.number}>2.</div>
                                <img
                                    src="/productHowItWorks2.svg"
                                    alt="graph"
                                    className={classes.image}
                                    width={55}
                                    height={55}
                                />
                                <Typography variant="h5" align="center">
                                    Fill up the details and update whenever necessary.
                                </Typography>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <div className={classes.item}>
                                <div className={classes.number}>3.</div>
                                <img
                                    src="/productHowItWorks3.svg"
                                    alt="clock"
                                    className={classes.image}
                                    width={55}
                                    height={55}
                                />
                                <Typography variant="h5" align="center">
                                    Get the portfolio website instantly and share with the targeted audience.
                                </Typography>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </section>
    )
}


export default withStyles(styles)(HowItWorks)
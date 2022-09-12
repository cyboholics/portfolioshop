import React from 'react'
import { Container, Typography, Grid, IconButton } from '@mui/material'
import { withStyles } from '@mui/styles'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import DonateButton from './ThirdPartyButtons/DonateButton'

const styles = (theme) => ({
    container: {
        color: theme.palette.common.white,
        backgroundColor: theme.palette.primary.dark,
        display: 'block',
        width: "100%",
        position: 'static',
        bottom: 0,
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4)
    },
    icons: {
        color: theme.palette.common.white,
    },
    internalGrids: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

const Menufooter = (props) => {
    const { classes } = props
    return (
        <>
            <Container className={classes.container} maxWidth={false}>
                <Grid
                    container
                    spacing={8}
                    direction="row">
                    <Grid
                        item
                        lg={4}
                        md={4}
                        sm={12}
                        className={classes.internalGrids}>
                        <Typography align="center" marginRight={5}>
                            {'© PortfolioShop '}
                            {new Date().getFullYear()}
                        </Typography>
                        <DonateButton buttonId={"footer-button"}/>
                    </Grid>
                    <Grid
                        item
                        lg={4}
                        md={4}
                        sm={12}
                        className={classes.internalGrids}>
                        <a style={{ color: 'inherit', textDecoration: 'inherit' }} href={"404"}>
                            <IconButton aria-label="linkedIn">
                                <LinkedInIcon color="info" />
                            </IconButton>
                        </a>
                        <a style={{ color: 'inherit', textDecoration: 'inherit' }} href={"https://github.com/Portfolio-Shop/portfolioshop"}>
                            <IconButton aria-label="GitHub">
                                <GitHubIcon color="warning" />
                            </IconButton>
                        </a>
                    </Grid>
                    <Grid
                        item
                        lg={4}
                        md={4}
                        sm={12}>
                        <Typography variant={"h5"}>
                            Contacts
                        </Typography>
                        <Typography variant={"body"}>
                            Sudip Mondal : sudip@portfolioshop.tech
                        </Typography>
                        <br />
                        <Typography variant={"body"}>
                            Ayush Tiwari : ayush@portfolioshop.tech
                        </Typography>
                        <Typography variant={"body"}>
                            Sundar Bhagavatula : sundar@portfolioshop.tech
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default withStyles(styles)(Menufooter)

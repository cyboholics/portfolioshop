import React from 'react'
import { Typography, Container, Button } from '@mui/material'
import { withStyles } from '@mui/styles'
import { useNavigate } from "react-router-dom"

const styles = (theme) => ({
    block: {
        margin: '27vh 0 40vh 0',
        textAlign: 'center'
    },
    heading: {
        font: '140px Rubik Mono One',
        letterSpacing: '-10px',
        transform: 'rotate(-6deg)',
        marginBottom: '5px',
        textShadow: '5px 7px 2px #8787874f'
    }
})

const Page404 = (props) => {
    const { classes } = props
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/");
    }

    return (
        <>
            <Container>
                <div className={classes.block} >
                    <h1 className={classes.heading} >404</h1>
                    <Typography>Oops, looks like the page you were looking for does not exist</Typography>
                    <Button sx={{ height: 45, mt: 3.5 }}
                        style={{
                            borderRadius: 0,
                            backgroundColor: "#28282a",
                            padding: "18px 36px",
                            fontSize: "18px"
                        }}
                        variant="contained"
                        onClick={handleClick}
                    >
                        Go Home
                    </Button>
                </div>
            </Container>
        </>
    )
}

export default withStyles(styles)(Page404)


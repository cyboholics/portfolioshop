import { Typography, Grid, Container } from '@mui/material'
import React from 'react'
import { Helmet } from 'react-helmet'

const Aboutus = () => {
    return (
        <>
            <Helmet htmlAttributes>
                <html lang="en" />
                <title>About Us - Portfolio Shop: We build for you</title>
                <meta name="description" content="We at Portfolio Shop are all about making an easy platform for students, job seekers and many others to create profile matching portfolios" />
            </Helmet>
            <Container sx={{ marginTop: 20 }}>
                <Typography variant={"h4"} align="center" marginTop={5}>About Us</Typography>
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    minHeight={"65vh"}>
                    <Grid
                        item
                        lg={8}
                        md={9}
                        xs={9}
                        padding={5}>
                        <Typography
                            align="justify">
                            We at portfolioshop bring the best templates that suits your profile.
                            We have always seen that students and job seekers needs to waste a lot of
                            time on building their own portfolio website. But, it will now be a thing of past.
                            Introducing you to the best portfolio management system ever for your profile.
                            Ayush Tiwari, Sundar Bhagavatula and Sudip Mondal, students of IIT Madras, started this as an open
                            source project. It is lisenced under the GPL-3 and open to accept contributions.
                            If you want to try this, please try it, it's complete free to use. Feedbacks are
                            welcome, please raise an issue in our GitHub repository to do so.
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        lg={4}
                        md={9}
                        xs={9}
                        padding={5}>
                        <div
                            style={{
                                position: "relative",
                                overflow: "hidden",
                                paddingTop: "56%"
                            }}>
                            <iframe
                                src="https://share.synthesia.io/embeds/videos/749f45fe-b179-4a16-a1f9-33cf71d34035"
                                loading="lazy"
                                title="Portfolioshop - About us"
                                allow="encrypted-media; fullscreen;"
                                style={{
                                    position: "absolute",
                                    width: "100%",
                                    height: "100%",
                                    top: 0,
                                    left: 0,
                                    border: "none",
                                    padding: 0,
                                    margin: 0,
                                    overflow: "hidden"
                                }}></iframe>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default Aboutus

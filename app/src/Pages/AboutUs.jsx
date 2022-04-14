import { Typography, Grid } from '@mui/material';
import React from 'react';

const Aboutus = () => {
    return (
        <>
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
                        Ayush Tiwari and Sudip Mondal, students of IIT Madras, started this as an open
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
                    <video width="100%" controls src="https://portfolioshop.blob.core.windows.net/website-assets/about-us.mp4" />
                </Grid>
            </Grid>
        </>
    );
}

export default Aboutus;

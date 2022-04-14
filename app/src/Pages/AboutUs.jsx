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
                alignItems="center">
                <Grid
                    item
                    lg={8}
                    md={9}
                    xs={9}
                    padding={5}>
                    <Typography
                        align="justify">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nam nec tellus in lacus dignissim porta.
                        Proin efficitur neque nec justo interdum congue.
                        Etiam in lorem eu velit interdum ultricies a ac lacus.
                        Ut vitae cursus lectus. Ut hendrerit nec felis sed finibus.
                        Praesent dolor nisi, condimentum quis diam at, pharetra euismod eros.
                        Vivamus vitae quam in dui hendrerit dictum ac sed mauris.
                        Morbi pellentesque sapien nunc, in consequat justo malesuada vel.
                        Nulla dui elit, imperdiet id nisl ac, convallis mollis velit.
                        Etiam ultrices nisi sit amet orci commodo, vitae sagittis lorem consequat.
                        Pellentesque molestie arcu sit amet felis rutrum accumsan.
                        Nulla dignissim sed neque eget gravida. Ut eget pulvinar augue.
                    </Typography>
                </Grid>
                <Grid
                    item
                    lg={4}
                    md={9}
                    xs={9}
                    padding={5}>
                    <video width="100%" controls src="https://portfolioshop.blob.core.windows.net/website-assets/about-us.mp4"/>
                </Grid>
            </Grid>
        </>
    );
}

export default Aboutus;

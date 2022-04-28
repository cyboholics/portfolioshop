import React from 'react'
import TeamCard from '../Components/Team/TeamCard'
import {Container, Grid, Typography} from '@mui/material'
import {Helmet} from 'react-helmet'

const Team = () => {
    const leads = [{
        imageLink: "https://avatars.githubusercontent.com/u/74463091?v=4",
        name: "Sudip Mondal",
        title: "Tech Lead",
        description: "Organization admin and devops engineer at portfolioshop. Interested in different software domains including Web dev, App dev, Machine Learning, DevOps etc.",
        linkedin: "https://www.linkedin.com/in/sudipmondal2002/",
        github: "https://github.com/sudip-mondal-2002"
    }, {
        imageLink: "https://avatars.githubusercontent.com/u/74752127?v=4",
        name: "Ayush Tiwari",
        title: "Tech Lead",
        description: "Organization admin and backend engineer at portfolioshop. Experienced in enoromous domains of software including App dev, Machine Learning, Web Dev, DevOps etc.",
        linkedin: "https://www.linkedin.com/in/ayush-tiwari26/",
        github: "https://github.com/ayush-tiwari26"
    }]
    return (
        <>
            <Helmet htmlAttributes>
                <html lang="en" />
                <title>Team Leads - Portfolio Shop: We build for you</title>
                <meta name="description" content="Meet the brains behind Portfolio Shop. Wouldn't it be nice to get to know more about them? Click to catch a glimpse on what they do. " />
            </Helmet>

            <Container sx={{marginY: 20}}>
                <Typography variant="h1" sx={{color: "text.primary", margin: 5}} align="center">Portfolio Shop Team</Typography>
                <Grid 
                container
                spacing={'5%'}
                direction="row"
                justifyContent="center"
                alignItems="center"
                minHeight={"70vh"}
                >                
                        {leads.map((lead) => {
                            return <Grid key={lead.github} item><TeamCard imageLink={lead.imageLink} name={lead.name} title={lead.title} description={lead.description} linkedin={lead.linkedin} github={lead.github} /></Grid>
                        })}
                </Grid>
            </Container>
        </>
    )
}

export default Team

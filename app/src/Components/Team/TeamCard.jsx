import * as React from 'react'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import { red } from '@mui/material/colors'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub' 

const TeamCard = (props) => {
    return (
        <Card sx={{ maxWidth: 345, display:'inline-block'}}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe" src={props.imageLink} />
                }
                title={props.name}
                subheader={props.title}
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary" align='justify'>
                    {props.description}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <a style={{ color: 'inherit', textDecoration: 'inherit' }} href={props.linkedin}>
                    <IconButton aria-label="linkedIn">
                        <LinkedInIcon />
                    </IconButton>
                </a>
                <a style={{ color: 'inherit', textDecoration: 'inherit' }} href={props.github}>
                    <IconButton aria-label="share">
                        <GitHubIcon />
                    </IconButton>
                </a>
            </CardActions>
        </Card>
    )
}


export default TeamCard
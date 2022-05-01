import React from 'react'
import { Avatar, Box, Stack, Typography } from '@mui/material'

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function parsePostedDate(posted) {
    if (posted.substr(0, 10) == (new Date()).toJSON().substr(0, 10)) return "Today"
    const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    const arrayPosted = posted.substr(0, 10).split('-').reverse()
    const monthPosted = month[parseInt(((arrayPosted)[1])) - 1].trim()
    const datePosted = arrayPosted[0].trim()
    const yearPosted = arrayPosted[2].trim()
    return (datePosted + " " + monthPosted + ", " + yearPosted)
}

const Message = (props) => {
    const message = props.message
    return (
        <Stack direction="row"
            spacing={2}
            sx={{ margin: 3 }}>
            <Stack direction="column">
                <Avatar sx={{ bgcolor: getRandomColor(), width: 30, height: 30 }}>{message.by[0].toUpperCase()}</Avatar>
            </Stack>
            <Stack direction="column" spacing={1}>
                <Typography
                    sx={{ fontWeight: 'medium' }}
                    variant="body1" >
                    {message.by}
                </Typography>
                <Typography varient="body1" paragraph={true}>
                    {message.message}
                </Typography>
                <Typography style={{ textAlign: "left", color: "gray" }}>
                    {parsePostedDate(message.timestamp)}
                </Typography>
            </Stack>
        </Stack>
    )
}

export default Message
import React from 'react'
import { Container, Typography } from '@mui/material'
import { UserContext } from '../../Providers/UserStateProvider'
import axios from 'axios'
const Userdata = () => {
    const { userToken } = React.useContext(UserContext)
    const [userData, setUserData] = React.useState({})
    console.log(userData)
    React.useEffect(() => {
        axios.get(`/api/userDataRead?token=${userToken}`).then(res => {
            setUserData(res.data.doc.templateData)
        })
    }, [userToken])
    return (
        <Container>
            <Typography variant={"h4"}>
                Your Data
            </Typography>
            <Typography >
                {"Website Title: "}{userData?.website?.title}
            </Typography>
            <Typography>
                {"Website Favicon: "}{userData?.website?.favicon}
            </Typography>
            <Typography variant={"h6"}>
                {"About you: "}
            </Typography>
            <Typography>
                {"Name: "}{userData?.name}
            </Typography>
            <Typography>
                {"Heading: "}{userData?.about?.heading}
            </Typography>
            <Typography>
                {"Tags: "}{userData?.tags?.join(',')}
            </Typography>
            <Typography>
            {"Date of Birth: "}{userData?.about?.dateOfBirth}
            </Typography>
            <Typography>
                {"Age: "}{userData?.about?.age}
            </Typography>
            <Typography>
                {"City: "}{userData?.about?.city}
            </Typography>
            <Typography>
                {"Phone: "}{userData?.about?.phone}
            </Typography>
            <Typography>
                {"Email Id: "}{userData?.about?.email}
            </Typography>
            <Typography>
                {"Summary: "}{userData?.about?.summary}
            </Typography>
            <Typography variant={"h6"}>
                {"Socials: "}
            </Typography>
            <Typography>
                {"Twitter: "}{userData?.socials?.twitter}
            </Typography>
            <Typography>
                {"Facebook: "}{userData?.socials?.facebook}
            </Typography>
            <Typography>
                {"Linkedin: "}{userData?.socials?.linkedin}
            </Typography>
            <Typography>
                {"GitHub: "}{userData?.socials?.github}
            </Typography>
            <Typography>
                {"Instagram: "}{userData?.socials?.instagram}
            </Typography>
        </Container>
    );
}

export default Userdata;

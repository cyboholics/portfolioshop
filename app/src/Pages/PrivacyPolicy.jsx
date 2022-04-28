import { Container } from '@mui/material';
import React from 'react'
import Markdown from 'react-markdown'
import privacypolicy from '../assets/Markdowns/PRIVACY_POLICY.md'

const PrivacyPolicy = () => {
    const [rawData, setRawData] = React.useState("")
    React.useEffect(()=>{
        fetch(privacypolicy)
            .then(r => r.text())
            .then(text => {
            setRawData(text);
        });
    },[])
    return (
    <>   
        <Helmet htmlAttributes>
            <html lang="en" />
            <title>Privacy Policy - Portfolio Shop: We build for you</title>
            <meta name="description" content="We at Portfolio Shop priotize our user privacy on our website. We take precautions to protect the security of your information. Learn more on our privacy policy..." />
        </Helmet>
        <Container sx={{marginTop:12}}>
        <Markdown>{rawData}</Markdown>;
        </Container>
    </> 
    )
};

export default PrivacyPolicy;
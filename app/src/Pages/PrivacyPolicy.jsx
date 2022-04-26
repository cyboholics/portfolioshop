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
    return <Container sx={{marginTop:12}}>
    <Markdown>{rawData}</Markdown>;
    </Container>
};

export default PrivacyPolicy;
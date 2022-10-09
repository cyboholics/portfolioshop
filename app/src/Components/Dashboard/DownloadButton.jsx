import React from 'react';
import { IconButton } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import { UserContext } from '../../Providers/UserStateProvider';

const Downloadbutton = () => {
 const { userEmail } = React.useContext(UserContext);
 return (
  <a
   href={`/api/portfolioGenerator?email=${userEmail}`}
   download={`${userEmail}-portfolio.html`}
  >
   <IconButton
    color='white'
    sx={{
     position: 'fixed',
     bottom: 120,
     right: 50,
     width: 60,
     height: 60,
     padding: 0,
     backgroundColor: '#aaaaff',
    }}
   >
    <DownloadIcon
     sx={{
      height: 30,
      width: 30,
     }}
    />
   </IconButton>
  </a>
 );
};

export default Downloadbutton;

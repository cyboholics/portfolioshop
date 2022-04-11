import axios from 'axios';
import React from 'react';
import { GoogleLogin } from 'react-google-login'
function App() {
  const [token,setToken] = React.useState("")
  const [email, setEmail] = React.useState("")
  const responseGoogle = async (res)=>{
    try{
      const userEmail = await axios.get(`/api/GoogleAuthValidation?token=${res.tokenId}`);
      setEmail(userEmail.data)
    } catch(err){
    }
    setToken(res.tokenId)
  }
  return (
    <div>
      <GoogleLogin
        clientId="691540684671-tu8rdq80k4juqk68j8tblm8vcts4ni5u.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
        permission='id_token'
      />
      <p>
        {token}
      </p>
      <p>
        Email: {email}
      </p>
    </div>
  );
}

export default App;

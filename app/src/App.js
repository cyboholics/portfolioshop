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
      console.log(err)
    }
    setToken(res.tokenId)
  }
  return (
    <div>
      <GoogleLogin
        clientId={process.env["REACT_APP_GOOGLE_AUTH_CLIENT_ID"]}
        buttonText={"Continue with Google"}
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

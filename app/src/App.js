import axios from 'axios';
import React from 'react';
import { GoogleLogin } from 'react-google-login'
function App() {
  const [token,setToken] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [clientId, setClientID] = React.useState("")
  React.useEffect(()=>{
    axios.get(`/api/environments`).then((env)=>{
      setClientID(env.data["GOOGLE_CLIENT_ID"])
    }
    ).catch((err)=>{
      console.log(err)
    })
  },[])
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
      {clientId && <GoogleLogin
        clientId={clientId}
        buttonText={"Continue with Google"}
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
        permission='id_token'
      />}
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

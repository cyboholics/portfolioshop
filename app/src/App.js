import React from 'react';
import { GoogleLogin } from 'react-google-login'
function App() {
  const [token,setToken] = React.useState("")
  const responseGoogle = (res)=>{
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
    </div>
  );
}

export default App;

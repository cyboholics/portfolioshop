import React from 'react'
import GoogleLoginComp from './Components/GoogleAuth/GoogleLoginComp';
import GoogleLogoutComp from './Components/GoogleAuth/GoogleLogoutComp';
import { UserContext } from './Providers/UserStateProvider';

function App() {
  const { userToken } = React.useContext(UserContext)
  return (
    <>
      {userToken ? <GoogleLogoutComp /> : <GoogleLoginComp />}
    </>
  );
}

export default App;

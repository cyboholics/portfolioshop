import React from 'react'
import GoogleLoginComp from './Components/GoogleLoginComp';
import EnvironmentProvider from './Providers/EnvironmentProvider';
import UserStateProvider from './Providers/UserStateProvider';
function App() {

  return (
    <UserStateProvider>
      <EnvironmentProvider>
        <GoogleLoginComp />
      </EnvironmentProvider>
    </UserStateProvider>
  );
}

export default App;

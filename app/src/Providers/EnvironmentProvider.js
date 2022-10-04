import React from 'react';
import axios from 'axios';
export const EnvironmentContext = React.createContext({});
const EnvironmentProvider = ({ children }) => {
 const [CLIENT_ID, setClientID] = React.useState('');
 React.useEffect(() => {
  axios
   .get(`/api/environments`)
   .then((env) => {
    setClientID(env.data['GOOGLE_CLIENT_ID']);
   })
   .catch((err) => {});
 }, []);
 return (
  <EnvironmentContext.Provider value={{ CLIENT_ID }}>
   {children}
  </EnvironmentContext.Provider>
 );
};
export default EnvironmentProvider;

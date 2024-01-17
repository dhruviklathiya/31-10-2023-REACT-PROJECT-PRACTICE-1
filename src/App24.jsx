import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import { Route, Routes } from 'react-router-dom';
import Login from './Components/Login';

const App24 = () => {
    const { loginWithRedirect } = useAuth0();

    return (
        <>
            <h1>Welcome to site created by D</h1>
            <h1>This site illustates Google auth login</h1>
            <button onClick={() => loginWithRedirect()}>Log In</button>;
            <Routes>
                <Route path='/login' exact element={<Login />} />
            </Routes>
        </>
    )
}

export default App24

// Flow: Docs: https://auth0.com/docs/quickstart/spa/react/interactive?

// Create account on Auth0 by okta & create tenant
// Install package => npm install @auth0/auth0-react
// paste following in index.js
// import React from 'react';
// import { createRoot } from 'react-dom/client';
// import { Auth0Provider } from '@auth0/auth0-react';
// import App from './App';

// const root = createRoot(document.getElementById('root'));

// root.render(
// <Auth0Provider
//     domain="{yourDomain}"
//     clientId="{yourClientId}"
//     authorizationParams={{
//       redirect_uri: window.location.origin
//     }}
//   >
//     <App />
//   </Auth0Provider>,
// );

// paste following in App.js where login button is placed
// import { useAuth0 } from "@auth0/auth0-react";
// const { loginWithRedirect } = useAuth0();
// <button onClick={() => loginWithRedirect()}>Log In</button>;

// Note:- From dashboard > application setting in Auth0 website add http://localhost:3000/ to allowed callback URL

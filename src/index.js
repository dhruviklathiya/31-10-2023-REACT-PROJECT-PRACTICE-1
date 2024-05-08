import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import App2 from './App2';
import App3 from './App3';
import App4 from './App4';
import App5 from './App5';
import App6 from './App6';
import App7 from './App7';
import App8 from './App8';
import App9 from './App9';
import App10 from './App10';
import App11 from './App11';
import App12 from './App12';
import App13 from './App13';
import App14 from './App14';
import App15 from './App15';
import App16 from './App16';
import App17 from './App17';
import App18 from './App18';
import App19 from './App19';
import App20 from './App20';
import App21 from './App21';
import App22 from './App22';
import App23 from './App23';
import App24 from './App24';
import App25 from './App25';
import App28 from './App28';
import Card from './Card';
import data from './Data';
import { BrowserRouter } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
// Run this for rendering App.js and Card
// root.render(
//     <>
//     <App />
//     <div className="d-flex justify-content-start flex-wrap m-2">
//     {data.map((data)=>{
//       return <Card val_={data}/>
//     })}
//     </div>
//     </>
// )

// Run this for rendering App2.js file functional component [CRUD: Create,Read || POST & GET]
root.render(
    <>
        <App />
    </>
)
// root.render(
//     <>
//     <App2/>
//     </>
// )

// Run this for rendering App3.js file functional component [CRUD:Delete]p
// root.render(
//     <>
//     <App3/>
//     </>
// )

// Run this for rendering App4.js file functional component [CRUD:Delete]
// root.render(
//     <>
//     <App4/>
//     </>
// )

// Run this for rendering App5.js file functional component [Static links]
// root.render(
//     <>
//     <BrowserRouter>
//     <App5/>
//     </BrowserRouter>
//     </>
// )

// Run this for rendering App6.js file functional component [Dynamic link]
// root.render(
//     <>
//     <BrowserRouter>
//     <App6/>
//     </BrowserRouter>
//     </>
// )

// Run this for rendering App7.js file functional component [Pricewise filtering]
// root.render(
//     <>
//     <App7/>
//     </>
// )

// Run this for rendering App8.js file functional component [Get & printing on page API using Axios]
// root.render(
//     <>
//     <App8/>
//     </>
// )

// Run this for rendering App9.js file functional component [Get & post API using Axios]
// root.render(
//     <>
//     <App9/>
//     </>
// )

// Run this for rendering App9.js file functional component [GET & POST & DELETE & UPDATE]
// root.render(
//     <>
//     <App10/>
//     </>
// )

// Run this for rendering App9.js file functional component [GET & POST & DELETE & UPDATE repeat]
// root.render(
//     <>
//     <App11/>
//     </>
// )

// Run this for rendering App9.js file functional component [GET & POST & DELETE & UPDATE repeat]
// root.render(
//     <>
//     <App12/>
//     </>
// )

// Run this for rendering App9.js file functional component [Dynamic axios API CRUD]
// root.render(
//     <>
//     <App13/>
//     </>
// )

// Run this for rendering App9.js file functional component [Local storage CRUD]
// root.render(
//     <>
//     <App14/>
//     </>
// )

// Run this for rendering App9.js file functional component [Local storage CRUD using useRef hook]
// root.render(
//     <>
//     <App15/>
//     </>
// )

// Run this for rendering App9.js file functional component [Sweetalert2]
// root.render(
//     <>
//     <App16/>
//     </>
// )

// Run this for rendering App9.js file functional component [Render page according to role & CART]
// root.render(
//     <>
//     <BrowserRouter>
//     <App17/>
//     </BrowserRouter>
//     </>
// )

// Run this for rendering App9.js file functional component [Render page according to role, product availability & CART]
// root.render(
//     <>
//     <BrowserRouter>
//     <App18/>
//     </BrowserRouter>
//     </>
// )

// Run this for rendering App9.js file functional component [Open modal when clicked view for update]
// root.render(
//     <>
//     <BrowserRouter>
//     <App19/>
//     </BrowserRouter>
//     </>
// )

// Run this for rendering App9.js file functional component [Validation for empty input in CRUD]
// root.render(
//     <>
//         <BrowserRouter>
//             <App20 />
//         </BrowserRouter>
//     </>
// )

// Run this for rendering App9.js file functional component [Validation for empty input & same input not valid in CRUD]
// root.render(
//     <>
//         <BrowserRouter>
//             <App21 />
//         </BrowserRouter>
//     </>
// )

// localstorage CRUD
// root.render(
//     <>
//         <BrowserRouter>
//             <App22 />
//         </BrowserRouter>
//     </>
// )

// Problem: We are bounded while transferring data from one file to another we must pass them by props and which leads to prblem like props drilling
// Solution: context API but problem with contextAPI is that it does not proivide fully centralised state
// Solution: Centralised state to manage data == redux toolkit ||| saga ||| persist
// prefer: https://github.com/dhruviklathiya/31-12-2023-REACT-REDUX-SAGA-CUSTOM-FOLDER-STRUCTURE

// Cookies in react using npm i js-cookie
// root.render(
//     <>
//         <BrowserRouter>
//             <App23 />
//         </BrowserRouter>
//     </>
// )

// Auth 0
// root.render(
//     <BrowserRouter>
//         <Auth0Provider
//             domain="react-tenant-1.us.auth0.com"
//             clientId="17BFjt4lm1LcIk5pdfU4KphWWEsA8qfH"
//             authorizationParams={{
//                 redirect_uri: window.location.origin
//             }}
//         >
//             <App24 />
//         </Auth0Provider>
//     </BrowserRouter>,
// )

// Firebase
// root.render(
//     <>
//         <BrowserRouter>
//             <App25 />
//         </BrowserRouter>
//     </>
// )

// Firebase in redux
// root.render(
//     <>
//         <BrowserRouter>
//             <App23 />
//         </BrowserRouter>
//     </>
// )
// Firebase crud
// root.render(
//     <>
//         <BrowserRouter>
//             <App23 />
//         </BrowserRouter>
//     </>
// )

// To-do table with searching, sorting, filters
// root.render(
//     <>
//         <BrowserRouter>
//             <App28 />
//         </BrowserRouter>
//     </>
// )
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import App2 from './App2';
import App3 from './App3';
import Card from './Card';
import data from './Data';

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
// root.render(
//     <>
//     <App2/>
//     </>
// )

// Run this for rendering App3.js file functional component [CRUD:Delete]
root.render(
    <>
    <App3/>
    </>
)
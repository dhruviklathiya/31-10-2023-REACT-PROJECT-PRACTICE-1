import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Card from './Card';
import data from './Data';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
    <App />
    {data.map((data)=>{
      return <Card val_={data}/>
    })}
    </>
)
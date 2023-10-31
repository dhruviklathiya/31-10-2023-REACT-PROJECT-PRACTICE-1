import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Card from './Card';
import data from './Data';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
    <App />
    <div className="d-flex justify-content-start flex-wrap m-2">
    {data.map((data)=>{
      return <Card val_={data}/>
    })}
    </div>
    </>
)
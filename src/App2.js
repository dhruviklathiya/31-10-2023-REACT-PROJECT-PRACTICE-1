// This file is for only data appear on document without UI elements
import React from "react"
import { useState } from "react";
import data from "./Data";
import Card from "./Card";

const App2 = () => {
  // Array in form of state for iteration in card
  const [result,setResult] = useState(data)
  // Object in form of state for push into static array of object
  const [value,setValue] = useState({})
  // For any given input following event will handle and create object to be added in array of object
  const input_handler = (e) => {
    setValue({...value, [e.target.name]:e.target.value})
  }
  // When click submit button created object from input_handler will be added into static array of object
  const submit_handler = (e) => {
    alert("Data added")
    setResult([...result,value])
  }
  // Return statement of App2 component only text no UI
//   return (
//     <>
//     <div className="d-flex justify-content-center">
//     <label>Title:-</label>
//     <input placeholder="title" name="title" onChange={input_handler}/>
//     <label>Author:-</label>
//     <input placeholder="author" name="author" onChange={input_handler}/>
//     <button type="button" onClick={submit_handler}>Submit</button>
//     </div>
//     {
//       result?.map((val_,ind_)=>{
//         return (
//         <>
//             <h1>{val_.title}</h1>
//             <p>{val_.author}</p>
//         </>
//         )
//       })
//     }
//     </>
//     );
// }



// Return statement of App2 component with UI
  return (
    <>
    <div className="d-flex justify-content-center">
    <label>Title:-</label>
    <input placeholder="title" name="title" onChange={input_handler}/>
    <label>Author:-</label>
    <input placeholder="author" name="author" onChange={input_handler}/>
    <button type="button" onClick={submit_handler}>Submit</button>
    </div>
    <div className="d-flex justify-content-start flex-wrap m-2">
    {
      result?.map((val_)=>{
        return (
        <>
          <Card title={val_.title} author={val_.author}/>
        </>
        )
      })
    }
    </div>
    </>
    );
}
// Exporting App2 as default
export default App2;
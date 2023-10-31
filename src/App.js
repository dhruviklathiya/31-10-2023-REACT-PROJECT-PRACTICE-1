import React from "react"
import { useState } from "react";
import data from "./Data";

const App = () => {
  const [value,setValue] = useState({})
  const input_handler = (e) => {
    setValue({...value, [e.target.name]:e.target.value})
  }
  const submit_handler = (e) => {
    data.push(value);
    alert("Data added")
  }
  return (
    <>
    <div className="d-flex justify-content-center">
    <label>Title:-</label>
    <input placeholder="title" name="title" onChange={input_handler}/>
    <label>Author:-</label>
    <input placeholder="author" name="author" onChange={input_handler}/>
    <button type="button" onClick={submit_handler}>Submit</button>
    </div>
    </>
    );
}

export default App;
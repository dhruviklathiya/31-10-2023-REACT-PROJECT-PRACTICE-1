import React, { useRef, useState } from 'react'

const App = () => {
  const fname = useRef()
  const lname = useRef()
  const emailaddress = useRef()
  const [INPUT, setINPUT] = useState({
    fname: "",
    lname: "",
    emailaddress: ""
  })
  const [DATA, setDATA] = useState({})

  const input_handler = () => {
    const input = {
      fname: fname.current.value,
      lname: lname.current.value,
      emailaddress: emailaddress.current.value
    }
    setINPUT(input)
  }

  const submit_handler = () => {
    console.log(INPUT);
    setDATA(INPUT)
  }

  return (
    <>
      <h1>Hello useRef with single state and multiple fields</h1>
      <input value={DATA.fname} name='firstname' ref={fname} onChange={input_handler} />
      <input value={DATA.lname} name='lastname' ref={lname} onChange={input_handler} />
      <input value={DATA.emailaddress} name='email' ref={emailaddress} onChange={input_handler} />
      <button type='button' onClick={submit_handler}>SUBMIT</button>
      <h1>{DATA.fname}</h1>
      <h1>{DATA.lname}</h1>
      <h1>{DATA.emailaddress}</h1>
    </>
  )
}

export default App



// ============= ORIGINAL

// import React from "react"
// import { useState } from "react";
// import data from "./Data";

// const App = () => {
//   const [value,setValue] = useState({})
//   const input_handler = (e) => {
//     setValue({...value, [e.target.name]:e.target.value})
//   }
//   const submit_handler = (e) => {
//     data.push(value);
//     alert("Data added")
//   }
//   return (
//     <>
//     <div className="d-flex justify-content-center">
//     <label>Title:-</label>
//     <input placeholder="title" name="title" onChange={input_handler}/>
//     <label>Author:-</label>
//     <input placeholder="author" name="author" onChange={input_handler}/>
//     <button type="button" onClick={submit_handler}>Submit</button>
//     </div>
//     </>
//     );
// }

// export default App;
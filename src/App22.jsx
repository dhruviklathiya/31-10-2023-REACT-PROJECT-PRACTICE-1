import React, { useEffect } from 'react'
import { useState } from 'react'

const App22 = () => {
    const [data, setdata] = useState([])
    const [input, setinput] = useState({})
    const [view, setview] = useState({})
    const [index, setindex] = useState()

    const arr = JSON.parse(localStorage.getItem("detail")) || []

    useEffect(()=>{
        setdata([...arr])
    },[])


    const input_handler = (e) => {
        setinput({...input,[e.target.name]:e.target.value})
    }

    const submit_handler = () => {
        arr.push(input)
        localStorage.setItem("detail",JSON.stringify(arr))
        setdata([...arr])
    }

    const delete_handler = (ind_) => {
        arr.splice(ind_,1)
        localStorage.setItem("detail",JSON.stringify(arr))
        setdata([...arr])
    }

    const view_handler = (val_,ind_) => {
        setview(val_)
        setindex(ind_)
    }
    const update_input_handler = (e) => {
        setview({...view,[e.target.name]:e.target.value})
    }
    const update_handler = () => {
        arr.splice(index,1,view)
        localStorage.setItem("detail",JSON.stringify(arr))
        setdata([...arr])
    }

    return (
    <>
    <div>
    <input type="text" name='fname' onChange={input_handler}/>
    <input type="text" name='lname' onChange={input_handler}/>
    <button type='button' onClick={submit_handler}>Submit</button>
    </div>
    <div>
    <input type="text" name='fname' value={view.fname} onChange={update_input_handler}/>
    <input type="text" name='lname' value={view.lname} onChange={update_input_handler}/>
    <button type='button' onClick={update_handler}>Update</button>
    </div>
    {
        data.map((val_,ind_)=>{
            return(
                <>
                <h1>{val_.fname}</h1>
                <h1>{val_.lname}</h1>
                <button type='button' onClick={()=>{delete_handler(ind_)}}>Delete</button>
                <button type='button' onClick={()=>{view_handler(val_,ind_)}}>View</button>
                </>
            )
        })
    }
    </>
  )
}

export default App22
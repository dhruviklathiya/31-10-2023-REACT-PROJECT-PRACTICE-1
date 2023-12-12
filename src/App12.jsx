import axios from 'axios'
import React, { useEffect, useReducer, useState } from 'react'

const App12 = () => {
    const [input,setInput] = useState({})
    const [updateinput,setUpdateInput] = useState({})
    const [data,setData] = useState([])
    const [index,setIndex] = useState()
    useEffect(()=>{
        axios.get("http://localhost:3001/posts").then((res)=>{
            setData(res.data)
        })
    },[])
    const input_handler = (e) => {
        setInput({...input, [e.target.name]:e.target.value})
    }
    const submit_handler = () => {
        axios.post("http://localhost:3001/posts",input).then((res)=>{
            setData([...data,res.data]);
        })
    }
    const delete_handler = (id) => {
        axios.delete(`http://localhost:3001/posts/${id}`).then((res)=>{
            setData(data.filter((one_)=>one_.id !== id))
        })
    }
    const input_handler_update = (e) => {
        setUpdateInput({...updateinput, [e.target.name]:e.target.value})
    }
    const update_handler1 = (ind) => {
        setUpdateInput(data[ind])
        setIndex(ind)
    }
    const update_handler2 = async() => {
        await axios.put(`http://localhost:3001/posts/${updateinput.id}`,updateinput).then((res)=>{
            // Virtual dom update without API calling
            data.splice(index,1,res.data)
            setData([...data])
        })
    }
    return (
    <>
    <div>
    <input name='title' onChange={input_handler}/>
    <input name='author' onChange={input_handler}/>
    <button type='button' onClick={submit_handler}>Add data</button>
    </div>
    <div>
    <input name='title' value={updateinput.title} onChange={input_handler_update}/>
    <input name='author' value={updateinput.author} onChange={input_handler_update}/>
    <button type='button' onClick={update_handler2}>Update</button>
    {/* <button type='button' onClick={cancel_handler}>Cancel</button> */}
    {/* <button type='button' onClick={}>Re-render</button> */}
    </div>
    {
        data?.map((val,ind)=>{
            return(
                <>
                <h1>{val.title}</h1>
                <h2>{val.author}</h2>
                <button onClick={()=>{delete_handler(val.id)}}>Delete</button>
                <button onClick={()=>{update_handler1(ind)}}>Update</button>
                </>
            )
        })
    }
    </>
  )
}

export default App12
// Create 1 file like .env but name it Constant.jsx which contains environment variable
// Create 2 folders (1)Components (2)API

import React, { useState, useEffect } from 'react'
import { delete_API, get_API, post_API, update_API } from './API/api'
import { deleteData, getData, postData, updateData, url } from './Constant'

const App13 = () => {
    const [input,setInput] = useState({})
    const [updateinput,setUpdateInput] = useState({})
    const [data,setData] = useState([])
    useEffect(()=>{
        get_API(url,getData).then((res)=>{
            setData([res.data]);
        })
    },[])
    const input_handler = (e) => {
        setInput({...input, [e.target.name]:e.target.value})
    }
    const submit_handler = () => {
        post_API(url,postData,input).then((res)=>{
            setData([...data,res.data]);
        })
    }
    const delete_handler = (id) => {
        delete_API(url,deleteData,id).then((res)=>{
                if(res.status == 200){
                setData([data.filter((one_)=>one_.id !== id)])
            }
        })
    }
    const input_handler_update = (e) => {
        setUpdateInput({...updateinput, [e.target.name]:e.target.value})
    }
    const update_handler1 = (ind) => {
        setUpdateInput(data[ind])
    }
    const update_handler2 = () => {
        update_API(url,updateData,updateinput.id,updateinput).then((res)=>{
            console.log(res);
            get_API(url,getData).then((res)=>{
                setData([res.data]);
            })
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
    </div>
    {
        data?.map((val,ind)=>{
            return(
                <>
                <h1>{val.title}</h1>
                <h2>{val.author}</h2>
                {/* <button onClick={()=>{delete_handler(val.id)}}>Delete</button> */}
                {/* <button onClick={()=>{update_handler1(ind)}}>Update</button> */}
                </>
            )
        })
    }
    </>
  )
}

export default App13
// Get api using Axios
import axios from 'axios'
import React, { useEffect, useState, useRef } from 'react'

const App8 = () => {
    const [data,setdata]= useState([])
    const title = useRef()
    const author = useRef()
    const get_API = () => {
        axios.get("http://localhost:3001/posts").then((res)=>{
            console.log(res.data)
            setdata(res.data)
        })
    }
    const submit_handler = () => {
        const input_data = {
            title: title.current.value,
            author: author.current.value
        }
        setdata([...data,input_data])
    }
    useEffect(()=>{
        get_API()
    },[])
    return (
    <>
    <input type="title" ref={title} placeholder="Enter title:-" />
    <input type="author" ref={author} placeholder="Enter author:-" />
    <button onClick={submit_handler}>Add data</button>
    {data?.map((val)=>{
        return(
            <>
            {/* <h1>{val.id}</h1> */}
            <h1>{val.title}</h1>
            <h1>{val.author}</h1>
            </>
        )
    })}
    </>
  )

}
export default App8
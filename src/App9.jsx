// Axios get,post, delete
import axios from 'axios'
import React, { useState, useEffect, useRef } from 'react'

const App9 = () => {
    const [maindata,setmaindata] = useState([])
    useEffect(()=>{
        get_API()
    },[])
    const title = useRef()
    const author = useRef()
    const get_API = () => {
        axios.get("http://localhost:3001/posts").then((res)=>{
        setmaindata(res.data)
        })
    }
    const post_API = () => {
        const input_data = {
            title: title.current.value,
            author: author.current.value
        }
        axios.post("http://localhost:3001/posts",input_data).then((res)=>{
            setmaindata([...maindata,res.data])
        })
    }
    const delete_data = (id) => {
        axios.delete(`http://localhost:3001/posts/${id}`).then((res)=>{
        setmaindata(maindata.filter((one_)=>one_.id !== id))
        })
    }
    return (
    <>
    <input type="title" ref={title} placeholder="Enter title:-" />
    <input type="author" ref={author} placeholder="Enter author:-" />
    <button onClick={post_API}>Add data</button>
    {maindata?.map((val)=>{
        return(
            <>
            <h1>{val.id}</h1>
            <h1>{val.title}</h1>
            <h1>{val.author}</h1>
            <button onClick={()=>{delete_data(val.id)}}>DELETE</button>
            </>
        )
    })}
    </>
  )
}

export default App9
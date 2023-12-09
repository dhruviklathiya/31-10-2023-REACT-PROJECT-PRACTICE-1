import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'

const App10 = () => {
    const title = useRef()
    const author = useRef()
    const [data,setdata] = useState([])
    const [updateData,setupdatedata] = useState([])
    useEffect(()=>{
      get_API();
    },[])
    const get_API = () => {
        axios.get("http://localhost:3001/posts").then((res)=>{
            setdata(res.data)
        })
    }
    const post_API = () => {
        const input_data = {
            title:title.current.value,
            author:author.current.value
        }
        axios.post("http://localhost:3001/posts",input_data).then((res)=>{
            setdata([...data,res.data])
        })
    }
    const delete_API = (id) => {
        axios.delete(`http://localhost:3001/posts/${id}`).then((res)=>{
        })
    }
    const final_update = (e) => {
        setupdatedata({...updateData,[e.target.name]:e.target.value})
        }
  const submit_handler = () => {
    post_API()
  }
  const delete_handler = (id) => {
    delete_API(id)
    setdata(data.filter((one_)=> one_.id !== id))
  }
  const update_display = (id,ind_) => {
    setupdatedata(data[ind_])
  }
  const update_API = () => {
    axios.put(`http://localhost:3001/posts/${updateData.id}`,updateData).then((res)=>{
            console.log(res.status);
        })
        get_API()
  }
  const cancel_update = () => {
    document.getElementById('title_update').value = ""
    document.getElementById('author_update').value = ""
  }
  return (
    <>
    <input type='text' name='title' ref={title}/>
    <input type='text' name='author' ref={author}/>
    <button onClick={submit_handler}>Add</button>
    <div>
    <input id='title_update' type='text' name='title' value={updateData.title} onChange={final_update}/>
    <input id='author_update' type='text' name='author' value={updateData.author} onChange={final_update}/>
    <button onClick={update_API}>Update</button>
    <button onClick={cancel_update}>Cancel</button>
    </div>
    {data.map((val_,ind_)=>{
        return(
            <>
            <h1>{val_.id}</h1>
            <h1>{val_.title}</h1>
            <h1>{val_.author}</h1>
            <button onClick={()=>{delete_handler(val_.id)}}>Delete</button>
            <button onClick={()=>{update_display(val_.id,ind_)}}>Edit</button>
            </>
        )
    })}
    </>
  )
}

export default App10
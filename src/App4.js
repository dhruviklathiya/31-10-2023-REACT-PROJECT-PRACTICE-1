import React, { useState,useEffect} from "react"
import data from "./Data"
import Card from "./Card"
import Modal from "./Modal"

const App4 = () => {
    const [input,setInput] = useState({})
    const [result,setResult] = useState(data)
    const input_handler = (e) => {
        setInput({...input,[e.target.name]:e.target.value})
    }
    const submit_handler = () => {
        setResult([...result,input])
    }
    const delete_handler = (title_) => {
        setResult( result?.filter( (e) => e.title !== title_) )
    }

    return (
        <>
        <label>Book:-</label>
        <input placeholder="Book name" name="title" onChange={input_handler}/>
        <label>Author:-</label>
        <input placeholder="Book name" name="author" onChange={input_handler}/>
        <button type="button" onClick={submit_handler}>Click to Add</button>
        {
            result?.map((val_,index)=>{
                return (
                <>
                <Card title={val_.title} author={val_.author} ind_={index}/>
                <button type="button" onClick={()=>{delete_handler(val_.title)}}>Click to delete</button>
                <Modal title={val_.title} author={val_.author}/>
                </>
                )
            })
        }
        </>
    )

}
export default App4;
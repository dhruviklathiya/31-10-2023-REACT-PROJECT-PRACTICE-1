import React, { useState, useRef, useEffect } from 'react'

const App15 = () => {
    const fname = useRef()
    const lname = useRef()

    const [data, setdata] = useState([])
    const [view,setview] = useState({})
    const [index,setindex] = useState()

    const arr = JSON.parse(localStorage.getItem("detail")) || []

    useEffect(()=>{
        setdata([...arr])
    }, [])

    const submit_handle = () => {
        const input = {
            fname: fname.current.value,
            lname: lname.current.value,
        }
        arr.push(input)
        localStorage.setItem("detail",JSON.stringify(arr))
        setdata([...arr])
    }

    const delete_handler = (ind_) => {
        arr.splice(ind_,1)
        localStorage.setItem("detail",JSON.stringify(arr))
        setdata([...arr])
    }

    const view_handler = (ind_) => {
        setview(arr[ind_])
        setindex(ind_)
    }

    const update_input_handler = (e) => {
        setview({...view,[e.target.name]:e.target.value})
    }

    const update_handle = () => {
        arr.splice(index,1,view)
        localStorage.setItem("detail",JSON.stringify(arr))
        setdata([...arr])
    }

    return (
    <>
    <div>
    <input type="text" name='fname' ref={fname}/>
    <input type="text" name='lname' ref={lname}/>
    <button type='button' onClick={submit_handle}>Submit</button>
    </div>
    <div>
    <input type="text" name='fname' value={view.fname} onChange={update_input_handler}/>
    <input type="text" name='lname' value={view.lname} onChange={update_input_handler}/>
    <button type='button' onClick={update_handle}>Update</button>
    </div>
    {
        data?.map((val_,ind_)=>{
            return (
                <>
                <h1>{val_.fname}</h1>
                <h6>{val_.lname}</h6>
                <button onClick={()=>delete_handler(ind_)}>Delete</button>
                <button onClick={()=>view_handler(ind_)}>View</button>
                </>
            )
        })
    }
    </>
  )
}

export default App15
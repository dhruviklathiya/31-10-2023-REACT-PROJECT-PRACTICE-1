import React, { useEffect, useState } from 'react'

const App14 = () => {
    const [data, setdata] = useState([])
    const [input, setinput] = useState()
    const [updateinput, setupdateinput] = useState({})
    const [index, setindex] = useState()

    const arr =  JSON.parse(localStorage.getItem("detail")) || []

    useEffect(()=>{
        setdata([...arr])
    },[])

    const input_handler = (e) => {
        setinput({...input,[e.target.name]:e.target.value})
    }

    const submit_handler = () => {
        arr.push(input)
        setdata([...arr])
        localStorage.setItem("detail",JSON.stringify(arr))
    }

    const delete_handler = (ind) => {
        arr.splice(ind,1)
        localStorage.setItem("detail",JSON.stringify(arr))
        setdata([...arr])
    }

    const view_handler = (val_,ind_) => {
        setindex(ind_)
        setupdateinput(val_)
        console.log(updateinput);
    }

    const update_input = (e) => {
        setupdateinput({...updateinput,[e.target.name]:e.target.value})
    }

    const update_handler = () => {
        arr.splice(index,1,updateinput)
        localStorage.setItem("detail",JSON.stringify(arr))
        setdata([...arr])
    }

    return (
        <>
        <div>
        <input type="text" name='fname' onChange={input_handler}/>
        <input type="text" name='lname' onChange={input_handler}/>
        <input type="text" name='roll_number' onChange={input_handler}/>
        <button type='button' onClick={submit_handler}>Submit</button>
        <button type='button'>Cancel</button>
        </div>
        <div>
        <input type="text" value={updateinput.fname} onChange={update_input} name='fname'/>
        <input type="text" value={updateinput.lname} onChange={update_input} name='lname'/>
        <input type="text" value={updateinput.roll_number} onChange={update_input} name='roll_number'/>
        <button type='button' onClick={update_handler}>Update</button>
        <button type='button'>Cancel</button>
        </div>
        {data?.map((val_,ind_)=>{
                return(
                    <>
                        <h1>{val_.fname}</h1>
                        <button type='button' onClick={()=>{delete_handler(ind_)}}>Delete...............</button>
                        <button type='button' onClick={()=>{view_handler(val_,ind_)}}>View</button>
                    </>
                )
            })}
        </>
    )
}

export default App14
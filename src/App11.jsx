// import React, { useEffect, useState } from 'react'
// import axios from 'axios'

// const App11 = () => {
//     const [input_data,setInputData] = useState({})
//     const [data,setData] = useState([])

//     useEffect(()=>{
//         axios.get("http://localhost:3001/posts").then((res)=>{
//             setData(res.data)
//         })
//     },[data])

//     const submit_handler = (e) => {
//         axios.post("http://localhost:3001/posts",input_data).then((res)=>{
//             setData([...data,res.data])
//         })
//     }
//     const input_handler = (e) => {
//         setInputData({...input_data, [e.target.name]:e.target.value })
//     }
//     const delete_handler = (id) => {
//         axios.delete(`http://localhost:3001/posts/${id}`)
//         setData(data.filter((one_)=> one_.id !== id))
//     }
//     const show_data = (ind) => {
//         setInputData(data[ind])
//     }
//     const new_input_handler = (e) => {
//         setInputData({...input_data,[e.target.name]:e.target.value})
//     }
//     const update_handler = () => {
//         axios.put(`http://localhost:3001/posts/${input_data.id}`,input_data).then((res)=>{
//             console.log(res.status);
//         })
//     }
//     const update_cancel_handler = () => {
//         setInputData({title:'',author:''})
//     }
//     return(
//         <>
//         <input name="title"  onChange={input_handler} />
//         <input name="author" onChange={input_handler} />
//         <button type="button" onClick={submit_handler}>Add data</button>
//         <div>
//         <input id='new_title' name="title"  value={input_data.title} onChange={new_input_handler}/>
//         <input id='new_author' name="author" value={input_data.author} onChange={new_input_handler}/>
//         <button type="button" onClick={update_handler}>Update</button>
//         <button type="button" onClick={update_cancel_handler}>Cancel</button>
//         </div>
//         {data?.map((val_,ind_)=>{
//             return(
//                 <>
//                 <div class="card" style={{width: "18rem"}}>
//                   <div class="card-body">
//                     <h5 class="card-title">{val_.title}</h5>
//                     <p class="card-text">{val_.author}</p>
//                     <button href="#" class="btn btn-primary" onClick={()=>{show_data(ind_)}}>Update1</button>
//                     <button href="#" class="btn btn-primary" onClick={()=>{delete_handler(val_.id)}}>Delete</button>
//                   </div>
//                 </div>
//                 </>
//             )
//         })}
//         </>
//     )
// }

// export default App11;


//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
//                      Method2                             //
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////

import axios from 'axios'
import React, { useEffect, useState } from 'react'

const App11 = () => {
    const [input,setInput] = useState({})
    const [data,setData] = useState([])
    useEffect(()=>{
        axios.get("http://localhost:3001/posts").then((res)=>{
            setData(res.data)
        })
    },[])
    const input_handler = (e) => {
        setInput({...input,[e.target.name]:e.target.value})
    }
    const submit_handler = () => {
        axios.post("http://localhost:3001/posts",input).then((res)=>{
            console.log(res.data);
        })
    }
    return (
    <>
    <input name="title" onChange={input_handler}/>
    <input name="author" onChange={input_handler}/>
    <button onClick={submit_handler}>Add</button>
    {data.map((val_,ind_)=>{
        return(
            <>
            <h1>{val_.title}</h1>
            <h1>{val_.author}</h1>
            {/* <button type="button" onClick={()=>{delete_handler}}>Delete</button> */}
            </>
        )
    })}
    </>
  )
}

export default App11
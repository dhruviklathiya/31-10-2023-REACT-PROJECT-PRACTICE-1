import axios from 'axios';
import React, { useEffect, useState } from 'react'

const App28 = () => {
    const [data, setData] = useState([])
    const [search, setSearch] = useState('')
    useEffect(() => {
        get_data()
    }, [])

    const get_data = () => {
        axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
            setData(res.data)
        }).catch((err) => {
            console.log(err);
        })
    }
    return (
        <>
            <label>Search here:</label>
            <input type='text' onChange={(e) => setSearch(e.target.value)} />
            <table border={1} align='center'>
                <tr>
                    <th>Id</th>
                    <th>UserId</th>
                    <th>Title</th>
                </tr>
                {
                    data?.filter((item) => {
                        return search.toLowerCase() === '' ? item : item.title.toLowerCase().includes(search.toLowerCase())
                    }).map((val_, ind_) => {
                        return (
                            <>
                                <tr>
                                    <th>{val_.id}</th>
                                    <th>{val_.userId}</th>
                                    <th>{val_.title}</th>
                                </tr>
                            </>
                        )
                    })
                }
            </table>
        </>
    )
}

export default App28
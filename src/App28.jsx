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
            <div class="container table-responsive py-5">
                <label>Search here:</label>
                <input className='m-3' type='text' onChange={(e) => setSearch(e.target.value)} />
                <table class="table table-bordered table-hover">
                    <thead class="thead-dark">
                        <tr>
                            <th>Id</th>
                            <th>UserId</th>
                            <th>Title</th>
                        </tr>
                    </thead>
                    <tbody>
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
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default App28
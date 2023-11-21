import React, { useState } from 'react'
import "./App7.css"
import product_data from './product_data'

const App7 = () => {
    const [finaldata,setfinaldata] = useState(product_data)
    console.log(finaldata)
    const input_handler = (e) => {
        const price = Number(e.target.value)
        setfinaldata( product_data?.filter((one)=> one.product_price <= price))
    }
    return (
        <>
            <div id="wrapper" class="toggled">
                <div id="sidebar-wrapper">
                    <ul class="sidebar-nav">
                        <li class="sidebar-brand">
                            <a>
                               Price filter
                            </a>
                        </li>
                        <li>
                            <input type='number' onChange={input_handler}/>
                        </li>
                    </ul>
                </div>

                <div id="page-content-wrapper">
                    <div class="container-fluid">
                        {finaldata.map((val_)=>{
                            return(
                                <>
                                <div class="card" style={{width: "18rem"}}>
                                  <img class="card-img-top" src={val_.product_image} alt="Card image cap"/>
                                  <div class="card-body">
                                    <h5 class="card-title">{val_.product_name}</h5>
                                    <p class="card-text">{val_.product_desc}</p>
                                    <p class="card-text">${val_.product_price}</p>
                                  </div>
                                </div>
                                </>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default App7
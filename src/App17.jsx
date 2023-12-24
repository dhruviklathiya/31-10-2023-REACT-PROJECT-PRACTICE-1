import React from 'react'
import Navbar from './Navbar'
import { useState, useRef, useEffect } from 'react'
import Swal from 'sweetalert2'

const App17 = () => {
    // Here admin can add product
    // user can only view them and add & remove product from cart
    // let role = "admin"
    let role = "user"
    let total = 0
    const product_name = useRef()
    const product_price = useRef()

    const [data, setdata] = useState([])
    const [view, setview] = useState({})
    const [index, setindex] = useState()
    const [cart, setcart] = useState([])

    const arr = JSON.parse(localStorage.getItem("detail")) || []
    const cart_arr = JSON.parse(localStorage.getItem("cart")) || []

    useEffect(() => {
        setdata([...arr])
        setcart([...cart_arr])
    }, [])

    const submit_handle = () => {
        const input = {
            product_name: product_name.current.value,
            product_price: product_price.current.value,
        }
        arr.push(input)
        localStorage.setItem("detail", JSON.stringify(arr))
        setdata([...arr])
    }

    const delete_handler = (ind_) => {
        arr.splice(ind_, 1)
        localStorage.setItem("detail", JSON.stringify(arr))
        setdata([...arr])
        Swal.fire({
            title: "Deleted successfully !",
            text: "You clicked the button!",
            icon: "success"
        })
    }

    const view_handler = (ind_) => {
        setview(arr[ind_])
        setindex(ind_)
    }

    const update_input_handler = (e) => {
        setview({ ...view, [e.target.name]: e.target.value })
    }

    const update_handle = () => {
        arr.splice(index, 1, view)
        localStorage.setItem("detail", JSON.stringify(arr))
        setdata([...arr])
        Swal.fire({
            title: "Updated successfully !",
            text: "You clicked the button!",
            icon: "success"
        })
    }

    const cart_add = (val_, ind_) => {
        cart_arr.push(arr[ind_])
        localStorage.setItem("cart", JSON.stringify(cart_arr))
        setcart([...cart_arr])
    }

    const cart_item_remove = (ind_) => {
        cart_arr.splice(ind_, 1)
        localStorage.setItem("cart", JSON.stringify(cart_arr))
        setcart([...cart_arr])
    }

    if (role === "admin") {
        return (
            <>
                <Navbar />
                <div>
                    <input type="text" name='product_name' placeholder='Product name' ref={product_name} />
                    <input type="number" name='product_price' placeholder='Product price' ref={product_price} />
                    <button type='button' onClick={submit_handle}>Submit</button>
                </div>
                <div>
                    <input type="text" name='product_name' value={view.product_name} onChange={update_input_handler} />
                    <input type="number" name='product_price' value={view.product_price} onChange={update_input_handler} />
                    <button type='button' onClick={update_handle}>Update</button>
                </div>
                {
                    data?.map((val_, ind_) => {
                        return (
                            <>
                                <h1>{val_.product_name}</h1>
                                <h6>${val_.product_price}</h6>
                                <button onClick={() => delete_handler(ind_)}>Delete</button>
                                <button onClick={() => view_handler(ind_)}>View</button>
                            </>
                        )
                    })
                }
            </>
        )
    }
    else {
        return (
            <>
                <Navbar />
                {
                    data?.map((val_, ind_) => {
                        return (
                            <>
                                <h1>{val_.product_name}</h1>
                                <h6>${val_.product_price}</h6>
                                <button type='button' onClick={() => cart_add(val_, ind_)}>Add to cart</button>
                            </>
                        )
                    })
                }
                <h1>=== === === Cart === === ===</h1>
                {
                    cart?.map((val_, ind_) => {
                        total += Number(val_.product_price)
                        return (
                            <>
                                <h1>{val_.product_name}</h1>
                                <h6>${val_.product_price}</h6>
                                <button type='button' onClick={() => cart_item_remove(ind_)}>Remove from cart</button>
                            </>
                        )
                    })
                }
                <h1>Total: ${total}</h1>
            </>
        )
    }
}

export default App17
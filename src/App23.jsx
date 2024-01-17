import Cookies from 'js-cookie'
import React, { useRef } from 'react'

const App23 = () => {
    const user = useRef()
    const password = useRef()
    const save_cookies = () => {
        Cookies.set("User",user.current.value)
        Cookies.set("Password",password.current.value)
    }
  return (
    <>
    <input name="user" ref={user}/>
    <input name="password" ref={password}/>
    <button onClick={save_cookies}>Cookie Save</button>
    <h1>Hello!!! {Cookies.get("User")}</h1>
    </>
  )
}

export default App23
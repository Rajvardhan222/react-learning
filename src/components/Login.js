import React, { useContext, useState } from 'react'
import n from '../context/UserContextProvider'
import my from '../context/UserContext'

function Login() {
    let [userName,setUserName] = useState("")
    let [password,setpassword] = useState("")

    let {setUser} = useContext(n)

    let handleSubmit =() => {
        setUser({userName,password})
    }
  return (
    <div>
      <h2>Login</h2>
      <input type='text' 
      value={userName}
      onChange={(e)=> setUserName(e.target.value)}
      placeholder='username' ></input>
      <input type='text' 
       value={password}
       onChange={(e)=> setpassword(e.target.value)}
      placeholder='password' ></input>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login

import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import Swal from 'sweetalert2';
function Login() {
const navigate=useNavigate()
const[username,setUasername]=useState("")
const [password,setPassword]=useState("")
let apiUrl="https://68219a91259dad2655afc3cc.mockapi.io/api/users/user"
const loginuser=()=>{
axios.get(apiUrl)
.then((res)=>{
    const user=res.data
const finduser=user.find((user)=>user.username===username&&user.password===password)
if(finduser){
 Swal.fire("login successfully !")
localStorage.setItem("user_key",username)
navigate("/home")
}else{
    Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "username or password is invalid"  
          });

    return
}

    console.log(res.data)
}).catch((err)=>{
    console.log(err)
})
}
const switchintoSignup=()=>{
  navigate("/signup")
}
  return (
  <>
<div className="min-h-screen flex items-center justify-center bg-[#fff0f3] py-10 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-[#ff69a0] mb-6">Login to Your Account</h2>

        <div className="flex flex-col gap-4">
          <label className="text-sm font-medium">Username</label>
          <input
            value={username}
            onChange={(e) => setUasername(e.target.value)}
            type="text"
            placeholder="Enter username"
            className="border p-2 rounded outline-none focus:ring-2 focus:ring-pink-300"
          />

          <label className="text-sm font-medium">Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Enter password"
            className="border p-2 rounded outline-none focus:ring-2 focus:ring-pink-300"
          />

          <button
            onClick={loginuser}
            className="bg-[#ff69a0] hover:bg-[#ff4d8b] text-white font-medium py-2 mt-4 rounded transition duration-300"
          >
            Login
          </button>
            <h1>Don't have an account? <a onClick={switchintoSignup} className='underline hover:no-underline cursor-pointer'>Create Account</a></h1>
        </div>
      </div>
    </div>
  </>
  )
}

export default Login
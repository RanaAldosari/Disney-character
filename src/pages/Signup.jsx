// import React, from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import Login from './Login'
function Signup() {
    const[username,setUsername]=useState("")
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const[confirmPass,setConfirmPass]=useState("")

let apiUrl="https://68219a91259dad2655afc3cc.mockapi.io/api/users/user"


const navigate = useNavigate();

const saveuserInfo=()=>{

if(password!==confirmPass){
alert("password not match!")
return
}

if(password.length<6){
    alert("password must be more than 6 characters")
}
if(username===""||password===""||confirmPass===""||email===""){
alert("filed is empety")
return;
}

if(username.length<=3){
alert("username must be more than 3 characters")
return
}

if (!email.includes("@") || !email.includes(".com")) {
      alert("Invalid email format.");
      return;
    }

 axios.post(apiUrl,{
username,
email,
password
 })
    .then((res)=>{
        console.log(res.data)
        alert("create account successfully!")
navigate("/login")
  })
    .catch((err)=>{
        console.log("there is an error",err)
    })
}
const switchintoLogin=()=>{
    navigate("/login")
}
return (
    <>
   <div className="min-h-screen flex items-center justify-center bg-[#fff0f3] py-10 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-[#ff69a0] mb-6">Create an Account</h2>

        <div className="flex flex-col gap-4">
          <label className="text-sm font-medium">Username</label>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            placeholder="Enter username"
            className="border p-2 rounded outline-none focus:ring-2 focus:ring-pink-300"
          />

          <label className="text-sm font-medium">Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="example1@gmail.com"
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

          <label className="text-sm font-medium">Confirm Password</label>
          <input
            value={confirmPass}
            onChange={(e) => setConfirmPass(e.target.value)}
            type="password"
            placeholder="confirm password"
            className="border p-2 rounded outline-none focus:ring-2 focus:ring-pink-300"
          />

          <button
            onClick={saveuserInfo}
            className="bg-[#ff69a0] hover:bg-[#ff4d8b] text-white font-medium py-2 mt-4 rounded transition duration-300"
          >
            Create Account
          </button>
          <h1>Already you have an account? <a onClick={switchintoLogin} className='underline hover:no-underline cursor-pointer'>Login</a></h1>
        </div>
      </div>
    </div>


    {/*  */}
    </>
  )
}

export default Signup
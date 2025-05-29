import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import Signup from './Signup'
import Swal from 'sweetalert2';
function Home() {
    const[charName,setCharName]=useState("")
    const [charImage,setCharImage]=useState("")
    const[gender,setGender]=useState("")
    const[showAllPost,setAhowAllPost]=useState([])
let apiUrl="https://68219a91259dad2655afc3cc.mockapi.io/api/users/user"


let navigate = useNavigate();
// switch to login
const uploadInfoform=()=>{
Swal.fire("you need to login");
navigate("/signup")
}

useEffect(()=>{
axios.get(apiUrl)
.then((res)=>{
        setAhowAllPost(res.data)
        console.log(res.data)
        })
        .catch((err)=>{
        console.log(err)
        })
},[])
return (
    <>
    {/* form-info */}
   <div className='min-h-screen bg-[#fff0f3] flex flex-col items-center py-10'>

            <div className='bg-white shadow-lg rounded-lg p-6 w-full max-w-md'>
                <h2 className="text-center text-xl font-bold mb-4 text-[#ff69a0]">Create Your Character</h2>
<input  className='w-full border rounded p-2 text-sm mb-3' value={charName} onChange={(e) => { setCharName(e.target.value) }} type="text"placeholder='Enter your character name...'/>
<input  value={charImage} onChange={(e) => { setCharImage(e.target.value) }} className='w-full border rounded p-2 text-sm mb-3'type="text" placeholder='Enter image URL...'/>
                <div className='flex items-center gap-4 mb-4'>
                    <label className='flex items-center gap-1'>
<input type="radio" name='gender' value="Femal" checked={gender === "Femal"} onChange={(e) => { setGender(e.target.value) }}/>Female
                    </label>
                    <label className='flex items-center gap-1'>
                        <input type="radio" name='gender' value="Male" checked={gender === "Male"} onChange={(e) => { setGender(e.target.value) }}/>Male
                    </label>
                </div>
                <button onClick={uploadInfoform} className='w-full bg-[#ff69a0] text-white py-2 rounded hover:bg-pink-600 transition'> Upload</button>
            </div>

            <div className="w-full max-w-4xl mt-10">
                <h1 className='text-center text-2xl font-bold text-gray-700 mb-6'>All Characters</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {showAllPost.map((item) => (
                        <div key={item.id} className='bg-white shadow rounded-lg p-4 flex flex-col items-center text-center'>
                            <img src={item.charImage} alt="character" className='w-24 h-24 rounded-full object-cover mb-3 border-2 border-pink-300'/>
                            <h2 className='text-lg font-semibold text-gray-800'>{item.charName}</h2>
                            <p className='text-sm text-gray-600'>{item.gender}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </>
  )
}

export default Home
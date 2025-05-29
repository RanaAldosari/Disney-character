import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2';
import { CiSearch } from "react-icons/ci";
function Main() {
    const[charName,setCharName]=useState("")
    const [charImage,setCharImage]=useState("")
    const[gender,setGender]=useState("")
    const[uploadInfo,setUploadInfo]=useState(null)
    const[showAllPost,setAhowAllPost]=useState([])
    const [search, setSearch] = useState("")

let apiUrl="https://68219a91259dad2655afc3cc.mockapi.io/api/users/user"


// search

useEffect(()=>{
const searchBtn = showAllPost.filter((item) =>
      item.charName.toLowerCase().includes(search.toLowerCase())
    )
    if(searchBtn.length===0){
        Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "No character found!",
    });
    }
    
},[search,showAllPost])


// upload to pg&db
let user= localStorage.getItem("user_key")
const uploadInfoform=()=>{
if (charName.trim() === "" || charImage.trim() === "" || gender === "") {
   Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Please fill all fields",
    });
    // alert("Please fill all fields")
    return;
  }

setUploadInfo({
    name:charName,
    image:charImage,
    gender:gender,
    username:user
})
 axios.post(apiUrl,{
        charName:charName,
        charImage:charImage,
        gender:gender,
        username:user
    })
    .then((res)=>{
        console.log(res.data)
        setAhowAllPost((post)=>[...post,res.data])
        setCharName("");
setCharImage("");
setGender("");
    })
    .catch((err)=>{
        console.log("there is an eroor",err)
    })
     Swal.fire("upload Success!")
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

// delete post
const deleteBtn=(id)=>{
    axios.delete(`${apiUrl}/${id}`)
    .then(()=>{
        setAhowAllPost((post)=>post.filter(post=>post.id!==id))
         Swal.fire("post delete successfully")
    })
    .catch((err)=>{
        console.log(err)
    })
}
return (
    <>
   <div className="min-h-screen bg-[#fff0f3] p-6">
{/* search */}
      <div className="flex justify-center mb-6 relative max-w-md mx-auto">
        <input
          className='w-full border border-pink-300 rounded-full px-4 py-2 pl-10 focus:outline-none focus:ring-2 focus:ring-pink-300'
          type="text"
          value={search}
  onChange={(e) => setSearch(e.target.value)}
          placeholder='Search...'
        />
        <CiSearch className='absolute top-2.5 left-3 text-pink-400 text-xl' />
      </div>

{/* upload-form */}
      <div className="bg-white max-w-md mx-auto p-6 rounded-lg shadow-md mb-10">
        <h2 className='text-xl font-bold text-center text-[#ff69a0] mb-4'>Upload Character</h2>
        <input className='w-full border rounded p-2 mb-3' value={charName} onChange={(e) => setCharName(e.target.value)} type="text"placeholder='Character name...'/>
        <input value={charImage} onChange={(e) => setCharImage(e.target.value)} className='w-full border rounded p-2 mb-3' type="text" placeholder='Image URL...'/>
        <div className="flex gap-4 mb-4">
          <label className="flex items-center gap-2">
<input type="radio" name='gender' value="Femal" checked={gender === "Femal"} onChange={(e) => setGender(e.target.value)}/>Female
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              value="Male"
              checked={gender === "Male"}
              onChange={(e) => setGender(e.target.value)}
              name='gender'
            />
            Male
          </label>
        </div>
        <button
          onClick={uploadInfoform}
          className='w-full bg-[#ff69a0] text-white py-2 rounded hover:bg-[#ff4d8b] transition'
        >
          Upload
        </button>
      </div>


      {uploadInfo && (
        <div className="bg-white max-w-md mx-auto p-4 rounded shadow mb-8 text-center">
          <h1 className='text-lg font-semibold text-gray-700'>{uploadInfo.name}</h1>
          <img src={uploadInfo.image} alt="preview" className='w-24 h-24 mx-auto rounded-full my-2 object-cover border-2 border-pink-300' />
          <h1 className='text-sm text-gray-600'>{uploadInfo.gender}</h1>
        </div>
      )}
{/* showAll */}
      <h1 className='text-2xl text-center font-bold text-gray-700 mb-6'>All Characters</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {searchBtn.map((item) => (
          <div key={item.id} className='bg-white p-4 rounded shadow flex flex-col items-center text-center'>
            <img
              src={item.charImage}
              alt="character"
              className='w-24 h-24 rounded-full object-cover border-2 border-pink-300 mb-2'
            />
            <h2 className='text-lg font-semibold text-gray-800'>{item.charName}</h2>
            <p className='text-sm text-gray-600'>{item.gender}</p>
            {item.username === user && (
              <button
                onClick={() => deleteBtn(item.id)}
                className='mt-3 px-4 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition'
              >
                Delete
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
    </>
  )
}

export default Main
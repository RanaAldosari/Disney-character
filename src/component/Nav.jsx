import React,{useState} from 'react'
import { useNavigate } from 'react-router'
import { CiMenuFries } from "react-icons/ci";
function Nav() {
   const [menu, setMenu] = useState(false);
  let navigate=useNavigate()

  const switchintoLogin=()=>{
    navigate("/login")
  }
  const switchintoSignup=()=>{
    navigate("/signup")
  }
  return (
    <>
    <div className='flex justify-between bg-[#fff0f3] border-b '>
      <div className='p-5'>
      <h1 className=' lg:text-[1.3rem] font-bold'>Disney Characters</h1>
      </div>
      <div className='hidden  p-5 lg:flex gap-2 lg:gap-5'>
        <button onClick={switchintoLogin} className='border px-2 rounded text-[1.2rem] hover:duration-500 delay-75 hover:bg-pink-700 hover:text-white'>Login</button>
        <button onClick={switchintoSignup} className='border px-2 rounded text-[1.2rem] hover:duration-500 delay-75 hover:bg-pink-600 bg-[#ff69a0] text-white'>Sign up</button>
      </div>


<div className='lg:hidden text-2xl text-pink-600 p-4 cursor-pointer relative'>
  <h1 onClick={()=>setMenu(!menu)}><CiMenuFries /></h1>
{menu&&(
<div className='absolute right-0  mt-2 w-100 bg-white border rounded shadow-md flex flex-col'>
<button onClick={switchintoLogin} className='px-4 py-2 text-[1rem] text-left border-b border-gray-600'>Login</button>
<button onClick={switchintoSignup} className='px-4 py-2 text-[1rem] text-left'>Signup</button>
</div>
)}

</div>

    </div>
    </>
  )
}

export default Nav
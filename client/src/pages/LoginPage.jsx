import React, { useState } from 'react'
import assets from '../assets/assets'

const LoginPage = () => {
  const [currState, setCurrState] = useState("Sign up");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [bio, setBio] = useState("");
  const [isDataSubmitted, setIsDataSubmitted] = useState(false);
  return (
    <div className='min-h-screen bg-cover bg-center flex items-center justify-center gap-8 sm:justify-evenly max-sm:flex-col backdrop-blur-2xl'>
        {/* ---------- Left ------------ */}
        <img src={assets.logo_big} alt="" className='w-[min(30vw, 250px)]' />
        {/* ---------- Right ------------ */}
        <form className="border-2 bg-white/8 text-white border-gray-500 p-6 flex flex-col gap-6 rounded-lg shadow-lg">
          <h2 className='font-medium text-2xl flex justify-between items-center'>
            {currState}
            <img src={assets.arrow_icon} alt="" className='w-5 cursor-pointer' />
          </h2>
          {currState === "Sign up" && !isDataSubmitted && (
            <input type="text" onChange={e=>setFullName(e.target.value)} value={fullName} className='p-2 border border-gray-500 rounded-md focus:outline-none' placeholder='Full Name' required />
          )}
          {!isDataSubmitted && (
            <>
              <input type="email" placeholder='Email Address' onChange={e=>setEmail(e.target.value)} value={email} className='p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500' required/>
              <input type="password" placeholder='Password' onChange={e=>setPassword(e.target.value)} value={password} className='p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500' required/>
            </>
          )}
          {currState === "Sign up" && isDataSubmitted && (
            <textarea onChange={e=>setBio(e.target.bio)} value={bio} rows={4} className='p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500' placeholder='Provide a short bio...' required></textarea>
          )}
          <button type='submit' className='py-3 bg-gradient-to-r from-purple-400 to-violet-600 text-white rounded-md cursor-pointer'>
            {currState === "Sign up" ? "Create Account": "Login Now"}
          </button>

          <div className='flex items-center gap-2 text-sm text-gray-500'>
            <input type="checkbox" />
            <p>Agree to the terms of use & privacy policy.</p>
          </div>

          <div className='flex flex-col gap-2'>
            {currState === 'Sign up' ?(
              <p onClick={()=>{setCurrState("Login"); setIsDataSubmitted(false)}} className='text-sm text-gray-600'>Already have an account? <span className='font-medium text-violet-500 cursor-pointer'>Login here</span></p>
            ):(
              <p onClick={()=>{setCurrState("Sign up");}} className='text-sm text-gray-600'>Create an account <span className='font-medium text-violet-500 cursor-pointer'>Click here</span></p>
            )}
          </div>
        </form>
    </div>
  )
}

export default LoginPage
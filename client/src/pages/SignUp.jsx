// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from 'react-router-dom'


export default function SignUp() {
  return (
    <div className='p-3 max-w-lg mx-auto'> 
      <h1 className='text-3xl text-center font-semibold my-7'>SignUp</h1>
      <form action="" className='flex flex-col gap-4'>
        <input type="text" placeholder='UserName' className='border p-3 rounded-lg' id='username' />
        <input type="email" placeholder='E-mail' className='border p-3 rounded-lg' id='email' />
        <input type="password" placeholder='Password' className='border p-3 rounded-lg' id='password ' />
        <button className='bg-blue-600 text-white p-2 rounded-xl hover:bg-blue-500 hover:text-black uppercase'>Sign Up</button>
      </form>
      <div className='flex gap-2 mt-4'> 
        <p>Have an account?</p>
        <Link to={"/sign-in"}>
        <span className='text-blue-600'>Sign in</span>
        </Link>
      </div>
    </div>
  )
}

// eslint-disable-next-line no-unused-vars
import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'
export default function Header() {
    return (
        <header className='bg-stone-200 shadow-md'>
            <div className='flex justify-between items-center max-w-6xl mx-auto p-2'>
                <Link to='/'>
                    <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
                        <span className='text-slate-500'>Dream</span>
                        <span className='text-slate-700'>Estate</span>
                    </h1>
                </Link>
                <form className='bg-stone-100 p-2 rounded-lg  flex items-center w-24 sm:w-64'>
                    <input type="text" placeholder='search...' className='bg-transparent focus:outline-none' />
                    <FaSearch className='text-stone-600'></FaSearch>
                </form>

                <ul className='flex gap-4'>
                    <Link to='/'><li className='hidden sm:inline text-stone-700 hover:underline'>Home</li></Link>
                    <Link to='About'><li className='hidden sm:inline text-stone-700 hover:underline'>About us</li></Link>
                    <Link to='Sign-in'><li className=' text-stone-700 hover:underline'>Sign In</li></Link>
                </ul>
            </div>

        </header>
    )
}

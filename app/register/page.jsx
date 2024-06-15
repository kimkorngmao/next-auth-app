"use client"
import React, { useState } from 'react'
import axios from 'axios';
import Link from 'next/link';

export default function SignUpPage() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const signUpSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/auth/signup', { name, email, password });
            setError('');
            setSuccess('User created successfully. Please login.');
        } catch (error) {
            setSuccess('');
            if(error.response.status === 400){
                setError('User already exists');
            }else{
                setError('Sorry, someting went wrong!');
            }
        }
    }
    return (
        <div>
            <div className='flex items-center justify-center p-6 h-[32rem]'>

                <form onSubmit={signUpSubmit} className='flex flex-col w-full max-w-[300px]'>
                    <h1 className='font-bold text-center'>SIGN UP</h1>
                    { error &&
                        <div className="mt-5 p-2 rounded-md bg-red-100 text-red-500">
                            {error}
                        </div>
                    }
                    { success &&
                        <div className="mt-5 p-2 rounded-md bg-blue-100 text-blue-500">
                            {success}
                        </div>
                    }
                    <input
                        type="text"
                        className='border-2 border-[#F0F0F0] outline-none mt-5 px-4 py-2 rounded text-sm bg-[#FAFAFA] focus:border-black duration-200'
                        placeholder='Name'
                        onChange={e => setName(e.target.value)}
                        required />
                    <input
                        type="text"
                        className='border-2 border-[#F0F0F0] outline-none mt-5 px-4 py-2 rounded text-sm bg-[#FAFAFA] focus:border-black duration-200'
                        placeholder='Email'
                        onChange={e => setEmail(e.target.value)}
                        required />
                    <input
                        type="password"
                        className='border-2 border-[#F0F0F0] outline-none mt-5 px-4 py-2 rounded text-sm bg-[#FAFAFA] focus:border-black duration-200'
                        placeholder='Password'
                        onChange={e => setPassword(e.target.value)}
                        required />
                    <button
                        type="submit"
                        className='flex items-center justify-center gap-2 border-none outline-none mt-5 px-4 py-2 rounded font-medium text-sm bg-blue-950 text-white'
                    >Sign Up
                        <svg xmlns="http://www.w3.org/2000/svg" className='size-5' fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                    </button>
                    <p className='text-sm mt-5'>Already have an account yet? <Link href="/login" className='text-blue-500'>Sign In</Link></p>
                </form>
            </div>
        </div>
    )
}
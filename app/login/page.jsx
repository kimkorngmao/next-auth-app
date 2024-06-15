"use client"
import React, { useState } from 'react'
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation'
import Link from 'next/link';

export default function SignInPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const signInSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await signIn("credentials", {
                email, password, redirect: false
            })

            if (res.error) {
                setError("Email or password  is incorrect.")
                return;
            }
            router.replace("/");
        } catch (error) {
            setError("Sorry, someting went wrong!")
        }
    }
    return (
        <div>
            <div className='flex items-center justify-center p-6 h-[32rem]'>
                <form onSubmit={signInSubmit} className='flex flex-col w-full max-w-[300px]'>
                    <h1 className='font-bold text-center'>SIGN IN</h1>
                    { error &&
                        <div className="mt-5 p-2 rounded-md bg-red-100 text-red-500">
                            {error}
                        </div>
                    }
                    <input
                        type="text"
                        placeholder='Email'
                        className='border-2 border-[#F0F0F0] outline-none mt-5 px-4 py-2 rounded text-sm bg-[#FAFAFA] focus:border-black duration-200'
                        onChange={e => setEmail(e.target.value)}
                        required />
                    <input
                        type="password"
                        placeholder='Password'
                        className='border-2 border-[#F0F0F0] outline-none mt-5 px-4 py-2 rounded text-sm bg-[#FAFAFA] focus:border-black duration-200'
                        onChange={e => setPassword(e.target.value)}
                        required />
                    <button
                        type="submit"
                        className='flex items-center justify-center gap-2 border-none outline-none mt-5 px-4 py-2 rounded font-medium text-sm bg-blue-950 text-white'
                    >Sign In
                        <svg xmlns="http://www.w3.org/2000/svg" className='size-5' fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                    </button>
                    <p className='text-sm mt-5'>Don’t have an account? <Link href="/register" className='text-blue-500'>Sign Up</Link></p>
                </form>
            </div>
        </div>
    )
}
import React from 'react'
import logo from '../assets'
const Login = () => {
  return (
    <section className='h-screen w-screen bg-dark flex items-center justify-center'>
        <div className='min-h-[345px] w-[300px] bg-white rounded-[20px] p-[20px]'>
            <div className='flex flex-row mb-[20px] justify-evenly items-center'>
                <img src={logo} alt="The Blank Logo" className='w-[32px] h-[32px]' />
                <h1 className='text-black text-[14px] font-bold'>The Blank.eth Chat Messenger</h1>
            </div>
            <form className='flex flex-col gap-y-4'>
                <label htmlFor="email" className='text-black'>Email</label>
                <input id='email' type="email" placeholder='Enter your email' />
                <label htmlFor="password" className='text-black'>Password</label>
                <input id='password' type="password" placeholder='Enter your password' />
                <button type='submit' className='text-black'>Sign in</button>
            </form>

        </div>
    </section>
    )
}

export default Login
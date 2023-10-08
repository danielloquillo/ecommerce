import React from 'react';

const Login = () => {
    return (
        <section className='h-screen flex justify-center items-center'>
      <div>
          <div 
          className="bg-slate-390 border border-slate-100 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-30 relative ">
                <h1 className="text-4xl font-ligh text-center mb-6">LOGIN</h1>
                <form action="">
                <div className='relative my-4'>
                    <input type="text" className='block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-slate-500 focus:outline-none focus:ring-0 focus:text-neutral-950 focus:border-slate-600 peer'placeholder=''/>
                    <label htmlFor=""className='absolute text-sm duration-300 transfrom -translate scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-slate-600 peer-focus:dark:text-slate-500 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:-translate-y-6'>Email </label>
                </div>
                <div className='relative my-4'>
                    <input type="Password"
                    className='block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-slate-500 focus:outline-none focus:ring-0 focus:text-neutral-950 focus:border-slate-600 peer'placeholder=''/>
                    <label htmlFor=""className='absolute text-sm duration-300 transfrom -translate scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-slate-600 peer-focus:dark:text-slate-500 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:-translate-y-6'>Password</label>
                </div>
                <button type='SUBMIT' className='w-full mb-4 text-white mt-6 rounded bg-neutral-900 py-2 hover:bg-neutral-950 transitioncolors duration-300'>SIGN IN</button>
                </form>
           </div>
       </div>
       </section>
    )
};

export default Login;
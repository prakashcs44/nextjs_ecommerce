"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import SocialLogin from '@/components/SocialLogin'
import Button from '@/components/Button';



function page() {

   const [error,setError] = useState<string|null>(null);

  const handleSubmit = async (event:React.SyntheticEvent)=>{
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const email = formData.get("email");
    const password = formData.get("password");
    try{
      await fetch("/api/register",{method:"POST",body:JSON.stringify({email,password,registerMethod:"credentials"})});
      setError(null);
    }
    catch(err:any){
      console.log(err);
       setError(err.message);
    }
   
       
  }

  return (
    <div className='w-fit mx-auto mt-8 border shadow-sm'>
      <h1 className='text-3xl font-semibold text-center py-4'>Sign Up</h1>
      {error&&<p className="text-center text-red-500 px-4">{error}</p>}
      <div className='flex flex-col md:flex-row px-10  py-3 justify-center gap-12'>
      <form onSubmit={handleSubmit} className='flex flex-col items-center gap-8 w-full md:w-[20vw]'>
        <div className='flex flex-col gap-3 w-full '>
          <label htmlFor='email'>Email:</label>
          <input type='email' id = "email" name = "email" className='border-2 outline-none px-2 py-2 focus:border-slate-400'/>
        </div>
        <div className='flex flex-col gap-3 w-full'>
        <label htmlFor='password'>Password:</label>
        <input type='password' id = "password" name = "password" className='border-2 outline-none px-2 py-2 focus:border-slate-400'/>
        </div>

        <Button type = "submit" className=' px-[30%]'>Sign up</Button>

       
      </form>
      
     
      </div>

      <div className='py-4 flex items-center justify-center bg-slate-100'>
        <Link className=" hover:underline" href="/signin">
       Already have an account? sign in
        </Link>
     
      </div>
    </div>
  )
}

export default page

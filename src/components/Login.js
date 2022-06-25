import React from 'react'
import { FaGoogle,FaFacebook,FaTwitter } from 'react-icons/fa';
import { FcGoogle, } from 'react-icons/fc';
import {Link,useNavigate} from "react-router-dom"
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Checkbox } from '@mui/material';
const Login = () => {
  return (

<><div className='bg-[#999] '>
      <div className='h-screen w-full flex justify-center items-center  bg-white text-[#2A2A2A] p-4 '>
 
        <form className='flex flex-col max-w-[600px] shadow-md w-full p-5 md:max-w-[450px] '>
<div className='w-full flex'>
<p className=' inline text-4xl  text-cyan-500 border-b-2 p-1 border-[#2A2A2A] cursor-pointer'>Shop Here</p>
</div>
 
{/*  
        <input type="text" placeholder="Enter your name" className='border-2 my-4 p-2 rounded'></input> */}
     
        <div className='py-2 w-full flex flex-col'>
        <TextField variant='standard' label="Enter email"  ></TextField>
        </div>
        <div className='py-2 w-full flex flex-col'>
        <TextField variant='standard' label="Enter Password"  ></TextField>
        </div>
       
        <div className='py-2 w-full flex flex-col'>
         <Button variant="contained" style={{"backgroundColor":"rgb(6 182 212)",}} className="bg-cyan-500">Login</Button>
         <div className='flex justify-around'>
          <div>
         <Checkbox  /><span className='py-2'>remember me</span>
         </div>
         <div className='flex justify-end text-right py-2'>
           <p className='cursor-pointer'>forgot Password ??</p>
         </div>
         </div>
       
</div>
          <div className='flex w-full py-4 '><hr className=' w-full'/><p className='px-2'>or</p><br/><hr  className='w-full'></hr></div>
          <div className='flex w-full py-2 justify-center items-center'> 
            <FaFacebook className=' mx-2 text-[#4064AC] cursor-pointer hover:scale-125 duration-300 ' size={30}/>
            <FcGoogle className=' mx-2 cursor-pointer hover:scale-125 duration-300'size={30}/>
            <FaTwitter className='  mx-2  cursor-pointer text-[#1DA1F2] hover:scale-125 duration-300' size={30}/>
             </div>
             <p>Create an Account??<a className="text-cyan-500 cursor-pointer ">Signup</a></p>
        </form>
        
       
        </div>
        </div>
        </>

  )
}

export default Login
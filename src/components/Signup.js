import React from 'react'
// #3E95C5 blue #2A2A2A black #999999 background #ef5350
import { FaGoogle,FaFacebook,FaTwitter } from 'react-icons/fa';
import { FcGoogle, } from 'react-icons/fc';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


const Signup = () => {
  return (
  <><div className=' bg-gradient-to-bl from-cyan-500 to ...  flex justify-center shadow-current shadow-2xl'>
      <div className='h-screen w-full flex justify-center items-center max-w-[600px]  text-[#2A2A2A] p-4 '>
 
        <form className='flex flex-col max-w-[450px] bg-white rounded-md lg:max-w-[350px] shadow-md w-full p-5 md:max-w-[400px] '>
<div className='w-full flex'>
<p className=' inline text-4xl  text-cyan-500 border-b-2 p-1 border-[#2A2A2A] cursor-pointer'>Shop Here</p>
</div>
 
{/*  
        <input type="text" placeholder="Enter your name" className='border-2 my-4 p-2 rounded'></input> */}
        <div className='py-2 w-full flex flex-col'>
        <TextField variant='standard' color="secondary" label="Enter username" type='email' ></TextField>
        </div>
        <div className='py-2 w-full flex flex-col'>
        <TextField variant='standard' color="secondary" label="Enter email"  ></TextField>
        </div>
        <div className='py-2 w-full flex flex-col'>
        <TextField variant='standard' color="secondary" label="Enter Password"  ></TextField>
        </div>
        <div className='py-2 w-full flex flex-col'>
        <TextField variant='standard' color="secondary" label="Confirm Password"  ></TextField>
        </div>
        <div className='py-2 w-full flex flex-col'>
         <Button variant="contained" style={{"backgroundColor":"rgb(6 182 212)",}} className="bg-cyan-300">Signup</Button>
        
</div>
          <div className='flex w-full py-4 '><hr className=' w-full'/><p className='px-2'>or</p><br/><hr  className='w-full'></hr></div>
          <div className='flex w-full py-2 justify-center items-center'> 
            <FaFacebook className=' mx-2 text-[#4064AC] cursor-pointer hover:scale-125 duration-300 ' size={30}/>
            <FcGoogle className=' mx-2 cursor-pointer hover:scale-125 duration-300'size={30}/>
            <FaTwitter className='  mx-2  cursor-pointer text-[#1DA1F2] hover:scale-125 duration-300' size={30}/>
             </div>
             <p>Already Have an Account??<a className="text-cyan-500 cursor-pointer ">Login</a></p>
        </form>
        
       
        </div>
        </div>
        </>
   
  )
}

export default Signup
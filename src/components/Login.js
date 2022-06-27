import React from 'react'
import { FaGoogle,FaFacebook,FaTwitter } from 'react-icons/fa';
import { FcGoogle, } from 'react-icons/fc';
import {Link,useNavigate} from "react-router-dom"
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Checkbox } from '@mui/material';
import {auth,db} from '../components/firebase/config'
import { Typography } from '@mui/material';

import  { useState,useEffect} from 'react'
const Login = () => {

  const[email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [errorMsg, setErrorMsg]=useState('');
  const [successMsg, setSuccessMsg]=useState('');
  const history=useNavigate();
  const handleLogin=(e)=>{
    e.preventDefault();
    // console.log(email, password);
    auth.signInWithEmailAndPassword(email,password).then(()=>{
        setSuccessMsg('Login Successfull. You will now automatically get redirected to Home page');
        setEmail('');
        setPassword('');
        setErrorMsg('');
        setTimeout(()=>{
            setSuccessMsg('');
            history('/home');
        },3000)
    }).catch(error=>setErrorMsg(error.message));
}
  return (

    <>
    <div className=' bg-gradient-to-b from-cyan-500 to ...  flex justify-center shadow-current shadow-2xl'>
    <div className='h-screen w-full flex justify-center items-center max-w-[900px]  text-[#2A2A2A] p-4 '>

      <form className='flex flex-col max-w-[450px] bg-white rounded-md lg:max-w-[350px] shadow-md w-full p-5 md:max-w-[400px] ' onSubmit={handleLogin}>
      {successMsg&&<>
                <Typography color="success">{successMsg}</Typography>
                <br></br>
            </>}
<div className='w-full flex'>
<p className=' inline text-4xl  text-cyan-500 border-b-2 p-1 border-[#2A2A2A] cursor-pointer'>Shop Here</p>
</div>

{/*  
      <input type="text" placeholder="Enter your name" className='border-2 my-4 p-2 rounded'></input> */}
     
     <div className='py-2 w-full flex flex-col'>
        <TextField variant='standard' color="secondary" label="Enter email" type="email"onChange={(e)=>{setEmail(e.target.value)}} value={email} ></TextField>
        </div>
        <div className='py-2 w-full flex flex-col'>
        <TextField variant='standard' color="secondary" label="Enter Password" onChange={(e)=>{setPassword(e.target.value)}} value={password} ></TextField>
        </div>
<div className='py-2 w-full flex flex-col'> 
<Button variant="contained" style={{"backgroundColor":"rgb(6 182 212)",}} className="bg-cyan-500" type='submit'>Login</Button> 
<div className='flex justify-between'> <div>
   <Checkbox color='primary'/><span className='py-2'>rememberme</span> 
   </div>
 <div className='flex justify-end text-right py-2'>
   <p className='cursor-pointer'>forgot Password ??</p> </div> </div> </div>
        <div className='flex w-full py-4 '><hr className=' w-full'/><p className='px-2'>or</p><br/><hr  className='w-full'></hr></div>
        <div className='flex w-full py-2 justify-center items-center'> 
          <FaFacebook className=' mx-2 text-[#4064AC] cursor-pointer hover:scale-125 duration-300 ' size={30}/>
          <FcGoogle className=' mx-2 cursor-pointer hover:scale-125 duration-300'size={30}/>
          <FaTwitter className='  mx-2  cursor-pointer text-[#1DA1F2] hover:scale-125 duration-300' size={30}/>
           </div>
           <Link to="/"><p>Dont Have an Account??<a className="text-cyan-500 cursor-pointer ">Signup</a></p></Link>

           {errorMsg&&<>
                <br></br>
                <Typography color="error">{errorMsg}</Typography>                
            </>}
      </form>
      
     
      </div>
      </div>
      </>

  )
}

export default Login
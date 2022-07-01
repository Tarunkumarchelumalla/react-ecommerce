import { TextField,Button } from '@mui/material'
import React from 'react'


function Contact() {
  return (
    <div name='contact' className='w-full bg-cyan-300 flex justify-center text-[#2A2A2A] items-center p-4 shadow-lg shadow-current rounded'>
    <form method='POST' action="https://getform.io/f/3d2a8496-0e38-42c8-8531-88d7bbbab050" className='flex flex-col max-w-[600px] w-full'>
        <div className=''>
            <p className='text-4xl font-bold inline border-b-4 border-[#2A2A2A] '>Contact</p>
            <p className='py-4'> Submit the form this thing works i will be notified</p>
        </div>
    
        <input className='bg-white p-2' type="text" placeholder='Name' name='name' />
        <input className='my-4 p-2 bg-white' type="email" placeholder='Email' name='email' />
        <textarea className='bg-white p-2' name="message" rows="10" placeholder='Message'></textarea>
        <div className='py-4 mx-auto '>
        <Button variant="contained" color="secondary" >submit</Button>
        </div>
    </form>
</div>
  )
}

export default Contact
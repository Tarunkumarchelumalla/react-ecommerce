import { TextField,Button } from '@mui/material'
import React from 'react'


function Contact() {
  return (
    <div name='contact' className='w-full h-screen bg-cyan-300 flex flex-col  p-4 mt-[40px] rounded shadow-md'>
         <div className=''>
                <p className='text-4xl font-bold inline border-b-4 border-[#2A2A2A]'>Contact</p>
                <p className=' py-4'> Submit the form this thing works i will be notified</p>
            </div>
        <form method='POST' action="https://getform.io/f/3d2a8496-0e38-42c8-8531-88d7bbbab050" className='flex flex-col max-w-[600px] w-full'>
           
        
            <input className='bg-white p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-white' type="email" placeholder='Email' name='email' />
            <textarea className='bg-white p-2' name="message" rows="10" placeholder='Message'></textarea>
            <div className='py-2 flex w-full justify-center'><Button  style={{"backgroundColor":"#2A2A2A"}} size="large">Submit</Button>
            </div>
        </form>
    </div>
  )
}

export default Contact
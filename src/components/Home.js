import React from 'react'
import Navbaar from './Navbaar'
import { Button } from '@mui/material'
// style={{"backgroundColor":"rgb(6 182 212)",}}
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';
import Home2 from './Home2';
import Products from './Products';
import Contact from './Contact';
import Footer from './Footer';

function Home() {
  return (
    <>
   
    <div className='h-[100px]'>
  <Navbaar/>
  </div>
  <div></div>
  <div className='flex flex-col  mx-auto h-screen max-w-[900px] px-8 '>
    {/* <div className='text-[#2A2A2A] rounded text-2xl py-2 '>
      <Button  variant="contained" color="secondary" size="large" style={{"backgroundColor":"rgb(103 232 249)","color":"#2A2A2A"}}> Buy here</Button><span className='animate-ping'>.</span>
      </div> */}
      <div className='py-5'>
     <p className='flex w-full text-[#2A2A2A] text-4xl font-extrabold py-2'> Products delivered in 3 days. One time Shop Make it here</p>
     <p className='py-2'>Any thing that you want will be here</p>
     <div className='flex py-4'>
        <div className=''>
        <Button variant="contained" color='secondary'style={{"backgroundColor":"rgb(103 232 249)","color":"#2A2A2A"}}>Order now</Button>
        </div>
        <div className='px-4 '>
        <Button variant="contained" endIcon={<ArrowDownwardOutlinedIcon  className='animate-bounce'/>} color='secondary'style={{"backgroundColor":"rgb(103 232 249)","color":"#2A2A2A"}}> Viewsome</Button>
        </div>
     </div>
    </div>
    <Home2/>
    <Products/>
    <Contact/>
    <Footer/>

    </div>

    
    </>
  )
}

export default Home
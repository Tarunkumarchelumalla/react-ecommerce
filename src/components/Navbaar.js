import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

function Navbaar() {
  const[nav,setNav]=useState(false);
  const handlemenu=()=>setNav(!nav);

  return (

    <div className=' w-full mx-auto h-[50px] px-4 flex bg-white text-[#2A2A2A] m-4  sm:px-8 '>
    <div className='w-full'>
    <p className=' inline text-4xl  text-cyan-500 border-b-2 p-1 border-[#2A2A2A] cursor-pointer sm:text-2xl md:text-4xl'>Shop Here</p>
    </div>
    
    <ul className='hidden sm:flex w-full justify-center rounded py-2 text-white bg-[#2A2A2A] '>
        <li >
        <Button >Home</Button>
        </li>
        <li>
        <Button>About</Button>
        </li>
        <li>
          <Button>  Products</Button>
        
        </li>
        <li className=''>
        <Button  startIcon={ <ShoppingCartOutlinedIcon variant="Outlined" color="primary"/>}></Button>
        </li>
        <li className='' >
      <Button  startIcon={ <AccountCircleOutlinedIcon variant="Outlined" color="primary"/>}> Account</Button>
                       
        </li>
    </ul>
    <ul>

    </ul>
    {/* mobile menu */}
    <div className={!nav ?"hidden":'absolute top-0 m-0 left-0 w-full h-screen bg-[#2A2A2A] flex flex-col justify-center z-[10000000000] items-center text-white'}>
    <ul >
      <li className=' py-4 '>
        <Button style={{"fontSize":"1.5rem",}}>Home</Button>
        </li>
        <li className='py-4'>
        <Button  style={{"fontSize":"1.5rem",}}>About</Button>
        </li>
        <li className='py-4'>
          <Button  style={{"fontSize":"1.5rem",}}>  Products</Button>
        
        </li>
        <li className='py-4'>
        <Button  style={{"fontSize":"1.5rem",}} startIcon={ <ShoppingCartOutlinedIcon variant="Outlined" color="primary" style={{"fontSize":"1.5rem",}}/>}> cart</Button>
     
        </li>
        <li className='py-4' >
      <Button  style={{"fontSize":"1.5rem",}} startIcon={ <AccountCircleOutlinedIcon variant="Outlined" color="primary"/>}> Account</Button>
                       
        </li>
    </ul>
    </div>
     <ul className='flex align-middle  sm:hidden'>
      <li className='z-[100000000001] bg-[#2A2A2A] p-2'> 
         {!nav ? <MenuIcon  onClick={handlemenu} variant="Outlined" color="primary"/>:<CloseIcon onClick={handlemenu} variant="Outlined" color="primary"/>}
       
      </li>
     </ul>

    
    </div>
  
  )
}

export default Navbaar
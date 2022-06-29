import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import {Link} from 'react-router-dom';
import {auth,db} from '../components/firebase/config'
import {useNavigate} from 'react-router-dom'
function Navbaar({username}) {

  const history=useNavigate();
  const handleLogout=()=>{
    auth.signOut().then(()=>{
        history('/');
    })
}
  const[nav,setNav]=useState(false);
  const handlemenu=()=>setNav(!nav);

  return (

    <div className=' w-full mx-auto h-[50px] px-4 flex bg-white text-[#2A2A2A] m-4  sm:px-8 '>
    <div className='w-full'>
    <p className=' inline text-4xl  text-cyan-500 border-b-2 p-1 border-[#2A2A2A] cursor-pointer sm:text-2xl md:text-4xl'>Shop Here</p>
    </div>
    
    <ul className='hidden sm:flex w-full justify-center rounded py-2 text-white bg-[#2A2A2A] '>
        <li >
        <Button onClick={()=>history("/Home")}>Home</Button>
        </li>
        <li>
        <Button>About</Button>
        </li>
        <li>
        <Button   onClick={handleLogout}>Logout</Button>
        
        </li>
        <li className=''>
        <Button  startIcon={ <ShoppingCartOutlinedIcon variant="Outlined" color="primary"/>} onClick={()=>history("/Cart")}></Button>
        </li>
        <li className='' >
          {username&&<>     <Button  startIcon={ <AccountCircleOutlinedIcon variant="Outlined" color="primary"/>}>{username}</Button></>
}
    {!username&&
    <Link to="/"><Button  startIcon={ <AccountCircleOutlinedIcon variant="Outlined" color="primary"/>}>Signup/login</Button></Link>
    }
                       
        </li>
    </ul>
    <ul>

    </ul>
    {/* mobile menu */}
    <div className={!nav ?"hidden":'absolute top-0 m-0 left-0 w-full h-screen bg-[#2A2A2A] flex flex-col justify-center z-[10000000000] items-center text-white'}>
    <ul >
      <li className=' py-4 '>
        <Button style={{"fontSize":"1.5rem",}} onClick={()=>history("/Home")}>Home</Button>
        </li>
        <li className='py-4'>
        <Button  style={{"fontSize":"1.5rem",}}>About</Button>
        </li>
        <li className='py-4'>
          <Button  style={{"fontSize":"1.5rem",}} onClick={handleLogout}>Logout</Button>
        
        </li>
        <li className='py-4'>
        <Button  style={{"fontSize":"1.5rem",}} startIcon={ <ShoppingCartOutlinedIcon variant="Outlined" color="primary" style={{"fontSize":"1.5rem",}}/>} onClick={()=>history("/Cart")}> cart</Button>
     
        </li>
        <li className='py-4' >
        {username&&<>     <Button  style={{"fontSize":"1.5rem",}} startIcon={ <AccountCircleOutlinedIcon variant="Outlined" color="primary"  style={{"fontSize":"1.5rem",}}/>}>{username}</Button></>
}
    {!username&&<>
    <Button  style={{"fontSize":"1.5rem",}}  startIcon={ <AccountCircleOutlinedIcon variant="Outlined" color="primary"  style={{"fontSize":"1.5rem",}}/>}>Signup/login</Button></>
    }
                       
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
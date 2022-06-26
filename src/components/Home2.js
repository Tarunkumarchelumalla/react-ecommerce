import ShoppingCartOutlined from '@mui/icons-material/ShoppingCartOutlined'
import { Typography } from '@mui/material'
import {CardMedia,CardContent,CardActions,Button,Card} from '@mui/material'
import { FaTruck, FaPhoneSquareAlt,FaThumbsUp,FaLockOpen,FaLock} from 'react-icons/fa'
import React from 'react'
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
function Home2() {
  return (
    <div name="about" className='flex flex-col  w=full shadow-md rounded bg-cyan-300 mx-auto justify-center'>
         <div className='px-8 flex '>
         <p className=' inline text-2xl  text-[#2A2A2A] border-b-2 p-1 border-[#2A2A2A] cursor-pointer'>Our services</p></div>
        <div className='grid grid-cols-1 px-5 py-5 sm:grid-cols-4 gap-8'>
             <div>
             <Card sx={{ maxWidth: 205 }}>
                <div className='flex justify-center '>
         <FaTruck size={40}/>
         </div>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Fast Delivery
        </Typography>
        <Typography variant="body2" color="text.secondary">
           Enjoy the fast delivery with prime
        </Typography>
      </CardContent>
      
    </Card>
  
        </div>
        <div>
             <Card sx={{ maxWidth: 205 }}>
                <div className='flex justify-center '>
         <FaPhoneSquareAlt size={40}/>
         </div>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         Support 
        </Typography>
        <Typography variant="body2" color="text.secondary">
           Enjoy the fast delivery with prime
        </Typography>
      </CardContent>
      
    </Card>
  
        </div>
        <div>
             <Card sx={{ maxWidth: 205 }}>
                <div className='flex justify-center '>
         <FaThumbsUp size={40}/>
         </div>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         Customer 
        </Typography>
        <Typography variant="body2" color="text.secondary">
           Enjoy the fast delivery with prime
        </Typography>
      </CardContent>
      
    </Card>
  
        </div>
        <div>
             <Card sx={{ maxWidth: 205 }}>
                <div className='flex justify-center '>
         <FaLock size={40}/>
         </div>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Secure
        </Typography>
        <Typography variant="body2" color="text.secondary">
           Enjoy the fast delivery with prime
        </Typography>
      </CardContent>
      
    </Card>
  
        </div>

         </div>
    </div>
  )
}

export default Home2
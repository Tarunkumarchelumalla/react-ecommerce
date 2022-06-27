import React from 'react'
import {CardMedia,CardContent,CardActions,Button,Card} from '@mui/material'
import { Typography } from '@mui/material'
import ShoppingCartOutlined from '@mui/icons-material/ShoppingCartOutlined'
import { Data } from './Data'

function Products() {
 
  return (
    <>
    <div className='w-full mt-4 flex flex-col py-2 justify-around  px-4'>
        <div>
           <p className='text-cyan-500 text-4xl inline border-b-4 border-[#2A2A2A]'> Products</p>

        </div>
     
       
        <div className='grid grid-cols-1 gap-8 py-8 sm:grid-cols-3  w-full '>
        {Data.map(({ title, price, description,image }) => (
            <div className='flex flex-col justify-around rounded w-full   px-4 shadow-lg'>
           
                <div className='' >
              <img src={image} width="35%" />
               
              </div>
              <div className=''>
              <p className='py-2 t ' style={{"fontSize":"12px"}}>{description}</p>
              </div>
              <div>
              <p className=' ' >Price: ₹{price}</p>
              </div>
              <div className='flex justify-center py-2'>
              <Button variant="contained" color="primary" style={{"backgroundColor":"rgb(103 232 249)","color":"#2A2A2A"}}> Add to card</Button>
              </div>
            </div>

            )
            )


            }
            </div>
           
              
            
              </div>
              {/* s */}
                 </>

  )
}

export default Products
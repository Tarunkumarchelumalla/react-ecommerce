import React from 'react'
import {CardMedia,CardContent,CardActions,Button,Card} from '@mui/material'
import { Typography } from '@mui/material'
import ShoppingCartOutlined from '@mui/icons-material/ShoppingCartOutlined'
import { Data } from './Data'

function Products() {
    const description="Use both ground coffee and k-cup pods. Multiple brew sizes: brew an 8, 10, ";
  return (
    <>
    <div className='w-full mt-4 flex flex-col py-2 justify-around shadow-md px-4'>
        <div>
           <p className='text-cyan-500 text-4xl inline border-b-4 border-[#2A2A2A]'> Products</p>

        </div>
     
       
        <div className='grid grid-cols-2 gap-8 py-8 sm:grid-cols-4  w-full  '>
        {Data.map(({ title, price, avatarUrl,imageUrl }) => (
            <div className='flex flex-col justify-around h-[300px] basis-0 rounded w-[190px]'>
            <div className=' shadow-md  '>
                <div className='h-[100px]' >
              <img src={imageUrl} width="50%" />
              </div>
              <p className='text-[12px] h-[100px]'>{description}</p>
              <p className='p h-[30px]' >Price:{price}</p>
              <div className='flex justify-center h-[40px]'>
              <Button variant="contained" color="primary"> Add to card</Button>
              </div>
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
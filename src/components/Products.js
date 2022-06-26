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
     
       
        <div className='grid grid-cols-1 gap-8 py-8 sm:grid-cols-3  w-full'>
        {Data.map(({ title, price, avatarUrl,imageUrl }) => (
            <div className='flex flex-col   basis-0 rounded w-full  px-4'>
           
                <div className='h-[100px] ' >
              <img src={imageUrl} width="35%" />
               
              </div>
              <div className='h-[100px]'>
              <p className='py-2'>{description}</p>
              </div>
              <div>
              <p className=' ' >Price:{price}</p>
              </div>
              <div className='flex justify-center'>
              <Button variant="contained" color="primary"> Add to card</Button>
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
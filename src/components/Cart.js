import React from 'react'
import {CardMedia,CardContent,CardActions,Button,Card} from '@mui/material'
function Cart({cart}) {
  return (
    <>
    {cart.map((curr) => (
            <div className='flex flex-col justify-around rounded w-full   px-4 shadow-lg ' key={curr.id}>
               
                <div className=''   >
              <img  src={curr.image}width="35%" />
               
              </div>
              <div className=''>
              <p className='py-2 t '   style={{"fontSize":"12px"}}>{curr.description}</p>
              </div>
              <div>
              <p className=' '    >Price: ₹{curr.price}</p>
              </div>
              <div className='flex justify-center py-2'>
              <Button   variant="contained" color="primary"  style={{"backgroundColor":"rgb(103 232 249)","color":"#2A2A2A"}}> Add to card</Button>
              </div>
            </div>

            )
            )


            }
          
    </>
  )
}

export default Cart
import React, { useState } from 'react'
import {CardMedia,CardContent,CardActions,Button,Card} from '@mui/material'
import { Typography } from '@mui/material'
import ShoppingCartOutlined from '@mui/icons-material/ShoppingCartOutlined'
import { Data } from './Data'

function Products({handleclick}) {
  const datsda=[1,2,3,4,5];

const [cartid,setCartid]=useState("");
 
  return (
    <>
    <div className='w-full mt-4 flex flex-col py-2 justify-around  px-4'>
        <div>
           <p className='text-cyan-500 text-4xl inline border-b-4 border-[#2A2A2A]'> Products</p>

        </div>
        <div className='border-b-4 text-xl text-cyan-500 inline mx-auto py-4 border-[#2A2A2A]'>
        men's clothing
            </div>
     
       
        <div className='grid grid-cols-1 gap-8 py-8 sm:grid-cols-3  w-full '>
        
        {Data.filter((currElement)=>
          currElement.category==="men's clothing"

        
        ).map((curr) => (
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
              <Button   variant="contained" color="primary" onClick={()=>handleclick(curr)} style={{"backgroundColor":"rgb(103 232 249)","color":"#2A2A2A"}}> Add to card</Button>
              </div>
            </div>

            )
            )


            }
            </div>
            <div className='border-b-4 text-xl text-cyan-500 inline mx-auto py-4 border-[#2A2A2A]'>
                  jewelery
            </div>
            <div className='grid grid-cols-1 gap-8 py-8 sm:grid-cols-3  w-full '>
        
        {Data.filter(currElement=>
          currElement.category==="jewelery"

        
        ).map(curr => (
            <div className='flex flex-col justify-around rounded w-full   px-4 shadow-lg'  key={curr.id}>
               
                <div className='' >
              <img  src={curr.image} width="35%" />
               
              </div>
              <div className=''>
              <p className='py-2 t '  style={{"fontSize":"12px"}}>{curr.description}</p>
              </div>
              <div>
              <p className=' ' >Price: ₹{curr.price}</p>
              </div>
              <div className='flex justify-center py-2'>
              <Button variant="contained" color="primary" onClick={()=>handleclick(curr)} style={{"backgroundColor":"rgb(103 232 249)","color":"#2A2A2A"}}> Add to card</Button>
              </div>
            </div>

            )
            )


            }
            </div>
            <div className='border-b-4  text-cyan-500 text-xl  border-[#2A2A2A]inline mx-auto py-4 border-[#2A2A2A]'>
              
                  Electronic
            </div>
            <div className='grid grid-cols-1 gap-8 py-8 sm:grid-cols-3  w-full '>
                
        {Data.filter(currElement=>
          currElement.category==="electronics"

        
        ).map(curr => (
            <div className='flex flex-col justify-around rounded w-full   px-4 shadow-lg'  key={curr.id}>
               
                <div className='' >
              <img  src={curr.image} width="35%" />
               
              </div>
              <div className=''>
              <p className='py-2 t '  style={{"fontSize":"12px"}}>{curr.description}</p>
              </div>
              <div>
              <p className=' ' >Price: ₹{curr.price}</p>
              </div>
              <div className='flex justify-center py-2'>
              <Button variant="contained" color="primary"  onClick={()=>handleclick(curr)}style={{"backgroundColor":"rgb(103 232 249)","color":"#2A2A2A"}}> Add to card</Button>
              </div>
            </div>

            )
            )


            }
            </div>
            <div className='border-b-4  text-cyan-500 text-xl  border-[#2A2A2A]inline mx-auto py-4 border-[#2A2A2A]'>
              
            women's clothing
        </div>
        <div className='grid grid-cols-1 gap-8 py-8 sm:grid-cols-3  w-full '>
            
    {Data.filter(currElement=>
      currElement.category==="women's clothing"

    
    ).map(curr => (
        <div className='flex flex-col justify-around rounded w-full   px-4 shadow-lg'  key={curr.id}>
           
            <div className=''   >
          <img src={curr.image} width="35%" />
           
          </div>
          <div className=''>
          <p className='py-2 t '  style={{"fontSize":"12px"}}>{curr.description}</p>
          </div>
          <div>
          <p className=' '  >Price: ₹{curr.price}</p>
          </div>
          <div className='flex justify-center py-2'>
          <Button variant="contained" color="primary" onClick={()=>handleclick(curr)} style={{"backgroundColor":"rgb(103 232 249)","color":"#2A2A2A"}}> Add to card</Button>
          </div>
        </div>

        )
        )


        }
        </div>
           
              
            
              </div>
              
                 </>

  )

}

export default Products
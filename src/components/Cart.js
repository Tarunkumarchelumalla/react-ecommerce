import React from 'react'
import {CardMedia,CardContent,CardActions,Button,Card} from '@mui/material'
import { useState,useEffect } from 'react';
import {auth,db} from '../components/firebase/config'
import Navbaar from './Navbaar';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
function Cart({username}) {
    const [cartProducts, setCartProducts]=useState([]);

    // getting cart products from firestore collection and updating the state
    useEffect(()=>{
        auth.onAuthStateChanged(user=>{
            if(user){
                db.collection('Cart ' + user.uid).onSnapshot(snapshot=>{
                    const newCartProduct = snapshot.docs.map((doc)=>({
                        ID: doc.id,
                        ...doc.data(),
                    }));
                    setCartProducts(newCartProduct);                    
                })
            }
            else{
                console.log('user is not signed in to retrieve cart');
            }
        })
    },[])
  return (
    <>
    <Navbaar username={username}/>
    <div className='flex flex-col max-w-[900px] mx-auto px-8' >
    <p className='text-cyan-500 text-4xl inline border-b-4 border-[#2A2A2A]'> Cart</p>
        <div className='grid grid-cols-1 gap-8 py-8 sm:grid-cols-1  w-full'>
            {cartProducts <1 && <>
               <div>
                <p> .......Add some thing </p>
               </div>
            </>}
    {cartProducts.map((cartProducts) => (
            <div className='sm:flex  flex-1 rounded  px-4 shadow-lg ' key={cartProducts.id}>
                 
                <div className=''   >
              <img  src={cartProducts.image}className='w-[35%] sm:w-[40%] mx-auto' />
               
              </div>
              <div className='flex flex-col'>
              <p className='py-2  max-w-[400px] mx-auto'   style={{"fontSize":"12px"}}>{cartProducts.description}</p>
              <div className='flex'>
                   <Button startIcon={<AddOutlinedIcon/>} style={{"backgroundColor":"rgb(103 232 249)","color":"#2A2A2A"}}/>
                   Quantity
                   <Button startIcon={<RemoveOutlinedIcon/>} style={{"backgroundColor":"rgb(103 232 249)","color":"#2A2A2A"}}/>
                </div>
              </div>
              <div >
              <p className=' py-4 sm:px-4'    >Price: ₹{cartProducts.price}</p>
            
              </div>
              <div className='flex justify-center py-2'>
              
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

export default Cart
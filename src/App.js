import React from "react";
import Login from "./components/Login";
import Signup from "./components/Signup";
import{Route,Router,Routes} from "react-router-dom";
import {auth,db} from './components/firebase/config';
import { useState,useEffect } from "react";
import Home from "./components/Home";
import Cart from "./components/Cart";
import {useNavigate,Link} from 'react-router-dom'
function App() {
  function GetCurrentUser(){
    const [user, setUser]=useState(null);
    useEffect(()=>{
        auth.onAuthStateChanged(user=>{
            if(user){
              setUser(user.uid)
            }
            else{
                setUser(null);
            }
        })
    },[])
    return user;
}
const user = GetCurrentUser();

  const history=useNavigate();
  const [cart,setCart]=useState([]);


 let Product;
    const handleclick = (product)=>{
        if(user!==null){
            // console.log(product);
            Product=product;
            Product['qty']=1;
            Product['TotalProductPrice']=Product.qty*Product.price;
            db.collection('Cart ' + user).doc(product.ID).set(Product).then(()=>{
                console.log('successfully added to cart');
            })

        }
        else{
            history('/login');
        }
        
    }
  return (
    <>
 
      <div >
   
      <Routes>
        <Route path="/" element={ <Signup/> } />
        <Route path="/Login" element={ <Login/> } />
     
        <Route path="/Home" element={ <Home handleclick={handleclick}/> } />
        <Route path="/Cart" element={ <Cart cart={cart}/> } />

      </Routes>
    
        </div>
       
        </>
  );
}

export default App;

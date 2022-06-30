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


 

  function GetUsername(){


    const [username, setUserName]=useState(null);
    useEffect(()=>{
        auth.onAuthStateChanged(user=>{
            if(user){
                db.collection('users').doc(user.uid).get().then(snapshot=>{
                    setUserName(snapshot.data().Name);
                })
            }
            else{
                setUserName(null);
            }
        })
    },[])
    return username;
}
const username = GetUsername();
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
  


 let Product;
    const handleclick = (product)=>{
        
        if(user!==null){
            // console.log(product);
          
            Product=product;
            Product['qty']=1;
            Product['TotalProductPrice']=Product.qty*Product.price;
            db.collection('Cart ' + user).doc(product.ID).set(Product).then(()=>{
                alert('successfully added to cart');
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
     
        <Route path="/Home" element={ <Home handleclick={handleclick} username={username} cartProducts={cartProducts}/> } />
        <Route path="/Cart" element={ <Cart  username={username} cartProducts={cartProducts} /> } />

      </Routes>
    
        </div>
       
        </>
  );
}

export default App;

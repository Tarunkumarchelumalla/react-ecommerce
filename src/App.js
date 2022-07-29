import React from "react";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { Route, Router, Routes } from "react-router-dom";
import { auth, db } from "./components/firebase/config";
import { useState, useEffect } from "react";
import Home from "./components/Home";
import Cart from "./components/Cart";
import { useNavigate, Link } from "react-router-dom";
import Amazonapi from "./components/Amazonapi";
import Alert from '@mui/material/Alert';
function App() {
  const [cartProducts, setCartProducts] = useState([]);
  const [alertmsg,setAlertmsg]=useState("");
  const[cload,setCload]=useState(false);

  // getting cart products from firestore collection and updating the state
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        db.collection("Cart " + user.uid).onSnapshot((snapshot) => {
          const newCartProduct = snapshot.docs.map((doc) => ({
            ID: doc.id,
            ...doc.data(),
          }));
          setCartProducts(newCartProduct);
        });
      } else {
     
      }
    });
  }, []);

  function GetUsername() {
    const [username, setUserName] = useState(null);
    useEffect(() => {
      auth.onAuthStateChanged((user) => {
        if (user) {
          db.collection("users")
            .doc(user.uid)
            .get()
            .then((snapshot) => {
              // var userj=snapshot.data().Name.replace(/\s+/g, '');
              setUserName(snapshot.data().Name);
            });
        } else {
          setUserName(null);
        }
      });
    }, []);
    return username;
  }
  const username = GetUsername();
  function GetCurrentUser() {
    const [user, setUser] = useState(null);
    useEffect(() => {
      auth.onAuthStateChanged((user) => {
        if (user) {
          setUser(user.uid);
        } else {
          setUser(null);
        }
      });
    }, []);
    return user;
  }
  const user = GetCurrentUser();

  const history = useNavigate();

  let Product;
  const handleclick = (product) => {
    setCload(!cload);
    if (user !== null) {
      console.log(product);

      Product = product;
      Product["qty"] = 1;
      Product["TotalProductPrice"] = Product.qty * Product.price;
      db.collection("Cart " + user)
        .doc(product.ID)
        .set(Product)
        .then(() => {
          setAlertmsg("Item added SuccessFully")
          setTimeout(() => {
            setAlertmsg("")
           
          }, 1000);
          setCload(false);
        });
    } else {
      history("/login");
    }
  };
  let amazonproduct;
  const handleamazon = (amazeproduct) => {
    setCload(!cload);
    if (user !== null) {
      // console.log(product);

    amazonproduct=amazeproduct
    amazonproduct["image"]=amazeproduct.product_main_image_url;
    if(amazeproduct.app_sale_price){
    amazonproduct["price"]=amazeproduct.app_sale_price;}
    else{
    amazonproduct["price"]=1000;}
    amazonproduct["title"]=amazeproduct.product_title;
      amazonproduct["qty"] = 1;
      amazonproduct["TotalProductPrice"] = amazonproduct.qty * amazonproduct.price;
      db.collection("Cart " + user)
        .doc(amazonproduct.ID)
        .set(amazonproduct)
        .then(() => {
          setAlertmsg("Item added SuccessFully")
          setTimeout(() => {
            setAlertmsg("")
           
          }, 1800);
        });
        setCload(false);
    } else {
      history("/login");
    }
  };

  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/Login" element={<Login />} />

          <Route
            path="/Home"
            element={
              <Home
                handleclick={handleclick}
                username={username}
                cartProducts={cartProducts}
                handleamazon={handleamazon}
                alertmsg={alertmsg}
                cload={cload}
              />
            }
          />
          <Route
            path="/Cart"
            element={<Cart username={username} cartProducts={cartProducts} />}
          />
           <Route path="/amazon" element={<Amazonapi handleamazon={handleamazon} />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

import React from "react";
import {
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Card,
} from "@mui/material";
import { useState, useEffect } from "react";
import { auth, db } from "../components/firebase/config";
import Navbaar from "./Navbaar";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import CloseIcon from "@mui/icons-material/Close";
function Cart({ username, cartProducts, length }) {
  // const options = {
  //   method: 'GET',
  //   headers: {
  //     'X-RapidAPI-Key': '0885d0ac0dmsh5304f79b1ca551bp1e114fjsnba355115d9c9',
  //     'X-RapidAPI-Host': 'ecommerce-scraper.p.rapidapi.com'
  //   }
  // };

  // fetch('https://ecommerce-scraper.p.rapidapi.com/api/posts?per_page=10&page=1&categories=0&details=0', options)
  //   .then(response => response.json())
  //   .then(response => console.log(response))
  //   .catch(err => console.error(err));

  var Grantotal = 0;
  cartProducts.map((cart) => (Grantotal = Grantotal + cart.TotalProductPrice));

  let cartitem;
  const handle = (cartProducts) => {
    cartitem = cartProducts;
    cartitem.qty = cartitem.qty + 1;
    cartitem.TotalProductPrice = cartitem.qty * cartitem.price;
    auth.onAuthStateChanged((user) => {
      if (user) {
        db.collection("Cart " + user.uid)
          .doc(cartitem.ID)
          .update(cartitem)
          .then(() => {
            
          });
      } else {
        console.log("user is not signed in to retrieve cart");
      }
    });
  };
  const handleminus = (cartProducts) => {
    cartitem = cartProducts;
    if (cartitem.qty > 1) {
      cartitem.qty = cartitem.qty - 1;
      cartitem.TotalProductPrice = cartitem.qty * cartitem.price;
      auth.onAuthStateChanged((user) => {
        if (user) {
          db.collection("Cart " + user.uid)
            .doc(cartitem.ID)
            .update(cartitem)
            .then(() => {
              console.log("decremented");
            });
        } else {
          console.log("user is not signed in to retrieve cart");
        }
      });
    }
  };
  const handleremove = (cartProducts) => {
    cartitem = cartProducts;

    auth.onAuthStateChanged((user) => {
      if (user) {
        db.collection("Cart " + user.uid)
          .doc(cartitem.ID)
          .delete()
          .then(() => {
            console.log("deleted");
          });
      } else {
        console.log("user is not signed in to retrieve cart");
      }
    });
  };
  return (
    <>
      <Navbaar username={username} cartProducts={cartProducts} />
      <div className="flex flex-col max-w-[900px] mx-auto px-8">
        <p className="text-cyan-500 text-4xl inline border-b-4 border-[#2A2A2A]">
          {" "}
          Cart
        </p>

        <div className="grid grid-cols-1 gap-8 py-8 sm:grid-cols-1  w-full">
          {cartProducts < 1 && (
            <>
              <div>
                <p> .......Add some thing </p>
              </div>
            </>
          )}
          {cartProducts.map((cartProducts,index) => (
            <div
              className="sm:flex  flex-1 rounded px-4 shadow-lg "
              key={cartProducts.ID}
            >
              <div className="flex justify-end cursor-pointer">
                <CloseIcon
                  onClick={() => handleremove(cartProducts)}
                  color="error"
                />
              </div>
              <div className="">
                <img
                  src={cartProducts.image}
                  className="w-[35%] sm:w-[40%] mx-auto"
                />
                 <p className="py-2"style={{ fontSize: "15px" }}>
                  {cartProducts.title}
                </p>
              </div>
              <div className="flex flex-col">
                <p
                  className="py-2  max-w-[400px] mx-auto"
                  style={{ fontSize: "12px" }}
                >
                  {cartProducts.description}
                </p>

                <div className="flex">
                  <Button
                    startIcon={<AddOutlinedIcon />}
                    onClick={() => handle(cartProducts)}
                    style={{
                      backgroundColor: "rgb(103 232 249)",
                      color: "#2A2A2A",
                    }}
                  />
                  <p className="px-4 py-2">{cartProducts.qty}</p>
                  <Button
                    startIcon={<RemoveOutlinedIcon />}
                    onClick={() => handleminus(cartProducts)}
                    style={{
                      backgroundColor: "rgb(103 232 249)",
                      color: "#2A2A2A",
                    }}
                  />
                </div>
                <p className="hidden py-4 sm:flex sm:px-4 ">
                  {" "}
                  Total: ₹{cartProducts.TotalProductPrice}
                </p>
              </div>
              <div>
                <p className=" py-2 sm:px-4">Price: ₹{cartProducts.price}</p>
              </div>
              <div className="flex  ">
                <p className="felx py-4 sm:hidden sm:px-4">
                  {" "}
                  Total: ₹{cartProducts.TotalProductPrice}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {cartProducts.length > 0 && (
        <>
          <div className="flex flex-col max-w-[850px] mx-auto px-8 shadow-lg py-8 mb-8 ">
            <p className="text-cyan-500 text-4xl inline border-b-2 border-[#2A2A2A]">
              {" "}
              Bill
            </p>
            <div className="flex flex-col sm:justify-center divide-y  divide-x">
              <div className="flex  divide-x divide-y">
                <div className=" w-[300px] flex sm:w-[800px] ">
                  <p className="mx-auto"> Products</p>
                </div>
                <div>
                  <p className="px-4"> Quantity</p>
                </div>
                <div>
                  <p className="px-4"> price</p>
                </div>
              </div>
              {cartProducts.map((cartProducts) => (
                <div className="flex divide-x ">
                  <p className="flex px-4 w-[300px] sm:w-[800px]">
                    {cartProducts.title}:
                  </p>
                  <p className="px-4 w-[100px] flex justify-center">
                    {cartProducts.qty}{" "}
                  </p>

                  <p className="px-4 w-[100px]">
                    {cartProducts.TotalProductPrice}{" "}
                  </p>
                </div>
              ))}
            </div>
            <div className="flex flex-col justify-end">
              <p className="flex  justify-end py-4 px-4 ">
                GrandTotal: ₹{Grantotal}
              </p>

              <Button
                variant="contained"
                style={{ backgroundColor: "rgb(103,232,249)" }}
                onClick={() => {
                  alert("Contact Tarun for rest");
                }}
              >
                Checkout
              </Button>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Cart;

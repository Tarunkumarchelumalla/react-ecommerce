import React, { useState } from "react";
import { Button } from "@mui/material";
import Alert from "@mui/material/Alert";
import { Data } from "./Data";
import CircularProgress from "@mui/material/CircularProgress";

function Products({ handleclick, cload, alertmsg }) {
  return (
    <>

      <div
        className="w-full mt-4 flex flex-col py-2 justify-around  px-4"
        name="product"
      ><div className=" w-full fixed top-[10%] z-[10000000000]">
         {alertmsg && <> <Alert severity="success">{alertmsg}</Alert></>}
         
  
      </div>
        <div>
          <p className="text-cyan-500 text-3xl inline border-b-4 sm:text-4xl border-[#2A2A2A]">
            {" "}
            Products
          </p>
        </div>
        <div className="border-b-2 text-xl text-cyan-500 inline mx-auto mt-2 py-2 border-[#2A2A2A]">
          Men's clothing
        </div>

        <div className="grid grid-cols-1 gap-8 py-8 sm:grid-cols-3  w-full ">
          {Data.filter(
            (currElement) => currElement.category === "men's clothing"
          ).map((curr) => (
            <div
              className="flex flex-col justify-around rounded w-full   px-4 shadow-lg "
              key={curr.id}
            >
              <div className="">
                <img src={curr.image} width="35%" />
              </div>
              <p style={{ font: "bold" }}>{curr.title}</p>
              <div className="">
                <p className="py-2  " style={{ fontSize: "12px" }}>
                  {curr.description}
                </p>
              </div>
              <div>
                <p className=" ">Price: ₹{curr.price}</p>
              </div>
              <div className="flex justify-center py-2">
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => handleclick(curr)}
                  style={{
                    backgroundColor: "rgb(103 232 249)",
                    color: "#2A2A2A",
                  }}
                  disabled={cload}
                  
                >
                  Add to cart
                </Button>
              </div>
            </div>
          ))}
        </div>
        <div
          className="border-b-2 text-xl text-cyan-500 inline mx-auto mt-2 border-[#2A2A2A]"
          name="prod"
        >
          Jewelery
        </div>
        <div className="grid grid-cols-1 gap-8 py-8 sm:grid-cols-3  w-full ">
          {Data.filter(
            (currElement) => currElement.category === "jewelery"
          ).map((curr) => (
            <div
              className="flex flex-col justify-around rounded w-full   px-4 shadow-lg"
              key={curr.id}
            >
              <div className="">
                <img src={curr.image} width="35%" />
              </div>
              <p style={{ font: "bold" }}>{curr.title}</p>
              <div className="">
                <p className="py-2 t " style={{ fontSize: "12px" }}>
                  {curr.description}
                </p>
              </div>
              <div>
                <p className=" ">Price: ₹{curr.price}</p>
              </div>
              <div className="flex justify-center py-2">
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => handleclick(curr)}
                  style={{
                    backgroundColor: "rgb(103 232 249)",
                    color: "#2A2A2A",
                  }}
                >
                  {" "}
                  Add to card
                </Button>
              </div>
            </div>
          ))}
        </div>
        <div className="border-b-2  text-cyan-500 text-xl  border-[#2A2A2A]inline mx-auto mt-2 border-[#2A2A2A]">
          Electronic
        </div>
        <div className="grid grid-cols-1 gap-8 py-8 sm:grid-cols-3  w-full ">
          {Data.filter(
            (currElement) => currElement.category === "electronics"
          ).map((curr) => (
            <div
              className="flex flex-col justify-around rounded w-full   px-4 shadow-lg"
              key={curr.id}
            >
              <div className="">
                <img src={curr.image} width="35%" />
              </div>
              <p style={{ font: "bold" }}>{curr.title}</p>
              <div className="">
                <p className="py-2 t " style={{ fontSize: "12px" }}>
                  {curr.description}
                </p>
              </div>
              <div>
                <p className=" ">Price: ₹{curr.price}</p>
              </div>
              <div className="flex justify-center py-2">
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => handleclick(curr)}
                  style={{
                    backgroundColor: "rgb(103 232 249)",
                    color: "#2A2A2A",
                  }}
                >
                  {" "}
                  Add to card
                </Button>
              </div>
            </div>
          ))}
        </div>
        <div className="border-b-2  text-cyan-500 text-xl  border-[#2A2A2A]inline mx-auto mt-2 border-[#2A2A2A]">
          Women's clothing
        </div>
        <div className="grid grid-cols-1 gap-8 py-8 sm:grid-cols-3  w-full ">
          {Data.filter(
            (currElement) => currElement.category === "women's clothing"
          ).map((curr) => (
            <div
              className="flex flex-col justify-around rounded w-full   px-4 shadow-lg"
              key={curr.id}
            >
              <div className="">
                <img src={curr.image} width="35%" />
              </div>
              <p style={{ font: "bold" }}>{curr.title}</p>
              <div className="">
                <p className="py-2 t " style={{ fontSize: "12px" }}>
                  {curr.description}
                </p>
              </div>
              <div>
                <p className=" ">Price: ₹{curr.price}</p>
              </div>
              <div className="flex justify-center py-2">
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => handleclick(curr)}
                  style={{
                    backgroundColor: "rgb(103 232 249)",
                    color: "#2A2A2A",
                  }}
                >
                  {" "}
                  Add to card
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Products;

import React from "react";
import Navbaar from "./Navbaar";
import { Button } from "@mui/material";
// style={{"backgroundColor":"rgb(6 182 212)",}}
import ArrowDownwardOutlinedIcon from "@mui/icons-material/ArrowDownwardOutlined";

import Products from "./Products";
import Contact from "./Contact";
import Footer from "./Footer";

import Amazonapi from "./Amazonapi";
import { Link as Lin } from "react-scroll";
function Home({
  handleclick,
  username,
  cartProducts,
  handleamazon,
  cload,
  alertmsg,
}) {
  return (
    <>
      <div className="h-[100px] " name="home">
        <Navbaar username={username} cartProducts={cartProducts} />
      </div>
      <div></div>
      <div className="flex flex-col  mx-auto h-screen max-w-[1100px] px-8 ">
        <div className="text-[#2A2A2A] rounded text-2xl  ">
          <p className="text-3xl font-extrabold">Welcome {username},</p>
        </div>
        <div className="">
          <p className="flex w-full text-[#2A2A2A] text-2xl font-extrabold py-2">
            {" "}
            Products delivered in 3 days. One time Shop Make it here
          </p>
          <p className="py-2">Any thing that you want will be here</p>
          <div className="flex py-4">
            <div className="">
              <Lin to="product" smooth={true} duration={500}>
                <Button
                  variant="contained"
                  color="secondary"
                  style={{
                    backgroundColor: "rgb(103 232 249)",
                    color: "#2A2A2A",
                  }}
                >
                  Grab now
                </Button>
              </Lin>
            </div>
            <div className="px-4 h-[20px]">
              <Lin to="prod" smooth={true} duration={500}>
                <Button
                  variant="contained"
                  endIcon={
                    <ArrowDownwardOutlinedIcon
                      style={{ fontSize: "1.5rem" }}
                      className="animate-bounce"
                    />
                  }
                  style={{
                    backgroundColor: "rgb(103 232 249)",
                    color: "#2A2A2A",
                  }}
                >
                  {" "}
                  Viewsome
                </Button>
              </Lin>
            </div>
          </div>
        </div>
        {/* <Home2/> */}
        <Amazonapi
          handleamazon={handleamazon}
          alertmsg={alertmsg}
          cload={cload}
        />
        <Products handleclick={handleclick} alertmsg={alertmsg} cload={cload} />

        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default Home;

import { Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { docs } from "./amazondata";
function Amazonapi({handleamazon}) {
  const [mobile, setMobile] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [nodata, setNodata] = useState("*disclaimer limited request 1 per user");
  const [verify,setVerify] = useState(false);
  
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '0885d0ac0dmsh5304f79b1ca551bp1e114fjsnba355115d9c9',
      'X-RapidAPI-Host': 'amazon24.p.rapidapi.com'
    }
  };

  let data;
  const handle = () => {
    setNodata("");
     setVerify(true);
    setMobile([]);
    console.log("fired");
    fetch(
      `https://amazon24.p.rapidapi.com/api/product?categoryID=aps&keyword=${searchValue}&country=IND&page=1 `,
      options
    )
      .then((response) => response.json())

      .then((response) => {
        console.log(response);
        data = response.docs.slice(0, 20);
        setMobile(data);

        setTimeout(() => {
          if (mobile === null) {
            setNodata(!nodata);
          }
        }, 3000);
      })

      .catch((err) => console.error(err));
    console.log("complete");
    console.log(nodata)
  };





  return (
    <>
    <div className="flex  w-full px-8 mt-8 align-center  py-4 mx-auto shadow-lg rounded">
          <div className=" w-full flex flex-col  ">
        <TextField
          type="text"
          variant="standard"
          label="Search any product"
          color="secondary"
          style={{color:"#06B6D4"}}
          onChange={(e) => {
            setSearchValue(e.target.value);
            
          }
        }
          value={searchValue}
          required

        /></div>
        <span className="px-2 mt-4">
          <Button
            onClick={handle}
            variant="contained"
            endIcon={<SearchIcon />}
          disabled={verify}></Button>
        </span>
        </div>
       
<div className="flex justify-center mx-auto w-full max-w-[1100px] ">
      <div className="  flex flex-col  border-[#2A2A2A]">
        
      
      <div className="grid grid-cols-1 gap-8 py-8 sm:grid-cols-3  w-full ">
   {mobile.length < 1 && <>
        {nodata ? <>{nodata}</>:<>{<svg role="status" class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-cyan-400" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
</svg>}</>}
        </>}
        {mobile.length > 1 &&
          mobile.map((curr, index) => (
            <div
              className="flex flex-col justify-around rounded w-full   px-4 shadow-lg"
              key={index}
            >
              <div className="">
                <img src={curr.product_main_image_url} width="35%" />
              </div>
              <div className="">
                <p className="py-2 " style={{ fontSize: "12px" }}>
                  {curr.product_title}
                </p>
                <p className="py-2  " style={{ fontSize: "12px" }}>
                  {curr.product_detail_url}
                </p>
              </div>
              <div>
                {curr.app_sale_price === null && <> Price: ₹1000</>}
                {curr.app_sale_price && (
                  <>
                    {" "}
                    <p className=" ">
                      Price: {curr.app_sale_price_currency}
                      {curr.app_sale_price}
                    </p>
                  </>
                )}
              </div>
              <div className="flex justify-center py-2">
                <Button
                  variant="contained"
                  color="primary"
              onClick={()=>handleamazon(curr)}
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
      </div>
    </>
  );
}

export default Amazonapi;

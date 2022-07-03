import React, { useState } from "react";
// #3E95C5 blue #2A2A2A black #999999 background #ef5350
import { FaGoogle, FaFacebook, FaTwitter } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { auth, db } from "../components/firebase/config";
import { useNavigate, Link } from "react-router-dom";
import { Typography } from "@mui/material";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conpwd, setConpwd] = useState("");
  const[isLoadin,setIsLoadin]=useState(false);
  const history = useNavigate();

  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handlesubmit = (e) => {
    e.preventDefault();
    if (password == conpwd) {
      // console.log(name,email,password,conpwd);
      setIsLoadin(true)
      auth
        .createUserWithEmailAndPassword(email, password)
        .then((credentials) => {
          console.log(credentials);

          db.collection("users")
            .doc(credentials.user.uid)
            .set({
              Name: name,
              Email: email,
              Password: password,
              
            })
            .then(() => {
              setSuccessMsg(
                "Signup Successfull. You will now automatically get redirected to Login"
              );
              setName("");
              setEmail("");
              setPassword("");
              setConpwd("");
              setErrorMsg("");
              setTimeout(() => {
                setSuccessMsg("");
                history("/Login");
              }, 3000);
            })
            .catch((error) => setErrorMsg(error.message));
        })
        .catch((error) => {
          setErrorMsg(error.message);
        });
    } else {
      setErrorMsg("password doesnot match");
    }
  };
  return (
    <>
      <div className=" bg-gradient-to-bl from-cyan-500 to ...  flex justify-center shadow-current shadow-2xl">
        <div className="h-screen w-full flex justify-center items-center max-w-[600px]  text-[#2A2A2A] p-4 ">
          <form
            className="flex flex-col max-w-[450px] bg-white rounded-md lg:max-w-[350px] shadow-md w-full p-5 md:max-w-[400px] "
            onSubmit={handlesubmit}
          >
            {successMsg && (
              <>
                <Typography variant="success">{successMsg}</Typography>
                <br></br>
              </>
            )}
            <div className="w-full flex">
              <p className=" inline text-4xl  text-cyan-500 border-b-2 p-1 border-[#2A2A2A] cursor-pointer">
                Shop Here
              </p>
            </div>

            {/*  
        <input type="text" placeholder="Enter your name" className='border-2 my-4 p-2 rounded'></input> */}
            <div className="py-2 w-full flex flex-col">
              <TextField
                variant="standard"
                color="secondary"
                label="Enter username"
                type="text"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                value={name}
              ></TextField>
            </div>
            <div className="py-2 w-full flex flex-col">
              <TextField
                variant="standard"
                color="secondary"
                label="Enter email"
                type="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                value={email}
              ></TextField>
            </div>
            <div className="py-2 w-full flex flex-col">
              <TextField
                variant="standard"
                color="secondary"
                label="Enter Password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                value={password}
              ></TextField>
            </div>
            <div className="py-2 w-full flex flex-col">
              <TextField
                variant="standard"
                color="secondary"
                label="Confirm Password"
                onChange={(e) => {
                  setConpwd(e.target.value);
                }}
                value={conpwd}
              ></TextField>
            </div>
            <div className="py-2 w-full flex flex-col">
              <Button
                variant="contained"
                style={{ backgroundColor: "rgb(6 182 212)" }}
                className="bg-cyan-300"
                type="submit"
                disabled={isLoadin}
              >
                Signup
              </Button>
            </div>
            <div className="flex w-full py-4 ">
              <hr className=" w-full" />
              <p className="px-2">or</p>
              <br />
              <hr className="w-full"></hr>
            </div>
            <div className="flex w-full py-2 justify-center items-center">
              <FaFacebook
                className=" mx-2 text-[#4064AC] cursor-pointer hover:scale-125 duration-300 "
                size={30}
              />
              <FcGoogle
                className=" mx-2 cursor-pointer hover:scale-125 duration-300"
                size={30}
              />
              <FaTwitter
                className="  mx-2  cursor-pointer text-[#1DA1F2] hover:scale-125 duration-300"
                size={30}
              />
            </div>
            <Link to="/Login">
              <p>
                Already Have an Account??
                <a className="text-cyan-500 cursor-pointer ">Login</a>
              </p>
            </Link>

            {errorMsg && (
              <>
                <br></br>
                <Typography color="error">{errorMsg}</Typography>
              </>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;

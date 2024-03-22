import React from "react";
import { FaTwitter } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
const Login = () => {
    const navigate = useNavigate();
    function hadleLogin(e){
        e.preventDefault();
        navigate("/signup");
    }
  return (
    <form onSubmit={hadleLogin} className="bg-[ #FFFFFF] h-[100vh] w-[100vw] flex justify-center items-center">
      <div className="flex flex-col gap-y-4 lg:w-1/4 w-[350px]">
        <div>
          <FaTwitter className=" size-10 text-[#1da1f2]" />
        </div>
        <h1 className="text-3xl font-bold my-2">Log in to Twitter</h1>
        <div>
          <input
            type="text"
            placeholder="Phone number, email address"
            className=" p-3 w-full text-sm outline-none border-2 rounded-md"
            required
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            className=" p-3 w-full text-sm outline-none border-2 rounded-md"
            required
          />
        </div>
        <button type="submit" className="bg-[#1da1f2] text-white text-lg py-2 text-bold rounded-full">
          Log In
        </button>
        <div className="flex justify-between text-sm mt-5 text-[#1da1f2]">
          <span className=" cursor-pointer" onClick={()=>navigate("/signup")}>Forgot password?</span>{" "}
          <span className=" cursor-pointer" onClick={()=>navigate("/signup")}>Sign up to Twitter</span>
        </div>
      </div>
    </form>
  );
};

export default Login;

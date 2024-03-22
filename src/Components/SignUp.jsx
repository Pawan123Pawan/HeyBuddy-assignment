import React from "react";
import { FaTwitter } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
const SignUp = () => {
    const navigate = useNavigate()
    function handleSignUp(e){
        e.preventDefault();
        navigate("/next-signup");
    }
  return (
    <form onSubmit={handleSignUp} className="bg-[ #FFFFFF] h-[100vh] w-[100vw] flex justify-center items-center">
      <div className="flex flex-col gap-y-4 lg:w-1/2 w-[350px]">
        <div className="flex justify-center items-center">
          <FaTwitter className=" size-8 text-[#1da1f2]" />
        </div>
        <h1 className="text-xl font-bold my-1">Create an account</h1>
        <div>
          <input
            type="text"
            placeholder="Name"
            className=" p-3 w-full text-sm outline-none border-2 rounded-md"
            required
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Phone Number"
            className=" p-3 w-full text-sm outline-none border-2 rounded-md"
            required
          />
        </div>
        <div className="text-[12px] text-[#1da1f2] cursor-pointer">
          Use email
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="font-bold">Date of birth</h3>
          <p className="text-[16px]">
            Facilisi sem pulvinar velit nunc, gravida scelerisque amet nibh sit.
            Quis bibendum ante phasellus metus, magna lacinia sed augue. Odio
            enim nascetur leo mauris vel eget. Pretium id ullamcorper blandit
            viverra dignissim eget tellus. Nibh mi massa in molestie a sit. Elit
            congue.
          </p>
          <div className="flex justify-between gap-4">
            <div className="flex items-center  w-[40%] text-sm border-2 rounded-md">
              <input
                type="text"
                placeholder="Month"
                className=" p-3 w-full text-sm outline-none "
                required
              />
              <span className="pe-2 opacity-40">
                <FaAngleDown />
              </span>
            </div>
            <div className="flex items-center  w-[30%] text-sm border-2 rounded-md">
              <input
                type="text"
                placeholder="Day"
                className=" p-3 w-full text-sm outline-none "
                required
              />
              <span className="pe-2 opacity-40">
                <FaAngleDown />
              </span>
            </div>
            <div className="flex items-center  w-[30%] text-sm border-2 rounded-md">
              <input
                type="text"
                placeholder="Year"
                className=" p-3 w-full text-sm outline-none "
                required
              />
              <span className="pe-2 opacity-40">
                <FaAngleDown />
              </span>
            </div>
          </div>
        </div>
        <button type="submit" className="bg-[#1da1f2] text-white text-lg py-2 text-bold rounded-full mt-5">
          Next
        </button>
      </div>
    </form>
  );
};

export default SignUp;

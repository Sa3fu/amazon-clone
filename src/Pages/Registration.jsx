import React from "react";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
import { Link } from "react-router-dom";

function Registration() {
  return (
    <div className="w-full">
      <div className="w-full bg-gray-100 pb-10">
        <form className="w-[350px] mx-auto flex flex-col items-center">
          <img
            className="w-32 py-8"
            src="https://pngimg.com/uploads/amazon/amazon_PNG1.png"
            alt=""
          />
          <div className="w-full border border-zinc-200 p-6">
            <h2 className="font-titleFont text-3xl font-medium mb-4">
              Create Account
            </h2>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-2">
                <p className="text-sm font-medium">Your Name</p>
                <input
                  className="w-full lowercase py-1 border border-zinc-400 px-2 text-base
                rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput
                duration-100"
                  type="text"
                />
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-sm font-medium">Email or Mobile number</p>
                <input
                  className="w-full lowercase py-1 border border-zinc-400 px-2 text-base
                rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput
                duration-100"
                  type="text"
                  required
                  pattern="^([a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3})|(?:\+?91)?[789]\d{9}$"
                />
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-sm font-medium">Password</p>
                <input
                  className="w-full lowercase py-1 border border-zinc-400 px-2 text-base
                rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput
                duration-100"
                  type="password"
                />
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-sm font-medium">Re-enter Password</p>
                <input
                  className="w-full lowercase py-1 border border-zinc-400 px-2 text-base
                rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput
                duration-100"
                  type="password"
                />
                <p className="text-xs text-gray-600">
                  Passwords must be atleast 6 characters.
                </p>
              </div>
              <button
                onClick={(e) => e.preventDefault()}
                className="w-full py-1.5 text-sm font-normal rounded-sm bg-gradient-to-t
              from-[#f7dfa5] to-[#f0c14b] hover:bg-gradient-to-b border border-zinc-400 
              active:border-yellow-800 active:shadow-amazonInput"
              >
                Continue
              </button>
            </div>
            <p className="text-xs text-black leading-4 mt-4">
              By creating an account, you agree to Amazon's{" "}
              <span className="text-blue-600">Conditions of use</span> and{" "}
              <span className="text-blue-600">Privacy Notice.</span>
            </p>
            <div className="mt-2">
              <p className="text-xs text-black">
                Already have an account?{" "}
                <Link to="/signin">
                  <span
                    className="text-xs text-blue-600 hover:text-orange-600 hover:underline
                underline-offset-1 cursor-pointer duration-100"
                  >
                    Sign in{" "}
                    <span>
                      <ArrowRightOutlinedIcon />
                    </span>
                  </span>
                </Link>
              </p>
              <p className="text-xs text-black">
                Buying for work?{" "}
                <span
                  className="text-xs text-blue-600 hover:text-orange-600 hover:underline
                underline-offset-1 cursor-pointer duration-100"
                >
                  Create a free business account{" "}
                </span>
              </p>
            </div>
          </div>
        </form>
      </div>
      <div
        className="w-full bg-gradient-to-t from-white via-white to-zinc-200 flex flex-col gap-4
      justify-center items-center py-10"
      >
        <div className="flex items-center gap-6">
          <p
            className="text-xs text-blue-600 hover:text-orange-600 hover:underline 
          underline-offset-1 cursor-pointer duration-100"
          >
            Conditions of use{" "}
          </p>
          <p
            className="text-xs text-blue-600 hover:text-orange-600 hover:underline 
          underline-offset-1 cursor-pointer duration-100"
          >
            Privacy Notice{" "}
          </p>
          <p
            className="text-xs text-blue-600 hover:text-orange-600 hover:underline 
          underline-offset-1 cursor-pointer duration-100"
          >
            Conditions of use{" "}
          </p>
        </div>
        <p className="text-xs text-gray-600">
          {"\u00a9"} 1996-2024, yourzone.com, Inc. or its affiliates
        </p>
      </div>
    </div>
  );
}

export default Registration;

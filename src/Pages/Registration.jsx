import React, { useState } from "react";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
import { Link } from "react-router-dom";

function Registration() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    retypePassword: "",
  });

  const [error, setError] = useState({
    name: "",
    email: "",
    password: "",
    retypePassword: "",
  });

  const initialFormData = {
    name: "",
    email: "",
    password: "",
    retypePassword: "",
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    setError((prevError) => ({
      ...prevError,
      [name]: "",
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formError = {};

    if (!formData.name) {
      formError.name = "!Name is required";
    }
    if (!formData.email) {
      formError.email = "!Email is required";
    } else if (
      !/^([a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3})|(?:\+?91)?[789]\d{9}$/.test(
        formData.email
      )
    ) {
      formError.email = "!Enter a valid email or phone number";
    }
    if (!formData.password) {
      formError.password = "!Password is required";
    } else if (formData.password.length < 6) {
      formError.password = "!Password Should have more than 6 character long";
    } else if (!/(?=.*\d)(?=.*\W)/.test(formData.password)) {
      formError.password =
        "!Passord must contain atleast one number and one special character";
    }
    if (!formData.retypePassword) {
      formError.retypePassword = "!Password is required";
    } else if (formData.password !== formData.retypePassword) {
      formError.retypePassword = "!Passwords do not match";
    }

    setError(formError);

    if (Object.keys(formError).length === 0) {
      console.log(formData);
      setFormData(initialFormData)
    }
  };
  return (
    <div className="w-full">
      <div className="w-full bg-gray-100 pb-10">
        <form
          className="w-[350px] mx-auto flex flex-col items-center"
          onSubmit={handleSubmit}
        >
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
                  onChange={handleChange}
                  className="w-full lowercase py-1 border border-zinc-400 px-2 text-base
                rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput
                duration-100"
                  type="text"
                  name="name"
                  value={formData.name}
                />
                {error.name && (
                  <p className="text-xs text-red-500">{error.name}</p>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-sm font-medium">Email or Mobile number</p>
                <input
                  onChange={handleChange}
                  className="w-full lowercase py-1 border border-zinc-400 px-2 text-base
                rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput
                duration-100"
                  type="text"
                  name="email"
                  value={formData.email}
                />
                {error.email && (
                  <p className="text-xs text-red-500">{error.email}</p>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-sm font-medium">Password</p>
                <input
                  onChange={handleChange}
                  className="w-full lowercase py-1 border border-zinc-400 px-2 text-base
                rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput
                duration-100"
                  type="password"
                  name="password"
                  value={formData.password}
                />
                {error.password && (
                  <p className="text-xs text-red-500">{error.password}</p>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-sm font-medium">Re-enter Password</p>
                <input
                  onChange={handleChange}
                  className="w-full lowercase py-1 border border-zinc-400 px-2 text-base
                rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput
                duration-100"
                  type="password"
                  name="retypePassword"
                  value={formData.retypePassword}
                />
                {error.retypePassword && (
                  <p className="text-xs text-red-500">{error.retypePassword}</p>
                )}
              </div>
              <button
                type="submit"
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

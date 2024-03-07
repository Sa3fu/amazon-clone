import React, { useState } from "react";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { RotatingLines } from "react-loader-spinner";
import { useDispatch } from "react-redux";
import { setUserInfo } from "../redux/amazonSlice";

function Signin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const auth = getAuth();
  const [loading, setLoading] = useState(false);
  const [firebaseErr, setFirebaseErr] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const [formdata, setFormdata] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState({
    email: "",
    password: "",
  });

  const initialFormData = {
    email: "",
    password: "",
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormdata((prevState) => ({
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

    if (!formdata.email) {
      formError.email = "!Email is required";
    }
    if (!formdata.password) {
      formError.password = "!Password is required";
    }

    setError(formError);

    if (Object.keys(formError).length === 0) {
      setLoading(true);
      signInWithEmailAndPassword(auth, formdata.email, formdata.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          dispatch(
            setUserInfo({
              _id: user.uid,
              userName: user.displayName,
              email: user.email,
            })
          );
          setLoading(false);
          setSuccessMessage("Signed in successfully");
          setTimeout(() => {
            navigate("/");
          }, 3000);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          if (errorCode.includes("auth/invalid-credential")) {
            setLoading(false);
            setFirebaseErr("Inavlid Email or Password");
          }
        });
      setFormdata(initialFormData);
      setFirebaseErr("");
    }
  };
  return (
    <div className="w-full">
      <div className="w-full bg-gray-100 ">
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
              Sign in
            </h2>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-2">
                <p className="text-sm font-medium">Email or Mobile number</p>
                <input
                  onChange={handleChange}
                  className="w-full lowercase py-1 border border-zinc-400 px-2 text-base
                rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput
                duration-100"
                  type="text"
                  name="email"
                  value={formdata.email}
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
                  value={formdata.password}
                />
                {error.password && (
                  <p className="text-xs text-red-500">{error.password}</p>
                )}
              </div>
              {firebaseErr && (
                <p className="text-xs text-red-500 font-semibold">
                  {firebaseErr}
                </p>
              )}
              <button
                type="submit"
                className="w-full py-1.5 text-sm font-normal rounded-sm bg-gradient-to-t
              from-[#f7dfa5] to-[#f0c14b] hover:bg-gradient-to-b border border-zinc-400 
              active:border-yellow-800 active:shadow-amazonInput"
              >
                Continue
              </button>
              {loading && (
                <div className="flex justify-center">
                  <RotatingLines
                    visible={true}
                    height="96"
                    width="96"
                    color="#febd69"
                    strokeWidth="5"
                    animationDuration="0.75"
                    ariaLabel="rotating-lines-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                  />
                </div>
              )}
              {successMessage && (
                <div>
                  <motion.p
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-base font-titleFont font-semi-bold text-green-500 
                     px-2 text-center"
                  >
                    {successMessage}
                  </motion.p>
                </div>
              )}
            </div>
            <p className="text-xs text-black leading-4 mt-4">
              By Continuing, you agree to Amazon's{" "}
              <span className="text-blue-600">Conditions of use</span> and{" "}
              <span className="text-blue-600">Privacy Notice.</span>
            </p>
            <p className="text-xs text-gray-600 mt-4 cursor-pointer group">
              <ArrowRightOutlinedIcon />
              <span
                className="text-blue-600 group-hover:text-orange-700 group-hover:underline
              underline-offset-1"
              >
                Need Help?
              </span>
            </p>
          </div>
          <p className="w-full text-xs text-gray-600 mt-4 flex items-center">
            <span className="w-1/3 h-[1px] bg-zinc-400 inline-flex"></span>
            <span className="w-1/3 text-center">New to Amazon?</span>
            <span className="w-1/3 h-[1px] bg-zinc-400 inline-flex"></span>
          </p>
          <Link className="w-full" to="/registration">
            <button
              className="w-full py-1.5 mt-4 text-sm font-normal rounded-sm bg-gradient-to-t
          from-slate-200 to-slate-100 hover:bg-gradient-to-b border border-zinc-400 
          active:border-yellow-800 active:shadow-amazonInput"
            >
              Create your Amazon Account
            </button>
          </Link>
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

export default Signin;

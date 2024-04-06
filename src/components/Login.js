import React from "react";
import { useState, useRef } from "react";
import { checkValidData } from "../utils/Validate";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const navigate = useNavigate();

  const buttonClickHandler = () => {
    //    console.log(email.current.value);
    //    console.log(password.current.value);
    const message = checkValidData(
      email?.current?.value,
      password?.current?.value,
      name?.current?.value
    );
    setErrorMessage(message);

    if (message) {
      return;
    }
   
   if(!isLogin)
   {
    localStorage.setItem("email", email.current.value);
    setIsLogin(!isLogin);
   }
   else{
    if(email.current.value === localStorage.getItem("email"))
    {
        navigate("/Browse");
    }
    else{
        setErrorMessage("Email Doesn't exist!! SignUp");
    }
   }

  };
  const clickHandler = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div >
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute p-12 bg-black w-3/12 my-36 mx-auto right-0 left-0 text-white rounded-md bg-opacity-85"
      >
        <h1 className="font-bold text-3xl py-3">
          {!isLogin ? " Sign up " : "Sign In"}
        </h1>
        {!isLogin && (
          <input
            type="text"
            placeholder="Full Name"
            ref={name}
            className="p-4 my-3 w-full bg-gray-800 rounded-md"
          />
        )}
        <input
          type="email"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-800 rounded-md"
          ref={email}
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 mb-8 w-full bg-gray-800 rounded-md"
          ref={password}
        />
        <p className="text-lg text-red-500 font-bold py-2">{errorMessage}</p>
        <button
          className="bg-red-700 p-4 w-full my-6 rounded-lg"
          onClick={buttonClickHandler}
        >
          {isLogin ? "Sign In" : "Sign up"}
        </button>

        <p className="my-6 cursor-pointer" onClick={clickHandler}>
          {!isLogin
            ? "Already Registered? sign in now."
            : "New User? Sign up now."}
        </p>
      </form>
    </div>
  );
};

export default Login;

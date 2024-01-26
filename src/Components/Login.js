import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData , checkValidData1 } from "../utils/validate";



const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
  
    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);
  
    const handleButtonClick = () => {
      //validation the form data
  
      // console.log(name.current.value);
      // console.log(email.current.value);
      // console.log(password.current.value);
  
      // const message =  checkValidData( name.current.value, email.current.value, password.current.value);
      // console.log(message);
      // setErrorMessage(message);
      if (!isSignInForm) {
        const message = checkValidData(
          name.current.value,
          email.current.value,
          password.current.value
        );
        setErrorMessage(message);
      } else {
        const message = checkValidData1(
          email.current.value,
          password.current.value
        );
        console.log(message);
        setErrorMessage(message);
      }
    };
  
    const toggleSignInForm = () => {
      setIsSignInForm(!isSignInForm);
    };
  return (
    <div>
      <Header/>

      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/a73c4363-1dcd-4719-b3b1-3725418fd91d/fe1147dd-78be-44aa-a0e5-2d2994305a13/IN-en-20231016-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="bg-logo"
        />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 p-12 my-36 mx-auto right-0 left-0 absolute bg-black rounded-md bg-opacity-80"
      >
        <h1 className="text-white text-3xl font-medium py-8 ">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Name"
            className="p-3 my-4 w-full rounded-md bg-gray-600 border-2 border-solid border-b-orange-600 "
          />
        )}

        <input
          ref={email}
          type="emal"
          placeholder="Email Address"
          className="p-3 my-4 w-full rounded-md bg-gray-600 border-2 border-solid border-b-orange-600"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-3 my-4 w-full rounded-md  bg-gray-600 border-2 border-solid border-b-orange-600"
        />
        <p className="text-white font-bold">{errorMessage}</p>
        <button
          className="p-4 my-16 bg-red-600 text-white w-full rounded-md font-medium"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="text-white cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Alredy registered? Sign In Now."}
        </p>
      </form>
    </div>
  )
}

export default Login;



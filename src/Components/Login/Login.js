import React, { useState } from "react";
import {
  createUserWithEmail,
  signInWithEmail,
  signInWithGoogle,
} from "./Essentials/LoginMethods";
import logo from "../../images/logo/logo2.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const Login = () => {
  const [isNewUser, setIsNewUser] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [passMatch, setPassMatch] = useState("");
  const [passMatchingState, setPassMatchingState] = useState("");
  const [data, setData] = useState({});

  // style
  const inputClass =
    "p-1.5 mt-1 w-48 md:w-92 focus:ring-olive-300 focus:border-transparent focus:outline-none focus:ring-2 border rounded";
  const inputText = "font-semibold text-sm";
  const button =
    "px-10  lg:px-28 py-2 bg-olive-300 rounded-md hover:bg-olive-400 focus:outline-none focus:ring-2 focus:ring-olive-300 focus:ring-opacity-50 border border-gray-500 text-black font-semibold mt-6 mb-4";

  const dataInput = (e) => {
    if (e.target.name === "email") {
      const newData = { ...data };
      newData[e.target.name] = e.target.value;
      setData(newData);
    }

    if (e.target.name === "password") {
      const newData = { ...data };
      newData[e.target.name] = e.target.value;
      setData(newData);
    }

    if (e.target.name === "password" && isNewUser === true) {
      if (e.target.value === passMatch) {
        const newData = { ...data };
        newData[e.target.name] = e.target.value;
        setData(newData);
        setPassMatchingState("");
      } else {
        setPassMatchingState("Your Password doesn't MATCH");
      }
    }
  };

  // google sign in
  const googlePopUp = () => {
    signInWithGoogle();
  };

  // create an User
  const createAnUser = () => {
    createUserWithEmail(data.email, data.password);
    setIsNewUser(!isNewUser);
  };

  // sign in With mail
  const singIn = () => {
    signInWithEmail(data.email, data.password);
  };

  return (
    <div className="bg-white text-black">
      <div className="w-3/4 pt-4 md:pt-8 mx-auto md:w-2/4">
        <img className=" w-40 mx-auto cursor-pointer" src={logo} alt="" />
        {isNewUser === false ? (
          <div className="border text-left w-3/4 md:w-2/4 mt-4 p-8 rounded mx-auto">
            <h1 className="font-medium text-2xl mb-3">Sign-In</h1>
            <p className={`${inputText}`}>Input Your Email Address</p>
            <input
              required
              onBlur={(e) => dataInput(e)}
              className={`${inputClass}`}
              placeholder="Email Address"
              type="email"
              name="email"
              autoComplete="current-email"
            />
            <p className={`mt-4 ${inputText}`}>Input Your Email Address</p>
            <div className="flex items-center">
              <input
                required
                onBlur={(e) => dataInput(e)}
                className={`${inputClass}`}
                placeholder="Password"
                type={showPass === false ? "password" : "text"}
                name="password"
                autoComplete="current-password"
              />
              <FontAwesomeIcon
                onClick={() => {
                  setShowPass(!showPass);
                }}
                className=" transform -translate-x-6 text-md bg-white cursor-pointer"
                icon={faEye}
              />
            </div>

            <button onClick={singIn} className={`${button}`}>Sign In</button>

            <p className="text-gray-500 leading-4 text-sm">
              By continuing, you agree to Amazon's Conditions of Use and Privacy
              Notice.
            </p>
            <p className="text-gray-500 leading-4 text-sm mt-4">
              New to Amazon:{" "}
              <span
                onClick={() => {
                  setIsNewUser(!isNewUser);
                }}
                className="text-blue-500 text-lg cursor-pointer hover:underline hover:text-olive-400"
              >
                Create an Account
              </span>
            </p>
          </div>
        ) : (
          <div className="border text-left w-3/4 md:w-2/4 mt-4 p-8 rounded mx-auto">
            <h1 className="font-medium text-2xl mb-3">Create an Account</h1>
            <p className={`${inputText}`}>Input Your Email Address</p>
            <input
              required
              onBlur={(e) => dataInput(e)}
              className={`${inputClass}`}
              placeholder="Email Address"
              type="email"
              name="email"
              autoComplete="current-email"
            />
            <p className={`mt-4 ${inputText}`}>Type Your Password</p>
            <div className="flex items-center">
              <input
                required
                onBlur={(e) => setPassMatch(e.target.value)}
                className={`${inputClass}`}
                placeholder="Password"
                type={showPass === false ? "password" : "text"}
                name="password"
                autoComplete="new-password"
              />
              <FontAwesomeIcon
                onClick={() => {
                  setShowPass(!showPass);
                }}
                className=" transform -translate-x-6 text-md bg-white cursor-pointer"
                icon={faEye}
              />
            </div>

            <p className={`mt-4 ${inputText}`}>Re-Type Your Password</p>
            <div className="flex items-center">
              <input
                required
                onBlur={(e) => dataInput(e)}
                className={`${inputClass}`}
                placeholder="Re-Type Password"
                type={showPass === false ? "password" : "text"}
                name="password"
              />
              <FontAwesomeIcon
                onClick={() => {
                  setShowPass(!showPass);
                }}
                className=" transform -translate-x-6 text-md bg-white cursor-pointer"
                icon={faEye}
              />
            </div>
            <p className="pt-2 text-red-600 pl-2 text-font-semibold">
              {passMatchingState.length > 1 && passMatchingState}
            </p>
            <button onClick={createAnUser} className={`${button}`}>
              Create an Account
            </button>

            <p className="text-gray-500 leading-4 text-sm">
              By continuing, you agree to Amazon's Conditions of Use and Privacy
              Notice.
            </p>
            <p className="text-gray-500 leading-4 text-sm mt-4">
              Already have an account:{" "}
              <span
                onClick={() => {
                  setIsNewUser(!isNewUser);
                }}
                className="text-blue-500 text-lg cursor-pointer hover:underline hover:text-olive-400"
              >
                Sign In
              </span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;

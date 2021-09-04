import React from "react";
import { Link } from "react-router-dom";
import img from "../../images/logo/amazon.png";

// import jwt_decode from "jwt-decode";

const Footer = () => {

    // const token = sessionStorage.getItem("token");
    // const decoded = jwt_decode(token);

    // console.log(decoded);
  

  const defineP = "text-white text-left font-semibold text-lg";
  const definePLink =
    "text-gray-300 text-left hover:decoration-underline cursor-pointer hover:underline";

  return (
    <div>
      <a href="#nav-top">
        <div className="bg-steel-700 py-2.5 hover:bg-steel-600">
          Back to top
        </div>
      </a>

      <div className="bg-steel-800 border-b-2 border-gray-600">
        <div className="w-3/5 py-8 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-16">
          <div>
            <p className={`${defineP}`}>Get To Know Us</p>
            <p className={`${definePLink}`}>Careers</p>
            <p className={`${definePLink}`}>Blog</p>
            <p className={`${definePLink}`}>About Amazon</p>
            <p className={`${definePLink}`}>Investor Relations</p>
            <p className={`${definePLink}`}>Amazon Devices</p>
          </div>

          <div>
            <p className={`${defineP}`}>Make Money with Us</p>
            <p className={`${definePLink}`}>Sell on Amazon</p>
            <p className={`${definePLink}`}>Sell on Amazon Business</p>
            <p className={`${definePLink}`}>Sell apps on Amazon</p>
            <p className={`${definePLink}`}>Become an Affiliate</p>
            <p className={`${definePLink}`}>Advertise Your Products</p>
            <p className={`${definePLink}`}>Self-Publish with Us</p>
            <p className={`${definePLink}`}>Host an Amazon Hub</p>
          </div>

          <div>
            <p className={`${defineP}`}>Amazon Payment Products</p>
            <p className={`${definePLink}`}>Amazon Business Card</p>
            <p className={`${definePLink}`}>Shop with Points</p>
            <p className={`${definePLink}`}>Reload your Balance</p>
            <p className={`${definePLink}`}>Amazon Currency Converter</p>
          </div>

          <div>
            <p className={`${defineP}`}>Let Us Help You</p>
            <p className={`${definePLink}`}>COVID-19 update</p>
            <p className={`${definePLink}`}>Your Account</p>
            <p className={`${definePLink}`}>Your Orders</p>
            <p className={`${definePLink}`}>Amazon Assistant</p>
            <p className={`${definePLink}`}>Help</p>
          </div>
        </div>
      </div>
      <div className="bg-steel-800 py-4">
        <div className=" w-1/5 mx-auto flex">
          <Link to="/home">
            {" "}
            <img
              className="w-24 mr-8 h-9 mx-2 mt-3 cursor-pointer"
              src={img}
              alt=""
            />
          </Link>
          <p className="text-gray-400 pt-2">Spend Less and Smile More</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../images/logo/amazon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faSearch,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import moment from "moment";
import { Link } from "react-router-dom";

const Navbar = () => {
  const commonHover =
    "mr-1 border border-transparent cursor-pointer rounded hover:border-gray-200 text-lg";
  const leftSideNavProperty = `px-2 ${commonHover}`;
  const secondNav = `ml-3 px-1.5 pl-4 pt-0 text-white text-md font-semibold ${commonHover}`;

  const [time, setTime] = useState("");

  setInterval(() => {
    setTime(moment().format("LTS"));
  }, 1000);

  return (
    <>
      <div className="fixed z-10 w-full bg-gray-900 ">
        <div className="py-1 px-3 flex">
          <Link to="/home">
            {" "}
            <img
              className="w-28 h-9 mx-2 mt-3 cursor-pointer"
              src={logo}
              alt=""
            />
          </Link>

          <div className=" pl-4 flex">
            <div className="pt-4">
              <FontAwesomeIcon className="text-xl mr-2" icon={faMapMarkerAlt} />
            </div>
            <span className="w-20 text-sm text-gray-400 text-left">
              Deliver to {` `}
              <span className="text-lg font-semibold text-white">TX, USA</span>
            </span>
          </div>

          <div className="flex-1 text-gray-900 navSrcInput mt-2">
            <input
              className="w-3/4 px-3 h-9 text-gray-900 border rounded-tl-md rounded-bl-md border-transparent focus:outline-none focus:ring-2 focus:ring-olive-300 focus:border-transparent"
              type="text"
              placeholder="Search for your Product"
            />
            <button className="h-9 px-2 bg-olive-300 rounded-tr-md rounded-br-md hover:bg-olive-400 focus:outline-none focus:ring-2 focus:ring-olive-300 focus:ring-opacity-50 srchBtnFromNav">
              <FontAwesomeIcon icon={faSearch} /> Search
            </button>
          </div>

          <div className="flex accountPreviewNav">
            <div className={` flex items-center ${leftSideNavProperty} pt-1`}>
              <span className="rounded-full h-2 mr-1 w-2 flex items-center justify-center bg-olive-300"></span>
              EN
            </div>

            <Link to="/login">
              <div className={`pt-2 pb-2 ${leftSideNavProperty}`}>Sign In</div>
            </Link>

            <div className={`pt-2 ${leftSideNavProperty}`}>
              Returns & Orders
            </div>

            <div className={`pt-2 ${leftSideNavProperty}`}>
              <FontAwesomeIcon
                className="text-2xl mr-1"
                icon={faShoppingCart}
              />
              <span className="text-lg font-semibold">Cart</span>
              <span className="font-semibold orderedItemInNav text-2xl pl-1 text-olive-300">
                (0)
              </span>
            </div>
          </div>
        </div>
      </div>
      <div
        id="nav-top"
        className="pt-16 pb-1 flex pr-16 justify-between bg-steel-800"
      >
        <div className="flex">
          <Link to="/home">
            <div className={`${secondNav}`}>Home</div>
          </Link>

          <div className={`${secondNav}`}>Books</div>
          <div className={`${secondNav}`}>Electronics</div>

          <div className={`${secondNav}`}>T-shirt</div>
          <div className={`${secondNav}`}>Amazon Prime</div>

          <div className={`${secondNav}`}>Customer Service</div>

          <div className={`text-olive-300 ${secondNav}`}>
            <a
              href="https://hojayfa.netlify.app/"
              rel="noreferrer"
              target="_blank"
            >
              Dev Profile
            </a>
          </div>
        </div>
        <div className="font-semibold text-lg text-olive-300">{time}</div>
      </div>
    </>
  );
};

export default Navbar;

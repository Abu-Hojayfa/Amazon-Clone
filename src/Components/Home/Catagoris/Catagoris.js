import React from "react";

// images
import compAcc from "../../../images/image/comp&acc.jpg";
import acc2 from "../../../images/image/games.jpg";
import acc3 from "../../../images/image/getFit.jpg";
import acc4 from "../../../images/image/oclus.jpg";
import acc5 from "../../../images/image/phn&acc.jpg";
import acc6 from "../../../images/image/tv.jpg";
import acc7 from "../../../images/image/electronics.jpg";
import ship from "../../../images/image/ship.jpg";
import { Link } from "react-router-dom";

const Catagoris = () => {
  const boxStyle = "bg-white p-5 cursor-pointer rounded";
  const infoNameShop = "text-left py-2 text-2xl font-semibold";
  const infoShop =
    "text-blue-500 text-left mt-3 text-md hover:text-olive-800 hover:underline";
  const shopImg = "w-full h-84 rounded";
  const button =
    "px-10 lg:px-28 py-2 bg-olive-300 rounded-md hover:bg-olive-400 focus:outline-none focus:ring-2 focus:ring-olive-300 focus:ring-opacity-50 border border-gray-500 text-black font-semibold mt-6 mb-4";

  return (
    <div className="py-5 mx-12 transform  -translate-y-24 md:-translate-y-44 lg:-translate-y-96">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-black">
        <div className={`${boxStyle}`}>
          <div className="p-0 m-0 h-40">
            <p className={`${infoNameShop}`}>Computers & Accessories</p>
            <img className={`${shopImg}`} src={compAcc} alt="" />
            <p className={`${infoShop}`}>Shop Now</p>
          </div>
        </div>

        <div className={`${boxStyle}`}>
          <div className="p-0 m-0 h-40">
            <p className={`${infoNameShop}`}>Gaming Components</p>
            <img className={`${shopImg}`} src={acc2} alt="" />
            <p className={`${infoShop}`}>Shop Now</p>
          </div>
        </div>

        <div className={`${boxStyle}`}>
          <div>
            <p className={`${infoNameShop}`}>Get Fit at Home</p>
            <img className={`${shopImg}`} src={acc3} alt="" />
            <p className={`${infoShop}`}>Shop Now</p>
          </div>
        </div>

        <div>
          <div className={`${boxStyle}`}>
            <p className={`${infoNameShop} text-center`}>
              Sign in for the best experience
            </p>
            <Link to="/login">
              <button className={`${button}`}>Sign in Securely</button>
            </Link>
          </div>
          <div className="p-6">
            <img
              className="rounded-md mx-auto cursor-pointer"
              src={ship}
              alt=""
            />
          </div>
        </div>

        <div className={`${boxStyle}`}>
          <div>
            <p className={`${infoNameShop}`}>Oculus</p>
            <img className={`${shopImg}`} src={acc4} alt="" />
            <p className={`${infoShop}`}>Shop Now</p>
          </div>
        </div>

        <div className={`${boxStyle}`}>
          <div>
            <p className={`${infoNameShop}`}>Phone & Accessories</p>
            <img className={`${shopImg}`} src={acc5} alt="" />
            <p className={`${infoShop}`}>Shop Now</p>
          </div>
        </div>

        <div className={`${boxStyle}`}>
          <div>
            <p className={`${infoNameShop}`}>Electronics</p>
            <img className={`${shopImg}`} src={acc7} alt="" />
            <p className={`${infoShop}`}>Shop Now</p>
          </div>
        </div>

        <div className={`${boxStyle}`}>
          <div className="p-0 m-0 h-40">
            <p className={`${infoNameShop}`}>Find your ideal TV</p>
            <img className={`${shopImg}`} src={acc6} alt="" />
            <p className={`${infoShop}`}>Shop Now</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catagoris;

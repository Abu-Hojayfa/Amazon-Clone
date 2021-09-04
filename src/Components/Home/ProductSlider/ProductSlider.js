import React from "react";
import SlideCatagori from "./SlideCatagori/SlideCatagori";

// image
// chair
import c1 from "../../../images/accessories/games/chair1.jpg";
import c2 from "../../../images/accessories/games/chair2.jpeg";
import c3 from "../../../images/accessories/games/chair4.jpg";
// keyboard
import k1 from "../../../images/accessories/games/k1.jpg";
import k2 from "../../../images/accessories/games/k2.jpg";
// mouse
import m1 from "../../../images/accessories/games/m1.jpg";
import m2 from "../../../images/accessories/games/m2.jpg";
import m3 from "../../../images/accessories/games/m3.jpg";
// headset
import h1 from "../../../images/accessories/games/h1.jpg";
import h2 from "../../../images/accessories/games/h2.jpg";
import h3 from "../../../images/accessories/games/h3.jpg";
// full pc
import fd1 from "../../../images/accessories/games/fd1.jpg";
import fd2 from "../../../images/accessories/games/fd2.jpg";
import fd3 from "../../../images/accessories/games/fd3.jpg";

// t-shirts and fitness
import f1 from "../../../images/accessories/ts-fit/f1.jpg";
import f2 from "../../../images/accessories/ts-fit/f2.jpg";
import f3 from "../../../images/accessories/ts-fit/f3.jpg";
import f4 from "../../../images/accessories/ts-fit/f4.jpg";
import f5 from "../../../images/accessories/ts-fit/f5.jpg";
import f6 from "../../../images/accessories/ts-fit/f6.jpg";

// shirts
import s1 from "../../../images/accessories/ts-fit/s1.jpg";
import s2 from "../../../images/accessories/ts-fit/s2.jpg";
import s3 from "../../../images/accessories/ts-fit/s3.jpg";
import s4 from "../../../images/accessories/ts-fit/s4.jpg";
import s5 from "../../../images/accessories/ts-fit/s5.jpg";
import s6 from "../../../images/accessories/ts-fit/s6.jpg";
import s7 from "../../../images/accessories/ts-fit/s7.jpg";

const ProductSlider = () => {
  const imgGames = [
    {
      id: "fd2",
      imgLink: fd2,
    },
    {
      id: "m2",
      imgLink: m2,
    },
    {
      id: "c2",
      imgLink: c2,
    },
    {
      id: "h1",
      imgLink: h1,
    },
    {
      id: "m3",
      imgLink: m3,
    },
    {
      id: "h2",
      imgLink: h2,
    },
    {
      id: "h3",
      imgLink: h3,
    },
    {
      id: "k1",
      imgLink: k1,
    },
    {
      id: "k2",
      imgLink: k2,
    },
    {
      id: "c3",
      imgLink: c3,
    },
    {
      id: "fd1",
      imgLink: fd1,
    },
    {
      id: "m1",
      imgLink: m1,
    },
    {
      id: "fd3",
      imgLink: fd3,
    },
    {
      id: "c1",
      imgLink: c1,
    },
  ];

  const imgFit = [
    {
      id: "s1",
      imgLink: s1,
    },
    {
      id: "f1",
      imgLink: f1,
    },
    {
      id: "f2",
      imgLink: f2,
    },
    {
      id: "s2",
      imgLink: s2,
    },
    {
      id: "s3",
      imgLink: s3,
    },
    {
      id: "f3",
      imgLink: f3,
    },
    {
      id: "s4",
      imgLink: s4,
    },
    {
      id: "f4",
      imgLink: f4,
    },
    {
      id: "s5",
      imgLink: s5,
    },
    {
      id: "f5",
      imgLink: f5,
    },
    {
      id: "s6",
      imgLink: s6,
    },
    {
      id: "f6",
      imgLink: f6,
    },
    {
      id: "s7",
      imgLink: s7,
    },
  ];

  return (
    <div style={{height:'50vh'}} >
      <SlideCatagori sub="Computers & Accessories" img={imgGames} />
      <SlideCatagori sub="T-shirt & Fitness" img={imgFit} />
    </div>
  );
};

export default ProductSlider;

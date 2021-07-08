import React from 'react';
import Catagoris from '../Catagoris/Catagoris';
import ProductSlider from '../ProductSlider/ProductSlider';
import TopSlider from '../TopSlider/TopSlider';

const Home = () => {
  return (
    <div>
      <TopSlider />
      <Catagoris />
      <ProductSlider />
    </div>
  );
};

export default Home;
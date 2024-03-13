import React from 'react';
import Header from '../components/Header2';
import main from '../assets/this.jpg';

const Slide1 = () => {
  return (
    <div className="bg-no-repeat bg-cover bg-center w-[98.7vw] h-screen" style={{backgroundImage: `url(${main})`}}>
      {/* Content of your component */}
      <Header />
    </div>
  );
}

export default Slide1;

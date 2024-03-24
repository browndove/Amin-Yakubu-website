import React, { useState } from 'react';
import Header from '../components/Header';
import backgroundImage1984 from '../assets/work3.jpg';
import backgroundImage1985 from '../assets/work2.jpg';
import backgroundImage1987 from '../assets/work1.jpg';
// Import other images as needed

const About = () => {
  const [activeCard, setActiveCard] = useState(0);

  const handleCardClick = (index) => {
    setActiveCard(index);
  };

  // Text content for each date
  const textContent = [
    "Text related to 1984",
    "Text related to 1985",
    "Text related to 1987"
    // Add text content for other dates as needed
  ];

  // Background images for each date
  const backgroundImageUrls = [
    backgroundImage1984,
    backgroundImage1985,
    backgroundImage1987,
    // Add other image imports here
  ];

  // Function to get the text content based on the active card index
  const getTextContent = () => {
    if (activeCard !== null) {
      return textContent[activeCard];
    }
    return "";
  };

  // Function to get the background image URL based on the active card index
  const getBackgroundImage = () => {
    if (activeCard !== null) {
      return backgroundImageUrls[activeCard];
    }
    return "none"; // Default background image if no date is selected
  };

  return (
    <div className='bg-white w-screen h-screen' style={{ 
      backgroundImage: `url(${getBackgroundImage()})`,
      backgroundSize: 'cover', // Example styling - adjust as needed
      backgroundPosition: 'center', // Example styling - adjust as needed
      backgroundRepeat: 'no-repeat' // Example styling - adjust as needed
    }}>
      <div className='fixed w-screen z-30'>
        <Header />
      </div>

      <div className='flex items-center h-full justify-center flex-col'>
        {/* Bordered container for dates */}
        <div className='border border-white rounded-lg p-4 mb-4 bg-gray-900 shadow-lg'>
  <ul className='flex justify-between'>
    <li className={`cursor-pointer ${activeCard === 0 ? 'text-white font-bold' : 'text-[#F7FFF7]'}`} onClick={() => handleCardClick(0)}>
      <div className='mr-2'>1984</div>
    </li>
    <li className={`cursor-pointer ${activeCard === 1 ? 'text-white font-bold' : ''}`} onClick={() => handleCardClick(1)}>
      <div className='mr-2'>1985</div>
    </li>
    <li className={`cursor-pointer ${activeCard === 2 ? 'text-white font-bold' : ''}`} onClick={() => handleCardClick(2)}>
      <div>1987</div>
    </li>
    {/* Add other dates similarly */}
  </ul>
</div>


        {/* Bordered container for text content */}
       <div className='border border-gray-400 rounded-lg p-4 bg-white shadow-md'>
  <div className='text-center'>
    <p className='text-gray-800 font-medium'>{getTextContent()}</p>
  </div>
</div>

      </div>
    </div>
  );
};

export default About;
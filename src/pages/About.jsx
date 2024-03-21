import React from 'react';
import { motion } from 'framer-motion';
import { FullPage, Slide } from 'react-full-page';
import Header from '../components/Header';
import image from '../assets/about.jpg'; // Import your image
import "./about.css"

const About = () => {
  return (
    <>
    <div className='fixed w-screen z-30'>
      <Header/>
    </div>
    <FullPage>
      <Slide className="bg-white w-[100vw] h-[100vh] ">

       
        <div className="bg-white real w-full h-[70%]  flex flex-col ">
          <img src={image} alt="Image" className=" w-full uzi mb-4" />
        
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-4xl font-bold text-gray-800 mb-4 flex justify-center items-center"
          >
            Introduction
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-lg text-gray-700 max-w-lg text-center"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed sit amet elit at ligula porttitor consequat. Duis laoreet nisi in ex scelerisque feugiat.
          </motion.div>
      
        </div>
      </Slide>
      <Slide className="bg-white">
        <div className="bg-white  flex flex-col justify-center items-center">
          <img src={image} alt="Image" className=" uzi  mb-4" />
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-4xl font-bold text-gray-800 mb-4"
          >
            Our Story Begins
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-lg text-gray-700 max-w-lg text-center"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed sit amet elit at ligula porttitor consequat. Duis laoreet nisi in ex scelerisque feugiat.
          </motion.div>
        </div>
      </Slide>
      {/* Add more slides as needed */}
    </FullPage>
    </>
  );
}

export default About;

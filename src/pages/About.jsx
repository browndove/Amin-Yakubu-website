import React from 'react';
import { motion } from 'framer-motion';
import { FullPage, Slide } from 'react-full-page';
import Header from '../components/Header';

const About = () => {
  return (
    <>
    <div className='fixed w-screen z-30'>
    <Header/>
    </div>
    <FullPage>
      <Slide>
        <div className="bg-white w-screen h-screen flex flex-1 flex-col justify-center items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-4xl font-bold text-gray-800 mb-8 flex justify-center items-center"
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
      <Slide>
        <div className="bg-white w-screen h-screen flex flex-col justify-center items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-4xl font-bold text-gray-800 mb-8"
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

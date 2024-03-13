import React from 'react'
import { FullPage, Slide } from 'react-full-page';
import Slide1 from '../mini/Slide1';

const About = () => {
  return (
    <div>
       <FullPage >
        <Slide>

          <Slide1 />

          
        </Slide>
        <Slide>
          <h1>Another slide content</h1>
        </Slide>
      </FullPage>
    </div>
  )
}

export default About

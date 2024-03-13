import React from 'react'
import Header from '../components/Header'
import aboutimg from "../assets/about.jpg"
import AlternateTimeline from '../constants/Timeline'

const Real = () => {
  return (
    <div className=''>
        <Header/>
      <div className=' mt-[2.5rem] flex justify-center'>
            <img src={aboutimg} alt="" className='w-[20rem] h-[20rem]' />
      </div>
      <div className='mx-[3.5rem] mt-[2rem] text-black font-bold text-2xl'>
        Hello, I'm Amin Yakubu
      </div>
<p className=' mx-[3.5rem]'>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium voluptatum saepe aliquid dolore magni a quisquam nulla, ducimus earum  doloremque quasi voluptate aliquam similique ratione tenetur porro consectetur commodi. Voluptates.
</p>

<div className='mt-[2rem]'>
    <AlternateTimeline />
</div>

    </div>
  )
}

export default Real

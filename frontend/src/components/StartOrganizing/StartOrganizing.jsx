import React from 'react'
import image from '../../assets/images/image-2.png'

export const StartOrganizing = () => {
  return (
    <div className="w-full h-full py-16 lg:px-48 md:px-36 px-5">
      <div className='w-full h-full flex sm:flex-row flex-col-reverse items-center justify-between gap-8'>
        <div className='sm:w-1/2 w-full h-full'>
          <div className='w-full h-full'>
            <img src={image} alt="" />
          </div>
        </div>
        <div className='sm:w-1/2 w-full h-full'>
          <div className='w-full h-full'>
            <h1 className='lg:text-8xl text-6xl font-medium mb-8'>Start Organizing Your Life Today</h1>
            <p className='md:text-4xl text-2xl font-light mb-8'>Join us now and transform your productivity with our intuitive to-do list platform!</p>
            <div className='flex items-center gap-4'>
              <button className='py-4 px-8 bg-[#ff3e54] text-2xl text-white font-light'>Sign Up</button>
              <button className='py-4 px-8 bg-transparent text-2xl text-black border border-[#ff3e54] font-light'>Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

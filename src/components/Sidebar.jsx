import React from 'react'
import {assets} from '../assets/frontend-assets/assets' 

const Sidebar = () => {
  return (
    <div className='w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex'>
      <div className='bg-[#121212] h-[15%] rounded flex flex-col justify-around'>
        <div className='flex items-center gap-5 pl-8 cursor-pointer'>
            <img className='w-6' src={assets.home_icon} alt="Home" />
            <p className='font-bold'>Home</p>
        </div>

        <div className='flex items-center gap-5 pl-8 cursor-pointer'>
            <img className='w-6' src={assets.search_icon} alt="Home" />
            <p className='font-bold'>Search</p>
        </div>
      </div>

      <div className='bg-[#121212] h-[85%] rounded'>
        <div className='p-4 flex items-center justify-between'>
          <div className='flex items-center gap-5'>
            <img className='ml-4 w-6' src={assets.stack_icon} alt="Stack Icon" />
              <p className='font-semibold'>Your Library</p>
          </div>

          <div className='flex items-center gap-3'>
            <img className='w-5' src={assets.arrow_icon} alt="Arrow" />
            <img className='w-5' src={assets.plus_icon} alt="Arrow" />
          </div>
        </div>

        <div className='p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4'>
          <h1>Create your first playlist</h1>
          <p className='text-[14px] mt-1'>It's easy, we'll help you</p>
          <button className='px-4 py-1.5 rounded-full bg-white text-[15px] text-black mt-4'>Create playlist</button>
        </div>

        <div className='p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4 mt-4'>
          <h1>We'll keep you upated on new episodes</h1>
          <p className='text-[14px] mt-1'>It's easy, we'll help you</p>
          <button className='px-4 py-1.5 rounded-full bg-white text-[15px] text-black mt-4'>Browse podcasts</button>
        </div>
      </div>
    </div>
  )
}

export default Sidebar

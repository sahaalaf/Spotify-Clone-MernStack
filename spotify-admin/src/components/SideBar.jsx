import React from 'react'
import { assets } from '../assets/admin-assets/assets'
import { NavLink } from 'react-router-dom'

const SideBar = () => {
  return (
    <div className='bg-[#003A10] min-h-screen pl-[4vw]'>
      <img src={assets.logo} className='mt-10 w-[120px] ml-5  hidden sm:block'/>
      <img src={assets.logo_small} className='mt-5 w-[50px] mr-5 sm:hidden block'/>

      <div className='flex flex-col gap-6 mt-10 ml-2 w-[200px]'>
        <NavLink to='/add-song' className='flex items-center gap-3 text-gray-800 bg-white border-black p-2 pr-[20px] drop-shadow-[-4px_4px_#00FF5B] text-sm font-medium'>
            <img src={assets.add_song} className='w-5'/>
            <p className='hiddem sm:block'>Add Songs</p>
        </NavLink>

        <NavLink to="/list-song" className='flex items-center gap-3 text-gray-800 bg-white border-black p-2 pr-[20px] drop-shadow-[-4px_4px_#00FF5B] text-sm font-medium'>
            <img src={assets.song_icon} className='w-5'/>
            <p className='hiddem sm:block'>List Songs</p>
        </NavLink>

        <NavLink to="/add-album" className='flex items-center gap-3 text-gray-800 bg-white border-black p-2 pr-[20px] drop-shadow-[-4px_4px_#00FF5B] text-sm font-medium'>
            <img src={assets.add_album} className='w-5'/>
            <p className='hiddem sm:block'>Add Albums</p>
        </NavLink>

        <NavLink to="/list-album" className='flex items-center gap-3 text-gray-800 bg-white border-black p-2 pr-[20px] drop-shadow-[-4px_4px_#00FF5B] text-sm font-medium'>
            <img src={assets.album_icon} className='w-5'/>
            <p className='hiddem sm:block'>List Albums</p>
        </NavLink>
      </div>
    </div>
  )
}

export default SideBar

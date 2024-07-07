import React from 'react'
import { assets } from '../assets/frontend-assets/assets'
import { useNavigate } from 'react-router-dom'


const Navbar = () => {

    const navigate = useNavigate();
    return (
        <>
            <div className='w-full flex justify-between items-center font-semibold'>
                <div className='flex items-center gap-2'>
                    <img onClick={()=>navigate(-1)} className='w-8 bg-black p-2 rounded-s-2xl cursor-pointer' src={assets.arrow_left} />
                    <img onClick={()=>navigate(+1)} className='w-8 bg-black p-2 rounded-s-2xl cursor-pointer' src={assets.arrow_right} />
                </div>

                <div className='flex items-center gap-3 mt-4'>
                    <p className='bg-white text-black text-[15px] px-4 py-1 hidden md:block rounded-2xl cursor-pointer hover:text-[15.4px]'>Explore Premium</p>
                    <p className='bg-black text-white px-3 py-1 rounded-2xl text-[15px] cursor-pointer flex items-center gap-1'><span><img className='w-4 h-4' src={assets.download}/></span>Install App</p>
                    <p><i className="fa-regular fa-bell text-[20px] bg-black w-8 h-8 rounded-2xl flex items-center justify-center p-2 cursor-pointer"></i></p>
                    <p className='bg-purple-500 text-black w-7 h-7 rounded-2xl flex items-center justify-center cursor-pointer'>S</p>
                </div>
            </div>

            <div className='flex items-center gap-2 mt-4'>
                <p className='bg-white text-black font-light-400 px-3 py-1 rounded-2xl'>All</p>
                <p className='bg-[#343334] text-white font-light-400 px-3 py-1 rounded-2xl'>Music</p>
                <p className='bg-[#343334] text-white font-light-400 px-3 py-1 rounded-2xl'>Podcasts</p>

            </div>
        </>
    )
}

export default Navbar

import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HeroHome from './HeroHome'

const Hero = () => {
  return (
    <div className='w-[100%] m-2 px-6 rounded bg-[#121212] text-white overflow-auto lg:w-[75%] lg: ml-0'>
      <Routes>
        <Route path='/' element={<HeroHome/>} />
      </Routes>
    </div>
  )
}

export default Hero

import React, { useEffect, useRef } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import HeroHome from './HeroHome'
import ShowAlbums from './ShowAlbums'
import { albumsData } from '../assets/frontend-assets/assets'

const Hero = () => {
  const displayRef = useRef();
  const location = useLocation();
  const isAlbum = location.pathname.includes("album");
  const albumID = isAlbum ? location.pathname.slice(-1) : "";
  const backColor = albumsData[Number(albumID)].bgColor;

  useEffect(()=>{
    if(isAlbum){
      displayRef.current.style.background = `linear-gradient(${backColor}, #121212)`
    }
  })

   
  return (
    <div ref={displayRef} className='w-[100%] m-2 px-6 rounded bg-[#121212] text-white overflow-auto lg:w-[75%] lg: ml-0'>
      <Routes>
        <Route path='/' element={<HeroHome/>} />
        <Route path='/album/:id' element={<ShowAlbums/>}/>
      </Routes>
    </div>
  )
}

export default Hero

import React from 'react'
import Navbar from './Navbar'
import { albumsData, songsData } from '../assets/frontend-assets/assets'
import AlbumData from './AlbumData'
import SongsItems from './SongsItems'

const HeroHome = () => {
  return (
    <>
      <Navbar />
      <div className='mb-4'>
        <h1 className='font-bold text-2xl my-5'>Featured Charts</h1>
        <div className='flex overflow-auto'>
          {albumsData.map((item, index) => (<AlbumData key={index} name={item.name} desc={item.desc} id={item.id} image={item.image} />))}
        </div>
      </div>

      <div className='mb-4'>
        <h1 className='font-bold text-2xl my-5'>Toady's Biggest Hits</h1>
        <div className='flex overflow-auto'>
         {songsData.map((item, index) =>(<SongsItems key={index} name={item.name} desc={item.desc} id={item.id} image={item.image} />))}
        </div>
      </div>
    </>
  )
}

export default HeroHome

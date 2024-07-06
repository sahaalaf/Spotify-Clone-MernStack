import React, { useContext } from 'react'
import Sidebar from './components/Sidebar'
import Player from './components/Player'
import Hero from './components/Hero'
import { PlayerContext } from './context/PlayerContext'

const App = () => {

  const {audioRef} = useContext(PlayerContext);
  return (
    <div className='h-screen bg-black'>
      <div className='h-[90%] flex'>
        <Sidebar/>
        <Hero/>
      </div>

      <div>
      <Player/>
      
      <audio ref={audioRef} preload='auto'></audio>
      </div>
    </div>
  )
}

export default App

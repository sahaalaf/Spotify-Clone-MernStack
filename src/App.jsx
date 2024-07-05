import React from 'react'
import Sidebar from './components/Sidebar'
import Player from './components/Player'
import Hero from './components/Hero'

const App = () => {
  return (
    <div className='h-screen bg-black'>
      <div className='h-[90%] flex'>
        <Sidebar/>
        <Hero/>
      </div>

      <div>
      <Player/>
      </div>
    </div>
  )
}

export default App

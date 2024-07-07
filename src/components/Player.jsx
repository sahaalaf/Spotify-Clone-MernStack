import React, { useContext } from 'react'
import { assets } from '../assets/frontend-assets/assets'
import { PlayerContext } from '../context/PlayerContext';

const player = () => {

  const { song, seekBar, seekBackground, playStatus, play, pause, time, prev, next, jumpSong, manageVolume, volume, muteSong, isMuted} = useContext(PlayerContext);

  return (
    <div className='h-[10%] bg-black flex justify-between items-center text-white px-4'>
      <div className='hidden lg:flex items-center gap-4'>
        <img className='w-12' src={song.image} />
        <div>
          <p>{song.name}</p>
          <p>{song.desc.slice(0, 12)}</p>
        </div>
      </div>

      <div className='flex flex-col items-center gap-1 ml-8'>
        <div className='flex gap-7'>
          <img className='w-4 cursor-pointer' src={assets.shuffle_icon} />
          <img onClick={prev} className='w-4 cursor-pointer' src={assets.prev_icon} />
          {playStatus
            ? <img onClick={pause} className='w-4 cursor-pointer' src={assets.pause_icon} />
            : <img onClick={play} className='w-4 cursor-pointer' src={assets.play_icon} />}

          <img onClick={next} className='w-4 cursor-pointer' src={assets.next_icon} />
          <img className='w-4 cursor-pointer' src={assets.loop_icon} />
        </div>
        <div className='flex items-center gap-5'>
          <p>{time.currentTime.minutes}:{time.currentTime.seconds}</p>
          <div ref={seekBackground} onClick={jumpSong} className='w-[30vw] max-w[500px] bg-[#a7a7a7] rounded-full cursor-pointer'>
            <hr ref={seekBar} className='h-1 border-none w-0 bg-white rounded-full' />
          </div>
          <p>{time.totalTime.minutes}:{time.totalTime.seconds}</p>
        </div>
      </div>

      <div className='hidden lg:flex items-center gap-2 opacity-75'>
        <img className='w-4' src={assets.play_icon} />
        <img className='w-4' src={assets.mic_icon} />
        <img className='w-4' src={assets.queue_icon} />
        <img className='w-4' src={assets.speaker_icon} />
        <img onClick={muteSong} className='w-4 cursor-pointer' src={isMuted ? assets.mute : assets.volume_icon} />

        <input 
          type="range" 
          min="0" 
          max="1" 
          step="0.01" 
          value={volume} 
          onChange={manageVolume} 
          className='w-20 bg-slate-50 h-1 rounded cursor-pointer'
        />
        <img className='w-4' src={assets.mini_player_icon} />
        <img className='w-4' src={assets.zoom_icon} />
      </div>
    </div>
  )
}

export default player

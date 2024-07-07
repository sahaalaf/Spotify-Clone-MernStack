import React, { useContext } from 'react';
import { PlayerContext } from '../context/PlayerContext';

const SongsItems = ({ name, image, desc, id }) => {

  const {playSongs} = useContext(PlayerContext);
  return (
    <div onClick={()=>{playSongs(id)}} className='min-w-[180px] p-2 px-2 rounded cursor-pointer hover:bg-[#ffffff26]'>
      <img className='rounded' src={image}/>
      <p className='font-bold mt-2 mb-1'>{name}</p>
      <p className='text-slate-200 text-sm'>{desc}</p>
    </div>
  );
}

export default SongsItems;

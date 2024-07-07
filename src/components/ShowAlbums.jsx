import React, { useContext, useState } from 'react';
import Navbar from './Navbar';
import { useParams } from 'react-router-dom';
import { albumsData, assets, songsData } from '../assets/frontend-assets/assets';
import { PlayerContext } from '../context/PlayerContext';

const ShowAlbums = () => {
    const { id } = useParams();
    const album = albumsData[id];
    const { playSongs } = useContext(PlayerContext);
    const [playingSongId, setPlayingSongId] = useState("");
    
    const handlePlaySong = (songId) => {
        playSongs(songId);
        setPlayingSongId(songId);
    };
    
    return (
        <>
            <Navbar />
            <div className='mt-10 flex gap-8 flex-col md:flex-row md:items-end'>
                <img className='w-48 rounded' src={album.image} alt={album.name} />
                <div className='flex flex-col'>
                    <p>Playlist</p>
                    <h2 className='text-5xl font-bold mb-4 md:text-7xl'>{album.name}</h2>
                    <h4>{album.desc}</h4>
                    <p className='mt-1'>
                        <img className='inline-block w-5 mr-2' src={assets.spotify_logo} alt="Spotify Logo" />
                        <b className='mr-2'>Spotify</b>
                        • 1,312,32223 likes
                        •<b className='ml-1'>50 songs, </b>
                        about 1 hours 45 mins
                    </p>
                </div>
            </div>

            <div className='grid grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]'>
                <p><b className='mr-4'>#</b>Title</p>
                <p>Album</p>
                <p className='hidden sm:block'>Date Added</p>
                <img className='w-4' src={assets.clock_icon} alt="Clock Icon" />
            </div>

            <hr/>

            {
                songsData.map((song, index) => (
                    <div 
                        onClick={() => handlePlaySong(song.id, song.name)} 
                        key={index} 
                        className={`grid grid-cols-4 gap-2 p-2 items-center text-[#a7a7a7] hover:[#ffffff2b] cursor-pointer ${playingSongId === song.id ? 'text-white' : ''}`}
                    >
                        <p className={playingSongId === song.id ? 'text-white' : 'text-[#a7a7a7]'}>
                            <b className='text-[#a7a7a7]'>{index + 1}</b>
                            <img className='w-10 inline ml-5' src={song.image} alt={song.name} />
                            <p className='inline ml-5'>{song.name}</p>
                        </p>

                        <p className='text-[15px] hidden sm:block'>{album.name}</p>
                        <p className='text-[15px] ml-2'>5 days ago</p>
                        <p className='text-[15px]'>{song.duration}</p>
                    </div>
                ))
            }
        </>
    );
}

export default ShowAlbums;

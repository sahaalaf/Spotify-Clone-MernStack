import React from 'react'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'
import { albumsData, assets, songsData } from '../assets/frontend-assets/assets';
const ShowAlbums = () => {

    const { id } = useParams();
    const a = albumsData[id];
    return (
        <>
            <Navbar />
            <div className='mt-10 flex gap-8 flex-col md:flex-row md:items-end'>
                <img className='w-48 rounded' src={a.image} />
                <div className='flex flex-col'>
                    <p>Playlist</p>
                    <h2 className='text-5xl font-bold mb-4 md:text-7xl '>{a.name}</h2>
                    <h4>{a.desc}</h4>
                    <p className='mt-1 '>
                        <img className='inline-block w-5 mr-2' src={assets.spotify_logo} />
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
                <img className=' w-4' src={assets.clock_icon} />
            </div>

            <hr/>

            {
                songsData.map((item, index) => (
                    <div key={index} className='grid grid-cols-4 gap-2 p-2 items-center text-[#a7a7a7] hover:[#ffffff2b] cursor-pointer'>
                        <p className='text-white'>
                            <b className='text-[#a7a7a7]'>{index + 1}</b>
                            <img className='w-10 inline ml-5' src={item.image} />
                            <p className='inline ml-5 text-[#a7a7a7]'>{item.name}</p>
                        </p>

                        <p className='text-[15px] hidden sm:block '>{a.name}</p>
                        <p className='text-[15px] ml-2'>5 days ago</p>
                        <p className='text-[15px]'>{item.duration}</p>
                    </div>
                ))
            }
        </>
    )
}

export default ShowAlbums

import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { url } from '../App';
import { toast } from 'react-toastify';

const ListOfSongs = () => {

  const [data, setData] = useState([]);

  const fetchSongs = async () => {
    try {
      const res = await axios.get(`${url}/api/song/list`);
      if (res.data.success) {
        setData(res.data.songs)
      }
    } catch (error) {
      toast.error("Error Occured.")
    }

  };
  useEffect(() => {
    fetchSongs();
  }, [])

  const removeSong = async (id) => {
    try {
      const res = await axios.post(`${url}/api/song/delete`, { id })
      if (res.data.success) {
        toast.success(res.data.message);
        await fetchSongs();
      }
    } catch (error) {
      toast.error("Error Occured.");
    }
  };

  return (
    <div>
      <p className='font-medium'>List Songs</p>
      <br />

      <div>
        <div className='sm:grid hidden grid-cols-[0.5fr_0.5fr_0.5fr_0.5fr_0.5fr] items-center p-1 gap-2.5 border border-gray-300 text-small mr-5 bg-gray-100'>
          <b>Image</b>
          <b>Name</b>
          <b>Album</b>
          <b>Duration</b>
          <b>Action</b>
        </div>
        {data.map((item, index) => {
          return (
            <div key={index} className='grid grid-cols-[1fr_1fr_1fr] sm:grid-cols-[0.5fr_0.5fr_0.5fr_0.5fr_0.5fr] items-center gap-2.5 p-3 border border-gray-300 text-sm mr-4 font-semibold'>
              <img className='w-12' src={item.image} />
              <p>{item.name}</p>
              <p>{item.album}</p>
              <p className='ml-[15px]'>{item.duration}</p>
              <p onClick={()=>{removeSong(item._id)}}><i className="fa-solid fa-xmark cursor-pointer ml-3"></i></p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ListOfSongs;

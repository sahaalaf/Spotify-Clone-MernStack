import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { url } from '../App';
import { toast } from 'react-toastify';

const ListOfAlbums = () => {

  const [data, setData] = useState([]);

  const fetchAlbums = async () => {
    try {
      const res = await axios.get(`${url}/api/album/list`);
      if (res.data.success) {
        setData(res.data.albums);
        console.log(res.data);

      } else {
        toast.error("Something wrnt wrong.");
      }
    } catch (error) {
      toast.error("Error Occured.");
    }
  };

  useEffect(() => {
    fetchAlbums();
  }, [])

  const removeSong = async (id) => {
    try {
      const res = await axios.post(`${url}/api/album/remove`, { id })
      if (res.data.success) {
        toast.success(res.data.message);
        await fetchAlbums();
      }
    } catch (error) {
      toast.error("Error Occured.");
    }
  };

  return (
    <div>
      <p className='font-medium'>List of Albums</p>
      <br />

      <div>
        <div className='sm:grid hidden grid-cols-[0.5fr_0.5fr_0.5fr_0.5fr_0.5fr] items-center p-1 gap-2.5 border border-gray-300 text-small mr-5 bg-gray-100'>
          <b>Image</b>
          <b>Name</b>
          <b>Description</b>
          <b>Color</b>
          <b>Action</b>
        </div>
        {data.map((item, index) => {
          return (
            <div key={index} className='grid grid-cols-[1fr_1fr_1fr] sm:grid-cols-[0.5fr_0.5fr_0.5fr_0.5fr_0.5fr] items-center gap-2.5 p-3 border border-gray-300 text-sm mr-5 font-semibold'>
              <img className='w-12' src={item.image} />
              <p>{item.name}</p>
              <p>{item.desc}</p>
              <input type="color" value={item.bgColor} />
              <p onClick={() => { removeSong(item._id) }}><i className="fa-solid fa-xmark cursor-pointer ml-3"></i></p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ListOfAlbums;

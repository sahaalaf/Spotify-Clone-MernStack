import React, { useEffect, useState } from 'react'
import { assets } from '../assets/admin-assets/assets'
import axios from 'axios'
import { url } from '../App';
import { toast } from 'react-toastify';

const AddSong = () => {

  const [image, setImage] = useState(false);
  const [song, setSong] = useState(false);
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [album, setAlbum] = useState("none");
  const [loading, setLoading] = useState(false);
  const [albumData, setAlbumData] = useState([]);


  const onSubmitForm = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('desc', desc);
      formData.append('image', image);
      formData.append('audio', song)
      formData.append('album', album);

      const res = await axios.post(`${url}/api/song/add`, formData);
      if(res.data.success){
        toast.success("Song Added");
        setName("");
        setDesc("");
        setAlbum("none");
        setImage(false);
        setSong(false);
      } else {
        toast.error("Failed to Add Song");
      }
      
    } catch (error) {
        console.log(error);
      toast.error("Error Occured", error);
    }
    setLoading(false);
  };

  const loadAlbumsInSongs = async ()=>{
    try {
      const res = await axios.get(`${url}/api/album/list`);
      if(res.data.success){
        setAlbumData(res.data.albums);
      } else {
        toast.error("Error Duting Loading Albums");
      }
      
    } catch (error) {
      toast.error("Error Occured.");
    }
  };

  useEffect(()=>{
    loadAlbumsInSongs();
  },[]);

   return loading ? (
    <div className='grid place-items-center min-h-[80vh]'>
      <div className='w-16 h-16 place-self-center border-4 border-gray-400 border-t-green-800 rounded-full animate-spin'>

      </div>

    </div> 
  ) : (
    <form onSubmit={onSubmitForm} className='flex flex-col gap-8 items-start text-gray-600'>
      <div className='flex gap-8'>
        <div className='flex flex-col gap-4'>
          <p>Upload Song</p>
          <input onChange={(e) => { setSong(e.target.files[0]) }} type="file" id='song' accept='audio/*' hidden />
          <label htmlFor="song">
            <img src={song ? assets.upload_added : assets.upload_song} className='w-24 cursor-pointer' />
          </label>
        </div>
        <div className='flex flex-col gap-4'>
          <p>Upload Image</p>
          <input onChange={(e) => { setImage(e.target.files[0]) }} type="file" id='image' accept='image/*' hidden />
          <label htmlFor="image">
            <img src={image ? URL.createObjectURL(image) : assets.upload_area} className='w-24 cursor-pointer' />
          </label>
        </div>
      </div>

      <div className='flex flex-col gap-3'>
        <p>Song Name</p>
        <input onChange={(e) => { setName(e.target.value) }} value={name} type="text" placeholder='Type Song Name' required className='bg-transparent outline-green-600 border-2 border-gray-400 p-2 w-[20rem] ' />
      </div>
      <div className='flex flex-col gap-3'>
        <p>Song Description</p>
        <input onChange={(e) => { setDesc(e.target.value) }} value={desc} type="text" placeholder='Type Song Description' required className='bg-transparent outline-green-600 border-2 border-gray-400 p-2 w-[20rem] ' />
      </div>

      <div className='flex flex-col gap-3'>
        <p>Song Album</p>
        <select onChange={(e) => { setAlbum(e.target.value) }} defaultValue={album} className='bg-transparent outline-green-600 border-2 border-gray-400 p-2 w-[20rem]'>
          <option value="none">None</option>
          {albumData.map((item, index)=>(<option value={item.name} key={index}>{item.name}</option>))}
        </select>
      </div>
      <button className='bg-black p-2 rounded-md text-white w-[100px] cursor-pointer'>Add Song</button>
    </form>
  ) 
}

export default AddSong;

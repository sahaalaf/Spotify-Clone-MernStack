import React, { useState } from 'react'
import { assets } from '../assets/admin-assets/assets'
import axios from 'axios';
import { url } from '../App';
import { toast } from 'react-toastify';

const AddAlbum = () => {

  const [image, setImage] = useState(false);
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [color, setColor] = useState("#ffffff");
  const [loading, setLoading] = useState(false);

  const onSubmitForm = async (e)=>{
    e.preventDefault();
    setLoading(true);
    try {
      const form = new FormData();
      form.append('name', name);
      form.append('desc', desc);
      form.append('bgColor',color);
      form.append('image',image);

      const res = await axios.post(`${url}/api/album/add`, form);
      if(res.data.success) {
        toast.success("Album Added Successfully.");
        setName("");
        setDesc("");
        setImage(false);
        setColor("#ffffff");
      } else {
        toast.error("Error Occured.");
      }
      
    } catch (error) {
      toast.error("Error Occured.");
    }
    setLoading(false);
  };

  return loading ? (
    <div className='grid place-items-center min-h-[80vh]'>
      <div className='w-16 h-16 place-self-center border-4 border-gray-400 border-t-green-800 rounded-full animate-spin'>
      </div>

    </div>
  ) : (
    <form onSubmit={onSubmitForm} className='flex flex-col items-start gap-8 text-gray-800'>
      <div className='flex flex-col gap-4'>
        <p className='font-medium'>Upload Image</p>
        <input onChange={(e) => { setImage(e.target.files[0]) }} type="file" id="image" accept='image/*' hidden />
        <label htmlFor="image">
          <img src={image ? assets.upload_added : assets.upload_area} className='w-24' />
        </label>
      </div>

      <div className='flex flex-col gap-2.5'>
        <p className='font-medium'>Album Name</p>
        <input onChange={(e) => { setName(e.target.value) }} value={name} type="text" className='bg-transparent outline-green-600 border-2 border-gray-400 p-2 w-[20rem]' placeholder='Type Album Name' />
      </div>

      <div className='flex flex-col gap-2.5'>
        <p className='font-medium'>Album Description</p>
        <input onChange={(e) => { setDesc(e.target.value) }} value={desc} type="text" className='bg-transparent outline-green-600 border-2 border-gray-400 p-2 w-[20rem]' placeholder='Type Album Description' />
      </div>

      <div className='flex flex-col gap-2.5'>
        <p className='font-medium'>Album Background Color</p>
        <input onChange={(e) => { setColor(e.target.value) }} value={color} type="color" />
      </div>
      <button className='bg-black p-2 rounded-md text-white w-[100px] cursor-pointer'>Add Album</button>
    </form>
  )
}

export default AddAlbum

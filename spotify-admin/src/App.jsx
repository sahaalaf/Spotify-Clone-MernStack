import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from 'react-router-dom';
import AddSong from './pages/AddSong';
import AddAlbum from './pages/AddAlbum';
import ListOfSongs from './pages/ListOfSongs';
import ListOfAlbums from './pages/ListOfAlbums';
import SideBar from './components/SideBar';
import Navbar from './components/Navbar';

export const url = "http://localhost:4000";

const App = () => {
  return (
    <div className='flex items-start min-h-screen'>
      <ToastContainer/>
      <SideBar/>
      <div className='flex-1 h-screen overflow-y bg-[[#f3fff7]'>
        <Navbar/>
        <div className='pt-8 pl-5 sm:pt-12 sm:pl-12'>
          <Routes>
            <Route path='/add-song' element={<AddSong/>}/>
            <Route path='/add-album' element={<AddAlbum/>}/>
            <Route path='/list-song' element={<ListOfSongs/>}/>
            <Route path='/list-album' element={<ListOfAlbums/>}/>
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App

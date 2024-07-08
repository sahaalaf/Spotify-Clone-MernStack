import { v2 as cloudinary } from 'cloudinary';
import songModel from '../models/songModel.js';
import { request, response } from 'express';

const addSongs = async (request, response) => {
    try {
        const { name, desc, album } = request.body;
        const audioFile = request.files.audio[0];
        const imageFile = request.files.image[0];

        const audioUpload = await cloudinary.uploader.upload(audioFile.path, { resource_type: "video" });
        const imageUpload = await cloudinary.uploader.upload(imageFile.path, { resource_type: "image" });

        const duration = `${Math.floor(audioUpload.duration / 60)}:${Math.floor(audioUpload.duration % 60)}`;

        const songData = {
            name,
            desc,
            album,
            image: imageUpload.secure_url, 
            file: audioUpload.secure_url,
            duration
        };

        const song = new songModel(songData);
        await song.save();
        response.json({ success: true, message: "Song Added!" });
    } catch (error) {
        console.error("Error adding song:", error);
        response.json({ success: false, message: "Failed to add Song!" });
    }
};

const listSongs = async (request, response) => {
    try {
        const listOfSongs = await songModel.find({});
        response.json({success: true, songs: listOfSongs})
    } catch (error) {
        response.json({success: false, message: error})
    }
};

const removeSongs = async (request, response) => {
    try {
        await songModel.findByIdAndDelete(request.body.id);
        response.json({success: true, message: "Song Removed"})
        
    } catch (error) {
        console.error("Error adding song:", error);
        response.json({success: false, message: error})
    }
};


export { addSongs, listSongs, removeSongs };

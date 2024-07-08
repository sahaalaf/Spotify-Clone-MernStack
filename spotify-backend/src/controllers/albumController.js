import { v2 as cloudinary } from "cloudinary";
import albumModel from "../models/albumModel.js";
import { request, response } from "express";

const addAlbum = async (request, response) => {
  try {
    const name = request.body.name;
    const desc = request.body.desc;
    const bgColor = request.body.bgColor;
    const imageFile = request.file;
    const uploadImage = await cloudinary.uploader.upload(imageFile.path, {
      resource_type: "image",
    });

    const albumData = {
      name,
      desc,
      bgColor,
      image: uploadImage.secure_url,
    };

    const album = albumModel(albumData);
    await album.save();
    response.json({ success: true, message: "Album Added." });
  } catch (error) {
    console.error("Error adding song:", error);
    response.json({ success: false, message: error });
  }
};

const listOfAlbums = async (request, response) => {
  try {
    const listAlbums = await albumModel.find({});
    response.json({success: true, albums: listAlbums})
  } catch (error) {
    response.json({ success: false});
  }
};

const removeAlbum = async (request, response) => {
  try {
    const albumId = await albumModel.findByIdAndDelete(request.body.id);
    response.json({success: true, message: "Album Deleted Successfully"});
  } catch (error) {
    response.json({success: false});
  }
};

export { addAlbum, listOfAlbums, removeAlbum };

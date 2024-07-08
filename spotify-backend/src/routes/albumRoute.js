import express from 'express'
import update from '../middleware/multer.js'
import { addAlbum, listOfAlbums, removeAlbum } from "../controllers/albumController.js";

const albumRouter = express.Router();

albumRouter.post('/add', update.single("image"), addAlbum);
albumRouter.get('/list',listOfAlbums);
albumRouter.post('/remove', removeAlbum);

export default albumRouter;
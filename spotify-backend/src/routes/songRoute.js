import { addSongs, listSongs, removeSongs } from "../controllers/songController.js";
import express from 'express'
import update from "../middleware/multer.js";


const songRouter = express.Router();
songRouter.post('/add', update.fields([{name:'image', maxCount:1}, {name: 'audio', maxCount:1}]), addSongs);
songRouter.get('/list', listSongs);
songRouter.post('/delete', removeSongs)


export default songRouter;

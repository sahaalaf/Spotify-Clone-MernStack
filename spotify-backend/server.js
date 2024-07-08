import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import songRouter from './src/routes/songRoute.js';
import connectDB from './src/config/mongodb.js'
import connectCloudinary from './src/config/cloudinary.js';
import albumRouter from './src/routes/albumRoute.js';

// app configuration
const app = express();
const port = process.env.PORT || 4000;
connectDB();
connectCloudinary();
// app middleware
app.use(express.json()); 
app.use("/api/song", songRouter);
app.use("/api/album", albumRouter)
app.use(cors());

// app route
app.get('/', (request, response) => response.send("API is WORKING")); 

app.listen(port, () => console.log(`Server is started on port ${port}.`));

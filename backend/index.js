import express from 'express'
import { MONGO_URL, PORT } from './config.js';
import mongoose from 'mongoose';
import booksRoute from './routers/booksRoutes.js'
import cors from 'cors'


const app = express();

app.use(cors())



// middle ware

app.use(express.json())

app.listen(PORT, ()=>{
    console.log(`App is listening to port : ${PORT}`);
})

mongoose.connect(MONGO_URL)
    .then(()=>{
        console.log('App connected to database');
    })
    .catch((err)=>{
        console.log(err)
    })


//route

app.use('/books', booksRoute)
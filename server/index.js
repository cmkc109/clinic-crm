import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import apiRoute from './routes/api.js'

const app = express();
dotenv.config();

app.use(cors());
app.use('/api', apiRoute)

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECT_DB, { useNewUrlParser: true, useUnifiedTopology: true},
 () => console.log('database connected'))

app.get('/healthcheck', async (req,res) => {
    try {
        res.send("Healthy")
    } catch(error) {
        res.sendStatus(404)
    }
});

app.listen(PORT, () => console.log( `Server connected on port ${PORT}`))
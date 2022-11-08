import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

const app = express();

app.use(cors())

const PORT = process.env.PORT || 5000;

app.get('/healthcheck', async (req,res) => {
    try {
        res.send("Healthy")
    } catch(error) {
        res.sendStatus(404)
    }
});

app.listen(PORT, () => console.log( `Server connected on port ${PORT}`))
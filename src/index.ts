import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import dbConnect from './config/mongo';

import { apiRoutes } from './v1/routes'
//* Load environment variables from .env file
dotenv.config();

//* Create an Express application
const app = express();

//* Middleware to parse JSON bodies
app.use(express.json());

app.use(cors());
app.use('/api/v1', apiRoutes);


//* Connect to the MongoDB database and start the server
dbConnect().then(() => {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`Database connected successfully ✅✅ on port ${PORT}`);
    });
}).catch(err => {
    console.error('Database connection failed: ❌', err);
});

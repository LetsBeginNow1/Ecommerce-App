import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoute.js'
import cors from 'cors';

// configure env
dotenv.config();

// database config
connectDB();

// rest object
const app = express();

// middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// routes
app.use('/api/v1/auth', authRoutes);

// rest api
app.get("/", (req,res) => {
    res.send("<h1>Welcome to eCommerce platform</h1>")
});

// PORT
const PORT=process.env.PORT || 8080;

// listen 

app.listen(PORT, () => {
    console.log(`Server is runnning on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan.white);
});
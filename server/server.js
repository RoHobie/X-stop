import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/mongodb.js';

// App setup
const app = express();
const PORT = process.env.PORT || 5000;
connectDB();

// Middleware
app.use(express.json());
app.use(cors());

// api endpoints
app.get('/', (req, res) => {
  res.send('Welcome to the X-stop API');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
const dotenv = require('dotenv').config;
const express = require('express');
const cors = require('cors');
const colors = require('colors');
const {errorHandler} = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const ticketRoutes = require('./routes/ticketRoutes');
const PORT = process.env.PORT || 8000;

const app = express()

connectDB()



app.use(express.json())
app.use(express.urlencoded({ extended: false}))
app.use(cors());

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Hello'});
})

app.use('/api/users', userRoutes);
app.use('/api/tickets', ticketRoutes);

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server started`));
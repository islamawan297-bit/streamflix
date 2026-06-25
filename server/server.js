require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors');
const connectDB = async () => {
    try {
        const mongoose = require('mongoose');
        const conn = await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/streamflix');
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Database Connection Error: ${error.message}`);
        // Do not crash the server in dev mode if MongoDB is not running locally yet,
        // just print error to console so user knows to run mongod.
    }
};

const app = express();

// Connect to Database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve Static Uploads
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/movies', require('./routes/movies'));
app.use('/api/mylist', require('./routes/mylist'));

// Serve Frontend Client files on port 5000 directly
app.use(express.static(path.join(__dirname, '../client')));

// Catch-all to serve frontend index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/index.html'));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running in production mode on port ${PORT}`);
});

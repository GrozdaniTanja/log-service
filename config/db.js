// db.js
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/logDB', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to MongoDB database');
    } catch (error) {
        console.error('Connection error:', error);
        process.exit(1); // Exit with failure
    }
};

module.exports = connectDB;

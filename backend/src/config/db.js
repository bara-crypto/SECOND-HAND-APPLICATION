const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    try {
        const localUri = `${process.env.MONGODB_LOCAL}/${process.env.MONGODB_LOCAL_DB_NAME}`;
        const remoteUri = process.env.MONGODB_REMOTE;
        
        console.log('Attempting to connect to MongoDB...');
        
        // try {
        //     await mongoose.connect(remoteUri, {
        //         serverSelectionTimeoutMS: 5000,
        //     });
        //     console.log('Connected to Remote MongoDB Atlas');
        //     return;
        // } catch (remoteError) {
        //     console.log('Remote connection failed, trying local MongoDB...');
        // }
        
        await mongoose.connect(localUri);
        console.log('Connected to Local MongoDB');
        
    } catch (error) {
        console.error('MongoDB connection error:', error.message);
        process.exit(1);
    }
};

mongoose.connection.on('disconnected', () => {
    console.log('MongoDB disconnected');
});

mongoose.connection.on('error', (err) => {
    console.error('MongoDB error:', err);
});

module.exports = connectDB;

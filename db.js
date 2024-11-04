const mongoose = require('mongoose');

// Define the MongoDB connection URL......

// const mongooseURL = 'mongodb://localhost:27017/online_shopping'
 const mongooseURL = 'mongodb+srv://pallbaibarik:manager@cluster0.cj4j0.mongodb.net/'
// const mongooseURL = 'mongodb+srv://pallbaibarik:t7e1ZJHmYq5ZjHAl@cluster0.ezihr.mongodb.net/online_shopping?retryWrites=true&w=majority';


// Set up the MongoDB connection.......

mongoose.connect(mongooseURL, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true
});

// Get the default connection......
const db = mongoose.connection;

// Define event listeners for the database connection.....
db.on('connected', () => {
    console.log('Connected to MongoDB server');
});

db.on('error', (err) => {
    console.error('Error connecting to MongoDB server:', err);
});

db.on('disconnected', () => {
    console.log('Disconnected from MongoDB server');
});

// Export the database connection
module.exports = db;

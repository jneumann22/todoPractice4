const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/newFetcher')


const connection = mongoose.connection;


connection.on('error', console.error.bind(console, 'MongoDB connection error:'));
connection.once('open', () => console.log('connected to MONGOdb Bavvvvy'))
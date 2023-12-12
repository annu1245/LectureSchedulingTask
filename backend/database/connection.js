//Import the mongoose module
const mongoose = require('mongoose');

//Set up default mongoose connection
const mongoDbUrl = 'mongodb://127.0.0.1:27017/ProjectTest';
mongoose.connect(mongoDbUrl, { useNewUrlParser: true, useUnifiedTopology: true });

//Get the default connection
const db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)

db.on('connected', function(){
    console.log("Mongoose default connection is open to ", mongoDbUrl);
 });

db.on('error', function(err){
     console.log("Mongoose default connection has occured "+err+" error");
});

db.on('disconnected', function(){
     console.log("Mongoose default connection is disconnected");
});

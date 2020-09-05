// This file controls the backend (server) functionality of the "space-place" application

const express = require("express");
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const app = express();

// Establish connection to MongoDB
const connectionString = 'mongodb+srv://space-place-admin:y8opHFb6aR7f@space-place.eqtit.azure.mongodb.net/<dbname>?retryWrites=true&w=majority';

MongoClient.connect(connectionString, {
        useUnifiedTopology: true
    },
    function (err, client) {
        if (err) {
            return console.error(err);
            // const db = client.db('test');
        } else {
            console.log('Application now connected to MongoDB');
            const db = client.db('users')
            const collection = db.collection('user');


            // app.use( /* ... */ )
            // app.post( /* ... */ )
            // app.listen( /* ... */ )
        }
    });

const port = 3000;
app.listen(port, function () {
    console.log(`Server started and listening on ${port}`);
    console.log(`Current build is viewable at http://localhost:${port}/`);
});

app.use(bodyParser.urlencoded({
    extended: true
}));

// Connect form questions to MongoDB
app.get("/", function (req, res) {
    res.sendFile(__dirname + "/public/index.html");
});

app.post('/Question01', function (res, req) {
    // 
});
app.post('/Question02', function (res, req) {
    // 
});
app.post('/Question03', function (res, req) {
    // 
});
app.post('/Question04', function (res, req) {
    // 
});
app.post('/Question05', function (res, req) {
    // 
});
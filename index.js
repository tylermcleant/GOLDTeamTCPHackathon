// This file controls the backend (server) functionality of the "space-place" application

const express = require("express");
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const app = express();

// const connectionString = ;

const port = 3000;
app.listen(port, function () {
    console.log(`Server now listening on ${port}`);
    console.log(`Site viewable at http://localhost:${port}/`);
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
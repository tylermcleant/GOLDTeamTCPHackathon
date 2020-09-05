// This file controls the backend (server) functionality of the "space-place" application

const express = require("express");
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const app = express();

// Establish connection to MongoDB
const connectionString = 'mongodb+srv://space-place-admin:y8opHFb6aR7f@space-place.eqtit.azure.mongodb.net/space-place?retryWrites=true&w=majority';


MongoClient.connect(connectionString, {
        useUnifiedTopology: true
    })
    .then(client => {
        console.log('Application now connected to MongoDB');
        const db = client.db('space-place');
        const usersCollection = db.collection('users')

        // Middleware
        app.set('view engine', 'html')
        app.use(bodyParser.urlencoded({
            extended: true
        }))
        app.use(bodyParser.json())
        app.use(express.static('public'))

        const port = 3000;
        app.listen(port, function () {
            console.log(`Server started and listening on ${port}`);
            console.log(`Current build is viewable at http://localhost:${port}/`);
        });

        // HTML Route
        app.get('/', (req, res) => {
            db.collection('username')
            res.render('index.html', {})
        });

        app.post('/username', (req, res) => {
            usersCollection.insertOne(req.body)
                .then(result => {
                    console.log(result)
                    res.render('index.html', {})
                })
                .catch(error => console.error(error))
        })
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
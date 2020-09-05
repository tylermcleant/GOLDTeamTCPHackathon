// This file controls the backend (server) functionality of the "space-place" application

const express = require("express");
const app = express();

console.log("Console connection successful");

const port = 3000;
app.listen(port, function () {
  console.log(`Server now listening on ${port}`);
  console.log(`Site viewable at http://localhost:${port}/`);
});

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

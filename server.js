const express = require("express");

const app = express();

app.get("/", function (req, res) {
  res.send("Welcome to webpage");
});

app.get("/about", function (req, res) {
  res.send("This is an about page");
});

app.get("/hobbies", function (req, res) {
  res.send("I like to play videogames");
});

app.listen(3000, function () {
  console.log("Server is up omn port 3000");
});

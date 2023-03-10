//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const homeStartingContent = "In here life is beautiful but we will give you notes, constructive notes.";
const rehearsalsContent = "Never ending rehearsals.";
const notesContent = "Never ending notes.";

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res){
  res.render("home", {startingContent: homeStartingContent})

});

app.get("/rehearsals", function(req, res){
  res.render("rehearsals", {startingContent: rehearsalsContent});
})

app.get("/notes", function(req, res){
  res.render("notes", {startingContent: notesContent});
})








app.listen(3000, function() {
  console.log("Server started on port 3000");
});

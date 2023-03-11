//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const { title } = require("process");

const homeStartingContent = "This is where the show notes will appear.";
const rehearsalsContent = "In here, we're always rehearsing.";
const notesContent = "Cute notes.";

const app = express();
const posts = [];
const workItems = [];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res){
  res.render("home", {
    startingContent: homeStartingContent,
    posts: posts
  })
});

app.get("/rehearsals", function(req, res){
  res.render("rehearsals", {startingContent: rehearsalsContent});
});

app.get("/notes", function(req, res){
  res.render("notes", {
    startingContent: notesContent,
    listTitle: "Notes",
    newListItems: workItems
  });
});

app.post("/", function(req, res){

  const item = req.body.newItem;

    workItems.push(item);
    res.redirect("/notes");
 
});

app.get("posts/:post")

app.get("/compose", function(req, res){
  res.render("compose");
});

app.post("/compose", function(req, res){
  const post = {
    title : req.body.postTitle,
    content : req.body.postBody
  }
  posts.push(post);
  res.redirect("/")
});









app.listen(3000, function() {
  console.log("Server started on port 3000");
});

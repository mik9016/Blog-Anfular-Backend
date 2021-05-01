const router = require("express").Router();
const Post = require("../models/Post");
const newPost = require('../models/NewPost');

router.get("/", async (req, res, next) => {
  try {
    res.send("connected with createPost");
  } catch {
    res.status(500).send("unable to connect to database");
  }
});

router.post("/", async (req, res, next) => {
  
  const reqPost = {
    mainTitle: "",
    mainSubtitle: "",
    photo: "",
    paragraphs: []
  };

  req.body.map(el => {
    return(
      reqPost.mainTitle = el.mainTitle,
      reqPost.mainSubtitle = el.mainSubtitle,
      reqPost.photo = el.photo,
      reqPost.paragraphs = el.paragraphs
    )  
 })
  
  const post = new newPost(reqPost);

    try {
      await post.save();
      await res.send(post);
    } catch (err) {
      res.status(500).send(err);
    }
});

module.exports = router;

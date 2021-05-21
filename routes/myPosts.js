const router = require("express").Router();
const myPosts = require("../models/NewPost");
const checkAuth = require("../middleware/check-auth");
const fs = require("fs");
const path = require('path');

router.get("/", async (req, res, next) => {
  try {
    const post = await myPosts.find();
    res.send(post);
  } catch {
    res.send("unable to connect to database");
  }
});

router.get("/:id", async (req, res, next) => {
  const post = await myPosts.findById(req.params.id);
  res.send(post);
});

router.delete("/:id",checkAuth, async (req, res, next) => {
  try {
    const postId = req.params.id;
    const post = await myPosts.findById(postId);

    const trace = await post.photo
    const file = await path.join(__dirname,'..',trace);
   
    fs.unlink(file, err => console.log(err));
    await myPosts.findByIdAndDelete(postId).then(res => console.log(res));

    res.status(200).json({message: 'Post deleted'});
  } catch {err =>{
       if (err) {
      res.send(err);
    }
  }
   
  }
});

module.exports = router;

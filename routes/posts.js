const router = require("express").Router();
const Post = require("../models/Post");

router.get("/", async (req, res, next) => {
  try {
    const post = await Post.find();

    console.log(post);
    res.send(post);
  } catch {
    res.send("unable to connect to database");
  }
});

router.get("/:id", async (req, res, next) => {
  const post = await Post.findById(req.params.id);
  res.send(post);
});

module.exports = router;

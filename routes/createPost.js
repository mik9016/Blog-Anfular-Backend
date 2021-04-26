const router = require("express").Router();
const Post = require("../models/Post");

router.get("/", async (req, res, next) => {
  try {
    res.send("connected with createPost");
  } catch {
    res.status(500).send("unable to connect to database");
  }
});

router.post("/", async (req, res, next) => {
  const post = new Post({
    photo: req.body.photo,
    title: req.body.title,
    subtitle: req.body.subtitle,
    text: req.body.text,
  });

    try {
      await post.save();
      const lastMessage = await Post.findOne(post._id);

      await res.send(lastMessage);
    } catch (err) {
      res.status(500).send(err);
    }
});

module.exports = router;

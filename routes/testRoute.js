const router = require("express").Router();
const Image = require("../models/ImgUpload");
const newPost = require("../models/NewPost");

const imgArr = [];
router.post("/", async (req, res, next) => {
  // const url = req.protocol + "://" + req.get("host");

  // const img = new Image({
  //   photo: url + "/images/" + req.file.filename,
  // });
  try {
    const img = new Image({
      photo: req.file.path,
    });
    // console.log(req.file.filename)

    img.save();

    await newPost.find({ mainTitle: "dsa" }).then(res => {console.log(res)});
  

    res.send(img);
  } catch {
    res.status(500).send("unable to connect to database");
  }
});

module.exports = router;

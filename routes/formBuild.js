const router = require("express").Router();
const Image = require("../models/ImgUpload");
const newPost = require("../models/NewPost");

router.post("/", async (req, res, next) => {
  try{

      const reqFile = req.file
      console.log(req.body);
      res.send(reqFile)
  }
  catch{res.status(500).send("unable to connect to database");}
});


module.exports = router;
  
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
require("dotenv").config();
const multer = require("multer");

const app = express();
// handling image upload
const MIME_TYPE_MAP = {
  "image/png": "png",
  "image/jpeg": "jpg",
  "image/jpg": "jpg",
};

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const isValid = MIME_TYPE_MAP[file.mimetype];
    let error = new Error("Invalid Mime Type");
    if (isValid) {
      error = null;
    }
    cb(error, "images");
  },
  filename: (req, file, cb) => {
    const name = file.originalname.toLowerCase().split(".").join("-");
    const ext = MIME_TYPE_MAP[file.mimetype];
    cb(null, name + "-" + Date.now() + "." + ext);
  },
});

const PORT = process.env.PORT || 4000;
const URL = process.env.URL;
// Connection with DB
mongoose.connect(
  URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("connected with DB");
  }
);

//ROUTES
const myPosts = require("./routes/myPosts");
const createPostRoute = require("./routes/createPost");
const login = require("./routes/login");
const register = require("./routes/register");

app.use(cors());

app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "/images")));

app.use("/myposts", myPosts);
app.use(
  "/createpost",
  multer({ storage: storage }).single("photo"),
  createPostRoute
);
app.use("/login", login);
app.use("/register", register);

app.listen(PORT, () => {
  console.log(`listening to the port:  ${PORT}`);
});

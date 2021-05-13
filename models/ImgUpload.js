const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  photo: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("ImgUpload", schema);

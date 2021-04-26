const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  author:{
    type:String,
    required: true,
  },
  photo: {
    type: String,
    required: true,
  },
  title:{
      type:String,
      required: true,
      max: 255,
      min:1
  },
  subtitle:{
      type: String,
      required: true,
      max: 255,
      min: 6
  },
  text:{
      type:String,
      required: true,
      max:1500,
      min:1
  },
  date:{
      type: Date,
      default: Date.now
  }
});

module.exports = mongoose.model("Post", schema);
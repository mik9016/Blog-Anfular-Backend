const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    author: {
      type: String,
      required: true,
    },
    mainTitle: {
    type: String,
    required: true,
    max: 50,
    min: 1,
  },
  mainSubtitle: {
    type: String,
    max: 50,
    min: 1,
  },
  photo:{
    type: String,
    required: true
  },
  mainText:{
    type: String,
    required: true
  },
  date:{
    type: Date,
    default: Date.now
}
});


module.exports = mongoose.model("NewPost", schema);
const mongoose = require("mongoose");

const schema = new mongoose.Schema({
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
  paragraphs:{
    type: Array,
    required:false
  },
  date:{
    type: Date,
    default: Date.now
}
});


module.exports = mongoose.model("NewPost", schema);
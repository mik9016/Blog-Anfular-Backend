const mongoose = require("mongoose");
const uniqueValidator = require('mongoose-unique-validator');

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 1,
    max: 255
  },
  email:{
      type:String,
      required: true,
      max: 255,
      min:6,
      unique: true
  },
  password:{
      type: String,
      required: true,
      max: 255,
      min: 6
  },
  date:{
      type: Date,
      default: Date.now
  }
});

schema.plugin(uniqueValidator);

module.exports = mongoose.model("Register", schema);
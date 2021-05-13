const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    max: 255,
    min: 3,
    
  },
  password: {
    type: String,
    required: true,
    max: 255,
    min: 3,
  },
});

module.exports = mongoose.model("Login", schema);

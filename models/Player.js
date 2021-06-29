const mongoose = require("mongoose");

const Player = new mongoose.Schema({
  name: {
    type: String,
  },
});

module.exports = mongoose.model("Player", Player);

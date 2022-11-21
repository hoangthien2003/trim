const mongoose = require("mongoose");

const projectsSchema = new mongoose.Schema({
  name: String,
  avatar: String,
  category: String,
  numberProgressTask: Number,
  numberCompleteTask: Number,
  description: String,
  privacy:String,
  members: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  lovers: [{
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    isLove: Boolean
  }]
  ,
  createdAt: {
    type: Date,
    default: Date.now()
  }
});

module.exports = mongoose.model("Project", projectsSchema);

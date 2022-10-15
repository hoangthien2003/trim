import mongoose from "mongoose";

const usersSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    min: 6,
    max: 255,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    min: 6,
    max: 225,
  },
  password: {
    type: String,
    required: true,
    min: 6,
    max: 255,
  },
  photoURL: {
    type: String,
    default: "https://www.meme-arsenal.com/memes/9f0935ebd265b299eaa1480ccec28052.jpg"
  },
  uid: {
    type: String,
    required: true,
    unique: true,
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
});

export default mongoose.model("User", usersSchema);

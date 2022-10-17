import "dotenv/config";
import express from "express";
const projectRouter = express.Router();
import Project from '../model/Project.js';
import verifyToken from "../middleware/auth.js"




projectRouter.get("/recent", verifyToken, async (req, res) => {
  try {
    const projects = await Project.find({ members: req.userId });
    res.json({ success: true, projects })
  } catch (err) {
    console.log(err);
  }
})




projectRouter.get("/favorite", verifyToken, async (req, res) => {
  try {
    const projects = await Project.find({ lovers: { _id: req.userId, isLove: true } });
    res.json({ success: true, projects })
  } catch (err) {
    console.log(err);
  }
})




projectRouter.patch("/add-favorite", verifyToken, async (req, res) => {
  const { idProject } = req.body;
  try {
    const foundProject = await Project.findOne({ _id: idProject });
    const updatedLovers = foundProject.lovers.map((member) => {
      if (member._id.equals(req.userId)) {
        console.log("hahahah");
        member.isLove = true;
        return member;
      }
      else return member
    })
    console.log(updatedLovers);
    await Project.findOneAndUpdate({ _id: idProject }, { $set: { "lovers": updatedLovers } })
    res.json({ success: true, message: "Add Favorite Successfully" })
  } catch (err) { console.log(err); }
})




projectRouter.post("/add-project", verifyToken, async (req, res) => {
  const { name, members, avatar, category, description } = req.body;
  console.log(members);
  const lovers = members.map((member) => {
    return {
      _id: member,
      isLove: false
    }
  })
  try {
    const newProject = new Project({
      name,
      avatar,
      category,
      description,
      members,
      numberCompleteTask: 0,
      numberProgressTask: 0,
      lovers
    })

    await newProject.save();
    res.json({ success: true, message: "Add Project Successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, message: "Internal Server Error" })
  }
})




export default projectRouter;

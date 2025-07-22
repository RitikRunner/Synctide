import express from "express";
import { deletePost, getPost, getPosts, likePost } from "../controller/post.controller";
import upload from "../middleware/upload.middleware";

const router = express.Router();

//public routes
router.get("/", getPosts)
router.get("/:postId", getPost);
router.get("/user/:username", getUserPost);


/// protected router

router.post("/", protectRoute,upload.single("image"),createPost);
router.post("/:postid/like", protectRoute, likePost);
router.delete("/:postId", protectRoute, deletePost);

export default router;
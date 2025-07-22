import express from "express";
import { deletePost, getPost, getPosts, likePost, getUserPosts, createPost } from "../controller/post.controller.js";
import upload from "../middleware/upload.middleware.js";
import { protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

//public routes
router.get("/", getPosts)
router.get("/:postId", getPost);
router.get("/user/:username", getUserPosts);


/// protected router

router.post("/", protectRoute,upload.single("image"),createPost);
router.post("/:postid/like", protectRoute, likePost);
router.delete("/:postId", protectRoute, deletePost);

export default router;
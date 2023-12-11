const express = require('express')
const { getPost, createPost, deletePost, likeUnlikePost, replyToPost, getFeedPost, getUserPosts } = require('../controller/postController')
const protectRoute = require('../middleware/protectRoute')
const router = express.Router()

router.get("/feed", protectRoute, getFeedPost)
router.get("/:id", getPost)
router.post("/create", protectRoute, createPost)
router.delete("/:id", protectRoute, deletePost)
router.put("/like/:id", protectRoute, likeUnlikePost)
router.put("/reply/:id", protectRoute, replyToPost)
router.get('/user/:username', getUserPosts)

module.exports = router
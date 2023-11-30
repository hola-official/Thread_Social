const express = require('express')
const { getPost, createPost } = require('../controller/postController')
const protectRoute = require('../middleware/protectRoute')
const router = express.Router()

router.get("/:id", getPost)
router.post("/create", protectRoute, createPost)

module.exports = router